import React from 'react';
import Link from 'next/link';

const ProgrammeHero = () => {
  return (
    <section className="bg-deep-navy h-[80vh] flex items-center justify-center relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
        
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          The Full Foundation Track<br className="hidden md:block" />
          <span className="text-teal-dark"> Programme Details.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mx-auto max-w-3xl font-light">
          The full 12-week curriculum, every deliverable you walk away with, and exactly how the sessions work — week by week.
        </p>
      </div>
    </section>
  );
};

export default ProgrammeHero;
