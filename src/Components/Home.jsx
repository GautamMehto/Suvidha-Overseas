import React from 'react'
import { Button } from './Button'
import Banner from './BannerSvg'
import TopAbroad from '../Components/TopAbroad'
import Slider from '../Components/Slider'
import Service from '../Components/Service'
import Accordian from '../Components/Accordian'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <>
            <div className='Home-Container w-full h-screen flex items-center justify-between bg-[rgb(243,242,242)]'>
                <div className='Home-Left w-1/2 h-full relative'>
                    <div className='w-full h-full absolute top-0 left-0 z-10'>
                        <div className='Spring w-[10vw] rotate-[30deg] absolute top-8 left-10 invert'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 133" fill="none">
                                <path d="M94.4935 0.712799C95.597 1.45597 95.8869 2.96459 95.1423 4.09967C90.8319 10.6323 83.2497 10.1374 76.5614 9.69399C69.4714 9.22757 64.9825 9.21985 62.4529 13.0422C59.9198 16.8622 61.6846 20.9956 64.8949 27.3403C67.917 33.3156 71.3413 40.0873 67.0426 46.6025C62.722 53.1283 55.1468 52.6229 48.4642 52.1783C41.3675 51.7073 36.8752 51.6973 34.3351 55.5277C31.8031 59.3535 33.5668 63.4812 36.7805 69.8282C39.7969 75.8047 43.2246 82.5786 38.9259 89.0939C34.6089 95.6069 27.0313 95.105 20.3488 94.6604C13.252 94.1894 8.75971 94.1794 6.22663 97.9994C3.69678 101.837 5.4639 105.967 8.6811 112.316C11.7055 118.288 15.1322 125.056 10.8175 131.566C10.0648 132.705 8.54716 133.027 7.42646 132.287C6.27552 131.578 6.01023 130.025 6.76637 128.888C9.29946 125.068 7.53341 120.943 4.32412 114.605C1.29863 108.627 -2.12912 101.853 2.17894 95.3238C6.49598 88.8108 14.0678 89.3138 20.7527 89.7549C27.8494 90.2259 32.3417 90.2359 34.8748 86.4159C37.3953 82.5925 35.6282 78.4625 32.4202 72.1144C29.3981 66.139 25.9727 59.3616 30.284 52.8498C34.6057 46.3298 42.1798 46.8294 48.8624 47.274C55.9591 47.745 60.4514 47.755 62.9915 43.9246C65.512 40.1012 63.7449 35.9711 60.5369 29.623C57.5148 23.6477 54.0894 16.8703 58.403 10.355C62.7154 3.84893 70.2803 4.34734 76.956 4.78734C84.0575 5.25141 88.5532 5.26373 91.0854 1.42291C91.8381 0.28317 93.3523 -0.0406519 94.473 0.698994C94.4833 0.705897 94.4901 0.710498 94.4935 0.712799Z" fill="#F57005"></path>
                            </svg>
                        </div>
                        <div className='RoundArrow w-[15vw] absolute -rotate-[29deg] bottom-[1vh] left-0 invert'>
                            <img src="./Resource/banner-2-shape-3.png" alt="" />
                        </div>
                        <div className='SpringArrow w-[10vw] absolute rotate-0 bottom-[32vh] right-0 invert '>
                            <img src="./Resource/banner-1-shape-1.png" alt="" className='animate-[moveTo_10s_linear_infinite]' />
                        </div>
                    </div>
                    <div className='Detail-Box w-full h-full flex flex-col justify-center flex-wrap px-20 absolute top-0 left-0 z-20'>
                        <h1 className="text-6xl font-extrabold ">Welcome To
                            <br />
                            <div className='flex items-center gap-4'>
                                Suvidha
                                <div className='w-max  relative'>
                                    <svg className='OverCircle absolute h-24 -left-[2%] -top-[30%] invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 79" fill="none">
                                        <path d="M120.802 78.9999C93.3177 78.9901 66.519 76.6913 40.6183 71.2164C33.8146 69.7778 27.1864 67.8613 20.9336 65.6899C8.33429 61.3129 2.40398 54.387 0.436736 45.829C-1.82029 36.0137 4.89365 28.338 15.6768 21.7577C36.4104 9.10449 62.3111 2.81096 91.281 0.67145C112.104 -0.865171 132.699 0.436178 153.233 2.55118C174.75 4.76666 194.01 10.1216 211.573 17.7262C221.331 21.9513 229.674 27.0342 234.314 33.911C238.922 40.7363 237.547 47.2333 230.613 53.1935C223.335 59.4478 213.328 63.7122 202.079 67.2192C190.664 70.7801 178.562 73.0936 166.351 75.1939C159.233 76.4193 151.706 76.8506 144.323 77.4486C136.507 78.0834 128.646 78.4926 120.802 78.9999ZM20.3418 22.5248C34.6513 16.3955 50.7443 12.7757 67.7067 10.3813C82.1101 8.34721 96.7093 7.11203 111.5 6.86205C126.283 6.61207 140.989 7.23701 155.547 8.8251C170.11 10.4132 184.195 13.0085 197.847 16.4298C210.291 19.5496 220.666 24.2526 228.282 31.0289C234.559 36.6142 234.637 42.3587 229.764 48.2798C226.801 51.8824 222.372 54.7203 217.123 57.1441C209.561 60.6389 201.247 63.3053 192.529 65.6335C183.468 68.0524 174.195 70.0915 164.62 71.5227C150.388 73.65 135.858 74.4661 121.186 74.1744C115.084 74.0543 108.921 74.1107 102.905 73.5911C88.5016 72.3486 74.3676 70.2924 60.5683 67.4986C47.5282 64.8591 34.9247 61.7099 24.3253 56.1957C15.7951 51.7598 10.4076 46.4172 10.1138 39.5012C10.0934 38.9767 10.9342 38.4375 11.3749 37.9057C12.2525 38.4204 13.2075 38.8983 13.9707 39.4693C14.2156 39.6531 13.9626 40.082 13.9177 40.3957C13.2524 44.8119 15.689 48.6719 20.3092 51.973C26.3538 56.2937 33.7942 59.5655 42.4305 61.8618C55.589 65.3615 69.2862 67.8392 83.2529 69.839C93.5258 71.3095 103.893 72.3609 114.472 72.6084C127.275 72.9074 139.981 72.3829 152.576 71.0203C174.085 68.6921 194.357 64.4596 212.271 56.7153C219.209 53.7155 225.237 50.2085 228.482 45.3193C231.588 40.6334 231.845 35.9329 226.613 31.7715C223.091 28.9727 219.017 26.3259 214.532 24.0835C207.014 20.324 198.043 18.0693 188.864 16.0769C167.453 11.4254 145.368 9.05057 122.651 8.71972C107.533 8.49915 92.534 9.32261 77.7348 11.1362C62.6539 12.9865 47.7975 15.3686 34.2064 19.9001C24.3335 23.1914 15.3992 27.1445 9.68932 33.2272C2.37949 41.0133 1.26118 48.8728 8.7057 56.8795C12.1096 60.5409 17.3053 63.0848 23.1703 65.1679C33.3493 68.7803 44.5651 70.8095 55.8992 72.5667C79.3429 76.1987 103.154 77.6986 127.361 76.7575C150.898 75.8434 173.754 73.2113 195.308 67.2069C207.304 63.8666 218.213 59.6782 226.515 53.3283C236.682 45.5496 236.735 36.0628 226.641 28.3037C220.331 23.4536 212.687 19.5594 203.998 16.3318C193.831 12.5551 183.231 9.33486 171.848 7.12918C154.555 3.779 136.662 2.38453 118.631 2.06838C97.8644 1.70567 77.445 3.06584 57.8991 7.88646C44.2712 11.2489 32.1167 15.8833 21.052 21.6425C20.6724 21.8386 20.6153 22.2552 20.3908 22.5567C19.8806 22.6498 19.3664 22.7405 18.8603 22.841C18.8317 22.8459 18.8521 22.939 18.848 22.9905C19.346 22.8361 19.8439 22.6817 20.3418 22.5248Z" fill="#F57005"></path>
                                    </svg>
                                    OverSeas
                                </div>
                            </div>
                        </h1>
                        <h3 className="text-2xl ">We Empower your Dreams</h3>
                        <h3 className="text-2xl ">-Study abroad along with us and reach new heights.</h3>
                        <div className='flex gap-5 mt-5'>
                            <Link to={"contact"}>
                            <Button text={"contact us"} />
                            </Link >
                            <Link to={"services"}F>
                            <Button text={"our services"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='Home-Right w-1/2 h-full relative'>
                    <div className='Home-Right-BG w-full h-full absolute top-0 left-0 scale-[.80]'>
                        <div className='RotateImage w-max absolute top-[35vh] left-[0vw]  animate-[spin_10s_linear_infinite] '>
                            <img src="./Resource/banner-2-shape-4.png" alt="" />
                        </div>
                        <Banner />
                    </div>
                    <div className='All-Image-Container w-full h-full absolute top-0 left-0 z-10 flex items-center justify-end'>
                        <div className='Image-Container w-[85%] border-[20px] border-white rounded-tl-full rounded-bl-full overflow-hidden border-r-0' >
                            <img src="./Resource/hero-imgs.81db3df071e56821f2fc.jpg" alt="Image" />
                        </div>
                        <div className='Book w-max absolute top-[5vh] left-[10vw] rotate-45 animate-[moveTo_5s_linear_infinite] '>
                            <img src="./Resource/banner-2-shape-6.png" alt="" />
                        </div>
                        <div className='Bulb w-max absolute bottom-[5vh] right-[2vw] rotate-45 animate-[moveTo_5s_linear_infinite] '>
                            <img src="./Resource/banner-2-shape-5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <TopAbroad />
            <Slider />
            <Service />
            <Accordian /> 
        </>

    )
}

export default Home