'use client';

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Howitworks from '../components/Howitworks';
import OurClients from '../components/OurClients';
import FAQ from '../components/FAQ';
import WhatCustomerSay from '../components/WhatCustomerSay';

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>BCS Legal Services</title>
        <meta name="description" content="Expert legal services for startups and businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-1/2 bg-purple-700 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">One-Person Incorporation</h1>
            <p className="mb-6">Empower Your Solo Venture with Seamless OPC Registration Services.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Effortless Setup for Solo Entrepreneurs
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                All-Inclusive Services: Professional Tax, Domain Registration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Customized Benefits to Grow and Protect Your Business
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

        <Howitworks/>
        <div className="flex items-center justify-center pl-10 pr-10">
          <div className="text-center px-20">
            <h1 className="text-2xl font-bold mb-1">
              One-Person Company Registration: A Smart Choice for Solo Entrepreneurs
            </h1>
            <p className="text-lg">
              Starting a business is an exciting venture, but for solo entrepreneurs, choosing the right legal structure can be challenging. If you’re a one-person show looking to formalize your business, One-Person Company (OPC) registration might be the perfect solution. This relatively new business structure, introduced under the Companies Act, 2013, is designed specifically for individuals who want to run their business independently while enjoying the benefits of a corporate structure. In this article, we’ll dive into the essentials of One-Person Company registration, its benefits, and how BizSimpl can make the registration process hassle-free.
            </p>
          </div>
        </div>
        <div className="px-20 py-6">
          <h2 className="text-2xl font-bold mb-4">What is a One-Person Company?</h2>
          <p className="text-lg mb-6">
            A One-Person Company (OPC) is a unique business entity that allows a single individual to operate as a company, offering the benefits of limited liability and a separate legal identity. Essentially, an OPC gives a solo entrepreneur the flexibility of running their own company with the added advantage of being recognized as a corporate entity. This structure is particularly beneficial for small business owners and startups who want to establish a formal business without needing multiple shareholders or partners.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Benefits of One-Person Company Registration</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Limited Liability Protection:</strong> One of the most significant advantages of registering as an OPC is limited liability. As the sole owner, your personal assets are protected from the liabilities of the company. This means that in case of any debts or losses, your personal wealth remains secure.
            </li>
            <li className="mb-3">
              <strong>Separate Legal Entity:</strong> An OPC is a separate legal entity from its owner. This allows the company to enter into contracts, own property, and sue or be sued in its own name, providing a clear distinction between the business and the owner.
            </li>
            <li className="mb-3">
              <strong>Ease of Management:</strong> Running an OPC is simpler compared to other business structures. Since there is only one shareholder, decision-making is straightforward, and there’s no need to consult with other stakeholders. This makes it easier to implement changes and manage operations efficiently.
            </li>
            <li className="mb-3">
              <strong>Perpetual Succession:</strong> Unlike sole proprietorships, an OPC has perpetual succession, meaning the company continues to exist even if the owner passes away. The business can be transferred to a nominee, ensuring continuity.
            </li>
            <li className="mb-3">
              <strong>Tax Benefits and Compliance:</strong> OPCs are taxed as private limited companies, which means they can take advantage of various deductions and benefits available to corporate entities. Additionally, compliance requirements for OPCs are less stringent than for larger companies, making it easier for solo entrepreneurs to manage.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Steps to Register a One-Person Company</h2>
          <ol className="list-decimal ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Obtain a Digital Signature Certificate (DSC):</strong> The first step is to acquire a DSC for the proposed director. This digital signature will be used to sign electronic documents during the registration process.
            </li>
            <li className="mb-3">
              <strong>Apply for Director Identification Number (DIN):</strong> The sole director must apply for a DIN, which is a unique identification number issued by the Ministry of Corporate Affairs (MCA).
            </li>
            <li className="mb-3">
              <strong>Name Reservation:</strong> Choose a unique name for your OPC and reserve it through the MCA portal. The name should comply with naming guidelines to avoid any rejections.
            </li>
            <li className="mb-3">
              <strong>Draft and File Incorporation Documents:</strong> Prepare the Memorandum of Association (MOA) and Articles of Association (AOA) for your OPC, which outline the company’s objectives and internal rules. These documents, along with the incorporation form, must be submitted to the Registrar of Companies (ROC).
            </li>
            <li className="mb-3">
              <strong>Incorporation Certificate:</strong> Once the documents are approved, the ROC issues an incorporation certificate, officially recognizing your business as an OPC.
            </li>
            <li className="mb-3">
              <strong>Apply for PAN and TAN:</strong> Lastly, apply for a Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) for your company to handle tax-related matters.
            </li>
          </ol>
    
          <h2 className="text-2xl font-bold mb-4">Why Choose BizSimpl for OPC Registration?</h2>
          <p className="text-lg mb-6">
            Navigating the legal complexities of OPC registration can be daunting, especially for first-time entrepreneurs. That’s where BizSimpl comes in. With their expert guidance, BizSimpl ensures that your OPC registration process is smooth, efficient, and error-free. They handle all the intricate details, from document preparation to filing, so you can focus on building your business without worrying about the legal formalities.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-lg">
            One-Person Company registration is an excellent choice for solo entrepreneurs who want to enjoy the benefits of a corporate structure while retaining full control over their business. With limited liability, ease of management, and the potential for future growth, an OPC provides a solid foundation for your entrepreneurial journey. By partnering with BizSimpl, you can streamline the registration process and set your business on the path to success with confidence. Don’t hesitate—get your OPC registration done today and start reaping the benefits of this powerful business structure.
          </p>
        </div>

        <OurClients/>
        <section className="py-16 bg-gray-50">
        <WhatCustomerSay/>
         </section>
         <FAQ/>
      </main>
      <Footer/>
    </div>
  );
};

