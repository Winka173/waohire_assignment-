import React from "react";

const Footer = () => {
  return (
    <>
      <div className="md:pr-[100px] md:pl-[100px] pl-[20px] pr-[20px] flex gap-3 justify-center items-center mb-5 md:mb-[75px]">
        <a href="javascript:void(0)">
          <img className="" src="images/footer/twiter.png" />
        </a>
        <a href="javascript:void(0)">
          <img className="" src="images/footer/facebook.png" />
        </a>
        <a href="javascript:void(0)">
          <img className="" src="images/footer/instagram.png" />
        </a>
        <a href="javascript:void(0)">
          <img className="" src="images/footer/github.png" />
        </a>
      </div>
      <div className="md:pr-[100px] md:pl-[100px] pl-[20px] pr-[20px] flex justify-center items-center mb-5 md:mb-[75px]">
        <ul className="flex flex-wrap gap-2 md:gap-[37px]">
          <li className="">
            <a
              className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
              href="javascript:void(0)"
            >
              Marketplace
            </a>
          </li>
          <li className="">
            <a
              className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
              href="javascript:void(0)"
            >
              Stats
            </a>
          </li>
          <li className="">
            <a
              className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
              href="javascript:void(0)"
            >
              Collections
            </a>
          </li>
          <li className="">
            <a
              className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
              href="javascript:void(0)"
            >
              Explore
            </a>
          </li>
          <li className="">
            <a
              className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
              href="javascript:void(0)"
            >
              Community
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-5 md:pr-[100px] md:pl-[100px] pl-[20px] pr-[20px] md:mb-[45px]">
        <hr className="border-[#1E293B]" />
      </div>
      <div className="flex justify-center mb-5 md:mb-[90px] md:pr-[100px] md:pl-[100px] pl-[20px] pr-[20px]">
        <span className="text-sm">
          © Copyright 2022, All Rights Reserved by Play Games
        </span>
      </div>
    </>
  );
};

export default Footer;
