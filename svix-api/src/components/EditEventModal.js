import {React, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



export const EditModal = ({event, setShowEditModal, show, updateEvent, deleteEvent}) => {
    const [newEventObject, setNewEventObject] = useState({
        name: event.name,
        description: event.description,
        featureFlag: event.featureFlag,    })

    const handleChange = (e) => {
        setNewEventObject({...newEventObject, [e.target.name]:e.target.value})
    }

    return (
        <Modal show={show} onHide={() => setShowEditModal(false)}>
            <Modal.Header closeButton>
            <Modal.Title>{event.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form autoComplete='off'>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={newEventObject.description} name="description" onChange={(e) => handleChange(e)} placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Feature Flag <i className="text-muted">(optional)</i></Form.Label>
                        <Form.Control value={newEventObject.featureFlag || ""} name="featureFlag" onChange={(e) => handleChange(e)} placeholder="Enter Feature Flag" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button id='primary_btn' onClick={() => updateEvent(newEventObject)}>Update</Button>
                <Button className='btn btn-danger' onClick={() => deleteEvent(event)}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal;