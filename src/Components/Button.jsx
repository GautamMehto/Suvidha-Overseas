import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export const Button = ({ text }) => {
    return (
        <div>
            <button className={`Button w-max py-3 flex items-center rounded-md px-10 bg-blue-400 capitalize relative overflow-hidden `}>{text}
                <p className='Button-Text w-max py-3 flex items-center rounded-md px-10 bg-transparent capitalize absolute left-0'>
                    {text}
                <IoIosArrowRoundForward />
                </p>
                <IoIosArrowRoundForward />
            </button>
        </div>
    )
}
