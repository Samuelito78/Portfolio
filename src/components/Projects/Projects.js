import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import bridge from "../../Assets/Projects/bridge.png";
import deli from "../../Assets/Projects/deli.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bridge}
              isBlog={false}
              title="Bridge Project"
              description="This webapp is currently in its building phase, the user will be able to livestream multiple bridge games using RTMP & HLS while having an help to play by using openCV card recognition."
              ghLink="https://github.com/Samuelito78"
              demoLink="https://projet-bridge.fr.to"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pizza Maker App"
              description="This project was developed as a java app synced with a MariaDB database and our website."
              ghLink="https://github.com/Pierrafrom/PizzaMakerApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deli}
              isBlog={false}
              title="Pizza Delivery App"
              description="This project was developed in Java in order to implement different algorithm like genetic algorithm, dynamic programming and other approaches."
              ghLink="https://github.com/Pierrafrom/PizzaDeliveryApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
