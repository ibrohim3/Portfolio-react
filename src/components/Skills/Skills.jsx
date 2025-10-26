import React from "react";

function Skills() {
  const skills = ["HTML", "CSS", "JS", "React", "Vue", "Git"];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {skills.map((s, i) => (
          <div key={i} className="skill">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
