import Link from 'next/link';
import React from 'react';
const Projects = () => {
  return (
    <div id='projects'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 bg-sky-200 hover:bg-lime-200">
            <h2 className="tracking-widest text-sm title-font font-medium text-lime-500 mb-1">
              My Todo List Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Todo List
            </h1>
            <p className="leading-relaxed">
              This is app whitch helps to create todo lists.
            </p>
            <Link href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project 
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 bg-sky-200 hover:bg-lime-200">
            <h2 className="tracking-widest text-sm title-font font-medium text-lime-500 mb-1">
              My Weather App Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Weather App
            </h1>
            <p className="leading-relaxed">
              This is app whitch helps to find weathers.
            </p>
            <Link href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project 
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 bg-sky-200 hover:bg-lime-200">
            <h2 className="tracking-widest text-sm title-font font-medium text-lime-500 mb-1">
              My Countdown Timer Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CountDown Timer
            </h1>
            <p className="leading-relaxed">
              This is app whitch helps to counting down .
            </p>
            <Link href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project 
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects











