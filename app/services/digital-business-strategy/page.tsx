import React from 'react';
import { FiTrendingUp, FiMessageSquare, FiBarChart2, FiFileText, FiMonitor, FiShoppingBag, FiTarget } from 'react-icons/fi';
import { FaWhatsapp, FaQuoteRight } from 'react-icons/fa';

// ─── HERO ───────────────────────────────────────────────────────
const DigHero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Digital Business Strategy</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        Being Online Is Not the Same<br className="hidden md:block" />
        <span className="text-teal-dark"> as Growing Online.</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We help Nigerian businesses build a digital presence that is intentional, consistent, and commercially productive — one that works while you sleep.
      </p>
    </div>
  </section>
);

// ─── PROBLEM + SIGNALS ──────────────────────────────────────────
const signals = [
  'You are active on social media but it is not generating real business',
  'Your website exists but nobody visits and those who do do not enquire',
  'You are spending on digital advertising and not seeing returns',
  'You want to build an online presence that works even when you are not posting every day',
  'You are a real estate company that needs to reach diaspora buyers and South-East investors online',
  'You are a trader or product business that wants to start selling beyond your immediate market',
  'You know digital is important but you do not know where to start or what to prioritise'
];

const DigProblem = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">The Real Problem</p>
          <h2 className="section-title text-deep-navy">
            Posting Every Day and Still Not Getting Business Is a Strategy Problem.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>You open Instagram. You post. You get some likes. A few comments. Someone says &ldquo;nice.&rdquo; You feel okay about it and move on. Next week you do it again. Same result. Nice posts. No customers.</p>
            <p>You try Facebook. You run a small ad. A few people click. Nobody buys. You build a website. It looks good. Nobody visits.</p>
            <p>The problem is not that you are not active online. The problem is that your digital activity has no strategy behind it. No defined audience. No consistent message. No clear path from someone seeing your content to someone buying from you.</p>
            <p className="font-semibold text-deep-navy">Digital without strategy is noise. Digital with strategy is a sales engine that runs around the clock. That is what this service builds.</p>
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

// ─── DELIVERABLES (7 — last one centered) ───────────────────────
const deliverables = [
  { icon: FiTrendingUp, title: 'Digital Growth Strategy', desc: 'A 90-day digital roadmap that connects every online activity directly to a business outcome. Who you are targeting. What you are saying to them. Which platforms you are using and why. Everything tied to revenue, not vanity metrics.' },
  { icon: FiFileText, title: 'Brand Positioning and Messaging', desc: 'Before you post another piece of content, you need to be clear on what you stand for and who you are talking to. We develop your brand narrative, your core message, and the positioning that makes you the obvious choice in your market.' },
  { icon: FiMessageSquare, title: 'Social Media Strategy', desc: 'Platform-specific playbooks for Instagram, Facebook, LinkedIn, and WhatsApp Business. We define your content pillars, posting cadence, tone of voice, and the specific content types that work for your audience. No more guessing what to post.' },
  { icon: FiBarChart2, title: 'SEO and Content Marketing', desc: 'When your ideal customer types a question into Google, you want to be the answer they find. We build an SEO strategy and content plan that grows your organic visibility over time — attracting buyers who are already looking for what you offer.' },
  { icon: FiMonitor, title: 'WhatsApp Business Strategy', desc: 'For most Nigerian businesses, WhatsApp is the primary customer communication channel. We build your setup — catalogue, broadcast lists, automated responses, follow-up sequences, and a closing process that converts enquiries into sales.' },
  { icon: FiShoppingBag, title: 'E-commerce and Online Revenue Optimisation', desc: 'If you are selling online — or should be — we review and redesign the buying journey to reduce friction between interest and purchase. Product presentation, pricing clarity, checkout experience, and post-purchase follow-up.' },
  { icon: FiTarget, title: 'Performance Marketing Oversight', desc: 'When you are spending on paid advertising, every naira should have a job. We provide strategic direction for your paid campaigns — targeting, creative brief, budget allocation, and performance benchmarks — so your ad spend generates actual returns.' }
];

const DigDeliverables = () => {
  const firstSix = deliverables.slice(0, 6);
  const last = deliverables[6];
  const LastIcon = last.icon;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle text-teal-dark">What We Build</p>
          <h2 className="section-title text-deep-navy">Digital That Converts, Not Just Impresses</h2>
        </div>
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
  { num: '01', title: 'Digital Audit', desc: 'We review everything that currently exists online for your business — website, social media, Google presence, WhatsApp setup.' },
  { num: '02', title: 'Strategy Development', desc: 'We build the 90-day digital strategy: audience definition, platform selection, content pillars, and messaging framework.' },
  { num: '03', title: 'Content and Campaign Setup', desc: 'We set up the systems — content calendar, WhatsApp Business configuration, SEO foundations, advertising structure.' },
  { num: '04', title: 'Team Training', desc: 'We train whoever is managing your digital presence — you, a staff member, or an agency — on the strategy and how to execute it.' },
  { num: '05', title: 'Performance Review', desc: 'At 30, 60, and 90 days we review the numbers that matter — enquiries, traffic, conversion rate, WhatsApp response rate.' }
];

const DigProcess = () => (
  <section className="relative py-16 bg-deep-navy overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="section-subtitle text-teal-dark">How We Work</p>
        <h2 className="section-title text-white">Strategy Before Execution. Always.</h2>
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
const DigTestimonial = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle text-teal-dark">What Our Clients Say</p>
          <h2 className="section-title text-deep-navy">Real Results.<br />Real Businesses.</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
            Feedback from business owners who have built digital strategies that actually generate business.
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
const DigCTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h2 className="section-title text-white">Your Ideal Customers Are Online Right Now. Are They Finding You?</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Book a free discovery session and we will show you exactly what your digital presence is currently missing and what it would take to turn it into a consistent source of new business.
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
  title: 'Digital Business Strategy | Thrive Consult',
  description: 'We help Nigerian businesses build a digital presence that is intentional, consistent, and commercially productive.'
};

export default function DigitalStrategyPage() {
  return (
    <main>
      <DigHero />
      <DigProblem />
      <DigDeliverables />
      <DigProcess />
      <DigTestimonial />
      <DigCTA />
    </main>
  );
}
