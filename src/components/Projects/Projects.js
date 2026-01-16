import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={chatify}
              isBlog={false}
              title="QuickChat"
              description="Developed a full-stack chat app using MongoDB, Express, React, and Node with message CRUD, live updates, and optimized component rendering. Integrated secure REST APIs and scalable backend architecture."
              ghLink="https://github.com/Chetu248/chat_app"
              demoLink="https://chat-app-five-pi-97.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart-Auction"
              description="Built a Smart Auction platform that allows users to list items, place bids, and automatically determine winners based on real-time bidding logic. Designed a clean, secure workflow to ensure fair and transparent auctions."
              ghLink="https://github.com/Chetu248/smart-auction"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="WriteFlow"
              description="Developed a basic blog website that allows users to create, read, update, and delete blog posts. Implemented a simple and user-friendly interface with structured data handling."
              ghLink="https://github.com/Chetu248/BLOG-SITE"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MediMate"
              description="Developed MediMate, a user-friendly platform that organizes medical records and streamlines patient–doctor interactions. Focused on reliability, clarity, and easy access to essential health data."
              ghLink="https://github.com/Chetu248/MediMate"
              // demoLink=""
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
