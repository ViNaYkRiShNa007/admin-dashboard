import React from "react";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { SiBentobox } from "react-icons/si";



const Navbar = ({sideBarToggle,setSideBarToggle}) => {
  return (
    <nav className="primary-color px-4 py-3 flex justify-between ">
      <div className="flex items-center text-xl">
        <FaBars className="text-white me-4 cursor-pointer" onClick={()=>{setSideBarToggle(!sideBarToggle)}}/>
        <span className="text-white font-semibold"><SiBentobox/></span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch color="white"/>
            </button>
          </span>
          <input type="text" className="text-white secondary-color w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block" placeholder="Search"/>
        </div>
        <div><IoIosMail color="white" size={25} className="cursor-pointer"/></div>
        <div><IoMdSettings color="white" size={20} className="cursor-pointer"/></div>
        <div><FaBell color="white" size={20} className="cursor-pointer"/></div>
        <div><VscAccount color="white" size={20} className="cursor-pointer"/></div>
      </div>
    </nav>
  );
};

export default Navbar;
