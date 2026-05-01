import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaQuoteRight, FaCheck } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

// ─── HERO ───────────────────────────────────────────────────────
const Hero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Supermarkets and Retail</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        Your Customers Are Walking In.<br className="hidden md:block" />
        <span className="text-teal-dark"> Are They Coming Back?</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We help supermarkets and retail chains across Nigeria build the staff systems, customer experience, and operational controls that protect revenue and build loyalty.
      </p>
    </div>
  </section>
);

// ─── SERVICES ───────────────────────────────────────────────────
const services = [
  {
    title: 'Customer Service System',
    desc: 'We build the five-stage customer experience framework for your entire team — how customers are greeted, served, and followed up after purchase. Delivered as a documented standard, a staff training programme, and a simple monitoring tool your managers can use daily.',
    cta: 'Build Your Customer Service System'
  },
  {
    title: 'Inventory and Operations Systems',
    desc: 'Stock management routines, daily opening and closing checklists, cash reconciliation processes, and supplier management procedures — documented and implemented with your team. We also develop custom ERP systems for supermarkets ready to digitise their entire operations.',
    cta: 'Fix Your Operations'
  },
  {
    title: 'Staff Structure and HR Systems',
    desc: 'Role definitions, shift structures, performance management, and onboarding programmes that reduce staff turnover and raise service standards across every branch.',
    cta: 'Build Your HR Structure'
  },
  {
    title: 'Customer Loyalty Programme Design',
    desc: 'A structured loyalty programme keeps existing customers buying from you instead of your competitor. We design the mechanics, the rewards structure, and the WhatsApp or digital delivery method suited to your customer base.',
    cta: 'Design Your Loyalty Programme'
  }
];

const Services = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">What We Do for Supermarkets and Retail</p>
        <h2 className="section-title text-deep-navy">Protect Revenue. Build Loyalty. Scale the Business.</h2>
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

// ─── ERP / MULTI-BRANCH SECTION ─────────────────────────────────
const erpFeatures = [
  { title: 'POS Integration', desc: 'Seamless point-of-sale connection across all branches' },
  { title: 'Multi-branch inventory', desc: 'Real-time stock visibility across every location' },
  { title: 'Staff management', desc: 'Attendance, shifts, and payroll in one place' },
  { title: 'Customer loyalty tracking', desc: 'Know who your best customers are and reward them' },
  { title: 'Executive dashboard', desc: 'Owner-level visibility from anywhere, any time' }
];

const ERPSection = () => (
  <section className="py-24 bg-deep-navy relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">Running Multiple Branches?</p>
          <h2 className="section-title text-white">
            One System Across All Locations.
          </h2>
          <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed mt-6">
            <p>Managing inventory, staff, and sales performance across multiple branches without a central system is how leakage happens at scale.</p>
            <p className="font-semibold text-white">Thrive Consults develops custom ERP systems for retail chains — POS integration, multi-branch inventory, staff management, customer loyalty tracking, and executive dashboards that give you real-time visibility from anywhere.</p>
          </div>
          <Link href="/contact" className="inline-block mt-8 px-8 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 uppercase">
            Talk to Us About ERP for Your Supermarket
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
            Feedback from supermarket and retail operators who have worked with Thrive Consults.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <FaQuoteRight className="text-teal-dark/10 text-5xl mb-6" />
          <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
            &ldquo;Staff management was the biggest stress in running our supermarket. High turnover, inconsistent service, and no clear accountability. Thrive built an HR structure that changed how we hire, how we manage, and how our staff show up every day. The difference is visible to our customers.&rdquo;
          </p>
          <div className="w-8 h-[2px] bg-teal-dark mb-5" />
          <p className="text-deep-navy font-bold text-sm md:text-base">Name withheld</p>
          <p className="text-teal-dark text-xs font-semibold">CEO / Owner, Supermarket, Lagos</p>
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
          <p className="section-subtitle text-teal-dark">Retail Businesses We Have Worked With</p>
          <h2 className="section-title text-deep-navy">Clients Who Trusted the Process.</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4 max-w-md">
            We have helped retail businesses across Nigeria build the systems that make multi-branch operations run to a consistent standard.
          </p>
        </div>
        <div className="space-y-4">
          {['WideChoice', 'Leadmart', 'KrystalMart'].map((client, i) => (
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
          <h2 className="section-title text-white">Let Us Talk About Your Supermarket.</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            One conversation is usually enough to identify where the biggest opportunities are. Book a free discovery session or send us a WhatsApp message.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
          <Link href="/contact" className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase">
            Book a Discovery Session
          </Link>
          <a href="https://wa.me/2347032681154?text=Hello%2C%20I%20visited%20the%20Thrive%20Consults%20website%20and%20I%20would%20like%20to%20enquire%20about%20your%20services." className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase">
            <FaWhatsapp className="text-lg" /> WhatsApp Us Now
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────
export const metadata = {
  title: 'Supermarkets and Retail | Thrive Consult',
  description: 'We help supermarkets and retail chains across Nigeria build the staff systems, customer experience, and operational controls that protect revenue and build loyalty.'
};

export default function SupermarketsPage() {
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
