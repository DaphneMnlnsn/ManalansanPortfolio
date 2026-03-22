export default function AboutOtherSkills(){
    return(
        <section className="bg-[#0b1722] px-10 py-16">
            <p className="font-heading font-semibold text-sm text-gray-400 mb-10">— OTHER SKILLS</p>

            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="mb-4 font-heading font-bold">Tools</h3>
                    <div className="font-heading font-semibold grid grid-cols-2 gap-4">
                    {["GITHUB", "FIGMA", "POSTMAN", "VS CODE"].map((tool) => (
                        <div key={tool} className="bg-[#1c2f3f] p-4 rounded-lg text-xs text-center">
                        {tool}
                        </div>
                    ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 font-heading font-bold">Soft Skills</h3>
                    <div className="font-heading font-semibold grid grid-cols-2 gap-4">
                    {[
                        "TEAMWORK",
                        "COMMUNICATION",
                        "ADAPTABILITY",
                        "DETAIL-ORIENTED",
                        "PROBLEM SOLVING",
                        "PATIENCE",
                        "EMPATHY",
                        "WILLING TO LEARN",
                    ].map((skill) => (
                        <div key={skill} className="bg-[#1c2f3f] p-4 rounded-lg text-xs text-center">
                        {skill}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}