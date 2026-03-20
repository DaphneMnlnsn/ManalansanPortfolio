export default function AboutCoreSkills(){
    return(
        <section className="px-10 py-16">
            <p className="text-sm text-gray-400 mb-10">— CORE SKILLS</p>

            <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
                {
                title: "Frontend",
                items: ["React", "Vue", "HTML", "CSS"],
                },
                {
                title: "Backend",
                items: ["Laravel", "PHP", "ASP.NET", "REST APIs"],
                },
                {
                title: "Database",
                items: ["MySQL", "PostgreSQL", "SQL Server", "Design"],
                },
            ].map((group) => (
                <div key={group.title}>
                <h3 className="mb-4 font-semibold">{group.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                    {group.items.map((item) => (
                    <div
                        key={item}
                        className="bg-[#0b1722] p-4 rounded-lg text-sm"
                    >
                        {item}
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}