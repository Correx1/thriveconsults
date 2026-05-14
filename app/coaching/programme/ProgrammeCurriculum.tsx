import React from 'react';

const phases = [
  {
    badge: 'Phase 1 — Weeks 1–4',
    title: 'Know Your Trade',
    weeks: [
      { w: 'Week 1', title: 'What your business is really doing', desc: 'The B.E.E.P. diagnostic. What comes in, what goes out, and what actually stays. Most participants see their real numbers clearly for the first time.', milestone: false },
      { w: 'Week 2', title: 'Where do you want this to go?', desc: 'A 90-day target and 12-month vision in real numbers — not wishful thinking, but a specific written plan.', milestone: false },
      { w: 'Week 3', title: 'Your people — staff, team, and yourself', desc: 'Clarifying roles, building accountability, and identifying the one delegation you have been avoiding.', milestone: false },
      { w: 'Week 4', title: 'Phase 1 milestone review', desc: 'You present your B.E.E.P. score, 90-day target, and one people commitment to the cohort. Public accountability starts here.', milestone: true },
    ],
  },
  {
    badge: 'Phase 2 — Weeks 5–8',
    title: 'Organise Your Trade',
    weeks: [
      { w: 'Week 5', title: 'How your business should run without you', desc: 'Your first written business procedure — cash handling, service delivery, or sales process. You write it in the session.', milestone: false },
      { w: 'Week 6', title: 'Your money — working capital, expenses, what stays', desc: 'The three-pot system. Separate your working capital from your expenses from your profit. A financial tracking system you will actually use.', milestone: false },
      { w: 'Week 7', title: 'Your customers — sell more to the people you already have', desc: 'WhatsApp Business setup, broadcast lists, and a follow-up system for your top customers. Built in the session.', milestone: false },
      { w: 'Week 8', title: 'Phase 2 milestone review', desc: 'Financials shown to the group. Procedures document reviewed. Accountability with peer feedback from fellow business owners.', milestone: true },
    ],
  },
  {
    badge: 'Phase 3 — Weeks 9–12',
    title: 'Grow Your Trade',
    weeks: [
      { w: 'Week 9', title: 'What do people say about your business?', desc: 'Your positioning in the market. Why would someone choose you over a competitor doing the same thing?', milestone: false },
      { w: 'Week 10', title: 'Getting found — WhatsApp, Instagram, and word-of-mouth', desc: 'A specific 30-day digital plan with no more than five actions. What works. What wastes your time.', milestone: false },
      { w: 'Week 11', title: 'Growing without losing control', desc: 'Choice-based session: Group A (hiring and delegating) or Group B (scaling your revenue and reach). Peer learning at its deepest.', milestone: false },
      { w: 'Week 12', title: 'Graduation — your 12-month business plan', desc: 'Live graduation event. You present your plan. Certificate awarded. Your family and partners are invited. This is a real moment.', milestone: true },
    ],
  },
];

const ProgrammeCurriculum = () => {
  return (
    <section className="py-24 bg-white" id="curriculum">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 max-w-3xl">
          <p className="text-teal-dark font-bold tracking-widest uppercase text-sm mb-4">The Curriculum</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-6 leading-tight">
            12 weeks. Three phases.<br className="hidden sm:block" /> Everything changes.
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Every session is built from the ground up for Nigerian business owners. No textbook language. No foreign examples.
          </p>
        </div>

        <div className="space-y-24">
          {phases.map((phase) => (
            <div key={phase.badge} className="border-t-2 border-deep-navy pt-12">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                
                {/* Phase Header - Left Col */}
                <div className="lg:col-span-4">
                  <p className="text-teal-dark font-bold tracking-widest uppercase text-xs mb-3">
                    {phase.badge}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-deep-navy leading-tight">
                    {phase.title}
                  </h3>
                </div>

                {/* Weeks Grid - Right Col */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  {phase.weeks.map((week) => (
                    <div key={week.w} className="flex flex-col border-t border-gray-200 pt-5">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-deep-navy font-black tracking-widest uppercase text-xs">
                          {week.w}
                        </span>
                        {week.milestone && (
                          <span className="text-teal-dark font-bold tracking-widest uppercase text-[10px]">
                            Milestone
                          </span>
                        )}
                      </div>
                      <h4 className="text-deep-navy font-bold text-lg md:text-xl leading-tight mb-3">
                        {week.title}
                      </h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        {week.desc}
                      </p>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProgrammeCurriculum;
