import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from "react-bootstrap";
import SignIn from "./Components/Authentication/SignIn/SignIn.js";
import TechUsers from "./Components/TechUsers/TechUser";
import ComUsers from "./Components/ComUsers/ComUser";
import Header from "./Components/Header/Header";
import {useState} from 'react';
import "./App.css";
import TechSignUp from "./Components/Authentication/SignUp/TechSignUp";


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
      <Header/>
      <div header className="App-header">
        <p>
        <em>TechBack... <br />
          "Where Community and Technology Intersect"</em> </p>
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
        </div>
        <p>Just visiting... </p>


        <TechUsers />
        <SignIn />
        <TechSignUp />

        <ComUsers />


      </div>
       
      </div>
        
  );
}

export default App;
