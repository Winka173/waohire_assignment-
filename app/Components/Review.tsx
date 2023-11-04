"use client";
import React from "react";

const Review = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center pt-[60px]">
        <div className="relative">
          <img
            className="absolute left-[22%] md:left-[45%] top-[-84px]"
            src="images/reward/reward_icon_1.png"
            alt="icon"
          />
          <h2 className="!font-bebasNeue md:w-[922px] text-[36px] md:text-[84px] font-normal leading-[95.5%] tracking-0 md:tracking-[-3.5px]">
            HAPPY CLIENTS
          </h2>
        </div>
      </div>
      <div className="pl-[20px] pr-[20px] md:pl-[100px] md:pr-[100px] pt-10 flex justify-center">
        <div
          className=" md:pt-[45px] md:px-[84px] p-[30px] md:w-[800px] md:h-[400px] relative"
          style={{
            backgroundImage: 'url("/images/reward/reward_rec.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <img
            className="absolute top-[-35px] right-[40px]"
            src="images/review/dot.png"
          />
          <div
            className=""
            // style={{
            //   backgroundImage: 'url("/images/reward/reward_rec.png")',
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "100% 100%",
            // }}
          >
            <div className="flex justify-center pb-4">
              <img
                className="!h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
            </div>
            <p className="text-center !font-nunito font-extralight text-base tracking-[0.15px] leading-[133.5%%] pb-5">
              Quick and adaptable, SoundPart reliably meets these key
              necessities. The capacity to talk straightforwardly with a senior
              guarantor makes this conceivable. Quick and adaptable, SoundPart
              reliably meets these key necessities. The capacity to talk
              straightforwardly with a senior guarantor makes this conceivable.
            </p>
            <p className="text-center !font-nunito font-extralight text-base tracking-[0.15px] leading-[133.5%]">
              Quick and adaptable, SoundPart reliably meets these key
              necessities. The capacity to talk straightforwardly with a senior
              guarantor makes this conceivable.
            </p>
            <div className="flex justify-center pt-5 flex-col items-center">
              <img
                className="!w-[52px] !h-[52px] object-cover "
                src="images/review/ava_1.png"
                alt="icon"
              />
              <h3 className="!font-nunito text-2xl">Esther Howard</h3>
            </div>
          </div>
        </div>
        {/* <Carousel centerMode={true} infiniteLoop={true}>
        <div
          className="pt-5 px-5"
          style={{
            backgroundImage: 'url("/images/reward/reward_rec.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            className=""
            // style={{
            //   backgroundImage: 'url("/images/reward/reward_rec.png")',
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "100% 100%",
            // }}
          >
            <div className="flex justify-center pb-4">
              <img
                className="!h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
            </div>
            <p className="text-center !font-nunito font-extralight text-base tracking-[0.15px] leading-[133.5%%] pb-5">
              Quick and adaptable, SoundPart reliably meets these key
              necessities. The capacity to talk straightforwardly with a senior
              guarantor makes this conceivable. Quick and adaptable, SoundPart
              reliably meets these key necessities. The capacity to talk
              straightforwardly with a senior guarantor makes this conceivable.
            </p>
            <p className="text-center !font-nunito font-extralight text-base tracking-[0.15px] leading-[133.5%]">
              Quick and adaptable, SoundPart reliably meets these key
              necessities. The capacity to talk straightforwardly with a senior
              guarantor makes this conceivable.
            </p>
            <div className="flex justify-center pt-5 flex-col items-center">
              <img
                className="!w-[52px] !h-[52px] object-cover "
                src="images/review/ava_1.png"
                alt="icon"
              />
              <h3 className="!font-nunito text-2xl">Esther Howard</h3>
            </div>
          </div>
        </div>
        <div>
          <div
            className=""
            // style={{
            //   backgroundImage: 'url("/images/reward/reward_rec.png")',
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "100% 100%",
            // }}
          >
            <div className="flex justify-center pb-4">
              <img
                className="!h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
            </div>
            <p className="text-center !font-nunito font-extralight text-base tracking-[0.15px] leading-[133.5%%] pb-5">
              Quick and adaptable, SoundPart reliably meets these key
              necessities. The capacity to talk straightforwardly with a senior
              guarantor makes this conceivable. Quick and adaptable, SoundPart
              reliably meets these key necessities. The capacity to talk
              straightforwardly with a senior guarantor makes this conceivable.
            </p>
            <p className="text-center !font-nunito font-extralight text-base tracking-[0.15px] leading-[133.5%]">
              Quick and adaptable, SoundPart reliably meets these key
              necessities. The capacity to talk straightforwardly with a senior
              guarantor makes this conceivable.
            </p>
            <div className="flex justify-center pt-5 flex-col items-center">
              <img
                className="!w-[52px] !h-[52px] object-cover "
                src="images/review/ava_1.png"
                alt="icon"
              />
              <h3 className="!font-nunito text-2xl">Esther Howard</h3>
            </div>
          </div>
        </div>
        <div>
          <div
            className=""
            // style={{
            //   backgroundImage: 'url("/images/reward/reward_rec.png")',
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "100% 100%",
            // }}
          >
            <div className="flex justify-center pb-4">
              <img
                className="!h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
              <img
                className="ml-[-7px] !h-[24px] !w-[24px]"
                src="images/review/star.png"
              />
            </div>
            <p className="text-center !font-nunito font-extralight text-base tracking-[0.15px] leading-[133.5%%] pb-5">
              Quick and adaptable, SoundPart reliably meets these key
              necessities. The capacity to talk straightforwardly with a senior
              guarantor makes this conceivable. Quick and adaptable, SoundPart
              reliably meets these key necessities. The capacity to talk
              straightforwardly with a senior guarantor makes this conceivable.
            </p>
            <p className="text-center !font-nunito font-extralight text-base tracking-[0.15px] leading-[133.5%]">
              Quick and adaptable, SoundPart reliably meets these key
              necessities. The capacity to talk straightforwardly with a senior
              guarantor makes this conceivable.
            </p>
            <div className="flex justify-center pt-5 flex-col items-center">
              <img
                className="!w-[52px] !h-[52px] object-cover "
                src="images/review/ava_1.png"
                alt="icon"
              />
              <h3 className="!font-nunito text-2xl">Esther Howard</h3>
            </div>
          </div>
        </div>
      </Carousel> */}
      </div>
    </>
  );
};

export default Review;
