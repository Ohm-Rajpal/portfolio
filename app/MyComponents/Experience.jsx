import { React, useState} from "react";

export default function Experience({justifyDir, imgName, title, description, skills, githubLink}) {
    
    // use react state

    return (        
        <div id="big" 
        className={`flex ${justifyDir} p-4`} 
        >
        <a className="transition ease-in delay-60 duration-150 hover:scale-110" href={githubLink} target="_blank">
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg text-white border-white hover:border-pink-300 border-4 h-full">
                
                <div className="flex justify-center h-32 pt-3">
                    <img src={imgName} alt="Ohm Rajpal"/>
                </div>
                
                <div class="px-3 py-1">
                    <div class="font-bold text-lg mb-2 text-white">{title}</div>
                    <p class="text-cyan-300 text-sm text-pretty">{description}</p>
                </div>
                <div class="px-3 pt-1 pb-1">
                    {
                        skills.map((skill, index) => (
                            <span key={index} class="inline-block bg-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:animate-pulse">{skill}</span>
                        ))
                    }
                </div>
            </div>
        </a>
    </div>
    )
}

