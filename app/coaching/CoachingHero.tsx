import React from 'react';
import Link from 'next/link';

const CoachingHero = () => {
  return (
    <section className="bg-deep-navy h-[80vh] flex items-center justify-center relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Stop Running a Business.<br className="hidden md:block" />
          <span className="text-teal-dark">Start Building One.</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mx-auto max-w-2xl font-light mb-10">
          A 12-week programme for Nigerian business owners ready to build real structure and grow on purpose.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#enrol" className="btn btn-primary px-8 py-4 text-sm shadow-lg shadow-teal-dark/20">
            Reserve Your Spot — ₦250,000
          </Link>
          <Link href="/coaching/programme" className="btn btn-secondary px-8 py-4 text-sm">
            See the full curriculum →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachingHero;
