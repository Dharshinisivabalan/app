import React from 'react';
import './Projects.css'; 

import projectImage1 from '../components1/img/project1.jpg';
import projectImage2 from '../components1/img/project2.jpg';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "This is a description of Project 1.",
      image: projectImage1,
      link: "https://github.com/Dharshinisivabalan/app" 
    },
    {
      title: "Project 2",
      description: "This is a description of Project 2. ",
      image: projectImage2,
      link: "./path/to/your/html/programs.html" 
    },
  ];

  return (
    <div className="projects" id="projectsection">
      <h1>MY PROJECTS</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p> {/* Added class here */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Program</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

