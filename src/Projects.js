// src/Projects.js
import React, { useState } from 'react';
import { Row, Col, Card, Badge, Button, Collapse } from 'react-bootstrap';

const projectsData = [
  {
    title: 'ChatDB',
    oneLiner: 'A multi-database natural language interface enabling users to query both relational and NoSQL databases using plain English.',
    technologies: ['Python', 'OpenAI GPT-3.5', 'MySQL', 'MongoDB', 'Natural Language Interfaces'],
    links: [
      { name: 'Version 1 (SQL Only)', url: 'https://github.com/colinleahey/DSCI351-ChatDB' },
      { name: 'Version 2 (SQL + MongoDB)', url: 'https://github.com/colinleahey/DSCI551-ChatDB' }
    ],
    goal: "ChatDB was developed to bridge the gap between non-technical users and complex databases. By integrating OpenAI's natural language capabilities, the system lets users retrieve data intuitively without writing a single line of SQL or MongoDB queries.",
    features: [
      "Used GPT-3.5 to translate natural language queries into SQL (v1) and MongoDB (v2) commands.",
      "Enabled intelligent database routing depending on query type and user selection (SQL or MongoDB).",
      "Integrated and managed two different datasets: MovieLens and SARS (SQL), and sample_mflix (MongoDB).",
      "Implemented automatic schema inference to help the model generate accurate, context-aware queries.",
      "Built helper scripts to programmatically set up and populate relational tables with genre mapping and constraints."
    ],
    myRole: "I built the first version as a solo project, and completed version 2 with a partner. For v1, I built the complete SQL query translation pipeline, database connector, and GPT integration. For v2, I built the same system but with support for MongoDB, architected the dual-database backend, and implemented logic for routing and schema awareness."
  },
  {
    title: 'Haunted Places: A Multi-Layered Data Science Investigation',
    oneLiner: 'An end-to-end data science project that enriches a national dataset of haunted places with geospatial, AI-generated, and external data to uncover and visualize hidden patterns.',
    technologies: ['Python', 'Pandas', 'GeoPandas', 'Stable Diffusion', 'Apache Tika', 'D3.js', 'Docker', 'Geospatial Analysis'],
    links: [
      { name: 'Data Sourcing & Merging', url: 'https://github.com/MONA100421/TEAM_03_DSCI550_HW_BIGDATA' },
      { name: 'Image Generation & Entity Extraction', url: 'https://github.com/MONA100421/TEAM_03_DSCI550_HW_EXTRACT' },
      { name: 'Data Visualization', url: 'https://github.com/MONA100421/TEAM_03_DSCI550_HW_DATAVIS' }
    ],
    goal: "The goal was to transform a simple dataset of haunted place reports into a rich, multi-layered resource for analysis. By systematically integrating external data (crime, religion, daylight hours, historic sites), generating AI visuals, and building interactive visualizations, the project aimed to explore the sociocultural and environmental factors that correlate with paranormal claims.",
    features: [
      "Enriched a core dataset of 21,000+ haunted locations with five external datasets, including crime rates, religious adherence, and historic locations.",
      "Performed geospatial analysis to add proximity-based features, such as the number of historic places within a 5-mile radius of a haunted place.",
      "Developed a generative AI pipeline using Stable Diffusion to create a unique image for each haunted place based on its text description.",
      "Used a Dockerized Apache Tika container to perform OCR and object detection on the AI-generated images.",
      "Analyzed the final enriched dataset to find correlations between hauntings and external factors, presenting the findings through D3.js visualizations."
    ],
    myRole: "My contributions spanned data sourcing, geospatial analysis, image generation, and AI captioning. In the initial data enrichment phase, I was solely responsible for sourcing, cleaning, and integrating the National Register of Historic Places dataset. I developed a Python script (dataset_merging.ipynb) using GeoPandas and RTree to perform efficient spatial queries, calculating the proximity of over 80,000 historic sites to each haunted location. Following this, I designed and built the entire generative AI pipeline, writing the Python scripts to prompt Stable Diffusion for image generation and using a Dockerized Apache Tika container for automated image captioning."
  }
];

const Projects = () => {
  // 3. Initialize state to track which cards are open
  const [open, setOpen] = useState({});

  // 4. Function to toggle the state for a specific card
  const toggleOpen = (index) => {
    setOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <Row className="justify-content-center g-4">
      {projectsData.map((project, index) => (
        <Col md={10} key={index}>
          <Card className="project-card">
            <Card.Body className="p-4">
              {/* --- Main Info --- */}
              <Card.Title as="h3">{project.title}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted fst-italic">
                {project.oneLiner}
              </Card.Subtitle>

              {/* --- Tech Badges --- */}
              <div className="mb-3">
                {project.technologies.map((tech, i) => (
                 <Badge pill bg="" className="tech-badge me-2 mb-2" key={i}>
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* --- GitHub Links --- */}
              <div>
                {project.links.map((link, i) => (
                  <Button
                    variant="outline-danger"
                    size="sm"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-2"
                    key={i}
                  >
                    GitHub: {link.name}
                  </Button>
                ))}
              </div>

              {/* 5. The new Collapse component and Button */}
              <Collapse in={open[index]}>
                <div id={`project-collapse-${index}`}>
                  <hr />
                  {/* --- Detailed Sections --- */}
                  <h5 className="project-section-title">The Goal</h5>
                  <p>{project.goal}</p>

                  <h5 className="project-section-title">Key Features</h5>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h5 className="project-section-title">My Role</h5>
                  <p>{project.myRole}</p>
                </div>
              </Collapse>

              <hr className="mt-3" />
              <Button
                onClick={() => toggleOpen(index)}
                aria-controls={`project-collapse-${index}`}
                aria-expanded={open[index]}
                variant="link"
                className="p-0 text-danger"
              >
                {open[index] ? 'Read Less' : 'Read More...'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;