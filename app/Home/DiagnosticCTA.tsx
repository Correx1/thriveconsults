import React from 'react';

const DiagnosticCTA = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.92), rgba(10, 22, 40, 0.95)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Column (col-6 equivalent) */}
          <div className="lg:w-3/5">
            <p className="section-subtitle text-teal-dark">
              Free Tool
            </p>
            <h2 className="section-title text-white">
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Take the free B.E.E.P. Business Health Diagnostic. Five minutes. Twenty questions. You will know exactly which part of your business needs the most urgent attention.
            </p>
          </div>

          {/* Right Column (col-6 equivalent) */}
          <div className="lg:w-2/5 flex items-center justify-center lg:justify-end w-full">
            <a href="#diagnostic" className="btn btn-primary w-auto px-10 py-4 text-sm md:text-base font-bold tracking-wide shadow-lg shadow-teal-dark/30 hover:-translate-y-1 transition-all duration-300 text-center whitespace-nowrap">
              TAKE THE FREE DIAGNOSTIC
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiagnosticCTA;
