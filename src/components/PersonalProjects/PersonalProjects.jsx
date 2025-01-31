/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCard from "../PersonalProjectsCard"; 
import personalProjects from "../../json/personalProjects.json"; // JSON

const PersonalProjects = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
        {personalProjects.map((personalProject, index) => (
            <ProjectCard 
                key={index}
                project={personalProject.project}
                type={personalProject.type}
                stack={personalProject.stack}
                picture={personalProject.picture}
                github={personalProject.github}
                client={personalProject.client}
                description={personalProject.description}
                date={personalProject.date}
            />
        ))}
        </div>
    );
};

export default PersonalProjects;
