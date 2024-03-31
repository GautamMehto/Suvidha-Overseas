import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiPaperPlaneRightFill } from "react-icons/pi";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
const Slider = () => {
  const [Small, setSmall] = useState(600)
  const [Middle, setMiddle] = useState(800)
  const [Large, setLarge] = useState(1100)
  // Make sure to install the required modules:
  function displayTop() {
    if (Small > window.innerWidth) {
      return <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slideArray.map((item, index) => {
            return <><SwiperSlide>
              <Slide item={item} key={index} />
            </SwiperSlide></>
          })}
        </Swiper></>
    }

    else {
      return <>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slideArray.map((item, index) => {
            return <><SwiperSlide>
              <Slide item={item} key={index} />
            </SwiperSlide></>
          })}
        </Swiper>
      </>
    }
  }

  let slideArray = [
    {
      stars: 4,
      desc: "Trippy Baba surpassed my expectations in every way! From the minute I made my reservation, their staff was wonderfully helpful and attentive. The events were absolutely life-changing, and the program was well-planned. I'm eagerly anticipating my upcoming trip with Trippy Baba!",
      img: "./Resource/hero-imgs.81db3df071e56821f2fc.jpg",
      name: "John Doe",
      location: "Dwarka , delhi",
    },
    {
      stars: 5,
      desc: "Studying abroad with XYZ Company was a truly transformative and enriching experience! The unwavering support and guidance provided by the dedicated team were nothing short of exceptional. It was more than just education; it was a journey of personal and academic growth.",
      img: "./Resource/userPro1.jpg",
      name: "John Doe",
      location: "New York City",
    },
    {
      stars: 4,
      desc: "My heartfelt gratitude to XYZ Company for making my dream of studying abroad a reality. The entire process, from application to settling into a new academic environment, was impeccably smooth. The team's meticulous attention to detail and commitment to excellence set them apart.",
      img: "./Resource/userPro2.jpeg",
      name: "John Doe",
      location: "rohtak , Haryana ",
    },
    {
      stars: 5,
      desc: "Choosing XYZ Company for my overseas studies was undeniably the best decision of my academic journey. Their seamless and comprehensive support, from the initial application stages to navigating the nuances of settling in a new country, made the entire experience unforgettable.",
      img: "./Resource/userPro3.jpg",
      name: "John Doe",
      location: "patan , bihar",
    },
  ]
  return (
    <div className='Slider w-full h-auto py-5 flex flex-col items-center justify-center bg-[#F6F6F6] bg-[url("Resource/testimonial-bg-2-1.jpg")] bg-no-repeat bg-right-top'>
      <div className='w-full pt-5 flex justify-center items-center text-3xl'>
        <div className='Heading w-max flex items-center justify-center gap-5 transition-all duration-700 hover:gap-10'>
          <div className='w-max flex items-center justify-center'>
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
          </div>
          <h1 className='text-center w-fit'>What Our Student Feedback</h1>
          <div className='w-max flex items-center justify-center'>
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
          </div>
        </div>
      </div>
      <div className='w-full mb-10 flex items-center justify-center px-8'>
        <h3 className='w-fit  text-center'>Discover the experiences of students who studied abroad with Suvidha Overseas.</h3>
      </div>
      {displayTop()}
    </div>

  )
}

export default Slider