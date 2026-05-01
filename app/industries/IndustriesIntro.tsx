import React from 'react';

const IndustriesIntro = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-subtitle text-teal-dark">Industries We Serve</p>
          <h2 className="section-title text-deep-navy">
            Every Industry Has a Different Problem. The Fix Is Always a System.
          </h2>
        </div>
        <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed lg:pt-16">
          <p>A market trader in Alaba does not have the same problems as a real estate developer in Port Harcourt. A manufacturer in Onitsha does not face the same challenges as a supermarket chain expanding across Lagos.</p>
          <p>But here is what they all have in common.</p>
          <p>The businesses that are stalling are stalling for the same reasons. No documented processes. People making decisions without a clear framework. Revenue coming in but profit unclear. A founder who cannot step back because the business falls apart when they do.</p>
          <p>The specific context is different. The system problem underneath is always the same.</p>
          <p className="font-semibold text-deep-navy">That is why Thrive Consults works across industries. We understand your specific world. And we build the systems that work inside it.</p>
        </div>
      </div>
    </div>
  </section>
);

export default IndustriesIntro;
