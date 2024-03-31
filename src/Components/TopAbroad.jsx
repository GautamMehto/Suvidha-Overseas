import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { PiPaperPlaneRightFill } from "react-icons/pi";
import TopAbroadCard from './TopAbroadCard';
import { useState, useEffect } from 'react';


const TopAbroad = () => {
    const [Small, setSmall] = useState(600)
    const [Middle, setMiddle] = useState(800)
    // Make sure to install the required modules:
    function displayTop() {
        if (Small > window.innerWidth) {
            return <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper w-[95%!important]"
                >
                    {TopAbroadArray.map((item, index) => {
                        return <>
                            <SwiperSlide>
                                <TopAbroadCard item={item} index={index} />
                            </SwiperSlide>
                        </>

                    })}
                </Swiper></>
        }
        else if( Middle > window.innerWidth  && Small< window.innerWidth ) {
            return <>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper w-[95%!important]"
                >
                    {TopAbroadArray.map((item, index) => {
                        return <>
                            <SwiperSlide>
                                <TopAbroadCard item={item} index={index} />
                            </SwiperSlide>
                        </>

                    })}
                </Swiper>
            </>
            
        }
        else {
            return <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper w-[95%!important]"
                >
                    {TopAbroadArray.map((item, index) => {
                        return <>
                            <SwiperSlide>
                                <TopAbroadCard item={item} index={index} />
                            </SwiperSlide>
                        </>

                    })}
                </Swiper>
            </>
        }
    }

    let TopAbroadArray = [
        {
            name: "USA",
            desc: "Explore Popular Universities In USA",
            img: "./Resource/New-York-City.jpg",
        },
        {
            name: "Germany",
            desc: "Explore Popular Universities In Germany",
            img: "./Resource/Germany.jpeg",
        },
        {
            name: "England",
            desc: "Explore Popular Universities In England",
            img: "./Resource/England.jpg",
        },
        {
            name: "Canada",
            desc: "Explore Popular Universities In Canada",
            img: "./Resource/Canada.jpg",
        },
        {
            name: "New Zealand",
            desc: "Explore Popular Universities In New Zealand",
            img: "./Resource/NewZealand.jpg",
        },
        {
            name: "Australia",
            desc: "Explore Popular Universities In Australia",
            img: "./Resource/Australia.webp",
        },
    ]
    return (
        <div className='TopAbroad bg-white py-20'>
            <div className='w-full flex justify-center items-center text-3xl'>
                <div className='Heading w-max flex items-center justify-center gap-5 transition-all duration-700 hover:gap-10'>
                    <div className='w-max flex items-center justify-center'>
                        <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
                        <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
                        <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
                        <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
                    </div>
                    <h1 className='text-center w-fit'>Top Study Abroad Destination</h1>
                    <div className='w-max flex items-center justify-center'>
                        <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
                        <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
                        <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
                        <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
                    </div>
                </div>
            </div>
            <div className='w-full mb-10 flex items-center justify-center px-8'>
                <h3 className='w-fit '>Study in best Universities accross the world</h3>
            </div>
            
            {displayTop()}
        </div>
    )
}

export default TopAbroad