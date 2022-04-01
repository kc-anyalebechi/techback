import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import SignIn from "./Components/Authentication/SignIn/SignIn.js";
import TechUsers from "./Components/TechUsers/TechUser";
import ComUsers from "./Components/ComUsers/ComUser";
import Header from "./Components/Header/Header";
import TechSignUp from "./Components/Authentication/SignUp/TechSignUp";
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  // const [techUsers, setTechUsers] = useState([])
  // const [techUser, setTechUser] = useState({full_name: "", expertise: ""})

  // const handleClick = () => {
  //   fetch()
  //   .then(response => response.json())
  //   .then(data => setTechUsers(data.techUsers))
  // }

  return (
    <div className="App">
      <Header />
      <div header className="App-header">
        <p>
          <em>
            TechBack... <br />
            "Where Community and Technology Intersect"
          </em>
        </p>
      </div>
      <div className="App-body">
        <p>I'm currently...</p>

        <div className="button">
          <div>
              <Button>In Tech</Button>
          </div>
          <div>
            <Button>In the Community</Button>
          </div>

          {/* <Routes>
            <Route path="/" element={<ComUsers />} /> */}
            {/* <Route path="/Main/QuoteOfDay" element={<QuoteOfDay />} />
            <Route path="/Main/StayInspired" element={<StayInspired />} />
            <Route path="/Main/NeedHelp" element={<NeedHelp />} />
            <Route path="/Main/ContactUs" element={<ContactUs />} />
            <Route path="/Main/GreenBtn" element={<GreenBtn />} /> */}
{/* 
          </Routes> */}


        </div>

        <TechUsers />
        <SignIn />
        <TechSignUp />

        <ComUsers />
      </div>
    </div>
  );
}

export default App;
