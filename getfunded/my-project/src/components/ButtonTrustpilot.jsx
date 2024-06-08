import React from "react";
import { arrowUp } from "../assets";

const ButtonTrustpilot = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-pink-1 rounded-[10px] outline-none ${styles}`} >
    <div className="flex items-center">
      <div>
        To the Trustpilot Profile
      </div>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-container" />
    </div>
  </button>
);

export default ButtonTrustpilot;