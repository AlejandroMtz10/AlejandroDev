// eslint-disable-next-line no-unused-vars
import React,  { useState } from "react";
import PropTypes from "prop-types";

function ContestCard({ contest, picture, place, technologies, team, type, date, certificate }){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCertificateOpen, setIsCertificateOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="p-4">
            {/* Card */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                    src={picture}
                    alt="Image of the contest"
                    className="cursor-pointer"
                    onClick={toggleModal}
                />
                <div className="p-4">
                    <h2 className="font-bold text-xl mb-2">{contest}</h2>
                    <p className="text-gray-700 text-base">
                        Place: {place}.
                    </p>
                    <p className="text-gray-700 text-base">
                        Technologies: {technologies}
                    </p>
                    <p className="text-gray-700 text-base">
                        Team: {team}
                    </p>
                    <div className="py-2 text-right">
                        <p className="text-lg">Date: {date}</p>
                        <p className="text-lg">Contest: {type}</p>
                        <button
                            className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-600"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsCertificateOpen(true);
                            }}
                        >
                            View Certificate
                        </button>
                    </div>
                </div>
            </div>
    
            {/* Modal */}
            {isModalOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                onClick={toggleModal}
            >
                <img
                src={picture}
                alt="Picture of the contest"
                className="max-w-full max-h-full"
                />
            </div>
            )}

            {/* Certificate Modal */}
            {isCertificateOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="relative">
                    <button
                    className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={() => setIsCertificateOpen(false)}>
                        &times;
                    </button>
                    <img 
                        src={certificate} 
                        alt="Picture of the certificate"
                        className="max-w-screen-md max-h-screen-md object-contain"
                    />
                </div>
            </div>)}
        </div>
    );
}

ContestCard.propTypes = {
    contest: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    certificate: PropTypes.string.isRequired,
};

export default ContestCard;