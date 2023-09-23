import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "next/image";
import Button from "../constant/Button";
import Guy from "@/app/assets/icons/guy.svg";
import Lady from "@/app/assets/icons/lady.svg";

function SignUpForm () {
  return (
    <div className="min-w-full min-h-full main_bg p-[4%] flex flex-col gap-8">
      <form className="w-full h-fit flex flex-col gap-10">
        <h2 className="font-clash-display text-[20px] max-w-[200px] md:w-full font-semibold text-strong-pink">
          Register
        </h2>
        <div className="w-full flex lg:hidden justify-center items-center ">
          {/* <Image src={RegisterImageMobile} alt="A man sitting on a seat" /> */}
        </div>
        <div>
          <div className="flex items-end gap-2 relative">
            <p className="font-montserrat text-xs lg:text-sm">
              Be part of this movement!
            </p>
            <div className="w-[101px] h-[1px] border-b-1 border-dashed border-strong-pink"></div>
            <div className="flex items-center absolute right-[20%] lg:right-[45%]">
              <Image src={Lady} alt="A man sitting on a seat" />
              <Image src={Guy} alt="A man sitting on a seat" />
            </div>
          </div>
          <p className="font-montserrat text-xl lg:text-2xl">
            CREATE YOUR ACCOUNT
          </p>
        </div>
        <div className="flex flex-col gap-[15px] lg:gap-[29px]">
          <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-between gap-[15px] lg:gap-0">
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="teamName">Team&apos;s name</label>
              <input
                placeholder="Enter the name of your group"
                type="text"
                name=""
                id=""
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              />
            </div>
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="phone">Phone</label>
              <input
                placeholder="Enter your phone number"
                type="number"
                name=""
                id=""
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-between gap-[15px] lg:gap-0">
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="teamName">Email</label>
              <input
                placeholder="Enter your email address"
                type="email"
                name=""
                id=""
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              />
            </div>
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="phone">Project Topic</label>
              <input
                placeholder="What is your group project topic"
                type="number"
                name=""
                id=""
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              />
            </div>
          </div>
          <div className="w-full h-fit flex flex-row items-center justify-between">
            <div className="w-[64%] lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="teamName">Category</label>
              <select
                name="category"
                id="category"
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              >
                <option value="">Select your category</option>
                <option value="frontend" className="text-strong-pink">
                  Frontend
                </option>
                <option value="backend" className="text-strong-pink">
                  Backend
                </option>
                <option value="ui/ux" className="text-strong-pink">
                  UI/UX
                </option>
                <option value="devOps" className="text-strong-pink">
                  DevOps
                </option>
                <option value="cybersecurity" className="text-strong-pink">
                  Cybersecurity
                </option>
              </select>
            </div>
            <div className="w-[28%] lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="phone">Group Size</label>
              <select
                name="groupSize"
                id="groupSize"
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              >
                <option value="">select</option>
                <option value="1-5" className="text-strong-pink">
                  1-5
                </option>
                <option value="1-10" className="text-strong-pink">
                  1-10
                </option>
                <option value="1-20" className="text-strong-pink">
                  1-20
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-4">
          <p className="text-xs text-strong-pink italic">
            Please review your registration details before submitting
          </p>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="bg-transparent h-[14px] cursor-pointer"
            />
            <p className="text-[10px] lg:text-xs">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center items-center">
          <Button label="Register Now" onSubmit={() => {}} width="w-full" />
        </div>
        <div className="w-full flex lg:hidden justify-center items-center">
          <Button label="Submit" onSubmit={() => {}}
          width="w-[372px]"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
