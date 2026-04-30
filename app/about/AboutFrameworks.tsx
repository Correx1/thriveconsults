import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const frameworks = [
  {
    id: 1,
    title: 'The T.H.R.I.V.E Methodology',
    intro: 'A six-step process built from years of working with Nigerian businesses across trading, manufacturing, real estate, and retail.',
    items: [
      { prefix: 'T', text: 'Take a Hard Look at the business honestly' },
      { prefix: 'H', text: 'Highlight the real problem, not the symptom' },
      { prefix: 'R', text: 'Redesign how the business works' },
      { prefix: 'I', text: 'Implement together with the client\'s team' },
      { prefix: 'V', text: 'Verify the new system is working with real numbers' },
      { prefix: 'E', text: 'Embed it permanently so it outlasts our involvement' }
    ]
  },
  {
    id: 2,
    title: 'The B.E.E.P Diagnostic',
    intro: 'Like a heartbeat on a monitor, the rhythm tells you everything. All four elements present and active means the business is growing.',
    items: [
      { prefix: 'B', text: 'Branding: the impression your business makes before a word is said' },
      { prefix: 'E', text: 'Efficiency: converting effort and money into results without waste' },
      { prefix: 'E', text: 'Excellence: the standard your business keeps every single day' },
      { prefix: 'P', text: 'Promotion: active, consistent effort to reach the right people' }
    ]
  },
  {
    id: 3,
    title: 'The Five Pillars',
    intro: 'A business must be structurally sound to scale reliably. Every service Thrive offers builds or strengthens one of these five pillars.',
    items: [
      { prefix: '1', text: 'Strategy and Direction' },
      { prefix: '2', text: 'People and Culture' },
      { prefix: '3', text: 'Sales and Revenue Engine' },
      { prefix: '4', text: 'Operations and Systems' },
      { prefix: '5', text: 'Visibility and Customer Experience' }
    ]
  }
];

const AboutFrameworks = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="section-subtitle text-teal-dark">How We Work</p>
          <h2 className="section-title text-deep-navy">
            Our Proprietary Frameworks
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mt-4">
            We don't guess. We use tested, repeatable systems to diagnose problems and build scalable solutions.
          </p>
        </div>

        {/* Minimalist Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 mb-20">
          {frameworks.map((framework, index) => (
            <div 
              key={framework.id} 
              className={`flex flex-col ${index !== 2 ? 'lg:pr-12 lg:border-r lg:border-gray-200' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-extrabold text-deep-navy mb-4">
                {framework.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {framework.intro}
              </p>

              <div className="flex-grow space-y-4">
                {framework.items.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="w-6 shrink-0 text-deep-navy font-black text-lg leading-none pt-0.5">
                      {item.prefix}
                    </span>
                    <p className="text-deep-navy text-sm font-medium leading-relaxed border-b border-gray-100 pb-4 w-full">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="#diagnostic" className="btn btn-primary inline-flex items-center justify-center gap-2 px-10 py-4 text-sm shadow-md shadow-teal-dark/20 w-auto">
            TAKE THE FREE B.E.E.P. DIAGNOSTIC <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutFrameworks;
