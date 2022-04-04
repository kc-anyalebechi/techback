import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, Card, Container, Button } from "react-bootstrap";
import { comSeedData } from "../../../SeedData/comSeedData";
import "./ComUser.css"

function ComUsers() {
  const showAllComUsers = Math.floor(Math.random() * comSeedData.length);
  console.log(showAllComUsers);


  if (comSeedData) {
    return (
      <div className="comUser">
        <div header className="comUser-header">
          <div>
            Sign-in to see more
          </div>
          {/* <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
            <Breadcrumb.Item>Sign In</Breadcrumb.Item>
            <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
          </Breadcrumb> */}
          <div>
          <p>Meet the community...</p>
        </div>
        </div>
        {/* <p>Here is a list of community members looking for you expertise</p> */}

        <Container>
          <div className="comUser-body">
            <Card className="mb-3" style={{ color: "#000" }}>
              <Card.Body>
                <Card.Title>
                  Seeking: {comSeedData[showAllComUsers].seeking_expertise}
                  <hr />
                </Card.Title>
                <Card.Text>
                  Main Contact: {comSeedData[showAllComUsers].full_name} <br />
                  Location: {comSeedData[showAllComUsers].location}
                  <br />
                  LinkedIn:{comSeedData[showAllComUsers].linkedIn}
                  <br />
                  Position: {comSeedData[showAllComUsers].position}
                  <br />
                  Contact: {comSeedData[showAllComUsers].email}
                  <br />
                  Seeking: {comSeedData[showAllComUsers].seeking_for}
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

export default ComUsers;
