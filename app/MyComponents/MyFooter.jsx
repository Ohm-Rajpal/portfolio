import React from "react";
import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";

export default function MyFooter() {
    return (
      <div className="w-full h-auto pb-3">
        <div className="text-cyan-300 flex justify-center text-md font-bold py-3 px-4 underline underline-offset-8">
          <a className="hover:text-pink-400 text-2xl mb-4" href="mailto:ohm_rajpal@berkeley.edu">Contact Me</a>
        </div>

        <ul className="text-cyan-300 text-5xl flex flex-row justify-center space-x-6 text-md">
          <a className="hover:scale-125 hover:text-pink-400" href="https://github.com/Ohm-Rajpal" target="_blank"><TiSocialGithub /></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.instagram.com/ohmrajpal/?__d=1" target="_blank"><TiSocialInstagram /></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.linkedin.com/in/ohmrajpal" target="_blank"><TiSocialLinkedin /></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><FaDiscord /></a>
        </ul>
      </div>
    )
}