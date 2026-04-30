import React from 'react';
import { FiUsers, FiClipboard, FiSettings, FiTrendingUp, FiStar, FiMonitor } from 'react-icons/fi';

const servicesData = [
  {
    id: 1,
    title: "Strategic HR",
    icon: FiUsers,
    description: "We help you hire better people and keep them. Recruitment, performance systems, and the people infrastructure that runs without you.",
    linkText: "Learn About HR Systems"
  },
  {
    id: 2,
    title: "Business Diagnostics",
    icon: FiClipboard,
    description: "Before we prescribe, we diagnose. Our business audit gives you a clear, honest picture of exactly where the real problem is.",
    linkText: "Learn About Diagnostics"
  },
  {
    id: 3,
    title: "Operational Systems",
    icon: FiSettings,
    description: "We document how your business works so it runs without you. SOPs, workflows, automation, and custom ERP development.",
    linkText: "Learn About Operations"
  },
  {
    id: 4,
    title: "Marketing and Sales",
    icon: FiTrendingUp,
    description: "We build the sales and marketing systems that generate predictable revenue without depending on the founder to close every deal.",
    linkText: "Learn About Sales Systems"
  },
  {
    id: 5,
    title: "Customer Service Systems",
    icon: FiStar,
    description: "Acquiring a customer is expensive. Losing one is more expensive. We build the systems that keep customers coming back.",
    linkText: "Learn About Customer Systems"
  },
  {
    id: 6,
    title: "Digital Business Strategy",
    icon: FiMonitor,
    description: "Visibility without strategy is noise. We build a digital presence that is intentional and commercially productive.",
    linkText: "Learn About Digital Strategy"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle text-teal-dark">What We Do</p>
          <h2 className="section-title text-deep-navy">
            We Fix the Parts of Your Business That Are Costing You Money
          </h2>
          <p className="text-gray-600 text-lg">
            Every Thrive engagement starts with one question: what is actually stopping this business from growing? Then we get to work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-14 h-14 rounded-xl bg-deep-navy/5 flex items-center justify-center mb-6 text-deep-navy group-hover:bg-deep-navy group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-deep-navy mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-grow mb-8">
                  {service.description}
                </p>
                
                <a href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-teal-dark font-semibold hover:text-deep-navy transition-colors text-sm group-hover:translate-x-1 duration-300">
                  {service.linkText} <span className="ml-2">→</span>
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a href="#services" className="btn btn-primary px-10 py-4 text-sm font-bold tracking-wide">
            SEE ALL SERVICES
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
