import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import Button from "../constant/Button";
import Guy from "@/app/assets/icons/guy.svg";
import Lady from "@/app/assets/icons/lady.svg";

interface SignUpProps {
  handleSubmit: {
    (event: React.FormEvent): void;
  };
  error: string;
  fullNameError: string; 
  emailError: string;
  phoneError: string;
  projectTopicError: string;
  groupSizeError: string;
  categoryError: string;
  privacyPolicyAcceptedError: string;
  loading: boolean;
  team_name: string;
  email: string;
  phone_number: string;
  project_topic: string;
  group_size: string;
  privacy_policy_accepted: boolean;
  category: string;
  setTeamName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setProjectTopic: (value: string) => void;
  setGroupSize: (value: string) => void;
  setPrivacyPolicyAccepted: (value: boolean) => void;
  setCategory: (value: string) => void;
  team_nameError: string;
  setTeamNameError: (value: string) => void;

  
  }



function SignUpForm(props: SignUpProps) {
  // const [email, setEmail] = useState("");
  // const [team_name, setTeamName] = useState("");
  // const [phone_number, setPhoneNumber] = useState("");
  // const [project_topic, setProjectTopic] = useState("");
  // const [group_size, setGroupSize] = useState("");
  // const [privacy_policy_accepted, setPrivacyPolicyAccepted] = useState(false);
  // const [category, setCategory] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [fullNameError, setFullNameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [phoneError, setPhoneError] = useState("");
  // const [projectTopicError, setProjectTopicError] = useState("");
  // const [groupSizeError, setGroupSizeError] = useState("");
  // const [categoryError, setCategoryError] = useState("");
  // const [privacyPolicyAcceptedError, setPrivacyPolicyAcceptedError] =
  //   useState("");

  // async function handleSubmit(event: React.FormEvent) {
  //   event.preventDefault();

  //   // Validate inputs
  //   let isValid = true;

  //   if (!team_name) {
  //     setFullNameError("Please enter your full name");
  //     isValid = false;
  //   } else {
  //     setFullNameError("");
  //   }

  //   if (!email) {
  //     setEmailError("Please enter your email");
  //     isValid = false;
  //   } else {
  //     setEmailError("");
  //   }

  //   if (!phone_number) {
  //     setPhoneError("Please enter your phone");
  //     isValid = false;
  //   } else {
  //     setPhoneError("");
  //   }

  //   if (!project_topic) {
  //     setProjectTopicError("Please enter your project topic");
  //     isValid = false;
  //   } else {
  //     setProjectTopicError("");
  //   }

  //   if (!group_size) {
  //     setGroupSizeError("Please enter your group size");
  //     isValid = false;
  //   } else {
  //     setGroupSizeError("");
  //   }

  //   if (!category) {
  //     setCategoryError("Please enter your category");
  //     isValid = false;
  //   } else {
  //     setCategoryError("");
  //   }

  //   if (!privacy_policy_accepted) {
  //     setPrivacyPolicyAcceptedError("Please accept our privacy policy");
  //     isValid = false;
  //   } else {
  //     setPrivacyPolicyAcceptedError("");
  //   }

  //   if (!isValid) {
  //     return;
  //   }

  //   setLoading(true);

  //   const apiEndPoint: string | undefined =
  //     process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT || "";
  //   try {
  //     const response = await axios.post(apiEndPoint, {
  //       team_name,
  //       email,
  //       phone_number,
  //       project_topic,
  //       group_size,
  //       category,
  //       privacy_policy_accepted,
  //     });

  //     if (response.status === 200 || response.status === 201) {
  //       setEmail("");
  //       setCategory("");
  //       setGroupSize("");
  //       setPhoneNumber("");
  //       setProjectTopic("");
  //       setTeamName("");
  //       setPrivacyPolicyAccepted(false);

  //       toast.success("An email has been sent!");
  //     } else {
  //       toast.error("An error occurred");
  //     }

  //     console.log(response, "res");

  //     // Handle successful response here, e.g., show a success message or redirect
  //   } catch (error) {
  //     toast.error("An error occurred. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // const han

  return (
    <div className="min-w-full min-h-full main_bg p-[4%] flex flex-col gap-8">
      <form
        className="w-full h-fit flex flex-col gap-10"
        onSubmit={props.handleSubmit}
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
                id="teamName"
                required
                value={props.team_name}
                onChange={(e) => props.setTeamName(e.target.value)}
                className="h-[47px] p-[11px] w-full border-1 outline-none text-[#000] input lg:text-xs"
              />
              {props.team_name && <p className="text-red-500">{
                
              }</p>}
            </div>
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="phone">Phone</label>
              <input
                placeholder="Enter your phone number"
                required
                type="number"
                name=""
                id=""
                value={props.phone_number}
                onChange={(e) => props.setPhoneNumber(e.target.value)}
                className="h-[47px] p-[11px] w-full border-1 outline-none text-[#000] input lg:text-xs"
              />
              {props.phoneError && <p className="text-red-500">{props.phoneError}</p>}
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
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
                className="h-[47px] p-[11px] w-full border-1 text-[#000] lg:text-xs"
              />
              {props.emailError && <p className="text-red-500">{props.emailError}</p>}
            </div>
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="phone">Project Topic</label>
              <input
                placeholder="What is your group project topic"
                type="number"
                name=""
                id=""
                value={props.project_topic}
                onChange={(e) => props.setProjectTopic(e.target.value)}
                required
                className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
              />
              {props.projectTopicError && (
                <p className="text-red-500">{props.projectTopicError}</p>
              )}
            </div>
          </div>
          <div className="w-full h-fit flex flex-row items-center justify-between">
            <div className="w-[64%] lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="teamName">Category</label>
              <select
                name="category"
                id="category"
                value={props.category}
                onChange={(e) => props.setCategory(e.target.value)}
                className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
                required
              >
                {props.categoryError && (
                  <p className="text-red-500">{props.categoryError}</p>
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
                id="groupSize"
                className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
                required
                value={props.group_size}
                onChange={(e) => props.setGroupSize(e.target.value)}
              >
                {props.groupSizeError && (
                  <p className="text-red-500">{props.groupSizeError}</p>
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
              id=""
              className="bg-transparent h-[14px] cursor-pointer"
              required
              checked={props.privacy_policy_accepted}
              onChange={(e) => props.setPrivacyPolicyAccepted(e.target.checked)}
            />
            {props.privacyPolicyAcceptedError && (
              <p className="text-red-500">{props.privacyPolicyAcceptedError}</p>
            )}
            <p className="text-[10px] lg:text-xs">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center items-center">
          <Button label="Register Now" onSubmit={() => {}} width="w-full" />
        </div>
        <div
          onClick={props.handleSubmit}
          className="w-full flex lg:hidden justify-center items-center"
        >
          <Button
            label={props.loading ? "Submitting..." : "Register Now"}
            width="w-[372px]"
            onSubmit={() => {}}
          />
        </div>
      </form>
      {props.error && <p className="text-red-500">{props.error}</p>}
      <ToastContainer />
    </div>
  );
}

export default SignUpForm;
