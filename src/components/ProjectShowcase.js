
import React from 'react';
import './ProjectShowcase.css'; 
import pr1 from '../components/img/pr1.jpg'; 


const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'HTML, CSS, and JavaScript',
    image: pr1, 
  },
  {
    id: 1,
    title: 'Project One',
    description: 'HTML, CSS, and JavaScript',
    image: pr1, 
  },
  {
    id: 1,
    title: 'Project One',
    description: 'HTML, CSS, and JavaScript',
    image: pr1, 
  },
  
];

const ProjectShowcase = () => {
  return (
    <div className="project-showcase" id="projectshowcasesection">
      <h2>Project Showcase</h2>
      <div className="project-gallery">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
