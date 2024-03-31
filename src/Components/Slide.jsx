import React from 'react'
import { FaStar } from "react-icons/fa";

const Slide = ({ item, key }) => {
    function starsq(stars) {
        const starArray = [];
        for (let index = 0; index < stars; index++) {
            starArray.push(<FaStar size={30} color='red' key={index} />)
        }
        return starArray;
    }
    return (
        <div className='Slide w-full shadow-xl p-10 px-16 flex flex-col justify-between gap-5'>
            <div className='w-ma flex items-center'>
                {starsq(item.stars)}
            </div>
            <p className='w-full text-justify capitalize text-[1rem]'>
                {item.desc}
            </p>
            <div className='flex w-full items-center justify-between '>
                <div className='w-max flex items-center gap-3'>
                    <div className='w-[80px] h-[80px] rounded-full bg-blue-500 overflow-hidden'>
                        <img src={item.img} alt="Customer Image" className='h-full' />
                    </div>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-xl font-bold capitalize'>{item.name}</h1>
                        <span className='text-xs capitalize'>{item.location}</span>
                    </div>
                </div>
                <img src="./Resource/Quotation.png" alt="Error" className='w-[100px!important]' />
            </div>
        </div>
    )
}

export default Slide