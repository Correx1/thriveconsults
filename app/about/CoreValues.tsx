import React from 'react';
import { FiMessageSquare, FiSettings, FiBarChart2, FiFlag } from 'react-icons/fi';

const values = [
  {
    num: '01',
    icon: FiMessageSquare,
    title: 'Honesty Before Comfort',
    desc: 'We will tell you what your business actually needs, not what you want to hear. That is the only way real change happens.'
  },
  {
    num: '02',
    icon: FiSettings,
    title: 'Systems Over Personalities',
    desc: 'Great businesses run on great systems, not great individuals. We build organisations that outlast any single person.'
  },
  {
    num: '03',
    icon: FiBarChart2,
    title: 'Results Over Reports',
    desc: 'We do not write 80-page documents that sit on shelves. We build things that work and we measure whether they are working.'
  },
  {
    num: '04',
    icon: FiFlag,
    title: 'Built for Nigeria',
    desc: 'Our strategies are designed for the realities of the Nigerian market, not adapted from somewhere else and hoping for the best.'
  }
];

const CoreValues = () => {
  return (
    <section className="relative py-16 bg-deep-navy overflow-hidden">
      
      {/* Subtle Background Glow/Burst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <p className="section-subtitle text-teal-dark">What We Stand For</p>
          <h2 className="section-title text-white">
            The Principles Behind Every Engagement.
          </h2>
        </div>

        {/* Values Grid */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="relative z-10 flex flex-col items-start text-left group">
                  
                  {/* Faint Background Number */}
                  <div className="absolute -top-8 -left-2 text-[80px] font-black text-white/[0.03] select-none pointer-events-none transition-colors duration-500 group-hover:text-teal-dark/[0.05]">
                    {value.num}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full border border-teal-dark/30 flex items-center justify-center text-teal-dark bg-deep-navy mb-8 relative z-10 shadow-[0_0_15px_rgba(36,219,141,0.1)] group-hover:border-teal-dark transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <h4 className="text-white font-bold text-lg mb-3">{value.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoreValues;
