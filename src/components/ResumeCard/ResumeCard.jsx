/* eslint-disable no-unused-vars */
import React from "react";
import './ResumeCard.css'
import { IoIosDocument } from "react-icons/io";
import BtnResumeEng from "../BtnResumeEng";

const ResumeCard = () => {
    return (
        <div className="border-2 border-cyan-500 rounded-2xl p-4 shadow-lg bg-zinc-700 max-w-lg mx-auto">
            {/* Top */}
            <div className="flex items-center gap-2 text-2xl font-bold text-cyan-400">
            <IoIosDocument className="text-4xl" />
                <span>Resume</span>
            </div>

            {/* Bottom */}
            <div className="flex justify-between items-center mt-6">
                <p className="pr-4 text-2xl font-bold text-white">
                    Format: PDF
                </p>
                {/*English version of my resume*/}
                <BtnResumeEng />
            </div>
        </div>
    );
};

export default ResumeCard;
