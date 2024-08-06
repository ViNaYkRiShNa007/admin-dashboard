import React from "react";
import { IoIosHome } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdContentPaste } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";


const SideBar = ({sideBarToggle}) => {
  return (
    <div className="w-64  primary-color text-white fixed h-full p-2">
      <h1 className="font-sans text-2xl font-bold p-3">Admin Dashboard</h1>
      <hr />
      <ul>
        <li className="rounded-md hover:shadow hover:secondary-color py-2">
          <a href="#" className="font-bold">
            <IoIosHome className="inline-block w-6 h-6 m-2"/> Home
          </a>
        </li>
        <li className="rounded-md hover:shadow hover:secondary-color py-2">
          <a href="#" className="font-bold">
            <IoStatsChartSharp className="inline-block w-6 h-6 m-2"/> Stats
          </a>
        </li>
        <li className="rounded-md hover:shadow hover:secondary-color py-2">
          <a href="#" className="font-bold">
            <MdContentPaste className="inline-block w-6 h-6 m-2"/> Tasks
          </a>
        </li>
        <li className="rounded-md hover:shadow hover:secondary-color py-2">
          <a href="#" className="font-bold">
            <FaWallet className="inline-block w-6 h-6 m-2"/> Wallet
          </a>
        </li>
        <li className="rounded-md hover:shadow hover:secondary-color py-2">
          <a href="#" className="font-bold">
            <IoBag className="inline-block w-6 h-6 m-2"/> Bag
          </a>
        </li>
        <li className="rounded-md hover:shadow hover:secondary-color py-2">
          <a href="#" className="font-bold">
            <IoLogOut className="inline-block w-6 h-6 m-2"/> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
