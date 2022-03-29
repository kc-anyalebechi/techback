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
          <p>I'm currently...</p>
          <Button>In Tech</Button>

          <Button>In the Community</Button>
        </div>

        <div>Just Browsing</div>
      </div>

      {/* <SignIn /> */}
      {/* <TechBack/> */}

      {/* <SignUp /> */}
    </div>
  );
}

export default App;
