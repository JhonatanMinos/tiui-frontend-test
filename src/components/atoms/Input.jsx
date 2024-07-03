import { Form } from "react-bootstrap";

/* eslint-disable react/prop-types */
const Input = ({ label, name, placeholder, value, onChange }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default Input;
