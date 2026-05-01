import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ServiceCTA = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="section-subtitle text-teal-dark">Get Started</p>
        <h2 className="section-title text-deep-navy mb-4">
          Every Business Deserves a System That Works.
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Let us talk about yours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 uppercase"
          >
            Book a Free Discovery Session
          </Link>

          <Link
            href="https://wa.me/2347032681154?text=Hello%2C%20I%20visited%20the%20Thrive%20Consults%20website%20and%20I%20would%20like%20to%20enquire%20about%20your%20services."
            className="px-8 py-4 bg-transparent border border-deep-navy/20 text-deep-navy text-xs font-bold tracking-wider rounded hover:border-teal-dark hover:text-teal-dark transition-all duration-300 flex items-center justify-center gap-2 uppercase"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp Us Now
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServiceCTA;
