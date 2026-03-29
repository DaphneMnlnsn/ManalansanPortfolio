import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

export default function HomeContact(){
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="bg-[#0b1722] px-20 py-16 grid md:grid-cols-2 gap-10">
                <div className="max-w-xs pl-10">
                    <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— CONTACT</p>
                    <h2 className="text-3xl font-heading font-bold mb-4">Let's Work<br/>Together.</h2>
                    <p className="font-body font-medium text-gray-400 text-sm mb-4 mt-7 text-justify leading-relaxed">
                    Want to avail my services or send me anything work-related? Contact me through the link below.
                    I will reply the best I can.
                    </p>
                    <Link to="/contact" className="group inline-block relative font-heading font-semibold mt-4 text-sm hover:text-gray-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-gray-300 
                        after:transition-all after:duration-300 
                        hover:after:w-full">
                        Contact Me <FontAwesomeIcon icon={faArrowRight} className="pl-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                </div>

                <div>
                    <h2 className="text-3xl font-heading font-bold mb-4">
                    Code is more than <br/> logic, it's a way to turn <br/> ideas into reality.
                    </h2>
                    <p className="text-gray-400 font-body font-medium text-sm mb-4 mt-5">
                    Throughout my experiences in programming, I have made several <br/> projects, may it be
                    websites or simple programs.
                    </p>
                    <div className="flex space-x-10 mt-9">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <h3 className="text-4xl font-bold font-heading">3+</h3>
                                <p className="font-heading font-semibold text-l leading-tight">Years of Coding <br/> Experience.</p>
                            </div>
                            <p className="pl-14 font-body font-medium text-[10px] text-gray-400">- including univ years -</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <h3 className="text-4xl font-bold font-heading">6</h3>
                                <p className="font-heading font-semibold text-l leading-tight">App and Web <br/> Projects</p>
                            </div>
                            <p className="pl-8 font-body font-medium text-[10px] text-gray-400">- including univ projects -</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}