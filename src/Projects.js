// src/Projects.js
import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';

const projectsData = [
  {
    title: 'ChatDB',
    description: 'A database chatbot that lets users query databases using natural language. Built to simplify data retrieval for non-technical users through an intuitive conversational interface.',
    technologies: ['Python', 'MongoDB', 'SQL', 'Natural Language Processing']
  },
];

const Projects = () => {
  return (
    <Row className="justify-content-center g-4">
      {projectsData.map((project, index) => (
        <Col md={10} key={index}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title as="h3">{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div>
                {project.technologies.map((tech, i) => (
                 <Badge pill bg="" className="tech-badge me-2" key={i}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;