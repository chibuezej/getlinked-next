"use client"

import React from 'react'
import { useNavigate } from 'react-router-dom';
import RegisterImage from "@/app/assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import ColoredStar from "@/app/assets/icons/coloredStar.svg";
import Star from '@/app/assets/icons/star.svg';
import Image from "next/image";
import SignUpForm from "./SignUpForm";



function Page() {
  return (
    <div className="w-full h-full main_bg relative p-[8%] overflow-clip">
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <Image
          src={ColoredStar}
          alt="Star"
          className="absolute w-[20px] object-contain left-[9%] top-[27%]"
        />
        <Image
          src={Star}
          alt="Star"
        //   className="absolute w-[20px] object-contain left-[59%] top-[32%]"
        />
        <Image
          src={Star}
          alt="Star"
        //   className="absolute w-[20px] object-contain left-[35%] top-[87%]"
        />
        <Image
          src={Star}
          alt="purple flare"
        //   className="absolute z-10 opacity-40 object-contain top-[0%] right-[-550px]"
        />
        <Image
          src={Star}
          alt="purple flare"
          className="absolute z-10 opacity-40 object-contain top-0 lg:top-[-20%] left-[-50px] lg:left-[-200px]"
        />
      </div>
      <div className="w-full h-full relative z-20 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[50%] h-full hidden lg:flex flex-col gap-[17px]">
          <Image src={RegisterImage} alt="A man sitting on a seat" />
        </div>
        <div className="w-full lg:w-[50%] h-full">
          <SignUpForm />
        </div>
      </div>
    </div>
    );
}

export default Page