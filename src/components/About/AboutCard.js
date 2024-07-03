import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pradyumn Tripathi </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am a pursing B.Tech CSE from Lovely Professional University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Give Contests
            </li>
            <li className="about-activity">
              <ImPointRight /> Work at an Non-Profit Organization
            </li>
            <li className="about-activity">
              <ImPointRight /> Participate in Group Discussions
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that makes a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pradyumn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
