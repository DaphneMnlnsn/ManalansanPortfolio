export default function ContactForm(){
    return(
        <section className="px-10 py-16">
            <div className="grid md:grid-cols-2 rounded-xl overflow-hidden">
                <div className="bg-[#0b1722] p-10">
                    <h2 className="text-2xl font-heading font-bold mb-6">
                    I look forward to hearing from you!
                    </h2>

                    <p className="font-heading font-semibold text-sm text-gray-400 mb-4">I am currently open to:</p>

                    <ul className="font-heading font-semibold space-y-3 text-sm">
                    <li>— JUNIOR DEVELOPER ROLES</li>
                    <li>— FREELANCE OPPORTUNITIES</li>
                    <li>— COLLABORATIVE PROJECTS</li>
                    </ul>
                </div>

                <div className="bg-[#1c2f45] p-10 font-heading font-semibold">
                    <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <p className="font-heading font-semibold text-sm">YOUR NAME</p>
                        <input
                        type="text"
                        className="bg-transparent border-b border-gray-300 outline-none p-2"
                        />
                        <p className="font-heading font-semibold text-sm">YOUR EMAIL</p>
                        <input
                        type="email"
                        className="bg-transparent border-b border-gray-300 outline-none p-2"
                        />
                    </div>

                    <p className="font-heading font-semibold text-sm">YOUR SUBJECT</p>
                    <input
                        type="text"
                        className="w-full bg-transparent border-b border-gray-300 outline-none p-2"
                    />

                    <p className="font-heading font-semibold text-sm">YOUR MESSAGE</p>
                    <textarea
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