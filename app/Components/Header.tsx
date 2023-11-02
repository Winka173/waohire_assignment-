import React from "react";
import Button from "./Common/Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between pl-[100px] pr-[100px] pt-[60px]">
      <ul className="flex">
        <li className="pr-[37px]">
          <a
            className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#C1260F] to-[#EE642A]"
            href="javascript:void(0)"
          >
            Marketplace
          </a>
        </li>
        <li className="pr-[37px]">
          <a className="font-normal text-md" href="javascript:void(0)">
            Stats
          </a>
        </li>
        <li className="pr-[37px]">
          <a className="font-normal text-md" href="javascript:void(0)">
            Collections
          </a>
        </li>
        <li className="pr-[37px]">
          <a className="font-normal text-md" href="javascript:void(0)">
            Explore
          </a>
        </li>
        <li className="pr-[37px]">
          <a className="font-normal text-md" href="javascript:void(0)">
            Community
          </a>
        </li>
      </ul>
      <Button>Register</Button>
    </div>
  );
};

export default Header;
