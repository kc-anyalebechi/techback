import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="techUser-home">
      {/* **************
    Video Autoplay
    *************** */}
      {/* <video playsinline="playsline" autoplay="autoplay" muted="muted" loop="loop"> <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>  */}
      <div>
          <p className="tagline">
            <em>"Where Community and Technology Intersect"</em>
          </p>
        </div>
      <p>I'm looking for...</p>
      <div className="button">
        <div className="color-overlay d-flex justify-content-center align-items-center">
          <Link to="/techusers">
            <Button className="rounded p-4 p-sm-3">Technology Offers</Button>
          </Link>
        </div>

        <div>
          <Link to="/comusers">
            <Button>Community Needs</Button>
          </Link>
        </div>
      </div>
      {/* </video> */}
      <div className="sign-in">
        <p>Already a memeber?<Link to ="/sign-in"> <em>(Sign-in)</em></Link></p>
      </div>
    </div>
  );
}

export default Home;
