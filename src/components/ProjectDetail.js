// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  // You can fetch or use static data based on the id
  return (
    <div>
      <h1>Project Detail for Project ID: {id}</h1>
      {/* Add more details about the project here */}
    </div>
  );
};

export default ProjectDetail;
