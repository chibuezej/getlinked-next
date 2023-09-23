import Image from "next/image";
import React from "react";
import Trophy from "@/app/assets/images/trophy.png";
import Medal from "@/app/assets/images/Rewards.png";
import ColoredStar from "@/app/assets/icons/coloredStar.svg";

function Price () {
  return (
    <section>
      {/* <div className=" p-6">
      <Image src={ColoredStar} alt="Colored Star" />
      </div> */}
      <div className="relative px-10 md:px-32 lg:grid grid-cols-2 py-20 items-center bg-center bg-cover">
        <div className="hidden lg:block">
          <Image src={Trophy} alt="Trophy" width={548} height={718} priority />
        </div>
        <div className="space-y-14">
          <div className="pl-16 space-y-4">
            <div className="pl-14">
              <h3 className="text-xl font-bold">
                Prizes and
                <br /> <span className="text-[#D434FE]">Rewards</span>
              </h3>
              <p className=" text-xs max-w-[330px]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
          </div>
          <div className="block lg:hidden ">
            <Image src={Trophy} alt="Trophy" priority />
          </div>
          <div className="min-w-[45vw]">
            <Image src={Medal} alt="Vercel Logo" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
