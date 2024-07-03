/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Input from "../atoms/Input";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ addTodo, handleShow, handleClose }) => {
  const [task, setTask] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    status: "Pendiente",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(task);
    handleClose(); // Cerrar el modal después de enviar el formulario
  };

  return (
    <>
      <Modal
        show={handleShow}
        onHide={handleClose}
        animation
        className="bg-dark "
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Input
              label="Title"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
            <Input
              label="Description"
              name="description"
              value={task.description}
              onChange={handleChange}
            />
            <Input
              label="Status"
              name="status"
              value={task.status}
              onChange={handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateTask;
