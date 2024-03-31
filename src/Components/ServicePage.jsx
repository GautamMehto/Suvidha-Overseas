import React from 'react'
import { PiPaperPlaneRightFill } from "react-icons/pi";
import Card from './Card';
import Finaceplan from "../../public/Resource/financialplanning.png"
import Sop from "../../public/Resource/sopreview.png"
import Visa from "../../public/Resource/visahelp.png"
import IELTS from "../../public/Resource/ieltsicon.png"
import GetaCoach from "../../public/Resource/getacoach.png"
import Shortlisting from "../../public/Resource/shortlistcollege.png"
import Sholarship from "../../public/Resource/sholarship.png"
import Counseling from "../../public/Resource/Counseling.png"
import Language from "../../public/Resource/language.png"
import Outreach from "../../public/Resource/outreach.png"
import Mentorship from "../../public/Resource/mentorshipimg.png"
import CulturalExchange from "../../public/Resource/culturalExchange.png"

const ServicePage = () => {
    let imgArray = [
        {
            title: "Finance Plan",
            src: `${Finaceplan}`,
            desc: "Personalized support and guidance in financial planning for education expenses abroad.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "SOP Review",
            src: `${Sop}`,
            desc: "Thorough review and feedback on your Statement of Purpose (SOP) for university applications.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Visa Help",
            src: `${Visa}`,
            desc: "Assistance and guidance in the visa application process for studying abroad.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Crack IELTS",
            src: `${IELTS}`,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in omnis dolorem libero",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Get a Coach",
            src: `${GetaCoach}`,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in omnis dolorem libero",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Shortlisting",
            src: `${Shortlisting}`,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in omnis dolorem libero",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Sholar-ship",
            src: `${Sholarship}`,
            desc: "Comprehensive aid in applying for scholarships to fund your education abroad through our NGO.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Counseling",
            src: `${Counseling}`,
            desc: "Personalized guidance sessions to help you make informed decisions about your overseas education.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Language",
            src: `${Language}`,
            desc: "Specialized language training tailored to assist you in adapting to a new educational environment.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Out-Reach",
            src: `${Outreach}`,
            desc: "Engage in volunteer activities and community projects as part of our educational initiatives.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Mentor-ship",
            src: `${Mentorship}`,
            desc: "Access to experienced mentors who provide guidance throughout your educational journey abroad.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
        {
            title: "Cultural Exchange",
            src: `${CulturalExchange}`,
            desc: "Participate in cultural exchange events fostering global understanding and appreciation.",
            benefit1: "Assistance in preparing",
            benefit2: "Guidance on fulfilling visa",
            benefit3: "Expert advice and support"

        },
    ]
    return (
        <div className='ServicePage w-full min-h-screen bg-[url("./Resource/service-bg.jpg")] bg-repeat bg-bottom flex gap-0 flex-col items-center p-10'>
            <div className='w-full pt-5 flex justify-center items-center text-3xl'>
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
            <div className='w-full mb-10 flex items-center justify-center px-8'>
                <h3 className='w-fit text-center '>Empowering dreams worldwide: Our tailored services unlock boundless opportunities.</h3>
            </div>
            <div className='w-[100%] flex justify-center gap-10  mb-10 items-center flex-wrap'>
                {imgArray.map((item, index) => {
                    return <Card details={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default ServicePage