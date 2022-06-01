import { useState } from "react";
import { Button } from "react-bootstrap";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [credentials, setCredentials] = useState({});

  const onFormSubmit = (credentialsObj) => {
    setCredentials(credentialsObj);
    console.log(credentials);
  };
  return (
    <Container className="text-center">
      <Form className="w-50" onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-left">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
