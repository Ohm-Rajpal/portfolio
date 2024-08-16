import react from "react";
import { scrollTo } from "../scrollTo";
import MyArrow from "./MyArrow";

export default function About() {
    
    
    const handleButtonClick = (id) => {
        scrollTo(id);
    }
    
    return (

        <div>
            <div className="text-center p-10">
                <h2 className="text-5xl mb-3 text-cyan-300 pb-5">About Me!</h2>
                
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-center items-center">
                    <div className="transition ease-in delay-10 duration-150 hover:scale-110 pr-3">
                        <img className="rounded-full object-cover w-96" src="/img/ohm.jpg" alt="Ohm Rajpal"/>
                    </div>
                    <p className="text-xl py-5 leading-8 text-pretty text-white w-full md:w-1/2">
                    Hello everyone! My name is Ohm, and I am a student at UC Berkeley. I have a variety of interests such as 
                    physics, astronomy, psychology, and music! In my free time, I enjoy hiking,
                    playing the cello, solving the daily Semantle puzzle, and hanging out with friends. 
                    Additionally, I love traveling and trying out different foods. Let&rsquo;s connect and work together! 
                    </p>
                </div>
            </div>

            <MyArrow onClick={() => handleButtonClick('projects')} />
        </div>
    )
}