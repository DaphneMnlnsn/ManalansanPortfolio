import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Home(){
    return (
        <section className="flex flex-col md:flex-row items-center px-10 py-10">
            <div className="flex-1">
                <h1 className="text-5xl font-heading font-bold leading-tight mb-4">
                    Daphne <br /> Manalansan.
                </h1>
                <div className="flex space-x-4 mt-6 text-xl pl-1">
                    <a href="mailto:daphnemanalansan1213@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/DaphneMnlnsn"
                        target="_blank"
                        rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                    </a>
                    <a href="https://linkedin.com/in/daphne-manalansan"
                        target="_blank"
                        rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                    </a>
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
                <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— INTRODUCTION</p>
                <h2 className="text-3xl font-heading font-bold mb-4">
                    Website Developer, <br /> based in Bulacan.
                </h2>
                <p className="font-body font-medium text-gray-300 text-sm leading-relaxed mb-4">
                    Hi! I am Daphne Manalansan, a website<br/>developer based in Bulacan, Philippines.
                    I<br/>work mostly on React, Laravel, and<br/>ASP.Net web-based projects.
                </p>
                <button className="font-heading font-semibold mt-2 text-sm underline hover:text-gray-300">
                    More About Me →
                </button>
            </div>
        </section>
    )
}