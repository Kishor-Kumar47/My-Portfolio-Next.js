import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed">
      I am a passionate full stack web developer with a knack for crafting clean
       responsive and dynamic applications. With expertise in both front end and back end technologies I bring ideas to life through code blending aesthetics with functionality to deliver seamless user experiences. I thrive on solving complex challenges and continuously 
       expanding my skills to stay at the forefront of the tech landscape. Lets build something amazing together!
      </p>
      <p className="mb-8 leading-relaxed">
      I completed my FSC in 2023, building a strong foundation in science and 
      engineering principles. Currently, I’m pursuing my passion for engineering 
      and technology, having applied to university to further my studies. My academic 
      background has equipped me with analytical skills and a problem-solving mindset, which I bring into my work as a developer.
      </p>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
         <a href="#contact">Contact</a> 
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About