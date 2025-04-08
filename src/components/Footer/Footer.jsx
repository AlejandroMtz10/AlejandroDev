// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

function Footer() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-6 pb-2 pt-3">
                {/* GitHub */}
                <div className="text-white hover:text-cyan-600">
                    <a
                        href="https://github.com/AlejandroMtz10"
                        className="flex items-center gap-2 text-2xl sm:text-4xl"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="text-white hover:text-cyan-600">
                    <a
                        href="https://www.linkedin.com/in/alejandro-martínez-rivera-a35541248/"
                        className="flex items-center gap-2 text-2xl sm:text-4xl"
                    >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
            <div className="flex space-x-8 place-content-center items-center text-lg text-white pb-2">
                <div className="place-content-center place-items-center">
                    <p className="items-center">Made with react js and tailwind css.</p>
                </div>
            </div>

            <div className="flex space-x-8 place-content-center items-center text-lg text-white pb-3">
                <div className="place-content-center place-items-center flex">
                    <FaCode />
                    <span className="indent-1">By Eng. Alejandro Martinez</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
