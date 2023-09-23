"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import logo from "@/app/assets/icons/getlinked.svg";
import menu from "@/app/assets/icons/menu.svg"
import close from "@/app/assets/icons/close.svg"
import Button from "@/app/constant/Button";

const NavList = [
    {
      "name": "Timeline",
      "route": "/"
    },
    {
      "name": "Overview",
      "route": "#overview"
    },
    {
      "name": "FAQs",
      "route": "#faq"
    },
    {
      "name": "Contact",
      "route": "/Contact"
    }
]


const Navbar = (): React.ReactNode => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const pushToRegister = () => router.push('/Register');

  return (
    <header className={`border-b relative font-montserrat text-white border-b-[#FFFFFF2E] bg-transparent flex items-center justify-between py-7 lg:px-16 px-4`}>
      <Link href={`/`}>
        <Image
          src={logo}
          width={100}
          height={100}
          className={`w-[8rem]`}
          alt="Get Linked Image"
        />
      </Link>

      <section className={`space-x-24 lg:flex hidden items-center`}>
        <ul className={`space-x-12 text-sm`}>
          {NavList.map((option, index) => (
            <li key={index} className={`float-left`}>
              <Link href={option.route}>
                <p className={`hover:bg-clip-text hover:bg-text-grad hover:text-transparent duration-150 ${pathname.startsWith(option.route) && "bg-clip-text bg-text-grad text-transparent"}`}>
                  {option.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className={`w-[9rem] lg:block hidden duration-150`}>
          <button onClick={() => { pushToRegister() }}>
            <Button label="Register" />
          </button>
        </div>
      </section>

      <button onClick={() => { setMobileNavOpen(true) }} className={`p-2 lg:hidden block`}>
        <Image
          src={menu}
          alt="Hamburger Icon"
          width={19}
          height={19}
          className={`w-[19px]`}
        />
      </button>

      <div onClick={() => { setMobileNavOpen(false) }} className={`${mobileNavOpen ? "translate-y-0" : "-translate-y-[100%]"} z-50 duration-300 w-full absolute top-0 left-0 py-4 px-14 rounded-md bg-[#150E28]`}>
        <div className={`flex items-center justify-end`}>
          <button onClick={() => { setMobileNavOpen(false) }}>
            <Image
              src={close}
              alt="Close Nav"
              width={5}
              height={10}
              className={`w-[30px] object-center`}
            />
          </button>
        </div> <br />

        <ul className={``}>
          {NavList.map((option, index) => (
            <li key={index} className={`my-5`}>
              <Link href={option.route}>
                <p>
                  {option.name}
                </p>
              </Link>
            </li>
          ))}
        </ul> <br />

        <div className={`w-[10rem]`}>
          <button onClick={() => { pushToRegister() }}>
          <Button label="Register" />
          </button>
        </div> <br /><br />
      </div>
    </header>
  )
}

export default Navbar;