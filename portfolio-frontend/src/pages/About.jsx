import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../sections/About/AboutHero";
import AboutSummary from "../sections/About/AboutSummary";
import AboutCoreSkills from "../sections/About/AboutCoreSkills";
import AboutOtherSkills from "../sections/About/AboutOtherSkills";
import AboutMoreInfo from "../sections/About/AboutMoreInfo";
import AboutCallToAction from "../sections/About/AboutCallToAction";

export default function About() {
  return (
    <div className="bg-[#0f1f2e] text-white min-h-screen">
      <Navbar />

      <AboutHero />
      
      <AboutSummary />
      
      <AboutCoreSkills />
      
      <AboutOtherSkills />
      
      <AboutMoreInfo />
      
      <AboutCallToAction />

      <Footer />

    </div>
  );
}