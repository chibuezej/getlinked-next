// "use client"

// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import Button from "../constant/Button";
// import Guy from "@/app/assets/icons/guy.svg";
// import Lady from "@/app/assets/icons/lady.svg";
// import modal from "@/app/assets/images/modal.svg";

// function SignUpForm() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     team_name: "",
//     email: "",
//     phone_number: "",
//     project_topic: "",
//     group_size: "",
//     privacy_policy_accepted: false,
//     category: "",
//   });
//   if (isModalOpen) {
//     console.log("jcndcndnc ");
//   }

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/hackathon/registration",
//         formData
//       );

//       // Handle the response here if needed
//       console.log("API Response:", response.data);

//       // Show the modal upon successful form submission
//       setIsModalOpen(true);
//     } catch (error) {
//       // Handle errors here
//       console.error("Error:", error);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   console.log(formData, "formData");

//   return (
//     <div className="min-w-full min-h-full main_bg p-[4%] flex flex-col gap-8">
//       <form
//         className="w-full h-fit flex flex-col gap-10"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="font-clash-display text-[20px] max-w-[200px] md:w-full font-semibold text-strong-pink">
//           Register
//         </h2>
//         <div className="w-full flex lg:hidden justify-center items-center ">
//           {/* <Image src={RegisterImageMobile} alt="A man sitting on a seat" /> */}
//         </div>
//         <div>
//           <div className="flex items-end gap-2 relative">
//             <p className="font-montserrat text-xs lg:text-sm">
//               Be part of this movement!
//             </p>
//             <div className="w-[101px] h-[1px] border-b-1 border-dashed border-strong-pink"></div>
//             <div className="flex items-center absolute right-[20%] lg:right-[45%]">
//               <Image src={Lady} alt="A man sitting on a seat" />
//               <Image src={Guy} alt="A man sitting on a seat" />
//             </div>
//           </div>
//           <p className="font-montserrat text-xl lg:text-2xl">
//             CREATE YOUR ACCOUNT
//           </p>
//         </div>
//         <div className="flex flex-col gap-[15px] lg:gap-[29px]">
//           <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-between gap-[15px] lg:gap-0">
//             <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
//               <label htmlFor="teamName">Teams name:</label>
//               <input
//                 placeholder="Enter the name of your group"
//                 type="text"
//                 name=""
//                 id="teamName"
//                 required
//                 value={props.team_name}
//                 onChange={(e) => props.setTeamName(e.target.value)}
//                 className="h-[47px] p-[11px] w-full border-1 outline-none text-[#000] input lg:text-xs"
//               />
//               {props.team_name && <p className="text-red-500">{
                
//               }</p>}
//             </div>
//             <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
//               <label htmlFor="phone">Phone</label>
//               <input
//                 placeholder="Enter your phone number"
//                 required
//                 type="number"
//                 name=""
//                 id=""
//                 value={props.phone_number}
//                 onChange={(e) => props.setPhoneNumber(e.target.value)}
//                 className="h-[47px] p-[11px] w-full border-1 outline-none text-[#000] input lg:text-xs"
//               />
//               {props.phoneError && <p className="text-red-500">{props.phoneError}</p>}
//             </div>
//           </div>
//           <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-between gap-[15px] lg:gap-0">
//             <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
//               <label htmlFor="teamName">Email</label>
//               <input
//                 placeholder="Enter your email address"
//                 type="email"
//                 required
//                 name=""
//                 id=""
//                 value={props.email}
//                 onChange={(e) => props.setEmail(e.target.value)}
//                 className="h-[47px] p-[11px] w-full border-1 text-[#000] lg:text-xs"
//               />
//               {props.emailError && <p className="text-red-500">{props.emailError}</p>}
//             </div>
//             <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
//               <label htmlFor="phone">Project Topic</label>
//               <input
//                 placeholder="What is your group project topic"
//                 type="number"
//                 name=""
//                 id=""
//                 value={props.project_topic}
//                 onChange={(e) => props.setProjectTopic(e.target.value)}
//                 required
//                 className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
//               />
//               {props.projectTopicError && (
//                 <p className="text-red-500">{props.projectTopicError}</p>
//               )}
//             </div>
//           </div>
//           <div className="w-full h-fit flex flex-row items-center justify-between">
//             <div className="w-[64%] lg:w-[47%] flex flex-col gap-[11px]">
//               <label htmlFor="teamName">Category</label>
//               <select
//                 name="category"
//                 id="category"
//                 value={props.category}
//                 onChange={(e) => props.setCategory(e.target.value)}
//                 className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
//                 required
//               >
//                 {props.categoryError && (
//                   <p className="text-red-500">{props.categoryError}</p>
//                 )}
//                 <option value="">Select your category</option>
//                 <option value="frontend" className="text-strong-pink">
//                   Frontend
//                 </option>
//                 <option value="backend" className="text-strong-pink">
//                   Backend
//                 </option>
//                 <option value="ui/ux" className="text-strong-pink">
//                   UI/UX
//                 </option>
//                 <option value="devOps" className="text-strong-pink">
//                   DevOps
//                 </option>
//                 <option value="cybersecurity" className="text-strong-pink">
//                   Cybersecurity
//                 </option>
//               </select>
//             </div>
//             <div className="w-[28%] lg:w-[47%] flex flex-col gap-[11px]">
//               <label htmlFor="phone">Group Size</label>
//               <select
//                 name="groupSize"
//                 id="groupSize"
//                 className="h-[47px] p-[11px] w-full border-1 text-[#000] outline-none input lg:text-xs"
//                 required
//                 value={props.group_size}
//                 onChange={(e) => props.setGroupSize(e.target.value)}
//               >
//                 {props.groupSizeError && (
//                   <p className="text-red-500">{props.groupSizeError}</p>
//                 )}
//                 <option value="">select</option>
//                 <option value="1-5" className="text-strong-pink">
//                   1-5
//                 </option>
//                 <option value="1-10" className="text-strong-pink">
//                   1-10
//                 </option>
//                 <option value="1-20" className="text-strong-pink">
//                   1-20
//                 </option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-fit flex flex-col gap-4">
//           <p className="text-xs text-strong-pink italic">
//             Please review your registration details before submitting
//           </p>
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               name=""
//               id=""
//               className="bg-transparent h-[14px] cursor-pointer"
//               required
//               checked={privacy_policy_accepted}
//               onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
//             />
//             {privacyPolicyAcceptedError && (
//               <p className="text-red-500">{privacyPolicyAcceptedError}</p>
//             )}
//             <p className="text-[10px] lg:text-xs">
//               I agreed with the event terms and conditions and privacy policy
//             </p>
//           </div>
//         </div>
//         <div className="w-full hidden lg:flex justify-center items-center">
//           <button onClick={() => setIsModalOpen(true)} className="py-2 px-8 text-[16px] rounded-sm cursor-pointer bg-button-gradient">Submit</button>
//         </div>
//         <div className="w-full flex lg:hidden justify-center items-center">
//           <button onClick={() => setIsModalOpen(true)} className="py-2 px-8 text-[16px] rounded-sm cursor-pointer bg-button-gradient">submit</button>
//         </div>
//       </form>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="flex flex-col items-center justify-center w-[80%] max-w-lg p-4 rounded-lg shadow-lg  bg-[#150E28]">
//             <Image src={modal} alt="modal" />
//             <h2 className="text-2xl font-bold mb-4">
             
//             </h2>
//             <h2 className="text-2xl font-bold mb-4">
//             Congratulations
//             </h2>
//             <p>
//               Yes, it was easy and you did it! check your mail box for next step
//             </p>
//             <div className="mt-4 flex justify-center">
//               <button onClick={closeModal} className="py-2 px-28 text-[16px] w-full rounded-sm cursor-pointer bg-button-gradient">Back</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SignUpForm;
