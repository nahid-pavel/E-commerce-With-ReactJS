import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../redux/actions/authActions";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn")) {
      history.push("/");
    }
  }, []);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    let res = loginUser({ email, password });
    if (res) {
      setEmail("");
      setPassword("");
      history.push("/");
    } else {
      setError("Invalid username/password");
    }
  };
  return (
    <Container>
      <Row className="justify-content-md-center py-3">
        <Col xs={12} md={4}>
          <h2>Login</h2>
          <Form onSubmit={onSubmitHandler}>
            {error && <p className="text-danger">{error}</p>}
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="d-flex justify-content-between"
              controlId="submit"
            >
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Nav.Link as={Link} to="/register" className="text-success">
                New Customer ? Register Here.
              </Nav.Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(connect(null)(Login));
