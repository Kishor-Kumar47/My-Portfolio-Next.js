"use client";
import Image from 'next/image';
import profileImage from '../../public/imgs/profile1.png';
import React from "react";

const Hero = () => {
  return (
    
      <section id="home" className="text-gray-600 body-font bg-lime-400">
        <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <span className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100 ">
              <h1>I am <span className="text-6xl">Jai dev</span></h1>
            <h1 className="text-7xl">Web Developer</h1>
            </span>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button  className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-600 rounded text-lg">
                <a href="#contact">Hire Me</a>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded ml-[100px]"
        alt="hero"
        src={profileImage}
        width={500} // Replace with the actual width of your image
        height={500} // Replace with the actual height of your image
      />
    </div>
        </div>
      </section>
    
  );
};

export default Hero;
