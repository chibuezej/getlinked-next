import Image from "next/image";
import React from "react";
import PartnerImage from "@/app/assets/images/Partner and sponsors section.png";
import ColoredStar from "@/app/assets/icons/ColoredStar.svg";

const Partners = () => {
  return (
    <section>
      <div className="px-10 md:px-32 py-24 ">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <div className="space-y-3 text-center">
            <h3 className="text-xl font-bold">Partners and Sponsors</h3>
            <p className="max-w-[440px] text-xs">
              Getlinked Hackathon 1.0 is honored to have the following major{" "}
              <br />
              companies as its partners and sponsors
            </p>
          </div>
          <div className="min-w-[45vw]">
            <div className="pb-1 p-6">
              <Image src={ColoredStar} alt="Colored Star" priority />
            </div>
            <Image src={PartnerImage} alt="Sponsors and Partners" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
