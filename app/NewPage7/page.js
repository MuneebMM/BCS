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
        <div className="flex items-center justify-center pl-10 pr-10">
          <div className="text-center px-20">
            <h1 className="text-2xl font-bold mb-1">
              ISO Certification: Scale Your Business to Global Standards
            </h1>
            <p className="text-lg">
              In today’s competitive landscape, there are certainly many factors that differentiate. Out of these, the most effective way to set your brand apart from others is ISO certification. It’s a treasure, not just a process badge of honor, and it’s a sure-shot business-enhancing weapon because it renders huge credibility to any business, helps streamline operations, and opens doors to global markets. If you’ve had it in mind to get that ISO certification, organizations like BizSimple have made it quite simple to be sure that you meet international quality standards.
            </p>
          </div>
        </div>
        <div className="px-20 py-6">
          <h1 className="text-2xl font-bold mb-4">What is ISO Certification?</h1>
          <p className="text-lg mb-6">
            ISO certification is an internationally recognized standard about a business, which describes the company’s conformance with quality, safety, efficiency, and reliability standards. The International Organization for Standardization has developed these particular benchmarks, which are spread across several areas related to business. The main purpose of ISO certification is to make sure that organizations consistently meet the stipulated requirements of the customer and regulatory body, and that their processes keep on improving endlessly.
          </p>
          <p className="text-lg mb-6">
            There are hundreds of ISO standards, from use in certain kinds of industry-specific standards to some that are more generic parts of a business. For example, ISO 9001 refers to quality management, and ISO 14001 refers to managing environmental systems. By being ISO certified, the organization is therefore predisposed to showing good business practice in operation and, in most aspects, literally improves its image and productivity.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">Benefits of ISO Certification</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Business Credibility:</strong> ISO certification is proof or guarantee that your company provides quality and reliable products. It will therefore build credibility with potential customers, partners, or even investors in your business.
            </li>
            <li className="mb-3">
              <strong>Meeting Customer Expectations:</strong> ISO certification means that you establish processes according to internationally recognized standards, which—finally—will lead to the consistent and, at times, better meeting of customer expectations regarding any products or services. This will result in higher customer satisfaction and customer loyalty.
            </li>
            <li className="mb-3">
              <strong>Streamline Operations and Boost Efficiency:</strong> ISO standards give a clear direction to enhance business processes. By following these guidelines, one can easily identify inefficiency, reduce waste, and further optimize operations, which helps in cost reduction and being more productive.
            </li>
            <li className="mb-3">
              <strong>Global Market Access:</strong> Since ISO certification is recognized worldwide, it helps in gaining potential new markets. Most international customers and partners need a company to be ISO certified, so in many ways, it is a competitive edge the business will get over others.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Types of Certifications</h2>
          <p className="text-lg mb-6">
            There are a host of ISO certifications available that meet different aspects of the operation of a business. Here are some of the most highly in-demand certifications:
          </p>
          
          <h3 className="text-xl font-bold mb-2">ISO 9001: Quality Management Systems</h3>
          <p className="mb-3">
            This standard focuses on the consistent provision of products and services by businesses that meet customer and regulatory requirements. If they wish to succeed in the long run, continuous improvement is of prime importance. <strong>Industries That Derive Benefits:</strong> Manufacturing, healthcare, education, and more.
          </p>
    
          <h3 className="text-xl font-bold mb-2">ISO 14001: Environmental Management Systems</h3>
          <p className="mb-3">
            It is a certification that is supposed to be implemented by an organization that has an obligation to systematically manage its environmental responsibility. This enables businesses to lessen their adverse impacts on the environment and supports them in compliance, which is offered by the environmental regulations. <strong>Importance:</strong> To be sustainable and to reduce environmental footprint.
          </p>
    
          <h3 className="text-xl font-bold mb-2">ISO 27001: Information Security Management Systems</h3>
          <p className="mb-3">
            The current high incidences of data breaches and cyber threats make ISO 27001 certification very relevant to organizations seeking stringent information security controls to safeguard their information. <strong>Protection of Data:</strong> Security of the information under disposition concerning confidentiality, integrity, and availability.
          </p>
    
          <h3 className="text-xl font-bold mb-2">ISO 45001: Occupational Health and Safety</h3>
          <p className="mb-3">
            The publication serves as the important document to have for an organization in maintaining a safe and healthy working environment for the employees. This document provides businesses with processes to identify, control, and continually improve their occupational health and safety performance. <strong>Safety:</strong> Minimize the chances of risks of injuries and diseases to the working staff.
          </p>
    
          <h3 className="text-xl font-bold mb-2">ISO 22000: Food Safety Management Systems</h3>
          <p className="mb-3">
            Companies that are in the business of food are assured that with ISO 22000 certification, hazards in the food are managed by organizations across the length of the supply chain, “from farm to fork.” <strong>Ensure Food Safety:</strong> Comply with international food safety standards.
          </p>
    
          <h2 className="text-2xl font-bold mb-4">How to Obtain ISO Certification</h2>
          <ol className="list-decimal ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Step 1: Understand the Requirements:</strong> The first initial process towards obtaining ISO certification is understanding what requirements are there. This process begins by analyzing business conditions and identifying what exactly needs to be improved.
            </li>
            <li className="mb-3">
              <strong>Step 2: Certification Readiness:</strong> After the identification of the relevant ISO standard, the preparation of the organization is the step that follows certification. This step usually involves documenting your processes, training your staff, and making whatever adjustments are necessary to align with ISO requirements.
            </li>
            <li className="mb-3">
              <strong>Step 3: ISO Standard Implementation:</strong> In this stage, the general implementation begins by performing the actual records of what has been documented earlier and ensuring that all employees work according to the laid-down guidelines.
            </li>
            <li className="mb-3">
              <strong>Step 4: Internal Audits and Management Reviews:</strong> Before external audits, internal audits are conducted. This would identify any gaps or areas for improvement. Management reviews are also conducted so that the system works effectively.
            </li>
            <li className="mb-3">
              <strong>Step 5: External Audits and Certification:</strong> The final step involves an external audit by an approved certification body that will review your processes and documentation. And if everything is up to the desired standard, your business will be awarded ISO certification.
            </li>
          </ol>
    
          <h2 className="text-2xl font-bold mb-4">Why Select BizSimple for ISO Certification?</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Expert Advisory Services:</strong> BizSimple provides expert advice on the path to certification. Throughout the certification process, BizSimple has all the information you need to stay in compliance with the requirements your business needs.
            </li>
            <li className="mb-3">
              <strong>Streamlined Process:</strong> This pathway to certification would have been a very cumbersome process if not for BizSimple. Thus, it will streamline and alert in ways that would be much easier for your business to be ISO certified.
            </li>
            <li className="mb-3">
              <strong>Customized Solutions:</strong> BizSimple understands that each business will have its nuances, and hence its solutions are designed to satisfy the need of different industries at various levels.
            </li>
            <li className="mb-3">
              <strong>Long-Term Support:</strong> BizSimple goes beyond certification and provides long-term support to help you stay certified and in compliance with the standard.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Common ISO Certification Challenges and How to Overcome Them</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Resistance to Change:</strong> Whenever there is a need for change in any activity, employees are always a bit resistant as they recoil at any activity in the name of change. This, however, calls for effective communication and the involvement of staff in processes for acceptance.
            </li>
            <li className="mb-3">
              <strong>Understanding Requirements:</strong> ISO standards may be shrouded in mystery and are sometimes unclear to business owners: this is where working with experts such as BizSimple can make it easy.
            </li>
            <li className="mb-3">
              <strong>Management of Costs and Resources:</strong> Cost implications at times land heavily when obtaining ISO certification. There must be identification of the critical areas by the business to manage costs and it may take professional guidance to implement the certification effectively and efficiently.
            </li>
            <li className="mb-3">
              <strong>Continuous Improvement:</strong> ISO certification is not a one-time event; it needs to progress continuously. To maintain certification, regular audits, training, updates of the process, etc. should be carried out.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Maintaining ISO Certification</h2>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Internal Audit:</strong> Perform periodic internal audits to stay on your toes in the quest for improvement and the assurance that your processes are in line with desired ISO compliance.
            </li>
            <li className="mb-3">
              <strong>Ongoing Training:</strong> Updating the team and training them on ISO standards practically helps in the maintenance of certification. Ongoing training should be held to make it possible for everyone to have recent practice at all times.
            </li>
            <li className="mb-3">
              <strong>Keeping Ahead of New Standards:</strong> ISO standards keep changing now and then. Your business remains compliant and in a better position to take up new standards with information on changes and amendments to the standards over the years.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">ISO Certification in Business Growth</h2>
          <p className="text-lg mb-6">
            With ISO certification, increased customer trust and operational efficiency can spur growth and help to open new markets, and long-term success in the future would be underpinned by ISO certification. How does it do all this? Here’s how:
          </p>
          <ul className="list-disc ml-5 text-lg mb-6">
            <li className="mb-3">
              <strong>Builds Customer Trust:</strong> ISO certification portrays the standards of quality and reliability to customers. It is a way of building trust and, therefore, can lead to increased sales and customer loyalty.
            </li>
            <li className="mb-3">
              <strong>Competitive Advantage:</strong> Your business is set apart in a crowded marketplace due to the ISO certification; it provides a competitive edge over the non-certified competitors.
            </li>
            <li className="mb-3">
              <strong>Long-Term Benefits:</strong> More important than the immediate benefits of improved processes and customer satisfaction, ISO certification can enable opportunities for long-term growth—probably more specifically in access to new markets and partnerships.
            </li>
          </ul>
    
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-lg mb-6">
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