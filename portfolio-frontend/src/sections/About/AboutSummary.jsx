export default function AboutSummary(){
    return(
        <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <p className="font-semibold font-heading text-sm text-gray-400 mb-2">— SUMMARY</p>
                <h2 className="text-2xl font-heading font-bold mb-4">Web Developer</h2>
                <p className="font-body font-medium text-gray-400 text-sm mb-4">
                    I am a backend-focused web developer with experience in building web
                    applications from frontend interfaces to backend systems and
                    database architecture.
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
                <div className="w-40 h-40 bg-[#1c2f3f] rounded-lg"></div>
            </div>
        </section>
    )
}