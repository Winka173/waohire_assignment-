import React from "react";
import Button from "./Common/Button";

const Feature = () => {
  return (
    <div className="pl-[20px] pr-[20px] md:pl-[100px] md:pr-[100px]">
      <div className="md:pl-[70px] md:pr-[70px] max-sm:flex-col flex gap-3 md:gap-6">
        <div className="flex flex-col justify-center items-center">
          <img
            className=""
            src="images/feature/feature_bg_1.png"
            alt="stripe white"
          />
          <Button
            customClassName="relative bottom-[22px] !w-[88%] !font-bebasNeue md:tracking-[3px] text-[24px] md:text-[29px] font-normal"
            variant="center"
          >
            PLAY NOW
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className=""
            src="images/feature/feature_bg_2.png"
            alt="stripe white"
          />
          <Button
            customClassName="relative bottom-[22px] !w-[88%] !font-bebasNeue md:tracking-[3px] text-[24px] md:text-[29px] font-normal"
            variant="center"
          >
            PLAY NOW
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className=""
            src="images/feature/feature_bg_3.png"
            alt="stripe white"
          />
          <Button
            customClassName="relative bottom-[22px] !w-[88%] !font-bebasNeue md:tracking-[3px] text-[24px] md:text-[29px] font-normal"
            variant="center"
          >
            PLAY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
