import '../project.css';  // Import the CSS for the projects

export default function Projects() {
  const projects = [
    {
      title: "PickFlix",
      description: "PickFlix is an AI-powered movie recommendation system that suggests movies based on user search and content similarity.",
      link: "https://github.com/rudrakanwar2004/PickFlix/tree/updated-pickflix",
    },
    {
      title: "Face Recognition Attendance System",
      description: "An innovative attendance system that uses facial recognition technology to mark student attendance automatically.",
      link: "https://github.com/rudrakanwar2004/face_recog_attendance",
    },
    // Add more projects here as you grow your portfolio
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
      </div>
      <section id="projects" className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
