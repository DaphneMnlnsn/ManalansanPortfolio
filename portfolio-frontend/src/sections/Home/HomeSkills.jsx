import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDatabase } from '@fortawesome/free-solid-svg-icons'
import {faReact, faLaravel, faPhp, faMicrosoft, faPostgresql} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

export default function HomeSkills(){

    const techSkills = [
        { name: "React", icon: faReact },
        { name: "Laravel", icon: faLaravel },
        { name: "PostgreSQL", icon: faPostgresql },
        { name: "PHP", icon: faPhp },
        { name: "ASP.NET", icon: faMicrosoft },
        { name: "MySQL", icon: faDatabase },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10">
                <div className="grid grid-cols-3 gap-y-10 gap-x-6 text-center">
                    {techSkills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center group">
                            <div className="text-gray-300 group-hover:text-[#324a5f] transition-colors duration-300 mb-3 text-5xl">
                                <FontAwesomeIcon icon={skill.icon} />
                            </div>

                            <div className="text-xs text-gray-400 font-heading font-bold tracking-widest uppercase">
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— SKILLSET</p>
                    <h2 className="font-heading font-bold text-3xl mt-5 mb-5">
                        Always open to learning something new.
                    </h2>
                    <p className="font-body font-medium text-gray-400 leading-relaxed text-sm mb-10 text-justify max-w-[32rem]">
                        Ever since my student years, I recognize that I have numerous things to learn in the ever-growing technology industry.
                        As a result, I try to explore languages that I find interesting and relevant in my career. I have more to show, I promise!
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
    );
}