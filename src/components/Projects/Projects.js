import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import brightsprings from "../../Assets/Projects/brightsprings.png";
import nhtw from "../../Assets/Projects/nhtw.png";
import neowork from "../../Assets/Projects/neowork.png";
import SecuraEntry from "../../Assets/Projects/securaentry.png";
import unidekho from "../../Assets/Projects/unidekho.png";
import uniqueglass from "../../Assets/Projects/uniqueglass.png";

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
              imgPath={SecuraEntry}
              isBlog={false}
              title="Secura Entry"
              description="This project is the official platform for SecuraEntry, a smart visitor log and entry management system.
It streamlines check-ins with QR code scanning, real-time tracking, and secure data storage.
Designed for apartments, offices, and institutions, it enhances safety and efficiency.
SecuraEntry offers a modern, user-friendly interface for both admins and visitors.   "
              // ghLink="https://github.com/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brightsprings}
              isBlog={false}
              title="Bright Springs"
              description="Bright Springs is an engaging learning platform designed for children with autism.
It offers fun activities and games to develop communication, academic, and life skills.
The platform supports personalized learning at each child’s pace.
Bright visuals and simple design make it easy and enjoyable to use."
              ghLink="https://github.com/mercyless22"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neowork}
              isBlog={false}
              title="Neowork"
              description="Neowork is a modern workspace solution designed for today’s dynamic professionals.
It offers flexible co-working spaces with top-notch amenities and tech support.
Ideal for startups, freelancers, and businesses seeking productivity and innovation.
Neowork blends comfort, collaboration, and creativity in one vibrant environment."
              ghLink="https://github.com/mercyless22"
              demoLink="https://neowork-taher.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uniqueglass}
              isBlog={false}
              title="Unique Glass"
              description="This project is a professional website developed for Unique Glass, showcasing their custom glass solutions and services.
It highlights their expertise in architectural and interior glass work with a sleek, modern design.
The site features product galleries, service details, and contact options for clients.
Built to reflect the brand’s elegance and precision, it enhances their digital presence effectively."
              demoLink="https://uniqueglassrajkot.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unidekho}
              isBlog={false}
              title="Unidekho"
              description="This project is the official website for UniDekho, a student-focused platform for discovering top universities and colleges.
It offers detailed information on courses, institutions, and admission guidance.
Designed with an intuitive interface, it ensures a smooth browsing experience for students.
UniDekho helps learners make informed decisions about their academic future."
              demoLink="https://mercyless22.github.io/UniDekho/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nhtw}
              isBlog={false}
              title="NHTW"
              description="This project is the official website for New Hakimi Tin Works (NHTW), a leading manufacturer of tin and aluminum products.
The website showcases their wide product range with detailed descriptions and high-quality images.
Designed with a sleek black and gold theme, it reflects the brand’s premium identity.
It serves as a professional platform for customer inquiries and product exploration."
              demoLink="https://newhakimitinworks.com"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
