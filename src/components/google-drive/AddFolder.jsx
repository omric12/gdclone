import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

import { FaFolderPlus } from 'react-icons/fa';
import { database } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function AddFolder({ currentFolder }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const { currentUser } = useAuth();

  // Modal behavior
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  // Submit new folder
  function handleSubmit(e) {
    e.preventDefault();

    if (currentFolder == null) return;
    // Create new database folder
    database.folders.add({
      name: name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      // path,
      createdAt: database.getCurrentTimestamp(),
    });
    setName('');
    closeModal();
  }

  return (
    <>
      <Button onClick={openModal} variant='outline-success' size='sm'>
        <FaFolderPlus />
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={closeModal}>
              Close
            </Button>
            <Button variant='success' type='submit'>
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
