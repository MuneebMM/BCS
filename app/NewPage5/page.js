'use client';

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp, ChevronDown } from 'lucide-react';

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
  const faqData = [
    {
      question: "How does the forecasting and budgeting feature work?",
      answer: "Our platform's forecasting and budgeting tools allow you to project future financial scenarios based on historical data and current trends. You can set financial goals, allocate resources efficiently, and track your progress over time."
    },
    {
      question: "How does BizSimpl support businesses?",
      answer: "BizSimpl supports businesses in various ways. Please expand this section for more details."
    },
    {
      question: "Is BizSimpl secure for online transactions?",
      answer: "BizSimpl takes security seriously. Please expand this section for more information on our security measures."
    },
    {
      question: "How quickly can businesses access funds through BizSimpl?",
      answer: "The fund access process through BizSimpl is designed to be efficient. Expand this section for more details on timelines."
    },
    {
      question: "Can I set up recurring payments and automate financial tasks with BizSimpl?",
      answer: "Yes, BizSimpl offers features for recurring payments and task automation. Expand this section for more information."
    }
  ];
  
  const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
      >
        <span className="text-sm font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-sm text-gray-500">{answer}</p>
      )}
    </div>
  );
  const [openIndex, setOpenIndex] = useState(0);
  const steps = [
    {
      imageSrc: "/icon.png",
      title: "Fill Form",
      description: "Simply fill the above form to get started."
    },
    {
      imageSrc: "/icon (1).png",
      title: "Call to discuss",
      description: "Our expert will connect with you & complete legalities."
    },
    {
      imageSrc: "/icon (2).png",
      title: "Get Incorporation",
      description: "Get your Company Incorporation"
    }
  ];
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
            <h1 className="text-4xl font-bold mb-4">GST Registration</h1>
            <p className="mb-6">Get GST-Ready in No Time – Complete Registration and Compliance Assistance.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Hassle-Free GST Registration Done Quickly
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                End-to-End Documentation and Compliance Handling
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Ongoing Support to Keep Your Business Tax-Compliant
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

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-4">Here's How It Works</h2>
          <p className="text-center text-gray-600 mb-12">Get your Company Registration in 3 steps</p>
      
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs">
                <div>
                  <Image 
                    src={step.imageSrc} 
                    alt={step.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2 text-center">{step.title}</h3>
                <p className="text-center text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block">
                    <div className="w-12 h-1 bg-purple-300 mt-8 mx-auto"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center pl-10 pr-10">
          <div className="text-center px-20">
            <h1 className="text-2xl font-bold mb-1">
              GST Registration: A Simple Guide for Your Business
            </h1>
            <p className="text-lg">
              In today’s business environment, ensuring compliance with tax laws is crucial. One of the most important steps for any business in India is obtaining Goods and Services Tax (GST) registration. Whether you’re a startup, a small business, or a growing enterprise, registering for GST is not just a legal requirement but also a smart business move. In this article, we’ll walk you through the essentials of GST registration and explain why partnering with BizSimpl can make the process straightforward and hassle-free.
            </p>
          </div>
        </div>
        <div className="px-20 py-6">
          <h1 className="text-2xl font-bold mb-4">What is GST Registration?</h1>
          <p className="text-lg mb-6">
            GST registration is the process by which a business gets registered under the Goods and Services Tax Act in India. Once registered, the business receives a unique GST Identification Number (GSTIN), which is used to collect and remit taxes on behalf of the government. This registration is mandatory for businesses with an annual turnover exceeding a certain threshold, as well as for those involved in interstate commerce, e-commerce, and other specified categories.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Why is GST Registration Important?</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Legal Compliance:</strong> GST registration is mandatory for businesses that meet the prescribed turnover threshold. Failing to register can result in penalties and legal complications.
            </li>
            <li className="mb-3">
              <strong>Input Tax Credit:</strong> Registered businesses can claim input tax credit on their purchases, which helps reduce their overall tax liability. This benefit is only available to businesses with a valid GSTIN.
            </li>
            <li className="mb-3">
              <strong>Expansion Opportunities:</strong> GST registration enables businesses to operate across state lines without worrying about multiple state-level taxes. This simplifies interstate transactions and helps businesses expand their reach.
            </li>
            <li className="mb-3">
              <strong>Enhanced Credibility:</strong> A GST-registered business is seen as more credible and trustworthy, which can attract more customers and business partners. It also instills confidence in your customers, knowing that your business complies with government regulations.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Who Needs GST Registration?</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">Businesses with an annual turnover exceeding ₹20 lakh (₹10 lakh in some states).</li>
            <li className="mb-3">Entities involved in interstate trade.</li>
            <li className="mb-3">E-commerce operators and online sellers.</li>
            <li className="mb-3">Service providers like consultants, freelancers, and digital marketers if their turnover exceeds the threshold.</li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Steps to Register for GST</h2>
          <ol className="list-decimal ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Gather Required Documents:</strong> Before you begin, ensure you have all necessary documents, including your PAN card, Aadhaar card, business address proof, and bank account details.
            </li>
            <li className="mb-3">
              <strong>Visit the GST Portal:</strong> The official GST portal is where you’ll need to submit your application. If you’re unsure about navigating the process, BizSimpl can assist you with every step, ensuring accuracy and compliance.
            </li>
            <li className="mb-3">
              <strong>Fill Out the Application Form:</strong> Complete the application form on the GST portal with your business details, including the nature of your business, turnover, and other required information.
            </li>
            <li className="mb-3">
              <strong>Upload Supporting Documents:</strong> Submit the required documents online. Make sure all the information is accurate to avoid delays in the process.
            </li>
            <li className="mb-3">
              <strong>Verification:</strong> Once your application is submitted, it will be verified by the tax authorities. They may request additional information or documents if needed.
            </li>
            <li className="mb-3">
              <strong>Receive Your GSTIN:</strong> Upon successful verification, you’ll receive your GSTIN, which you can use for all future tax filings and business transactions.
            </li>
          </ol>
    
          <h2 className="text-2xl font-bold mb-4">Why Choose BizSimpl for GST Registration?</h2>
          <p className="text-lg mb-6">
            Navigating the complexities of GST registration can be overwhelming, especially for new businesses. BizSimpl offers expert assistance to ensure that your registration process is smooth and error-free. With their guidance, you can focus on growing your business while they handle the technicalities of tax compliance.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-lg">
            GST registration is a crucial step for any business operating in India. It not only ensures legal compliance but also opens up new avenues for growth and expansion. By partnering with BizSimpl, you can make the GST registration process quick and hassle-free, allowing you to concentrate on what really matters—running your business successfully.
            <br />
            Take the first step towards a compliant and thriving business by getting your GST registration done today!
          </p>
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
                    width={120}
                    height={60}
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="max-w-6xl mx-auto px-4 py-5">
            <div>
              <h3 className="flex align-center justify-center text-2xl font-semibold mb-6">What customers are saying</h3>
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
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-1">FAQ</h2>
            <p className="text-xl text-center text-gray-500 mb-8">
              Learn more about BizSimpl by user Questions
            </p>
            <div className="mt-12">
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={index === openIndex}
                  toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
              ))}
            </div>
          </div>
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

