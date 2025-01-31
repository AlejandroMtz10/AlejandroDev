// eslint-disable-next-line no-unused-vars
import React from "react";
import './SocialContact.css'
import { PiLinkSimpleBold } from "react-icons/pi";
import BtnGitHub from "../BtnGitHub";
import BtnLinkedIn from "../BtnLinkedIn";

const SocialContact = () => {
    return (
        <div className="border-2 border-cyan-500 rounded-2xl px-4 py-2 shadow-lg bg-zinc-700 max-w-lg mx-auto">
            <div className="flex items-center gap-2 text-2xl font-bold text-cyan-400 pb-4">
                <PiLinkSimpleBold />
                <h1>Social links</h1>
            </div>

            <div className="flex gap-3">
                <BtnGitHub />
                <BtnLinkedIn />
            </div>
        </div>
    );
};

export default SocialContact;
