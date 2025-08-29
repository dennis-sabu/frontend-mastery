'use client'
import { FaInstagram, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { useState } from 'react';
import {HiMenu, HiX} from 'react-icons/hi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className='flex justify-between items-center px-6 py-4 max-w-full overflow-hidden'>
        <div className='text-lg font-bold '>DEN</div>
        <div className='md:flex hidden items-center space-x-4'>
          <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 text-4xl">
            <FaInstagram />
          </Link>
          <Link href="https://github.com" target="_blank" className="hover:text-blue-900 text-4xl">
            <FaGithub />
          </Link>
          <Link
            href="/login"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 hover:bg-gradient-to-br  focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </Link>
        </div>

        <div className='md:hidden'>
          <button 
            className='text-2xl text-gray-700 hover:text-gray-900 transition-colors backdrop-blur-3xl'
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-3 right-3 bg-white shadow-lg rounded-xl border-2 md:hidden z-100 backdrop-blur-3xl ">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-pink-500 transition-colors">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="/login"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 hover:bg-gradient-to-br  focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      )}

      {/* <div className="h-screen bg-gradient-to-b from-pink-300 to-white absolute top-20 left-4 right-4 bg-white shadow-lg rounded-xl border  z-50">


      </div> */}
    </div>
  )
}

export default Header