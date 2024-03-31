import React from 'react'
import { PiPaperPlaneRightFill } from "react-icons/pi";


const Exam = () => {
  return (
    <div className='w-full min-h-screen bg-[url("./Resource/service-bg.jpg")] bg-repeat bg-bottom flex gap-0 flex-col items-center p-10'>
    <div className='w-full pt-5 flex justify-center items-center text-3xl'>
        <div className='Heading w-max flex items-center justify-center gap-5 transition-all duration-700 hover:gap-10'>
            <div className='w-max flex items-center justify-center'>
                <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
                <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
                <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
                <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            </div>
            <h1 className='text-center w-fit'>Exam</h1>
            <div className='w-max flex items-center justify-center'>
                <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
                <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
                <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
                <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            </div>
        </div>
    </div>
    <div className='w-full mb-10 flex items-center justify-center px-8'>
        <h3 className='w-fit text-center '>Unlock boundless opportunities.</h3>
    </div>
    <div className='w-full flex justify-center items-center'>
      <h1 className='text-center text-3xl'>No Exam Found Anymore</h1>
    </div>
</div>
  )
}

export default Exam