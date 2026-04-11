import { motion } from "framer-motion";

export default function ContactForm() {
    const Pill = ({ width, margin }) => (
        <div className={`${width} h-1 bg-[#324A5F] ${margin} rounded-full`} />
    );

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="px-10 py-16">
                <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">

                    <div className="bg-[#0b1722] p-20">
                        <h2 className="text-3xl font-heading font-bold leading-snug">
                            I look forward to hearing <br /> from you!
                        </h2>

                        <p className="font-heading text-sm text-gray-400 mt-10">
                            I am currently open to:
                        </p>

                        <ul className="space-y-4 text-gray-300 mt-8 tracking-wide">
                            {["JUNIOR DEVELOPER ROLES", "FREELANCE OPPORTUNITIES", "COLLABORATIVE PROJECTS"].map((item, i) => (
                                <div key={i} className="flex items-center">
                                    <Pill width="w-7" margin="mr-3" />
                                    <li className="font-heading font-semibold">{item}</li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#162535] p-12">
                        <form className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs text-gray-400 block mb-2">
                                        YOUR NAME
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-[#0f1e2d] border border-transparent focus:border-[#3b82f6] rounded-lg p-3 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-400 block mb-2">
                                        YOUR EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john.doe@gmail.com"
                                        className="w-full bg-[#0f1e2d] border border-transparent focus:border-[#3b82f6] rounded-lg p-3 outline-none transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-400 block mb-2">
                                    SUBJECT
                                </label>
                                <input
                                    type="text"
                                    placeholder="Let's work together!"
                                    className="w-full bg-[#0f1e2d] border border-transparent focus:border-[#3b82f6] rounded-lg p-3 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="text-xs text-gray-400 block mb-2">
                                    MESSAGE
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-[#0f1e2d] border border-transparent focus:border-[#3b82f6] rounded-lg p-3 outline-none transition resize-none"
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button className="bg-[#0b1722] px-6 py-3 rounded-lg font-semibold hover:bg-[#0f1e2d] transition shadow-md">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </motion.section>
    );
}