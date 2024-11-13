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

      <NavBar />

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

        <Howitworks/>
        <div className="px-4 sm:px-10 md:px-20">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            GST Registration: A Simple Guide for Your Business
          </h1>
          <p className="text-base sm:text-lg mb-4">
            In today’s business environment, ensuring compliance with tax laws is crucial. One of the most important steps for any business in India is obtaining Goods and Services Tax (GST) registration. Whether you’re a startup, a small business, or a growing enterprise, registering for GST is not just a legal requirement but also a smart business move. In this article, we’ll walk you through the essentials of GST registration and explain why partnering with BizSimpl can make the process straightforward and hassle-free.
          </p>
        </div>
        
        
        <div className="px-4 sm:px-10 md:px-20 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">What is GST Registration?</h1>
          <p className="text-base sm:text-lg mb-6">
            GST registration is the process by which a business gets registered under the Goods and Services Tax Act in India. Once registered, the business receives a unique GST Identification Number (GSTIN), which is used to collect and remit taxes on behalf of the government. This registration is mandatory for businesses with an annual turnover exceeding a certain threshold, as well as for those involved in interstate commerce, e-commerce, and other specified categories.
          </p>
        
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Why is GST Registration Important?</h2>
          <ul className="list-disc ml-5 text-base sm:text-lg mb-6">
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
        
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Who Needs GST Registration?</h2>
          <ul className="list-disc ml-5 text-base sm:text-lg mb-6">
            <li className="mb-3">Businesses with an annual turnover exceeding ₹20 lakh (₹10 lakh in some states).</li>
            <li className="mb-3">Entities involved in interstate trade.</li>
            <li className="mb-3">E-commerce operators and online sellers.</li>
            <li className="mb-3">Service providers like consultants, freelancers, and digital marketers if their turnover exceeds the threshold.</li>
          </ul>
        
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Steps to Register for GST</h2>
          <ol className="list-decimal ml-5 text-base sm:text-lg mb-6">
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
        
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Why Choose BizSimpl for GST Registration?</h2>
          <p className="text-base sm:text-lg mb-6">
            Navigating the complexities of GST registration can be overwhelming, especially for new businesses. BizSimpl offers expert assistance to ensure that your registration process is smooth and error-free. With their guidance, you can focus on growing your business while they handle the technicalities of tax compliance.
          </p>
        
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-base sm:text-lg">
            GST registration is a crucial step for any business operating in India. It not only ensures legal compliance but also opens up new avenues for growth and expansion. By partnering with BizSimpl, you can make the GST registration process quick and hassle-free, allowing you to concentrate on what really matters—running your business successfully.
            <br />
            Take the first step towards a compliant and thriving business by getting your GST registration done today!
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

