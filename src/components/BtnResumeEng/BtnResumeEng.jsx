// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFilePdf } from "react-icons/fa";

const BtnResumeEng = () => {
    const handleOpenResume = () => {
        const resumeEngUrl = "/documents/AlejandroMartinezRivera-Resume.pdf";
        window.open(resumeEngUrl, "_blank");
    };

    return (
        <button
            onClick={handleOpenResume}
            className="flex items-center px-4 py-2 
            bg-blue-600 text-white indent-1
            font-medium rounded-md hover:bg-blue-700">
                <FaFilePdf />
                Resume
        </button>
    );
};

export default BtnResumeEng;
