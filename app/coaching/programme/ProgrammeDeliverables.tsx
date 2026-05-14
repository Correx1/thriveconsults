import React from 'react';

const deliverables = [
  { num: '01', title: 'B.E.E.P. diagnostic scorecard', desc: 'A clear picture of where your business is strong and where it is exposed — in your own numbers.' },
  { num: '02', title: 'Written business procedures', desc: 'At least two documented procedures your staff can follow when you\'re not around.' },
  { num: '03', title: 'The three-pot money system', desc: 'Separates working capital, operating expenses, and profit — set up and running by Week 7.' },
  { num: '04', title: 'A live WhatsApp customer system', desc: 'WhatsApp Business set up, top 20 customers in a broadcast list, and a weekly follow-up process.' },
  { num: '05', title: 'A 30-day digital action plan', desc: 'Five specific actions for WhatsApp, Instagram, or word-of-mouth — chosen for your type of business.' },
  { num: '06', title: 'Your 12-month business growth plan', desc: 'A written plan presented at graduation. Where your business is going and how it will get there.' },
  { num: '07', title: 'Signed certificate of completion', desc: 'Awarded at the live graduation event in front of your peers, your family, and your business community.' },
  { num: '08', title: 'A cohort of fellow business owners', desc: '10–12 serious owners from across sectors. The peer network you build stays with you in the alumni community.' },
];

const ProgrammeDeliverables = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-teal-dark font-bold tracking-widest uppercase text-sm mb-3">What you walk away with</p>
          <h2 className="section-title text-deep-navy mb-4 text-3xl md:text-4xl lg:text-5xl">Eight things you build and keep.</h2>
          <p className="text-gray-500 text-base md:text-lg mx-auto max-w-2xl leading-relaxed">
            Every week of this programme closes a gap that is currently costing you money, time, or growth.
          </p>
        </div>

        {/* 
          6-column grid strategy to center the last 2 items.
          3 items per row = span 2 each.
          Row 1: Items 1, 2, 3 (span 2 each)
          Row 2: Items 4, 5, 6 (span 2 each)
          Row 3: Items 7, 8 (Item 7 starts at col 2 and spans 2; Item 8 flows naturally to span 2, leaving outer columns empty)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {deliverables.map((d, index) => {
            let lgClasses = "lg:col-span-2";
            if (index === 6) lgClasses = "lg:col-start-2 lg:col-span-2";
            
            return (
              <div 
                key={d.num} 
                className={`bg-white border border-gray-200 p-8 flex flex-col relative overflow-hidden group hover:border-teal-dark/30 transition-colors ${lgClasses}`}
              >
                {/* Subtle large green watermark number */}
                <span className="absolute -bottom-8 -right-4 text-[140px] font-black text-teal-dark/5 leading-none select-none pointer-events-none group-hover:text-teal-dark/10 transition-colors duration-500">
                  {d.num}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <h4 className="text-deep-navy font-bold text-lg md:text-xl leading-snug mb-4">{d.title}</h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed flex-1">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default ProgrammeDeliverables;
