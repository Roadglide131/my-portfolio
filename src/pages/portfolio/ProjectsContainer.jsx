import React from "react";
import Project from "./Project"; // Import the Project component
import projectData from "./ProjectData"; // Import your project data
import CustomCard from "../../components/cards/CustomCard";

const ProjectContainer = () => {
  return projectData.map((project, index) => (
    <CustomCard
      key={index}
      title={project.title}
      image={project.image}
      description={project.description}
      link={project.link}
    />
  ));
};

export default ProjectContainer;
