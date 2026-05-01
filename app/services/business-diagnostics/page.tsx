import React from 'react';
import { FiClipboard, FiBarChart2, FiUsers, FiMonitor, FiSettings, FiFileText } from 'react-icons/fi';
import { FaWhatsapp, FaQuoteRight } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import DiagnosticCTA from '../../Home/DiagnosticCTA';
import Link from 'next/link';

// ─── HERO ───────────────────────────────────────────────────────
const DiagHero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Business Diagnostics and Advisory</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        You Cannot Fix What You Have Not<br className="hidden md:block" />
        <span className="text-teal-dark"> Properly Diagnosed.</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        Most businesses are solving the wrong problems. Our Business Diagnostic finds the real issue and gives you a clear, honest picture of exactly where your business stands.
      </p>
    </div>
  </section>
);

// ─── PROBLEM + SIGNALS ──────────────────────────────────────────
const signals = [
  'You are making revenue but profit is unclear and you do not know why',
  'You feel like something is wrong but you cannot put your finger on what it is',
  'You have tried different solutions and the same problems keep coming back',
  'You are about to invest significantly and want to make sure you are investing in the right area',
  'You want to start with a structured assessment before committing to a full engagement',
  'You want honest, independent feedback from someone with no interest in flattering you'
];

const DiagProblem = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">The Real Problem</p>
          <h2 className="section-title text-deep-navy">
            Treating Symptoms Will Never Cure the Disease.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>A trader keeps losing money every month. So he hires fewer staff. Revenue stays the same. The money still disappears.</p>
            <p>A real estate company is not closing enough deals. So they hire two more salespeople. The conversion rate stays low.</p>
            <p>A manufacturer keeps having production inconsistencies. So they buy new equipment. The inconsistencies continue.</p>
            <p>The problem in every case is not the thing they tried to fix. The problem is the thing they did not look for.</p>
            <p className="font-semibold text-deep-navy">That is what a Business Diagnostic does. It stops the guesswork. It finds the root cause. And it gives you a clear, prioritised action plan so the next naira you spend is pointed at the actual problem.</p>
          </div>
        </div>
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

// ─── BEEP CTA ───────────────────────────────────────────────────
// Imported directly: <DiagnosticCTA />

// ─── DELIVERABLES ───────────────────────────────────────────────
const deliverables = [
  { icon: FiClipboard, title: 'Full Business Health Audit', desc: 'A comprehensive review across five dimensions — strategy and direction, people and culture, sales and revenue, operations and systems, and visibility and customer experience. The most thorough diagnostic we offer.' },
  { icon: FiBarChart2, title: 'Financial Systems Review', desc: 'We review how money moves through your business. Cash controls, cost of production, margin by product line, financial reporting, and the gaps between what you think the numbers are and what they actually are.' },
  { icon: FiUsers, title: 'HR and People Audit', desc: 'We evaluate your team structure, role clarity, performance management practices, and the unspoken culture that is driving behaviour. We interview key staff and identify both the people risks and the opportunities.' },
  { icon: FiMonitor, title: 'Digital Presence Audit', desc: 'We review your website, social media, WhatsApp presence, and online reputation. We separate what looks active from what is actually converting and give you a clear picture of where you are losing potential customers online.' },
  { icon: FiSettings, title: 'Operational Process Audit', desc: 'We map how work actually flows through your business. Where decisions are made, where tasks are dropped, where bottlenecks are, and which processes depend entirely on one person\'s memory.' },
  { icon: FiFileText, title: 'Diagnostic Report and Strategic Roadmap', desc: 'A plain-language findings report and a prioritised action plan. Not a 60-page document full of graphs. A clear, honest summary of what we found, what it means for your business, and the specific steps to take in order of urgency.' }
];

const DiagDeliverables = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">What the Diagnostic Covers</p>
        <h2 className="section-title text-deep-navy">We Look at Every Part of Your Business</h2>
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

// ─── DIAGNOSTIC INVESTMENT ──────────────────────────────────────
const plans = [
  {
    label: null,
    name: 'Focused Diagnostic',
    price: '₦150,000',
    desc: 'One day. One area — HR, sales, operations, or digital. Findings report within five working days.',
    bullets: ['One focus area of your choice', 'On-site or remote assessment', 'Plain-language findings report', 'Prioritised action plan', 'Credit toward full engagement'],
    cta: 'Book This Audit',
    featured: false
  },
  {
    label: 'Most Thorough',
    name: 'Full Business Diagnostic',
    price: '₦350,000',
    desc: 'Two to three days. All five dimensions. Comprehensive report and strategic roadmap.',
    bullets: ['All five business dimensions', 'Key staff interviews', 'Comprehensive findings report', 'Strategic roadmap included', 'Credit toward full engagement'],
    cta: 'Book This Audit',
    featured: true
  },
  {
    label: null,
    name: 'B.E.E.P. Self-Diagnostic',
    price: 'Free',
    desc: 'Self-administered online diagnostic. Instant scorecard. The fastest way to know which vital sign of your business needs attention.',
    bullets: ['Five minutes to complete', 'Instant scorecard', 'Four dimension analysis', 'Clear next steps', 'No payment required'],
    cta: 'Take It Now',
    featured: false
  }
];

const DiagInvestment = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">Diagnostic Investment</p>
        <h2 className="section-title text-deep-navy">Choose Your Starting Point</h2>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-xl mx-auto">
          Diagnostic fees are credited toward any full consulting engagement that follows within 60 days.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative border p-8 flex flex-col h-full transition-shadow duration-300 ${
              plan.featured
                ? 'border-teal-dark shadow-[0_0_0_2px_theme(colors.teal-dark)] bg-white'
                : 'border-gray-200 bg-white hover:shadow-md'
            }`}
          >
            {plan.label && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-dark text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1">
                {plan.label}
              </div>
            )}
            <div className="mb-6 pt-2">
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">{plan.name}</p>
              <p className={`text-3xl font-black ${plan.featured ? 'text-deep-navy' : plan.price === 'Free' ? 'text-teal-dark' : 'text-deep-navy'}`}>
                {plan.price}
              </p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{plan.desc}</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3">
                  <FiCheck className="text-teal-dark shrink-0 mt-0.5 w-4 h-4" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className={`w-full text-center py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                plan.featured
                  ? 'bg-teal-dark text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-dark/30'
                  : 'border border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── HOW IT WORKS (5 steps) ─────────────────────────────────────
const steps = [
  { num: '01', title: 'Scoping Call', desc: 'We spend 30 minutes understanding your business and agreeing on the scope of the diagnostic.' },
  { num: '02', title: 'Assessment', desc: 'Depending on scope, we spend one to three days with your business — observing, interviewing, reviewing documents.' },
  { num: '03', title: 'Analysis', desc: 'We identify root causes, not just symptoms. We connect the dots across operations, people, sales, and finance.' },
  { num: '04', title: 'Report and Debrief', desc: 'Plain-language findings. What is working, what is not, what is at risk, and five to ten specific prioritised recommendations.' },
  { num: '05', title: 'Decision', desc: 'From here, you decide. Implement yourself, engage Thrive for a service, or do nothing. Our job is the clearest possible picture.' }
];

const DiagProcess = () => (
  <section className="relative py-16 bg-deep-navy overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="section-subtitle text-teal-dark">How the Diagnostic Works</p>
        <h2 className="section-title text-white">Structured, Honest, and Delivered Fast.</h2>
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
const DiagTestimonial = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle text-teal-dark">What Our Clients Say</p>
          <h2 className="section-title text-deep-navy">
            Real Results.<br />Real Businesses.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
            Feedback from business owners who have gone through our diagnostic process.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <FaQuoteRight className="text-teal-dark/10 text-5xl mb-6" />
          <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
            &ldquo;Our sales team was big but our conversion rate was poor. Every serious buyer ended up talking to me personally before they committed. Thrive redesigned our entire sales process. Within 90 days our team was closing deals independently and we had our strongest quarter since we launched.&rdquo;
          </p>
          <div className="w-8 h-[2px] bg-teal-dark mb-5" />
          <p className="text-deep-navy font-bold text-sm md:text-base">Name withheld</p>
          <p className="text-teal-dark text-xs font-semibold">Director, Real Estate Client</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── CTA ────────────────────────────────────────────────────────
const DiagCTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h2 className="section-title text-white">Stop Guessing. Start Knowing.</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            A business that does not know its real problems keeps spending money on the wrong solutions. Book a diagnostic and let us find out exactly what is holding your business back.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
          <Link href="/contact" className="w-auto px-6 py-4 bg-teal-dark text-white text-xs font-bold tracking-wider rounded hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 text-center uppercase">
            Book a Business Diagnostic
          </Link>
          <Link href="/beep-diagnostic" className="w-auto px-6 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-wider rounded hover:bg-white/5 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase">
            <FaWhatsapp className="text-lg" />
            Take the Free B.E.E.P. Diagnostic First
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─── PAGE ────────────────────────────────────────────────────────
export const metadata = {
  title: 'Business Diagnostics and Advisory | Thrive Consult',
  description: 'Find the real problem in your business before spending on solutions. Our Business Diagnostic gives you clarity, direction, and a prioritised action plan.'
};

export default function DiagnosticsPage() {
  return (
    <main>
      <DiagHero />
      <DiagProblem />
      <DiagnosticCTA />
      <DiagDeliverables />
      <DiagInvestment />
      <DiagProcess />
      <DiagTestimonial />
      <DiagCTA />
    </main>
  );
}
