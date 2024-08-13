import { React } from "react";
import CustomButton from "./CustomButton";
import { scrollTo } from '../scrollTo';

export default function MyNav() {

    const handleButtonClick = (id) => {
      scrollTo(id)
    }

    return (
    <nav className="plr-4 py-10 mb-10 flex justify-center">

    
      <ul className="flex justify-center rounded-md">

        <li className="px-1">
          <CustomButton innerText={"About Me"} onClick={() => handleButtonClick('about')} />
        </li>

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
