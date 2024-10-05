import React from 'react';
import './Skills.css'; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'; 

function Skills() {
  const skillsData = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    
  ];

  return (
    <div className="skills" id="skillsection">
      <h1>MY SKILLS</h1>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h2 className="skill-name">{skill.name}</h2>
          </div>
        ))}
      </div>
      
    
      <div className="skills-description">
        
        <p>
          I have a solid foundation in front-end development, specializing in creating responsive and user-friendly interfaces. My passion for coding drives me to continuously learn and adapt to the latest technologies and trends in the industry.
        </p>
        <p>
          I enjoy collaborating with teams to develop innovative solutions and bring ideas to life. Whether it's building a simple website or a complex web application, I approach each project with enthusiasm and a commitment to quality.
        </p>
        <p>
          I am particularly interested in exploring new frameworks and tools that enhance development efficiency and improve user experience. I believe that learning is a lifelong journey, and I am excited about the opportunities to grow as a developer.
        </p>
      </div>
    </div>
  );
}

export default Skills;
