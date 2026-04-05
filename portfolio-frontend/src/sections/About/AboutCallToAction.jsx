import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

export default function AboutCallToAction(){
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-20">
                <div className="pl-10">
                    <h2 className="text-3xl font-heading font-bold mb-2">View my <br/> Projects</h2>
                    <p className="font-body font-medium text-gray-400 leading-relaxed text-sm mb-10 mt-7 text-justify max-w-[25rem]">
                        Through developing several projects, I have learned a lot and gained experience despite being a fresh graduate. You may view them below.
                    </p>
                    <Link to="/works" className="group relative font-heading font-semibold mt-2 text-sm hover:text-gray-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-gray-300 
                        after:transition-all after:duration-300 
                        hover:after:w-full">
                        See all Projects <FontAwesomeIcon icon={faArrowRight} className="pl-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                </div>

                <div>
                    <h2 className="text-3xl font-heading font-bold mb-2">
                        Interested in Working <br/> Together?
                    </h2>
                    <p className="font-body font-medium text-gray-400 leading-relaxed text-sm mb-10 mt-7 text-justify max-w-[20rem]">
                        Want to avail my services or send me anything work-related? Contact me through the link below. I will reply the best I can.
                    </p>
                    <Link to="/contact" className="group relative font-heading font-semibold mt-2 text-sm hover:text-gray-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-gray-300 
                        after:transition-all after:duration-300 
                        hover:after:w-full">
                        Contact Me <FontAwesomeIcon icon={faArrowRight} className="pl-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                </div>
            </section>
        </motion.section>
    )
}