/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbInfoSquare } from "react-icons/tb";
import { BsFillSendFill } from "react-icons/bs";
import { LuFolderCode } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import smallLogo from "../../assets/resources/small_logo.png";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="w-full bg-[#1a1a1a] text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
            {/* Logo */}
            <div className="flex items-center">
            <img src={smallLogo} alt="Alex Dev" className="w-32 h-auto sm:w-40" />
            </div>

            {/* Botón Hamburguesa */}
            <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-3xl">
                <GiHamburgerMenu />
            </button>
            </div>

            {/* Menú Links - Desktop */}
            <ul className="hidden sm:flex gap-x-6">
            <Link to="/">
                <li className="flex flex-col items-center text-xl hover:underline hover:text-sky-600 duration-300">
                <IoHomeOutline />
                Home
                </li>
            </Link>
            <Link to="/AboutMe">
                <li className="flex flex-col items-center text-xl hover:underline hover:text-sky-600 duration-300">
                <TbInfoSquare />
                About Me
                </li>
            </Link>
            <Link to="/Contact">
                <li className="flex flex-col items-center text-xl hover:underline hover:text-sky-600 duration-300">
                <BsFillSendFill />
                Contact
                </li>
            </Link>
            <Link to="/Projects">
                <li className="flex flex-col items-center text-xl hover:underline hover:text-sky-600 duration-300">
                <LuFolderCode />
                Projects
                </li>
            </Link>
            </ul>
        </div>

        {/* Menú desplegable - Mobile */}
        {isOpen && (
            <ul className="sm:hidden flex flex-col items-center gap-4 pb-4 animate-slide-down">
            <Link to="/" onClick={toggleMenu}>
                <li className="flex items-center gap-2 text-xl hover:underline hover:text-sky-500">
                <IoHomeOutline /> Home
                </li>
            </Link>
            <Link to="/AboutMe" onClick={toggleMenu}>
                <li className="flex items-center gap-2 text-xl hover:underline hover:text-sky-500">
                <TbInfoSquare /> About Me
                </li>
            </Link>
            <Link to="/Contact" onClick={toggleMenu}>
                <li className="flex items-center gap-2 text-xl hover:underline hover:text-sky-500">
                <BsFillSendFill /> Contact
                </li>
            </Link>
            <Link to="/Projects" onClick={toggleMenu}>
                <li className="flex items-center gap-2 text-xl hover:underline hover:text-sky-500">
                <LuFolderCode /> Projects
                </li>
            </Link>
            </ul>
        )}
        </div>
    );
}

export default Navbar;
