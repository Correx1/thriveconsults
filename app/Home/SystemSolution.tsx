import Link from 'next/link';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const SystemSolution = () => {
  return (
    <section className="relative w-full py-20 bg-deep-navy overflow-hidden">
      {/* Subtle modern pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>
      
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-dark/5 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Hook & CTA */}
          <div className="max-w-lg">
            <h2 className="section-title text-white">
              Grow Steadily <br className="hidden md:block" />
              <span className="text-teal-dark">or Die Slowly.</span>
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              That ceiling you&apos;ve hit? That chaos when you step away? <strong className="text-white font-medium">That is not a business problem. That is a systems problem.</strong> And it has a solution.
            </p>

            <Link href="/beep-diagnostic" className="btn btn-primary px-8 py-3 text-sm font-bold shadow-lg shadow-teal-dark/20">
              SHOW ME WHAT IS HOLDING MY BUSINESS BACK
            </Link>
          </div>

          {/* Right Side: Symptoms Card (Glassmorphism) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <FaExclamationCircle className="text-teal-dark" />
              The Warning Signs
            </h3>
            
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-dark shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  You put in long hours with a loyal team, yet the business struggles to reach the next level.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-dark shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Revenue looks good on paper, but you don&apos;t really know if you&apos;re making the profit you thought.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-dark shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Accountability is thin. Everyone does what they like, and taking a week off means things fall apart.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SystemSolution;
