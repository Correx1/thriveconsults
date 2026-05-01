import React from 'react';
import Link from 'next/link';

const IndustriesCTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h2 className="section-title text-white">
            Find Out What Is Holding Your Business Back.
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Take the free B.E.E.P. Business Health Diagnostic and get a clear picture of which part of your business needs attention most urgently.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
          <Link
            href="#beep"
            className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase"
          >
            Take the Free Diagnostic
          </Link>
          <Link
            href="/contact"
            className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 text-center uppercase"
          >
            Book a Discovery Session
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default IndustriesCTA;
