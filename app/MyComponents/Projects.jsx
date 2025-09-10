import { React } from "react";
import Experience from "./Experience";
import { scrollTo } from "../scrollTo";
import MyArrow from "./MyArrow";

export default function Projects() {
    
  const handleButtonClick = (id) => {
    scrollTo(id)
  }

  return (
    <div className="text-center text-wrap p-10">
        <h2 className="text-5xl mb-3 text-cyan-300">Here are some of my projects...</h2>
        

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 md:gap-8 mb-1">
            
        <Experience
        justifyDir={"justify-end"} 
        imgName={"/img/caltech.png"}
        title={'Neurosphere'}
        description={"Won 1st place at Caltech's largest hackathon! Built a brain tumor detector with MRI analysis, health insights, and a 3D interactive brain model!"}
        skills={['FastAPI', 'Docker', 'React', 'MongoDB', 'OpenAI API', 'Tensorflow']}
        githubLink={'https://github.com/arniber21/Neurosphere.git'}
        /> 
        
        <Experience 
        justifyDir={"justify-start"}
        imgName={"/img/NewSpaceV2.jpeg"}
        title={'AI Job Webscraper'}
        description={"Fullstack AI-powered job scraper with weekly updates built for my club NewSpace @ Berkeley"}
        skills={['Node.js', 'Express.js', 'TypeScript', 'MongoDB Atlas', 'SerpAPI', 'OpenAI API']}
        githubLink={'https://github.com/Ohm-Rajpal/NewSpace-Scraper-V2'}
        /> 

        <Experience 
        justifyDir={"justify-end"}
        imgName={"/img/bear.png"}
        title={'Personal Website'}
        description={"The website you are looking at right now! Created modular components using React with custom Tailwind CSS styling."}
        skills={['Next.js', 'React', 'Tailwind CSS', 'JavaScript']}
        githubLink={'https://github.com/Ohm-Rajpal/portfolio'}
        /> 
      
        <Experience
        justifyDir={"justify-start"}
        imgName={"/img/gan.png"}
        title={'Deep Oculos 1'}
        description={"Won 2nd prize at Berkeley's 5th Datathon! Recieved eye retinal data from C. Light Technologies. Generated Synthetic Retinal Eye Motion Videos with Deep Convolutional GAN"}
        skills={['Python', 'Tensorflow', 'Scikit-Learn', 'OpenCV', 'Seaborn / Matplotlib', 'numpy']}
        githubLink={'https://github.com/MarcusUniversee/DeepOculos'}
        />  

        </div>
              
        <MyArrow onClick={() => handleButtonClick('footer')} />

      </div>
    )
}