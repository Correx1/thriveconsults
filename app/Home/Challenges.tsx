import React from 'react';
import { FiLock, FiUsers, FiDollarSign, FiEyeOff, FiAlertTriangle, FiActivity } from 'react-icons/fi';

const challengesData = [
  {
    id: 1,
    title: "The Prisoner Problem",
    icon: FiLock,
    description: "You are working 80-hour weeks, and the business completely stops when you are not around. You have built a job for yourself, not a scalable enterprise."
  },
  {
    id: 2,
    title: "The Plateau Trap",
    icon: FiActivity,
    description: "Your growth has stagnated. No matter what new tactics you try, your revenue has been stuck at the same level for months or even years."
  },
  {
    id: 3,
    title: "The Staff Headache",
    icon: FiUsers,
    description: "You are constantly micromanaging. Your team lacks initiative, turnover is high, and you feel like you are the only one who cares about the business."
  },
  {
    id: 4,
    title: "The Profit Squeeze",
    icon: FiDollarSign,
    description: "Your sales might be increasing but somehow your profits are not growing. Money comes in and disappears. You do not have clear financial systems or know your real profit margins."
  },
  {
    id: 5,
    title: "The Invisible Business",
    icon: FiEyeOff,
    description: "Customers walk past your shop to buy from competitors. You have no marketing strategy. You depend entirely on walk-in customers and nobody knows who you are."
  },
  {
    id: 6,
    title: "The Expansion Fear",
    icon: FiAlertTriangle,
    description: "You want to open another location or expand your business, but you are afraid it will fail. You do not know how to replicate your success or manage multiple locations."
  }
];

const Challenges = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="section-subtitle text-teal-dark">Sound Familiar?</p>
            <h2 className="section-title text-deep-navy">
              Are You Experiencing Any of These Challenges?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              If you recognise yourself in three or more of these scenarios, Thrive Consults was built specifically for you.
            </p>
            <a href="#fix" className="btn btn-primary px-8 py-3 text-lg hidden lg:inline-flex shadow-lg shadow-teal-dark/20">
              Find My Fix →
            </a>
          </div>

          {/* Right Column: Grid of items */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {challengesData.map((challenge) => {
                const Icon = challenge.icon;
                return (
                  <div key={challenge.id} className="flex flex-col border-l border-gray-200 pl-6 sm:pl-8 py-2">
                    {/* Icon Block */}
                    <div className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-deep-navy mb-6 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-deep-navy mb-3">
                      {challenge.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {challenge.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-16 text-center lg:hidden">
              <a href="#fix" className="btn btn-primary px-8 py-3 text-lg w-auto shadow-lg shadow-teal-dark/20">
                Find My Fix →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Challenges;
