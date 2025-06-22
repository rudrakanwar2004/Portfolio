import profilePic from '../assets/profile.jpg'; // Make sure the image path is correct
export default function About() {
  return (
    <section id="about" className="projects-header">
        <h2 className='projects-header'>About Me</h2>
      <div className="container">
        <img src={profilePic} alt="Rudra Kanwar" className="profile-img" />
        <p className="about-description">
          I’m an aspiring software developer passionate about GenAI, LLMs, and exploring LangChain. 
          With hands-on experience in Python back-end development, 
          I’ve built and deployed full-stack applications using Django and integrated state-of-the-art 
          machine learning frameworks. I love diving into complex problems, writing clean, scalable code 
          and collaborating with dynamic teams to create innovative, high-quality solutions.        
        </p>
      </div>
    </section>
  );
}
