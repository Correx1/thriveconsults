import React from 'react';

const milestones = [
  {
    year: '2012',
    title: 'We Started',
    desc: 'One consultant, a notepad, and a conviction that Nigerian businesses deserved better than guesswork. The first clients were small traders in Lagos who needed systems more than they needed advice.',
    align: 'left' // Content on left, year on right
  },
  {
    year: '2015',
    title: 'Thrive Empire Ltd. Registered',
    desc: 'What began as independent consulting became a proper company with a clear mandate: build the systems infrastructure that Nigerian SMEs have always needed but rarely received.',
    align: 'right' // Content on right, year on left
  },
  {
    year: '2019',
    title: '57% Increase in Client Revenue',
    desc: 'The average client who completed a full Thrive engagement grew their revenue by 57% within twelve months. Numbers stopped being a talking point and became our proof of concept.',
    align: 'left'
  },
  {
    year: '2023',
    title: '20+ Businesses Transformed',
    desc: 'Over 20 businesses across trading, real estate, manufacturing, and retail. Five sectors. One consistent result: businesses that run without their founders carrying everything.',
    align: 'right'
  }
];

const AboutTimeline = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-deep-navy mb-4">How We Got Here</h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Thirteen years of showing up for Nigerian business owners. Here are the milestones that shaped who we are.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full mt-12">
          
          {/* Top Pill */}
          <div className="flex justify-center mb-16 relative z-10">
            <span className="bg-[#24db8d] text-white font-bold px-6 py-2.5 rounded-full shadow-md text-sm tracking-wide">
              Our Roadmap
            </span>
          </div>

          {/* Vertical Center Line */}
          <div className="absolute top-[80px] bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gray-200 z-0 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="relative z-10 flex flex-col gap-16 md:gap-24">
            {milestones.map((item, index) => {
              const isLeft = item.align === 'left';

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0`}>
                  
                  {/* Mobile Only: Year (shows on top for mobile) */}
                  <div className="md:hidden flex justify-center w-full mb-2">
                    <span className="bg-gray-500 text-white font-bold px-3 py-1 rounded shadow-sm text-sm">
                      {item.year}
                    </span>
                  </div>

                  {/* Left Side Container (Content or Year depending on alignment) */}
                  <div className={`w-full md:w-[45%] flex flex-col ${isLeft ? 'md:text-left md:items-start' : 'md:items-start md:justify-center'}`}>
                    {isLeft ? (
                      <div className="text-center md:text-left">
                        <h4 className="text-xl md:text-2xl font-bold text-deep-navy mb-3">{item.title}</h4>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden md:flex w-full justify-start">
                        <span className="bg-gray-500 text-white font-bold px-3 py-1 rounded shadow-sm text-sm">
                          {item.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center Node (Hidden on mobile for a cleaner stacked look, or keep small) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-teal-dark border-2 border-white ring-[4px] ring-teal-dark/20 items-center justify-center shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>

                  {/* Right Side Container (Content or Year depending on alignment) */}
                  <div className={`w-full md:w-[45%] flex flex-col ${!isLeft ? 'md:text-right md:items-end' : 'md:items-end md:justify-center'}`}>
                    {!isLeft ? (
                      <div className="text-center md:text-right">
                        <h4 className="text-xl md:text-2xl font-bold text-deep-navy mb-3">{item.title}</h4>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden md:flex w-full justify-end">
                        <span className="bg-gray-500 text-white font-bold px-3 py-1 rounded shadow-sm text-sm">
                          {item.year}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
