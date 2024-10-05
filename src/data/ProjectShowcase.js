// src/components/ProjectShowcase.js
import React from "react";
import projects from "../data/projects";
import "./ProjectShowcase.css"; // Create a separate CSS file for styling

const ProjectShowcase = () => {
  return (
    <div className="project-showcase">
      <h2>Project Showcase</h2>
      <div className="projects-gallery">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
