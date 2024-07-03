/* eslint-disable react/prop-types */
import { useState } from "react";
import { Badge, Button, Card, Form, Stack } from "react-bootstrap";
import EditTask from "../molecules/edittask";

const Task = ({ todo, onEdit }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  return (
    <>
      <Card className="mb-3 rounded " bg="secondary" text="white">
        <Card.Body>
          <Stack direction="horizontal" gap={2} className="flex-grow-1">
            <h3 className="p-0">{todo.title}</h3>
            <Badge bg="dark">{todo.status}</Badge>
            <Button
              variant="dark"
              className="btn btn-primary p-1 ms-auto"
              onClick={handleOpenEditModal}
            >
              Editar
            </Button>
          </Stack>
          <Card.Text>
            <Stack direction="horizontal" gap={2}>
              <div>{todo.description}</div>
              <Form.Check
                reverse
                className="ms-auto"
                checked={todo.status === "Completada"}
                value={todo.status}
                onChange={() => onEdit({ ...todo, status: "Completada" })}
                name="group1"
                type="checkbox"
              />
            </Stack>
          </Card.Text>
        </Card.Body>
      </Card>
      {showEditModal && (
        <EditTask
          todo={todo}
          onSave={onEdit}
          handleShow={handleOpenEditModal}
          handleClose={handleCloseEditModal}
        />
      )}
    </>
  );
};

export default Task;
