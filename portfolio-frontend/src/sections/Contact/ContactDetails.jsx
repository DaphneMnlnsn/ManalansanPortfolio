import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function ContactDetails(){
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="bg-[#0b1722] px-10 py-16">
                <p className="font-heading font-semibold text-sm text-gray-400 pl-10 mb-10">— CONTACT DETAILS</p>

                <div className="font-heading grid md:grid-cols-4 gap-20 text-center pl-10 pr-10">
                    <div>
                        <div className="text-3xl mb-2"><FontAwesomeIcon icon={faGithub} className="w-8 h-8" /></div>
                        <p className="font-semibold text-xs text-gray-400">GITHUB</p>
                        <p className="font-bold mt-2 text-sm">github.com/DaphneMnlnsn</p>
                    </div>

                    <div>
                        <div className="text-3xl mb-2"><FontAwesomeIcon icon={faEnvelope} className="w-7 h-7" /></div>
                        <p className="font-semibold text-xs text-gray-400">EMAIL</p>
                        <p className="font-bold mt-2 text-sm">daphnemanalansan1213@gmail.com</p>
                    </div>

                    <div>
                        <div className="text-3xl mb-2"><FontAwesomeIcon icon={faPhone} className="w-6 h-6" /></div>
                        <p className="font-semibold text-xs text-gray-400">PHONE</p>
                        <p className="font-bold mt-2 text-sm">+63 956 624 5046</p>
                    </div>

                    <div>
                        <div className="text-3xl mb-2"><FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" /></div>
                        <p className="font-semibold text-xs text-gray-400">LINKEDIN</p>
                        <p className="font-bold mt-2 text-sm">linkedin.com/in/daphne-manalansan</p>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}