// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { SiGithub } from "react-icons/si";
import './personalProjectCard.css';

const ProjectCard = ({ project, type, stack, picture, github, client, description, date }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div>
            {/* Card */}
            <div className="xl rounded-lg overflow-hidden shadow-lg bg-slate-950 py-4">
                {/* Project picture */}
                <img
                    className="w-full h-auto object-cover px-4 cursor-pointer"
                    src={picture}
                    alt={project}
                    onClick={() => setIsModalOpen(true)} // Open modal
                />
                
                {/* Content */}
                <div className="p-6">
                    <h2 className="mb-2">
                        {project}
                    </h2>
                    <ul className="text-2xl text-sky-300 mb-4">
                        <li>
                            <strong>Type:</strong> {type}
                        </li>
                        <li>
                            <strong>Client:</strong> {client}
                        </li>
                        <li>
                            <strong>Date:</strong> {date}
                        </li>
                    </ul>
                    <p className="text-gray-200 text-xl mb-4">
                        {description}
                    </p>

                    {/* Technologies*/}
                    <h4>
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {stack.map((stack, index) => (
                            <div key={index} className="flex items-center bg-slate-600 rounded-lg py-1 px-3">
                                <img
                                    src={stack.icon}
                                    alt={stack.tech}
                                    className="w-10 h-10 mr-2"
                                />
                                <span className="text-lg text-cyan-950">
                                    <p className="text-lg text-sky-500">{stack.tech}</p>
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row-reverse pt-4">
                        <a
                            href={github}
                            className="flex gap-2 items-center text-white text-xl bg-gray-800 rounded-lg hover:bg-gray-500 hover:text-black font-bold py-2 px-4">
                                <SiGithub />
                                GitHub
                        </a>
                    </div>
                </div>
            </div>
    
            {/* Modal */}
            {isModalOpen && (
            <div className="fixed inset-0 bg-slate-900 bg-opacity-75 flex justify-center items-center z-50">
                <div className="relative rounded-2xl bg-stone-700 max-w-4xl w-full p-10">
                    {/* Close button */}
                    <button
                        className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={() => setIsModalOpen(false)}>
                        &times;
                    </button>
    
                    {/* Modal picture */}
                    <img
                        src={picture}
                        alt={project}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
            )}
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(
        PropTypes.shape({
            tech: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        })
    ).isRequired,
    github: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ProjectCard;
