'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
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
    return (
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
    );
  }


