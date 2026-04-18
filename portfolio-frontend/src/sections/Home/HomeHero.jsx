import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
            viewport={{ once: true }}
        >
            <section className="flex flex-col md:flex-row items-center px-10 py-3 pt-8 pb-12">
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

                {/* <div className="flex-1 flex justify-center pr-12 my-10 md:my-0">
                    <img
                        src="src/assets/daphne.png"
                        alt="profile"
                        className="object-cover h-[22rem] mb-[-13%]"
                    />
                </div> */}

                <div className="flex-1 ml-[20%]">
                    <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— INTRODUCTION</p>
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Website Developer, <br /> based in Bulacan.
                    </h2>
                    <p className="font-body font-medium text-gray-300 text-sm leading-relaxed text-justify mb-4">
                        Hi! I am Daphne Manalansan, a websitedeveloper based in <br/>Bulacan, Philippines.
                        I mostly work on React, Laravel, and<br/>ASP.Net web-based projects.
                    </p>
                    <Link to="/about" className="group relative font-heading font-semibold mt-2 text-sm hover:text-gray-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-gray-300 
                        after:transition-all after:duration-300 
                        hover:after:w-full">
                        More About Me <FontAwesomeIcon icon={faArrowRight} className="pl-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                </div>
            </section>
        </motion.section>
    )
}