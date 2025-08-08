// src/App.js
import './App.css';
import AppNavbar from './Navbar'; 
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import CareerTimeline from './CareerTimeline';
import Projects from './Projects';

//Add actual Headshot!!!!!!
import professionalHeadshot from './assets/MTS2025.jpg';
import triathlonImg from './assets/triathlon.png';
import halfMarathonImg from './assets/halfMarathon.jpg';
import fishingImg from './assets/costaRicaFishing.png';
import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin-icon.png';

function App() {
  return (
    <>
      <AppNavbar />

      {/* Hero Carousel */}
      <Carousel fade interval={7500} pause={false}>
        <Carousel.Item className="hero-carousel-item">
          <img className="d-block w-100" src={triathlonImg} alt="Triathlon" />
        </Carousel.Item>
        <Carousel.Item className="hero-carousel-item">
          <img className="d-block w-100" src={halfMarathonImg} alt="Half Marathon" />
        </Carousel.Item>
        <Carousel.Item className="hero-carousel-item">
          <img className="d-block w-100" src={fishingImg} alt="Fishing in Costa Rica" />
        </Carousel.Item>
      </Carousel>

      {/* About Me Section */}
      <Container as="section" id="about" className="text-center py-5">
        <div className="about-me-title">
          <h2>About Me</h2>
        </div>
        <Image src={professionalHeadshot} roundedCircle className="profile-headshot mb-3" />
        <h3>Colin Leahey</h3>
        <div className="about-me-links mb-3">
          <a href="https://github.com/colinleahey" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub profile">
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/colin-leahey/" target="_blank" rel="noopener noreferrer" aria-label="View my LinkedIn profile">
            <img src={linkedinLogo} alt="LinkedIn Logo" />
          </a>
        </div>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="about-me-description">
              I am a student at the University of Southern California, concurrently pursuing a B.S. in Economics & Data Science (expected December 2025) and an M.S. in Applied Data Science (expected May 2026). My studies are focused on data management at scale, where I've gained experience in Python, SQL, and big data technologies like Apache Spark and MongoDB. Additionally, my economics background provides a strong foundation in market dynamics and guides my approach to data science projects. Outside of school, I am passionate about endurance sports and spend my time training for triathlons as part of the USC Triathlon team.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Career Section */}
      <section id="career" className="py-5 bg-light">
        <div className="container text-center">
            <div className="about-me-title">
                <h2>Career & Education</h2>
            </div>
            <CareerTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <div className="about-me-title text-center">
              <h2>Projects</h2>
          </div>
          <Projects />
        </div>
      </section>

    </>
  );
}

export default App;