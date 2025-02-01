/* eslint-disable no-unused-vars */
import React from "react";
import imgBeecrowd from '../../assets/pictures/beecrowd.jpg';
import imgLeetCode from '../../assets/pictures/LeetCode.jpg'
import './ProgrammingPages.css';

export default function ProgrammingPages() {
    const goBeecrowd = () => {
        window.location.href = 'https://judge.beecrowd.com/es/profile/802361';
    };

    const goLeetcode = () => {
        window.location.href = 'https://leetcode.com/u/alejandromtz10/';
    };

    return(
        <div className="container">
            <h2 className="p-4">
                Platforms to practice programming
            </h2>
            <div className="container-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-center">
                {/* Beecrowd card */}
                <div className="max-w-xs bg-slate-950 rounded-2xl shadow-lg overflow-hidden mx-auto">
                    {/* Picture */}
                    <img src={imgBeecrowd} alt="Beecrowd" className="w-full h-42 object-cover" />
                    {/* Content */}
                    <div className="p-4">
                        <h3 className="text-2xl text-white">Beecrowd</h3>
                        <p className="pBeecrowd text-lg mt-2">
                            A platform for solving algorithmic problems and improving programming skills, used in competitive programming.
                        </p>
                        {/* Button */}
                        <button onClick={goBeecrowd} className="btnBeecrowd mt-4 inline-block text-white text-lg py-2 px-4 rounded-lg shadow transition duration-300">
                            Beecrowd
                        </button>
                    </div>
                </div>

                {/* LeetCode card */}
                <div className="max-w-xs bg-slate-950 rounded-2xl shadow-lg overflow-hidden mx-auto">
                    {/* Picture */}
                    <img src={imgLeetCode} alt="LeetCode" className="w-full h-46 object-cover" />
                    {/* Content */}
                    <div className="p-4">
                        <h3 className="text-2xl text-white">LeetCode</h3>
                        <p className="pLeetCode text-lg mt-2">
                            A platform to practice coding challenges and prepare for technical interviews with problems from real-world companies.
                        </p>
                        {/* Button */}
                        <button onClick={goLeetcode} className="btnLeetCode mt-4 inline-block text-white text-lg py-2 px-4 rounded-lg shadow transition duration-300">
                            LeetCode
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}