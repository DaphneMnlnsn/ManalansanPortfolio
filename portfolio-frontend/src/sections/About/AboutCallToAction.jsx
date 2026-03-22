export default function AboutCallToAction(){
    return(
        <section className="bg-[#0b1722] px-10 py-16 grid md:grid-cols-2 gap-10">
            <div>
                <h2 className="text-2xl font-heading font-bold mb-2">View my Projects</h2>
                <p className="font-medium text-sm text-gray-400 mb-4">
                    Explore the projects I have worked on.
                </p>
                <button className="font-heading font-semibold underline">See all Projects →</button>
            </div>

            <div>
                <h2 className="text-2xl font-heading font-bold mb-2">
                    Interested in Working Together?
                </h2>
                <p className="font-medium text-sm text-gray-400 mb-4">
                    Want to collaborate or hire me?
                </p>
                <button className="font-heading font-semibold underline">Contact Me →</button>
            </div>
        </section>
    )
}