import React from "react";
import woman from "@/app/assets/images/rules.svg";
import star from "@/app/assets/images/twinkleStar.svg"
import Image from "next/image";
function Rules() {
  return (
    <section className={`py-8 border-b border-b-[#FFFFFF2E] lg:px-28 px-4 flex lg:flex-row flex-col-reverse items-center`}>
    <div className={`lg:w-[50%] w-full relative lg:px-7`}>
      <Image
        src={star}
        alt="Star Icon"
        width={26}
        height={32}
        className={`w-[26px] h-[32px] absolute -top-10 right-[47%]`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8/eCBPQMRgHFUIX0VAgB4UB0vFSLebwAAAABJRU5ErkJggg=="
      />
      <h2 className={`lg:text-3xl text-2xl lg:w-[50%] py-3 lg:text-left text-center font-bold font-clash-display`}>
        Rules and <span className={`text-[#D434FE]`}>Guidelines</span>
      </h2>

      <p className={`text-sm text-center lg:text-left`}>
        Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you&apos;re a coding genius, a
        design maverick, or a concept wizard, you&apos;ll have the chance to transform
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that&apos;s what we&apos;re all about!
      </p>
    </div>

    <div className={`flex-1`}>
      <Image
        src={woman}
        alt="Rules Image"
        width={200}
        height={200}
        className={`w-[35rem] object-contain object-center`}
      />
    </div>
  </section>
  );
}

export default Rules;
