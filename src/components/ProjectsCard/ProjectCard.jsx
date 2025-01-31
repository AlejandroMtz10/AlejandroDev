/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import './projectCard.css';

const ProjectCard = ({ project, type, company, platform, picture, technologies, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <div>
        {/* Card */}
        <div className="xl rounded-lg overflow-hidden shadow-lg bg-slate-950">
            {/* Project picture */}
            <img
                className="w-full h-auto object-cover px-3 cursor-pointer"
                src={picture}
                alt={project}
                onClick={() => setIsModalOpen(true)} // Open modal
            />
            
            {/* Content */}
            <div className="p-6">
                <h3 className="mb-2 flex justify-center">
                    {project}
                </h3>
                <p className="text-lg text-white mb-1">
                    <span className="font-semibold">Type:</span> {type}
                </p>
                <p className="text-lg text-white mb-1">
                    <span className="font-semibold">Company:</span> {company}
                </p>
                <p className="text-lg text-white mb-1">
                    <span className="font-semibold">Platform:</span> {platform}
                </p>
                <p className="text-base text-gray-200 mb-4">
                    {description}
                </p>
                    {/* Technologies */}
                <h4>
                    Technologies
                </h4>
                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex items-center bg-slate-600 rounded-lg py-1 px-3">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-10 h-10 mr-2"
                            />
                            <span className="text-lg text-cyan-950">
                                <p className="text-lg text-sky-500">{tech.name}</p>
                            </span>
                        </div>
                    ))}
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
    company: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
        })
    ).isRequired,
    description: PropTypes.string.isRequired,
};

export default ProjectCard;
