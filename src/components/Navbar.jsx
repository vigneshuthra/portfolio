import React from 'react'
import logo from "../assets/Uv-logo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='fixed top-0 right-2 left-2 bg-neutral-950 z-50 flex items-center justify-between py-6 shadow-md'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt='logo' className='mx-2 w-10'></img>

      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
      {/* LinkedIn Icon with Link */}
      <a
        href="https://www.linkedin.com/in/vignesh-uthrapathy-3a56489b" // Replace with your LinkedIn profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-500 hover:text-cyan-600 transition-colors duration-300"
      >
        <FaLinkedin />
      </a>
      
      {/* GitHub Icon with Link */}
      <a
        href="https://github.com/vigneshuthra" // Replace with your GitHub profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-500 hover:text-cyan-600 transition-colors duration-300"
      >
        <FaGithub />
      </a>
    </div>
    </nav>
  )
}

export default Navbar