import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Button } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="techUser-home">
      {/* **************
    Video Autoplay
    *************** */}
      {/* <video playsinline="playsline" autoplay="autoplay" muted="muted" loop="loop"> <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>  */}

      <p>I'm currently...</p>
      <div className="button">
        <div className="color-overlay d-flex justify-content-center align-items-center">
          <Button className="rounded p-4 p-sm-3" >In Tech</Button>
        </div>
        <div>
          <Button>In the Community</Button>
        </div>
      </div>
      {/* </video> */}
      <div className="sign-in">
        <p>Already a memeber? (Sign-in)</p>
      </div>
    </div>
  );
}

export default Home;
