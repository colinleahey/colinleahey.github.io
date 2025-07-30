import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>Colin Leahey</h1>
        <p>Economics & Data Science Student at USC</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a student at the University of Southern California pursuing finishing up my BS in Economics
          & Data Science while working on a MS in Applied Data Science. I'm passionate about using data to 
          solve problems and enjoy triathlon training in my free time.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>DSCI551-ChatDB</h3>
          <p>A database chatbot that lets users query databases using natural language.</p>
          <p><strong>Technologies:</strong> Python, MongoDB, SQL, Natural Language Processing</p>
        </div>
        <div className="project">
          <h3>DSCI351-ChatDB</h3>
          <p>An improved version with better query processing and user experience.</p>
          <p><strong>Technologies:</strong> Python, Machine Learning, SQL</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:cleahey@usc.edu">Email</a>
          <a href="https://www.linkedin.com/in/colin-leahey/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/colinleahey" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default App;