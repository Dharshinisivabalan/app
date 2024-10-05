import React, { useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage nav open/close

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="logo">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="homesection" smooth={true} duration={500} onClick={toggleNavbar}>Home</Link></li>
        <li><Link to="aboutsection" smooth={true} duration={500} onClick={toggleNavbar}>About</Link></li>
        <li><Link to="skillsection" smooth={true} duration={500} onClick={toggleNavbar}>Skills</Link></li>
        <li><Link to="projectsection" smooth={true} duration={500} onClick={toggleNavbar}>Projects</Link></li>
        <li><Link to="contactsection" smooth={true} duration={500} onClick={toggleNavbar}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;




