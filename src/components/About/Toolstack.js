import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiJetbrains,
  SiLinux,
  SiVisualstudiocode
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>

    </Row>
  );
}

export default Toolstack;
