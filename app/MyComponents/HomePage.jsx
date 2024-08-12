import React from "react";
import Image from 'next/image'
import ChevronDownAnimated from "./ChevronDownAnimated";

export default function FrontPage() {

    return (
      <div className="text-center text-wrap p-10">
        <p className="text-2xl leading-8 text-white">Hello! I am...</p>
        <h2 className="text-6xl	py-2 text-cyan-300">Ohm Rajpal</h2>

        <div className="flex justify-center py-2">
          <img className="rounded-full object-scale-downh-48 w-80" src="/img/ohm-rajpal.jpg" alt="Ohm Rajpal"/>
        </div>
        
        <h3 className="text-2xl pt-4 text-white">Software Engineer and Aspiring Undergraduate Researcher</h3>
        
        <div className="flex justify-center">        
          <p className="sm text-lg py-5 leading-8 text-pretty text-white w-1/2">
          Second year ⚡ Electrical Engineering and Computer Sciences Major ⚡ at UC Berkeley with a passion
          in full stack web development 💻, machine learning 🧠, aerospace technology 🚀, and more! 
          </p>
        </div>
        <ChevronDownAnimated />
        
      </div>
    )
}