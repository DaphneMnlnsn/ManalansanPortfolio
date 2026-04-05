import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowsRotate, faCode, faMagnifyingGlass, faPuzzlePiece, faUsers } from "@fortawesome/free-solid-svg-icons"
import { faComments, faHeart, faHourglassHalf, faLightbulb, faPaperPlane } from "@fortawesome/free-regular-svg-icons"

export default function AboutOtherSkills(){
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="bg-[#0b1722] px-10 py-16">
                <p className="font-heading font-semibold text-sm text-gray-400 mb-5 pl-10">— OTHER SKILLS</p>

                <div className="grid md:grid-cols-3 gap-10 pl-10 pr-10">
                    <div className="col-span-1 pr-10 border-r-2 border-[#324A5F]/50">
                        <h3 className="mb-4 text-xl font-heading font-bold">Tools</h3>
                        <div className="font-heading font-semibold grid grid-cols-2 gap-5">
                        {[  
                            { name: "GITHUB", icon: faGithub },
                            { name: "FIGMA", icon: faFigma },
                            { name: "POSTMAN", icon: faPaperPlane },
                            { name: "VS CODE", icon: faCode }
                        ].map((tool) => (
                            <div key={tool.name} className="bg-[#0f1f2e] font-heading font-semibold p-5 rounded-xl text-center group">
                                <div className="text-gray-300 group-hover:text-[#324a5f] transition-colors duration-300 mb-3 text-3xl">
                                    <FontAwesomeIcon icon={tool.icon} />
                                </div>

                                <div className="text-xs text-gray-400 font-heading font-bold tracking-widest uppercase">
                                    {tool.name}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <h3 className="mb-4 font-heading font-bold text-xl">Soft Skills</h3>
                        <div className="font-heading font-semibold grid grid-cols-4 gap-4">
                        {[
                            { name: "TEAMWORK", icon: faUsers },
                            { name: "COMMUNICATION", icon: faComments },
                            { name: "ADAPTABILITY", icon: faArrowsRotate },
                            { name: "DETAIL-ORIENTED", icon: faMagnifyingGlass },
                            { name: "PROBLEM SOLVING", icon: faPuzzlePiece },
                            { name: "PATIENCE", icon: faHourglassHalf },
                            { name: "EMPATHY", icon: faHeart },
                            { name: "WILLING TO LEARN", icon: faLightbulb }
                        ].map((skill) => (
                            <div key={skill.name} className="bg-[#0f1f2e] font-heading font-semibold p-5 rounded-xl text-center group">
                                <div className="text-gray-300 group-hover:text-[#324a5f] transition-colors duration-300 mb-3 text-3xl">
                                    <FontAwesomeIcon icon={skill.icon} />
                                </div>

                                <div className="text-xs text-gray-400 font-heading font-bold tracking-widest uppercase">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}