import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Breadcrumb, Card, Container } from "react-bootstrap";
import SignIn from "./Components/Authentication/SignIn/SignIn.js";
// import TechBack from "./Components/TechUsers/TechUser"
// import SignUp from "./Components/Authentication/SignUp/ComSignUp.js";
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
          Welcome to TechBack. <br />
          <em>"Where Technology and the Community Intersect."</em>
        </p>
      </div>
      <div className="App-body">
        
        <div className="button">
          <p>I'm currently...</p>
          <div>
          <Button>In Tech</Button>
          </div>

          <div>
          <Button>In the Community</Button>
          </div>
          <p>Just visiting... </p>

        </div>

      </div>

      {/* <SignIn /> */}
      {/* <TechBack/> */}

      {/* <SignUp /> */}
    </div>
  );
}

export default App;
