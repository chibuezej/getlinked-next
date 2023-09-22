import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/icons/getlinked.svg";
import PhoneSvg from "@/app/assets/icons/phone.svg";
import LocationSvg from "@/app/assets/icons/location.svg";
import FacebookSvg from "@/app/assets/icons/Vector (1).svg";
import Xsvg from "@/app/assets/icons/Vector (2).svg";
import LinkdlnSvg from "@/app/assets/icons/ri_linkedin-fill.svg";
import InstagramSvg from "@/app/assets/icons/mdi_instagram.svg";
import ColoredStarSvg from "@/app/assets/icons/sata gra.svg";

function Footer() {
  return (
    <footer
      className={`py-8 bg-[#100B20] font-montserrat text-white lg:px-24 px-4`}
    >
      <section className={`flex flex-wrap items-start`}>
        <section className={`lg:w-[40%] w-full`}>
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="Get Linked Logo"
            className={`w-[8rem]`}
          />
          <p className={`text-sm mt-2`}>
            Getlinked Tech Hackathon is technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>{" "}
          <br /> <br /> <br />
          <div className={`flex items-center text-sm`}>
            <Link href={`/`}>
              <p>Terms of Use</p>
            </Link>
            <div className={`h-4 bg-[#D434FE] mx-4 w-[2px]`}></div>
            <Link href={`/`}>
              <p>Privacy Policy</p>
            </Link>
          </div>
        </section>
        <section className={`flex-1 lg:px-16 lg:mt-0 mt-6`}>
          <div className={`w-full flex flex-wrap justify-between items-start`}>
            <section>
              <h3 className={`text-[#D434FE] mb-2 text-sm font-medium`}>
                Useful Links
              </h3>
              <ul className="">
                <li className="text-sm py-2">Overview</li>
                <li className="text-sm py-2">Timeline</li>
                <li className="text-sm py-2">FAQs</li>
                <li className="text-sm py-2">Register</li>
              </ul>
            </section>
            <section className={`lg:mt-0 mt-3`}>
              <h3 className={`text-[#D434FE] mb-2 text-base font-medium`}>
                Contact Us
              </h3>
              <div className={`flex items-center font-montserrat`}>
                <Image
                  src={PhoneSvg}
                  alt="Phone Icon"
                  width={12}
                  height={12}
                  className={`w-[14px] mr-4`}
                />
                <p className={`text-sm`}>+234 6707653444</p>
              </div>
              <div className={`flex items-center my-3 font-montserrat`}>
                <Image
                  src={LocationSvg}
                  alt="Phone Icon"
                  width={12}
                  height={12}
                  className={`w-[14px] mr-4`}
                />
                <p className={`text-sm`}>
                  27, Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </section>
          </div>
          <div className={`flex space-x-5  my-2`}>
            <p className={`text-[#D434FE] text-sm`}>Follow Us</p>
            <section className={`flex space-x-4 items-center`}>
              <Link href={`/`}>
                <Image
                  src={InstagramSvg}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className={`w-[20px]`}
                />
              </Link>
              <Link href={`/`}>
                <Image
                  src={Xsvg}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className={`w-[18px]`}
                />
              </Link>
              <Link href={`/`}>
                <Image
                  src={FacebookSvg}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className={`w-[10px]`}
                />
              </Link>
              <Link href={`/`}>
                <Image
                  src={InstagramSvg}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className={`w-[20px]`}
                />
              </Link>
            </section>
          </div>
        </section>
      </section>{" "}
      <br />
      <div className="flex items-center justify-center py-8">
        <Image src={ColoredStarSvg} alt="Colored Star" className="" />
      </div>
      <p className={`w-full text-center text-white font-montserrat text-xs`}>
        All rights reserved. &copy; getlinked Ltd.
      </p>
    </footer>
  );
}

export default Footer;
