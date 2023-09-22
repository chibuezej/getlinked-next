import React from "react";
import Hero from "./components/hero/hero";
import Footer from "../app/components/footer/Footer";
import Privacy from "./components/Privacy";

function page() {
  return (
    <div className="border-b-[#FFFFFF2E]">
      <Hero />

      <Privacy />
      <Footer />
    </div>
  );
}

export default page;
