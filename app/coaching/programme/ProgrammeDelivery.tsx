import React from 'react';
import { FiCalendar, FiMessageCircle, FiPlayCircle, FiAward } from 'react-icons/fi';

const items = [
  {
    num: '01',
    icon: FiCalendar,
    title: 'Saturday sessions',
    detail: '9:00 AM — 90 minutes',
    desc: 'Live group session every Saturday. Hybrid — attend in person where available or join virtually from anywhere in Nigeria. Recorded for participants who miss.',
  },
  {
    num: '02',
    icon: FiMessageCircle,
    title: 'WhatsApp accountability',
    detail: 'Every Sunday evening',
    desc: 'You post your weekly check-in: Done or Not Done. A Thrive facilitator responds to every participant. This is the accountability that makes the programme work.',
  },
  {
    num: '03',
    icon: FiPlayCircle,
    title: 'Pre-session module',
    detail: '20–30 minutes',
    desc: 'A short recorded module teaches the concept before each Saturday. The live session applies it and holds you accountable. Teaching is before. Application is live.',
  },
  {
    num: '04',
    icon: FiAward,
    title: 'Live graduation event',
    detail: 'Week 12',
    desc: 'A real ceremony. You present your 12-month plan. Your family can attend. Certificates signed and awarded in person. This is the moment you have been building toward.',
  },
];

const ProgrammeDelivery = () => {
  return (
    <section className="relative py-24 bg-deep-navy overflow-hidden">
      
      {/* Subtle Background Glow/Burst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-teal-dark font-bold tracking-widest uppercase text-sm mb-4">How It Works</p>
          <h2 className="section-title text-white text-2xl md:text-3xl lg:text-4xl">
            Designed around how Nigerian business owners actually live.
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Saturday mornings, WhatsApp accountability, and sessions that respect your time.
          </p>
        </div>

        {/* Values Grid */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-10">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left group">
                  
                  {/* Faint Background Number */}
                  <div className="absolute -top-8 -left-2 text-[80px] font-black text-white/[0.03] select-none pointer-events-none transition-colors duration-500 group-hover:text-teal-dark/[0.05]">
                    {item.num}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full border border-teal-dark/30 flex items-center justify-center text-teal-dark bg-deep-navy mb-8 relative z-10 shadow-[0_0_15px_rgba(36,219,141,0.1)] group-hover:border-teal-dark transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-teal-dark text-xs font-bold tracking-widest mb-4 uppercase">{item.detail}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProgrammeDelivery;
