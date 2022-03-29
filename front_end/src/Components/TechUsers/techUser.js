import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { Breadcrumb, Card, Container, Button } from "react-bootstrap";

function TechUsers() {
  // const showAllTechUsers =
  return (
    <div className="techback">
      <div header className="techUser-header">
        <Breadcrumb>
          <Breadcrumb.Item>About Us</Breadcrumb.Item>
          <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
          <Breadcrumb.Item>Sign In</Breadcrumb.Item>
          <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="techUser-body">
        <Card className="mb-3" style={{ color: "#000" }}></Card>

        <div className="inTech">
          <Container>
            <Card className="mb-3" style={{ color: "#000" }}>
              <Card.Body>
                <Card.Title>Card Example</Card.Title>
                <Card.Text>
                  This is the text for the card
                  <br />
                  <Button>See More</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default TechUsers;
