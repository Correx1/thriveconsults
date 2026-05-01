import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const IndustriesOpenCTA = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="section-subtitle text-teal-dark">Not in This List?</p>
          <h2 className="section-title text-deep-navy">
            We Also Work With Growth-Stage SMEs Across Every Sector.
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4 max-w-lg">
            If your business is between ₦5M and ₦200M in annual revenue and you are hitting a ceiling, we work with you regardless of industry. Service businesses, professional services, food and hospitality, creative and media — the Growth Operating System applies everywhere.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase"
          >
            Book a Free Discovery Session
          </Link>
          <Link
            href="#beep"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-deep-navy/30 text-deep-navy text-xs font-bold tracking-wider rounded hover:bg-deep-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase"
          >
            <FaWhatsapp className="text-lg" />
            Take the B.E.E.P. Diagnostic First
          </Link>
        </div>

      </div>
    </div>
  </section>
);

export default IndustriesOpenCTA;
