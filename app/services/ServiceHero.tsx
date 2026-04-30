import React from 'react';

const ServiceHero = () => {
  return (
    <section className="bg-deep-navy h-[80vh] flex items-center justify-center relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Six Ways We Help Your<br className="hidden md:block" />
          Business <span className="text-teal-dark">Grow.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mx-auto max-w-3xl font-light">
          Every business is different. But the problems that stop growth are almost always the same. Here is how we fix them.
        </p>

      </div>
    </section>
  );
};

export default ServiceHero;
