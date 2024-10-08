import React from "react";
import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { scrollTo } from "../scrollTo";
import CustomButton from "./CustomButton";

export default function MyFooter({mySize}) {

  const handleButtonClick = (id) => {
    scrollTo(id);
  }

    return (
      <div className="w-full h-auto pb-3">
        <div className="text-cyan-300 flex justify-center text-md font-bold py-3 px-4 underline underline-offset-8">
          <a className="hover:text-pink-400 text-2xl mb-4" href="mailto:ohm_rajpal@berkeley.edu">Contact Me</a>
        </div>

        <ul className="text-cyan-300 text-5xl flex flex-row justify-center space-x-6 text-md">
          <a className="hover:scale-125 hover:text-pink-400" href="https://github.com/Ohm-Rajpal" target="_blank"><TiSocialGithub size={mySize}/></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.instagram.com/ohmrajpal/?__d=1" target="_blank"><TiSocialInstagram size={mySize}/></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.linkedin.com/in/ohmrajpal" target="_blank"><TiSocialLinkedin size={mySize}/></a>
        </ul>        
        
        <div className="flex justify-center pt-4">
          <CustomButton innerText={"Home"} onClick={() => handleButtonClick('home')}/>
        </div>
        
        <div className="text-center text-wrap ">  
        
          <p className="text-white text-lg p-5 mt-4">Made with ⚡ by Ohm Rajpal</p>
          <p className="text-white text-lg p-5 mb-2">Copyright © 2024 Ohm Rajpal. All Rights Reserved.</p>
        </div>
      
      </div>
    )
}