import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function MyArrow({ onClick }) {
    
    return (
      <div className="flex justify-center items-center">
        <div className="hover:scale-110">
          <div className="hover:text-pink-300 p-2 rounded-full animate-bounce text-white" onClick={onClick}>
            <FaChevronDown className="text-md"/>
          </div>
        </div>
      </div>
    )
}