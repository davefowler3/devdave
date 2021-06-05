import React from "react";
import "./Projects.css";

import worksList from "./WorksList";

const Projects = () => {
  const workObj = [worksList];

  return (
    <div className="projects-container">{workObj.map(worksList.title)}</div>
  );
};

export default Projects;
