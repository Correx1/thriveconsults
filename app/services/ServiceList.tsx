import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const services = [
  {
    id: '01',
    title: 'Strategic Human Resources',
    desc: 'People are the operating system of every business. We help you hire right, manage fairly, and build an organisation people want to stay in.',
    bullets: ['Recruitment Strategy', 'Performance Management', 'Organisational Design', 'HR Policy and Culture'],
    linkText: 'Explore Strategic HR',
    href: '/services/strategic-hr'
  },
  {
    id: '02',
    title: 'Business Diagnostics and Advisory',
    desc: 'Most businesses do not fail from lack of effort. They stall because the real problem was never properly identified. We fix that first.',
    bullets: ['Full Business Health Audit', 'Financial Systems Review', 'Operational Process Audit', 'Strategic Roadmap'],
    linkText: 'Start With a Business Audit',
    href: '/services/business-diagnostics'
  },
  {
    id: '03',
    title: 'Operational Systems and Automation',
    desc: 'If your business cannot function without you being present, that is not a business. That is a trap. We rebuild how your business operates.',
    bullets: ['SOPs and Process Design', 'Custom ERP Development', 'KPI Dashboards', 'Change Management'],
    linkText: 'Build Your Operating System',
    href: '/services/operational-systems'
  },
  {
    id: '04',
    title: 'Marketing and Sales',
    desc: 'Revenue is the lifeblood of every business. We build the marketing and sales infrastructure that generates predictable, scalable revenue.',
    bullets: ['Go-to-Market Strategy', 'Sales Process Design', 'Lead Generation Systems', 'CRM Implementation'],
    linkText: 'Fix Your Sales System',
    href: '/services/marketing-and-sales'
  },
  {
    id: '05',
    title: 'Customer Service Systems',
    desc: 'Acquiring a customer is expensive. Losing one is even more expensive. We build the experience systems that keep buyers coming back.',
    bullets: ['Service Framework Design', 'Customer Feedback Systems', 'Complaint Management', 'Loyalty Programme Design'],
    linkText: 'Build Your Customer System',
    href: '/services/customer-service-systems'
  },
  {
    id: '06',
    title: 'Digital Business Strategy',
    desc: 'Visibility without strategy is noise. We help you build a digital presence that is intentional, measurable, and commercially productive.',
    bullets: ['Digital Growth Strategy', 'Brand Positioning', 'SEO and Content Marketing', 'WhatsApp Business Strategy'],
    linkText: 'Build Your Digital Strategy',
    href: '/services/digital-business-strategy'
  }
];

const ServiceList = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle text-teal-dark">Our Services</p>
          <h2 className="section-title text-deep-navy">
            Where Do You Want to Start?
          </h2>
        </div>

        {/* 2-Column Professional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-8 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-bold text-deep-navy mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="mb-8">
                <ul className="space-y-3">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal-dark mt-2 shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-auto">
                <Link 
                  href={service.href} 
                  className="inline-flex items-center gap-2 text-deep-navy font-bold text-sm hover:text-teal-dark transition-colors group/link"
                >
                  {service.linkText} 
                  <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceList;
