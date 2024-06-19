import React from "react";
import {
  FaHome,
  FaServicestack,
  FaFileAlt,
  FaBriefcase,
  FaBlogger,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const Navbar = () => {


  return (
    <div className="flex flex-col bg-white  h-[85rem] ">
      <nav className=" py-4">
        <div className=" mx-auto flex justify-between  items-center p-4 ">
          <div className="flex flex-col justify-between gap-6 mt-[10rem]">
            
            <Link
              to="/heroSec"
              className="text-black hover:text-white px-3 py-3 p-3 flex items-center bg-[#FFB400]  rounded-full w-[40px] h-[40px]"
            >
              <FaHome className=" w-[18px] h-[18px]" />
            </Link>
            <Link
              to="/services"
              className="text-black hover:bg-[#FFB400] hover:rounded-full px-3 py-2 flex items-center bg-[#F0F0F6] rounded-full w-[40px] h-[40px]"
            >
              <FaServicestack className=" w-[18px] h-[18px]" />
            </Link>
            <Link
              to="/cv"
              className="text-black hover:bg-[#FFB400] hover:rounded-full px-3 py-2 flex items-center  bg-[#F0F0F6] rounded-full w-[40px] h-[40px]"
            >
              <FaFileAlt className=" w-[18px] h-[18px]" />
            </Link>
            <Link
              to="/portfolio"
              className="text-black hover:bg-[#FFB400] hover:rounded-full px-3 py-2 flex items-center bg-[#F0F0F6] rounded-full w-[40px] h-[40px] text-center"
            >
              <FaBriefcase className=" w-[18px] h-[18px]" />
            </Link>
            <Link
              to="/blog"
              className="text-black hover:bg-[#FFB400] hover:rounded-full px-3 py-2 flex items-center bg-[#F0F0F6] rounded-full w-[40px] h-[40px]">

              <FaBlogger className=" w-[18px] h-[18px] " />
            </Link>
            <Link
              to="/contact"
              className="text-black hover:bg-[#FFB400] hover:rounded-full  px-3 py-2 flex items-center bg-[#F0F0F6] rounded-full w-[40px] h-[40px]"
            >
              <FaEnvelope className=" w-[18px] h-[18px]" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
