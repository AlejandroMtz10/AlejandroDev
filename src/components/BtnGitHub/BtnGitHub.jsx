// eslint-disable-next-line no-unused-vars
import React from "react";
import { SiGithub } from "react-icons/si";

function BtnGitHub() {
    const goToGitHub = () => {
        window.location.href = 'https://github.com/AlejandroMtz10';
    };

    return (
        <button 
            onClick={goToGitHub} 
            className="flex px-6 py-3 text-white bg-gray-800 rounded-lg hover:bg-gray-500 hover:text-black
                        text-2xl font-bold gap-2 items-center">
            <SiGithub />
            GitHub
        </button>
    );
}

export default BtnGitHub;