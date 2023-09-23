"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../constant/Button";
import axios from "axios";
import instagram from "@/app/assets/icons/intagram.svg";
import x from "@/app/assets/icons/x.svg";
import facebook from "@/app/assets/icons/facebook.svg";
import linkdln from "@/app/assets/icons/linkdln.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const [first_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Validate inputs
    let isValid = true;

    if (!first_name) {
      setFullNameError("Please enter your full name");
      isValid = false;
    } else {
      setFullNameError("");
    }

    if (!email) {
      setEmailError("Please enter your email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isValid) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://backend.getlinked.ai/hackathon/contact-form', {
        first_name,
        email,
        message,
      });

      if (response.status === 200 || response.status === 201) {
        setEmail("");
        setFullName("");
        setMessage("");
        toast.success("An email has been sent!");
      } else {
        toast.error("An error occurred");
      }

      console.log(response, "res");

    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className={`flex items-center justify-between py-14 lg:px-36 px-4 relative`}
    >
      <div className={`w-[40%] lg:block hidden`}>
        <h1
          className={`text-[#D434FE] text-xl lg:text-3xl font-bold font-clash-display`}
        >
          Get in touch
        </h1>
        <br />

        <div className={`text-base`}>
          <p className={`lg:w-[10rem] w-full`}>Contact Information</p> <br />
          <p className={`lg:w-[10rem] w-full`}>
            27, Alara Street Yaba 100012 Lagos State
          </p>{" "}
          <br />
          <p>Call Us: 07067981819</p> <br />
          <p className={`lg:w-[17rem] w-full`}>
            We are open from Monday-Friday 08:00 am - 05:00 pm
          </p>{" "}
          <br />
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
        <section
          className={` w-full lg:w-[80%] mx-auto rounded-md py-10 lg:px-10`}
        >
          <h2 className={`text-lg font-clash-display text-[#D434FE]`}>
            Questions or need assistance?
          </h2>
          <h2 className={`text-lg font-clash-display text-[#D434FE]`}>
            Let us know about it!
          </h2>{" "}
          <br />
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="first_name"
              placeholder="Full Name"
              value={first_name}
              onChange={(e) => setFullName(e.target.value)}
              className={`border rounded-md text-sm w-full py-3 px-6 outline-none border-white bg-transparent`}
            />
            {fullNameError && <p className="text-red-500">{fullNameError}</p>}

            <input
              type="email"
              name="email"
              placeholder="Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border rounded-md text-sm w-full py-3 px-6 outline-none border-white bg-transparent`}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}

            <textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`border rounded-md text-sm w-full min-h-[7rem] max-h-[7rem] py-3 px-6 outline-none border-white bg-transparent`}
            ></textarea>

            <div className={`w-[9rem] mx-auto mt-7`}>
              <div onClick={handleSubmit}>
                <Button label={loading ? "Submitting..." : "Submit"} />
              </div>
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </section>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Page;
