import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'

const TopAbroadCard = ({ item, index }) => {
    return (
        <div className='TopAbroadCard w-full bg-slate-500 h-[50vh] relative '>
            <img src={item.img} alt={`Image Number ${index}`} />
            <div className="Layer w-full h-full flex flex-col items-center justify-center gap-5 absolute top-[100%] left-0 transition-all duration-500 bg-blue-500/50">
                <h3 className='w-full text-3xl font-bold text-white '>{item.name}</h3>
                <p className='w-full text-xl text-white'>{item.desc}</p>
                <Link to={`country/${item.name}`}>
                <Button text={"Explore More"} />
                </Link>
            </div>
        </div>
    )
}

export default TopAbroadCard