import { React, forwardRef } from "react";
import CustomButton from "./CustomButton";

export default function MyNav() {
    
    return (
    <nav className="plr-4 py-10 mb-12 flex justify-between">
      <div className="text-cyan-300 text-xl font-bold py-2 px-4 underline underline-offset-8">
        <a className="hidden sm:block animate-bounce" href="https://en.wikipedia.org/wiki/Ohm%27s_law" target="_blank">
          ⚡V = IR ⚡
        </a>
        <a className="block sm:hidden animate-pulse" href="https://en.wikipedia.org/wiki/Ohm%27s_law" target="_blank">
          Ω
        </a>
      </div>
    
      <ul className="flex justify-center pr-4 rounded-md">
        <li className="px-1">
          <CustomButton innerText={"Home"} />
        </li>
        
        <li className="px-1">
          <CustomButton innerText={"Projects"} />
        </li>
          
        <li className="px-1">
          <CustomButton innerText={"Resume"} />
        </li>
        
        <li className="px-1">
          <CustomButton innerText={"Contact"} />
        </li>
      </ul>
    </nav>
    )
}
