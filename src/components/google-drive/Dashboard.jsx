import AddFolder from './AddFolder';
import { Container } from 'react-bootstrap';
import NavbarComp from './Navbar';
import React from 'react';
import { useFolder } from '../../hooks/useFolder';

function Dashboard() {
  const { folder } = useFolder();
  return (
    <>
      <NavbarComp />
      <Container fluid>
        <AddFolder currentFolder={folder} />
      </Container>
    </>
  );
}

export default Dashboard;
