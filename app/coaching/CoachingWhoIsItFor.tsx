import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

const forYou = [
  'You are a business owner running a real operation anywhere in Nigeria, in any sector.',
  'You have been in business for at least one year.',
  'Your money is coming in but you don\'t know exactly where it\'s going.',
  'Your staff don\'t know their exact responsibilities.',
  'You are doing everything yourself and it\'s becoming unsustainable.',
  'You are ready to sit down, do the work, and implement what you learn.',
];

const notForYou = [
  'You are looking for motivation and inspiration, not structure.',
  'You are not yet in business — still planning to start.',
  'You want a quick fix without doing the weekly work.',
  'You won\'t attend Saturday sessions or post Sunday check-ins.',
  'You already have solid systems, cash flow tracking, and documented processes.',
];

const CoachingWhoIsItFor = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-dark font-bold tracking-widest uppercase text-sm mb-4">Who this is for</p>
          <h2 className="section-title text-deep-navy text-[1.75rem] md:text-4xl">
            This programme was built for one type of person.
          </h2>
        </div>

        {/* 2-Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* YES CARD */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-lg md:text-xl font-bold text-deep-navy mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
              <FiCheck className="w-6 h-6 text-teal-dark shrink-0" />
              This is for you if:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-teal-dark mt-2 shrink-0"></div>
                  <span className="text-gray-800 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO CARD */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm flex flex-col opacity-[0.98]">
            <h3 className="text-lg md:text-xl font-bold text-deep-navy mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
              <FiX className="w-6 h-6 text-red-500 shrink-0" />
              This is not for you if:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 shrink-0"></div>
                  <span className="text-gray-500 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoachingWhoIsItFor;
