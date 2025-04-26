import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Education from './components/Education'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
        <p>&copy; {new Date().getFullYear()} Rudra Kanwar. All rights reserved.</p>
      </footer>

    </>

  );
}

export default App;
