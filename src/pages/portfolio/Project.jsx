import React from 'react';

const Project = ({ title, image, link,description }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;
