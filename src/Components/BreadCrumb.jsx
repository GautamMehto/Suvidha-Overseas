import React from 'react'
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
const BreadCrumb = ({ first, handleMenubar }) => {

    return (
        <div className={`w-full h-[120vh] bg-blue-500 px-10 py-3 flex flex-col items-center justify-start gap-32 fixed top-0 z-50 transition-all duration-500 ${first ? "left-[0%]" : "left-[100%]"}`}>
            <div className='w-full flex justify-between items-center '>
                <div className='w-[50px]'>
                    <NavLink to={`/Suvidha-Overseas/home`} onClick={(e)=>{
                        handleMenubar(false)
                    }}>
                        <img src=".\Resource\Main_Logo.png" alt="Overseas Logo" />
                    </NavLink>
                </div>
                <FaXmark size={25} className='MenuCancle cursor-pointer ' onClick={(e) => {
                    handleMenubar(false)
                }} />
            </div>
            <div className='w-full flex flex-col gap-8 items-center font-[Font1]'>
                {[{ btn: "home", path: "home" }, { btn: "about us", path: "about" }, { btn: "exam", path: "exam" }, { btn: "services", path: "services" }, { btn: "contact us", path: "contact" },].map((item, index) => (
                    <NavLink to={item.path} key={index} onClick={(e) => {
                        handleMenubar(false)
                    }} className={(e) => { return e.isActive ? "text-white relative inline-block no-underline capitalize text-2xl LinkFull font-semibold " : "relative inline-block no-underline capitalize text-2xl Links " }}>{item.btn}</NavLink>
                ))}
                <NavLink to={"get-in-touch"} className={(e) => { return e.isActive ? "bg-slate-500 capitalize text-2xl px-3 py-3 rounded-xl ml-0 font-[Font2] " : "bg-blue-500 border-black border px-3 py-3 rounded-xl ml-0 font-[Font2] capitalize text-2xl " }}>
                    get in touch
                </NavLink>
            </div>
        </div>
    )
}

export default BreadCrumb