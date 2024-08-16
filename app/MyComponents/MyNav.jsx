import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { scrollTo } from '../scrollTo';

export default function MyNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuPress = () => {
        setIsOpen(!isOpen);
    };

    const handleButtonClick = (id) => {
        scrollTo(id);
    };

    return (
        <nav className="px-4 py-10 mb-10 flex flex-col justify-center items-center">

            <div className="md:hidden text-cyan-300 animate-bounce pb-2">
              <CustomButton onClick={handleMenuPress} innerText={"Ω"} />
            </div>

            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} md:max-h-none md:flex md:items-center`}>
              <ul className="flex flex-col md:flex-row justify-center rounded-md">
                  <li className="flex justify-center md:px-1">
                      <CustomButton innerText={"About Me"} onClick={() => handleButtonClick('about')} />
                  </li>
                  <li className="flex justify-center md:px-1">
                      <CustomButton innerText={"Projects"} onClick={() => handleButtonClick('projects')} />
                  </li>
                  <li className="flex justify-center md:px-1">
                      <CustomButton innerText={"Resume"} onClick={() => { window.location.href="https://drive.google.com/file/d/1M_vaRet-f_DwfrEJWZ1FTM7olLXJ8f7w/view?usp=sharing"}} />
                  </li>
                  <li className="flex justify-center md:px-1">
                      <CustomButton innerText={"Contact"} onClick={() => handleButtonClick('footer')} />
                  </li>
              </ul>
            </div>
        </nav>
    );
}
