import React from 'react';
import { FiSettings, FiBarChart2, FiUsers, FiFileText, FiHeart, FiGift } from 'react-icons/fi';
import { FaWhatsapp, FaQuoteRight } from 'react-icons/fa';

// ─── HERO ───────────────────────────────────────────────────────
const CXHero = () => (
  <section className="bg-deep-navy min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <p className="section-subtitle text-teal-dark mb-4">Customer Service Systems</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        Every Customer You Lose Quietly<br className="hidden md:block" />
        <span className="text-teal-dark"> Is One You Paid to Win.</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto max-w-3xl font-light">
        We build the customer experience systems that keep buyers coming back, turn them into advocates, and make your business the one people recommend without being asked.
      </p>
    </div>
  </section>
);

// ─── PROBLEM + SIGNALS ──────────────────────────────────────────
const signals = [
  'Customers buy from you once but rarely come back',
  'Service quality depends on which staff member a customer happens to meet',
  'You are running multiple branches and consistency is a constant battle',
  'You have received complaints about service and are not sure how to fix the root cause',
  'You want to build a loyal customer base instead of constantly spending to replace the ones who leave',
  'You are a supermarket or retail chain where customer experience is a direct competitive advantage'
];

const CXProblem = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">The Real Problem</p>
          <h2 className="section-title text-deep-navy">
            Bad Service Does Not Announce Itself. It Just Leaves.
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mt-6">
            <p>A customer walks into your shop, gets attended to poorly, and leaves without buying. They do not complain. They do not argue. They just leave. They never come back. And they tell three people about the experience.</p>
            <p>You never know it happened. You cannot fix what you do not know is broken. And meanwhile, the business is bleeding customers quietly every single week.</p>
            <p>The businesses that grow consistently are not always the ones with the best product. They are the ones where every customer, on every visit, has a consistent experience that makes them feel valued.</p>
            <p className="font-semibold text-deep-navy">That does not happen by accident. It happens because someone built a system.</p>
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

// ─── DELIVERABLES ───────────────────────────────────────────────
const deliverables = [
  { icon: FiSettings, title: 'Customer Service Framework Design', desc: 'A documented standard for how every customer is handled at every touchpoint. Written at the right level for your actual team. Simple enough to train in one session. Clear enough to audit consistently.' },
  { icon: FiFileText, title: 'Service Level Agreements (SLAs)', desc: 'Response times. Resolution timelines. Escalation paths. The commitments your business makes to customers — and the internal systems that make sure those commitments are kept.' },
  { icon: FiBarChart2, title: 'Customer Feedback and Retention Systems', desc: 'Structured feedback collection, NPS tracking, and loyalty programme design. The tools that give you early warning when satisfaction is dropping and the mechanisms to recover it before people leave.' },
  { icon: FiUsers, title: 'Customer Service Team Training', desc: 'A practical, scenario-based session that puts your staff in real customer situations and builds the habits that stick. Not a one-hour lecture.' },
  { icon: FiHeart, title: 'Complaint Management System', desc: 'A documented process for receiving, tracking, resolving, and learning from complaints. Designed so a dissatisfied customer is handled fairly and fast — and the business captures the lesson rather than repeating the mistake.' },
  { icon: FiGift, title: 'Loyalty Programme Design', desc: 'For retail businesses, supermarkets, and service businesses with repeat customers, we design the loyalty mechanics that reward returning buyers and give them a reason to choose you over every competitor.' }
];

const CXDeliverables = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">What We Build</p>
        <h2 className="section-title text-deep-navy">The Full Customer Experience Infrastructure</h2>
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





// ─── CX FRAMEWORK (How We Work) ─────────────────────────────────
const framework = [
  { num: '01', title: 'Welcome', desc: 'How a customer is greeted the moment they arrive sets the tone for everything. We define the exact standard — what is said, how it is said, and within how many seconds — so every customer feels acknowledged from the first moment.' },
  { num: '02', title: 'Understand', desc: 'Great service requires understanding what the customer actually needs before rushing to sell. We build the listen-first conversation guide that helps your team identify needs and create the conditions for a genuine sale rather than a forced one.' },
  { num: '03', title: 'Serve', desc: 'The core transaction must happen to a defined standard every time. We document what good service looks like in your specific business and train your team to deliver it consistently.' },
  { num: '04', title: 'Resolve', desc: 'A customer whose complaint is resolved well often becomes more loyal than one who never had a problem at all. We build the complaint handling framework that turns difficult situations into trust-building moments.' },
  { num: '05', title: 'Retain', desc: 'The sale ending is not the relationship ending. We design the post-purchase follow-up system — WhatsApp check-ins, loyalty incentives, periodic value-add communication — that keeps customers returning and motivates referrals.' }
];

const CXFramework = () => (
  <section className="relative py-16 bg-deep-navy overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal-dark/5 blur-[120px] pointer-events-none rounded-full" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="section-subtitle text-teal-dark">The Thrive CX Framework</p>
        <h2 className="section-title text-white">Five Stages. One Standard. Every Time.</h2>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
          {framework.map((step, i) => (
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
const CXTestimonial = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle text-teal-dark">What Our Clients Say</p>
          <h2 className="section-title text-deep-navy">Real Results.<br />Real Businesses.</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
            Feedback from business owners who have transformed their customer experience with Thrive Consults.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <FaQuoteRight className="text-teal-dark/10 text-5xl mb-6" />
          <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
            &ldquo;Staff management was the biggest stress in running our supermarket. High turnover, inconsistent service, and no clear accountability. Thrive built an HR structure that changed how we hire, how we manage, and how our staff show up every day. The difference is visible to our customers.&rdquo;
          </p>
          <div className="w-8 h-[2px] bg-teal-dark mb-5" />
          <p className="text-deep-navy font-bold text-sm md:text-base">Name withheld</p>
          <p className="text-teal-dark text-xs font-semibold">CEO / Owner, Supermarket Client</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── CTA ────────────────────────────────────────────────────────
const CXCTA = () => (
  <section className="py-16 bg-deep-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h2 className="section-title text-white">Every Customer Who Walks Away Is Revenue You Will Never See.</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Let us build the system that keeps them coming back. Book a free discovery session and we will show you exactly what your customer experience is currently costing your business.
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
  title: 'Customer Service Systems | Thrive Consult',
  description: 'We build customer experience systems that keep buyers coming back and turn them into advocates for your business.'
};

export default function CustomerServicePage() {
  return (
    <main>
      <CXHero />
      <CXProblem />
      <CXDeliverables />
           <CXFramework />
      <CXTestimonial />
      <CXCTA />
    </main>
  );
}
