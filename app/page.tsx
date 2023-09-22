import React from "react";
import Hero from "./components/hero/hero";
import Footer from "../app/components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import Rules from "./components/Guidelines/Rules";
import Privacy from "./components/Privacy";
import BorderBottom from "./components/atom/BorderBottom";
import Partners from "./components/Partners";
import Price from "./components/Price";


function page() {
  return (
    <div className="bg-[#150E28] text-white">
      <Hero />
      <Introduction />
      <Rules />
      <Price />
      <Partners />
      <BorderBottom />
      <Privacy />
      <Footer />
    </div>
  );
}

export default page;