import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d2b] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-dark/50 to-transparent"></div>
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-dark/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Contact (Takes up more space) */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Logo */}
            <Link href="/" className="mb-6 group cursor-pointer inline-block">
              <img src="/thrive-logo-white.png" alt="Thrive Consults" className="h-20 w-auto object-contain" />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              We don't just advise, we build. Partnering with Nigerian businesses to create scalable systems and deliver measurable results.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-teal-dark group-hover:bg-teal-dark group-hover:text-white transition-colors">
                  <FiPhone className="text-xs" />
                </div>
                +234 703 268 1154
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-teal-dark group-hover:bg-teal-dark group-hover:text-white transition-colors">
                  <FiMail className="text-xs" />
                </div>
                grow@thriveconsults.com
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-teal-dark group-hover:bg-teal-dark group-hover:text-white transition-colors">
                  <FiMapPin className="text-xs" />
                </div>
                Lagos, Nigeria
              </li>
            </ul>

          </div>

          {/* Column 2: About */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6 relative inline-block">
              About Thrive
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-teal-dark"></span>
            </h4>
            <ul className="space-y-3">
              {['About', 'Our Story', 'Case Studies', 'Frameworks'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-teal-dark hover:translate-x-1 inline-block transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-teal-dark"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Strategic HR', 
                'Business Diagnostics', 
                'Operational Systems', 
                'Marketing and Sales', 
                'Customer Service', 
                'Digital Strategy'
              ].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-teal-dark hover:translate-x-1 inline-block transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Who We Serve */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6 relative inline-block">
              Who We Serve
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-teal-dark"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Traders and Importers', 
                'Real Estate', 
                'Manufacturing', 
                'Supermarkets and Retail'
              ].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-teal-dark hover:translate-x-1 inline-block transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-xs text-center md:text-left">
            <p>© {new Date().getFullYear()} Thrive Empire Ltd. All Rights Reserved.</p>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <span>/</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-dark hover:text-white transition-all duration-300">
              <FiLinkedin className="text-xs" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-dark hover:text-white transition-all duration-300">
              <FiInstagram className="text-xs" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-dark hover:text-white transition-all duration-300">
              <FiFacebook className="text-xs" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-dark hover:text-white transition-all duration-300">
              <FiTwitter className="text-xs" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
