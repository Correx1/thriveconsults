import React from 'react';
import Link from 'next/link';
import { FiShoppingBag, FiHome, FiSettings, FiShoppingCart, FiArrowRight } from 'react-icons/fi';

const industries = [
  {
    icon: FiShoppingBag,
    label: 'Traders and Importers',
    body: 'From market traders in Balogun and Alaba to ₦1B/month importers. We build the apprenticeship systems, cash controls, and operational structure that lets your business grow beyond you.',
    note: 'Nigeria\'s largest business segment — and the most underserved by professional consulting.',
    cta: 'See How We Help Traders',
    href: '#'
  },
  {
    icon: FiHome,
    label: 'Real Estate and Property',
    body: 'Sales teams that cannot close without the founder. Marketing that generates noise but not leads. We fix the sales pipeline, digital strategy, and HR infrastructure that property companies need to scale.',
    note: 'Clients include Crystal Garden Estate and Dotland Estate Ltd.',
    cta: 'See How We Help Real Estate Companies',
    href: '#'
  },
  {
    icon: FiSettings,
    label: 'Manufacturing and Industrial',
    body: 'Production inconsistency, tribal knowledge with no documentation, workforce accountability gaps. We build the operational systems and ERP infrastructure that brings manufacturing businesses under control.',
    note: 'Clients include Divine Crown Nig. Ltd. and SuperOil.',
    cta: 'See How We Help Manufacturers',
    href: '#'
  },
  {
    icon: FiShoppingCart,
    label: 'Supermarkets and Retail',
    body: 'Customer experience inconsistency, inventory shrinkage, high staff turnover. We build the systems that make multi-branch retail operations run to a consistent standard.',
    note: 'Clients include WideChoice, Leadmart, and KrystalMart.',
    cta: 'See How We Help Retail Businesses',
    href: '#'
  }
];

const IndustriesGrid = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="section-subtitle text-teal-dark">Where We Work</p>
        <h2 className="section-title text-deep-navy">Four Industries. Proven Results.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <div key={i} className="bg-white border border-gray-200 p-10 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-deep-navy/5 flex items-center justify-center shrink-0">
                  <Icon className="text-deep-navy text-xl" />
                </div>
                <h3 className="text-deep-navy font-bold text-xl leading-snug">{ind.label}</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{ind.body}</p>
              <p className="text-teal-dark text-xs font-semibold uppercase tracking-wider">{ind.note}</p>
              <Link
                href={ind.href}
                className="inline-flex items-center gap-2 text-deep-navy text-xs font-bold tracking-wider uppercase border-b border-deep-navy/20 pb-0.5 hover:text-teal-dark hover:border-teal-dark transition-colors w-fit mt-auto"
              >
                {ind.cta} <FiArrowRight className="text-sm" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesGrid;
