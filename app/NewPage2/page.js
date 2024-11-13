'use client';

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
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

      <NavBar/>

      <main>
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-1/2 bg-purple-700 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Private Limited Incorporation</h1>
            <p className="mb-6">Launch Your Dream Company in Just 15 Days – Quick, Simple, and Nationwide.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Swift Registration in 15 Days
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Complete Package: PAN, TAN, PF, and More
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Exclusive Bonuses Worth Up to ₹2 Lakhs
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
        <div className="px-4 sm:px-10 md:px-20">
            <h1 className="text-xl sm:text-2xl font-bold mb-4">
              Pvt. Ltd. Company Registration: Your Pathway to a Structured Business
            </h1>
            <p className="text-base sm:text-lg mb-4">
              If you’re an entrepreneur looking to start a new venture in India, one of the most reliable and popular business structures is a Private Limited (Pvt. Ltd.) Company. Registering your business as a Pvt. Ltd. Company not only provides a solid legal foundation but also offers numerous advantages that can set your business up for success. In this guide, we’ll walk you through the essentials of Pvt. Ltd. Company registration, the benefits it offers, and why you should consider working with BizSimpl to simplify the process.
            </p>
        </div>

        <div className="px-4 sm:px-10 md:px-20">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            What is Pvt. Ltd. Company Registration?
          </h1>
          <p className="text-base sm:text-lg mb-4">
            Pvt. Ltd. Company registration is the process of legally incorporating your business under the Companies Act, 2013. A Pvt. Ltd. Company is a separate legal entity, meaning it has its own identity distinct from its shareholders. This structure is ideal for small to medium-sized businesses looking to grow, attract investors, and establish credibility.
          </p>
          <p className="text-base sm:text-lg">
            A Pvt. Ltd. Company can have up to 200 shareholders and must have at least two directors. It offers limited liability protection, meaning that the personal assets of the shareholders are protected from the company’s liabilities. This makes it a safer option for business owners who want to protect their personal wealth while running a business.
          </p>
        </div>

        <div className="px-4 py-4 sm:px-10 md:px-20 md:py-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            Benefits of Registering a Pvt. Ltd. Company
          </h1>
        
          <ul className="list-disc ml-5 text-base sm:text-lg mb-6">
            <li className="mb-3">
              <strong>Limited Liability Protection:</strong> One of the key benefits of a Pvt. Ltd. Company is that the liability of shareholders is limited to the amount of their investment in the company. This means personal assets are safeguarded against any financial risks faced by the business.
            </li>
            <li className="mb-3">
              <strong>Ease of Fundraising:</strong> Pvt. Ltd. Companies can easily attract investors, including venture capitalists and angel investors, as they are seen as more structured and credible than unregistered businesses. This makes raising funds for expansion much easier.
            </li>
            <li className="mb-3">
              <strong>Separate Legal Entity:</strong> Once registered, a Pvt. Ltd. Company is considered a separate legal entity, which can own property, incur debt, and enter into contracts in its own name. This helps in building a professional image and trust among clients and partners.
            </li>
            <li className="mb-3">
              <strong>Perpetual Existence:</strong> The existence of a Pvt. Ltd. Company is not dependent on the life of its shareholders or directors. It continues to exist even if there is a change in ownership, ensuring business continuity.
            </li>
            <li className="mb-3">
              <strong>Tax Benefits:</strong> Pvt. Ltd. Companies are eligible for various tax benefits and deductions under the Income Tax Act, 1961, which can significantly reduce the tax burden on the business.
            </li>
          </ul>
        
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Steps to Register a Pvt. Ltd. Company</h2>
        
          <ol className="list-decimal ml-5 text-base sm:text-lg mb-6">
            <li className="mb-3">
              <strong>Obtain Digital Signature Certificates (DSC):</strong> The first step is to obtain DSCs for all directors, which are used to sign electronic documents.
            </li>
            <li className="mb-3">
              <strong>Apply for Director Identification Number (DIN):</strong> Each director must have a unique DIN, which can be applied for online.
            </li>
            <li className="mb-3">
              <strong>Name Reservation:</strong> Choose a unique name for your company and reserve it through the Ministry of Corporate Affairs (MCA) portal. The name should not be identical or similar to an existing company or trademark.
            </li>
            <li className="mb-3">
              <strong>Draft and File Incorporation Documents:</strong> Prepare the Memorandum of Association (MOA) and Articles of Association (AOA), which outline the company’s objectives and internal rules. These documents, along with the incorporation form, must be filed with the MCA.
            </li>
            <li className="mb-3">
              <strong>Incorporation Certificate:</strong> Once the documents are approved, the Registrar of Companies (ROC) issues an incorporation certificate, officially recognizing your company as a Pvt. Ltd. entity.
            </li>
            <li className="mb-3">
              <strong>Apply for PAN and TAN:</strong> Finally, apply for a Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) for your company.
            </li>
          </ol>
        
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Why Choose BizSimpl for Pvt. Ltd. Company Registration?
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Navigating the legal intricacies of company registration can be overwhelming, especially for first-time entrepreneurs. That’s where BizSimpl comes in. With their expert guidance, you can simplify the registration process and ensure that your company is set up correctly from the start. BizSimpl offers comprehensive support, from choosing the right business structure to filing the necessary documents, making the entire process seamless and stress-free.
          </p>
        
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-base sm:text-lg">
            Registering your business as a Pvt. Ltd. Company is a smart move that offers numerous advantages, including limited liability, ease of fundraising, and enhanced credibility. By partnering with BizSimpl, you can navigate the registration process with ease, allowing you to focus on what really matters—growing your business. Don’t delay—start your Pvt. Ltd. Company registration today and pave the way for your business’s success.
          </p>
        </div>



        <OurClients/>
        <section className="py-16 bg-gray-50">
        <WhatCustomerSay/>
         </section>
          <FAQ/>
      </main>
      ?<Footer/>
    </div>
  );
};

