import { Link } from "react-router-dom"
import logo from "/assets/logo.png"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-2 pt-9">
      <div className="font-bold ml-5"><img src={logo} className="w-8 h-8"/></div>
      <div className="space-x-8 text-m font-semibold font-heading pr-10">
        <Link to="/" className="relative font-heading font-semibold mt-2 hover:text-gray-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-gray-300 
                after:transition-all after:duration-300 
                hover:after:w-full">Home</Link>
        <Link to="/works" className="relative font-heading font-semibold mt-2 hover:text-gray-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-gray-300 
                after:transition-all after:duration-300 
                hover:after:w-full">Works</Link>
        <Link to="/about" className="relative font-heading font-semibold mt-2 hover:text-gray-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-gray-300 
                after:transition-all after:duration-300 
                hover:after:w-full">About</Link>
        <Link to="/contact" className="relative font-heading font-semibold mt-2 hover:text-gray-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-gray-300 
                after:transition-all after:duration-300 
                hover:after:w-full">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar