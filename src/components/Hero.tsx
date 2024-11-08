import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div  id="hero" className='min-h-sreen bg-no-repeat bg-[url(/profile.png)] bg-left lg:bg-[15%] bg-cover pt-[0px]'
    style={{backgroundSize: "25%"}}
    >
       <Navbar />
       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text-[70px] font-bold leading-tight flex justify-center items-center'>
            <div>
                <p data-aos="zoom-in-left">I'm <span className='text-green-600'>Kishor Kumar</span></p>
                <p data-aos="zoom-in-right">Web Developer</p>
                <button className='text-[30px] bg-green-500 p-3 rounded'><a href="#contact">Hire Me</a></button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Hero