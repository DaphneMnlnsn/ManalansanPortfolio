export default function Home(){
    return (
        <section className="flex flex-col md:flex-row items-center px-10 py-10">
            <div className="flex-1">
            <h1 className="text-5xl font-bold leading-tight mb-4">
                Daphne <br /> Manalansan.
            </h1>
            <div className="flex space-x-4 mt-6">
                <span>📧</span>
                <span>🔗</span>
                <span>💼</span>
            </div>
            </div>

            <div className="flex-1 flex justify-center my-10 md:my-0">
            <img
                src="/your-image.png"
                alt="profile"
                className="w-72 h-72 object-cover rounded-full border-4 border-[#1f3a52]"
            />
            </div>

            <div className="flex-1">
            <p className="text-sm text-gray-400 mb-2">— INTRODUCTION</p>
            <h2 className="text-3xl font-semibold mb-4">
                Website Developer, <br /> based in Bulacan.
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Hi! I am Daphne Manalansan, a website developer based in Bulacan, Philippines.
                I work mostly on React, Laravel, and ASP.Net web-based projects.
            </p>
            <button className="mt-2 text-sm underline hover:text-gray-300">
                More About Me →
            </button>
            </div>
        </section>
    )
}