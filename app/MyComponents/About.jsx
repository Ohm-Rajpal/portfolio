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
                <h2 className="text-5xl mb-3 text-cyan-300 pb-5">About Me</h2>
                
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-center items-center">
                    <div className="transition ease-in delay-10 duration-150 hover:scale-110 pr-3">
                        <img className="rounded-full object-cover w-96" src="/img/ohm.jpg" alt="Ohm Rajpal"/>
                    </div>
                    <p className="text-xl py-5 leading-8 text-pretty text-white w-full md:w-1/2">
                    Hello! My name is Ohm, and I am an Electrical Engineering and Computer Sciences (EECS) student at UC Berkeley. I am currently
                    building full stack web applications and learning more about LLMs. When I am not coding, some of my hobbies inlcude
                    swimming, playing Minecraft, and solving the daily Semantle puzzle! Let's connect and work together! 
                    </p>
                </div>
            </div>

            <MyArrow onClick={() => handleButtonClick('projects')} />
        </div>


        // <div className="text-center text-wrap p-10">
        //     <h2 className="text-5xl mb-3 text-cyan-300">About Me!</h2>
            
        //     <div className="flex flex-wrap md:flex-row space-x-5 flex-col justify-center items-center">
        //             <div className="transition ease-in delay-10 duration-150 hover:scale-110">
        //                 <img className="rounded-full object-scale-downh-48 w-96" src="/img/ohm.jpg" alt="Ohm Rajpal"/>
        //             </div>
        //         <p className="sm text-lg py-5 leading-8 text-pretty text-white w-1/2">
        //         Hello! My name is Ohm, a 2nd year Electrical Engineering and Computer Sciences (EECS) student at UC Berkeley, and am
        //         graduating in the spring of 2027. I am actively learning full stack web development, LLMs, and optical physics. In my free
        //         time, I enjoy playing Minecraft ⛏️, solving the daily Semantle puzzle 🧩, and hanging out with friends 😄. 
        //         Additionally, I love traveling ✈️ and trying out different foods! 😋 
        //         </p>
        //     </div>
        // </div>
    )
}