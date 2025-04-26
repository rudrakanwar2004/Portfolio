import React from 'react';
import '../skills.css'; // External CSS for styles
import { motion } from 'framer-motion'; // (optional animation)

export default function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'C#', 'C++']
    },
    {
      category: 'Web Development',
      skills: ['Django', 'JavaScript', 'Flask', 'React', 'Node.js', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']
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
            <motion.div 
              className="skills-category" 
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
