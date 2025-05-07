"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Siswa',
      path: '/siswa',
    },
    {
      name: 'Guru',
      path: '/guru',
    },
    {
      name: 'Galeri',
      path: '/galeri',
    },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* Logo */}
          <Link href="/" className="font-poppins text-2xl font-semibold text-white">
            RPL 48
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-white hover:text-gray-700 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {isOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 flex flex-col space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-700 hover:text-blue-500 transition duration-300 block py-2"
              onClick={toggleNavbar} // Close menu after clicking
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;