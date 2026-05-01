import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaQuoteRight } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

// ─── HERO ───────────────────────────────────────────────────────
const Hero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Real Estate and Property</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        Your Sales Team Is Working.<br className="hidden md:block" />
        <span className="text-teal-dark"> Your Conversion Rate Is Not.</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We help real estate companies across Nigeria build the sales systems, marketing pipelines, and operational structures that close deals without the founder in every conversation.
      </p>
    </div>
  </section>
);

// ─── SERVICES ───────────────────────────────────────────────────
const services = [
  {
    title: 'Sales Process Design',
    desc: 'We build a documented, repeatable sales process from first contact to signed agreement — with clear stages, follow-up cadence, objection-handling scripts, and close techniques your team can execute without your involvement.',
    cta: 'Fix Your Sales Process'
  },
  {
    title: 'Digital Marketing Strategy',
    desc: 'Instagram, Facebook, WhatsApp, and Google working together — not separately. We design a 90-day digital strategy that targets your ideal buyers, builds trust before they enquire, and converts interest into appointments.',
    cta: 'Build Your Marketing System'
  },
  {
    title: 'Sales Team Structure and Training',
    desc: 'Role clarity, commission structure, performance targets, and regular coaching for your agents. A sales team without a system is just a group of people making phone calls. We fix that.',
    cta: 'Train Your Sales Team'
  },
  {
    title: 'Business Diagnostic for Real Estate',
    desc: 'Not sure where the bottleneck is? We audit your entire sales and marketing operation — from lead source to close rate — and give you a clear action plan.',
    cta: 'Book a Business Audit'
  }
];

const Services = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">What We Do for Real Estate Companies</p>
        <h2 className="section-title text-deep-navy">From More Enquiries to More Closings</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white border border-gray-200 p-10 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-deep-navy font-bold text-xl">{s.title}</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow">{s.desc}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-teal-dark text-xs font-bold uppercase tracking-wider border-b border-teal-dark/20 hover:border-teal-dark transition-colors pb-0.5 w-fit mt-auto">
              {s.cta} <FiArrowRight className="text-sm" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── PROCESS ────────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'Discovery Session', desc: 'We look at your current leads, conversion rate, sales process, and marketing spend. Thirty minutes gives us enough to tell you exactly where the problem is.' },
  { num: '02', title: 'Sales and Marketing Audit', desc: 'A detailed review of every stage of your pipeline — from how leads find you to how deals are closed. We identify the specific stages where buyers are being lost.' },
  { num: '03', title: 'System Design and Implementation', desc: 'We rebuild the sales process, train the team, and set up the marketing system. We stay engaged through the first full sales cycle to make sure everything is working.' },
  { num: '04', title: 'Ongoing Optimisation', desc: 'Monthly check-ins to review numbers, adjust what is not performing, and identify the next area to improve.' }
];

const Process = () => (
  <section className="relative py-16 bg-deep-navy overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="section-subtitle text-teal-dark">How a Typical Engagement Works</p>
        <h2 className="section-title text-white">We Start With Your Sales Numbers — Not Our Proposals.</h2>
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

// ─── TESTIMONIAL ────────────────────────────────────────────────
const Testimonial = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle text-teal-dark">What Our Clients Say</p>
          <h2 className="section-title text-deep-navy">Real Results.<br />Real Businesses.</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
            Feedback from real estate companies who have rebuilt their sales and marketing with Thrive Consults.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <FaQuoteRight className="text-teal-dark/10 text-5xl mb-6" />
          <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
            &ldquo;Our sales team was big but our conversion rate was poor. Every serious buyer ended up talking to me personally before they committed. Thrive redesigned our entire sales process. Within 90 days our team was closing deals independently and we had our strongest quarter since we launched.&rdquo;
          </p>
          <div className="w-8 h-[2px] bg-teal-dark mb-5" />
          <p className="text-deep-navy font-bold text-sm md:text-base">Name withheld</p>
          <p className="text-teal-dark text-xs font-semibold">Director, Real Estate Company, South-East Nigeria</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── CLIENTS ────────────────────────────────────────────────────
const Clients = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle text-teal-dark">Real Estate Companies We Have Worked With</p>
          <h2 className="section-title text-deep-navy">Clients Who Trusted the Process.</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4 max-w-md">
            We have worked with real estate companies in South-East Nigeria, helping them build sales systems, digital strategies, and operational structures that scale.
          </p>
        </div>
        <div className="space-y-4">
          {['Crystal Garden Estate', 'Dotland Estate Ltd.'].map((client, i) => (
            <div key={i} className="flex items-center gap-5 bg-gray-50 border border-gray-200 px-8 py-5">
              <div className="w-2 h-2 bg-teal-dark shrink-0" />
              <p className="text-deep-navy font-bold text-lg">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── CTA ────────────────────────────────────────────────────────
const CTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="section-title text-white">Let Us Look at Your Sales Pipeline Together.</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            One thirty-minute conversation is usually enough to identify where the deals are being lost. No pressure, no commitment — just clarity.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
          <Link href="/contact" className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase">
            Book a Free Discovery Session
          </Link>
          <a href="https://wa.me/2347032681154?text=Hello%2C%20I%20visited%20the%20Thrive%20Consults%20website%20and%20I%20would%20like%20to%20enquire%20about%20your%20services." className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase">
            <FaWhatsapp className="text-lg" /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────
export const metadata = {
  title: 'Real Estate and Property | Thrive Consult',
  description: 'We help real estate companies across Nigeria build the sales systems, marketing pipelines, and operational structures that close deals without the founder in every conversation.'
};

export default function RealEstatePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Testimonial />
      <Clients />
      <CTA />
    </main>
  );
}
