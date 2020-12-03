import React from "react";
import CardComponet from "./CardComponet";
import projects from "../utils/projects";

console.log(projects);

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((pro, index) => (
        <CardComponet project={pro} key={index} />
      ))}
    </div>
  );
};

export default Projects;
