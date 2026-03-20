import React from "react";
import HomeHero from "../sections/Home/HomeHero";
import FeaturedProjects from "../sections/Home/FeaturedProjects";
import HomeContact from "../sections/Home/HomeContact";
import HomeSkills from "../sections/Home/HomeSkills";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0f1f2e] text-white min-h-screen font-sans">
      <Navbar />

      <HomeHero />

      <HomeContact />

      <FeaturedProjects />

      <HomeSkills />

      <Footer />
      
    </div>
  );
}