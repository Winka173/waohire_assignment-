import React from "react";

const Sponsor = () => {
  return (
    <div className="pl-[20px] pr-[20px] md:pl-[100px] md:pr-[100px]">
      <div className="flex max-sm:flex-col justify-around items-center flex-wrap">
        <a href="javascript:void(0)">
          <img
            className="max-sm:pb-0 pb-8 "
            src="images/sponsor/twitch.png"
            alt="icon"
          />
        </a>
        <a href="javascript:void(0)">
          <img
            className="max-sm:pb-0"
            src="images/sponsor/roblox.png"
            alt="icon"
          />
        </a>
        <a href="javascript:void(0)">
          <img
            className="max-sm:pb-5 pb-2"
            src="images/sponsor/chess.png"
            alt="icon"
          />
        </a>
        <a href="javascript:void(0)">
          <img
            className="max-sm:pb-2"
            src="images/sponsor/gamesradar.png"
            alt="icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
