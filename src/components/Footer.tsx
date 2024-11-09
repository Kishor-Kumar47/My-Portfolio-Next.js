import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-lime-100'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Jai dev</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Jai dev — ZoneXo Founder-
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        Web Developer
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a target='_blank' href={'https://web.facebook.com/kkcodingg'} className="text-gray-500 ml-3 text-2xl hover:text-sky-500">
      <FaFacebookF />
      </a>
      <a target='_blank' href={''} className="text-gray-500 ml-3 text-2xl hover:text-sky-300">
      <FaGithub />
      </a>
      <a target='_blank' href={'https://www.instagram.com/kishor_kumarrrr/?hl=en'} className="text-gray-500 ml-3 text-2xl hover:text-pink-500">
      <FaInstagram />
      </a>
      <a target='_blank' href={''} className="text-gray-500 ml-3 text-2xl hover:text-red-500">
      <FaYoutube />
      </a>
      <a target='_blank' href={''} className="text-gray-500 ml-3 text-2xl hover:text-indigo-600">
      <FaTiktok />
      </a>
      
    </span>
  </div>
</footer>

    </div>
  );
};

export default Footer