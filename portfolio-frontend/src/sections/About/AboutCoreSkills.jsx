export default function AboutCoreSkills(){
    return(
        <section className="px-10 py-16">
            <p className="font-heading font-semibold text-sm text-gray-400 mb-10">— CORE SKILLS</p>

            <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
                {
                title: "Frontend",
                items: ["REACT", "VUE", "HTML", "CSS"],
                },
                {
                title: "Backend",
                items: ["LARAVEL", "PHP", "ASP.NET", "REST APIs"],
                },
                {
                title: "Database",
                items: ["MYSQL", "POSTGRESQL", "SQL SERVER", "DATABASE DESIGN"],
                },
            ].map((group) => (
                <div key={group.title}>
                    <h3 className="mb-4 font-heading font-bold">{group.title}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {group.items.map((item) => (
                        <div
                            key={item}
                            className="bg-[#0b1722] font-heading font-semibold p-4 rounded-lg text-xs"
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