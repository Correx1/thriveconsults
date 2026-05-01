import React from 'react';
import { FiTrendingUp, FiUsers, FiBarChart2, FiSettings, FiMessageSquare, FiFileText, FiTag } from 'react-icons/fi';
import { FaWhatsapp, FaQuoteRight } from 'react-icons/fa';

// ─── HERO ───────────────────────────────────────────────────────
const MktHero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Marketing and Sales</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        A Good Product That Nobody Buys<br className="hidden md:block" />
        <span className="text-teal-dark"> Is Not a Business. It Is a Hobby.</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We build the sales and marketing systems that generate consistent, predictable revenue — without depending on the founder to close every deal.
      </p>
    </div>
  </section>
);

// ─── PROBLEM + SIGNALS ──────────────────────────────────────────
const signals = [
  'Your business depends on the founder\'s personal relationships to generate revenue',
  'Your sales team is active but conversion rates are not reflecting the effort',
  'You have a good product or service but consistent new customers are hard to find',
  'You have tried marketing but it never seems to produce real business',
  'You are ready to grow beyond referrals and word of mouth',
  'You are a real estate company whose agents cannot close without you',
  'You are a manufacturer with production capacity but struggling to grow distribution'
];

const MktProblem = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">The Real Problem</p>
          <h2 className="section-title text-deep-navy">
            Revenue Should Not Depend on How Good a Day You Are Having.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>If you went silent for 30 days — no calls, no visits, no WhatsApp messages — how much revenue would your business generate on its own?</p>
            <p>For most Nigerian businesses, the honest answer is: not much. Because the sales engine is not the business. It is the founder. The founder is the one with the relationships. The founder is the one who closes every deal.</p>
            <p>That is not a business. That is a one-person sales team with a company name attached.</p>
            <p className="font-semibold text-deep-navy">Real business growth happens when you build a system that finds customers, earns their trust, and converts them — with or without you in the room. That is exactly what this service builds.</p>
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

// ─── DELIVERABLES (7 items — last one centered) ─────────────────
const deliverables = [
  { icon: FiTrendingUp, title: 'Go-to-Market Strategy', desc: 'Before you spend another naira on marketing, you need to know who you are selling to, what you are saying, where they spend their attention, and why they should choose you. We answer all four questions and build the strategy that makes every marketing decision intentional.' },
  { icon: FiFileText, title: 'Sales Process Design', desc: 'A documented, stage-by-stage sales process your team can follow consistently. From first contact to signed agreement. How leads are qualified. What happens at each stage. How objections are handled. When it is documented and trained, your team stops winging it.' },
  { icon: FiUsers, title: 'Sales Team Structure and Training', desc: 'The right number of people. The right roles. The right commission structure. The right accountability system. And training that builds the specific skills your team needs — how to open conversations, handle pushback, present pricing, and follow up without being annoying.' },
  { icon: FiBarChart2, title: 'Lead Generation Systems', desc: 'We build the pipeline that keeps new enquiries coming in consistently. Inbound leads from your digital presence. Outbound outreach from your team. Referral programmes that turn satisfied clients into your best salespeople.' },
  { icon: FiMessageSquare, title: 'Marketing Communications Strategy', desc: 'What you say, where you say it, and how often. A content calendar and messaging framework that keeps your brand visible and your audience engaged — across WhatsApp, Instagram, LinkedIn, and wherever your specific customers spend their time.' },
  { icon: FiSettings, title: 'CRM and Pipeline Management', desc: 'If your pipeline lives in your head or a scattered WhatsApp chat, deals are falling through the cracks every week. We identify and implement the right CRM tool for your business, set it up, and train your team to use it. No more forgotten follow-ups.' },
  { icon: FiTag, title: 'Pricing Strategy', desc: 'Many Nigerian businesses are undercharging for what they offer. Others are pricing themselves out of the market without knowing it. We review your pricing structure, benchmark against your market, and redesign the model that captures the full value of what you deliver.' }
];

const MktDeliverables = () => {
  const firstSix = deliverables.slice(0, 6);
  const last = deliverables[6];
  const LastIcon = last.icon;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle text-teal-dark">What We Build</p>
          <h2 className="section-title text-deep-navy">From Random Hustle to a Revenue System</h2>
        </div>

        {/* First 6 in 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {firstSix.map((item, i) => {
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

        {/* 7th card centered */}
        <div className="flex justify-center">
          <div className="bg-white border border-gray-200 p-8 rounded-none hover:shadow-md transition-shadow duration-300 w-full lg:w-1/3">
            <div className="w-12 h-12 bg-deep-navy/5 flex items-center justify-center mb-6">
              <LastIcon className="text-deep-navy text-xl" />
            </div>
            <h3 className="text-deep-navy font-bold text-lg mb-3">{last.title}</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">{last.desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

// ─── HOW WE WORK ────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'Revenue Audit', desc: 'We look at where your current revenue comes from, how it is being generated, and where the biggest growth opportunities and leakages are.' },
  { num: '02', title: 'Strategy Design', desc: 'We build your go-to-market strategy, sales process, and marketing plan from the ground up — aligned to your specific business, market, and growth targets.' },
  { num: '03', title: 'System Build', desc: 'We design the sales scripts, marketing templates, CRM setup, and team structure. Everything your sales and marketing engine needs to run.' },
  { num: '04', title: 'Training and Launch', desc: 'We train your team on the new process and stay engaged through the first full sales cycle to identify gaps and make real-time adjustments.' },
  { num: '05', title: 'Performance Review', desc: 'After 30, 60, and 90 days we review the numbers. Conversion rates. Pipeline activity. Revenue trend. We adjust what is not moving until it does.' }
];

const MktProcess = () => (
  <section className="relative py-16 bg-deep-navy overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="section-subtitle text-teal-dark">How We Work</p>
        <h2 className="section-title text-white">Strategy First. Execution Second. Results Always.</h2>
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
const MktTestimonial = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle text-teal-dark">What Our Clients Say</p>
          <h2 className="section-title text-deep-navy">Real Results.<br />Real Businesses.</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
            Feedback from business owners who have rebuilt their sales and marketing with Thrive Consults.
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
const MktCTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h2 className="section-title text-white">Your Business Has More Revenue Potential Than You Are Currently Capturing.</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Let us find it together. Book a free discovery session and we will show you exactly where the growth is and what it would take to get there.
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
  title: 'Marketing and Sales | Thrive Consult',
  description: 'We build the sales and marketing systems that generate consistent, predictable revenue for Nigerian businesses.'
};

export default function MarketingPage() {
  return (
    <main>
      <MktHero />
      <MktProblem />
      <MktDeliverables />
      <MktProcess />
      <MktTestimonial />
      <MktCTA />
    </main>
  );
}
