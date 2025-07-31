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
          <a href="https://github.com/colinleahey" target="_blank" rel="noopener noreferrer">GH</a>
          <a href="https://www.linkedin.com/in/colin-leahey/" target="_blank" rel="noopener noreferrer">LI</a>
        </div>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="about-me-description">
              This is placeholder text for the about me section. I will fill this out later with a short blurb about my passions, skills, and professional goals.
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