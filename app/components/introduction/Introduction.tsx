import React from "react";
import bulb from "@/app/assets/images/bulb.svg";
import Image from "next/image";
import vector from "@/app/assets/images/vector2.svg"

function Introduction() {
  return (
    <div className={`py-16 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex lg:flex-row flex-col items-center`} id="overview">
    <div className={`flex-1`}>
      <Image
        src={bulb}
        width={200}
        height={200}
        alt="The Big Idea"
        className={`w-[90%] object-contain object-center`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
      />
        <Image src={vector} alt="vector" />
    </div>

    <div className={`lg:w-[45%] lg:px-5 md:w-[60%] w-full lg:mt-0 mt-9`}>
      <h2 className={`lg:text-3xl text-center lg:text-left text-2xl lg:w-[80%] font-bold font-clash-display`}>
        Introduction to getlinked <span className={`text-[#D434FE]`}>tech Hackathon 1.0</span>
      </h2>

      <p className={`text-[13px] lg:text-left text-center pt-3`}>
        Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you&apos;re a coding genius, a
        design maverick, or a concept wizard, you&apos;ll have the chance to transform
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that&apos;s what we&apos;re all about!
      </p>
    </div>
  </div>

  );
}

export default Introduction;
