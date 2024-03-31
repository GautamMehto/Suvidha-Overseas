import React, { useState } from 'react'
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { Button } from './Button'

const ContactUs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [wphone, setWphone] = useState("")
  const [reason, setReason] = useState("")
  const [message, setMessage] = useState("")
  return (
    <div className='Contact-Form w-full h-screen flex flex-col items-center'>
      <div className='w-full pt-5 flex justify-center items-center text-3xl'>
        <div className='Heading w-max flex items-center justify-center gap-5 transition-all duration-700 hover:gap-10'>
          <div className='w-max flex items-center justify-center'>
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[180deg]' />
          </div>
          <h1 className='text-center w-fit'>Contact Us</h1>
          <div className='w-max flex items-center justify-center'>
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
            <PiPaperPlaneRightFill size={19} color='rgb(23, 127, 255)' className='rotate-[0deg]' />
          </div>
        </div>
      </div>
      <div className='w-full mb-10 flex items-center justify-center px-8'>
        <h3 className='w-fit '>Feel Free to Write us Anytime</h3>
      </div>

      <form onSubmit="" className='Form w-4/5 min-h-[50vh] flex flex-col  gap-5 items-center justify-center rounded-lg p-6'>
        <div className='w-full flex gap-5 items-center justify-between'>
          <input type="text" required  placeholder='Your Name' value={name} className='w-[48%] border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden' onChange={(e)=>{
            setName(e.target.value)
          }} />
          <input type="text" required  placeholder='Your Email Address' value={email} className='w-[48%] border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden' onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
        </div>
        <div className='w-full flex gap-5 items-center justify-between'>
          <input type="number" required  placeholder='Your Phone Number' value={phone} className='w-[48%] border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden' onChange={(e)=>{
            setPhone(e.target.value)
          }}/>
          <input type="number" required  placeholder="Your Whatsapp's Number" value={wphone} className='w-[48%] border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden' onChange={(e)=>{
            setWphone(e.target.value)
          }}/>
        </div>
        <div className='w-full flex gap-5 items-center justify-center'>
          <input type="text" required  placeholder='Your Contact Reason' value={reason} className='w-[100%]  border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden' onChange={(e)=>{
            setReason(e.target.value)
          }}/>
        </div>
        <div className='w-full flex gap-5 items-center justify-center'>
          <textarea rows="8" placeholder='Your Meassage Here' required value={message} className='w-[100%] border-slate-400 border-[1px] pl-[2vh] pt-[2vh]' onChange={(e)=>{
            setMessage(e.target.value)
          }}></textarea> 
        </div>
        <button onClick={(e)=>{
          e.preventDefault()
        }}>
        <Button text={"Send Message"}/>
        </button>
      </form>
    </div>
  )
}

export default ContactUs