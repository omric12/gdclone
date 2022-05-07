import AddFolder from './AddFolder';
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
        <AddFolder currentFolder={folder} />
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
