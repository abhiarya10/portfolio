import React, { useContext } from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import { projectList } from "../ProjectData";
import { darkModeContext } from "../globalState/globalDarkMode";

function Project({ forwardRef }) {
  const { globalDark } = useContext(darkModeContext);
  return (
    <div className="project-container" ref={forwardRef}>
      <div
        className={`${globalDark ? "dark-project-sec-div" : "project-sec-div"}`}
      >
        <p className={`${globalDark ? "dark-project-text" : "project-text"}`}>
          Projects
        </p>
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

export default React.forwardRef((props, ref) => (
  <Project forwardRef={ref} {...props} />
));
