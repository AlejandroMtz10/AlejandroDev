// eslint-disable-next-line no-unused-vars
import React,  { useState } from "react";
import PropTypes from "prop-types";

function AwardsCard({ title, image, description, year }){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="p-4">
            {/* Card */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <img
                src={image}
                alt="Image of the award ceremony"
                className="cursor-pointer"
                onClick={toggleModal}
            />
            <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
                <div className="place-items-end">
                    <p>
                        {year}
                    </p>
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
                src={image}
                alt="Modal example"
                className="max-w-full max-h-full"
                />
            </div>
            )}
        </div>
    );
}

AwardsCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
};

export default AwardsCard;