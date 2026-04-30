import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-deep-navy h-[80vh] flex items-center justify-center relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          We Believe Every Business<br className="hidden md:block" />
          Deserves to <span className="text-teal-dark">Run Like One.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mx-auto max-w-3xl font-light">
          Thrive Consults was built for one reason. Too many talented Nigerian business owners are stuck working inside their business instead of building it.
        </p>

      </div>
    </section>
  );
};

export default AboutHero;
