import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

export default function Home(){
    const Pill = ({ width, margin }) => (
        <div className={`${width} h-1.5 bg-[#324A5F] ${margin} rounded-full`} />
    );

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
            <section className="flex flex-col md:flex-row items-center px-10 py-3 pt-8 pb-12" id="about">
                <div className="flex-1">
                    <h1 className="text-6xl font-heading font-bold leading-tight pl-5 mb-4">
                        Daphne <br /> Manalansan.
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

                

                <div className="flex-1 ml-[15%]">
                    <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— INTRODUCTION</p>
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Software Engineer, <br /> based in Bulacan.
                    </h2>
                    <p className="font-body font-medium text-gray-300 text-sm leading-relaxed text-justify mb-4">
                        Hi! I am Daphne Manalansan, a software engineer based <br/>in Bulacan, Philippines.
                        I build full-stack web applications, <br />backend systems, and APIs using React, Laravel,<br /> and ASP.NET.
                    </p>
                    <a href="/resume.pdf" download className="group relative font-heading font-semibold mt-2 text-sm hover:text-gray-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-gray-300 
                        after:transition-all after:duration-300 
                        hover:after:w-[89%]">
                        Download Resume <FontAwesomeIcon icon={faArrowDown} className=" w-3 h-3 transition-transform duration-300 group-hover:translate-y-1"/>
                    </a>
                </div>

                <div className="relative mr-20">
                    <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-[#324A5F]/40"></div>

                    <div className="relative h-[22rem] w-[18rem] overflow-hidden rounded-3xl bg-[#162738] shadow-2xl">
                        <img
                            src="/assets/daphne.png"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </section>
        </motion.section>
    )
}