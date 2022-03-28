import React from "react";
// import { Route, Routes } from "react-router-dom";
import TechUser from "./Components/TechUsers/techUser";


import "./App.css";
// import Navigation from "./Navigation";

function App() {


  return (
    
    <div className="techback">
      
      

      {/* *****************
      MAIN BODY SECTION
      ***************** */}

      <div className="main">

      

        {/* <Quote/> */}
        <main>
       
        <div>
        {/* {/* Home page: 
        Header  - There will be a TechBack - it  will link to the homepage
        Body - tagline "Where Engineers and the communities intersect"
        Main section - I am currently ... 
        There will be two buttons 
        */}

        <button>
        In Tech
        </button>

        <button>
        In the Community
        </button>

        {/* There will be section on the bottom that says

        "Just Browsing" - This will link to the get all page of engineers and community leaders
     */}
      </div>

          {/* <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes> */}
        </main>
      
      </div>
      <div>
        <TechUser />
      </div>
      </div>

     
  );
}  

export default App;

