"use client";
import clsx from "clsx";
import React, { useState } from "react";
import Button from "./Common/Button";

const Reward = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="flex justify-center items-center text-center">
        <div className="relative">
          <img
            className="absolute left-[45%] top-[-84px]"
            src="images/reward/reward_icon_1.png"
            alt="icon"
          />
          <h2 className="!font-bebasNeue md:w-[922px] text-[36px] md:text-[84px] font-normal leading-[95.5%] tracking-0 md:tracking-[-3.5px]">
            THE MOST RECENT PATTERNS, CONVEYED DIRECTLY TO YOUR MAILBOX.
          </h2>
        </div>
      </div>
      <div className="pl-[20px] pr-[20px] md:pl-[100px] md:pr-[100px] pt-5 flex items-start gap-2 md:gap-8 max-md:flex-col">
        <img
          className="object-cover md:ml-[-40px]"
          src="images/reward/reward_banner.png"
          alt="main banner"
        />
        <div className="md:pt-[100px] w-full">
          <div
            style={{
              backgroundImage: 'url("/images/reward/reward_rec.png")',
              backgroundSize: "100% 100%",
            }}
            onClick={() => {
              setOpen((pre) => !pre);
            }}
            className="cursor-pointer w-full !font-nunito font-extralight p-3 md:p-5 text-[16px] md:text-[21px] flex gap-[10px] items-center tracking-[0.15px]"
          >
            <img
              className={clsx(`h-[18p] transition-all`, !open && "rotate-180")}
              src="images/reward/arrow_down.png"
            />
            Staff Picks With Erin This Week&apos;s Top Picks
          </div>
          <div
            className={clsx(
              "pt-4 pb-4 transition-all",
              open ? "block" : "hidden"
            )}
          >
            <span className="!font-nunito font-extralight text-[16px] md:text-[21px] tracking-[0.15px] leading-[146%]">
              For the Consuming Campaign discharge, I remained up the entire
              evening playing and wound up leaving school &apos;cos I was
              nodding off all over. Most certainly utilized being debilitated a
              ton in school to mess around. Presently I simply use excursion
              when games I&apos;m energized for emerge.
            </span>
          </div>

          <div className="border-b-[0.5px] w-full !font-nunito font-extralight p-3 md:p-5 text-[16px] md:text-[21px] flex gap-[10px] items-center tracking-[0.15px]">
            <img
              className={clsx(`h-[18p] transition-all rotate-180`)}
              src="images/reward/arrow_down.png"
            />
            Compelling Games Is 20 Years of age!
          </div>
          <div className="border-b-[0.5px] w-full !font-nunito font-extralight p-3 md:p-5 text-[16px] md:text-[21px] flex gap-[10px] items-center tracking-[0.15px]">
            <img
              className={clsx(`h-[18p] transition-all rotate-180`)}
              src="images/reward/arrow_down.png"
            />
            Irresistible Games Merchandise Is Here
          </div>

          <div className="pt-[28px] flex gap-2 md:pl-5">
            <Button variant="right">Play Now</Button>
            <Button width={150} variant="left">
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reward;
