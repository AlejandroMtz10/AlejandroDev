// eslint-disable-next-line no-unused-vars
import React,  { useState } from "react";
import PropTypes from "prop-types";

function ContestCard({ contest, picture, place, technologies, type, date }){
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    <div className="py-2 text-right">
                        <p className="text-lg">Date: {date}</p>
                        <p className="text-lg">Contest: {type}</p>
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
                alt="Modal example"
                className="max-w-full max-h-full"
                />
            </div>
            )}
        </div>
    );
}

ContestCard.propTypes = {
    contest: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ContestCard;