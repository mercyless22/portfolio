import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Taher M Travadi </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently Running An Freelancing Agency Named Badri Qunatech.
            <br />
            I Am Pursuing My Bachelors in Computer Science from Marwadi University,Rajkot,Gujarat
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> helping Businesses Grow
            </li>
            <li className="about-activity">
              <ImPointRight /> Brainstroming New Ideas
            </li>
            <li className="about-activity">
              <ImPointRight /> Relaxing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Taher</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
