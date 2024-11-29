'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for "Service" dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const dropdownRef = useRef(null); // Reference for "Service" dropdown
  const menuRef = useRef(null); // Reference for mobile menu

  const services = [
    { name: "Startup Incorporation", href: "/NewPage1" },
    { name: "Private Limited Incorporation", href: "/NewPage2" },
    { name: "One Person Incorporation", href: "/NewPage3" },
    { name: "LLP Registration", href: "/NewPage4" },
    { name: "GST Registration", href: "/NewPage5" },
    { name: "MSME Registration", href: "/NewPage6" },
    { name: "ISO Certification", href: "/NewPage7" },
    { name: "Coming Soon", href: "#", disabled: true },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleServiceClick = (href) => {
    if (href !== '#') {
      setIsServicesOpen(false);
      setIsMenuOpen(false);
      window.location.href = href;
    }
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex p-5 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/bcs_logo-removebg-preview.png"
            alt="BCS Logo"
            width={140}
            height={45.44}
            priority={true}
          />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-base justify-center">
          <a href="#" className="hover:text-gray-900">
            About Us
          </a>
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-purple-400 flex items-center"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Service
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-400 ${
                        service.disabled ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      role="menuitem"
                      onClick={() => handleServiceClick(service.href)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-gray-900">
            Pricing Plan
          </a>
          <a href="#" className="hover:text-gray-900">
            Resources
          </a>
        </nav>

        {/* Register button */}
        <button className="hidden md:inline-flex items-center bg-purple-600 border-0 py-2 px-4 rounded text-white hover:bg-purple-700">
          Register your Business
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 hover:text-purple-400"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white shadow-lg p-4 rounded-md space-y-4"
          ref={menuRef}
        >
          <a className="block text-base hover:text-gray-900">About Us</a>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center hover:text-purple-400"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Service
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-400 ${
                        service.disabled ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      role="menuitem"
                      onClick={() => handleServiceClick(service.href)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a className="block text-base hover:text-gray-900">Pricing Plan</a>
          <a className="block text-base hover:text-gray-900">Resources</a>
          <button className="w-full bg-purple-600 border-0 py-2 px-4 rounded text-white hover:bg-purple-700">
            Register your Business
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
