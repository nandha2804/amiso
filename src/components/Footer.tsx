import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoWide from '../assets/logo-wide.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-50 py-6 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-5 border-b border-gray-200 pb-8">
          {/* Company Info */}
          <div>
            <img src={logoWide} alt="logo" className='w-30 h-10 mb-8'/>
            <p className="text-gray-400">
              Washla customers has a tremendous opportunity to answer the call of logistic.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400">
              123 Clean Street, <br /> New York, NY 10001
            </p>
            <p className="text-gray-400">contact@amiso.com</p>
            <p className="text-gray-400">(555) 123-4567</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 flex">
              <ul className="text-gray-400">
                <li className="mb-2">Home</li>
                <li className="mb-2">About</li>
                <li className="mb-2">Services</li>
                <li className="mb-2">Team</li>
              </ul>
              <ul className="text-gray-400">
                <li className="mb-2">FAQ</li>
                <li className="mb-2">Contact Us</li>
                <li className="mb-2">Gallery</li>
                <li className="mb-2">Blogs</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest news, about our services.
            </p>
            <div className='flex mx-auto'>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-200 text-gray-700 rounded-l w-15"
              />
              <button className="bg-sky-500 text-white rounded-r hover:bg-sky-600 transition-colors">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-2 flex justify-between">
          <div>
            <p className="text-gray-400">&copy; 2025 amiso all rights reserved</p>
          </div>
          <div dir="rtl" className="flex space-x-4 text-gray-400 text-right items-center">
            <button 
              className="text-white bg-sky-500 squared-full rounded ml-3 w-10 h-10 flex items-center justify-center hover:bg-sky-600 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              &#94;
            </button>
            <div className="flex space-x-4">
              <FaFacebook className="w-4 h-4 hover:text-sky-500 cursor-pointer ml-4" />
              <FaTwitter className="w-4 h-4 hover:text-sky-500 cursor-pointer" />
              <FaInstagram className="w-4 h-4 hover:text-sky-500 cursor-pointer" />
              <FaLinkedin className="w-4 h-4 hover:text-sky-500 cursor-pointer -10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;