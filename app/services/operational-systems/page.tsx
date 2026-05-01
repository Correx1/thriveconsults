import React from 'react';
import { FiSettings, FiBarChart2, FiUsers, FiFileText, FiTrendingUp, FiGitBranch } from 'react-icons/fi';
import { FaWhatsapp, FaQuoteRight, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

// ─── HERO ───────────────────────────────────────────────────────
const OpsHero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Operational Systems and Automation</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        If Your Business Cannot Run Without You,<br className="hidden md:block" />
        <span className="text-teal-dark"> You Do Not Own a Business.</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We rebuild how your business operates — from daily routines to full digital systems — so it runs consistently whether you are present or not.
      </p>
    </div>
  </section>
);

// ─── PROBLEM + SIGNALS ──────────────────────────────────────────
const signals = [
  'Your business slows down or makes mistakes every time you step away',
  'Your staff do the same tasks differently every time and quality is inconsistent',
  'You are losing money to stock leakage, cash discrepancies, or process errors you cannot trace',
  'You have grown past spreadsheets and WhatsApp but are not sure what the next step is',
  'You want to scale to multiple locations without multiplying your personal workload',
  'You are a manufacturer, supermarket, or real estate company ready to put your entire operation on a single digital system'
];

const OpsProblem = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">The Real Problem</p>
          <h2 className="section-title text-deep-navy">
            The Business That Runs on You Will Always Be Capped by You.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>Every business that depends on the founder&apos;s presence has a ceiling. And that ceiling is exactly as high as the founder&apos;s physical and mental capacity.</p>
            <p>The moment you step away, things slow down. Quality drops. Decisions wait. Mistakes repeat. And when you come back, you spend the first two days fixing what broke while you were gone.</p>
            <p>This is not a staff problem. It is a systems problem. Specifically, the absence of documented, enforced, and repeatable operating systems that your team can follow with or without you.</p>
            <p className="font-semibold text-deep-navy">That is what this service builds.</p>
          </div>
        </div>
        <div className="lg:pt-20">
          <p className="section-subtitle text-teal-dark mb-6">Who This Service Is For</p>
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

// ─── ERP SECTION ────────────────────────────────────────────────
const erpFeatures = [
  'Inventory and warehouse management',
  'Production planning and batch tracking',
  'Purchase orders and supplier management',
  'POS integration and cash reconciliation',
  'HR and payroll management',
  'CRM and sales pipeline',
  'Executive dashboard and KPI reporting',
  'Customer loyalty tracking',
  'Offline capability for low-connectivity environments',
  'Naira-denominated financial reporting'
];

const erpPlans = [
  { tier: 'Starter ERP', target: 'Small businesses and traders', price: 'From ₦500,000' },
  { tier: 'Business ERP', target: 'Supermarkets, real estate, growing SMEs', price: 'From ₦2,000,000' },
  { tier: 'Enterprise ERP', target: 'Manufacturers and multi-branch operations', price: 'From ₦8,000,000' },
  { tier: 'Monthly Support', target: 'Maintenance and updates', price: 'From ₦50,000/month' }
];

const OpsERP = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left: Narrative */}
        <div>
          <p className="section-subtitle text-teal-dark">Custom ERP Development</p>
          <h2 className="section-title text-deep-navy">
            The Technology That Digitises Your Operating System.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>An ERP is not software you buy off a shelf. It is the digital version of how your business works.</p>
            <p>Most ERP solutions sold in Nigeria were designed for businesses in other markets — different supply chains, different staff structures, different connectivity. Adapting them is expensive and the result is a system nobody uses.</p>
            <p>Thrive Consults builds custom ERPs. We start with the Operational Diagnostic — mapping every process before we design a single screen. Then we build a system that reflects your business exactly.</p>
            <p className="font-semibold text-deep-navy">We do not begin ERP development until we have completed a full Operational Diagnostic. This is the step most ERP projects skip — and the reason most ERP projects fail.</p>
          </div>
          <Link href="https://wa.me/2347032681154?text=Hello%2C%20I%20visited%20the%20Thrive%20Consults%20website%20and%20I%20would%20like%20to%20enquire%20about%20your%20services." className="inline-block mt-8 px-8 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 uppercase">
            Talk to Us About ERP
          </Link>
        </div>

        {/* Right: Features + Pricing */}
        <div className="space-y-10">
          {/* ERP Features */}
          <div className="bg-white border border-gray-200 p-8">
            <h3 className="text-deep-navy font-bold text-lg mb-6">What a Thrive ERP Can Include</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {erpFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheck className="text-teal-dark shrink-0 mt-0.5 w-3 h-3" />
                  <span className="text-gray-600 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ERP Pricing */}
          <div className="bg-deep-navy p-8">
            <h3 className="text-white font-bold text-lg mb-6">ERP Investment</h3>
            <div className="space-y-4">
              {erpPlans.map((plan, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-white font-semibold text-sm">{plan.tier}</p>
                    <p className="text-gray-400 text-xs">{plan.target}</p>
                  </div>
                  <p className="text-teal-dark font-bold text-sm shrink-0 ml-4">{plan.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ─── DELIVERABLES ───────────────────────────────────────────────
const deliverables = [
  { icon: FiFileText, title: 'SOPs and Process Design', desc: 'We document exactly how every key activity in your business should be done — from opening procedures to customer onboarding. Written so anyone can follow them, not just your senior staff.' },
  { icon: FiSettings, title: 'Custom ERP Development', desc: 'Where off-the-shelf software does not fit, we build lightweight ERP solutions tailored to how your business actually operates. Inventory, POS, HR, CRM, and financial reporting in one system.' },
  { icon: FiBarChart2, title: 'KPI Dashboards', desc: 'We define the metrics that actually matter and build dashboards that give you real-time visibility — without requiring you to chase anyone for information.' },
  { icon: FiUsers, title: 'Change Management', desc: 'New systems only work if your team adopts them. We manage the transition — training, communication, and the first weeks of live operation — to ensure adoption sticks.' },
  { icon: FiTrendingUp, title: 'Workflow Automation', desc: 'We identify repetitive manual tasks and implement tools that eliminate them — freeing your team to focus on work that actually requires human judgement.' },
  { icon: FiGitBranch, title: 'Organisational Operating Model', desc: 'We design the structure of how your organisation makes decisions, communicates, and escalates issues — so problems get solved at the right level, not always at the top.' }
];

const OpsDeliverables = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">What We Build</p>
        <h2 className="section-title text-deep-navy">Into Your Business</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deliverables.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-gray-50 border border-gray-200 p-8 rounded-none hover:shadow-md transition-shadow duration-300">
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

// ─── HOW WE WORK ────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'Operational Audit', desc: 'We map how your business currently works. Every process, every role, every decision point.' },
  { num: '02', title: 'Gap Analysis', desc: 'We identify what is broken, what is missing, and what is dangerously dependent on a single person.' },
  { num: '03', title: 'System Design', desc: 'We design the new processes and — for ERP clients — the system architecture.' },
  { num: '04', title: 'Build and Implement', desc: 'SOPs are written and trained. ERP is built and tested with real data. Technology is deployed.' },
  { num: '05', title: 'Handover and Embed', desc: 'Your team is trained. Playbooks are in place. We do not leave until it is working.' }
];

const OpsProcess = () => (
  <section className="relative py-16 bg-deep-navy overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="section-subtitle text-teal-dark">How We Work</p>
        <h2 className="section-title text-white">From Diagnosis to a Business That Runs Itself.</h2>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left group">
              <div className="w-14 h-14 rounded-full border border-teal-dark/30 flex items-center justify-center text-teal-dark bg-deep-navy mb-8 shadow-[0_0_15px_rgba(36,219,141,0.1)] group-hover:border-teal-dark transition-colors duration-300">
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
const OpsTestimonial = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle text-teal-dark">What Our Clients Say</p>
          <h2 className="section-title text-deep-navy">Real Results.<br />Real Businesses.</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
            Feedback from business owners who have rebuilt their operations with Thrive Consults.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <FaQuoteRight className="text-teal-dark/10 text-5xl mb-6" />
          <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
            &ldquo;Before Thrive came in, everything in my business ran through me. I could not travel for three days without something breaking down. They came in, mapped how we worked, built systems my team could follow, and now the business runs whether I am there or not.&rdquo;
          </p>
          <div className="w-8 h-[2px] bg-teal-dark mb-5" />
          <p className="text-deep-navy font-bold text-sm md:text-base">Name withheld</p>
          <p className="text-teal-dark text-xs font-semibold">Managing Director, Manufacturing Client</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── CTA ────────────────────────────────────────────────────────
const OpsCTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h2 className="section-title text-white">Ready to Build a Business That Runs Without You?</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Start with a conversation. Tell us where you are and what is not working. We will tell you exactly what it would take to fix it.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
          <a href="/contact" className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase">
            Book a Free Discovery Session
          </a>
          <a href="https://wa.me/2347032681154?text=Hello%2C%20I%20visited%20the%20Thrive%20Consults%20website%20and%20I%20would%20like%20to%20enquire%20about%20your%20services." className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase">
            <FaWhatsapp className="text-lg" />
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────
export const metadata = {
  title: 'Operational Systems and Automation | Thrive Consult',
  description: 'We rebuild how Nigerian businesses operate — SOPs, ERP systems, KPI dashboards — so they run consistently without the founder.'
};

export default function OperationalSystemsPage() {
  return (
    <main>
      <OpsHero />
      <OpsProblem />
      <OpsERP />
      <OpsDeliverables />
      <OpsProcess />
      <OpsTestimonial />
      <OpsCTA />
    </main>
  );
}
