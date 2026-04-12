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
import { projects } from "../workData";

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
                    <p className="font-heading font-extrabold text-xs mb-6">{proj.tech}</p>
                    <p className="font-heading font-semibold text-xs text-gray-400">— KEY FEATURES</p>
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
