import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';  
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-name">Your Trusted Web Developer</h1>
      <p>A successful website does three things: It attracts the right kinds of visitors. Guides them
         to the main services or products you offer. Collects contact details for future ongoing relations.</p>

      <div className="social-links">
      
        <a
          href="https://www.linkedin.com/in/dharshini-subanu-s-3904b425b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" /> 
        </a>
        
        <a
          href="https://github.com/Dharshinisivabalan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" /> 
          
        </a>
         
        
       
      </div>
    </footer>
  );
};

export default Footer;
