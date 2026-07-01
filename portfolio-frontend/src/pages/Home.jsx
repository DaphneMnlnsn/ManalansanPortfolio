import React from "react";
import HomeHero from "../sections/Home/HomeHero";
import FeaturedProjects from "../sections/Home/FeaturedProjects";
import HomeContact from "../sections/Home/HomeContact";
import HomeSkills from "../sections/Home/HomeSkills";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../sections/About/AboutHero";
import AboutSummary from "../sections/About/AboutSummary";
import AboutCoreSkills from "../sections/About/AboutCoreSkills";
import AboutOtherSkills from "../sections/About/AboutOtherSkills";
import AboutMoreInfo from "../sections/About/AboutMoreInfo";
import AboutCallToAction from "../sections/About/AboutCallToAction";
import ContactHero from "../sections/Contact/ContactHero";
import ContactDetails from "../sections/Contact/ContactDetails";
import ContactForm from "../sections/Contact/ContactForm";
import Works from "./Works";

export default function Home() {
  return (
    <div className="bg-[#0f1f2e] text-white min-h-screen font-sans">
      <Navbar />

      <HomeHero />
                  
      <AboutCoreSkills />
      
      <AboutOtherSkills />
      
      <AboutMoreInfo />
      
      <Works />

      <ContactHero />
      
      <ContactDetails />

      <ContactForm />

      <Footer />
      
    </div>
  );
}