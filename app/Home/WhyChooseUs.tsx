import React from 'react';
import { FiMap, FiBriefcase, FiPieChart } from 'react-icons/fi';

const featuresData = [
  {
    id: 1,
    title: "We Start With Your Reality",
    icon: FiMap,
    description: "No generic frameworks copied from a textbook. Every engagement starts with understanding your specific business, your market, and your real constraints."
  },
  {
    id: 2,
    title: "Built for the Nigerian Market",
    icon: FiBriefcase,
    description: "We have worked with traders in Alaba, manufacturers in Onitsha, developers in the South-East, and supermarkets across Lagos. We understand your context."
  },
  {
    id: 3,
    title: "Results You Can Measure",
    icon: FiPieChart,
    description: "We are not here to write reports you will not read. We build things that work and we stay in the engagement until they do."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle text-teal-dark">
            Why Business Owners Choose Thrive
          </p>
          <h2 className="section-title text-deep-navy">
            We Do Not Just Advise. We Build.
          </h2>
        </div>

        {/* 3-Column Grid without cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col items-center text-center group">
                
                {/* Icon in a subtle circular background */}
                <div className="w-16 h-16 rounded-full bg-deep-navy/5 flex items-center justify-center text-deep-navy mb-6 group-hover:scale-110 group-hover:bg-deep-navy group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-deep-navy mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
