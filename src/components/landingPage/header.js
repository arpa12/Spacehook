import React, { useState } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-black-600">Spacehook</div>

          {/* Hamburger Menu (visible on small screens) */}
          <div className="md:hidden">
            <button
              className="text-gray-800 text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Navigation and Button */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Center Aligned Navigation */}
            <nav className="flex-1 flex justify-center space-x-8 text-gray-800 font-medium">
              <a href="/" className="hover:text-gray-600">
                Jupiter
              </a>
              <a href="/contact" className="hover:text-gray-600">
                Contact
              </a>
            </nav>
            {/* Right Aligned Button */}
            <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition flex items-center">
              Get Started for Free <IoRocketOutline className="ml-2" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation and Button */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute left-0 right-0 top-full bg-white shadow-md px-4 py-2 z-50`}
        >
          <nav className="flex flex-col space-y-2 mb-4">
            <a href="#jupiter" className="py-2 px-4 hover:bg-gray-100 rounded">
              Jupiter
            </a>
            <a href="#contact" className="py-2 px-4 hover:bg-gray-100 rounded">
              Contact
            </a>
          </nav>
          <button className="w-full bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition flex items-center justify-center">
            Get Started for Free <IoRocketOutline className="ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
