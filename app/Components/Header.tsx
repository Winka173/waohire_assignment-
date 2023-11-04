"use client";
import React, { useState, useRef } from "react";
import Button from "./Common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import clsx from "clsx";
import { useClickOutside } from "../hooks/useClickOutSide";

const Header = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow((pre) => !pre);
  };

  const menuRef = useRef();

  useClickOutside(menuRef, () => {
    setShow(false);
  });

  return (
    <div
      className="box-shadow fixed md:static top-0 w-full bg-gradient-to-r from-[#C1260F] to-[#EE642A] md:!bg-none
    shadow-xl pt-3 z-[100] pb-3 mb-3 md:shadow-none md:flex md:items-center justify-between md:pl-[100px] md:pr-[100px] pr-[20px] pl-[20px]"
    >
      <span
        style={{ width: "24x" }}
        className="text-3xl cursor-pointer md:hidden block"
        onClick={showMenu}
      >
        <span>
          <FontAwesomeIcon name="menu" icon={!show ? faBars : faClose} />
        </span>
      </span>
      <ul
        ref={menuRef}
        className={clsx(
          `md:flex md:items-center md:z-auto md:static absolute bg-red w-full left-0 md:w-auto md:py-0 py-3
      md:pl-0 pl-5 top-[-400px] translate-all ease-in opacity-0 md:opacity-100 duration-300 bg-[#414141] md:!bg-transparent z-[10] shadow-xl`,
          show && "top-[60px] opacity-100"
        )}
      >
        <li className="my-3 md:mr-[37px]">
          <a
            className="font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#C1260F] to-[#EE642A]"
            href="javascript:void(0)"
          >
            Marketplace
          </a>
        </li>
        <li className="my-3 md:mr-[37px]">
          <a
            className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
            href="javascript:void(0)"
          >
            Stats
          </a>
        </li>
        <li className="my-3 md:mr-[37px]">
          <a
            className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
            href="javascript:void(0)"
          >
            Collections
          </a>
        </li>
        <li className="my-3 md:mr-[37px]">
          <a
            className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
            href="javascript:void(0)"
          >
            Explore
          </a>
        </li>
        <li className="my-3 md:mr-[37px]">
          <a
            className="font-normal text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#C1260F] hover:to-[#EE642A] duration-300"
            href="javascript:void(0)"
          >
            Community
          </a>
        </li>
        <Button customClassName="block md:hidden" variant="right">
          Register
        </Button>
      </ul>
      <Button customClassName="hidden md:block" variant="right">
        Register
      </Button>
    </div>
  );
};

export default Header;
