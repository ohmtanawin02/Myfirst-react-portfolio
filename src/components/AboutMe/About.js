import React, { Component } from "react";
import "./About.css";
import { Details } from "./Details.js";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          <div className="about-image">
            <img
              src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/305254216_667476374251047_8724283875198564652_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFVUORmLiEPRzD5bzB-zTdLiigheYdptgmKKCF5h2m2CS2ne1aGcbq3vwogX6DsGlnGnxXbBcyLeeMsSHf-QuNQ&_nc_ohc=Of7NyMcEdBwAX9CIgkc&tn=B-9_vRbds0p7SLkM&_nc_ht=scontent.fbkk5-4.fna&oh=03_AVL8jza7yqqnSpSab1JvL4lpvaiQFewUGm85TJNrKcZpcw&oe=633CE75E"
              alt="Masudha"
              height="300"
              width="300"
            />
          </div>
          <div className="about-section">
            <h1 className="about-header">
              About Me
              <hr className="divider" />
            </h1>

            <h3 className="about-intro">
            Hello, my name is is Ohm. I am Studying in the 4th year of
            Information and Network Engineering, King Mongkut's
            University Technology North Bangkok.
            I'm friendly to work with company.I’m constantly improving 
            myself and never stop learning new things.
            </h3>
            <br />
            <ul className="about-details">
              {Details.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
