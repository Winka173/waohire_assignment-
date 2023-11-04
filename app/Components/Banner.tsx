import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center">
        <div className="relative">
          <img
            className="absolute top-[-85px] left-[-26px] md:top-[-48px]"
            src="images/banner/banner_icon_1.png"
            alt="icon"
          />
          <h2 className="!font-bebasNeue pl-3 pr-3 md:pl-0 md:pr-0 md:w-[900px] text-[40px] md:text-[104px] font-normal leading-[95.5%] tracking-0 md:tracking-[-4.5px]">
            NEXT GENERATION GET YOUR DESIRED RANK NOW
          </h2>
          <img
            className="absolute bottom-[-78px] md:bottom-[-58px] right-[13px]"
            src="images/banner/banner_icon_2.png"
            alt="icon"
          />
        </div>
      </div>
      <div className="flex justify-center pt-14 md:pt-9 relative">
        <div className="relative z-20">
          <img
            className="object-cover"
            src="images/banner/banner_main_image.png"
            alt="main banner"
          />
          <img
            className="absolute md:scale-1 md:top-0 md:right-[69px] hidden md:block"
            src="images/banner/banner_soldier.png"
            alt="soldier"
          />
          <span className="!font-bebasNeue cursor-pointer absolute bottom-2 left-[38%] text-[16px] md:text-[32px] md:bottom-[38px] md:left-[39%] tracking-0 md:tracking-[3px]">
            REGISTER NOW
          </span>
        </div>
        <img
          className="absolute top-[100px] md:top-[98px] z-10"
          src="images/banner/banner_stripe_white.png"
          alt="stripe white"
        />
        <img
          className="absolute top-[120px] md:top-[212px] z-0"
          src="images/banner/banner_stripe_black.png"
          alt="stripe black"
        />
      </div>
    </>
  );
};

export default Banner;
