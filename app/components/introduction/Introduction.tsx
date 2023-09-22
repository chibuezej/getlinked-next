import React from "react";
import bulb from "@/app/assets/images/bulb.svg";
import Image from "next/image";
import vector from "@/app/assets/images/vector2.svg"

function Introduction() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1">
        <Image src={bulb} alt="information-bulb-tree" />
        <Image src={vector} alt="vector" />
      </div>
      <div className="flex-1">
        <h2 className="text-[32px] font-bold">
          Introduction to getlinked tech Hackathon 1.0
        </h2>
        <p className="text-[14px] font-normal">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you`re a coding genius,
          a design maverick, or a concept wizard, you`ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that`s what we`re all about!
        </p>
      </div>
    </div>
  );
}

export default Introduction;
