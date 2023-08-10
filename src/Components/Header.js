import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const Header = () => {
  return (
    <div className="bg-gray-800 w-full flex flex-wrap items-center justify-between p-2">
      <div>
        <img
          className="w-[200px] "
          src="https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png"
          alt="logo"
        />
      </div>
      <h1 className="font-bold text-4xl text-white cursor-pointer ">Careers</h1>
      <nav>
        <ul className="flex flex-wrap gap-10 text-center items-center  text-lg text-white p-2">

          <li className="w-[30px] h-[30px] hover:bg-white hover:text-gray-600 p-2 rounded-full cursor-pointer">
            
            <a href="https://twitter.com/getpeppermint" target="_blank">
              
              <BsTwitter />
            </a>
          </li>

          <li className="w-[30px] h-[30px] hover:bg-white hover:text-gray-600 p-2 rounded-full cursor-pointer">
          

          <a href="https://www.linkedin.com/company/getpeppermint/" target="_blank">
            <BsLinkedin />

            </a>

          </li>


          <li className="w-[30px] h-[30px] hover:bg-white hover:text-gray-600 p-2 rounded-full cursor-pointer">

          <a href="https://www.youtube.com/channel/UCsBgxvgDYRPHEKPp_tU-Qyw" target="_blank">
            <BsYoutube />
            </a>
          </li>

          <li className="w-[30px] h-[30px] hover:bg-white hover:text-gray-600 p-2 rounded-full cursor-pointer">

          <a href="https://mail.google.com/" target="_blank">
            <CgMail />

            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
