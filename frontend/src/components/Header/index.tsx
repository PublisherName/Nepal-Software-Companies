"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiCode } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed z-50 w-full border-b border-gray-100 bg-white/80 shadow-sm backdrop-blur-md'>
      <div className='container mx-auto px-4'>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo/Site Name */}
          <Link href='/' className='group flex items-center gap-2'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg transition-all group-hover:shadow-blue-200'>
              <FiCode size={24} />
            </div>
            <span className='bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-2xl font-bold text-transparent transition-all group-hover:from-blue-700 group-hover:to-blue-900'>
              Software Companies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden items-center space-x-8 md:flex'>
            <Link
              href='/'
              className='group relative px-3 py-2 font-medium text-gray-600 transition-colors hover:text-blue-600'
            >
              <span className='relative z-10'>Home</span>
              <span className='absolute inset-0 origin-center scale-0 rounded-lg bg-blue-50 transition-transform group-hover:scale-100' />
            </Link>

            <Link
              href='/company'
              className='group relative px-3 py-2 font-medium text-gray-600 transition-colors hover:text-blue-600'
            >
              <span className='relative z-10'>Companies</span>
              <span className='absolute inset-0 origin-center scale-0 rounded-lg bg-blue-50 transition-transform group-hover:scale-100' />
            </Link>
            <div className='group relative'>
              <button className='group flex items-center gap-2 px-3 py-2 font-medium text-gray-600 transition-colors hover:text-blue-600'>
                <span>Categories</span>
                <FiChevronDown className='h-4 w-4 transition-transform duration-200 group-hover:rotate-180' />
              </button>
              <div className='invisible absolute -left-2 top-full w-56 translate-y-2 p-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                <div className='overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl'>
                  <Link
                    href='#'
                    className='flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  >
                    Technology
                  </Link>
                  <Link
                    href='#'
                    className='flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  >
                    Finance
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href='#'
              className='group relative px-3 py-2 font-medium text-gray-600 transition-colors hover:text-blue-600'
            >
              <span className='relative z-10'>About</span>
              <span className='absolute inset-0 origin-center scale-0 rounded-lg bg-blue-50 transition-transform group-hover:scale-100' />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='rounded-lg p-2 text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600 md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className='space-y-1 px-2 py-4'>
            <Link
              href='/'
              className='block rounded-lg px-4 py-3 font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600'
            >
              Home
            </Link>
            <Link
              href='/company'
              className='block rounded-lg px-4 py-3 font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600'
            >
              Companies
            </Link>
            <Link
              href='#'
              className='block rounded-lg px-4 py-3 font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600'
            >
              Categories
            </Link>
            <Link
              href='#'
              className='block rounded-lg px-4 py-3 font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600'
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
