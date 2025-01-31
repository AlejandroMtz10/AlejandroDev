/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ContestCard from "../ContestCard";
import contests from "../../json/contests.json"; // Import JSON Document

const Contests = () => {
    const [contest, setContest] = useState([]);

        useEffect(() => {

        setContest(contests);
    }, []);

    return (
        <div className="contest-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
            {contest.map((contProg, index) => (
                <ContestCard 
                    key={index}
                    contest={contProg.contest}
                    picture={contProg.picture}
                    place={contProg.place}
                    technologies={contProg.technologies}
                    type={contProg.type}
                    date={contProg.date}
                />
            ))}
        </div>
    );
};

export default Contests;