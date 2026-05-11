import React from 'react';
import BeepQuiz from './BeepQuiz';

// ─── HERO ───────────────────────────────────────────────────────
const Hero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">B.E.E.P. Business Health Diagnostic</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        How Healthy Is Your<br className="hidden md:block" />
        <span className="text-teal-dark"> Business Right Now?</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        The B.E.E.P. Business Health Diagnostic takes five minutes and tells you exactly which vital sign of your business needs attention most urgently.
      </p>
    </div>
  </section>
);

// ─── WHAT IS BEEP ───────────────────────────────────────────────
const pillars = [
  {
    letter: 'B',
    title: 'Branding',
    desc: 'How clearly your business communicates who it is and who it serves'
  },
  {
    letter: 'E',
    title: 'Efficiency',
    desc: 'How well your operations and systems run without constant intervention'
  },
  {
    letter: 'E',
    title: 'Excellence',
    desc: 'How consistently your team delivers the standard your customers expect'
  },
  {
    letter: 'P',
    title: 'Promotion',
    desc: 'How effectively your business finds, attracts, and converts new customers'
  }
];

const WhatIsBEEP = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <p className="section-subtitle text-teal-dark">What Is the B.E.E.P. Diagnostic?</p>
          <h2 className="section-title text-deep-navy">
            Every Business Has Four Vital Signs. How Are Yours?
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>A healthy, growing business BEEPs on four frequencies.</p>
            <p className="font-semibold text-deep-navy">Branding. Efficiency. Excellence. Promotion.</p>
            <p>When all four are strong, your business attracts the right customers, operates predictably, delivers consistently, and grows without the founder having to push everything personally.</p>
            <p>When one or more is weak, the business stalls. Revenue plateaus. Staff underperform. Customers leave quietly. And the founder works harder and harder to produce the same or worse results.</p>
            <p className="font-semibold text-deep-navy">This diagnostic measures all four. In five minutes. For free.</p>
          </div>
        </div>

        {/* Right — four pillars */}
        <div className="grid grid-cols-2 gap-4 lg:pt-12">
          {pillars.map((p, i) => (
            <div key={i} className="border border-gray-200 p-5 md:p-8 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-deep-navy flex items-center justify-center">
                <span className="text-teal-dark text-2xl font-black">{p.letter}</span>
              </div>
              <h3 className="text-deep-navy font-bold text-lg">{p.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────
export const metadata = {
  title: 'B.E.E.P. Business Health Diagnostic | Thrive Consult',
  description: 'Take the free B.E.E.P. Business Health Diagnostic and find out exactly which vital sign of your business needs the most urgent attention.'
};

export default function BeepDiagnosticPage() {
  return (
    <main>
      <Hero />
      <WhatIsBEEP />
      <section id="quiz-section" className="bg-gray-50 border-t border-gray-100 py-6 md:py-8">
        <BeepQuiz />
      </section>
    </main>
  );
}
