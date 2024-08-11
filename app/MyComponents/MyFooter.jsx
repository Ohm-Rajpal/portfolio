import React from "react";
import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";

export default function MyFooter({myColor}) {
    return (
      <div>
        <ul className="text-cyan-300 text-5xl flex flex-row justify-center space-x-6">
          <TiSocialGithub href="https://github.com/Ohm-Rajpal"/>
          <TiSocialInstagram href="https://www.instagram.com/ohmrajpal/?__d=1" />
          <TiSocialLinkedin href="https://www.linkedin.com/in/ohmrajpal/"/>
        </ul>
      </div>
    )
}