import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-[40px] bg-black ">
        <div className="mb-[40px] ml-[500px]"><img src="./logoo.png" /></div>
      <div className="p-[10px]">
        <h3 className="text-[20px] font-bold">My Social Media Handles</h3>
        <div className="flex justify-start m-[10px] ">
          <a href="" className="text-red-600 text-[30px] ml-[10px]">
            <FaYoutube />
          </a>
          <a href="" className="text-sky-600 text-[30px] ml-[10px]">
            <AiFillLinkedin />
          </a>
          <a href="" className="text-gray-500 text-[30px] ml-[10px]">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/kishor_kumarrrr/?hl=en" className="text-pink-500 text-[30px] ml-[10px] blank">
            <FaInstagramSquare />
          </a>
        </div>
      </div>

      <div className="mt-16 py-6 text-center bg-accent">
        Kishor | All rights reserved 2024.
      </div>

    </div>
  );
};

export default Footer;
