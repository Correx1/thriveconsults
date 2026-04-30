import React from 'react';

const clients = [
  { name: 'Crystal Garden Estate', url: '#' },
  { name: 'Dotland Estate Ltd.', url: '#' },
  { name: 'WideChoice', url: '#' },
  { name: 'Leadmart', url: '#' },
  { name: 'KrystalMart', url: '#' },
  { name: 'Divine Crown Nig. Ltd.', url: '#' },
  { name: 'SuperOil', url: '#' }
];

const AboutClients = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Header */}
        <h3 className="text-teal-dark font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-12">
          Businesses We Have Worked With
        </h3>

        {/* Clients List */}
        <div className="flex flex-wrap justify-center items-center gap-y-6 text-base md:text-lg font-medium text-deep-navy/80">
          {clients.map((client, index) => (
            <React.Fragment key={index}>
              <a 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal-dark transition-colors duration-300 px-4 md:px-6"
              >
                {client.name}
              </a>
              {/* Divider (hide after the last item) */}
              {index < clients.length - 1 && (
                <span className="text-gray-300 hidden md:inline-block">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutClients;
