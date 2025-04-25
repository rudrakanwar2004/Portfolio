import '../contact.css';
import { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        setSubmitted(true); // Display the thank you message
        
        // Reset the form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000); // Reset to form after 3 seconds
      };
    return (
      <section id="contact">
        <div className="projects-header">
          <h2>Contact</h2>
          <p>Feel free to reach out to me via any of the following methods:</p>
          
          <div className="contact-links">
            {/* 1. Email */}
            <div className="contact-item">
              <strong>Email :- </strong> 
              <a>rudrakanwar2004@gmail.com</a>
            </div>
            
            {/* 2. LinkedIn */}
            <div className="contact-item">
              <strong>LinkedIn :- </strong> 
              <a href="https://www.linkedin.com/in/rudra-kanwar-251a09131/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
            </div>
            
            {/* 3. Phone Number */}
            <div className="contact-item">
              <strong>Phone :- </strong> 
              <a>+91 8657605093</a>
            </div>
            
            {/* 4. Social Media */}
            <div className="contact-item">
              <strong>Social Media :-</strong>
              <a href="https://github.com/rudrakanwar2004" target="_blank" rel="noopener noreferrer"> GitHub</a> 
            </div>
          </div>
          
          {/* 5. Contact Form */}
          <p>If you'd like to send me a message directly, please fill out the form below:</p>
          {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
            ) : (
                <div className="thank-you-message">
                <h3>Thank you! Your message has been sent successfully.</h3>
                </div>
            )}
        </div>
      </section>
    );
  }
  