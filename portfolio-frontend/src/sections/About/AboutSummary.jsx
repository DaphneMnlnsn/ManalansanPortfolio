import { motion } from "framer-motion"
import logo from "/assets/logo.png"

export default function AboutSummary(){
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div className="pl-10">
                    <p className="font-semibold font-heading text-sm text-gray-400 mb-2">— SUMMARY</p>
                    <h2 className="text-2xl font-heading font-bold mb-4">Software Engineer</h2>
                    <p className="font-body font-medium text-gray-400 text-sm mb-4">
                        I am a software engineer with a focus on backend development and experience 
                        building full-stack web applications, APIs, and database architecture.
                    </p>
                    <p className="font-body font-medium text-gray-400 text-sm mb-4">
                        I focus on creating clean, scalable, and maintainable solutions.
                    </p>
                    <p className="font-body font-medium text-gray-400 text-sm">
                        My experience includes management systems, booking platforms, and
                        database tools.
                    </p>
                </div>

                <div className="flex justify-center">
                    <img src={logo} className="w-40 h-40" />
                </div>
            </section>
        </motion.section>
    )
}