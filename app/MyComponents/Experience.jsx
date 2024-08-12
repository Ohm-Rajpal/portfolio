import React from "react";

export default function Experience({imgName, title, description, skills, githubLink}) {
    return (        

    
    <div className="flex justify-center">    
        <a href={githubLink} target="_blank">
            <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg text-white border-white border-4 h-full">
                
                <div className="flex justify-center h-50">
                    <img src={imgName} alt="Ohm Rajpal"/>
                </div>
                
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white">{title}</div>
                    <p class="text-cyan-300 text-base">{description}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {/* Mapping logic to unpack array */}
                    {
                        skills.map((skill, index) => (
                            <span key={index} class="inline-block bg-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
                        ))
                    }
                </div>
            </div>
        </a>
    </div>
    )
}

