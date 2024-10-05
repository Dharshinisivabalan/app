
import React from 'react';
import "./Navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <Link to="homesection" smooth={true} duration={300}>Home</Link>
        <Link to="aboutsection" smooth={true} duration={300}>About</Link>
        <Link to="skillsection" smooth={true} duration={300}>Skills</Link>
        <Link to="projectsection" smooth={true} duration={300}>projects</Link>
        <Link to="contactsection" smooth={true} duration={300}>contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

