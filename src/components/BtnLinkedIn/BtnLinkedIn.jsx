// eslint-disable-next-line no-unused-vars
import React from "react";
import { ImLinkedin } from "react-icons/im";

function BtnLinkedIn() {
    const goToLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/alejandro-martínez-rivera-a35541248/';
    };

    return (
        <button 
            onClick={goToLinkedIn} 
            className="flex px-6 py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-400 hover:text-slate-50
                        text-2xl font-bold gap-2 items-center">
            <ImLinkedin />
            LinkedIn
        </button>
    );
}

export default BtnLinkedIn;