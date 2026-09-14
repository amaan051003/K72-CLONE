import React from "react";
import SingleCard from "./SingleCard";
const ProjectCard = ({ project1, project2, onSelectProject }) => {
  return (
    <>
      <SingleCard
        project={project1}
        onSelectProject={onSelectProject}
        className="w-full lg:w-1/2"
      />
      {project2 && (
        <SingleCard
          project={project2}
          onSelectProject={onSelectProject}
          className="w-full lg:w-1/2 mt-4 lg:mt-0"
        />
      )}
    </>
  );
};
export default ProjectCard;
