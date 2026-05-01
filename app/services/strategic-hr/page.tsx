import React from 'react';
import { FiUsers, FiGitBranch, FiBarChart2, FiFileText, FiHeart, FiTool } from 'react-icons/fi';
import { FaWhatsapp, FaQuoteRight } from 'react-icons/fa';
import Link from 'next/link';

// ─── HERO ───────────────────────────────────────────────────────
const HRHero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Strategic Human Resources</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        Your Business Is Only as Strong<br className="hidden md:block" />
        as the <span className="text-teal-dark">People Running It.</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We help you hire the right people, build the systems that keep them accountable, and create an organisation that performs whether you are watching or not.
      </p>
    </div>
  </section>
);

// ─── PROBLEM + SIGNALS MERGED ───────────────────────────────────
const signals = [
  'You keep hiring people but performance never improves',
  'You have never had a formal performance review conversation with your team',
  'Staff are present every day but accountability is thin',
  'You are scaling and hiring more people but results are not growing proportionally',
  'You run a trading business and want to build structure around your apprenticeship system without disrupting what works'
];

const HRProblem = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left: Problem narrative */}
        <div>
          <p className="section-subtitle text-teal-dark">The Real Problem</p>
          <h2 className="section-title text-deep-navy">
            Most Businesses Do Not Have a Staff Problem. They Have a System Problem.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>Here is what happens in most Nigerian businesses. The owner hires someone. The person starts well. A few months in, performance drops. The owner gets frustrated. They warn the person. Things improve briefly. Then it drops again.</p>
            <p>Then the cycle starts again with the next hire. Same problem. Different face.</p>
            <p>If the same staff problems keep repeating with different people, the problem is not the people. The problem is the absence of a system that sets expectations, tracks performance, and holds people accountable consistently.</p>
            <p className="font-semibold text-deep-navy">That is what Strategic HR builds. Not just hiring. The entire people infrastructure that makes your team perform.</p>
          </div>
        </div>

        {/* Right: You need this if */}
        <div className="lg:pt-20">
          <p className="section-subtitle text-teal-dark mb-6">You Need This If</p>
          <div className="space-y-3">
            {signals.map((s, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-gray-100 pb-4">
                <span className="text-teal-dark font-bold text-sm shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ─── DELIVERABLES ────────────────────────────────────────────────
const deliverables = [
  { icon: FiUsers, title: 'Recruitment and Talent Acquisition', desc: 'We help you find and select the right people — not just the available ones. We design your hiring process, write job descriptions that attract performers, and build a screening system that filters for fit, not just credentials.' },
  { icon: FiGitBranch, title: 'Organisational Design', desc: 'Who reports to who. What each person is responsible for. Where decisions get made. A clear org structure is not bureaucracy — it is the difference between a team that moves fast and one that is always waiting for the owner.' },
  { icon: FiBarChart2, title: 'Performance Management Systems', desc: 'Most Nigerian businesses have no formal performance system. We build one. KPIs for every role. Regular review conversations. A feedback culture and accountability that does not depend on the owner being in the room.' },
  { icon: FiFileText, title: 'HR Policies and Compliance', desc: 'Employee handbook. Employment contracts. Leave policies. Disciplinary procedures. Written in plain language, designed for the Nigerian operating environment, structured to protect the business and treat employees fairly.' },
  { icon: FiHeart, title: 'Culture and Employee Engagement', desc: 'Culture is not a poster on the wall. It is how decisions get made when no one is watching. We audit your current culture, identify the gaps, and design the interventions that close them.' },
  { icon: FiTool, title: 'Apprenticeship Formalisation', desc: 'For businesses using the Igbo apprenticeship model, we formalise the structure. Role definitions. A three level skills ladder. Simple written agreements. Four operating systems your apprentices can follow without a degree.' }
];

const HRDeliverables = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">What We Build</p>
        <h2 className="section-title text-deep-navy">From Hiring to High Performance</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deliverables.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-white border border-gray-200 p-8 rounded-none hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-deep-navy/5 flex items-center justify-center mb-6">
                <Icon className="text-deep-navy text-xl" />
              </div>
              <h3 className="text-deep-navy font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── HOW WE WORK (CoreValues style) ─────────────────────────────
const steps = [
  { num: '01', title: 'People Audit', desc: 'We review your current team structure, roles, and HR practices. We interview key staff and map the gap between where your people system is and where it needs to be.' },
  { num: '02', title: 'Design', desc: 'We build the specific HR infrastructure your business needs. Org chart. Job descriptions. Performance framework. Policies. Hiring process. Designed for your business size and industry.' },
  { num: '03', title: 'Implement', desc: 'We train your managers on how to use the new system. We run the first performance review cycle with you. We stay engaged until the system is running on its own.' },
  { num: '04', title: 'Sustain', desc: 'We do a 90-day review to check adoption and adjust anything that is not working. The goal is a people system that runs without us.' }
];

const HRProcess = () => (
  <section className="relative py-16 bg-deep-navy overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="section-subtitle text-teal-dark">How We Work</p>
        <h2 className="section-title text-white">
          We Do Not Start With a Template. We Start With Your Business.
        </h2>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left group">
              <div className="w-14 h-14 rounded-full border border-teal-dark/30 flex items-center justify-center text-teal-dark bg-deep-navy mb-8 relative z-10 shadow-[0_0_15px_rgba(36,219,141,0.1)] group-hover:border-teal-dark transition-colors duration-300">
                <span className="text-sm font-bold">{step.num}</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── TESTIMONIAL ─────────────────────────────────────────────────
const HRTestimonial = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Header */}
        <div>
          <p className="section-subtitle text-teal-dark">What Our Clients Say</p>
          <h2 className="section-title text-deep-navy">
            Real Results.<br />Real Businesses.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
            Feedback from business owners who have worked with us on their HR and people systems.
          </p>
        </div>

        {/* Right: Single card */}
        <div className="bg-white border border-gray-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <FaQuoteRight className="text-teal-dark/10 text-5xl mb-6" />
          <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
            &ldquo;Staff management was the biggest stress in running our supermarket. High turnover, inconsistent service, and no clear accountability. Thrive built an HR structure that changed how we hire, how we manage, and how our staff show up every day. The difference is visible to our customers.&rdquo;
          </p>
          <div className="w-8 h-[2px] bg-teal-dark mb-5" />
          <p className="text-deep-navy font-bold text-sm md:text-base">Mr. Okechuwu</p>
          <p className="text-teal-dark text-xs font-semibold">CEO, WC Retail</p>
        </div>

      </div>
    </div>
  </section>
);

// ─── CTA ─────────────────────────────────────────────────────────
const HRCTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h2 className="section-title text-white">
            Ready to Build a Team<br className="hidden lg:block" /> That Works?
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Stop repeating the same hire and fire cycle. Let us build the people infrastructure that makes your team perform consistently.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
          <Link href="/contact" className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase">
            Book a Free Discovery Session
          </Link>
          <Link href="https://wa.me/2347032681154?text=Hello%2C%20I%20visited%20the%20Thrive%20Consults%20website%20and%20I%20would%20like%20to%20enquire%20about%20your%20services." className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase">
            <FaWhatsapp className="text-lg" />
            WhatsApp Us Now
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────
export const metadata = {
  title: 'Strategic Human Resources | Thrive Consult',
  description: 'We help Nigerian businesses hire right, manage fairly, and build people infrastructure that performs consistently.'
};

export default function HRPage() {
  return (
    <main>
      <HRHero />
      <HRProblem />
      <HRDeliverables />
      <HRProcess />
      <HRTestimonial />
      <HRCTA />
    </main>
  );
}
