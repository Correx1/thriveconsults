/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FiChevronDown, FiMenu, FiX, 
  FiShoppingBag, FiHome, FiSettings, FiShoppingCart,
  FiUsers, FiClipboard, FiTrendingUp, FiHeadphones, FiMonitor
} from 'react-icons/fi';

const navData = [
  {
    name: 'HOME',
    href: '/'
  },
  {
    name: 'ABOUT',
    href: '/about'
  },
  {
    name: 'SERVICES',
    href: '/services', 
    megaMenu: {
      type: 'split',
      leftItems: [
        { title: 'Strategic HR', desc: 'Hire right. Manage fairly. Build a team that stays.', icon: FiUsers, href: '/services/strategic-hr' },
        { title: 'Business Diagnostics', desc: 'Find the real problem before you spend on solutions.', icon: FiClipboard, href: '/services/business-diagnostics' },
        { title: 'Operational Systems', desc: 'Build a business that runs without you. Includes custom ERP.', icon: FiSettings, href: '/services/operational-systems' },
        { title: 'Marketing and Sales', desc: 'Generate predictable revenue with a system, not luck.', icon: FiTrendingUp, href: '/services/marketing-and-sales' },
        { title: 'Customer Service Systems', desc: 'Keep the customers you worked hard to win.', icon: FiHeadphones, href: '/services/customer-service-systems' },
        { title: 'Digital Business Strategy', desc: 'Visibility with purpose. Digital presence that converts.', icon: FiMonitor, href: '/services/digital-business-strategy' }
      ],
      rightPanel: {
        title: 'Not Sure Where to Start?',
        desc: 'Take the free B.E.E.P. Business Health Diagnostic and find out in five minutes.',
        buttonText: 'TAKE THE FREE DIAGNOSTIC',
        buttonHref: '#',
        linkText: 'View All Services →',
        linkHref: '#'
      }
    }
  },
  {
    name: 'INDUSTRIES',
    href: '/industries',
    megaMenu: {
      type: 'split',
      leftItems: [
        { title: 'Traders and Importers', desc: 'Systems and structure for market traders and importers.', icon: FiShoppingBag, href: '/industries/traders' },
        { title: 'Real Estate', desc: 'Sales pipelines and marketing systems for property companies.', icon: FiHome, href: '/industries/real-estate' },
        { title: 'Manufacturing', desc: 'Operational control and ERP for Nigerian manufacturers.', icon: FiSettings, href: '/industries/manufacturing' },
        { title: 'Supermarkets and Retail', desc: 'Customer experience and inventory systems for retail.', icon: FiShoppingCart, href: '/industries/supermarkets' }
      ],
      rightPanel: {
        title: 'We Know Your Industry.',
        desc: 'We have worked with Crystal Garden Estate, WideChoice, Divine Crown, and 20+ growing Nigerian businesses across five sectors.',
        buttonText: 'SEE OUR WORK',
        buttonHref: '#'
      }
    }
  },
  {
    name: 'MORE',
    href: '#',
    megaMenu: {
      type: 'columns',
      columns: [
        {
          title: 'BLOG',
          desc: 'Practical content for Nigerian business owners. No theory, no filler.',
          links: [
            { name: 'All Articles', href: '#' },
            { name: 'Business Systems', href: '#' },
            { name: 'Traders and SMEs', href: '#' },
            { name: 'HR and People', href: '#' },
            { name: 'Sales and Marketing', href: '#' }
          ]
        },
        {
          title: 'SHOP',
          desc: 'Courses, coaching, and digital tools at every price point.',
          links: [
            { name: 'Coaching Programmes', href: '#' },
            { name: 'Online Courses', href: '#' },
            { name: 'Books and Digital Assets', href: '#' },
            { name: 'View All Products', href: '#' }
          ]
        },
        {
          title: 'EVENTS',
          desc: 'Workshops, masterclasses, and the CEO Success Summit.',
          links: [
            { name: 'All Events', href: '#' },
            { name: 'CEO Success Summit', href: '#' },
            { name: 'Workshops', href: '#' },
            { name: 'Masterclasses', href: '#' },
            { name: 'Training Programmes', href: '#' }
          ]
        }
      ]
    }
  },
  {
    name: 'CONTACT',
    href: '/contact'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0d0d2b] shadow-2xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer z-50 relative">
            <Image src="/thrive-logo-white.png" alt="Thrive Consults" width={200} height={64} className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navData.map((item) => (
              <div key={item.name} className="group">
                {item.megaMenu ? (
                  <>
                    <Link href={item.href} className="flex items-center gap-2 text-white text-sm font-medium tracking-wider hover:text-teal-dark transition-colors py-4 drop-shadow-sm cursor-pointer h-full">
                      {item.name} <FiChevronDown className="text-[10px] group-hover:rotate-180 transition-transform duration-300" />
                    </Link>

                    {/* True Full-Bleed Mega Menu */}
                    {item.megaMenu.type === 'split' && (
                      <div className="absolute left-0 top-full w-full border-t border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex z-40">
                        {/* Left Side Full Bleed */}
                        <div className="w-2/3 bg-white flex justify-end">
                          <div className="w-full max-w-[853px] pl-6 pr-16 py-14">
                            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                              {item.megaMenu.leftItems?.map((link: any, i: number) => {
                                const Icon = link.icon;
                                return (
                                  <Link key={i} href={link.href} className="flex gap-5 group/item hover:bg-gray-50 p-4 -m-4 rounded-xl transition-all">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-deep-navy/5 text-deep-navy flex items-center justify-center group-hover/item:bg-deep-navy group-hover/item:text-white transition-colors shadow-sm">
                                      <Icon className="text-xl" />
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-deep-navy text-[15px] mb-2 group-hover/item:text-teal-dark transition-colors">{link.title}</h5>
                                      <p className="text-gray-500 text-sm leading-relaxed">{link.desc}</p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                        
                        {/* Right Side Full Bleed */}
                        <div className="w-1/3 bg-[#0d0d2b] flex justify-start border-l border-white/5">
                          <div className="w-full max-w-[426px] pr-6 pl-16 py-14 flex flex-col justify-center">
                            <h4 className="text-white font-extrabold text-2xl mb-6">{item.megaMenu.rightPanel?.title}</h4>
                            <p className="text-gray-400 text-[15px] leading-relaxed mb-10">{item.megaMenu.rightPanel?.desc}</p>
                            <Link href={item.megaMenu.rightPanel?.buttonHref || '#'} className="btn bg-teal-dark hover:bg-white hover:text-[#0d0d2b] text-[#0d0d2b] px-8 py-4 text-xs font-bold tracking-widest rounded transition-all inline-block w-max mb-6">
                              {item.megaMenu.rightPanel?.buttonText}
                            </Link>
                            {item.megaMenu.rightPanel?.linkText && (
                              <Link href={item.megaMenu.rightPanel?.linkHref || '#'} className="text-gray-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
                                {item.megaMenu.rightPanel.linkText}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {item.megaMenu.type === 'columns' && (
                      <div className="absolute left-0 top-full w-full bg-white border-t border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex justify-center z-40">
                        <div className="w-full max-w-7xl px-6 py-16">
                          <div className="grid grid-cols-3 gap-16">
                            {item.megaMenu.columns?.map((col: any, i: number) => (
                              <div key={i}>
                                <h4 className="text-deep-navy font-bold text-sm tracking-widest uppercase mb-3">{col.title}</h4>
                                <p className="text-gray-500 text-sm mb-8 h-10">{col.desc}</p>
                                <ul className="space-y-4">
                                  {col.links.map((link: any, j: number) => (
                                    <li key={j}>
                                      <Link href={link.href} className="flex items-center gap-3 text-gray-700 text-[15px] hover:text-teal-dark hover:translate-x-1 transition-all font-normal">
                                        <span className="text-teal-dark/50 text-sm">→</span> {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="flex items-center text-white text-sm font-medium tracking-wider hover:text-teal-dark transition-colors py-4 drop-shadow-sm h-full">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block relative z-50">
            <Link href="/contact" className="btn btn-primary px-8 py-3 text-xs font-bold tracking-widest shadow-xl shadow-teal-dark/30 hover:shadow-teal-dark/50">
              BOOK A SESSION
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white z-50 text-2xl relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0d0d2b] z-40 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-28 px-6 overflow-y-auto pb-12`}>
        <div className="flex flex-col gap-6">
          {navData.map((item) => (
            <div key={item.name} className="border-b border-white/10 pb-4">
              {item.megaMenu ? (
                <>
                  <div className="flex justify-between items-center w-full text-white text-sm font-medium tracking-wide">
                    <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                    <button onClick={() => toggleMobileDropdown(item.name)} className="p-2 -mr-2">
                      <FiChevronDown className={`text-sm transition-transform ${activeMobileDropdown === item.name ? 'rotate-180 text-teal-dark' : ''}`} />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === item.name ? 'max-h-[1200px] mt-6' : 'max-h-0'}`}>
                    
                    {item.megaMenu.type === 'split' && (
                      <div className="pl-4 space-y-5 text-gray-300">
                        {item.megaMenu.leftItems?.map((link: any) => (
                          <Link key={link.title} href={link.href} className="block text-sm font-normal text-gray-300 hover:text-teal-dark transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    )}

                    {item.megaMenu.type === 'columns' && (
                      <div className="pl-4 space-y-8 text-gray-300">
                        {item.megaMenu.columns?.map((col: any) => (
                          <div key={col.title}>
                            <h4 className="text-teal-dark text-xs uppercase tracking-widest font-bold mb-4">{col.title}</h4>
                            <ul className="space-y-4">
                              {col.links.map((link: any) => (
                                <li key={link.name}>
                                  <Link href={link.href} className="block text-sm font-normal text-gray-300 hover:text-teal-dark transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    
                  </div>
                </>
              ) : (
                <Link href={item.href} className="text-white text-sm font-medium tracking-wide block" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link href="/contact" className="btn btn-primary w-full text-center py-5 mt-6 text-sm tracking-widest" onClick={() => setMobileMenuOpen(false)}>
            BOOK A SESSION
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
