import React from "react";
import woman from "@/app/assets/images/rules.svg";
import Image from "next/image";
function Rules() {
  return (
    <div className="flex">
      <div className="flex-1">
        <h3>Rules and Guidelines</h3>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you`re a coding genius,
          a design maverick, or a concept wizard, you`ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that`s what we`re all about!
        </p>
      </div>
      <div className="flex-1">
        <Image src={woman} alt="woman reading" />
      </div>
    </div>
  );
}

export default Rules;
