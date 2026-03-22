export default function HomeContact(){
    return (
        <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10">
            <div>
                <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— CONTACT</p>
                <h2 className="text-3xl font-heading font-bold mb-4">Let's Work Together.</h2>
                <p className="font-body font-medium text-gray-400 text-sm mb-4">
                Want to avail my services or send me anything work-related? Contact me through the link below.
                </p>
                <button className="font-heading font-semibold underline">Contact Me →</button>
            </div>

            <div>
                <h2 className="text-3xl font-heading font-bold mb-4">
                Code is more than logic, it's a way to turn ideas into reality.
                </h2>
                <p className="text-gray-400 font-body font-medium text-sm mb-6">
                Throughout my experiences in programming, I have made several projects.
                </p>
                <div className="flex space-x-10">
                    <div>
                        <h3 className="text-4xl font-bold">3+</h3>
                        <p className="font-heading font-semibold text-2xl">Years of Coding</p>
                        <p className="font-body font-medium text-sm text-gray-400">- including school years -</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">6</h3>
                        <p className="font-heading font-semibold text-2xl">Projects</p>
                        <p className="font-body font-medium text-sm text-gray-400">- including school projects -</p>
                    </div>
                </div>
            </div>
        </section>
    )
}