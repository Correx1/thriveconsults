'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote: "The business audit by Thrive was outstanding and it helped me find key areas and gaps that I needed to work on in my business.",
    name: "Francis Ugochukwu",
    company: "Dotland Estate",
    initial: "F"
  },
  {
    id: 2,
    quote: "We owe the success and growth we are enjoying today to Thrive Consults. They laid the foundation and have helped keeping our personnel in check.",
    name: "Onyeka Paulinus",
    company: "Crystal Garden Estate Ltd.",
    initial: "O"
  },
  {
    id: 3,
    quote: "Before Thrive came in, everything in my business ran through me. I could not travel for three days without something breaking down. They came in, mapped how we worked, built systems my team could follow, and now the business runs whether I am there or not.",
    name: "Name withheld",
    company: "Managing Director, Manufacturing",
    initial: "N"
  },
  {
    id: 4,
    quote: "Staff management was the biggest stress in running our supermarket. High turnover, inconsistent service, and no clear accountability. Thrive built an HR structure that changed how we hire, how we manage, and how our staff show up every day. The difference is visible to our customers.",
    name: "Mr. Okechuwu",
    company: "CEO, WC Retail",
    initial: "M"
  }
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', containScroll: 'trimSnaps' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      {/* Optional faint radial glow to match the vibe */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-teal-dark/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — col-6: Header */}
          <div className="pr-0 md:pr-10">
            <h2 className="section-title text-deep-navy text-5xl md:text-6xl font-semibold">
              What Our <br />
              <span className="text-teal-dark">Clients</span> Say
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-sm">
              Real feedback from satisfied business owners who trust Thrive Consults for quality strategy and exceptional service.
            </p>

            {/* Nav buttons */}
            <div className="flex gap-4">
              <button
                onClick={scrollPrev}
                aria-label="Previous"
                className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-deep-navy hover:bg-teal-dark hover:text-white hover:border-teal-dark transition-all duration-300 font-bold text-lg"
              >
                ←
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next"
                className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-deep-navy hover:bg-teal-dark hover:text-white hover:border-teal-dark transition-all duration-300 font-bold text-lg"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT — col-6: Single card slider */}
          <div className="overflow-hidden p-2 md:p-6" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 w-full bg-white border border-gray-100/50 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  {/* Top section: Quote Icon */}
                  <div className="flex justify-start mb-5">
                    <FaQuoteRight className="text-teal-dark/10 text-4xl md:text-5xl" />
                  </div>

                  {/* Quote text */}
                  <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-[2px] bg-teal-dark mb-4"></div>

                  {/* Name & Company below */}
                  <div>
                    <p className="text-deep-navy font-bold text-sm md:text-base">{t.name}</p>
                    <p className="text-teal-dark text-xs font-semibold">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
