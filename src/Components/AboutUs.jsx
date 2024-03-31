import React from 'react'
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";

const AboutUs = () => {
  return (
    <div className='About-Page w-full min-h-screen flex gap-10 flex-col items-center py-16 px-16'>
      <div className='w-full flex justify-center items-center text-3xl'>
        <div className='Heading w-max flex items-center justify-center gap-5 transition-all duration-700 hover:gap-10'>
          <div className='w-max flex items-center justify-center'>
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
          </div>
          <h1 className='text-center w-fit'>About Us</h1>
          <div className='w-max flex items-center justify-center'>
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
          </div>
        </div>
      </div>

      <div className="About-Top w-full flex items-center justify-between gap-5 mt-5 h-auto">
        <div className="About-Left w-2/5 h-full flex items-center relative">
          <div className='Icon w-max bg-blue-500 rounded-xl absolute p-5 top-0  left-0  hover:animate-pulse'>
          <FaTrophy size={40} className=''/>
          </div>
          <img src="Resource\Australia.webp" alt="Loading Error" className='rounded-full min-h-[45vh] min-w-[300px]'  />
          <div className='Icon w-max bg-blue-500 rounded-xl absolute p-5 bottom-0 right-0  hover:animate-pulse'>
          <HiOutlineLightBulb size={40} className=''/>
          </div>
        </div>
        <div className="About-Right w-3/5 relative">
          <img src="Resource/about-2-shape-4.2.png" className='Plane1 absolute top-24 left-10 -translate-y-1/2 w-[250px] animate-[moveTilte_5s_linear_infinite]' alt="Loading Error" />
          <h1 className="About-Heading text-6xl font-extrabold capitalize text-wrap mb-1 text-end">
            We are the <br /> world's largest <br />
            university
          </h1>
          <p >
            -Suvidha Overseas is a dynamic and dedicated professional firm committed to guiding students who aspire to pursue their education abroad. The company is headquartered in Hyderabad and has a strong presence in Nagpur. Understanding the complexities of studying in countries like the USA, UK, Australia, and Canada, Suvidha Overseas has successfully unraveled these challenges. They offer a comprehensive step-by-step service that covers every aspect of the application process.
          </p>
        </div>
      </div>
      
      <div className="About-Bottom w-full flex flex-row-reverse items-center justify-between gap-5 my-10 h-auto">
        <div className="About-Left w-2/5 h-full flex items-center relative">
          <div className='Icon w-max bg-blue-500 rounded-xl absolute p-5 top-0 right-0 hover:animate-pulse '>
          <FaTrophy size={40} className=''/>
          </div>
          <img src="Resource\Australia.webp" alt="Loading Error" className='rounded-full min-h-[45vh] min-w-[300px]'  />
          <div className='Icon w-max bg-blue-500 rounded-xl absolute p-5 bottom-0 left-0 hover:animate-pulse '>
          <HiOutlineLightBulb size={40} className=''/>
          </div>
        </div>
        <div className="About-Right w-3/5 relative">
        <img src="Resource/about-2-shape-4.png" className='Plane2 absolute top-28 right-10 -translate-y-1/2 w-[250px] animate-[moveTilte_5s_linear_infinite]' alt="Loading Error" />
          <h1 className="About-Heading text-6xl font-extrabold capitalize text-wrap mb-1">
          Suvidha Overseas Dedication to Career Success
          </h1>
          <p >
          -The team at Suvidha Overseas takes pride in their thorough research and personalized approach towards each student. By deeply understanding a student's profile, along with their goals and aspirations, the firm is adept at researching, shortlisting, and recommending the most suitable programs, schools, or universities for each individual. Suvidha Overseas is committed to not just fulfilling educational aspirations but also in crafting pathways that lead to rewarding careers and personal growth for their students.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs