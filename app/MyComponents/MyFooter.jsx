import React from "react";
import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";

export default function MyFooter({myColor}) {
    return (
      <div>
        <ul className="text-cyan-300 text-5xl flex flex-row justify-center space-x-6">
          
          <a className="hover:scale-125 hover:text-pink-400" href="https://github.com/Ohm-Rajpal" target="_blank"><TiSocialGithub/></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.instagram.com/ohmrajpal/?__d=1" target="_blank"><TiSocialInstagram/></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.linkedin.com/in/ohmrajpal" target="_blank"><TiSocialLinkedin /></a>
        </ul>
      </div>
    )
}