import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yuxin Ding </span>
            from <span className="purple"> JiangSu, China.</span>
            <br />
            I am currently a M.S. student in Electrical and Computer Engineering at Duke University.
            <br />
            I have completed B.S. in Information and Computing Science at XJTLU and University of Liverpool.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The future is in my hands."{" "}
          </p>
          <footer className="blockquote-footer">Yuxin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
