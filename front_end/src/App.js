import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import SignIn from "./Components/Authentication/SignIn/SignIn.js";
import TechUsers from "./Components/Users/TechUsers/TechUser";
import ComUsers from "./Components/Users/ComUsers/ComUser";
import Header from "./Components/Header/Header";
import TechSignUp from "./Components/Authentication/SignUp/TechSignUp";
import Home from "./Components/Home/Home";
import About from "./Components/About/About"
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";

import "./App.css";

function App() {
  const [techUsers, setTechUsers] = useState([]);
  const [techUser, setTechUser] = useState({ full_name: "", expertise: "" });

  const handleClick = () => {
    fetch("http://localhost:4000/techusers")
      .then((res) => res.json())
      .then((data) => setTechUsers(data.techUsers));
  };

  // handleChnage

  const handleChange = (event) => {
    event.persist();
    setTechUser((prevTechUser) => {
      const editedTechUser = {
        ...prevTechUser,
        [event.target.name]: event.target.value,
      };
      return editedTechUser;
    });
  };

  // *******************
  // SUBMIT HANDLE CLICK
  // ********************

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(techUser);
    fetch("http://localhost:4000/techUsers", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(techUser),
    })
      .then(() => fetch("http://localhost:4000/techusers"))
      .then((response) => response.json())
      .then((data) => setTechUsers(data.techUsers))
      .then(() =>
        setTechUser({
          full_name: "",
          expertise: "",
          location: "",
          linkedin: "",
          email: "",
          offer: "",
        })
      );
  };

  {
    /* 
*******************
DELETE HANDLE CLICK
********************  */
  }

  const handleDelete = (techUser) => {
    // event.preventDefault();

    console.log(techUser);
    fetch("http://localhost:4000/techUsers/" + techUser._id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(techUser),
    })
      .then(() => fetch("http://localhost:4000/techUsers/"))
      .then((response) => response.json())
      .then((data) => setTechUsers(data.techUsers))
      .then(() =>
        setTechUser({
          full_name: "",
          expertise: "",
          location: "",
          linkedin: "",
          email: "",
          offer: "",
        })
      );
  };

  //Mapping TechUser Data
  const techUserList = techUsers.map((techUser) => (
    <li key={techUser._id}>
      {techUser.full_name}: {techUser.expertise}
      <button
        onClick={() => {
          handleDelete(techUser);
        }}
      >
        {" "}
        X
      </button>
    </li>
  ));

  // **********
  // APP HEADER
  // ***********

  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>

      <div className="App-body">
        

        {/* **********
        APP BODY 
        ********* */}

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/techusers" element={<TechUsers />} />
            <Route path="/comusers" element={<ComUsers />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </div>

        {/* Submit Form */}

        {/* <div>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                value={techUser.full_name}
                name="full_name"
                placeholder="Enter Your Full Name"
              />
              <input
                onChange={handleChange}
                value={techUser.expertise}
                name="expertise"
                placeholder="Enter Your Expertise"
              />
              <button type="Submit">Submit</button>
            </form>

            <button onClick={handleClick}>View Tech Professionals</button>
            <ul>{techUserList}</ul>
          </div> */}

        <SignIn />
        {/* <TechSignUp />

        <ComUsers /> */}
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
