import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faLaravel, faMicrosoft, faPhp, faPostgresql, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faDesktop, faDiagramProject, faMessage, faNetworkWired, faServer } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export default function AboutCoreSkills(){
    
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="px-10 py-16">
                <p className="font-heading font-semibold text-sm text-gray-400 mb-5 pl-10">— CORE SKILLS</p>

                <div className="grid md:grid-cols-3 text-center pl-10 pr-20">
                {[
                {
                    title: "Frontend",
                    items: [
                    { name: "REACT", icon: faReact },
                    { name: "VUE", icon: faVuejs },
                    { name: "HTML", icon: faHtml5 },
                    { name: "CSS", icon: faCss3 },
                    ],
                },
                {
                    title: "Backend",
                    items: [
                    { name: "LARAVEL", icon: faLaravel },
                    { name: "PHP", icon: faPhp },
                    { name: "ASP.NET", icon: faMicrosoft },
                    { name: "REST APIs", icon: faNetworkWired },
                    ],
                },
                {
                    title: "Database",
                    items: [
                    { name: "MYSQL", icon: faDatabase },
                    { name: "POSTGRESQL", icon: faPostgresql },
                    { name: "SQL SERVER", icon: faServer },
                    { name: "DB DESIGN", icon: faDiagramProject },
                    ],
                },
                ].map((group, index) => (
                    <div
                    key={group.title}
                    className={`px-5 ${
                        index !== 2 ? "border-r-2 border-[#324A5F]/50" : ""
                    }`}
                    >
                        <h3 className="mb-4 text-xl font-heading font-bold">{group.title}</h3>

                        <div className="grid grid-cols-2 gap-5 p-5">
                            {group.items.map((item) => (
                            <div key={item.name} className="bg-[#0b1722] font-heading font-semibold p-5 rounded-xl group">
                                <div className="text-gray-300 group-hover:text-[#324a5f] transition-colors duration-300 mb-3 text-3xl">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>

                                <div className="text-xs text-gray-400 font-heading font-bold tracking-widest uppercase">
                                    {item.name}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </section>
        </motion.section>
    )
}