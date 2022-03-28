import React from "react";
import TechUser from "./Components/TechUsers/techUser";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { Button, Breadcrumb } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="techback">
        
        <div header className="App-header">
          <Breadcrumb>
          <Breadcrumb.Item>About Us</Breadcrumb.Item>
          <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
          <Breadcrumb.Item>Sign In</Breadcrumb.Item>
          <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
          <p>Welcome to TechBack.  Where Technology and the Community Intersect.</p>

          


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

        <div>
            Just Browsing
        </div>
        </div>

            
            

          {/* <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes> */}
      
      </div>
    </div>
  );
}

export default App;
