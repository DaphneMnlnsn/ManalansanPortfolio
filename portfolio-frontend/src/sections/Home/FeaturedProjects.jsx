export default function FeaturedProjects(){
    return (
        <section className="px-10 py-16">
            <p className="text-sm text-gray-400 mb-2">— FEATURED PROJECTS</p>
            <h2 className="text-3xl font-semibold mb-6">
            The Best Experiences Lie in Works
            </h2>

            <div className="bg-[#0b1722] p-6 rounded-xl max-w-md">
            <h3 className="text-xl font-bold mb-2">CaterXperience</h3>
            <p className="text-xs text-gray-400 mb-2">CAPSTONE PROJECT</p>

            <img
                src="/project.png"
                alt="project"
                className="mb-4 rounded"
            />

            <p className="text-xs text-gray-400 mb-2">REACT | LARAVEL | MYSQL</p>
            <p className="text-sm text-gray-300">
                Catering operations and 2D venue layout planning platform developed for a real client.
            </p>
            </div>
        </section>
    )
}