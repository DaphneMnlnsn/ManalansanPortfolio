export default function HomeSkills(){
    return (
        <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10">
            <div className="grid grid-cols-3 gap-6 text-center">
            {[
                "React",
                "Laravel",
                "Vue",
                "PHP",
                "ASP.NET",
                "MySQL",
            ].map((skill) => (
                <div key={skill} className="border border-gray-700 p-4 rounded-lg">
                {skill}
                </div>
            ))}
            </div>

            <div>
                <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— SKILLSET</p>
                <h2 className="font-heading font-bold text-3xl mb-4">
                    Always open to learning something new.
                </h2>
                <p className="font-body font-medium text-gray-400 text-sm mb-4">
                    I explore languages that I find interesting and relevant in my career.
                </p>
                <button className="font-heading font-semibold underline">More About Me →</button>
            </div>
        </section>
    );
}