export default function AboutOtherSkills(){
    return(
        <section className="bg-[#0b1722] px-10 py-16">
            <p className="text-sm text-gray-400 mb-10">— OTHER SKILLS</p>

            <div className="grid md:grid-cols-2 gap-10">
            <div>
                <h3 className="mb-4 font-semibold">Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                {["GitHub", "Figma", "Postman", "VS Code"].map((tool) => (
                    <div key={tool} className="bg-[#1c2f3f] p-4 rounded-lg text-sm text-center">
                    {tool}
                    </div>
                ))}
                </div>
            </div>

            <div>
                <h3 className="mb-4 font-semibold">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                {[
                    "Teamwork",
                    "Communication",
                    "Adaptability",
                    "Detail-Oriented",
                    "Problem Solving",
                    "Patience",
                    "Empathy",
                    "Willing to Learn",
                ].map((skill) => (
                    <div key={skill} className="bg-[#1c2f3f] p-4 rounded-lg text-sm text-center">
                    {skill}
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>
    )
}