import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { Breadcrumb, Card } from "react-bootstrap";

function techUser() {
  return (
    // <div className="App">
    <div className="techback">
      <div header className="App-header">
        <Breadcrumb>
          <Breadcrumb.Item>About Us</Breadcrumb.Item>
          <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
          <Breadcrumb.Item>Sign In</Breadcrumb.Item>
          <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="techUser-body">
        <Card className="mb-3" style={{ color: "#000" }}>
          {/* <Card.Img src="https://drive.google.com/file/d/1H6yhQgFku7sP6l2qYYReh4h_KEKJInX5/view?usp=sharing" /> */}

        </Card>

        <div>Just Browsing</div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default techUser;
