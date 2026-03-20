export default function AboutMoreInfo(){
    return(
        <section className="px-10 py-16 grid md:grid-cols-2 gap-10">
            <div className="text-gray-400 text-sm space-y-4">
            <p>
                My approach focuses on writing clean and maintainable code.
            </p>
            <p>
                I value proper architecture, documentation, and collaboration.
            </p>
            <p>
                I enjoy learning new technologies to improve my workflow.
            </p>
            </div>

            <div className="space-y-6">
            <div>
                <h3 className="text-3xl font-bold">3+</h3>
                <p className="text-gray-400 text-sm">Years of Coding</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">6</h3>
                <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-gray-400 text-sm">Technologies</p>
            </div>
            </div>
        </section>
    )
}