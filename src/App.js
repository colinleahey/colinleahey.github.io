// src/App.js - FINAL SIMPLIFIED VERSION
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <>
      <Navbar /> 
      <Hero /> 

      <section className="intro-section">
        <h1>Colin Leahey</h1>
        <p>BS in Economics & Data Science</p>
        <p>MS in Applied Data Science</p>
        <div className="links">
          <a href="https://www.linkedin.com/in/colin-leahey/" target="_blank" rel="noopener noreferrer" className="button-link">LinkedIn</a>
          <a href="https://github.com/colinleahey" target="_blank" rel="noopener noreferrer" className="button-link">GitHub</a>
        </div>
      </section>
      
      {/* All other content follows below */}
      <main className="main-content">
        <section id="about" className="content-section">
          <h2>About Me</h2>
          <p>
            This is placeholder text for the about me section. I will fill this out later with a short blurb about my passions, skills, and professional goals.
          </p>
        </section>

        <section id="projects" className="content-section">
          <h2>Projects</h2>
          <div className="project">
            <h3>ChatDB</h3>
            <p>A database chatbot that lets users query databases using natural language.</p>
            <p><strong>Technologies:</strong> Python, MongoDB, SQL, Natural Language Processing</p>
          </div>
        </section>

        <section id="career" className="content-section">
          <h2>Career</h2>
          <p>
            This is placeholder text for the career section. I will add my work experience and career objectives here later.
          </p>
        </section>

        <section className="content-section">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="mailto:cleahey@usc.edu">Email</a>
            <a href="https://www.linkedin.com/in/colin-leahey/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/colinleahey" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;