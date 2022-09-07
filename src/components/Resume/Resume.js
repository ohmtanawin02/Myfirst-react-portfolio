import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import "./Resume.scss";

class Resume extends Component {
  render() {
    return (
      <div className="Resume" id="resume">
        <h1 className="about-header" style={{ textAlign: "center" , color: "black"}} >
          Resume
        </h1>
        <hr
          className="divider"
          style={{
            margin: "auto"
          }}
        />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default Resume;
