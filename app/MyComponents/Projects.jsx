import React from "react";
import ChevronDownAnimated from "./ChevronDownAnimated";

export default function Projects() {
    return (
        
<div className="text-center text-wrap p-10">
        <h2 className="text-6xl	py-2 mb-5 text-cyan-300">Here are some of my projects...</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 mb-6 bg-white">

            <div className="rounded-full w-1/2">
                hi
            </div>
            
            <div className="rounded-full w-1/2">
                hi
            </div>

            <div className="rounded-full w-1/2">
                hi
            </div>

            <div className="rounded-full w-1/2">
                hi
            </div>


        </div>
        

        <ChevronDownAnimated />
        
      </div>
    )
}