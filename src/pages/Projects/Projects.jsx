/* eslint-disable no-unused-vars */
import React from "react";
import ProjectList from "../../components/ProjectList";
import PersonalProjects from "../../components/PersonalProjects";
import './projects.css';

function Projects() {
    return(
        <div className="container mx-auto">
            <div className="flex justify-end">
                <h1>Projects</h1>
            </div>

            <div className="container">
                <h2 className="py-2">
                    Projects in companies
                </h2>
                <ProjectList />
            </div>
            
            <div className="container">
                <h2 className="py-2">
                    Personal projects
                </h2>
                <PersonalProjects />
            </div>
        </div>
    );
}

export default Projects;