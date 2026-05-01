import React from 'react';

const IndustriesHero = () => {
  return (
    <section className="bg-deep-navy h-[80vh] flex items-center justify-center relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">


        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          We Know What It Takes to<br className="hidden md:block" />
          <span className="text-teal-dark"> Grow a Nigerian Business.</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
          Not in theory. In practice. We have been inside the businesses, worked with the teams, and built the systems. Here is where we have done it.
        </p>

      </div>
    </section>
  );
};

export default IndustriesHero;
