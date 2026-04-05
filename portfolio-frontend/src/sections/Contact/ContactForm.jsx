export default function ContactForm(){
    const Pill = ({ width, margin }) => (
        <div className={`${width} h-1 bg-[#324A5F] ${margin} rounded-full`} />
    );
    
    return(
        <section className="px-10 py-16">
            <div className="grid md:grid-cols-2 rounded-xl overflow-hidden">
                <div className="bg-[#0b1722] p-20">
                    <h2 className="text-2xl font-heading font-bold mb-6">
                    I look forward to hearing <br/> from you!
                    </h2>

                    <p className="font-heading font-semibold text-sm text-gray-400 mt-10 mb-4">I am currently open to:</p>

                    <ul className="font-heading font-semibold space-y-3 text-gray-300 text-l mt-10 tracking-wider">
                    <div className="flex items-center">
                        <Pill width="w-7" margin="ml-2 mr-2" />
                        <li>JUNIOR DEVELOPER ROLES</li>
                    </div>
                    <div className="flex items-center">
                        <Pill width="w-7" margin="ml-2 mr-2" />
                        <li>FREELANCE OPPORTUNITIES</li>
                    </div>
                    <div className="flex items-center">
                        <Pill width="w-7" margin="ml-2 mr-2" />
                        <li>COLLABORATIVE PROJECTS</li>
                    </div>
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