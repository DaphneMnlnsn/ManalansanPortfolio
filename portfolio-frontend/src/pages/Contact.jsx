import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../sections/Contact/ContactHero";
import ContactDetails from "../sections/Contact/ContactDetails";
import ContactForm from "../sections/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="bg-[#0f1f2e] text-white min-h-screen">
      <Navbar />

      <ContactHero />

      <ContactDetails />

      <ContactForm />

      <Footer />
      
    </div>
  );
}