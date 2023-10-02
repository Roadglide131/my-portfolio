import React from "react";
import Project from "./Project"; // Import the Project component
import projectData from "./ProjectData"; // Import your project data
import CustomCard from "../../components/cards/CustomCard";
import { Wrap, WrapItem } from "@chakra-ui/react";

const ProjectContainer = () => {
  return (
    <Wrap>
      {projectData.map((project, index) => (
        <WrapItem>
          <CustomCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProjectContainer;
