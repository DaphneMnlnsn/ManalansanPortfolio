import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function ContactForm() {
    const Pill = ({ width, margin }) => (
        <div className={`${width} h-1 bg-[#324A5F] ${margin} rounded-full`} />
    );

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_816er5f",
            "template_7ga3w1s",
            formData,
            "uQYJPQtHbHb2EGdbj"
        )
        .then(() => {
            Swal.fire({
                title: "Message Sent!",
                text: "Thanks for reaching out — I’ll get back to you soon <3",
                icon: "success",
                confirmButtonColor: "#3b82f6",
                background: "#162535",
                color: "#fff"
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch(() => {
            Swal.fire({
                title: "Oops!",
                text: "Something went wrong. Please try again.",
                icon: "error",
                confirmButtonColor: "#ef4444",
                background: "#162535",
                color: "#fff"
            });
        });
    };

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
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs text-gray-400 block mb-2">
                                        YOUR NAME
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
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
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f1e2d] border border-transparent focus:border-[#3b82f6] rounded-lg p-3 outline-none transition resize-none"
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button className="bg-[#0b1722] px-6 py-3 rounded-lg font-semibold hover:bg-[#0f1e2d] transition shadow-md" type="submit">
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