import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, Card, Container, Button } from "react-bootstrap";
import { techSeedData } from "../../SeedData/techSeedData";
import "./techUser.css"

function TechUsers() {
  const showAllTechUsers = Math.floor(Math.random() * techSeedData.length);
  console.log(showAllTechUsers); 

//   let showAllTechUsers = techSeedData.map(x=>x);
//   console.log(showAllTechUsers); 
  
//   const mapAllTechUsers = techSeedData.map(x=> x);  
//   console.log(mapAllTechUsers);



  if (techSeedData) {
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
                Expertise: {techSeedData[showAllTechUsers].expertise}
                <hr />
              </Card.Title>
              <Card.Text>
                <strong>Name:</strong> {techSeedData[showAllTechUsers].full_name} <br />
                <strong>Location:</strong> {techSeedData[showAllTechUsers].location}
                <br />
                <strong>LinkedIn:</strong> {techSeedData[showAllTechUsers].linkedIn}
                <br />
                <strong>Contact:</strong> {techSeedData[showAllTechUsers].email}
                <br />
                <strong>Offering:</strong> {techSeedData[showAllTechUsers].offer}
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
