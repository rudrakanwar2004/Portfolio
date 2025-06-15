import icon from '../assets/rk.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo-container">
        <img 
          src={icon} 
          alt="Logo" 
          className="logo" 
        />
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
