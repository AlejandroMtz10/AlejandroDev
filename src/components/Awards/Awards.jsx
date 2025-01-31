// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import AwardsCard from "../AwardsCard";
import AwardsJSON from "../../json/awards.json"; // Import JSON Document

function Awards() {
    const [awards, setAwards] = useState([]);
        useEffect(() => {
        setAwards(AwardsJSON);
    }, []);

    return (
        <div className="awards-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6">
            {awards.map((award, index) => (
                <AwardsCard
                    key={index}
                    title={award.title}
                    image={award.image}
                    description={award.description}
                    year={award.year}
                />
            ))}
        </div>
            
    );
}

export default Awards;