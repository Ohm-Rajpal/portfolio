import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function ChevronDownAnimated({scrollTo}) {
    return (
        <div className="flex justify-center items-center">
            <div href={scrollTo} className="p-2 rounded-full animate-bounce text-white">
                <FaChevronDown className="text-md"/>
            </div>
        </div>
    )
}