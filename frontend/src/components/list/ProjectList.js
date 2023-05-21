import React from "react";
import ProjectCard from "../cards/ProjectCard";
import ProjectPagination from "../pagination/ProjectPagination";
import { useSelector } from "react-redux";
import LoadingSpinner from "../spinner/LoadingSpinner";

const ProjectList = () => {
  // map ile projeeler gezilecek

  const getAllProject = useSelector((state) => state.project.getAllProject);

  return (
    <div className="container mx-auto ">
      <h1 className="text-xl my-3 text-center">Projects</h1>
      <hr />
      {getAllProject.loading ? (
        <LoadingSpinner />
      ) : (
        <div className="d-flex  flex-wrap  justify-content-between">
          {getAllProject.projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
