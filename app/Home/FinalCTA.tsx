import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Text */}
          <div className="text-left">
            <h2 className="section-title text-white">
              Ready to Build a Business <br className="hidden lg:block" />
              That Works Without You?
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              Let us have an honest conversation about where your business is and where you want it to go. No pitch. No pressure. Just clarity.
            </p>
          </div>

          {/* Right Column: Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
            <a 
              href="#discovery" 
              className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center"
            >
              BOOK A FREE DISCOVERY SESSION
            </a>
            
            <a 
              href="#whatsapp" 
              className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              SEND A WHATSAPP MESSAGE
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
