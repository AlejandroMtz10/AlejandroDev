/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbInfoSquare } from "react-icons/tb";
import { BsFillSendFill } from "react-icons/bs";
import { LuFolderCode } from "react-icons/lu";
import smallLogo from "../../assets/resources/small_logo.png";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-6 text-white">
        {/* Logo */}
        <div className="mb-4 sm:mb-0">
            <img 
            src={smallLogo} 
            alt="Alex Dev" 
            className="w-32 h-auto sm:w-40"
            />
        </div>

        {/* Navigation Links */}
        <div>
            <ul className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-6">
            <Link to="/">
                <li className="flex flex-col items-center text-xl sm:text-2xl hover:underline hover:text-sky-600 duration-300">
                <IoHomeOutline />
                Home
                </li>
            </Link>
            <Link to="/AboutMe">
                <li className="flex flex-col items-center text-xl sm:text-2xl hover:underline hover:text-sky-600 duration-300">
                <TbInfoSquare />
                About Me
                </li>
            </Link>
            <Link to="/Contact">
                <li className="flex flex-col items-center text-xl sm:text-2xl hover:underline hover:text-sky-600 duration-300">
                <BsFillSendFill />
                Contact
                </li>
            </Link>
            <Link to="/Projects">
                <li className="flex flex-col items-center text-xl sm:text-2xl hover:underline hover:text-sky-600 duration-300">
                <LuFolderCode />
                Projects
                </li>
            </Link>
            </ul>
        </div>
        </div>
    );
}

export default Navbar;
