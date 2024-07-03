/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditTask = ({ todo, onSave, handleShow, handleClose }) => {
  const [editedTask, setEditedTask] = useState({ ...todo });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    onSave(editedTask);
    handleClose(); // Cerrar el modal después de guardar cambios
  };

  return (
    <Modal show={handleShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSaveChanges}>
          <Form.Group controlId="formTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={editedTask.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={editedTask.status}
              onChange={handleChange}
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Completada">Completada</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTask;
