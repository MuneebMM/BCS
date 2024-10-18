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
            <h1 className="text-4xl font-bold mb-4">MSME Registration</h1>
            <p className="mb-6">Unlock Growth with Swift MSME Registration and Government Benefits.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Quick Registration to Unlock Government Benefits
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Complete Paperwork Assistance for Stress-Free Processing
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Exclusive Offers and Financial Support for Small Businesses
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
              MSME Registration: Empowering Small Businesses for Big Opportunities
            </h1>
            <p className="text-lg">
              In India, the Micro, Small, and Medium Enterprises (MSME) sector plays a pivotal role in the country’s economy, contributing significantly to employment, production, and exports. If you’re running a small or medium-sized enterprise, obtaining MSME registration is a crucial step that can open up a wealth of opportunities for your business. This registration not only provides access to numerous government schemes but also helps in enhancing your business’s credibility and growth potential. In this article, we’ll explore the importance of MSME registration, the benefits it offers, and how BizSimpl can assist you in navigating the registration process smoothly.
            </p>
          </div>
        </div>
        <div className="px-20 py-6">
          <h1 className="text-2xl font-bold mb-4">What is MSME Registration?</h1>
          <p className="text-lg mb-6">
            MSME registration is a government initiative aimed at classifying and supporting small and medium-sized businesses. This registration is issued by the Ministry of Micro, Small, and Medium Enterprises and is available to businesses involved in manufacturing, production, processing, or preservation of goods and services. The registration is voluntary but highly beneficial, as it grants access to a range of subsidies, incentives, and schemes designed to promote business growth and sustainability.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Why is MSME Registration Important?</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Access to Government Schemes and Subsidies:</strong> Registered MSMEs can benefit from a variety of government schemes, including low-interest loans, capital investment subsidies, and tax rebates. These financial incentives can significantly reduce the cost of doing business and improve profitability.
            </li>
            <li className="mb-3">
              <strong>Easier Access to Credit:</strong> Financial institutions often offer preferential treatment to MSMEs, providing easier access to credit at lower interest rates. This is because registered MSMEs are considered less risky, thanks to government backing and support.
            </li>
            <li className="mb-3">
              <strong>Protection Against Delayed Payments:</strong> The MSME Act offers protection against delayed payments from buyers, ensuring that registered businesses receive timely compensation for their goods and services. This is particularly beneficial for small businesses that rely on consistent cash flow.
            </li>
            <li className="mb-3">
              <strong>Preference in Government Tenders:</strong> Registered MSMEs often receive preference in government procurement processes, making it easier to secure contracts and projects that can drive business growth.
            </li>
            <li className="mb-3">
              <strong>Enhanced Market Access:</strong> MSME registration enhances the credibility of your business, making it more attractive to customers, suppliers, and potential business partners. It also opens doors to new markets, both domestically and internationally.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Who Should Register as an MSME?</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Micro Enterprises:</strong> Investment in plant and machinery or equipment does not exceed ₹1 crore, and turnover does not exceed ₹5 crores.
            </li>
            <li className="mb-3">
              <strong>Small Enterprises:</strong> Investment in plant and machinery or equipment does not exceed ₹10 crores, and turnover does not exceed ₹50 crores.
            </li>
            <li className="mb-3">
              <strong>Medium Enterprises:</strong> Investment in plant and machinery or equipment does not exceed ₹50 crores, and turnover does not exceed ₹250 crores.
            </li>
          </ul>
          <p className="text-lg mb-6">
            Businesses that fit within these categories, whether they are engaged in manufacturing, trading, or service provision, are eligible for MSME registration.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Steps to Register as an MSME</h2>
          <ol className="list-decimal ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Prepare Necessary Documents:</strong> Before starting the registration process, ensure that you have all required documents, such as your Aadhar card, PAN card, and business address proof.
            </li>
            <li className="mb-3">
              <strong>Visit the Udyam Registration Portal:</strong> The registration is done online through the official Udyam Registration portal. Here, you’ll need to fill in details about your business, including its type, activity, and financials.
            </li>
            <li className="mb-3">
              <strong>Complete the Registration Form:</strong> Fill out the online form with accurate information. Make sure all details are correct, as any errors could delay the process or result in incorrect classification.
            </li>
            <li className="mb-3">
              <strong>Submit the Form:</strong> Once the form is filled, submit it through the portal. The system will automatically verify your information against government databases.
            </li>
            <li className="mb-3">
              <strong>Receive the Udyam Registration Certificate:</strong> Upon successful submission and verification, you’ll receive your Udyam Registration certificate. This certificate includes a unique identification number (Udyam Registration Number) and serves as proof of your MSME status.
            </li>
          </ol>
    
          <h2 className="text-2xl font-bold mb-4">Why Choose BizSimpl for MSME Registration?</h2>
          <p className="text-lg mb-6">
            Navigating the MSME registration process can be complex, especially for first-time applicants. This is where BizSimpl comes in. BizSimpl offers expert assistance to ensure that your registration is completed accurately and efficiently. With their support, you can avoid common pitfalls and ensure that your business is classified correctly, maximizing the benefits available to you.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-lg">
            MSME registration is a powerful tool for small and medium-sized businesses looking to grow and thrive in a competitive market. By obtaining this registration, you not only gain access to valuable government schemes and financial incentives but also enhance your business’s credibility and market access. With BizSimpl’s expert guidance, the registration process becomes a breeze, allowing you to focus on what matters most—building your business and achieving your goals. Don’t miss out on the benefits of MSME registration. Take the step today and empower your business for success.
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