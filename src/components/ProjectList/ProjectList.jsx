/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCard from "../ProjectsCard"; // Asegúrate de que la ruta sea correcta
import projects from "../../json/projects.json"; // JSON con la información de los proyectos

const ProjectList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
        {projects.map((project, index) => (
            <ProjectCard 
            key={index}
            project={project.project}
            type={project.type}
            company={project.company}
            platform={project.platform}
            picture={project.picture}
            technologies={project.technologies}
            description={project.description}
            />
        ))}
        </div>
    );
};

export default ProjectList;
