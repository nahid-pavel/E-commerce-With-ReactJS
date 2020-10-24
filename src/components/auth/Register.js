import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { registerUser } from "../../redux/actions/authActions";

const Register = ({ history }) => {
  if (sessionStorage.getItem("isLoggedIn")) {
    history.push("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    registerUser({ id: Date.now(), username, email, password });
    setEmail("");
    setUsername("");
    setPassword("");
    history.push("/login");
  };
  return (
    <Container>
      <Row className="justify-content-md-center py-3">
        <Col xs={12} md={4} style={{ width: "18rem" }}>
          <h2>Register</h2>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="d-flex justify-content-between"
              controlId="submit"
            >
              <Button variant="secondary" type="submit">
                Register
              </Button>
              <Nav.Link as={Link} to="/login" className="text-success">
                Already Customer? Log in Here
              </Nav.Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Register);
