import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full min-h-[80vh] bg-blue-900 relative text-white flex flex-col items-center justify-center overflow-hidden'>
      <div className='Footer-Bg w-full h-[80vh] bg-left-bottom absolute top-0 left-0 z-0 bg-no-repeat animate-[moveTopTo_10s_linear_infinite]'></div>
      <div className='w-full h-full z-10 flex flex-col gap-6 justify-between'>
        <div className='w-full h-auto flex flex-col gap-3 p-5 px-10 border-black border-b'>
          <Link to={`/Suvidha-Overseas/home`}>
          <img src="./Resource/Main_Logo.png" alt="Logo" className='w-[50px] invert' />
          </Link>
          <h1 className='text-2xl font-bold'>Suvidha Overseas</h1>
          <p className='text-xl capitalize'>Suvidha Overseas, a professional firm based in Hyderabad with a presence in Nagpur, specializes in guiding students aiming to study abroad in countries like the USA, UK, Australia, and Canada. They provide comprehensive services covering all aspects of the application process.</p>
        </div>
        <div className='w-full h-auto p-5 px-10 flex flex-wrap gap-5 items-start justify-between '>
          <div className='w-max'>
            <h1 className='text-2xl font-bold'>Contact Details</h1>
            <p className='text-xl capitalize'>Address: Vazhra Nirman Pushpak C block 701, <br /> Blooming dale road Nizampet, 500090</p>
            <p className='text-xl capitalize'>
              Email: info@suvidhaoverseas.org
              <br />
              Phone: +918087249616
            </p>
          </div>
          <div className='w-max flex flex-col justify-start gap-3'>
            <h1 className='text-2xl font-bold'>Redirection Links</h1>
            <Link to={`/`} className='w-fit Links text-xl relative capitalize'>home</Link>
            <Link to={`/contact`} className='w-fit cursor-pointer Links text-xl relative capitalize'>Enquiry Form</Link>
            <Link to={`/services`} className='w-fit cursor-pointer Links text-xl relative capitalize'>Service</Link>
            <Link to={`/contact`} className='w-fit cursor-pointer Links text-xl relative capitalize'>contact Us</Link>
          </div>
          <div className='w-max flex flex-col justify-start gap-3'>
            <h1 className='text-2xl font-bold'>Exams</h1>
            <span className='w-fit cursor-pointer Links text-xl relative '>IELTS</span>
            <span className='w-fit cursor-pointer Links text-xl relative capitalize'>Duolingo English Test</span>
          </div>
          <div className='w-max flex flex-col justify-start gap-3'>
            <h1 className='text-2xl font-bold'>Social Links </h1>
            <span className='w-fit cursor-pointer Links text-xl relative capitalize flex gap-3 items-center'><FaFacebookF />facebook</span>
            <span className='w-fit cursor-pointer Links text-xl relative capitalize flex gap-3 items-center'><FaLinkedin />linkedin</span>
            <span className='w-fit cursor-pointer Links text-xl relative capitalize flex gap-3 items-center'><FaInstagram />instagram</span>
          </div>
        </div>
        <div className='w-full h-auto p-5 px-10 bg-black flex items-center justify-center'>
          <h1 className='text-1xl capitalize text-center'>all rights reserved by suvidha foundation. design and develop by gautam Mehto</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer