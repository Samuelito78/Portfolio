import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Samuel Boix-Segura </span>
            from <span className="purple"> Versailles, France.</span>
            <br />
            I am currently a third year bachelor student at Université Paris Saclay.
            <br />
            I have had an internship at La Poste at the beginning of the year as a React developper.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight />  Listening to music and Playing guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's not that deep"{" "}
          </p>
          <footer className="blockquote-footer">Samuel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
