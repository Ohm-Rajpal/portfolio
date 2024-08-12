import React from "react";
import ChevronDownAnimated from "./ChevronDownAnimated";
import Experience from "./Experience";

export default function Projects() {
    return (
        
    <div className="text-center text-wrap p-10">
        <h2 className="text-6xl mb-5 text-cyan-300">Here are some of my projects...</h2>
        

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 mb-6">
            
        <Experience 
        imgName={"/img/inventory.png"}
        title={'Inventory Management'}
        description={"Developed a real-time CRUD inventory management system using Next.js, TypeScript, and Firebase. Used React and Material UI for the interactive design, TypeScript for type safety, and Firebase for the backend to enable real-time feedback!"}
        skills={['Next.js', 'React', 'TypeScript', 'Firebase', 'Material UI']}
        githubLink={'https://github.com/Ohm-Rajpal/inventory-tracker'}
        /> 

        
        <Experience 
        imgName={"/img/magnifying.jpg"}
        title={'Reverse Semantle'}
        description={"Fun NLP project that sucessfully reverse engineers semantle using gensim. Currently working on the front end now"}
        skills={['Python', 'gensim', 'Next.js', 'TypeScript', 'React']}
        githubLink={'https://github.com/Ohm-Rajpal/Reverse-Semantle'}
        /> 

        <Experience 
        imgName={"/img/bear.png"}
        title={'Personal Website'}
        description={"The website you are looking at right now!! :D"}
        skills={['Next.js', 'React', 'Tailwind CSS', 'JavaScript']}
        githubLink={'https://github.com/Ohm-Rajpal/portfolio'}
        /> 

      
        <Experience
        imgName={"/img/gan.png"}
        title={'Deep Oculos 1'}
        description={"Won 2nd prize at Berkeley's 5th Datathon! Recieved eye retinal data from C. Light Technologies Generated Synthetic Retinal Eye Motion Videos with Deep Convolutional GAN"}
        skills={['Python', 'Tensorflow', 'Scikit-Learn', 'OpenCV', 'Seaborn / Matplotlib', 'numpy']}
        githubLink={'https://github.com/MarcusUniversee/DeepOculos'}
        />  

        </div>
        

        <ChevronDownAnimated />
        
      </div>
    )
}