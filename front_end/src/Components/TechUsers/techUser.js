import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Container, Button } from "react-bootstrap";
import { techSeedData } from "../../SeedData/techSeedData";
import "./techUser.css";

function TechUsers() {
  const showAllTechUsers = Math.floor(Math.random() * techSeedData.length);
  console.log(showAllTechUsers);

  if (techSeedData) {
    return (
      <div className="techUser">
        <div header className="techUser-header">
          <p>
          Meet the experts in thier feild...
          </p>
        </div>

        <Container>
          <div className="techUser-body">
            <Card className="mb-3" style={{ color: "#000" }}>
              <Card.Body>
                <Card.Title>
                  Expertise: {techSeedData[showAllTechUsers].expertise}
                  <hr />
                </Card.Title>
                <Card.Text>
                  <strong>Name:</strong>{" "}
                  {techSeedData[showAllTechUsers].full_name} <br />
                  <strong>Location:</strong>{" "}
                  {techSeedData[showAllTechUsers].location}
                  <br />
                  <strong>LinkedIn:</strong>{" "}
                  {techSeedData[showAllTechUsers].linkedIn}
                  <br />
                  <strong>Contact:</strong>{" "}
                  {techSeedData[showAllTechUsers].email}
                  <br />
                  <strong>Offering:</strong>{" "}
                  {techSeedData[showAllTechUsers].offer}
                  <br />
                </Card.Text>
                {<Button>Select</Button>}
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default TechUsers;
