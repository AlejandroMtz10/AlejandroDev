// eslint-disable-next-line no-unused-vars
import React from "react";
import myPicture from '../../assets/resources/alejandro.png';
import './MyInfo.css';
import BtnResume from '../BtnResumeEng'
function MyInfo(){
    return(
        <div className="container">
            <div className="container flex items-center">
                <div className="container-xl pr-7">
                    <img src={myPicture} alt="Alejandro Martinez" className="my-picture float-start"/>
                </div>
                <div className="container mx-auto justify-start">
                    <p className="text-start text-cyan-400 pb-3 py-3">
                        Hi! I am Alejandro Martinez Rivera but my friends tell me Alex or Ale and I am a Computer Systems Engineer specializing in software architecture and design, dedicated to creating innovative and tailored solutions that address real-world needs. My approach combines thoughtful design with a deep understanding of user requirements to deliver impactful software.
                    </p>

                    <p className="text-start text-cyan-400 pb-3 py-3">
                        I thrive on solving challenges and turning ideas into functional, efficient systems that make a difference. Whether it is crafting custom tools for businesses or collaborating on unique projects, I am driven by the goal of making technology work for people.
                    </p>
                    
                    <div className="flex justify-between">
                        <p className="text-start text-white pb-3 py-3 place-content-center">
                            Let’s build something great together!!!
                        </p>
                        <div className="animate-bounce text-2xl hover:animate-pulse hover:text-3xl">
                            <BtnResume />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;