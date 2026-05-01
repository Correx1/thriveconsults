import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaQuoteRight } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import DiagnosticCTA from '../../Home/DiagnosticCTA';

// ─── HERO ───────────────────────────────────────────────────────
const Hero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Traders and Importers</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        Your Business Is Making Money.<br className="hidden md:block" />
        <span className="text-teal-dark"> So Why Is There Never Enough Left?</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We help traders and importers across Nigeria build the structure, systems, and staff accountability that keep money in the business.
      </p>
    </div>
  </section>
);

// ─── PROBLEM ────────────────────────────────────────────────────
const Problem = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">We Understand Your Business</p>
          <h2 className="section-title text-deep-navy">
            You Did Not Come This Far to Be Stuck Here.
          </h2>
        </div>
        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed lg:pt-16">
          <p>You built this business yourself. No hand-holding, no borrowed start. You know your market, your suppliers, and your customers better than anyone.</p>
          <p>But something is not adding up. Revenue is coming in. But profit is hard to see at the end of the month. Your staff are present every day but the business still runs on you. You cannot leave for three days without something going wrong — a cash shortage, a stock discrepancy, a customer who was not treated right.</p>
          <p>You do not need someone to tell you to work harder. You need systems that make your business work even when you are not watching.</p>
          <p className="font-semibold text-deep-navy">That is what we build.</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── SERVICES / DELIVERABLES ─────────────────────────────────────
const services = [
  {
    title: 'Apprenticeship Business System',
    desc: 'Your apprentices are hardworking and loyal. But without clear roles, written responsibilities, and a structure they can follow, the business depends entirely on you. We formalise what you already have — role definitions, a three-level skills ladder, and four one-page operating systems printed and ready for your shop wall.',
    price: 'From ₦150,000',
    cta: 'Learn More About This'
  },
  {
    title: 'Shop Operating Systems (SOP Kit)',
    desc: 'Four laminated one-page guides covering daily opening and closing routine, customer service standards, stock management, and cash handling. Simple enough for any apprentice to follow. Designed to be posted on the wall, not filed in a drawer.',
    price: 'From ₦30,000',
    cta: 'Get the SOP Kit'
  },
  {
    title: 'Business Coaching for Oga',
    desc: 'Monthly one-on-one sessions built specifically for business owners who want to move from working in the business every day to building a business that works without them. Plain language, real strategies, WhatsApp access between sessions.',
    price: 'From ₦150,000 per month',
    cta: 'View Coaching Options'
  },
  {
    title: 'Business Diagnostic',
    desc: 'Not sure where your business is leaking? We come in, spend a day with you, and tell you exactly where the money is going, why staff problems keep repeating, and what needs to change first.',
    price: 'From ₦100,000',
    cta: 'Book a Business Audit'
  }
];

const Services = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">What We Do for Traders and Importers</p>
        <h2 className="section-title text-deep-navy">Practical Solutions for Real Trading Businesses</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white border border-gray-200 p-10 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-deep-navy font-bold text-xl">{s.title}</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow">{s.desc}</p>
            <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
              <span className="text-teal-dark font-bold text-sm">{s.price}</span>
              <Link href="#contact" className="text-deep-navy text-xs font-bold uppercase tracking-wider border-b border-deep-navy/20 hover:text-teal-dark hover:border-teal-dark transition-colors pb-0.5">
                {s.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── APPRENTICESHIP FEATURE ──────────────────────────────────────
const features = [
  { title: 'Clear Role Definitions', desc: 'Every apprentice knows exactly what they are responsible for' },
  { title: '3-Level Skills Ladder', desc: 'A clear path from apprentice to trusted senior hand' },
  { title: '4 One-Page Operating Systems', desc: 'Posted on the wall, not filed in a drawer' },
  { title: 'Cash and Stock Controls', desc: 'Know exactly where every naira and every item goes' }
];

const ApprenticeshipSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">Built for How You Actually Run Your Business</p>
          <h2 className="section-title text-deep-navy">
            We Understand the Nigerian Apprenticeship System.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>We are not here to change how you run your business. The Apprenticeship system has produced some of Nigeria&apos;s most successful traders. It builds loyalty, work ethic, and commercial instinct that no classroom can replicate.</p>
            <p>But a growing business needs more than loyal apprentices. It needs structure around them. Clear roles. Simple systems. A path for the best ones to grow.</p>
            <p className="font-semibold text-deep-navy">That is the gap we fill — without disrupting the relationship between Oga and apprentice. Just adding the structure that makes it work better for everyone.</p>
          </div>
          <Link href="#contact" className="inline-block mt-8 text-teal-dark text-xs font-bold tracking-wider uppercase border-b border-teal-dark/30 hover:border-teal-dark transition-colors pb-0.5">
            Tell Me More About the Apprenticeship System
          </Link>
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pt-16">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6">
              <FiCheck className="text-teal-dark w-5 h-5 mb-4" />
              <h4 className="text-deep-navy font-bold text-base mb-2">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── HOW WE WORK ─────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'We Talk First', desc: 'Send us a WhatsApp message. We will have a quick conversation about your business and what is not working. No forms to fill, no Zoom call required.' },
  { num: '02', title: 'We Come to You', desc: 'For most trader engagements, we come to your shop or warehouse. We see how things actually work before we suggest anything.' },
  { num: '03', title: 'We Build Something Practical', desc: 'Whatever your business needs — a role structure, a cash system, a stock routine — we build it in a format your team can actually use. Not a document that sits in a drawer.' },
  { num: '04', title: 'You See the Difference', desc: 'Most clients notice a change within the first two weeks. Staff more accountable. Money more visible. The Oga less exhausted.' }
];

const Process = () => (
  <section className="relative py-16 bg-deep-navy overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="section-subtitle text-teal-dark">How We Work With Traders</p>
        <h2 className="section-title text-white">Simple. Practical. No Long Grammar.</h2>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left group">
              <div className="w-14 h-14 rounded-full border border-teal-dark/30 bg-deep-navy flex items-center justify-center text-teal-dark mb-8 shadow-[0_0_15px_rgba(36,219,141,0.1)] group-hover:border-teal-dark transition-colors duration-300">
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
const Testimonial = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle text-teal-dark">From a Business Like Yours</p>
          <h2 className="section-title text-deep-navy">Real Results.<br />Real Businesses.</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
            Feedback from traders and importers who have worked with Thrive Consults.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <FaQuoteRight className="text-teal-dark/10 text-5xl mb-6" />
          <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
            &ldquo;My apprentices are hardworking but the business was still too dependent on me. Thrive helped me set up a proper structure for how each person works, what they are responsible for, and how the shop runs day to day. Things that used to go wrong quietly stopped going wrong.&rdquo;
          </p>
          <div className="w-8 h-[2px] bg-teal-dark mb-5" />
          <p className="text-deep-navy font-bold text-sm md:text-base">Name withheld</p>
          <p className="text-teal-dark text-xs font-semibold">Business Owner, Trading Business</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── CTA ─────────────────────────────────────────────────────────
const CTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="section-title text-white">Let Us Talk About Your Business.</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Send us a WhatsApp message. We will respond within 24 hours. If you are serious about fixing your business, we are serious about helping you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
          <a href="https://wa.me/" className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 flex items-center justify-center gap-2 uppercase">
            <FaWhatsapp className="text-lg" /> WhatsApp Us Now
          </a>
          <a href="#contact" className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 text-center uppercase">
            Book a Free Session
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ─── PAGE ─────────────────────────────────────────────────────────
export const metadata = {
  title: 'Traders and Importers | Thrive Consult',
  description: 'We help traders and importers across Nigeria build the structure, systems, and staff accountability that keep money in the business.'
};

export default function TradersPage() {
  return (
    <main>
      <Hero />
      {/* <Problem /> */}
       <ApprenticeshipSection />
      
      <DiagnosticCTA />
      <Services />
      <Process />
      <Testimonial />
      <CTA />
    </main>
  );
}
