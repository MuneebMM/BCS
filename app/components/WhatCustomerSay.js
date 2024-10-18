'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function WhatCustomerSay() {
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
    return (
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
    );
  }
