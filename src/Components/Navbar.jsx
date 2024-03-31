import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import BreadCrumb from './BreadCrumb';

const Navbar = () => {
    const [first, setFirst] = useState(false)
    function handleMenubar(data) {
        setFirst(data)
    }
    return (
        <div className='bg-white  w-full px-10 py-3 flex items-center justify-between relative overflow-hidden'>
            <div className='w-[50px]'>
                <NavLink to={`/Suvidha-Overseas/home`}>
                    <img src="./Resource/Main_Logo.png" alt="Overseas Logo" />
                </NavLink>
            </div>
            <div className='flex gap-8 items-center font-[Font1]'>
                {[{ btn: "home", path: "home" }, { btn: "about us", path: "about" }, { btn: "exam", path: "exam" }, { btn: "services", path: "services" }, { btn: "contact us", path: "contact" },].map((item, index) => (
                    <NavLink to={item.path} key={index} className={(e) => { return e.isActive ? "text-blue-500 relative inline-block no-underline capitalize text-xl LinkFull MenuBtn" : "relative inline-block no-underline capitalize text-xl Links MenuBtn" }}>{item.btn}</NavLink>
                ))}
                <NavLink to={"get-in-touch"} className={(e) => { return e.isActive ? "bg-slate-500 capitalize text-xl text-white px-3 py-3 rounded-xl ml-0 Font2 MenuBtn" : "bg-blue-500 text-white px-3 py-3 rounded-xl ml-0 Font2 capitalize text-xl MenuBtn" }}>
                    get in touch
                </NavLink>
                <FaBars className='MenuBar cursor-pointer' size={25} onClick={(e) => {
                    handleMenubar(true)
                }} />
                <BreadCrumb first={first} handleMenubar={handleMenubar} />
            </div>
        </div>
    )
}

export default Navbar