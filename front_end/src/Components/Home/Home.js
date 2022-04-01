import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Container, Button } from "react-bootstrap";

function Home() {
 
    return (
      <div className="techUser-home">
          <p>I'm currently...</p>
          <div className="button">
            <div>
              <Button>In Tech</Button>
            </div>
            <div>
              <Button>In the Community</Button>
            </div>
          </div>
        </div>
    )}; 

export default Home;
