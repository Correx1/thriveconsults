import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

const features = [
  '12 live Saturday sessions (90 mins each) — virtual or in-person where available',
  '12 pre-session recorded modules (20–30 minutes each)',
  'Session workbooks and practical exercises for every week',
  'Private WhatsApp cohort group with weekly facilitator accountability',
  'Three milestone review sessions with group feedback',
  'Live graduation event with certificate and 12-month plan presentation',
  'Access to the Thrive Alumni community after graduation',
];

const CoachingPricing = () => {
  return (
    <section className="py-24 bg-gray-50" id="enrol">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal-dark font-bold tracking-widest uppercase text-sm mb-3">Investment</p>
          <h2 className="section-title text-deep-navy text-[1.75rem] md:text-3xl mb-3">
            One price. Everything included.
          </h2>
          <p className="text-gray-500 text-[15px] md:text-base">
            No hidden fees, no upsells inside the programme.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Main Pricing Box - 2 Cols */}
          <div className="lg:col-span-2 bg-deep-navy text-white p-5 md:p-10 rounded-3xl shadow-xl shadow-deep-navy/10 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-teal-dark/10 rounded-full blur-3xl pointer-events-none"></div>

             <div>
               <p className="text-teal-dark font-bold tracking-widest uppercase text-xs mb-3">Foundation Track</p>
               <h3 className="text-xl md:text-2xl font-bold leading-tight mb-6">
                 The 90-Day Business Growth Programme
               </h3>
               
               <div className="mb-8">
                 <span className="text-4xl md:text-5xl font-bold tracking-tight">₦250,000</span>
                 <p className="text-gray-400 mt-2 text-[13px] md:text-sm">per participant — one-time or flexible instalments</p>
               </div>

               {/* Instalment options */}
               <div className="space-y-3 mb-8 relative z-10">
                 <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Flexible Instalments</p>
                 <div className="flex items-center justify-between border-b border-white/10 pb-3">
                   <div>
                     <p className="font-bold text-white text-[15px]">3-Month Plan</p>
                     <p className="text-xs text-gray-400">× 3 instalments</p>
                   </div>
                   <div className="text-right">
                     <p className="font-bold text-teal-dark text-lg">₦100,000</p>
                   </div>
                 </div>
                 <div className="flex items-center justify-between pb-3">
                   <div>
                     <p className="font-bold text-white text-[15px]">2-Part Plan</p>
                     <p className="text-xs text-gray-400">× 2 instalments</p>
                   </div>
                   <div className="text-right">
                     <p className="font-bold text-teal-dark text-lg">₦135,000</p>
                   </div>
                 </div>
               </div>
             </div>

             <a
               href="https://wa.me/2347032681154?text=Hello%2C%20I%20want%20to%20enrol%20for%20the%20Foundation%20Track."
               className="w-full flex items-center justify-center gap-2 bg-teal-dark hover:bg-teal-dark/90 text-white font-bold py-4 rounded-xl transition-all text-sm relative z-10 shadow-lg shadow-teal-dark/20 hover:-translate-y-1"
             >
               <FaWhatsapp className="text-xl" />
               Reserve My Spot
             </a>
          </div>

          {/* Features Box - 3 Cols */}
          <div className="lg:col-span-3 bg-white p-5 md:p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-deep-navy mb-6 border-b border-gray-100 pb-4">What you get:</h3>
              <ul className="space-y-4 mb-10">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 bg-teal-dark mt-2.5 shrink-0"></div>
                    <span className="text-gray-600 text-[15px] leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 md:p-6 rounded-2xl border border-gray-100 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-deep-navy mt-2 shrink-0"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="text-deep-navy">This is Track 1 of 3.</strong> Graduates unlock the Growth Track (₦380,000) and Corporate Track (₦700,000). Complete Foundation and receive <strong className="text-deep-navy">₦80,000 off</strong> your next enrolment within 90 days.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoachingPricing;
