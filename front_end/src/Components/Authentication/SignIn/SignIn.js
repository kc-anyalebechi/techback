import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function SignIn() {
  return (
    <div className="App">
      <div header className="App-header">
        <Breadcrumb>
          <Breadcrumb.Item>About Us</Breadcrumb.Item>
          <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
          <Breadcrumb.Item>Sign In</Breadcrumb.Item>
          <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
        <p>
          Welcome to TechBack. Where Technology and the Community Intersect.
        </p>
      </div>

      <Container>
        <Card className="inTech">
          <Card.Body>
            <Card.Title>Sign-In Below</Card.Title>
          </Card.Body>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                  <Form.Text className="text-muted">
                    We take your privacy very seriously
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit">Login</Button>
              </Col>
            </Row>
          </Form>
        </Card>

        {/* <TechUser /> */}
      </Container>
      </div>
  ); 
}

export default SignIn;
