/* eslint-disable no-unused-vars */
import React from "react";
import 'react-toastify/ReactToastify.css';
import './EmailCard.css'
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { IoMdCopy } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';

const EmailCard = () => {
  const email = "alex10mtz_rivera@outlook.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied!", {
      position: 'bottom-right',
      theme:'dark',
      autoClose:'3000'
    });
  };

  return (
    <div className="border-2 border-cyan-500 rounded-2xl p-4 shadow-lg bg-zinc-700 max-w-lg mx-auto">
      {/* Top */}
      <div className="flex items-center gap-2 text-2xl font-bold text-cyan-400">
        <PiMicrosoftOutlookLogoFill className="text-4xl" />
        <span>Email</span>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-white text-2xl px-2">
          {email}
        </p>
        <button
          onClick={handleCopy}
          className="flex items-center
          px-4 py-2 font-medium
          text-white bg-blue-600 rounded-md 
          hover:bg-blue-700 focus:outline-none indent-1">
          <IoMdCopy className="text-2xl" />
          Copy
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EmailCard;

