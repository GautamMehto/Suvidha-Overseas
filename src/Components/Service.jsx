import React from 'react'
import { PiPaperPlaneRightFill } from "react-icons/pi";
import Card from './Card';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const Service = () => {
  let imgArray = [
    {
      title: "Finance Plan",
      src: "./Resource/financialplanning.png",
      desc: "Personalized support and guidance in financial planning for education expenses abroad.",
      benefit1: "Assistance in preparing",
      benefit2: "Guidance on fulfilling visa",
      benefit3: "Expert advice and support"

    },
    {
      title: "SOP Review",
      src: "./Resource/sopreview.png",
      desc: "Thorough review and feedback on your Statement of Purpose (SOP) for university applications.",
      benefit1: "Assistance in preparing",
      benefit2: "Guidance on fulfilling visa",
      benefit3: "Expert advice and support"

    },
    {
      title: "Visa Help",
      src: "./Resource/visahelp.png",
      desc: "Assistance and guidance in the visa application process for studying abroad.",
      benefit1: "Assistance in preparing",
      benefit2: "Guidance on fulfilling visa",
      benefit3: "Expert advice and support"

    },
    {
      title: "Crack IELTS",
      src: "./Resource/ieltsicon.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in omnis dolorem libero",
      benefit1: "Assistance in preparing",
      benefit2: "Guidance on fulfilling visa",
      benefit3: "Expert advice and support"

    },
    {
      title: "Get a Coach",
      src: "./Resource/getacoach.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in omnis dolorem libero",
      benefit1: "Assistance in preparing",
      benefit2: "Guidance on fulfilling visa",
      benefit3: "Expert advice and support"

    },
    {
      title: "Shortlisting",
      src: "./Resource/shortlistcollege.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in omnis dolorem libero",
      benefit1: "Assistance in preparing",
      benefit2: "Guidance on fulfilling visa",
      benefit3: "Expert advice and support"

    },


  ]
  return (
    <div className='Service w-full min-h-screen bg-[url("./Resource/team-bg-2-2.jpg")] bg-no-repeat bg-bottom flex gap-10 flex-col items-center p-5 px-16'>
      <div className='w-full py-5 flex justify-center items-center text-3xl'>
        <div className='Heading w-max flex items-center justify-center gap-5 transition-all duration-700 hover:gap-10'>
          <div className='w-max flex items-center justify-center'>
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
          </div>
          <h1 className='text-center w-fit'>Our Services</h1>
          <div className='w-max flex items-center justify-center'>
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
          </div>
        </div>
      </div>
      <div className='w-[100%] flex justify-center gap-10  mb-5 items-center flex-wrap'>
        {imgArray.map((item, index) => {
          return <Card details={item} key={index} />
        })}
      </div>
      <Link to={"services"} className='mb-5'>
        <Button text={"Explore More"} />
      </Link>
    </div>
  )
}

export default Service