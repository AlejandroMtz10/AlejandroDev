// eslint-disable-next-line no-unused-vars
import React from "react";
import myPicture from '../../assets/resources/alejandro.jpeg';
import BtnResume from '../BtnResumeEng';
import './MyInfo.css';

function MyInfo() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
            <div className="flex-shrink-0">
                <img 
                    src={myPicture} 
                    alt="Alejandro Martinez" 
                    className="w-80 h-80 md:w-80 md:h-80 rounded-2xl object-cover shadow-md my-picture" 
                />
            </div>

            <div className="flex-1 text-cyan-400 space-y-4 text-start">
                <p>
                    Hi! I am Alejandro Martinez Rivera but my friends tell me Alex or Ale and I am a Computer Systems Engineer specializing in software architecture and design, dedicated to creating innovative and tailored solutions that address real-world needs. My approach combines thoughtful design with a deep understanding of user requirements to deliver impactful software.
                </p>
                <p>
                    I thrive on solving challenges and turning ideas into functional, efficient systems that make a difference. Whether it is crafting custom tools for businesses or collaborating on unique projects, I am driven by the goal of making technology work for people.
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-white pt-4">
                    <p className="pb-2 sm:pb-0">Let’s build something great together!!!</p>
                    <div className="animate-bounce text-2xl hover:animate-pulse hover:text-3xl">
                        <BtnResume />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;