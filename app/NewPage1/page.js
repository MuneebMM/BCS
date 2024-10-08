'use client';

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const clients = [
    { name: "Client 1", logo: "/Bytebox Media.png" },
    { name: "Client 2", logo: "/Pulan_AI.png" },
    { name: "CAPUP", logo: "/CapUp 1.png" },
    { name: "Client 4", logo: "/Mathionix 1.png" },
    { name: "Adsquaretech", logo: "/Adsquaretech 1.png" },
    { name: "Client 6", logo: "/Communications aqua.png" },
    { name: "NINOLOJIK", logo: "/Nolojik 1.png" },
    { name: "Client 8", logo: "/Brighton Decor 1.png" },
    { name: "Brighton Decor", logo: "/Hello_Errors_1.png" },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "When we needed funding to initiate a new project, their team provided us with excellent options and guided us through the loan process seamlessly. The personalized attention and tailored financial solutions were exactly what we were looking for.",
      name: "David Lee",
      title: "Co-founder"
    },
    {
      quote: "The legal expertise provided by BCS was instrumental in protecting our intellectual property. Their team's thorough understanding of trademark laws gave us confidence in our brand's security.",
      name: "Sarah Johnson",
      title: "CEO"
    },
    {
      quote: "Incorporating our startup was a breeze with BCS. They handled all the paperwork efficiently, allowing us to focus on growing our business. Their knowledge of startup regulations was invaluable.",
      name: "Michael Chang",
      title: "Founder"
    },
    {
      quote: "BCS's GST filing service saved us countless hours and potential headaches. Their attention to detail ensured our compliance and gave us peace of mind regarding our tax obligations.",
      name: "Emily Patel",
      title: "Finance Director"
    }
  ];
  const resources = [
    {
      image: "/Rectangle 3463124.png",
      category: "Blog",
      title: "Optimize Operations with Mobile CMMS",
      description: "Here at Brightly, we recently wrapped up our annual user conference. It is always an engaging and...",
      link: "#"
    },
    {
      image: "/Rectangle 3463125.png",
      category: "Blog",
      title: "CMMS and Cybersecurity: Strengthening Your Defense in Industry",
      description: "The Case for Security Would you be comfortable knowing that complete strangers were wandering around...",
      link: "#"
    },
    {
      image: "/Rectangle 3463126.png",
      category: "Blog",
      title: "5 Reasons to Use Asset Management to Drive Your Community's Capital Plans",
      description: "How can a CMMS mobile app boost your efficiency and effectiveness with maintenance operations?",
      link: "#"
    }
  ];

  return (
    <div>
      <Head>
        <title>BCS Legal Services</title>
        <meta name="description" content="Expert legal services for startups and businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center pr-20">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pl-20">
            <Image
              src="/bcs_logo-removebg-preview.png" 
              alt="BCS Logo"
              width={140} 
              height={45.44} 
              priority={true} 
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-10 hover:text-gray-900">About Us</a>
            <div className="relative" ref={dropdownRef}>
              <button
                className="mr-10 hover:text-purple-400 flex items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Service
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-400 ${
                          service.disabled ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        role="menuitem"
                        onClick={(e) => {
                          if (service.disabled) {
                            e.preventDefault();
                          } else {
                            setIsServicesOpen(false);
                          }
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a className="mr-10 hover:text-gray-900">Pricing Plan</a>
            <a className="hover:text-gray-900">Resources</a>
          </nav>
          <button className="inline-flex items-center bg-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0 text-white">
            Register your Business
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <main>
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-1/2 bg-purple-700 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Start, Grow, and Succeed with Our Expert Legal Services</h1>
            <p className="mb-6">We simplify the complexities so you can concentrate on your vision.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Collect signatures, scan IDs, and print badges
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Maximize compliance across your facilities
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Add & adjust check-in requirements
              </li>
            </ul>
          </div>
          
          {/* Right Column */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Schedule a 15-Minute Intro Call</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">First Name*</label>
                  <input type="text" id="firstName" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Last Name*</label>
                  <input type="text" id="lastName" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">E-mail Id*</label>
                  <input type="email" id="email" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Phone Number*</label>
                  <input type="tel" id="phone" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="location" className="block mb-2">Location*</label>
                  <input type="text" id="location" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="lookingFor" className="block mb-2">Looking For*</label>
                  <input type="text" id="lookingFor" className="w-full p-2 border rounded" required />
                </div>
              </div>
              <div className="mt-6">
                <button type="submit" className=" bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">All Services</h2>
          
          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">Startup Incorporation</button>
            <Link href="/NewPage2">
              <button className="px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100">Private Limited Incorporation</button>
            </Link>
            <Link href="/NewPage3">
              <button className="px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100">One Person Incorporation</button>
            </Link>
            <Link href="/NewPage4">
              <button className="px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100">LLP Registration</button>
            </Link>
            <Link href="/NewPage5">
              <button className="px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100">GST Registration</button>
            </Link>
            <Link href="/NewPage6">
              <button className="px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100">MSME Registration</button>
            </Link>
            <Link href="/NewPage7">
              <button className="px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100">ISO Certification</button>
            </Link>
            <button className="px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100" disabled>Coming Soon</button>
          </div>
          
          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pvt. Ltd. Incorporation Card */}
            <div className="border rounded-lg p-6 shadow-sm hover:">
              <div className="flex items-center mb-4">
                <Image src="/Group.png" alt="OPC Icon" width={40} height={40} className="relative z-0"/>
                <Image src="/Ellipse 2.png" alt="OPC Icon" width={40} height={40} className="absolute top-0 left-0 z-10" />
                <h3 className="text-xl font-semibold ml-3">Pvt. Ltd. Incorporation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs.
              </p>
              <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full mx-auto block hover:bg-purple-700">Get Started</button>
            </div>

            {/* OPC Incorporation Card */}
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Image src="/Object.png" alt="OPC Icon" width={40} height={40} className="relative z-0"/>
                <Image src="/Ellipse 2.png" alt="OPC Icon" width={40} height={40} className="absolute top-0 left-0 z-10" />
                <h3 className="text-xl font-semibold ml-3">OPC Incorporation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The one person company helps startup entrepreneurs they can approach angel investors, venture capitalists for funding and easily convert their OPC into multi shareholder private limited company.
              </p>
              <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full mx-auto block hover:bg-purple-700">Get Started</button>
            </div>

            {/* LLP Incorporation Card */}
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Image src="/Objects.png" alt="OPC Icon" width={40} height={40} className="relative z-0"/>
                <Image src="/Ellipse 2.png" alt="OPC Icon" width={40} height={40} className="absolute top-0 left-0 z-10" />
                <h3 className="text-xl font-semibold ml-3">LLP Incorporation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Limited liability partnership is the modern business option for traditional firms operating as partnership.
              </p>
              <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full mx-auto block hover:bg-purple-700">Get Started</button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Don't just take it from us,<br />but from <span className="text-purple-600">our users</span></h2>
            
            <div className="flex justify-end mb-1">
              <div>
                <p className="text-4xl font-bold">2k+</p>
                <p className="text-gray-600 pr-4">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold">4.6</p>
                <p className="text-gray-600">From 12 rating</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What customers are saying</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="flex items-center">
                  
                  <div>
                    <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[activeTestimonial].title}</p>
                  </div>
                </div>
                <div className="mt-1 flex">
                  {testimonials.map((_, index) => (
                    <div
                    key={index}
                    className={`w-6 h-2 rounded ml-1 cursor-pointer transition-all duration-300 flex justify-end ${
                      index === activeTestimonial ? 'bg-purple-600 w-10 h-4' : 'bg-gray-300 w-5 h-4'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-purple-700 text-white py-10 px-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Looking for a premium accounting for your business?</h2>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold">
            Get Started
          </button>
        </div>
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Clients</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={64}
                    height={64}
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Resources</h2>
          <p className="text-center text-gray-600 mb-8">The latest news, technologies, and resources from our team.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={400}
                  height={200}
                  objectFit="cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{resource.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a href={resource.link} className="text-purple-600 font-semibold inline-flex items-center">
                    Read Now
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-purple-600 border border-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition duration-300">
              View all resources
            </button>
          </div>
        </div>
      </section>
      </main>
      <footer className="bg-[#1E293B] text-white">
        <div className="bg-purple-700 py-6 px-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h2 className="text-xl font-semibold">Talk to our best accounting expert now!</h2>
            <button className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold">
              Schedule a Meet
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/Group 1.png"
              alt="BCS Logo"
              width={140}
              height={45.44}
            />
            <div className="mt-6 relative">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="bg-[#2D3748] text-white py-2 pl-4 pr-10 rounded-full w-64"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <nav className="flex justify-center space-x-8 mb-8">
            <a href="#" className="hover:text-purple-400">Home</a>
            <a href="#" className="hover:text-purple-400">About Us</a>
            <a href="#" className="hover:text-purple-400">Service</a>
            <a href="#" className="hover:text-purple-400">Pricing Plan</a>
          </nav>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="bg-[#2D3748] p-2 rounded-full">
              <Image src="/List1.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="bg-[#2D3748] p-2 rounded-full">
              <Image src="/List2.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" className="bg-[#2D3748] p-2 rounded-full">
              <Image src="/List3.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="#" className="bg-[#2D3748] p-2 rounded-full">
              <Image src="/List4.png" alt="Twitter" width={24} height={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};


  
  