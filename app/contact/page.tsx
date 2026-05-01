'use client';

import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

// ─── HERO ───────────────────────────────────────────────────────
const Hero = () => (
  <section className="bg-deep-navy h-[60vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/10 via-transparent to-transparent opacity-80 pointer-events-none" />
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
        Let Us Talk About<br className="hidden md:block" />
        <span className="text-teal-dark"> Your Business.</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
        You do not need to have everything figured out before you reach out. Just tell us where you are and where you want to go.
      </p>
    </div>
  </section>
);

// ─── CONTACT CARDS ───────────────────────────────────────────────
const ContactCards = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <p className="section-subtitle text-teal-dark text-center mb-12">How Would You Like to Reach Us?</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* WhatsApp */}
        <div className="border border-gray-200 p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 bg-green-50 flex items-center justify-center">
            <FaWhatsapp className="text-green-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-deep-navy font-bold text-lg">WhatsApp</h3>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 font-medium">Fastest Response</span>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow">
            Send us a message right now. We respond to every serious inquiry within 24 hours. For traders and importers, this is the fastest route to a conversation.
          </p>
          <a
            href="https://wa.me/2347032681154"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-dark text-white text-xs font-bold tracking-wider px-6 py-3 rounded hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-dark/30 transition-all duration-300 w-fit uppercase"
          >
            <FaWhatsapp className="text-base" /> Chat on WhatsApp
          </a>
        </div>

        {/* Book a Session */}
        <div className="border border-gray-200 p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 bg-deep-navy/5 flex items-center justify-center">
            <FaCalendarCheck className="text-deep-navy text-2xl" />
          </div>
          <div>
            <h3 className="text-deep-navy font-bold text-lg">Book a Discovery Session</h3>
            <span className="text-xs text-deep-navy/60 bg-gray-100 px-2 py-0.5 font-medium">Free, 30 Minutes</span>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow">
            Prefer a proper conversation? Book a free 30-minute discovery session. We dig into your business together and show you exactly where the gaps are.
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 border border-deep-navy text-deep-navy text-xs font-bold tracking-wider px-6 py-3 rounded hover:bg-deep-navy hover:text-white transition-all duration-300 w-fit uppercase"
          >
            Book a Session
          </a>
        </div>

        {/* Email */}
        <div className="border border-gray-200 p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300">
          <div className="w-12 h-12 bg-deep-navy/5 flex items-center justify-center">
            <FaEnvelope className="text-deep-navy text-2xl" />
          </div>
          <div>
            <h3 className="text-deep-navy font-bold text-lg">Send an Email</h3>
            <span className="text-xs text-teal-dark bg-teal-dark/5 px-2 py-0.5 font-medium">hello@thriveconsults.com</span>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow">
            Prefer email? Write to us directly. We read every message and respond within one business day.
          </p>
          <a
            href="mailto:hello@thriveconsults.com"
            className="inline-flex items-center gap-2 border border-deep-navy text-deep-navy text-xs font-bold tracking-wider px-6 py-3 rounded hover:bg-deep-navy hover:text-white transition-all duration-300 w-fit uppercase"
          >
            Send an Email
          </a>
        </div>

      </div>
    </div>
  </section>
);

// ─── FORM SECTION ────────────────────────────────────────────────
const ContactForm = () => {
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '',
    businessType: '', challenge: '', source: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Thrive Consults,%0A%0AName: ${form.name}%0ABusiness: ${form.business}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ABusiness Type: ${form.businessType}%0AChallenge: ${form.challenge}%0AHeard via: ${form.source}`;
    window.open(`https://wa.me/2347032681154?text=${msg}`, '_blank');
  };

  const inputClass = "w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-dark transition-colors rounded-none";
  const labelClass = "block text-deep-navy text-xs font-bold tracking-wider uppercase mb-2";

  return (
    <section id="book" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT — 5 cols: info */}
          <div className="lg:col-span-5">
            <p className="section-subtitle text-teal-dark">Send Us a Message</p>
            <h2 className="section-title text-deep-navy">Tell Us About Your Business.</h2>
            <div className="space-y-6 mt-8">
              <div className="border-l-2 border-teal-dark pl-5">
                <p className="text-deep-navy font-bold text-sm mb-1">WhatsApp</p>
                <a href="https://wa.me/2347032681154" className="text-teal-dark text-sm font-semibold hover:underline">+234 703 268 1154</a>
              </div>
              <div className="border-l-2 border-teal-dark pl-5">
                <p className="text-deep-navy font-bold text-sm mb-1">Email</p>
                <a href="mailto:hello@thriveconsults.com" className="text-teal-dark text-sm font-semibold hover:underline">hello@thriveconsults.com</a>
              </div>
              <div className="border-l-2 border-teal-dark pl-5">
                <p className="text-deep-navy font-bold text-sm mb-1">Response Time</p>
                <p className="text-gray-500 text-sm">Within 24 hours on WhatsApp.<br />Within one business day on email.</p>
              </div>
              <div className="border-l-2 border-teal-dark pl-5">
                <p className="text-deep-navy font-bold text-sm mb-1">Location</p>
                <p className="text-gray-500 text-sm">Lagos, Nigeria<br />Serving businesses nationwide.</p>
              </div>
              <div className="border-l-2 border-teal-dark pl-5">
                <p className="text-deep-navy font-bold text-sm mb-1">Working Hours</p>
                <p className="text-gray-500 text-sm">Monday to Friday<br />8am to 6pm WAT</p>
              </div>
            </div>
          </div>

          {/* RIGHT — 7 cols: form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-10 space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Full Name <span className="text-teal-dark">*</span></label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Business Name <span className="text-teal-dark">*</span></label>
                  <input required name="business" value={form.business} onChange={handleChange} placeholder="Your business name" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Phone / WhatsApp <span className="text-teal-dark">*</span></label>
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+234 803 000 0000" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@yourbusiness.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Type of Business <span className="text-teal-dark">*</span></label>
                <select required name="businessType" value={form.businessType} onChange={handleChange} className={inputClass}>
                  <option value="">Select your business type</option>
                  <option>Trader / Importer</option>
                  <option>Real Estate</option>
                  <option>Manufacturing</option>
                  <option>Supermarket / Retail</option>
                  <option>SME / Startup</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>What is your biggest business challenge right now? <span className="text-teal-dark">*</span></label>
                <textarea required name="challenge" value={form.challenge} onChange={handleChange} rows={4} placeholder="Describe what is not working or what you want to fix..." className={`${inputClass} resize-none`} />
              </div>

              <div>
                <label className={labelClass}>How did you hear about us?</label>
                <select name="source" value={form.source} onChange={handleChange} className={inputClass}>
                  <option value="">Select an option</option>
                  <option>Referral</option>
                  <option>WhatsApp</option>
                  <option>Google</option>
                  <option>Social Media</option>
                  <option>CEO Summit</option>
                  <option>Others</option>
                </select>
              </div>

              <button type="submit" className="w-full py-4 bg-teal-dark text-white text-xs font-bold tracking-widest uppercase rounded hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-dark/30 transition-all duration-300 flex items-center justify-center gap-3">
                <FiSend className="text-base" /> Send My Message
              </button>

              <p className="text-gray-400 text-xs text-center">
                Submitting this form sends your message directly to our WhatsApp. We respond to every inquiry.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── PAGE ────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactCards />
      <ContactForm />
    </main>
  );
}
