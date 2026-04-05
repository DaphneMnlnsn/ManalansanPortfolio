import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function AboutHero(){
    const Pill = ({ width, margin }) => (
        <div className={`${width} h-1.5 bg-[#324A5F] ${margin} rounded-full`} />
    );

    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-10 py-16 grid md:grid-cols-2 gap-10"
        >
            <div>
                <h1 className="text-6xl font-heading font-bold leading-tight pl-5 mb-4">
                    All About <br /> Daphne
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
                <p>
                    Hi! I'm Daphne Manalansan, a web developer<br/>based in Bulacan,
                    Philippines. I enjoy building<br/>systems that solve real-world
                    problems and<br/>improve workflows.
                </p>
                <p>
                    I specialize in full-stack development using<br/>modern frameworks such
                    as<br/>React, Laravel, and ASP.NET.
                </p>
            </div>
        </motion.section>
    )
}