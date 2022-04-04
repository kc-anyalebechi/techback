import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { techSeedData } from "../../../SeedData/techSeedData"
import "./techUser.css";

function TechUsers() {
  // const [techUsers, setTechUsers] = useState([]);
  // const [techUser, setTechUser] = useState({ full_name: "", expertise: "" });

  // const handleClick = () => {
  //   fetch("http://localhost:4000/techusers")
  //     .then((res) => res.json())
  //     .then((data) => setTechUsers(data.techUsers));
  // };

  // // handleChnage

  // const handleChange = (event) => {
  //   event.persist();
  //   setTechUser((prevTechUser) => {
  //     const editedTechUser = {
  //       ...prevTechUser,
  //       [event.target.name]: event.target.value,
  //     };
  //     return editedTechUser;
  //   });
  // };

  // const showAllTechUsers = Math.floor(Math.random() * techSeedData.length);
  // console.log(showAllTechUsers)

const map = techSeedData.map(x=>x); 
console.log(map); 

// return (
//   map.full_name
// )

// let showAllTechUsers2 = Math.floor(Math.random());
// console.log(showAllTechUsers2)



// let showAllTechUsers = [techSeedData]; 
// console.log(showAllTechUsers)




  if (techSeedData) {
    return (
      <div className="techUser">
        <div header className="techUser-header">
          <p>Meet the Tech experts...</p>
        </div>

        {/* <Container>
          <div className="techUser-body">
            <Row>
              <Col>
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
              </Col>
              <Col>
                <Form>
                  <Card className="mb-3" style={{ color: "#000" }}>
                    <Card.Body>
                      <Card.Title>
Are You From The Community? Sign Up To Get Connected.<hr />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Form>
              </Col>
            </Row>
          </div>
        </Container> */}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default TechUsers;
