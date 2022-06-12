import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ROOT_FOLDER} from '../../hooks/useFolder';
import React from 'react';

export default function BreadCrumbs({currentFolder}) {
    //Breadcrumbs trail
    let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
    if (currentFolder) path = [...path, ...currentFolder.path];

    return (
        <Breadcrumb
            className='flex-grow-1 '
            listProps={{className: 'bg-white pl-0 m-0'}}>
            {path.map((folder, index) => (
                <Breadcrumb.Item
                    key={folder.id}
                    className='text-truncate d-inline-block'
                    linkAs={Link}
                    linkProps={{to: folder.id ? `/folder/${folder.id}` : '/'}}
                    style={{maxWidth: '50px'}}>
                    {folder.name}
                </Breadcrumb.Item>
            ))}
            {currentFolder && (
                <Breadcrumb.Item
                    className='text-truncate d-inline-block'
                    style={{maxWidth: '200px'}}
                    active>
                    {currentFolder.name}
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    );
}
