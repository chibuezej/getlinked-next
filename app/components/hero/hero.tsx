"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/app/constant/Button";
import hero from "@/app/assets/images/hero.svg";
import stars from "@/app/assets/images/stars.svg";
import vector from "@/app/assets/images/vector.svg";
import chain from "@/app/assets/images/chain.svg";

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
    <div className="flex lg:px-24 px-4">
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-[80px] font-bold">getlinked Tech</h1>
          <h1 className="flex items-center gap-4 text-[80px] font-bold">
            Hackathon 1.0
            <span>
              <Image src={chain} alt="chain" />
            </span>
          </h1>
          <p className="text-[20px] font-normal">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
        </div>
        <div className="mb-8">
          <Button label="Subscribe" />
        </div>

        <p className="text-[64px] font-normal">{formatTime(countdown)}</p>
      </div>

      <div className="flex-1">
        <h1 className="text-[36px] font-semiBold">
          Igniting a Revolution in HR Innovation
        </h1>
        <Image src={vector} alt="vector-line" />
        <div className="max-w-[828px] max-h-[715px]">
          <Image src={hero} alt="Boy wearing Hd lens" />
        </div>
        <div className="absolute top-[65px]">
          <Image src={stars} alt="stars" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
