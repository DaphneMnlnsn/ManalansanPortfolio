export default function AboutMoreInfo(){
    return(
        <section className="px-10 py-16 grid md:grid-cols-2 gap-10">
            <div className="font-body font-medium text-gray-400 text-sm space-y-4">
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
                    <h3 className="text-3xl font-heading font-bold">3+</h3>
                    <p className="font-heading font-semibold text-2xl">Years of Coding</p>
                    <p className="font-body font-medium text-gray-400 text-sm">- including school years -</p>
                </div>
                <div>
                    <h3 className="text-3xl font-heading font-bold">6</h3>
                    <p className="font-heading font-semibold text-2xl">Projects</p>
                    <p className="font-body font-medium text-gray-400 text-sm">- including school projects -</p>
                </div>
                <div>
                    <h3 className="text-3xl font-heading font-bold">5+</h3>
                    <p className="font-heading font-semibold text-2xl">Technologies</p>
                </div>
            </div>
        </section>
    )
}