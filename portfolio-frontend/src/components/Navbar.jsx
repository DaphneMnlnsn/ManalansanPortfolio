import { Link } from "react-scroll"
import logo from "/assets/logo.png"

function Navbar() {
  return (
    <nav className="flex justify-between items-center pb-6 px-10 py-2 pt-8 sticky top-0 z-50 w-full bg-[#0f1f2e]">
      <div className="font-bold ml-5"><img src={logo} className="w-8 h-8"/></div>
      <div className="space-x-8 text-m font-semibold font-heading pr-10">
        <Link to="about"
              smooth={true}
              duration={2000}
              offset={-80}
              className="relative font-heading font-semibold mt-2 hover:text-gray-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-gray-300 
                after:transition-all after:duration-300 
                hover:after:w-full cursor-pointer">About Me</Link>
        <Link to="works"
              smooth={true}
              duration={2000}
              offset={-80}
              className="relative font-heading font-semibold mt-2 hover:text-gray-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-gray-300 
                after:transition-all after:duration-300 
                hover:after:w-full cursor-pointer">Projects</Link>
        <Link to="contact"
              smooth={true}
              duration={2000}
              offset={-80}
              className="relative font-heading font-semibold mt-2 hover:text-gray-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-gray-300 
                after:transition-all after:duration-300 
                hover:after:w-full cursor-pointer">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar