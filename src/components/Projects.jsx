import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="container">

        <h2 className="section-title">
          My Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="technology-list">

                {project.technologies.map((technology, techIndex) => (
                  <span key={techIndex}>
                    {technology}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-button"
              >
                <FaGithub />
                View on GitHub
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;