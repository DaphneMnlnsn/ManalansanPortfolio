import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function ContactHero(){
    return(
        <section className="px-10 py-16 grid md:grid-cols-2 gap-10">
            <div>
                <h1 className="text-5xl font-heading font-bold leading-tight mb-4">
                    Contact <br /> Me
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

            <div className="font-body font-medium text-gray-300 text-sm leading-relaxed">
                <p>
                    Feel free to reach out if you would like to<br />collaborate, hire me,
                    discuss a project, or simply<br/>connect.
                </p>
            </div>
        </section>
    )
}