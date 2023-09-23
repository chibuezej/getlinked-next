"use client"
import React, { useState } from "react";
import logo from "@/app/assets/icons/getlinked.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/constant/Button";
import menu from "@/app/assets/icons/menu.svg"
const data = [
  { name: "Timelines", href: "/" },
  { name: "Overview", href: "/" },
  { name: "FAQs", href: "/" },
  { name: "Contact", href: "/Contact" }, 
];

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#150e28] text-white border-b  border-opacity-18">
      <nav className="flex justify-between items-center py-4 px-6">
        <Link href="/">
        <div>
          <Image src={logo} alt="get-linked" />
        </div>
        </Link>
        <div className="hidden lg:flex justify-evenly items-center gap-12">
          {data.slice(0, 3).map((item, index) => (
            <Link key={index} href={item.href}>
              <p className="p3-medium hover:scale-110 hover:text-gray-700">
                {item.name}
              </p>
            </Link>
          ))}
          <Link href="/Register"> 
            <p className="p3-medium hover:scale-110 hover:text-gray-700">
              Register
            </p>
          </Link>
        </div>

        <div className="lg:hidden">
          <p
            className="p3-medium hover:scale-110 hover:text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
           <Image src={menu} alt="Menu" />
          </p>
          {mobileMenuOpen && (
            <div className="mt-2 menu-container bg-[#150e28] absolute top-14 right-0 w-[396px] h-[442px]">
              {data.map((item, index) => (
                <Link key={index} href={item.href}>
                  <p
                    className="block p3-medium hover:scale-110 hover:text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </p>
                </Link>
              ))}
              <Link href="/Contact"> 
                <p
                  className="block p3-medium hover:scale-110 hover:text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </p>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
