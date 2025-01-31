/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import './Principal.css';
import profilePicture from '../../assets/resources/profile_picture.png';
import EmailCard from "../EmailCard";
import ResumeCard from "../ResumeCard";
import SocialContact from "../SocialContact";
import ProgrammingPages from "../ProgrammingPages";

export default function Home() {
    const [text, setText] = useState("Eng. Alejandro Martinez Rivera");
    const [isAnimating, setIsAnimating] = useState(false);
    const textOptions = [
        "Eng. Alejandro Martinez Rivera",
        "a software developer",
        "a computer systems engineer",
        "not a magician, I only write code",
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setIsAnimating(true); // Begin the animation
            setTimeout(() => {
                index = (index + 1) % textOptions.length;
                setText(textOptions[index]); // Change the text
                setIsAnimating(false); // Begin the animation to enter
            }, 1000); // Time to exit of the animation
        }, 3000); // Timer to change the text after 3 seconds

        return () => clearInterval(interval); // Clear the timer
    }, []);

    return (
        <div className="container mx-auto px-4">
            {/* Presentation */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-x-8 my-8">
                {/* Text */}
                <div className="text-center sm:text-left flex-1">
                    <h1 className="text-cyan-600 xl:text-4xl sm:text-4xl font-bold mb-4">
                        Hello, I am{" "}
                    <span
                        className={`text-cyan-500 inline-block transition-transform duration-500 ${
                            isAnimating ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                        }`}>
                        {text}
                    </span>
                    </h1>
                    <p className="text-cyan-400 xl:text-3xl sm:text-lg py-2">
                        I am a computer systems engineer specializing in software architecture and development. I enjoy roles such as QA Tester, software architect, or software developer because they allow me to apply my knowledge of software development throughout the software development life cycle. I am passionate about learning new technologies, solving problems, and creating solutions that meet user needs effectively.
                    </p>

                    {/* Experience */}
                    <div className="text-end pt-4 my-6">
                        <p className="text-cyan-400 sm:text-xl xl:text-2xl">
                            3 years of experience
                        </p>
                    </div>
                </div>
                {/* Picture */}
                <div className="mt-6 sm:mt-0 conainerImg">
                    <img
                        src={profilePicture}
                        alt="Profile picture Ing. Alejandro Martinez"
                        className="w-32 sm:w-48 h-auto rounded-full shadow-lg picture"
                    />
                </div>
            </div>

            {/* Information */}
            <div className="pb-6 pt-3">
                <h2 className="text-white text-center sm:lg xl:text-2xl font-semibold mb-6">
                    My information
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-y-6 sm:gap-x-8">
                    {/* Information cards */}
                    <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-6 p-4">
                        <EmailCard />
                        <ResumeCard />
                        <SocialContact />
                    </div>
                </div>
            </div>

            <div>
                <ProgrammingPages />
            </div>
        </div>
    );
}