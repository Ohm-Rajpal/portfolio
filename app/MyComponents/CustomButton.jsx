import React from "react";

export default function CustomButton({innerText, onClick }) {

  return (
        <button onClick={onClick}
        className="relative overflow-hidden rounded-full border-2 border-cyan-300 text-cyan-300 font-bold py-2 px-4 m-1 group cursor-pointer">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-cyan-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-cyan-300 transition duration-300 group-hover:text-white ease">{innerText}</span>
        </button>
    )
}