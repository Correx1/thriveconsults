import React from 'react';

const statsData = [
  { id: 1, number: "200+", label: "Businesses Transformed", sublabel: "across Nigeria" },
  { id: 2, number: "6",    label: "Service Categories",     sublabel: "built to scale you" },
  { id: 3, number: "5",    label: "Industries Served",      sublabel: "and counting" },
  { id: 4, number: "13",   label: "Years Of Impact",        sublabel: "in the trenches" }
];

const Stats = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top angled divider */}
      <div className="w-full h-10 bg-deep-navy clip-skew-bottom"></div>

      <div className="bg-deep-navy relative">
        {/* Large decorative text watermark */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center text-[120px] font-black text-white/[0.015] select-none pointer-events-none tracking-widest leading-none overflow-hidden"
        >
          THRIVE
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {statsData.map((stat, index) => (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center px-4 md:px-8 py-4 group"
              >
                {/* Accent line */}
                <div className="w-6 h-[3px] bg-teal-dark rounded-full mb-4 group-hover:w-10 transition-all duration-300"></div>

                {/* Big number */}
                <div className="text-4xl md:text-5xl font-black text-white mb-1 leading-none group-hover:text-teal-dark transition-colors duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-xs font-bold text-gray-200 uppercase tracking-widest mt-2">
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

export default Stats;
