import React from "react";
import Button from "./Common/Button";

const Award = () => {
  return (
    <>
      <div className="pl-[20px] pr-[20px] md:pr-[100px] md:pl-[100px]">
        <h2 className="text-center md:text-left !font-bebasNeue md:w-[900px] text-[36px] md:text-[84px] font-normal leading-[95.5%] tracking-0 md:tracking-[-3.5px]">
          WE&apos;RE THE FIRST GAMING AWARD WINNERS THE WORLD
        </h2>

        <div className="award max-sm:hidden pt-3">
          <ul className="flex pt-5 flex-wrap">
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-bold text-base text-md text-transparent bg-clip-text bg-gradient-to-r from-[#C1260F] to-[#EE642A]"
                href="javascript:void(0)"
              >
                Adventure
              </a>
            </li>
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-normal text-base text-md"
                href="javascript:void(0)"
              >
                Arcade
              </a>
            </li>
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-normal text-base text-md"
                href="javascript:void(0)"
              >
                Arena
              </a>
            </li>
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-normal text-base text-md"
                href="javascript:void(0)"
              >
                Avoider
              </a>
            </li>
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-normal text-base text-md"
                href="javascript:void(0)"
              >
                Balance
              </a>
            </li>
          </ul>
          <div className="award1">
            <img
              className="w-full h-full object-fill"
              src="images/award/award_img_1.png"
              alt="icon"
            />
          </div>
          <div className="award2">
            <img
              className="w-full h-full object-fill"
              src="images/award/award_img_2.png"
              alt="icon"
            />
          </div>
          <div className="award3">
            <img
              className="w-full h-full object-fill"
              src="images/award/award_img_3.png"
              alt="icon"
            />
          </div>
          <div className="award4">
            <img
              className="w-full h-full object-fill"
              src="images/award/award_img_4.png"
              alt="icon"
            />
          </div>
          <div className="more flex justify-between items-center">
            <div>
              <span className="!font-nunito font-extralight text-[18px] md:text-[21px] tracking-[0.15px] leading-[146%]">
                We’ve Have Many More Than
              </span>
              <h2 className="!font-bebasNeue text-[60px] md:text-[84px] font-normal leading-[95.5%] tracking-[-3.5px]">
                100 +
              </h2>
              <span className="!font-nunito font-extralight text-[18px] md:text-[21px] tracking-[0.15px] leading-[146%]">
                Gaming
              </span>{" "}
              <span className="!font-nunito text-primary font-normal text-[18px] md:text-[21px] tracking-[0.15px] leading-[146%]">
                Collection
              </span>
            </div>
            <Button width={140} variant="right">
              View More
            </Button>
          </div>
        </div>

        <div className="hidden max-sm:block">
          <ul className="flex pt-5 flex-wrap">
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-bold text-base text-md text-transparent bg-clip-text bg-gradient-to-r from-[#C1260F] to-[#EE642A]"
                href="javascript:void(0)"
              >
                Adventure
              </a>
            </li>
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-normal text-base text-md"
                href="javascript:void(0)"
              >
                Arcade
              </a>
            </li>
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-normal text-base text-md"
                href="javascript:void(0)"
              >
                Arena
              </a>
            </li>
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-normal text-base text-md"
                href="javascript:void(0)"
              >
                Avoider
              </a>
            </li>
            <li className="pr-[16px] md:pr-[37px]">
              <a
                className="font-normal text-base text-md"
                href="javascript:void(0)"
              >
                Balance
              </a>
            </li>
          </ul>
          <div className="flex gap-3 flex-col pt-3">
            <img
              className="w-full h-full object-fill"
              src="images/award/award_img_1.png"
              alt="icon"
            />
            <img
              className="w-full h-full object-fill"
              src="images/award/award_img_2.png"
              alt="icon"
            />
            <img
              className="w-full h-full object-fill"
              src="images/award/award_img_3.png"
              alt="icon"
            />
            <img
              className="w-full h-full object-fill"
              src="images/award/award_img_4.png"
              alt="icon"
            />
          </div>
          <div className="flex justify-between items-center pt-3">
            <div>
              <span className="!font-nunito font-extralight text-[16px] tracking-[0.15px] leading-[146%]">
                We’ve Have Many More Than
              </span>
              <h2 className="!font-bebasNeue text-[36px] font-normal leading-[95.5%] tracking-0">
                100 +
              </h2>
              <span className="!font-nunito font-extralight text-[16px] tracking-[0.15px] leading-[146%]">
                Gaming
              </span>{" "}
              <span className="!font-nunito text-primary font-normal text-[16px] tracking-[0.15px] leading-[146%]">
                Collection
              </span>
            </div>
            <Button width={140} variant="right">
              View More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
