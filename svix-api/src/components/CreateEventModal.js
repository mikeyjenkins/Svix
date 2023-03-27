import { React, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const CreateEventModal = ({show, setShowCreateModal, createEvent }) => {
  const [newEventObject, setNewEventObject] = useState({
    name: "",
    description: "",
    featureFlag: "",
  });

  const handleChange = (e) => {
    setNewEventObject({ ...newEventObject, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={show} onHide={() => setShowCreateModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create Event Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form autoComplete="off">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Event Type Name</Form.Label>
            <Form.Control
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              onChange={(e) => handleChange(e)}
              placeholder="Enter Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Feature Flag (optional)</Form.Label>
            <Form.Control
              name="featureFlag"
              onChange={(e) => handleChange(e)}
              placeholder="Enter Feature Flag"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button id="primary_btn" onClick={() => createEvent(newEventObject)}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateEventModal;
