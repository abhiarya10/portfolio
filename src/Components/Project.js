import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import { projectList } from "../ProjectData";

function Project() {
  return (
    <div className="project-container">
      <div className="project-sec-div">
        <p className="project-text">Projects</p>
        {projectList.map((projectDetails) => (
          <ProjectCard
            projectDetails={projectDetails}
            key={projectDetails.projectID}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
