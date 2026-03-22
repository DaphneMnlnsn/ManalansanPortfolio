export default function FeaturedProjects(){
    return (
        <section className="px-10 py-16">
            <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— FEATURED PROJECTS</p>
            <h2 className="text-3xl font-heading font-bold mb-6">
            The Best Experiences Lie in Works
            </h2>
            <p className="font-body font-medium text-gray-300 text-sm leading-relaxed mb-4">
                I have developed multiple web-based projects involving clients and
                <br/>real concepts. I mostly worked on the backend aspects but also
                <br/>contributed in frontend integrations.
            </p>
            <button className="font-heading font-semibold mt-2 text-sm underline hover:text-gray-300">
                See all Projects →
            </button>

            <div className="bg-[#0b1722] p-6 rounded-xl max-w-md">
                <h3 className="text-xl font-heading font-semibold mb-2">CaterXperience</h3>
                <p className="text-xs font-semibold font-heading text-gray-400 mb-2">CAPSTONE PROJECT</p>

                <img
                    src="/project.png"
                    alt="project"
                    className="mb-4 rounded"
                />

                <p className="text-xs text-gray-400 mb-2 font-heading font-semibold">REACT | LARAVEL | MYSQL</p>
                <p className="text-sm text-gray-300 font-body font-medium">
                    Catering operations and 2D venue layout planning platform developed for a real client.
                </p>
            </div>
        </section>
    )
}