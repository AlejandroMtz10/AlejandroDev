/* eslint-disable react/prop-types */
import "react";

// TechCard.jsx
const TechCard = ({ name, image }) => {
    return (
        <div className="tech-card bg-stone-600 hover:animate-pulse p-4 border rounded-lg shadow-md flex flex-col items-center">
            <img src={image} alt={`${name} logo`} className="w-20 h-20 mb-2" />
            <h3 className="text-2xl font-bold text-cyan-500">{name}</h3>
        </div>
    );
};

export default TechCard;