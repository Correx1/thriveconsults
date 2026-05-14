import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const ProgrammeCTA = () => {
  return (
    <section className="py-16 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Text */}
          <div className="text-left">
            <h2 className="section-title text-white">
              Ready to Reserve <br className="hidden lg:block" />
              Your Spot?
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              Limited to 12 participants per cohort. When the spots fill, enrolment closes. Reserve your spot today to guarantee a seat.
            </p>
          </div>

          {/* Right Column: Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
            <Link 
              href="/coaching#enrol" 
              className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase"
            >
              Enrol Now — ₦250k
            </Link>
            
            <Link 
              href="/coaching" 
              className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase"
            >
              ← Back to Overview
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProgrammeCTA;
