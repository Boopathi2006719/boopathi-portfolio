import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <h3>{skill.name}</h3>

              <p>{skill.category}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;