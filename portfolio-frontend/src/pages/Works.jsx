import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { faArrowCircleLeft, faArrowCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SlickSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Slider = SlickSlider.default || SlickSlider;

const Pill = ({ width, margin }) => (
    <div className={`${width} h-1 bg-[#324A5F] ${margin} rounded-full`} />
);

const projects = [
  {
    header: "CAPSTONE PROJECT",
    title: "CaterXperience",
    bg: "bg-[#0b1722]",
    cardBg: "bg-[#0f1f2e]",
    subtitle: "CATERING OPERATIONS AND 2D VENUE LAYOUT PLANNING PLATFORM",
    projectScreenshots: [
        { img: "src/assets/cater_ui/landing.jpg", title: "CaterXperience", subtitle: "CAPSTONE PROJECT", tech: "REACT | LARAVEL | MYSQL", desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs." },
        { img: "src/assets/cater_ui/dashboard.jpg", tech: "DASHBOARD", desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management." },
        { img: "src/assets/cater_ui/bookings.jpg", tech: "BOOKINGS", desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly." },
        { img: "src/assets/cater_ui/event.jpg", tech: "EVENT DETAILS", desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans." },
        { img: "src/assets/cater_ui/menu.jpg", tech: "MENU", desc: "The menu section lets users view and manage food options, including their categorie and pictures." },
        { img: "src/assets/cater_ui/packages.jpg", tech: "PACKAGES", desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons." },
        { img: "src/assets/cater_ui/client.jpg", tech: "CLIENT MANAGEMENT", desc: "The client management interface keeps track of customer profiles, contact information, and booking history." },
        { img: "src/assets/cater_ui/staff.jpg", tech: "STAFFF MANAGEMENT", desc: "This page shows the staff roster, their roles, and schedules, making team management more organized." },
        { img: "src/assets/cater_ui/layout.jpg", tech: "2D VENUE LAYOUT", desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually." },
        { img: "src/assets/cater_ui/audit.jpg", tech: "AUDIT LOG", desc: "The audit log records system activity and changes, helping maintain accountability and track actions." },
    ],
    desc: `
CaterXperience is a full-stack catering management system designed to streamline event
booking, operational workflows, and venue layout planning for catering businesses.
            
The platform provides role-based dashboards for staff, booking management tools, and an
interactive drag-and-drop venue layout editor that allows event planners to visualize
seating arrangements and stage setups before the event.`,
    tech: "REACT | LARAVEL | MYSQL | KONVA.JS",
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
    cardBg: "bg-[#0b1722]",
    subtitle: "DATABASE COMPARISON AND CONFLICT DETECTION TOOL",
    projectScreenshots: [
        { img: "src/assets/dci_ui/landing.jpg", title: "CaterXperience", subtitle: "CAPSTONE PROJECT", tech: "REACT | LARAVEL | MYSQL", desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs." },
        { img: "src/assets/dci_ui/dashboard.jpg", tech: "DASHBOARD", desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management." },
        { img: "src/assets/dci_ui/bookings.jpg", tech: "BOOKINGS", desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly." },
        { img: "src/assets/dci_ui/event.jpg", tech: "EVENT DETAILS", desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans." },
        { img: "src/assets/dci_ui/menu.jpg", tech: "MENU", desc: "The menu section lets users view and manage food options, including their categorie and pictures." },
        { img: "src/assets/dci_ui/packages.jpg", tech: "PACKAGES", desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons." },
        { img: "src/assets/dci_ui/client.jpg", tech: "CLIENT MANAGEMENT", desc: "The client management interface keeps track of customer profiles, contact information, and booking history." },
        { img: "src/assets/dci_ui/staff.jpg", tech: "STAFFF MANAGEMENT", desc: "This page shows the staff roster, their roles, and schedules, making team management more organized." },
        { img: "src/assets/dci_ui/layout.jpg", tech: "2D VENUE LAYOUT", desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually." },
        { img: "src/assets/dci_ui/audit.jpg", tech: "AUDIT LOG", desc: "The audit log records system activity and changes, helping maintain accountability and track actions." },
    ],
    desc: `
DCI is a web application designed to analyze and compare two database sources to
identify conflicts, inconsistencies, and mismatched records. The tool helps organizations
maintain accurate datasets by highlighting conflicting entries and providing options to
resolve them.

The system simplifies database auditing by presenting comparison results through an
organized interface that allows users to review differences and manage ignored records.`,
    tech: "REACT | LARAVEL | MYSQL | POSTGRESQL",
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
    cardBg: "bg-[#0f1f2e]",
    subtitle: "WORK TIME TRACKING AND PRODUCTIVITY TOOL",
    projectScreenshots: [
        { img: "src/assets/ticksy_ui/landing.jpg", title: "ticksyXperience", subtitle: "CAPSTONE PROJECT", tech: "REACT | LARAVEL | MYSQL", desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs." },
        { img: "src/assets/ticksy_ui/dashboard.jpg", tech: "DASHBOARD", desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management." },
        { img: "src/assets/ticksy_ui/bookings.jpg", tech: "BOOKINGS", desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly." },
        { img: "src/assets/ticksy_ui/event.jpg", tech: "EVENT DETAILS", desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans." },
        { img: "src/assets/ticksy_ui/menu.jpg", tech: "MENU", desc: "The menu section lets users view and manage food options, including their categorie and pictures." },
        { img: "src/assets/ticksy_ui/packages.jpg", tech: "PACKAGES", desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons." },
        { img: "src/assets/ticksy_ui/client.jpg", tech: "CLIENT MANAGEMENT", desc: "The client management interface keeps track of customer profiles, contact information, and booking history." },
        { img: "src/assets/ticksy_ui/staff.jpg", tech: "STAFFF MANAGEMENT", desc: "This page shows the staff roster, their roles, and schedules, making team management more organized." },
        { img: "src/assets/ticksy_ui/layout.jpg", tech: "2D VENUE LAYOUT", desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually." },
        { img: "src/assets/ticksy_ui/audit.jpg", tech: "AUDIT LOG", desc: "The audit log records system activity and changes, helping maintain accountability and track actions." },
    ],
    desc: `
Ticksy is a web-based time tracking system designed to help teams and individuals
monitor their work hours, manage schedules, and improve productivity. The system
allows employees to record working sessions while giving administrators tools to
manage schedules and review time logs.

The platform focuses on simple and efficient time tracking with clear reporting
features that help organizations monitor employee productivity and attendance.`,
    tech: "REACT | ASP.NET | POSTGRESQL",
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
    cardBg: "bg-[#0b1722]",
    subtitle: "COURSE ATTENDANCE MONITORING SYSTEM",
    projectScreenshots: [
        { img: "src/assets/cams_ui/landing.jpg", title: "CaterXperience", subtitle: "CAPSTONE PROJECT", tech: "REACT | LARAVEL | MYSQL", desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs." },
        { img: "src/assets/cams_ui/dashboard.jpg", tech: "DASHBOARD", desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management." },
        { img: "src/assets/cams_ui/bookings.jpg", tech: "BOOKINGS", desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly." },
        { img: "src/assets/cams_ui/event.jpg", tech: "EVENT DETAILS", desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans." },
        { img: "src/assets/cams_ui/menu.jpg", tech: "MENU", desc: "The menu section lets users view and manage food options, including their categorie and pictures." },
        { img: "src/assets/cams_ui/packages.jpg", tech: "PACKAGES", desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons." },
        { img: "src/assets/cams_ui/client.jpg", tech: "CLIENT MANAGEMENT", desc: "The client management interface keeps track of customer profiles, contact information, and booking history." },
        { img: "src/assets/cams_ui/staff.jpg", tech: "STAFFF MANAGEMENT", desc: "This page shows the staff roster, their roles, and schedules, making team management more organized." },
        { img: "src/assets/cams_ui/layout.jpg", tech: "2D VENUE LAYOUT", desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually." },
        { img: "src/assets/cams_ui/audit.jpg", tech: "AUDIT LOG", desc: "The audit log records system activity and changes, helping maintain accountability and track actions." },
    ],
    desc: `
CAMS is a web-based and mobile-integrated academic management system designed
to help instructors efficiently track and manage student attendance across courses and
sections. The system organizes attendance records through course assignments that
link instructors, courses, sections, rooms, and schedules in a centralized platform.

The system replaces manual attendance tracking with a digital solution that allows
instructors to record attendance per class session and review organized attendance
records for better monitoring and management.`,
    tech: "REACT | PHP | MYSQL | JAVA | VOLLEY",
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
    cardBg: "bg-[#0f1f2e]",
    subtitle: "OPERATIONS AND ORDER MANAGEMENT PLATFORM FOR WASHABLES",
    projectScreenshots: [
        { img: "src/assets/lms_ui/landing.jpg", title: "CaterXperience", subtitle: "CAPSTONE PROJECT", tech: "REACT | LARAVEL | MYSQL", desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs." },
        { img: "src/assets/lms_ui/dashboard.jpg", tech: "DASHBOARD", desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management." },
        { img: "src/assets/lms_ui/bookings.jpg", tech: "BOOKINGS", desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly." },
        { img: "src/assets/lms_ui/event.jpg", tech: "EVENT DETAILS", desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans." },
        { img: "src/assets/lms_ui/menu.jpg", tech: "MENU", desc: "The menu section lets users view and manage food options, including their categorie and pictures." },
        { img: "src/assets/lms_ui/packages.jpg", tech: "PACKAGES", desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons." },
        { img: "src/assets/lms_ui/client.jpg", tech: "CLIENT MANAGEMENT", desc: "The client management interface keeps track of customer profiles, contact information, and booking history." },
        { img: "src/assets/lms_ui/staff.jpg", tech: "STAFFF MANAGEMENT", desc: "This page shows the staff roster, their roles, and schedules, making team management more organized." },
        { img: "src/assets/lms_ui/layout.jpg", tech: "2D VENUE LAYOUT", desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually." },
        { img: "src/assets/lms_ui/audit.jpg", tech: "AUDIT LOG", desc: "The audit log records system activity and changes, helping maintain accountability and track actions." },
    ],
    desc: `
The Laundry Management System (LMS) is a web-based application designed to
modernize the operations of Washables Laundry Services by replacing manual
logbooks with a centralized digital platform.

The system allows staff to record customer orders, monitor laundry schedules, track
cleaning supplies, and generate billing records. By automating these tasks, the
platform helps the business handle higher order volumes while maintaining organized
records and faster service.`,
    tech: "C# | .NET | SQL SERVER",
    features: `
• Order management and customer record tracking
• Machine scheduling for laundry loads
• Inventory tracking for cleaning supplies
• Billing with digital receipts and payment tracking (Cash and GCash)
• User management for staff and administrators`
  },
  {
    header: "COLLEGE SEMESTRAL PROJECT",
    title: "Dental Appointment and Information System",
    bg: "bg-[#0f1f2e]",
    cardBg: "bg-[#0b1722]",
    subtitle: "CLINIC SCHEDULING AND PATIENT RECORDS MANAGEMENT SYSTEM",
    projectScreenshots: [
        { img: "src/assets/dais_ui/landing.jpg", title: "CaterXperience", subtitle: "CAPSTONE PROJECT", tech: "REACT | LARAVEL | MYSQL", desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs." },
        { img: "src/assets/dais_ui/dashboard.jpg", tech: "DASHBOARD", desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management." },
        { img: "src/assets/dais_ui/bookings.jpg", tech: "BOOKINGS", desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly." },
        { img: "src/assets/dais_ui/event.jpg", tech: "EVENT DETAILS", desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans." },
        { img: "src/assets/dais_ui/menu.jpg", tech: "MENU", desc: "The menu section lets users view and manage food options, including their categorie and pictures." },
        { img: "src/assets/dais_ui/packages.jpg", tech: "PACKAGES", desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons." },
        { img: "src/assets/dais_ui/client.jpg", tech: "CLIENT MANAGEMENT", desc: "The client management interface keeps track of customer profiles, contact information, and booking history." },
        { img: "src/assets/dais_ui/staff.jpg", tech: "STAFFF MANAGEMENT", desc: "This page shows the staff roster, their roles, and schedules, making team management more organized." },
        { img: "src/assets/dais_ui/layout.jpg", tech: "2D VENUE LAYOUT", desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually." },
        { img: "src/assets/dais_ui/audit.jpg", tech: "AUDIT LOG", desc: "The audit log records system activity and changes, helping maintain accountability and track actions." },
    ],
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
    features: `
• Secure staff authentication and login system
• Appointment scheduling with calendar-based viewing
• Patient registration and medical record management
• Staff account management for clinic personnel
• Service registration and pricing management
• Centralized database for clinic records and appointments`
  },
];

const NextArrow = ({ onClick }) => (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowCircleRight} className="text-white w-5 h-5" />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowCircleLeft} className="text-white w-5 h-5" />
    </div>
);

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "18%",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

export default function Works() {
  return (
    <div className="bg-[#0f1f2e] text-white min-h-screen">
      <Navbar />

      <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-10 py-16 grid md:grid-cols-2 gap-10"
        >
            <div>
                <h1 className="text-6xl font-heading font-bold leading-tight pl-5 mb-4">
                    Projects/<br />Works
                </h1>
                <Pill width="w-12" margin="ml-5" />
                <div className="flex space-x-4 mt-6 text-xl pl-5">
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

            <div className="text-gray-300 pl-20 font-medium font-body text-l leading-relaxed tracking-wide space-y-4">
                <p className="mb-4">
                    Here are some of the projects I have worked on,<br/>including academic,<br/>
                    personal, and experimental applications.
                </p>
                <p>
                    Each project demonstrates different<br/>technologies and problem-solving
                    approaches.
                </p>
            </div>
        </motion.section>

        <section>
            {projects.map((proj, index) => (
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div
                key={proj.title}
                className={`${proj.bg} py-20 px-10`}
                >
                <div
                    className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
                >
                    <div className="project-slider relative py-5 overflow-hidden"> 
                        <Slider {...settings}>
                            {proj.projectScreenshots.map((ss, idx) => (
                                <div key={idx} className="px-4 outline-none">
                                    <div className={`${proj.cardBg} p-8 rounded-2xl text-justify flex flex-col items-center transition-all duration-500 slide-inner min-h-[350px] w-[350px]`}>
                                        <h3 className="text-l font-heading tracking-wider font-semibold mb-1 text-gray-300">{ss.title}</h3>
                                        <p className="text-[10px] tracking-wider font-semibold font-heading text-gray-400 mb-6 uppercase">{ss.subtitle}</p>
                                        
                                        <div className="w-64 max-h-40 overflow-hidden mb-6 rounded-lg">
                                            <center><img src={ss.img} alt={ss.title} className="w-full h-full object-cover object-top" /></center>
                                        </div>

                                        <p className="text-xs text-gray-400 mb-4 font-heading font-bold tracking-widest uppercase">{ss.tech}</p>
                                        <p className="text-xs text-gray-300 font-body font-medium max-w-xs leading-relaxed">{ss.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="ml-10">
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
                    <Link to="/works" className="group relative font-heading font-semibold mt-2 text-sm hover:text-gray-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-gray-300 
                        after:transition-all after:duration-300 
                        hover:after:w-full">
                        View on Github <FontAwesomeIcon icon={faArrowRight} className="pl-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                    </div>
                </div>
                </div>
            </motion.section>
            ))}
        </section>

        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10">
            
                <div className="ml-10">
                <h2 className="text-2xl font-heading font-bold mb-2">Curious?</h2>
                <p className="text-sm font-body font-medium text-gray-400 mb-4">
                    Find out more about me and what I can do.
                </p>
                <Link to="/about" className="group relative font-heading font-semibold mt-2 text-l hover:text-gray-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-0 after:h-[2px] after:bg-gray-300 
                    after:transition-all after:duration-300 
                    hover:after:w-full">
                    More About Me <FontAwesomeIcon icon={faArrowRight} className="pl-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"/>
                </Link>
                </div>

                <div>
                <h2 className="text-2xl font-heading font-bold mb-2">
                    Interested in Working Together?
                </h2>
                <p className="text-sm font-body font-medium text-gray-400 mb-4">
                    Want to avail my services or send me anything work-related?
                </p>
                <Link to="/contact" className="group relative font-heading font-semibold mt-2 text-l hover:text-gray-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-0 after:h-[2px] after:bg-gray-300 
                    after:transition-all after:duration-300 
                    hover:after:w-full">
                    Contact Me <FontAwesomeIcon icon={faArrowRight} className="pl-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"/>
                </Link>
                </div>
            </section>
        </motion.section>

        <Footer />
      
    </div>
  );
}
