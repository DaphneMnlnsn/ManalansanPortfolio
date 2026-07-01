import { React, useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { faArrowCircleLeft, faArrowCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SlickSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { projects } from "../workData";
import ProjectImageSlider from "../components/ProjectImageSlider";

const Slider = SlickSlider.default || SlickSlider;

const Pill = ({ width, margin }) => (
    <div className={`${width} h-1 bg-[#324A5F] ${margin} rounded-full`} />
);

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
    <div className="text-white min-h-screen" id="works">

      <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="px-10 py-16 grid md:grid-cols-2 gap-10"
        >
            <div>
                <h1 className="text-6xl font-heading font-bold leading-tight pl-5 mb-4">
                    Projects/<br />Works
                </h1>
                <Pill width="w-12" margin="ml-5" />
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
                viewport={{ once: false }}
            >
                <div
                key={proj.title}
                className={`${proj.bg} py-20 px-10`}
                >
                <div
                    className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
                >
                    <div className="project-slider relative py-5 px-[8%] overflow-hidden"> 
                        <ProjectImageSlider
                            images={proj.projectScreenshots}
                        />
                    </div>

                    <div className="ml-10">
                    <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— {proj.header}</p>
                    <h2 className="text-3xl font-heading font-bold mb-2">{proj.title}</h2>
                    <p className="font-heading font-semibold text-sm text-gray-400 mb-3">
                        {proj.subtitle}
                    </p>
                    <p className="font-body font-medium text-sm text-gray-300 mb-4 whitespace-pre-wrap">{proj.desc}</p>
                    <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— TECH STACK</p>
                    <p className="font-heading font-extrabold text-sm mb-6">{proj.tech}</p>
                    <p className="font-heading font-semibold text-sm text-gray-400">— KEY FEATURES</p>
                    <p className="font-body font-medium text-sm text-gray-300 mb-4 whitespace-pre-wrap">{proj.features}</p>
                    <Link to={proj.link} target="_blank" className="group relative font-heading font-semibold mt-2 text-m hover:text-gray-300 
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
      
    </div>
  );
}
