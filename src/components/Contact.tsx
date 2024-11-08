import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10' data-aos="fade-right">
            <div className='space-y-8' data-aos="fade-right">
                <h2 className='text-5xl'>Get in touch</h2>
                <p className='text-gray-200 text-[18px] pt-2'>
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="fade-right">
                <MdMailOutline size={30}/>ksir3334445@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="fade-right">
                <BsTelephone size={30} />+923473239151
                </div>
            </div>
            <div className='space-y-8' data-aos="fade-right">
                <div className='flex flex-col gap-1' data-aos="fade-right">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent' id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="fade-right">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className='h-[40px] bg-transparent border border-accent' id='email' />
                </div>
                <div className='flex flex-col gap-1' data-aos="fade-right">
                    <label htmlFor="message">Message</label>
                  <textarea 
                    className='bg-transparent border border-accent p-[13px]' id='msg' rows={8} >
                  </textarea>  
                </div>
                <button className='bg-green-500 p-2 px-6 hover:bg-blue-700' data-aos="fade-up-right">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact