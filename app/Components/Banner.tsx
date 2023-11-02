import React from "react";

const Banner = () => {
  return (
    <div className="pt-[77px]">
      <div className="flex justify-center items-center text-center">
        <div className="relative">
          <img
            className="absolute left-[-26px] top-[-48px]"
            src="images/banner/banner_icon_1.png"
            alt=""
          />
          <h2 className="w-[900px] title ">
            NEXT GENERATION GET YOUR DESIRED RANK NOW
          </h2>
          <img
            className="absolute bottom-[-58px] right-[13px]"
            src="images/banner/banner_icon_2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
