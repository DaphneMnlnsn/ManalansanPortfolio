import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//For the background, I can probably put the color of the bg inside the json, too.
const projects = [
  {
    title: "CaterXperience",
    subtitle: "CATERING OPERATIONS AND 2D VENUE LAYOUT PLANNING PLATFORM",
    desc: "Catering operations system with booking, dashboards, and 2D venue layout planning.",
    tech: "REACT | LARAVEL | MYSQL | KONVA.JS",
    image: "/cater.png",
  },
  {
    title: "Database Conflict Identifier",
    subtitle: "DATABASE COMPARISON TOOL",
    desc: "Web app for analyzing and comparing multiple databases.",
    tech: "REACT | LARAVEL | MYSQL | POSTGRESQL",
    image: "/dbci.png",
  },
  {
    title: "Ticksy",
    subtitle: "WORK TIME TRACKING TOOL",
    desc: "Time tracking system with productivity monitoring.",
    tech: "REACT | ASP.NET | SQL SERVER",
    image: "/ticksy.png",
  },
  {
    title: "CAMS",
    subtitle: "COURSE ATTENDANCE MONITORING SYSTEM",
    desc: "Attendance tracking system for courses and instructors.",
    tech: "REACT | PHP | MYSQL | JAVA",
    image: "/cams.png",
  },
  {
    title: "Laundry Management System",
    subtitle: "OPERATIONS AND ORDER MANAGEMENT",
    desc: "Laundry business system for tracking orders and services.",
    tech: "C# | .NET | SQL SERVER",
    image: "/laundry.png",
  },
  {
    title: "Dental Appointment System",
    subtitle: "CLINIC SCHEDULING SYSTEM",
    desc: "Appointment and patient record system for clinics.",
    tech: "C# | .NET | SQL SERVER",
    image: "/dental.png",
  },
];

export default function Works() {
  return (
    <div className="bg-[#0f1f2e] text-white min-h-screen">
      <Navbar />

      <section className="px-10 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Projects/ <br /> Works
          </h1>
        </div>
        <div className="text-gray-300 text-sm leading-relaxed">
          <p className="mb-4">
            Here are some of the projects I have worked on, including academic,
            personal, and experimental applications.
          </p>
          <p>
            Each project demonstrates different technologies and problem-solving
            approaches.
          </p>
        </div>
      </section>

      <section className="space-y-20 px-10 pb-20">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex justify-center">
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-2">— PROJECT</p>
              <h2 className="text-2xl font-bold mb-2">{proj.title}</h2>
              <p className="text-xs text-gray-400 mb-3">
                {proj.subtitle}
              </p>
              <p className="text-sm text-gray-300 mb-4">{proj.desc}</p>
              <p className="text-xs text-gray-400 mb-4">{proj.tech}</p>
              <button className="underline text-sm">View on GitHub →</button>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Curious?</h2>
          <p className="text-sm text-gray-400 mb-4">
            Find out more about me and what I can do.
          </p>
          <button className="underline">More About Me →</button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Interested in Working Together?
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Want to avail my services or send me anything work-related?
          </p>
          <button className="underline">Contact Me →</button>
        </div>
      </section>

      <Footer />
      
    </div>
  );
}
