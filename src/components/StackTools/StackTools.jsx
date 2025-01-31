/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ToolsCard from "../ToolsCard";
import Tools from "../../json/tools.json"; // Import JSON Document

const StackTools = () => {
    const [tools, setTools] = useState([]);

        useEffect(() => {
        // Simula una carga si necesitas
        setTools(Tools);
    }, []);

    return (
        <div className="tools-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {tools.map((tools, index) => (
                <ToolsCard key={index} name={tools.name} image={tools.image} description={tools.description} />
            ))}
        </div>
    );
};

export default StackTools;