import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <div className="text-2xl font-bold">D</div>
      <div className="space-x-8 text-sm font-semibold font-heading">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/works" className="hover:text-gray-300">Works</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar