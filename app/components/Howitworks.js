'our clients'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';


export default function Howitworks() {
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
    return (
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
              {index < steps.length  && (
                <div className="hidden md:block">
                  <div className="w-12 h-1 bg-purple-300 mt-8 mx-auto"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }