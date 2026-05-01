import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaQuoteRight, FaCheck } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import DiagnosticCTA from '@/app/Home/DiagnosticCTA';

// ─── HERO ───────────────────────────────────────────────────────
const Hero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Manufacturing and Industrial</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        You Know How to Produce.<br className="hidden md:block" />
        <span className="text-teal-dark"> Do You Know What It Costs You?</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We help Nigerian manufacturers build the operational systems, workforce structures, and technology that give them real control of their business.
      </p>
    </div>
  </section>
);

// ─── SERVICES ───────────────────────────────────────────────────
const services = [
  {
    title: 'Operational Systems and Process Design',
    desc: 'We document how your production, procurement, and distribution actually work — then redesign the processes that are inconsistent, wasteful, or dangerously dependent on specific individuals. SOPs, workflow maps, and operational standards that anyone on your team can follow.',
    cta: 'Build Your Operational System'
  },
  {
    title: 'Custom ERP Development',
    desc: 'For manufacturers ready to digitise their operations, we develop custom ERP systems built around your specific production processes, staff structure, and reporting needs. We consult first — then build the technology that reflects your business. Not a generic solution adapted badly.',
    cta: 'Talk to Us About ERP'
  },
  {
    title: 'Workforce Management and HR Systems',
    desc: 'Attendance, accountability, performance targets, and shift management — built into a structure your supervisors can enforce without you being on the floor. We also design the apprenticeship and entry-level staff structures that work with how manufacturing businesses in Nigeria actually hire.',
    cta: 'Build Your HR Structure'
  },
  {
    title: 'Business Diagnostic for Manufacturers',
    desc: 'A structured one-day review of your production, procurement, people, and financial systems. You receive a plain-language findings report and a prioritised action plan within five working days.',
    cta: 'Book a Manufacturing Audit'
  }
];

const Services = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">What We Do for Manufacturers</p>
        <h2 className="section-title text-deep-navy">From Tribal Knowledge to a Business That Runs on Systems</h2>
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

// ─── ERP SECTION ────────────────────────────────────────────────
const erpFeatures = [
  { title: 'Offline capability', desc: 'For low-connectivity environments' },
  { title: 'Naira-denominated cost tracking', desc: 'Full financial reporting in your currency' },
  { title: 'Batch production tracking', desc: 'Cost-per-unit visibility for every batch' },
  { title: 'Supplier and procurement management', desc: 'Track every material in and out' },
  { title: 'Staff attendance and payroll', desc: 'Full workforce visibility' },
  { title: 'Executive dashboard', desc: 'Owner-level visibility from anywhere' }
];

const ERPSection = () => (
  <section className="py-24 bg-deep-navy relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">Technology That Works in Your Environment</p>
          <h2 className="section-title text-white">
            Custom ERP Built for Nigerian Manufacturers.
          </h2>
          <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed mt-6">
            <p>Most ERP systems were not designed for a manufacturer in Onitsha dealing with intermittent power, open market procurement, cash transactions, and a mixed staff structure of salaried employees and apprentices.</p>
            <p>Generic software adapted for Nigerian conditions fails in exactly the places you need it most.</p>
            <p className="font-semibold text-white">Thrive Consults develops custom ERP systems built around how your business actually works — not how a software company in Europe thinks it should work. We start with a full operational diagnostic, then build the technology that digitises it.</p>
          </div>
          <Link href="/contact" className="inline-block mt-8 px-8 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 uppercase">
            Talk to Us About ERP Development
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:pt-8">
          {erpFeatures.map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6">
              <FaCheck className="text-teal-dark w-4 h-4 mb-4" />
              <h4 className="text-white font-bold text-sm mb-1">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
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
            Feedback from manufacturers who have worked with Thrive Consults.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <FaQuoteRight className="text-teal-dark/10 text-5xl mb-6" />
          <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
            &ldquo;Before Thrive came in, everything in my business ran through me. I could not travel for three days without something breaking down. They came in, mapped how we worked, built systems my team could follow, and now the business runs whether I am there or not.&rdquo;
          </p>
          <div className="w-8 h-[2px] bg-teal-dark mb-5" />
          <p className="text-deep-navy font-bold text-sm md:text-base">Name withheld</p>
          <p className="text-teal-dark text-xs font-semibold">Managing Director, Manufacturing Company</p>
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
          <p className="section-subtitle text-teal-dark">Manufacturers We Have Worked With</p>
          <h2 className="section-title text-deep-navy">Clients Who Trusted the Process.</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4 max-w-md">
            We have worked with Nigerian manufacturers in FMCG, food processing, oils, and agro-processing — building the systems that give owners real control.
          </p>
        </div>
        <div className="space-y-4">
          {['Divine Crown Nig. Ltd.', 'SuperOil'].map((client, i) => (
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
          <h2 className="section-title text-white">Let Us Talk About Your Operations.</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            We have worked with Nigerian manufacturers in FMCG, food processing, oils, and agro-processing. We understand your environment. Let us have an honest conversation about what it would take to give you real control of your business.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
          <Link href="/contact" className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase">
            Book a Discovery Session
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
  title: 'Manufacturing and Industrial | Thrive Consult',
  description: 'We help Nigerian manufacturers build the operational systems, workforce structures, and technology that give them real control of their business.'
};

export default function ManufacturingPage() {
  return (
    <main>
      <Hero />
      <Services />
     
      <ERPSection />
      <Testimonial />
      <Clients />
      <CTA />
    </main>
  );
}
