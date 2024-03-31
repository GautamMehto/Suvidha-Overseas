import React, { useState } from 'react'
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Accordian = () => {
    let data = [
        {
            id: 1,
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
        },
        {
            id: 2,
            question: "How does React work?",
            answer: "React uses a virtual DOM to efficiently update the user interface.",
        },
        {
            id: 3,
            question: "What are components in React?",
            answer: "Components are the building blocks of a React application.",
        },
        {
            id: 4,
            question: "How to pass data between components in React?",
            answer: "Data can be passed between components using props.",
        },
        {
            id: 5,
            question: "What is state in React?",
            answer: "State is a way to manage data within a component.",
        },
        {
            id: 6,
            question: "Can React be used with other libraries?",
            answer: "Yes, React can be used with other libraries and frameworks.",
        },
    ]
    const [selected, setSelected] = useState(null)

    function handleEvent(idNumber) {
        setSelected(idNumber === selected ? null : idNumber);

    }
    return (
        <div className='Accordian w-full h-screen bg-[url("./Resource/category-bg-2.png")] hue-rotate-[337deg] bg-no-repeat bg-right  flex gap-10 flex-col items-center p-5 px-16'>
            <div className='w-full py-5 flex justify-center items-center text-3xl'>
                <div className='Heading w-max flex items-center justify-center gap-5 transition-all duration-700 hover:gap-10'>
                    <div className='w-max flex items-center justify-center'>
                        <PiPaperPlaneRightFill size={19} color='#6371F8' className='rotate-[180deg]' />
                        <PiPaperPlaneRightFill size={19} color='#6371F8' className='rotate-[180deg]' />
                        <PiPaperPlaneRightFill size={19} color='#6371F8' className='rotate-[180deg]' />
                        <PiPaperPlaneRightFill size={19} color='#6371F8' className='rotate-[180deg]' />
                    </div>
                    <h1 className='text-center w-fit'>Frequently Asked Questions</h1>
                    <div className='w-max flex items-center justify-center'>
                        <PiPaperPlaneRightFill size={19} color='#6371F8' className='rotate-[0deg]' />
                        <PiPaperPlaneRightFill size={19} color='#6371F8' className='rotate-[0deg]' />
                        <PiPaperPlaneRightFill size={19} color='#6371F8' className='rotate-[0deg]' />
                        <PiPaperPlaneRightFill size={19} color='#6371F8' className='rotate-[0deg]' />
                    </div>
                </div>
            </div>
            <div className='w-full h-max flex flex-col gap-0 '>
                {
                    data && data.length > 0 ? data.map((item) => {
                        return <>
                            <div className='border-b border-black'>
                                <div className='w-full bg-white p-5 flex items-center justify-between cursor-pointer ' onClick={e => { handleEvent(item.id) }}>
                                    <div className='flex items-center justify-center gap-4'>
                                        <span>Question {item.id} :</span>
                                        <h2 className='w-fit '>{item.question}</h2>
                                    </div>
                                    <span>
                                        {selected === item.id ? <CiCircleMinus size={25} /> : <CiCirclePlus size={25} />}

                                    </span>
                                </div>
                                <div className=''>
                                    {
                                        selected === item.id ? (
                                            <div className='w-full bg-[#6371F8] p-5 flex items-center justify-between'>Answer : {item.answer}</div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </>
                    }) : <div>No Data Found!</div>
                }
            </div>
        </div>
    )
}

export default Accordian