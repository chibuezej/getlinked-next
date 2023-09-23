"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../constant/Button'
import instagram from "@/app/assets/icons/intagram.svg"
import x from "@/app/assets/icons/x.svg"
import facebook from "@/app/assets/icons/facebook.svg"
import linkdln from "@/app/assets/icons/linkdln.svg"

function page() {
  return (
    <section className={`flex items-center justify-between py-14 lg:px-36 px-4 relative`}>
      <div className={`w-[40%] lg:block hidden`}>
        <h1 className={`text-[#D434FE] text-xl lg:text-3xl font-bold font-clash-display`}>
          Get in touch
        </h1><br />

        <div className={`text-base`}>
          <p className={`lg:w-[10rem] w-full`}>
            Contact Information
          </p> <br />

          <p className={`lg:w-[10rem] w-full`}>
            27,Alara Street
            Yaba 100012
            Lagos State
          </p> <br />

          <p>
            Call Us : 07067981819
          </p> <br />

          <p className={`lg:w-[17rem] w-full`}>
            we are open from Monday-Friday
            08:00am - 05:00pm
          </p> <br />

          <p className={`text-[#D434FE] text-lg font-bold font-montserrat`}>
            Share on
          </p>

          <section className={`flex space-x-4 mt-2 items-center`}>
            <Link href={`/`}>
              <Image
                src={instagram}
                alt="Instagram-Icon"
                width={24}
                height={24}
                className={`w-[20px]`}
              />
            </Link>

            <Link href={`/`}>
              <Image
                src={x}
                alt="x-icon"
                width={24}
                height={24}
                className={`w-[18px]`}
              />
            </Link>

            <Link href={`/`}>
              <Image
                src={facebook}
                alt="facebook-icon"
                width={24}
                height={24}
                className={`w-[10px]`}
              />
            </Link>

            <Link href={`/`}>
              <Image
                src={linkdln}
                alt="linkdln-icon"
                width={24}
                height={24}
                className={`w-[20px]`}
              />
            </Link>
          </section>
        </div>
      </div>

      <div className={`flex-1 flex items-center justify-center`}>
        <section className={` w-full lg:w-[80%] mx-auto rounded-md py-10 lg:px-10`}>
          <h2 className={`text-lg font-clash-display text-[#D434FE]`}>
            Questions or need assistance?
          </h2>
          <h2 className={`text-lg font-clash-display text-[#D434FE]`}>
            Let us know  about it!
          </h2> <br />

          <input
            type="text"
            placeholder="Full Name"
            className={`border rounded-md text-sm w-full py-3 px-6 outline-none border-white bg-transparent`}
          /> <br /> <br />

          <input
            type="email"
            placeholder="Mail"
            className={`border rounded-md text-sm w-full py-3 px-6 outline-none border-white bg-transparent`}
          /> <br /> <br />

          <textarea placeholder="Message" className={`border rounded-md text-sm w-full min-h-[7rem] max-h-[7rem] py-3 px-6 outline-none border-white bg-transparent`}></textarea>

          <div className={`w-[9rem] mx-auto mt-7`}>
            <div onClick={()=>{}}>
              <Button label='Submit'/>
                 </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default page