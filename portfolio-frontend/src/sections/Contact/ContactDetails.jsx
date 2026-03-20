export default function ContactDetails(){
    return(
        <section className="bg-[#0b1722] px-10 py-16">
            <p className="text-sm text-gray-400 mb-10">— CONTACT DETAILS</p>

            <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
                <div className="text-3xl mb-2">🐙</div>
                <p className="text-xs text-gray-400">GITHUB</p>
                <p className="mt-2 text-sm">github.com/DaphneMlnsn</p>
            </div>

            <div>
                <div className="text-3xl mb-2">📧</div>
                <p className="text-xs text-gray-400">EMAIL</p>
                <p className="mt-2 text-sm">daphnemanalansan1213@gmail.com</p>
            </div>

            <div>
                <div className="text-3xl mb-2">📞</div>
                <p className="text-xs text-gray-400">PHONE</p>
                <p className="mt-2 text-sm">+63 956 624 5046</p>
            </div>

            <div>
                <div className="text-3xl mb-2">💼</div>
                <p className="text-xs text-gray-400">LINKEDIN</p>
                <p className="mt-2 text-sm">linkedin.com/in/daphne-manalansan</p>
            </div>
            </div>
        </section>
    )
}