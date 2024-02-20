import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wildhunt from "../../Assets/Projects/wild_hunt.png";
import e_cloud from "../../Assets/Projects/e_cloud.png";
import android from "../../Assets/Projects/android.png";
import miniAmazon from "../../Assets/Projects/miniamazon.png";
import http from "../../Assets/Projects/http.png";
import stock from "../../Assets/Projects/stock.png";

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
              imgPath={e_cloud}
              isBlog={false}
              title="E-Cloud"
              description="Developed a distributed file storage system, supporting user register and login, file upload and download, recycle bin, and file sharing features."
              ghLink="https://github.com/essieding/e-cloud"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miniAmazon}
              isBlog={false}
              title="Mini Amazon UPS system"
              description="Built a full-stack web application modeling the Amazon system and UPS system, achieving near 100% accuracy in
              simulating the complete process from product purchase to package delivery."
              ghLink="https://github.com/essieding/Mini_Amazon_UPS"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={http}
              isBlog={false}
              title=""
              description="Developed an HTTP caching proxy server utilizing socket programming, handling 4000+ requests per second including
              GET, POST, and CONNECT methods."
              ghLink="https://github.com/EssieDing/HTTP-Caching-Proxy"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Exchange System"
              description="Implemented a stock exchange and matching system with Java to support over 1000+ users in registering accounts, buying and selling stocks, cancelling orders and checking transactions."
              ghLink="https://github.com/essieding/stock_exchange_system"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wildhunt}
              isBlog={false}
              title="Wild Hunt"
              description="Developed a 3D survival game where the player gathers resources to fight against zombies using Unity engine and C#."
              ghLink="https://github.com/essieding/Wild_Hunt_3D"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Multi-UVC Camera Live Streaming Platform"
              description="Established a live streaming platform with multiple UVC cameras on Android to enhance multi-angle broadcast capabilities."
              ghLink="https://github.com/EssieDing/Android-Live-Stream"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
