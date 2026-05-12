import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiFileText, FiTrendingUp, FiUsers, FiMonitor, FiArrowRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const features = [
  {
    icon: FiFileText,
    title: 'Documented processes that scale',
    desc: 'We help you build SOPs and workflows that bring consistency and clarity.',
  },
  {
    icon: FiTrendingUp,
    title: 'Reliable sales systems that generate revenue',
    desc: 'From lead generation to closing, we build engines that keep your pipeline full.',
  },
  {
    icon: FiUsers,
    title: 'Teams that operate without constant supervision',
    desc: 'We put the right people, roles, and systems in place so your business keeps moving.',
  },
  {
    icon: FiMonitor,
    title: 'A business that works — even when you don\'t',
    desc: 'Structure today. Freedom tomorrow.',
  },
];

const OurStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-stretch mb-24">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center">
            <h2 className="section-title text-deep-navy">
              Build a Business <br />
              That Runs Without You<span className="text-teal-dark">.</span>
            </h2>
            
            <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed">
              Most businesses don&apos;t fail from lack of effort. <br className="hidden md:block" />
              They stall because they <span className="text-teal-dark font-medium">lack systems.</span>
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-deep-navy/5 flex items-center justify-center text-deep-navy shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-deep-navy font-bold text-base mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN - Image Container */}
          <div className="pt-6 lg:pt-0 h-full w-full">
            <div className="relative w-full h-full min-h-[480px] rounded-2xl overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Business consultancy session at Thrive Consults" 
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Bottom Centered Content */}
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12">
            <h3 className="section-title text-deep-navy text-[1.75rem] md:text-4xl mb-4">
              Real Growth. Measured Month by Month.
            </h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Every business we touch gets better. Not in theory — in numbers you can read on a dashboard. Here is what consistent systems work looks like over time.
            </p>
          </div>

          {/* Quote Block - Centered Minimalist Design */}
          <div className="flex flex-col items-center justify-center my-12">
            <FaQuoteLeft className="text-teal-dark/30 text-4xl mb-4" />
            <p className="text-deep-navy text-lg md:text-xl font-medium leading-relaxed italic max-w-3xl">
              &quot;Show me a good business and I will show you strong people running it. Show me a great business and I will show you scalable systems powering it. We build those systems.&quot;
            </p>
          </div>

          {/* Button */}
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-sm shadow-sm shadow-teal-dark/20 w-auto">
              BOOK A FREE STRATEGY SESSION <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;
