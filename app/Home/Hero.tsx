import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section 
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-deep-navy"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.85), rgba(10, 22, 40, 0.95)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background abstract elements for professional look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.2] mb-6 mt-4">
          Your Business Should Work <br className="hidden md:block" />
          <span className="text-teal-dark relative inline-block">
            Without You.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-dark/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent"/>
            </svg>
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Most business owners are not running a business. They are the business. We help you change that with systems, strategy, and the right people.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-auto">
          <a href="#discovery" className="btn btn-primary w-auto">
            Book a Free Discovery Session
          </a>
          <a href="#whatsapp" className="btn btn-secondary w-auto flex gap-2">
            <FaWhatsapp className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
