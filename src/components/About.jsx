import profilePic from '../assets/profile.jpg'; // Make sure the image path is correct
export default function About() {
  return (
    <section id="about" className="projects-header">
        <h2 className='projects-header'>About Me</h2>
      <div className="container">
        <img src={profilePic} alt="Rudra Kanwar" className="profile-img" />
        <p className="about-description">
          An aspiring software developer passionate about GenAI, LLMs, and exploring LangChain. 
          With hands-on experience in back-end with Python. 
          I have developed and deployed full-stack applications using Python, Django, 
          and machine learning frameworks. Strong in software development and problem solving. 
          Interested in contributing to innovative projects and working in dynamic teams 
          to deliver high-quality solutions.
        </p>
      </div>
    </section>
  );
}
