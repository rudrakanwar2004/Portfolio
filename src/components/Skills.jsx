import React from 'react';
import '../skills.css'; // Import your CSS file for styling
export default function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'C#', 'C++']
    },
    {
      category: 'Web Development',
      skills: ['Django','JavaScript','Flask','React', 'Node.js', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL','MongoDB', 'SQLite']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Google Cloud']
    },
    {
      category: 'AI & Machine Learning',
      skills: ['OpenCV', 'Scikit-learn', 'Pandas']
    },
  ];

  return (
    <section id="skills">
      <div className="projects-header">
        <h2>My Skills</h2>
        <p>Here are some of the skills and technologies I have experience with:</p>

        <div className="skills-list">
          {skills.map((category, index) => (
            <div className="skills-category" key={index}>
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
