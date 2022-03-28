import React from "react";
import TechUser from "./Components/TechUsers/techUser";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import {
  Button,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";

function App() {
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
      <div className="App-body">
        {/* {/* Home page: 
        Header  - There will be a TechBack - it  will link to the homepage
        Body - tagline "Where Engineers and the communities intersect"
        Main section - I am currently ... 
        There will be two buttons 
        */}
        <div className="button">
          <Button>In Tech</Button>

          <Button>In the Community</Button>
        </div>

        <div>Just Browsing</div>
      </div>

      <div className="inTech">
        <Container>
          c{" "}
          <Card className="mb-3" style={{ color: "#000" }}>
            {/* <Card.Img src="https://picsum.photos/id/0/5616/3744"/> */}
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>
                This is the text for the card
                <br />
                <Button>Learn More</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>

        <Container>
          <Card className="signInForm">
            <Card.Body>
              <Card.Title>Sign-In Below</Card.Title>
            </Card.Body>
            <Form>
              <Row>
                <Col md>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@email.com"
                    />
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
                  <Button type="submit">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>

          {/* <TechUser /> */}
        </Container>
      </div>
    </div>
  );
}

export default App;
