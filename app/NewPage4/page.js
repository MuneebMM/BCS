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
            <h1 className="text-4xl font-bold mb-4">LLP Registration Incorporation</h1>
            <p className="mb-6">Start Your Partnership Hassle-Free with Complete LLP Registration Support.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Simple and Efficient Partnership Formation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Comprehensive Support: PAN, TAN, Compliance Assistance
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Additional Perks: Expert Advice and Essential Business Tools
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
              LLP Registration: A Modern Approach to Business Partnership
            </h1>
            <p className="text-lg">
              In today’s dynamic business environment, entrepreneurs are constantly seeking business structures that offer both flexibility and legal protection. Limited Liability Partnership (LLP) registration is an increasingly popular choice among small and medium-sized enterprises in India. Combining the benefits of both a company and a partnership, an LLP is ideal for professionals and business owners who want to manage their operations with a mix of limited liability and operational flexibility. This article will guide you through the essentials of LLP registration, the benefits it offers, and how BizSimpl can help make the registration process seamless.
            </p>
          </div>
        </div>
        <div className="px-20 py-6">
          <h1 className="text-2xl font-bold mb-4">What is LLP Registration?</h1>
          <p className="text-lg mb-6">
            LLP registration refers to the process of legally establishing a Limited Liability Partnership under the LLP Act, 2008. An LLP is a unique business structure that allows partners to enjoy the benefits of limited liability, much like shareholders in a private limited company, while also offering the operational flexibility of a traditional partnership.
          </p>
          <p className="text-lg mb-6">
            In an LLP, each partner’s liability is limited to their agreed contribution, meaning personal assets are generally protected from business debts. Additionally, an LLP has a separate legal identity from its partners, which allows the partnership to own property, enter into contracts, and sue or be sued in its own name.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Benefits of LLP Registration</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Limited Liability Protection:</strong> One of the most significant advantages of registering as an LLP is that partners are only liable for the business’s debts up to the extent of their contributions. This protects personal assets from being used to cover business losses or liabilities.
            </li>
            <li className="mb-3">
              <strong>Operational Flexibility:</strong> Unlike a private limited company, an LLP does not require a board of directors or complicated management structures. Partners have the freedom to manage the business directly, making decision-making processes quicker and more straightforward.
            </li>
            <li className="mb-3">
              <strong>Separate Legal Entity:</strong> An LLP enjoys the benefits of a separate legal identity, which means the partnership can continue to exist even if partners change. This ensures continuity and stability in the business.
            </li>
            <li className="mb-3">
              <strong>Tax Benefits:</strong> LLPs are taxed as partnerships, which can often result in lower tax liabilities compared to other business structures. They are also not subject to dividend distribution tax, which is a significant advantage over private limited companies.
            </li>
            <li className="mb-3">
              <strong>Ease of Compliance:</strong> The compliance requirements for an LLP are less stringent than those for a private limited company. There are fewer mandatory filings, and the overall regulatory burden is lower, making it easier and more cost-effective to maintain compliance.
            </li>
            <li className="mb-3">
              <strong>Attracting Investors:</strong> LLPs can attract investment more easily than traditional partnerships due to their structured format and limited liability, making them an appealing choice for venture capitalists and other investors.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Steps to Register an LLP</h2>
          <ol className="list-decimal ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Obtain Digital Signature Certificate (DSC):</strong> All designated partners must have a DSC, which is used to sign documents electronically during the registration process.
            </li>
            <li className="mb-3">
              <strong>Apply for Director Identification Number (DIN):</strong> Each designated partner must also obtain a DIN, a unique identification number required for registration.
            </li>
            <li className="mb-3">
              <strong>Name Reservation:</strong> Choose a unique name for your LLP and reserve it through the Ministry of Corporate Affairs (MCA) portal. The name must not be identical or similar to an existing company or LLP.
            </li>
            <li className="mb-3">
              <strong>Draft and File Incorporation Documents:</strong> Prepare the LLP agreement, which outlines the rights, duties, and profit-sharing ratio among the partners. This agreement, along with other necessary forms, must be filed with the Registrar of Companies (ROC).
            </li>
            <li className="mb-3">
              <strong>Incorporation Certificate:</strong> Once the ROC approves the documents, you will receive the LLP incorporation certificate, which serves as proof of registration.
            </li>
            <li className="mb-3">
              <strong>Apply for PAN and TAN:</strong> Finally, apply for a Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) for your LLP to manage tax obligations.
            </li>
          </ol>
    
          <h2 className="text-2xl font-bold mb-4">Why Choose BizSimpl for LLP Registration?</h2>
          <p className="text-lg mb-6">
            Navigating the complexities of LLP registration can be overwhelming, especially for first-time entrepreneurs. BizSimpl offers expert assistance to ensure your registration process is efficient and error-free. With their guidance, you can avoid common pitfalls and ensure that all legal requirements are met, allowing you to focus on building and growing your business.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-lg">
            LLP registration is an excellent choice for entrepreneurs and professionals seeking a business structure that offers the dual benefits of limited liability and operational flexibility. With the added advantages of tax benefits and ease of compliance, LLPs are becoming the go-to option for modern businesses in India. By partnering with BizSimpl, you can streamline the registration process and ensure that your LLP is set up correctly from the start. Don’t wait—take the first step towards forming your LLP today and position your business for success.
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

