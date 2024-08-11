import React from "react";
import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";

export default function MyFooter() {
    return (
      <div>
        <div className="text-cyan-300 hover:text-pink-400 flex justify-center text-md font-bold py-3 px-4 underline underline-offset-8">
          <a href="mailto:ohm_rajpal@berkeley.edu">Contact Me</a>
        </div>

        <ul className="text-cyan-300 text-5xl flex flex-row justify-center space-x-6">
          <a className="hover:scale-125 hover:text-pink-400" href="https://github.com/Ohm-Rajpal" target="_blank"><TiSocialGithub /></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.instagram.com/ohmrajpal/?__d=1" target="_blank"><TiSocialInstagram /></a>
          <a className="hover:scale-125 hover:text-pink-400" href="https://www.linkedin.com/in/ohmrajpal" target="_blank"><TiSocialLinkedin /></a>
        </ul>
      </div>
    )
}