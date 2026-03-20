import { motion } from "framer-motion";

export default function AboutHero(){
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-10 py-16 grid md:grid-cols-2 gap-10"
        >
            <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
                All About <br /> Daphne
            </h1>
            <div className="flex space-x-4 mt-6 text-xl">
                <span>📧</span>
                <span>🐙</span>
                <span>💼</span>
            </div>
            </div>

            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p>
                Hi, I'm Daphne Manalansan, a web developer based in Bulacan,
                Philippines. I enjoy building systems that solve real-world
                problems and improve workflows.
            </p>
            <p>
                I specialize in full-stack development using modern frameworks such
                as React, Laravel, and ASP.NET.
            </p>
            </div>
        </motion.section>
    )
}