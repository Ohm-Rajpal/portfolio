import { React } from "react";
import CustomButton from "./CustomButton";
import { scrollTo } from '../scrollTo';

export default function MyNav() {

    const handleButtonClick = (id) => {
      scrollTo(id)
    }

    return (
    <nav className="plr-4 py-10 mb-10 flex justify-center">
      {/* <div className="text-cyan-300 text-xl font-bold py-2 px-4 underline-offset-8">
        <a className="text-2xl hidden sm:block animate-bounce" href="https://en.wikipedia.org/wiki/Ohm%27s_law" target="_blank">
          Ω
        </a>
        <a className="text-2xl block sm:hidden animate-pulse" href="https://en.wikipedia.org/wiki/Ohm%27s_law" target="_blank">
          Ω
        </a>
      </div> */}
    
      <ul className="flex justify-center rounded-md">
        {/* <li className="px-1">
          <CustomButton innerText={"Home"} onClick={() => handleButtonClick('home')} />
        </li> */}
        <li className="px-1">
          <CustomButton innerText={"Projects"} onClick={() => handleButtonClick('projects')} />
        </li>

        <li className="px-1">
          <CustomButton innerText={"Resume"} onClick={() => {
            window.location.href = "https://drive.google.com/file/d/1M_vaRet-f_DwfrEJWZ1FTM7olLXJ8f7w/view?usp=sharing";
          }}/>
        </li>

        <li className="px-1">
          <CustomButton innerText={"Contact"} onClick={() => handleButtonClick('footer')} />
        </li>
      </ul>
    </nav>
    )
}
