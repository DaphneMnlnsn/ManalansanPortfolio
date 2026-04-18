import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import SlickSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from "framer-motion"

const Slider = SlickSlider.default || SlickSlider;

export default function FeaturedProjects(){
    const projectScreenshots = [
        { img: "src/assets/cater_ui/landing.jpg", title: "CaterXperience", subtitle: "CAPSTONE PROJECT", tech: "REACT | LARAVEL | MYSQL", desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs." },
        { img: "src/assets/cater_ui/dashboard.jpg", tech: "DASHBOARD", desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management." },
        { img: "src/assets/cater_ui/bookings.jpg", tech: "BOOKINGS", desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly." },
        { img: "src/assets/cater_ui/event.jpg", tech: "EVENT DETAILS", desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans." },
        { img: "src/assets/cater_ui/menu.jpg", tech: "MENU", desc: "The menu section lets users view and manage food options, including their categorie and pictures." },
        { img: "src/assets/cater_ui/packages.jpg", tech: "PACKAGES", desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons." },
        { img: "src/assets/cater_ui/client.jpg", tech: "CLIENT MANAGEMENT", desc: "The client management interface keeps track of customer profiles, contact information, and booking history." },
        { img: "src/assets/cater_ui/staff.jpg", tech: "STAFFF MANAGEMENT", desc: "This page shows the staff roster, their roles, and schedules, making team management more organized." },
        { img: "src/assets/cater_ui/layout.jpg", tech: "2D VENUE LAYOUT", desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually." },
        { img: "src/assets/cater_ui/audit.jpg", tech: "AUDIT LOG", desc: "The audit log records system activity and changes, helping maintain accountability and track actions." },
    ];

    const NextArrow = ({ onClick }) => (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowCircleRight} className="text-white w-5 h-5" />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowCircleLeft} className="text-white w-5 h-5" />
        </div>
    );

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "18%",
        slidesToShow: 1,
        speed: 500,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section className="px-10 py-14 pb-15 grid md:grid-cols-2">
                <div className="pl-10">
                    <p className="font-heading font-semibold text-sm text-gray-400 mb-2">— FEATURED PROJECTS</p>
                    <h2 className="text-3xl font-heading font-bold mt-10 mb-6">
                        The Best Experiences Lie in <br/> Works
                    </h2>
                    <p className="font-body font-medium text-gray-300 text-sm leading-relaxed text-justify mt-10 mb-4 max-w-[25rem]">
                        I’ve worked on several web-based projects that were actually requested by clients, so everything I built had a real purpose. 
                        Most of the time I focused on the backend: setting up databases, creating APIs, and making sure everything
                        runs smoothly. However, I also jumped into frontend work to connect everything and make it usable. Doing both gave me a better 
                        sense of how the whole system comes together and helped me figure out how to solve problems more efficiently while working 
                        with a team.
                    </p>
                    <Link to="/contact" className="group inline-block relative font-heading font-semibold mt-10 text-sm hover:text-gray-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-gray-300 
                        after:transition-all after:duration-300 
                        hover:after:w-full">
                        See all Projects <FontAwesomeIcon icon={faArrowRight} className="pl-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                </div>

                <div className="project-slider relative px-[8%] py-5 overflow-hidden"> 
                    <Slider {...settings}>
                        {projectScreenshots.map((proj, idx) => (
                            <div key={idx} className="px-4 outline-none">
                                <div className="bg-[#0b1722] p-8 rounded-2xl text-justify flex flex-col items-center transition-all duration-500 slide-inner min-h-[350px] w-[350px]">
                                    <h3 className="text-l font-heading tracking-wider font-semibold mb-1 text-gray-300">{proj.title}</h3>
                                    <p className="text-[10px] tracking-wider font-semibold font-heading text-gray-400 mb-6 uppercase">{proj.subtitle}</p>
                                    
                                    <div className="w-64 max-h-40 overflow-hidden mb-6 rounded-lg">
                                        <center><img src={proj.img} alt={proj.title} className="w-full h-full object-cover object-top" /></center>
                                    </div>

                                    <p className="text-xs text-gray-400 mb-4 font-heading font-bold tracking-widest uppercase">{proj.tech}</p>
                                    <p className="text-xs text-gray-300 font-body font-medium max-w-xs leading-relaxed">{proj.desc}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </motion.section>
    )
}