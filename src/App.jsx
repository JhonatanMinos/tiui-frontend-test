import { useEffect, useState } from "react";
import { Container, Button, Card, Stack, Form } from "react-bootstrap";
import TaskList from "./components/organisms/TaskList";
import CreateTask from "./components/molecules/creatertask";
import Layout from "./components/pages/Layout";

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    setShowForm(false);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const handleEditTodo = (editedTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "pending") return todo.status === "Pendiente";
    if (filter === "completed") return todo.status === "Completada";
    return true;
  });
  return (
    <Layout>
      <Container>
        <Card
          bg="dark"
          text="white"
          className="rounded border-0"
          style={{ width: "90vw", height: "90vh" }}
        >
          <Card.Header className="d-flex justify-content-between border-1 border-white">
            <Card.Title className="justify-content-between border-1 border-white items-center">
              <Stack direction="horizontal" gap={2}>
                <h3 className="p-1">To-do tiui</h3>
                <Button
                  variant="primary"
                  className="btn btn-primary p-1 ms-auto"
                  onClick={handleShow}
                >
                  Crear Tarea
                </Button>
              </Stack>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <Form.Select
                aria-label="Aplicar filtro"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">Todas</option>
                <option value="pending">Pendiente</option>
                <option value="completed">Completada</option>
              </Form.Select>
            </div>
            <TaskList todos={filteredTodos} onEdit={handleEditTodo} />
          </Card.Body>
        </Card>
      </Container>
      {showForm && (
        <CreateTask
          addTodo={handleAddTodo}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      )}
    </Layout>
  );
}

export default App;
