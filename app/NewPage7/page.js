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
            <h1 className="text-4xl font-bold mb-4">ISO Certification</h1>
            <p className="mb-6">Build Trust and Quality with Effortless ISO Certification Services.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Seamless Certification Process with Professional Support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Ensure Compliance with International Quality Standards
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Enhance Customer Trust and Business Credibility
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
        
        <div className="text-center md:px-10 lg:px-20">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
            ISO Certification: Scale Your Business to Global Standards
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            In today’s competitive landscape, there are certainly many factors that differentiate. Out of these, the most effective way to set your brand apart from others is ISO certification. It’s a treasure, not just a process badge of honor, and it’s a sure-shot business-enhancing weapon because it renders huge credibility to any business, helps streamline operations, and opens doors to global markets. If you’ve had it in mind to get that ISO certification, organizations like BizSimple have made it quite simple to be sure that you meet international quality standards.
          </p>
        </div>
        
        
        <div className="px-4 md:px-10 lg:px-20 py-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">What is ISO Certification?</h1>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            ISO certification is an internationally recognized standard about a business, which describes the company’s conformance with quality, safety, efficiency, and reliability standards. The International Organization for Standardization has developed these particular benchmarks, which are spread across several areas related to business.
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            There are hundreds of ISO standards, from use in certain kinds of industry-specific standards to some that are more generic parts of a business. For example, ISO 9001 refers to quality management, and ISO 14001 refers to managing environmental systems. By being ISO certified, the organization is therefore predisposed to showing good business practice in operation and, in most aspects, literally improves its image and productivity.
          </p>
        
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Benefits of ISO Certification</h2>
          <ul className="list-disc ml-5 text-base md:text-lg lg:text-xl mb-6">
            <li className="mb-3"><strong>Business Credibility:</strong> ISO certification is proof or guarantee that your company provides quality and reliable products. It will therefore build credibility with potential customers, partners, or even investors in your business.</li>
            <li className="mb-3"><strong>Meeting Customer Expectations:</strong> ISO certification means that you establish processes according to internationally recognized standards, which—finally—will lead to the consistent and, at times, better meeting of customer expectations regarding any products or services. This will result in higher customer satisfaction and customer loyalty.</li>
            <li className="mb-3"><strong>Streamline Operations and Boost Efficiency:</strong> ISO standards give a clear direction to enhance business processes. By following these guidelines, one can easily identify inefficiency, reduce waste, and further optimize operations, which helps in cost reduction and being more productive.</li>
            <li className="mb-3"><strong>Global Market Access:</strong> Since ISO certification is recognized worldwide, it helps in gaining potential new markets. Most international customers and partners need a company to be ISO certified, so in many ways, it is a competitive edge the business will get over others.</li>
          </ul>
        
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Types of Certifications</h2>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            There are a host of ISO certifications available that meet different aspects of the operation of a business. Here are some of the most highly in-demand certifications:
          </p>
        
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">ISO 9001: Quality Management Systems</h3>
          <p className="text-sm md:text-base lg:text-lg mb-3">
            This standard focuses on the consistent provision of products and services by businesses that meet customer and regulatory requirements. If they wish to succeed in the long run, continuous improvement is of prime importance. <strong>Industries That Derive Benefits:</strong> Manufacturing, healthcare, education, and more.
          </p>
        
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">ISO 14001: Environmental Management Systems</h3>
          <p className="text-sm md:text-base lg:text-lg mb-3">
            It is a certification that is supposed to be implemented by an organization that has an obligation to systematically manage its environmental responsibility. This enables businesses to lessen their adverse impacts on the environment and supports them in compliance, which is offered by the environmental regulations. <strong>Importance:</strong> To be sustainable and to reduce environmental footprint.
          </p>
        
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">ISO 27001: Information Security Management Systems</h3>
          <p className="text-sm md:text-base lg:text-lg mb-3">
            The current high incidences of data breaches and cyber threats make ISO 27001 certification very relevant to organizations seeking stringent information security controls to safeguard their information. <strong>Protection of Data:</strong> Security of the information under disposition concerning confidentiality, integrity, and availability.
          </p>
        
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">ISO 45001: Occupational Health and Safety</h3>
          <p className="text-sm md:text-base lg:text-lg mb-3">
            The publication serves as the important document to have for an organization in maintaining a safe and healthy working environment for the employees. This document provides businesses with processes to identify, control, and continually improve their occupational health and safety performance. <strong>Safety:</strong> Minimize the chances of risks of injuries and diseases to the working staff.
          </p>
        
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">ISO 22000: Food Safety Management Systems</h3>
          <p className="text-sm md:text-base lg:text-lg mb-3">
            Companies that are in the business of food are assured that with ISO 22000 certification, hazards in the food are managed by organizations across the length of the supply chain, “from farm to fork.” <strong>Ensure Food Safety:</strong> Comply with international food safety standards.
          </p>
        
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Conclusion</h2>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            More than just a formality, ISO certification constitutes a strategic investment in the future of your business. ISO certification is done to increase the credibility of your business and to the operations through which it allows plenty of other new opportunities. When BizSimple expertise guides you, all of this becomes manageable and simple. You can easily meet up with and maintain maximum international standards without any effort, so what’s holding you back? Step one step ahead in getting your business up to global standards by ISO certification.
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