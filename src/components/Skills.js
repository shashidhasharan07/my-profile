import React from 'react';

function Skills() {
  const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'React JS', 'SQL', 'Git'];
  const softSkills = ['Time Management', 'Team Work', 'Adaptability'];

  return (
    <section id="skills" style={{ padding: '2rem' }}>
      <h2>Skills</h2>
      <h4>Technical Skills:</h4>
      <ul>
        {technicalSkills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
      <h4>Soft Skills:</h4>
      <ul>
        {softSkills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;
