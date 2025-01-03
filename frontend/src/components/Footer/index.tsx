import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-gray-900 to-gray-800 text-gray-400'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
          {/* Company Info */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-white'>Software Companies</h3>
            <p className='text-sm leading-relaxed'>
              Your comprehensive directory of software companies worldwide.
              Discover, connect, and grow with the tech community.
            </p>
            <div className='flex space-x-4 pt-4'>
              <a
                href='#'
                className='transition-colors duration-200 hover:text-white'
              >
                <FiGithub size={20} />
              </a>
              <a
                href='#'
                className='transition-colors duration-200 hover:text-white'
              >
                <FiTwitter size={20} />
              </a>
              <a
                href='#'
                className='transition-colors duration-200 hover:text-white'
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-white'>Quick Links</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/company'
                  className='flex items-center gap-2 transition-colors duration-200 hover:text-white'
                >
                  Browse Companies
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='flex items-center gap-2 transition-colors duration-200 hover:text-white'
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='flex items-center gap-2 transition-colors duration-200 hover:text-white'
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-white'>Contact</h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2'>
                <FiMail className='text-gray-500' />
                <a
                  href='mailto:contact@softwarecompanies.com'
                  className='transition-colors duration-200 hover:text-white'
                >
                  contact@softwarecompanies.com
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <FiPhone className='text-gray-500' />
                <span>(555) 123-4567</span>
              </li>
              <li className='flex items-center gap-2'>
                <FiMapPin className='text-gray-500' />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-white'>Stay Updated</h4>
            <p className='text-sm'>
              Get the latest updates from our newsletter.
            </p>
            <form className='space-y-2'>
              <div className='relative'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full rounded-lg bg-gray-700 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <button
                type='submit'
                className='w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 border-t border-gray-700/50 pt-8 text-center text-sm'>
          <p>
            &copy; {new Date().getFullYear()} Software Companies Directory. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
