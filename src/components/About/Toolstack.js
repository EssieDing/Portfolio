import React from "react";
import { Col, Row } from "react-bootstrap";
import {  DiDocker, DiGit} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiIntellijidea,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
