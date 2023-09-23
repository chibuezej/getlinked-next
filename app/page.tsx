import React from "react";
import Hero from "./components/hero/hero";
import Footer from "../app/components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import Rules from "./components/Guidelines/Rules";
import Privacy from "./components/Privacy";
import BorderBottom from "./components/atom/BorderBottom";
import Judgement from "./components/judgement/Judgement";
import Partners from "./components/Partners";
import Price from "./components/Price";
import FrequentlyAsked from "./components/frequentlyAsked/FrequentlyAsked";
import Timeline from "./components/Timeline";


function page() {
  return (
    <div className="bg-[#150E28] text-white">
      <Hero />
      <Introduction />
      <Rules />
      <Judgement />
      <FrequentlyAsked />
      <Timeline />
      <Price />
      <Partners />
      <BorderBottom />
      <Privacy />
      <Footer />
    </div>
  );
}

export default page;