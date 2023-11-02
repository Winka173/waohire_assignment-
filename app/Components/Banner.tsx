import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center">
        <div className="relative">
          <img
            className="absolute left-[-26px] top-[-48px]"
            src="images/banner/banner_icon_1.png"
            alt="icon"
          />
          <h2 className="!font-bebasNeue w-[900px] text-[104px] font-normal leading-[95.5%] tracking-[-4px]">
            NEXT GENERATION GET YOUR DESIRED RANK NOW
          </h2>
          <img
            className="absolute bottom-[-58px] right-[13px]"
            src="images/banner/banner_icon_2.png"
            alt="icon"
          />
        </div>
      </div>
      <div className="flex justify-center pt-9 relative">
        <div className="relative z-20">
          <img
            className="object-cover"
            src="images/banner/banner_main_image.png"
            alt="main banner"
          />
          <img
            className="absolute top-0 right-[69px]"
            src="images/banner/banner_soldier.png"
            alt="soldier"
          />
          <span className="!font-bebasNeue absolute text-[32px] bottom-[38px] left-[39%] tracking-[3px]">
            REGISTER NOW
          </span>
        </div>
        <img
          className="absolute top-[98px] z-10"
          src="images/banner/banner_stripe_white.png"
          alt="stripe white"
        />
        <img
          className="absolute top-[212px] z-0"
          src="images/banner/banner_stripe_black.png"
          alt="stripe black"
        />
      </div>
    </>
  );
};

export default Banner;
