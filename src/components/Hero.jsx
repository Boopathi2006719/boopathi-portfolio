function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          Hi, I'm
        </p>

        <h1>
          Boopathi 
        </h1>

        <h2>
          Java Full Stack Developer
        </h2>

        <p className="hero-description">
          BCA graduate passionate about building modern web
          applications using Java, Spring Boot, React.js and MySQL.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a
            href="/ResumeBYboopathi.pdf"
            className="btn secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;