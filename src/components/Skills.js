import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaMobileAlt } from 'react-icons/fa'; // Importing necessary icons

const Skills = () => {
  return (
    <>
      <div className="center-box" id="skillsection">
        <div className="bordered-box">
          <div className="skills">
            <h1 className="fade-in">My Skills</h1> {/* Added fade-in class */}

            <ul className="skills-list"> {/* Added class for animation */}
              <li className="fade-in"> <FaHtml5 className="icon" /> HTML & CSS</li>
              <li className="fade-in"> <FaJs className="icon" /> JavaScript</li>
              <li className="fade-in"> <FaReact className="icon" /> React.js</li>
              <li className="fade-in"> <FaGithub className="icon" /> Git & GitHub</li>
              <li className="fade-in"> <FaReact className="icon" /> Open Source Contribution</li>
              <li className="fade-in"> <FaMobileAlt className="icon" /> Responsive Web Design</li>
            </ul>

            <p className="fade-in">
              I am proficient in various web development technologies and always eager to learn new tools and languages. My strengths lie in building user-friendly, dynamic websites, and contributing to the open-source community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
