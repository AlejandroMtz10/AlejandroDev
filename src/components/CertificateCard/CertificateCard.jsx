// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
const CertificateCard = ({ course, platform, picture }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="relative w-70 h-86 rounded-lg overflow-hidden shadow-lg group">
        {/* Picture */}
        <img
            src={picture}
            alt={course}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover content */}
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-bold mb-2">{course}</h3>
            <p className="text-gray-300 text-sm text-center mb-4">{platform}</p>
            <button
            className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-600"
            onClick={openModal}
            >
            View Certificate
            </button>
        </div>

        {/* Modal to see the picture */}
        {modalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="relative">
                    <button
                    className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={closeModal}>
                        &times;
                    </button>
                    <img
                        src={picture}
                        alt={course}
                        className="max-w-screen-lg max-h-screen-md object-contain"
                    />
                </div>
            </div>
        )}
        </div>
    );
};

CertificateCard.propTypes = {
    course: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};


export default CertificateCard;
