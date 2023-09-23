"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/app/constant/Button";
import hero from "@/app/assets/images/hero.svg";
import stars from "@/app/assets/images/stars.svg";
import vector from "@/app/assets/images/vector.svg";
import chain from "@/app/assets/images/chain.svg";
import bulb from "@/app/assets/icons/bulb.svg";
import Link from "next/link";

function Hero() {
  const initialTime = 3600;
  const [countdown, setCountdown] = useState(initialTime);

  const formatTime = (timeInSeconds: any) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <>
      <h1
        className={`lg:text-xl text-base italic font-bold w-full text-right relative lg:px-14 px-4 py-5`}
      >
        Igniting a Revolution in HR Innovation
        <Image
          src={vector}
          alt="vector-line"
          width={253}
          height={253}
          className={`absolute w-[135px] top-[70%] lg:right-14 right-4`}
        />
      </h1>
      <div
        className={`lg:px-14 px-4 border-b border-b-[#FFFFFF2E] flex lg:flex-row flex-col items-center justify-center`}
      >
        <div className="flex-1">
          <div className="mb-6">
            <h1
              className={`lg:text-7xl text-5xl font-extrabold lg:text-left text-center font-clash-display`}
            >
              getlinked Tech
              <span className="absolute md:left-[24rem] lg:left-[30.8rem] 5rem top-[11rem]">
                <Image src={bulb} alt="bulb" />
              </span>{" "}
              Hackathon<span className={`text-[#D434FE]`}>1.0</span>
            </h1>
            <p
              className={`text-sm py-2 w-[23rem] lg:text-left text-center max-w-full`}
            >
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start mb-8">
            <Button label="Register" />
          </div>

          <p className="text-[64px] font-normal">{formatTime(countdown)}</p>
        </div>
        <div className={`flex-1 lg:mt-0 mt-8`}>
          <Image
            src={hero}
            alt="Hero Image"
            height={500}
            width={500}
            className={`w-full object-cover rounded-md object-center`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
          />
          <div className="relative bottom-[19rem] lg:absolute md:top-[-42rem] lg:top-[90px] max-w-[667px] max-h-[641px]">
            <Image src={stars} alt="stars" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
