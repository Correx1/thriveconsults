import React from 'react';

const statsData = [
  { id: 1, number: '12', label: 'Intensive Weeks', sublabel: 'of guided execution' },
  { id: 2, number: '12', label: 'Participants Max', sublabel: 'for dedicated attention' },
  { id: 3, number: '1',  label: 'Graduation Event', sublabel: 'with your 12-month plan' },
];

const CoachingStats = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top angled divider */}
      <div className="w-full h-10 bg-deep-navy clip-skew-bottom"></div>

      <div className="bg-deep-navy relative">
        {/* Large decorative text watermark */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center text-[80px] md:text-[120px] font-black text-white/[0.015] select-none pointer-events-none tracking-widest leading-none overflow-hidden"
        >
          COACHING
        </span>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 w-full">
            {statsData.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex flex-col items-center text-center px-4 md:px-12 py-8 md:py-4 group ${
                  index === 2 ? 'col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-white/10' : ''
                } ${index === 1 ? 'border-l border-white/10' : ''}`}
              >
                {/* Accent line */}
                <div className="w-6 h-[3px] bg-teal-dark rounded-full mb-4 group-hover:w-10 transition-all duration-300"></div>

                {/* Big number */}
                <div className="text-4xl md:text-5xl font-black text-white mb-1 leading-none group-hover:text-teal-dark transition-colors duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-xs font-bold text-gray-200 uppercase tracking-widest mt-3">
                  {stat.label}
                </p>

                {/* Sublabel */}
                <p className="text-xs text-teal-dark/70 mt-1 italic">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom angled divider */}
      <div className="w-full h-10 bg-deep-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}></div>
    </section>
  );
};

export default CoachingStats;
