import React from 'react'
import logo from "../assets/Uv-logo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt='logo' className='mx-2 w-10'></img>

      </div>
      <div className='flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>

      </div>
    </nav>
  )
}

export default Navbar