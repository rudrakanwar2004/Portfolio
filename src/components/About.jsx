import profilePic from '../assets/profile.jpg'; // Make sure the image path is correct
export default function About() {
  return (
    <section id="about" className="projects-header">
        <h2 className='projects-header'>About Me</h2>
      <div className="container">
        <img src={profilePic} alt="Rudra Kanwar" className="profile-img" />
        <p className="about-description">
          Hi, I'm Rudra Kanwar, a passionate software developer with a strong interest in AI and machine learning. 
          I specialize in creating dynamic, scalable, and user-friendly applications, focusing on both front-end and back-end development.
        </p>
        <p className="about-description">
          I have experience working with modern technologies such as Python, Django, and SQL/NoSQL databases, React, Node.js etc. 
          I thrive in environments where innovation and problem-solving are key. I am particularly fascinated by AI-powered applications and their potential to revolutionize industries.
        </p>
        <p className="about-description">
          With a strong foundation in software engineering principles, I continuously look for opportunities to improve my skills, 
          contribute to open-source projects, and work on challenging problems. My goal is to develop solutions that make a meaningful impact in the world.
        </p>
      </div>
    </section>
  );
}
