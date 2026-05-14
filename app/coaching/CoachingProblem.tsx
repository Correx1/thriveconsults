import React from 'react';
import Image from 'next/image';
import { FiDollarSign, FiUsers, FiRefreshCcw, FiAlertCircle } from 'react-icons/fi';

const problems = [
  {
    title: 'The money comes in but doesn\'t stay',
    desc: 'You can\'t tell the difference between your working capital, your operating expenses, and your profit. Everything is in one pot.',
    icon: FiDollarSign
  },
  {
    title: 'Your staff lack clear direction',
    desc: 'When you\'re away, things go wrong because no one is clear on their responsibility. Every problem waits for you.',
    icon: FiUsers
  },
  {
    title: 'No system for repeat business',
    desc: 'You have regulars, but no system to stay in touch. You\'re waiting for them to find you instead of reaching out first.',
    icon: FiRefreshCcw
  },
  {
    title: 'You are the business (The biggest risk)',
    desc: 'If you stop, the business stops. That is not a scalable business — it is a very stressful, high-risk job.',
    icon: FiAlertCircle
  },
];

const CoachingProblem = () => {
  return (
    <section className="relative py-24 bg-deep-navy overflow-hidden">
      
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
          alt="Business meeting" 
          width={2940}
          height={1960}
          unoptimized
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-deep-navy/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Header (Aligned Top) */}
          <div className="lg:col-span-1">
            <p className="text-teal-dark font-bold tracking-widest uppercase text-sm mb-4">Why your business is bleeding</p>
            <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight mb-6">
              Most owners don&apos;t even know it.
            </h2>
            <p className="text-gray-400 text-[15px] md:text-base leading-relaxed">
              You are working harder than ever, but the results aren&apos;t matching your effort. Here are the core operational cracks we fix.
            </p>
          </div>

          {/* Right Column: 2x2 Grid of 4 Content Items */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-16">
            {problems.map((p, i) => (
              <div key={i}>
                <div className="w-12 h-12 rounded-xl border border-teal-dark/30 bg-teal-dark/5 flex items-center justify-center text-teal-dark mb-6">
                  <p.icon className="w-5 h-5" strokeWidth={3} />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoachingProblem;
