import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              //imgPath={chatify}
              isBlog={false}
              title="Algorithm Visualizer"
              description="Created an interactive web application that visually demonstrates the functioning of
various sorting algorithms and backtracking algorithms."
              ghLink="https://github.com/PradyumnTripathi?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={bitsOfCode}
              isBlog={false}
              title="Blog Website"
              description="Designed an intuitive interface with real-time updates, personalized dashboards, and
advanced search features for an enhanced user experience
"
              ghLink="https://github.com/PradyumnTripathi?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="Portfolio Website"
              description="Crafted the portfolio website as a platform to effectively showcase technical skills,projects,
and achievements, providing a tangible representation of skills
"
              ghLink="https://github.com/PradyumnTripathi?tab=repositories"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
