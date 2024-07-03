/* eslint-disable react/prop-types */
import { ListGroup } from "react-bootstrap";
import Task from "../molecules/Task";

const TaskList = ({ todos, onEdit }) => {
  return (
    <ListGroup variant="flush" className="overflow-auto bg-dark">
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id} className="bg-dark border-0">
          <Task todo={todo} onEdit={onEdit} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
