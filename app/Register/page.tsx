"use client";

import React, { useState } from "react";
import RegisterImage from "@/app/assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import ColoredStar from "@/app/assets/icons/coloredStar.svg";
import Star from "@/app/assets/icons/star.svg";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Guy from "@/app/assets/icons/guy.svg";
import Lady from "@/app/assets/icons/lady.svg";
import modal from "@/app/assets/images/modal.svg";
import Button from "../constant/Button";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [team_name, setTeamName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [project_topic, setProjectTopic] = useState("");
  const [group_size, setGroupSize] = useState(1); // Default to 1-5
  const [privacy_poclicy_accepted, setPrivacyPolicyAccepted] = useState(false);
  const [category, setCategory] = useState(""); // Initialize as an empty string
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [team_nameError, setTeam_nameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [projectTopicError, setProjectTopicError] = useState("");
  const [groupSizeError, setGroupSizeError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [privacyPolicyAcceptedError, setPrivacyPolicyAcceptedError] = useState("");

    const [formData, setFormData] = useState({
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    group_size: "",
    privacy_poclicy_accepted: false,
    category: "",
  });
  if (isModalOpen) {
    console.log("success");
  }

  const categoryOptions = {
    frontend: "Frontend",
    backend: "Backend",
    "ui/ux": "UI/UX",
    devOps: "DevOps",
    cybersecurity: "Cybersecurity",
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Form submitted");

    // Validate inputs
    let isValid = true;

    if (!team_name) {
      setTeam_nameError("Please enter your full name");
      isValid = false;
    } else {
      setTeam_nameError("");
    }

    if (!email) {
      setEmailError("Please enter your email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phone_number) {
      setPhoneError("Please enter your phone");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!project_topic) {
      setProjectTopicError("Please enter your project topic");
      isValid = false;
    } else {
      setProjectTopicError("");
    }

    if (!group_size) {
      setGroupSizeError("Please select your group size");
      isValid = false;
    } else {
      setGroupSizeError("");
    }

    if (!category) {
      setCategoryError("Please select your category");
      isValid = false;
    } else {
      setCategoryError("");
    }

    if (!privacy_poclicy_accepted) {
      setPrivacyPolicyAcceptedError("Please accept our privacy policy");
      isValid = false;
    } else {
      setPrivacyPolicyAcceptedError("");
    }

    if (!isValid) {
      return;
    }

    setLoading(true);

    const apiEndPoint = "https://backend.getlinked.ai/hackathon/registration";
    try {
      const response = await axios.post(apiEndPoint, {
        team_name,
        email,
        phone_number,
        project_topic,
        group_size,
        category,
        privacy_poclicy_accepted,
      }
      );

      if (response.status === 200 || response.status === 201) {
        setEmail("");
        setCategory("");
        setGroupSize(1); // Reset to default value (1-5)
        setPhoneNumber("");
        setProjectTopic("");
        setTeamName("");
        setPrivacyPolicyAccepted(false);

        toast.success("An email has been sent!");
      } else {
        toast.error("An error occurred");
      }

      console.log(response, "res");

      // Handle successful response here, e.g., show a success message or redirect
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full main_bg relative p-[8%] overflow-clip">
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <Image
          src={ColoredStar}
          alt="Star"
          className="absolute w-[20px] object-contain left-[9%] top-[27%]"
        />
        <Image
          src={Star}
          alt="Star"
          className="absolute w-[20px] object-contain left-[59%] top-[32%]"
        />
        <Image
          src={Star}
          alt="Star"
          className="absolute w-[20px] object-contain left-[35%] top-[87%]"
        />
        <Image
          src={Star}
          alt="purple flare"
          className="absolute z-10 opacity-40 object-contain top-[0%] right-[-550px]"
        />
        <Image
          src={Star}
          alt="purple flare"
          className="absolute z-10 opacity-40 object-contain top-0 lg:top-[-20%] left-[-50px] lg:left-[-200px]"
        />
      </div>
      <div className="w-full h-full relative z-20 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[50%] h-full hidden lg:flex flex-col gap-[17px]">
          <Image src={RegisterImage} alt="A man sitting on a seat" />
        </div>
        <div className="w-full lg:w-[50%] h-full">
          <form
            className="w-full h-fit flex flex-col gap-10"
            onSubmit={handleSubmit}
          >
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
                  <label htmlFor="teamName">Teams name:</label>
                  <input
                    placeholder="Enter the name of your group"
                    type="text"
                    name=""
                    required
                    value={team_name}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="h-[47px] p-[11px] w-full border-1 outline-none text-[#000] input lg:text-xs"
                  />
                  {team_nameError && (
                    <p className="text-red-500">{team_nameError}</p>
                  )}
                </div>
                <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
                  <label htmlFor="phone">Phone</label>
                  <input
                    placeholder="Enter your phone number"
                    required
                    type="number"
                    name=""
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-[47px] p-[11px] w-full border-1 outline-none text-[#000] input lg:text-xs"
                  />
                  {phoneError && <p className="text-red-500">{phoneError}</p>}
                </div>
              </div>
              <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-between gap-[15px] lg:gap-0">
                <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
                  <label htmlFor="teamName">Email</label>
                  <input
                    placeholder="Enter your email address"
                    type="email"
                    required
                    name=""
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[47px] p-[11px] w-full border-1 text-[#000] lg:text-xs"
                  />
                  {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
                  <label htmlFor="phone">Project Topic</label>
                  <input
                    placeholder="What is your group project topic"
                    type="text"
                    name=""
                    id=""
                    value={project_topic}
                    onChange={(e) => setProjectTopic(e.target.value)}
                    required
                    className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
                  />
                  {projectTopicError && (
                    <p className="text-red-500">{projectTopicError}</p>
                  )}
                </div>
              </div>
              <div className="w-full h-fit flex flex-row items-center justify-between">
                <div className="w-[64%] lg:w-[47%] flex flex-col gap-[11px]">
                  <label htmlFor="teamName">Category</label>
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
                    required
                  >
                    {categoryError && (
                      <p className="text-red-500">{categoryError}</p>
                    )}
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
                    // id="groupSize"
                    className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
                    required
                    value={group_size}
                    onChange={(e) => setGroupSize(parseInt(e.target.value))}

                  >
                    {groupSizeError && (
                      <p className="text-red-500">{groupSizeError}</p>
                    )}
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
                  id="privacy_poclicy_accepted"
                  className="bg-transparent h-[14px] cursor-pointer"
                  required
                  checked={privacy_poclicy_accepted}
                  onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
                />
                {privacyPolicyAcceptedError && (
                  <p className="text-red-500">{privacyPolicyAcceptedError}</p>
                )}
                <p className="text-[10px] lg:text-xs">
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
            </div>
            <div
              onClick={handleSubmit}
              className="w-full hidden lg:flex justify-center items-center"
            >
              <Button
                label={loading ? "Submitting..." : "Register Now"}
                width="w-full"
                type="submit"
              />
            </div>
            <div
              onClick={handleSubmit}
              className="w-full flex lg:hidden justify-center items-center"
            >
              <Button
                label={loading ? "Submitting..." : "Register Now"}
                width="w-[372px]"
                type="submit"
              />
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="flex flex-col items-center justify-center w-[80%] max-w-lg p-4 rounded-lg shadow-lg  bg-[#150E28]">
            <Image src={modal} alt="modal" />
            <h2 className="text-2xl font-bold mb-4">
             
            </h2>
            <h2 className="text-2xl font-bold mb-4">
            Congratulations
            </h2>
            <p>
              Yes, it was easy and you did it! check your mail box for next step
            </p>
            <div className="mt-4 flex justify-center">
              <button onClick={closeModal} className="py-2 px-28 text-[16px] w-full rounded-sm cursor-pointer bg-button-gradient">Back</button>
            </div>
          </div>
        </div>
      )}
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
}

export default Page;

