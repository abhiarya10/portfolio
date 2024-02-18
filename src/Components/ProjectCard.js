import React from "react";
import "./ProjectCard.css";

function ProjectCard({ projectDetails }) {
  return (
    <div className="project-card-div">
      <img src={projectDetails.projectImage} className="project-image" />
      <div className="project-info">
        <div className="project-title-div">
          <p className="project-title">{projectDetails.projectTitle}</p>
        </div>
        <div className="tech-used-div">
          <p className="tech-used">Tech Stack:- {projectDetails.techUsed}</p>
        </div>
        <div className="project-desc-div">
          <p className="project-desc">
            Description :- {projectDetails.projectDesc}
          </p>
        </div>
        <div className="projectLink-div">
          <a href={projectDetails.projectLink} target="_blank">
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
