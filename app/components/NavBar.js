'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

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
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pl-20">
            <Image
              src="/bcs_logo-removebg-preview.png"
              alt="BCS Logo"
              width={140}
              height={45.44}
              priority={true}
            />
          </a>
          <nav className="hidden md:block md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-10 hover:text-gray-900">About Us</a>
            <div className="relative" ref={dropdownRef}>
              <button
                className="mr-10 hover:text-purple-400 flex items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Service
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isServicesOpen ? 'transform rotate-180' : ''
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
                <div
                  className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-400 ${
                          service.disabled
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
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
            <a className="mr-10 hover:text-gray-900">Pricing Plan</a>
            <a className="hover:text-gray-900">Resources</a>
          </nav>
          <button className="hidden md:inline-flex items-center bg-purple-600 border-0 py-2 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0 text-white">
            Register your Business
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="md:hidden">
            <button
              className={`block text-gray-600 hover:text-purple-400 focus:outline-none transition-transform duration-300 ${
                isMenuOpen ? 'transform rotate-90' : ''
              }`}
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div
          className="md:hidden bg-white shadow-lg p-4 rounded-md animate-grow-fade"
          ref={menuRef}
        >
          <div className="flex flex-col">
            <a className="mb-4 hover:text-gray-900">About Us</a>
            <div className="relative">
              <button
                className="mb-4 hover:text-purple-400 flex items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Service
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isServicesOpen ? 'transform rotate-180' : ''
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
                <div
                  className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-400 ${
                          service.disabled
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
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
            <a className="mb-4 hover:text-gray-900">Pricing Plan</a>
            <a className="hover:text-gray-900">Resources</a>
            <button className="mt-4 inline-flex items-center bg-purple-600 border-0 py-2 px-3 focus:outline-none hover:bg-purple-700 rounded text-base text-white">
              Register your Business
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;