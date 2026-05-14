import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const CoachingEntryEvent = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
          
          {/* Left: Content */}
          <div className="flex-1 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-1.5 bg-teal-dark shrink-0"></div>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-500">Test before you commit</p>
            </div>
            
            <h2 className="text-deep-navy font-bold text-2xl md:text-3xl mb-4">
              Find out exactly where your business stands.
            </h2>
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-5">
              Join the <strong className="text-deep-navy font-bold">Thrive Business Health Check</strong> — a 2-hour live workshop where you complete the B.E.E.P. diagnostic and score your business across four pillars. See exactly where your operational gaps are, with no obligation to enrol.
            </p>
            <p className="text-deep-navy text-sm">
              <strong className="text-teal-dark font-bold">Bonus:</strong> All attendees receive a <strong className="font-bold">₦25,000 discount</strong> towards the full Foundation Track, valid for 60 days.
            </p>
          </div>

          {/* Right: Price & CTA */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-6 lg:gap-5 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0 lg:pl-16">
            <div className="text-left lg:text-right">
              <p className="text-gray-400 uppercase tracking-widest text-[11px] font-bold mb-1">Workshop Entry Fee</p>
              <span className="text-3xl md:text-4xl font-black text-deep-navy block">₦25,000</span>
            </div>
            
            <a
              href="https://wa.me/2347032681154?text=I%20want%20to%20attend%20the%20Business%20Health%20Check%20workshop."
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-deep-navy hover:bg-opacity-90 text-white font-bold px-8 py-4 rounded-md transition-all text-sm"
            >
              <FaWhatsapp className="text-lg" />
              Register on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoachingEntryEvent;
