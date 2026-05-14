'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'Do I need to be in a specific city to participate?',
    a: 'No. The Saturday sessions are hybrid — you can join virtually from anywhere in Nigeria. The WhatsApp accountability group works from wherever you are. If there is a live session in your city, we will announce it ahead of time. Virtual participants get the same materials, the same facilitator accountability, and the same graduation event.',
  },
  {
    q: 'What if I miss a session?',
    a: "Sessions are recorded. If you miss one, you watch the recording before the following Saturday so you're up to date. However — if you miss three or more sessions, you will not be eligible for graduation. The programme only works if you show up.",
  },
  {
    q: 'Is this for new business owners or established ones?',
    a: 'Established business owners. You should have been running your business for at least one year. It is for business owners — traders, importers, service providers, retailers, food and hospitality, professional services — who already have something built and want to build it properly.',
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes. Three monthly instalments of ₦100,000 each (₦100k before the programme, ₦100k by Week 4, ₦100k by Week 8). Or two payments of ₦135,000 each. Full access begins once your first instalment is confirmed.',
  },
  {
    q: 'How many people are in the cohort?',
    a: 'A maximum of 12 participants. The small cohort size is intentional — every participant gets seen, every check-in gets acknowledged, and the peer group is tight enough to create real accountability.',
  },
  {
    q: 'What happens after I finish the programme?',
    a: "You join the Thrive Alumni community — a private group for all programme graduates. You also receive ₦80,000 off the Growth Track if you enrol within 90 days of graduation.",
  },
  {
    q: "What if this doesn't work for me?",
    a: "The programme works when you do the work. If you attend consistently, complete the deliverables, and post your Sunday check-ins — you will finish with a functioning cash system, written procedures, and a 12-month plan. If you complete the first four weeks and genuinely feel it is not the right fit, speak to us and we will find a fair resolution.",
  },
];

const CoachingFAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-teal-dark font-bold tracking-widest uppercase text-xs mb-3">Questions</p>
        <h2 className="section-title text-deep-navy mb-10">What people ask before enrolling.</h2>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-start gap-6 py-5 text-left text-deep-navy font-semibold text-base hover:text-teal-dark transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`text-2xl font-light text-teal-dark shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="pb-6 text-gray-500 leading-relaxed text-sm pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingFAQ;
