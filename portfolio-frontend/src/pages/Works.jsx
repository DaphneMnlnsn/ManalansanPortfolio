import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    header: "CAPSTONE PROJECT",
    title: "CaterXperience",
    bg: "bg-[#0b1722]",
    subtitle: "CATERING OPERATIONS AND 2D VENUE LAYOUT PLANNING PLATFORM",
    desc: `
CaterXperience is a full-stack catering management system designed to streamline event
booking, operational workflows, and venue layout planning for catering businesses.
            
The platform provides role-based dashboards for staff, booking management tools, and an
interactive drag-and-drop venue layout editor that allows event planners to visualize
seating arrangements and stage setups before the event.`,
    tech: "REACT | LARAVEL | MYSQL | KONVA.JS",
    image: "/cater.png",
    features: `
• Role-based dashboards for different staff members
• Event booking and client management system
• Staff task assignment and workflow tracking
• Inventory and catering package management
• Interactive 2D venue layout planner with drag-and-drop elements`
  },
  {
    header: "INTERNSHIP INTERNAL PROJECT",
    title: "Database Conflict Identifier",
    bg: "bg-[#0f1f2e]",
    subtitle: "DATABASE COMPARISON AND CONFLICT DETECTION TOOL",
    desc: `
DCI is a web application designed to analyze and compare two database sources to
identify conflicts, inconsistencies, and mismatched records. The tool helps organizations
maintain accurate datasets by highlighting conflicting entries and providing options to
resolve them.

The system simplifies database auditing by presenting comparison results through an
organized interface that allows users to review differences and manage ignored records.`,
    tech: "REACT | LARAVEL | MYSQL | POSTGRESQL",
    image: "/dbci.png",
    features: `
• Database comparison between multiple data sources
• Automated detection of conflicting records
• Filtering and reviewing detected conflicts
• Ignore and restore conflict management system
• Interactive table interface for reviewing differences`
  },
  {
    header: "INTERNSHIP INTERNAL PROJECT",
    title: "Ticksy",
    bg: "bg-[#0b1722]",
    subtitle: "WORK TIME TRACKING AND PRODUCTIVITY TOOL",
    desc: `
Ticksy is a web-based time tracking system designed to help teams and individuals
monitor their work hours, manage schedules, and improve productivity. The system
allows employees to record working sessions while giving administrators tools to
manage schedules and review time logs.

The platform focuses on simple and efficient time tracking with clear reporting
features that help organizations monitor employee productivity and attendance.`,
    tech: "REACT | ASP.NET | POSTGRESQL",
    image: "/ticksy.png",
    features: `
• Time tracking and work session logging
• Employee work schedule management
• Administrative dashboard for monitoring logs
• Productivity and time report generation
• Secure authentication and role-based access`
  },
  {
    header: "COLLEGE SEMESTRAL PROJECT",
    title: "CAMS",
    bg: "bg-[#0f1f2e]",
    subtitle: "COURSE ATTENDANCE MONITORING SYSTEM",
    desc: `
CAMS is a web-based and mobile-integrated academic management system designed
to help instructors efficiently track and manage student attendance across courses and
sections. The system organizes attendance records through course assignments that
link instructors, courses, sections, rooms, and schedules in a centralized platform.

The system replaces manual attendance tracking with a digital solution that allows
instructors to record attendance per class session and review organized attendance
records for better monitoring and management.`,
    tech: "REACT | PHP | MYSQL | JAVA | VOLLEY",
    image: "/cams.png",
    features: `
• Session-based digital attendance recording for scheduled classes
• Course assignment management linking instructors, courses, sections, rooms, and schedules
• Instructor dashboard for managing attendance and class sessions
• Student dashboard displaying upcoming classes, schedule, and recent attendance
• Centralized database structure for courses, sections, and attendance records`
  },
  {
    header: "COLLEGE SEMESTRAL PROJECT",
    title: "Laundry Management System",
    bg: "bg-[#0b1722]",
    subtitle: "OPERATIONS AND ORDER MANAGEMENT PLATFORM FOR WASHABLES",
    desc: `
The Laundry Management System (LMS) is a web-based application designed to
modernize the operations of Washables Laundry Services by replacing manual
logbooks with a centralized digital platform.

The system allows staff to record customer orders, monitor laundry schedules, track
cleaning supplies, and generate billing records. By automating these tasks, the
platform helps the business handle higher order volumes while maintaining organized
records and faster service.`,
    tech: "C# | .NET | SQL SERVER",
    image: "/laundry.png",
    features: `
• Order management and customer record tracking
• Machine scheduling for laundry loads
• Inventory tracking for cleaning supplies
• Billing with digital receipts and payment tracking (Cash and GCash)
• User management for staff and administrators`
  },
  {
    header: "COLLEGE SEMESTRAL PROJECT",
    title: "Dental Appointment System",
    bg: "bg-[#0f1f2e]",
    subtitle: "CLINIC SCHEDULING AND PATIENT RECORDS MANAGEMENT SYSTEM",
    desc: `
The Dental Appointment and Information System is a desktop application designed to
improve dental clinic operations by digitizing appointment scheduling and patient
record management. It replaces traditional paper-based records with a centralized
platform that allows clinic staff to manage appointments, patient information, and
services more efficiently.

The system enables staff to schedule appointments, maintain organized patient
records, and manage clinic services from a single interface, helping reduce scheduling
errors, prevent record misplacement, and improve overall clinic workflow.`,
    tech: "C# | .NET | SQL SERVER",
    image: "/dental.png",
    features: `
• Secure staff authentication and login system
• Appointment scheduling with calendar-based viewing
• Patient registration and medical record management
• Staff account management for clinic personnel
• Service registration and pricing management
• Centralized database for clinic records and appointments`
  },
];

export default function Works() {
  return (
    <div className="bg-[#0f1f2e] text-white min-h-screen">
      <Navbar />

      <section className="px-10 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-5xl font-heading font-bold leading-tight mb-4">
              Projects/<br />Works
          </h1>
          <div className="flex space-x-4 mt-6 text-xl pl-1">
              <a href="mailto:daphnemanalansan1213@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              </a>
              <a href="https://github.com/DaphneMnlnsn"
                  target="_blank"
                  rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/daphne-manalansan"
                  target="_blank"
                  rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </a>
          </div>
        </div>
        <div className="text-gray-300 text-sm leading-relaxed">
          <p className="mb-4">
            Here are some of the projects I have worked on,<br/>including academic,<br/>
            personal, and experimental applications.
          </p>
          <p>
            Each project demonstrates different<br/>technologies and problem-solving
            approaches.
          </p>
        </div>
      </section>

      <section>
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className={`${proj.bg} py-20 px-10`}
          >
            <div
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="flex justify-center">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>

              <div>
                <p className="font-heading font-semibold text-xs text-gray-400 mb-2">— {proj.header}</p>
                <h2 className="text-2xl font-heading font-bold mb-2">{proj.title}</h2>
                <p className="font-heading font-semibold text-xs text-gray-400 mb-3">
                  {proj.subtitle}
                </p>
                <p className="font-body font-medium text-xs text-gray-300 mb-4 whitespace-pre-wrap">{proj.desc}</p>
                <p className="font-heading font-semibold text-xs text-gray-400 mb-2">— TECH STACK</p>
                <p className="font-heading font-extrabold text-xs mb-2">{proj.tech}</p>
                <p className="font-heading font-semibold text-xs text-gray-400 mb-2">— KEY FEATURES</p>
                <p className="font-body font-medium text-xs text-gray-300 mb-4 whitespace-pre-wrap">{proj.features}</p>
                <button className="font-heading font-semibold underline text-sm">
                  View on GitHub →
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-heading font-bold mb-2">Curious?</h2>
          <p className="text-sm font-body font-medium text-gray-400 mb-4">
            Find out more about me and what I can do.
          </p>
          <button className="font-heading font-semibold underline">More About Me →</button>
        </div>

        <div>
          <h2 className="text-2xl font-heading font-bold mb-2">
            Interested in Working Together?
          </h2>
          <p className="text-sm font-body font-medium text-gray-400 mb-4">
            Want to avail my services or send me anything work-related?
          </p>
          <button className="font-heading font-semibold underline">Contact Me →</button>
        </div>
      </section>

      <Footer />
      
    </div>
  );
}
