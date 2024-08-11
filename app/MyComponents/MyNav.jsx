import React from "react";

export default function MyNav({navBar}) {
    
    return (<nav className="plr-4 py-10 mb-12 flex justify-between">
              
      <div className="text-cyan-300 text-xl px-3 font-bold py-2 px-4 underline underline-offset-8">
        <p className="hidden sm:block animate-bounce">
          ⚡V = IR ⚡
        </p>
        <p className="block sm:hidden">
          Ω
        </p>
      </div>
    
      <ul className="flex justify-center pr-4 rounded-md">
        <li className="px-2">
          <button className="focus:ring focus:ring-violet-300 border border-cyan-300 text-cyan-300 hover:bg-pink-400 hover:text-white font-bold py-2 px-4 rounded-full">
            Home
          </button>
        </li>
        
        <li className="px-2">
          <button className="focus:ring focus:ring-violet-300 border border-cyan-300 text-cyan-300 hover:bg-pink-400 hover:text-white font-bold py-2 px-4 rounded-full">
            About
          </button>
        </li>
          
        <li className="px-2">
          <button className="focus:ring focus:ring-violet-300 border border-cyan-300 text-cyan-300 hover:bg-pink-400 hover:text-white font-bold py-2 px-4 rounded-full">
            Resume
          </button>
        </li>
        
        <li className="pl-2">
          <button className="focus:ring focus:ring-violet-300 border border-cyan-300 text-cyan-300 hover:bg-pink-400 hover:text-white font-bold py-2 px-4 rounded-full">
            Contact
          </button>
        </li>
      </ul>
    
    </nav>
    )
}