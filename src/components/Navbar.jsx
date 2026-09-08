import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          Boopathi K
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Boopathi2006719"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/boopathi-k-251102335/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar