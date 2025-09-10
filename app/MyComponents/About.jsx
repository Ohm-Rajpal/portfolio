import react from "react";
import { scrollTo } from "../scrollTo";
import MyArrow from "./MyArrow";
import Image from "next/image";

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
                        <Image 
                            className="rounded-full object-cover"
                            src="/img/OhmArnabCaltech.jpg" 
                            alt="Ohm Rajpal"
                            width={384} 
                            height={384}
                        />
                    </div>
                    <p className="text-xl py-5 leading-8 text-pretty text-white w-full md:w-1/2">
                    Hello everyone! My name is Ohm, and I'm a third year EECS major at UC Berkeley. I love hiking, 
                    boba, hackathons, trying new foods, solving puzzles, traveling, and spending time with friends! Let&rsquo;s connect and build together :&gt;
                    </p>
                </div>
            </div>

            <MyArrow onClick={() => handleButtonClick('projects')} />
        </div>
    )
}