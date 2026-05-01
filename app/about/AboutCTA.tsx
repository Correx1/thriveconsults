import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const AboutCTA = () => {
  return (
    <section className="py-16 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Text */}
          <div className="text-left">
            <h2 className="section-title text-white">
              Want to Know What Is Holding <br className="hidden lg:block" />
              Your Business Back?
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              Start with a free discovery session. Thirty minutes. No pressure. Just an honest look at your business and a clear path forward.
            </p>
          </div>

          {/* Right Column: Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
            <Link 
              href="/contact" 
              className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase"
            >
              Book Your Free Session
            </Link>
            
            <Link 
              href="https://wa.me/2347032681154?text=Hello%2C%20I%20visited%20the%20Thrive%20Consults%20website%20and%20I%20would%20like%20to%20enquire%20about%20your%20services." 
              className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase"
            >
              <FaWhatsapp className="text-lg" />
              Send a WhatsApp Message
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;
