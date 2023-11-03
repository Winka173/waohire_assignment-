"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Review = () => {
  return (
    <div>
      {" "}
      <div
        className="h-[395px] w-[800px]"
        style={{
          backgroundImage: 'url("/images/reward/reward_rec.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex justify-center">
          <img className="h-8" src="images/review/star.png" />
          <img className="ml-[-7px] h-8" src="images/review/star.png" />
          <img className="ml-[-7px] h-8" src="images/review/star.png" />
          <img className="ml-[-7px] h-8" src="images/review/star.png" />
          <img className="ml-[-7px] h-8" src="images/review/star.png" />
        </div>
      </div>
      {/* <Carousel centerMode={true} infiniteLoop={true}>
        <div>
          <div>
            <img src="images/review/star.png" />
            <img src="images/review/star.png" />
            <img src="images/review/star.png" />
            <img src="images/review/star.png" />
            <img src="images/review/star.png" />
          </div>
        </div>
        <div></div>
        <div></div>
      </Carousel> */}
    </div>
  );
};

export default Review;
