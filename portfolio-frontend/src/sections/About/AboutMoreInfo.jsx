export default function AboutMoreInfo(){
    return(
        <section className="px-10 py-16">
            <p className="font-heading font-semibold text-sm text-gray-400 pl-10">— MORE ABOUT ME</p>

            <div className="px-10 grid md:grid-cols-2 gap-20">
                <div className="font-body font-medium text-gray-400 text-sm space-y-4 py-16 leading-relaxed">
                    <p>
                        My approach to development focuses on writing clean and <br/> maintainable code.
                    </p>
                    <p>
                        I value clear architecture, proper documentation, and collaboration <br/> when working on projects.
                    </p>
                    <p>
                        I enjoy learning new technologies and continuously improving my <br/> workflow to build better and more efficient systems.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <h3 className="text-5xl font-bold font-heading">3+</h3>
                            <p className="font-heading font-semibold text-xl leading-tight">Years of Coding <br/> Experience.</p>
                        </div>
                        <p className="pl-20 font-body font-medium text-[14px] text-gray-400">- including school years -</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-10">
                            <h3 className="pl-1 text-5xl font-bold font-heading">6</h3>
                            <p className="font-heading font-semibold text-xl leading-tight">App and Web <br/> Projects</p>
                        </div>
                        <p className="pl-20 font-body font-medium text-[14px] text-gray-400">- including school projects -</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <h3 className="text-5xl font-bold font-heading">5+</h3>
                            <p className="font-heading font-semibold text-xl leading-tight">Technologies <br/> Used</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}