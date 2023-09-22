import React from "react";
import Hero from "../app/components/hero/hero";
import Footer from "../app/components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import Rules from "./components/Guidelines/Rules";


function page() {
  return (
    <div className="bg-[#150E28] text-white">
      <Hero />
      <Introduction />
      <Rules />
      <Footer />
    </div>
  );
}

export default page;
