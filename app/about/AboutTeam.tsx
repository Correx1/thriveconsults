import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Ifeanyi Eze',
    role: 'CEO',
    image: '/team/ifeanyi.png'
  },
  {
    id: 2,
    name: 'Godwin Chibuike',
    role: 'Director of Operations & Client Solutions',
    image: '/team/godwin.png'
  },
  {
    id: 3,
    name: 'Angel Adaeze',
    role: 'Finance and HR',
    image: '/team/angel.png'
  }
];

const AboutTeam = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-dark font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
            The People Behind Thrive
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-deep-navy tracking-tight">
            Practitioners, Not Theorists.
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group border border-gray-100"
            >
              {/* Image Container - Square Aspect Ratio */}
              <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium z-0 text-sm">
                  Image Placeholder
                </div>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 relative z-10"
                />
              </div>

              {/* Content Container - Reduced Whitespace and Sizes */}
              <div className="p-5 text-center bg-white relative z-20">
                <h3 className="text-lg font-bold text-deep-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-dark font-medium text-xs">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
