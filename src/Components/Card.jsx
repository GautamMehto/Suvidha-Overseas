import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";


const Card = ({ details, key }) => {
  return (
    <div className='ServiceCard w-[300px] min-h-[60vh] py-1 bg-white shadow-xl flex flex-col justify-between overflow-hidden items-center rounded-2xl relative hover:scale-105 transition-all duration-300 ease-in-out'>
      <div className="OuterCircle absolute top-0 left-0 w-[350px] h-[350px] bg-slate-400/50 z-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className='Circle w-full flex items-center justify-center z-20'>
        <div className='p-5 rounded-full bg-blue-500  flex items-center justify-center'>
          <img src={details.src} className='w-[60px]' alt="" />
        </div>
      </div>
      <div className="CardDetails flex items-center flex-col px-3 z-20">
        <h1 className='text-2xl font-bold'>{details.title}</h1>
        <p className='text-center'>{details.desc}</p>
        <h5 className='font-bold mt-5'>We Offering</h5>
        <div className=' flex flex-col items-start justify-center'>
          <p className='flex items-center gap-3'><FaStar size={20} />{details.benefit1}</p>
          <p className='flex items-center gap-3'><FaStar size={20} />{details.benefit2}</p>
          <p className='flex items-center gap-3'><FaStar size={20} />{details.benefit3}</p>
        </div>
      </div>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSeWBiUxRUPIUJs4I9POerfKh1YVCbFywdlO8eaynlN3GTLFng/viewform' target='_blank' className='ReadMe w-full flex items-center justify-center border-zinc-600 mt-5 border-t py-4 gap-1 font-bold hover:gap-5 transition-all duration-500 hover:text-blue-500 hover:font-medium'>Read More
        <IoIosArrowRoundForward size={30} />
      </a>
    </div>
  )
}

export default Card