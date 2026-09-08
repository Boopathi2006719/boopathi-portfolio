import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">

      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <p className="contact-description">
          I'm currently open to opportunities as a Java Full Stack
          Developer. Feel free to connect with me.
        </p>

        <div className="contact-links">

          <a href="mailto:boopathik719@gmail.com">
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/boopathi-k-251102335/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/Boopathi2006719"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;