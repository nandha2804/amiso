import React from 'react';
import { Phone } from 'lucide-react';
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCalculator } from "react-icons/fa";
import logoWide from '../assets/logo-wide.png';

const Header: React.FC = () => {
  return (
    <>
      {/* Top Navigation */}
      <nav className="text-white relative w-full">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-4 h-4" />
              <span>contact@amiso.com</span>
            </div>
          </div>

          {/* Social Media & Quote Button */}
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <FaFacebook className="w-4 h-4 hover:text-sky-400 cursor-pointer" />
            <FaTwitter className="w-4 h-4 hover:text-sky-400 cursor-pointer" />
            <FaInstagram className="w-4 h-4 hover:text-sky-400 cursor-pointer" />
            <FaLinkedin className="w-4 h-4 hover:text-sky-400 cursor-pointer" />
            <button className="flex items-center space-x-2 bg-blue-500 rounded-full px-4 py-2 hover:bg-blue-300 active:bg-blue-450 shadow-md transition">
              <FaCalculator className="w-4 h-4" />
              <span>Get a Quote</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="container mx-auto text-white py-4 mb-16 relative z-10 bg-sky-50 bg-opacity-50">
        <div className="px-4 sm:px-8 lg:px-16 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={logoWide}
              className="w-28 h-auto"
              alt="Logo"
            />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden">
            <button id="menu-btn" className="text-teal-800 focus:outline-none">
              ☰
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-4">
            <ul className="flex space-x-8 text-teal-800 font-bold">
              <li><a href="#home" className="hover:text-sky-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-600 transition-colors">About</a></li>
              <li><a href="#page" className="hover:text-sky-600 transition-colors">Page</a></li>
              <li><a href="#gallery" className="hover:text-sky-600 transition-colors">Gallery</a></li>
              <li><a href="#blog" className="hover:text-sky-600 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden sm:hidden bg-white text-teal-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#home" className="hover:text-sky-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-sky-600 transition-colors">About</a></li>
            <li><a href="#page" className="hover:text-sky-600 transition-colors">Page</a></li>
            <li><a href="#gallery" className="hover:text-sky-600 transition-colors">Gallery</a></li>
            <li><a href="#blog" className="hover:text-sky-600 transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
