import AddFolder from './AddFolder';
import BreadCrumbs from './BreadCrumbs';
import { Container } from 'react-bootstrap';
import Folder from '../google-drive/Folder';
import NavbarComp from './Navbar';
import React from 'react';
import { useFolder } from '../../hooks/useFolder';
import { useParams } from 'react-router-dom';

function Dashboard() {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);
  // console.log(folder);
  return (
    <>
      <NavbarComp />
      <Container fluid>
        <div className='d-flex align-items-center'>
          <BreadCrumbs currentFolder={folder} />
          <AddFolder currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: '250px' }}
                className='p-2'>
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}{' '}
      </Container>
    </>
  );
}

export default Dashboard;
