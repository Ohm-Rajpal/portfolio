import React from "react";
import Image from "next/image";

export default function Experience({ justifyDir, imgName, title, description, skills, githubLink }) {
  return (
    <div id="big" className={`flex ${justifyDir} p-4`}>
      <a
        className="transition ease-in delay-60 duration-150 hover:scale-110"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg text-white border-white hover:border-pink-300 border-4 h-full">
          
          {/* Image container preserving aspect ratio */}
          <div className="relative w-32 h-32 pt-3 mx-auto">
            <Image
              src={imgName}
              alt="Project Image"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Title & Description */}
          <div className="px-3 py-1">
            <div className="font-bold text-lg mb-2 text-white">{title}</div>
            <p className="text-cyan-300 text-sm text-pretty">{description}</p>
          </div>
          
          {/* Skills */}
          <div className="px-3 pt-1 pb-1">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:animate-pulse"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </a>
    </div>
  );
}
