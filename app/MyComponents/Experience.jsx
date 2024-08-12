import React from "react";

export default function Experience({justifyDir, imgName, title, description, skills, githubLink}) {

    

    return (        


    
    <div className={`flex ${justifyDir}`}>

        <a href={githubLink} target="_blank">
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg text-white border-white hover:border-pink-300 border-4 h-full">
                
                <div className="flex justify-center h-40 pt-5">
                    <img src={imgName} alt="Ohm Rajpal"/>
                </div>
                
                <div class="px-4 py-2">
                    <div class="font-bold text-lg mb-2 text-white">{title}</div>
                    <p class="text-cyan-300 text-sm">{description}</p>
                </div>
                <div class="px-4 pt-2 pb-2">
                    {/* Mapping logic to unpack array */}
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

