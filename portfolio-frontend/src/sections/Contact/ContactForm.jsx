export default function ContactForm(){
    return(
        <section className="px-10 py-16">
            <div className="grid md:grid-cols-2 rounded-xl overflow-hidden">
            <div className="bg-[#0b1722] p-10">
                <h2 className="text-2xl font-semibold mb-6">
                I look forward to hearing from you!
                </h2>

                <p className="text-sm text-gray-400 mb-4">I am currently open to:</p>

                <ul className="space-y-3 text-sm">
                <li>— Junior Developer Roles</li>
                <li>— Freelance Opportunities</li>
                <li>— Collaborative Projects</li>
                </ul>
            </div>

            <div className="bg-[#3b5166] p-10">
                <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-transparent border-b border-gray-300 outline-none p-2"
                    />
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-transparent border-b border-gray-300 outline-none p-2"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Your Subject"
                    className="w-full bg-transparent border-b border-gray-300 outline-none p-2"
                />

                <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-transparent border-b border-gray-300 outline-none p-2"
                ></textarea>

                <div className="flex justify-end">
                    <button className="bg-[#0b1722] px-6 py-2 rounded-md hover:bg-[#09131c]">
                    Send Message
                    </button>
                </div>
                </form>
            </div>
            </div>
        </section>
    )
}