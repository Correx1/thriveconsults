import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const CoachingCTA = () => {
  return (
    <section className="py-16 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Text */}
          <div className="text-left">
            <h2 className="section-title text-white">
              Grow Steadily <br className="hidden lg:block" />
              or Die Slowly.
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              A business without structure fades month by month. The Thrive 90-Day Programme is for owners who refuse to let that be their story. Make the choice right now.
            </p>
          </div>

          {/* Right Column: Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
            <a 
              href="#enrol" 
              className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase"
            >
              Enrol Now — ₦250k
            </a>
            
            <Link 
              href="https://wa.me/2347032681154?text=Hello%2C%20I%20want%20to%20enrol%20for%20the%20Foundation%20Track%20(90-Day%20Business%20Growth%20Programme)." 
              className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase"
            >
              <FaWhatsapp className="text-lg" />
              Enquire on WhatsApp
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoachingCTA;
