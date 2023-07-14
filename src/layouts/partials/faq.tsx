import React from 'react';
import { faqData } from '../../data/faq';

const FAQ: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-body dark:bg-darkmode-body min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {faqData.map((faqItem) => (
          <div className="py-5" key={faqItem.id}>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none font-extrabold">
                <span>{faqItem.title}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn flex justify-center place-items-center pl-10">
                {faqItem.content}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
