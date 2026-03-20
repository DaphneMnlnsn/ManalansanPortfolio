export default function ContactHero(){
    return(
        <section className="px-10 py-16 grid md:grid-cols-2 gap-10">
            <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
                Contact <br /> Me
            </h1>
            <div className="flex space-x-4 mt-6 text-xl">
                <span>📧</span>
                <span>🐙</span>
                <span>💼</span>
            </div>
            </div>

            <div className="text-gray-300 text-sm leading-relaxed">
            <p>
                Feel free to reach out if you would like to collaborate, hire me,
                discuss a project, or simply connect.
            </p>
            </div>
        </section>
    )
}