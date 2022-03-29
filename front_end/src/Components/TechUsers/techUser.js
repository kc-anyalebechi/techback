import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { Breadcrumb, Card, Container, Button } from "react-bootstrap";
import { techSeedData } from "../../SeedData/techSeedData";

function TechUsers() {
  const showAllTechUsers = Math.floor(Math.random() * techSeedData.length);

  console.log(Math.random());
  console.log(techSeedData.length);

  return (
    <div className="techUser">
      <div header className="techUser-header">
        <Breadcrumb>
          <Breadcrumb.Item>About Us</Breadcrumb.Item>
          <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
          <Breadcrumb.Item>Sign In</Breadcrumb.Item>
          <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Container>
        <div className="techUser-body">
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Body>
              <Card.Title>
                {techSeedData[showAllTechUsers].expertise}
                <br />
              </Card.Title>
              <Card.Text>
                Name: {techSeedData[showAllTechUsers].full_name} <br />
                Location: {techSeedData[showAllTechUsers].location}
                <br />
                LinkedIn: {techSeedData[showAllTechUsers].linkedIn}
                <br />
                Contact: {techSeedData[showAllTechUsers].email}
                <br />
                Offering: {techSeedData[showAllTechUsers].offer}
                <br />
              </Card.Text>
              {<Button>Select</Button>}
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default TechUsers;
