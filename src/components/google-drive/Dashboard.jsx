import {useLocation, useParams} from 'react-router-dom';

import AddFile from './AddFile';
import AddFolder from './AddFolder';
import BreadCrumbs from './BreadCrumbs';
import {Container} from 'react-bootstrap';
import File from './File';
import Folder from './Folder';
import Navbar from './Navbar';
import React from 'react';
import {useFolder} from '../../hooks/useFolder';

export default function Dashboard() {
    const {folderId} = useParams();
    const {state = {}} = useLocation();
    const {folder, childFolders, childFiles} = useFolder(
        folderId,
        state.folder
    );

    return (
        <>
            <Navbar/>
            <Container fluid>
                <div className='d-flex align-items-center'>
                    <BreadCrumbs currentFolder={folder}/>
                    <AddFile currentFolder={folder}/>
                    <AddFolder currentFolder={folder}/>
                </div>
                {childFolders.length > 0 && (
                    <div className='d-flex flex-wrap'>
                        {childFolders.map((childFolder) => (
                            <div
                                key={childFolder.id}
                                style={{maxWidth: '250px'}}
                                className='p-2'>
                                <Folder folder={childFolder}/>
                            </div>
                        ))}
                    </div>
                )}
                {childFolders.length > 0 && childFiles.length > 0 && <hr/>}
                {childFiles.length > 0 && (
                    <div className='d-flex flex-wrap'>
                        {childFiles.map((childFile) => (
                            <div
                                key={childFile.id}
                                style={{maxWidth: '250px'}}
                                className='p-2'>
                                <File file={childFile}/>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </>
    );
}
