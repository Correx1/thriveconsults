'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const questions = [
  // Branding
  { cat: 'Branding', text: 'When a potential customer hears your business name for the first time, do they immediately understand what you do and who you serve?' },
  { cat: 'Branding', text: 'Does your business have a consistent visual identity (logo, colours, font) that appears the same across your signage, social media, documents, and packaging?' },
  { cat: 'Branding', text: 'Can your staff explain what makes your business different from your competitors in one or two sentences?' },
  { cat: 'Branding', text: 'When customers are asked why they chose you over a competitor, do they give specific, consistent reasons?' },
  { cat: 'Branding', text: 'Does your business have a clear ideal customer profile that guides every marketing and sales decision?' },
  // Efficiency
  { cat: 'Efficiency', text: 'Can your business operate for a full week at normal performance without you being physically present or available by phone?' },
  { cat: 'Efficiency', text: 'Do you have written processes (SOPs) for the most critical tasks in your business?' },
  { cat: 'Efficiency', text: 'Do new staff members receive structured onboarding that gets them productive without the founder training them personally?' },
  { cat: 'Efficiency', text: 'Are decisions in your business made consistently by your team, or do most things wait for you to decide?' },
  { cat: 'Efficiency', text: 'Do you have a clear picture of your actual cost of operations and profit margin at any given time?' },
  // Excellence
  { cat: 'Excellence', text: 'Does every customer who interacts with your business receive the same standard of service regardless of which staff member handles them?' },
  { cat: 'Excellence', text: 'Do you have a formal performance management system that holds staff accountable to specific, measurable standards?' },
  { cat: 'Excellence', text: 'When a customer complaint is raised, is there a documented process your team follows to resolve it?' },
  { cat: 'Excellence', text: 'Do you track customer satisfaction or retention metrics in any structured way?' },
  { cat: 'Excellence', text: 'Are the quality standards in your business written down and trained into your team — or do they exist only in the founder\'s head?' },
  // Promotion
  { cat: 'Promotion', text: 'Does your business generate a consistent flow of new enquiries each week without the founder making personal sales calls?' },
  { cat: 'Promotion', text: 'Do you have a documented sales process that your team follows from first contact to closed deal?' },
  { cat: 'Promotion', text: 'Is your business findable online when a potential customer searches for what you offer in your city or market?' },
  { cat: 'Promotion', text: 'Do you have a system for following up with leads who did not convert the first time?' },
  { cat: 'Promotion', text: 'Do satisfied customers regularly refer others to your business as a result of a deliberate referral programme?' }
];

const OPTIONS = [
  { label: 'Never', value: 0 },
  { label: 'Rarely', value: 1 },
  { label: 'Sometimes', value: 2 },
  { label: 'Always', value: 3 }
];

const TOTAL_QUESTIONS = questions.length;

const COPY = {
  Branding: {
    critical: 'Your brand is not clearly communicating who you are or who you serve. Potential customers cannot tell what makes you different. This is costing you sales before a conversation even starts.',
    developing: 'Your brand identity exists but it is not consistent or compelling enough to do real work for your business. There is a gap between what you know your business offers and what customers understand when they encounter it.',
    strong: 'Your brand is working. Customers understand who you are, what you stand for, and why they should choose you. Keep this standard up as you scale.'
  },
  Efficiency: {
    critical: 'Your business cannot run without you. Everything depends on your personal presence, your memory, or your direct involvement. This is the most common bottleneck we see and it is the one that limits everything else.',
    developing: 'Some systems exist but they are incomplete or inconsistently followed. You can step away briefly but not confidently. The foundation is there — it needs to be built on properly.',
    strong: 'Your operations have real structure. Your team can execute without you being the answer to every question. This is what a scalable business looks like.'
  },
  Excellence: {
    critical: 'Service quality in your business is inconsistent. Different customers get different experiences depending on who serves them, what day it is, or how busy the business is. This is quietly costing you repeat business and referrals every week.',
    developing: 'Standards exist in your business but they live in people\'s heads rather than in documented systems. You get good results when the right people are on duty. You do not always get them otherwise.',
    strong: 'Your team delivers consistently. Customers know what to expect from your business and they get it. This is a real competitive advantage — protect it as you grow.'
  },
  Promotion: {
    critical: 'Your business is not generating consistent new enquiries. You depend on word of mouth, chance encounters, and the founder\'s personal network to bring in revenue. This makes growth unpredictable and exhausting.',
    developing: 'Some marketing is happening but it is not systematic. Some leads come in but the pipeline is irregular. You are not confidently in control of how new business arrives.',
    strong: 'Your business has a working promotional engine. New enquiries arrive consistently. Your sales process converts them at a reasonable rate. Growth is within your control.'
  }
} as const;

const CAT_LINKS = {
  Branding: '/services/digital-business-strategy',
  Efficiency: '/services/operational-systems',
  Excellence: '/services/customer-service-systems',
  Promotion: '/services/marketing-and-sales'
} as const;

type Category = keyof typeof COPY;

export default function BeepQuiz() {
  const [step, setStep] = useState<'quiz' | 'lead' | 'results'>('quiz');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(TOTAL_QUESTIONS).fill(-1));
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '', type: '' });
  const [errors, setErrors] = useState({ name: false, phone: false, email: false, type: false });
  const [emailSent, setEmailSent] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);

  const handleOptionSelect = (value: number) => {
    if (isAdvancing) return;
    
    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);
    
    setIsAdvancing(true);
    setTimeout(() => {
      if (current < TOTAL_QUESTIONS - 1) {
        setCurrent(c => c + 1);
      } else {
        setStep('lead');
      }
      setIsAdvancing(false);
    }, 350);
  };

  const handleNext = () => {
    if (answers[current] === -1) return;
    if (current < TOTAL_QUESTIONS - 1) {
      setCurrent(current + 1);
    } else {
      setStep('lead');
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !leadForm.name.trim(),
      phone: !leadForm.phone.trim(),
      email: !leadForm.email.trim() || !/\S+@\S+\.\S+/.test(leadForm.email),
      type: !leadForm.type
    };
    
    setErrors(newErrors);
    
    if (!newErrors.name && !newErrors.phone && !newErrors.email && !newErrors.type) {
      // In a real app, you would submit to an API here
      setStep('results');
    }
  };

  const computeScores = () => {
    const cats: Category[] = ['Branding', 'Efficiency', 'Excellence', 'Promotion'];
    const scores: Record<Category, number> = { Branding: 0, Efficiency: 0, Excellence: 0, Promotion: 0 };
    
    questions.forEach((q, idx) => {
      const ans = answers[idx];
      if (ans !== -1) {
        scores[q.cat as Category] += ans;
      }
    });
    return scores;
  };

  const getBandFor = (score: number) => {
    if (score <= 5) return 'critical';
    if (score <= 10) return 'developing';
    return 'strong';
  };

  const getBandLabel = (b: string) => {
    if (b === 'critical') return 'Critical';
    if (b === 'developing') return 'Developing';
    return 'Strong';
  };

  const getBandColor = (b: string) => {
    if (b === 'critical') return 'text-red-600 bg-red-100 border-red-200';
    if (b === 'developing') return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    return 'text-green-600 bg-green-100 border-green-200';
  };
  
  const getBandFillColor = (b: string) => {
    if (b === 'critical') return 'bg-red-500';
    if (b === 'developing') return 'bg-yellow-500';
    return 'bg-green-500';
  };

  if (step === 'quiz') {
    const q = questions[current];
    const pct = Math.round(((current + 1) / TOTAL_QUESTIONS) * 100);

    return (
      <div className="max-w-3xl mx-auto px-6 py-6">
        {/* Intro Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-4">Ready to find out where your business stands?</h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Answer Honestly. That Is the Only Way This Works.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Question {current + 1} of {TOTAL_QUESTIONS}</span>
            <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-deep-navy rounded-md uppercase tracking-widest">{q.cat}</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-teal-dark h-full transition-all duration-300" style={{ width: `${pct}%` }}></div>
          </div>
        </div>

        {/* Question */}
        <div className={`bg-white shadow-xl rounded-xl p-6 md:p-10 mb-8 border border-gray-100 transition-all duration-300 transform ${isAdvancing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <h3 className="text-lg md:text-xl font-bold text-deep-navy mb-8 leading-relaxed">
            {q.text}
          </h3>

          <div className="space-y-4">
            {OPTIONS.map((opt) => {
              const isSelected = answers[current] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleOptionSelect(opt.value)}
                  disabled={isAdvancing}
                  className={`w-full flex items-center p-4 md:p-5 rounded-md border-2 transition-all duration-200 text-left ${
                    isSelected 
                      ? 'border-teal-dark bg-teal-dark/5 text-deep-navy font-bold' 
                      : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 mr-4 flex-shrink-0 flex items-center justify-center ${
                    isSelected ? 'border-teal-dark' : 'border-gray-300'
                  }`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-teal-dark"></div>}
                  </div>
                  <span className="text-base md:text-lg">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center h-12">
          <button 
            onClick={handleBack}
            disabled={isAdvancing}
            className={`text-gray-500 font-medium hover:text-deep-navy transition-colors flex items-center ${current === 0 ? 'invisible' : ''}`}
          >
            ← Back
          </button>
          
          {answers[current] !== -1 && !isAdvancing && (
            <button 
              onClick={handleNext}
              className="text-teal-dark font-bold hover:text-teal-light transition-colors flex items-center px-4 py-2"
            >
              {current === TOTAL_QUESTIONS - 1 ? 'See Results' : 'Next Question'} →
            </button>
          )}
        </div>
      </div>
    );
  }

  if (step === 'lead') {
    return (
      <div className="max-w-2xl mx-auto px-6 py-6 md:py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-4">You&apos;re Almost Done!</h2>
        <p className="text-gray-600 mb-8">Enter your details below to reveal your business health score and priority action plan.</p>
        
        <form onSubmit={handleLeadSubmit} className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 text-left">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
              <input 
                type="text" 
                value={leadForm.name}
                onChange={e => setLeadForm({...leadForm, name: e.target.value})}
                className={`w-full p-4 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-teal-dark outline-none transition-all`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp / Phone Number</label>
              <input 
                type="tel" 
                value={leadForm.phone}
                onChange={e => setLeadForm({...leadForm, phone: e.target.value})}
                className={`w-full p-4 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-teal-dark outline-none transition-all`}
                placeholder="+234 800 000 0000"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number is required</p>}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                value={leadForm.email}
                onChange={e => setLeadForm({...leadForm, email: e.target.value})}
                className={`w-full p-4 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-teal-dark outline-none transition-all`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Business Type</label>
              <select 
                value={leadForm.type}
                onChange={e => setLeadForm({...leadForm, type: e.target.value})}
                className={`w-full p-4 rounded-md border ${errors.type ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-teal-dark outline-none transition-all`}
              >
                <option value="">Select an option</option>
                <option value="service">Service Based</option>
                <option value="product">Product Based</option>
                <option value="retail">Retail / Physical Store</option>
                <option value="digital">Digital / E-commerce</option>
                <option value="other">Other</option>
              </select>
              {errors.type && <p className="text-red-500 text-sm mt-1">Business type is required</p>}
            </div>
            <button 
              type="submit"
              className="w-full bg-deep-navy hover:bg-opacity-90 text-white font-bold py-4 rounded-md transition-all shadow-md mt-4"
            >
              Reveal My Score
            </button>
          </div>
        </form>
      </div>
    );
  }

  // RESULTS STEP
  const scores = computeScores();
  const cats: Category[] = ['Branding', 'Efficiency', 'Excellence', 'Promotion'];
  const totalScore = cats.reduce((sum, c) => sum + scores[c], 0);
  
  // Find lowest scoring category
  let lowestCat = cats[0];
  let lowestScore = scores[cats[0]];
  cats.forEach(c => {
    if (scores[c] < lowestScore) {
      lowestScore = scores[c];
      lowestCat = c;
    }
  });

  const lowestBand = getBandFor(lowestScore);
  const pct60 = Math.round((totalScore / 60) * 100);
  
  let summaryText = '';
  if (pct60 >= 75) {
    summaryText = 'Your business is in good health across most vital signs. Focus on your weakest area to unlock the next stage of growth.';
  } else if (pct60 >= 50) {
    summaryText = 'Your business has a solid foundation but there are meaningful gaps to address. Your weakest vital sign is the priority.';
  } else {
    summaryText = 'Your business has significant systems gaps that are limiting growth and costing you daily. The areas below show you exactly where to focus first.';
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      {/* Overview */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-deep-navy mb-4">Your B.E.E.P. Results</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">{summaryText}</p>
        
        <div className="relative inline-flex items-center justify-center w-48 h-48">
          <svg viewBox="0 0 192 192" className="w-full h-full transform -rotate-90">
            <circle cx="96" cy="96" r="88" stroke="#f3f4f6" strokeWidth="12" fill="none" />
            <circle 
              cx="96" cy="96" r="88" 
              stroke="#24db8d" 
              strokeWidth="12" 
              fill="none" 
              strokeDasharray="553" 
              strokeDashoffset={553 - (totalScore / 60) * 553} 
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
            <span className="text-5xl font-black text-deep-navy leading-none">{totalScore}</span>
            <span className="text-xs font-bold text-gray-400 mt-1">OUT OF 60</span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {cats.map(cat => {
          const score = scores[cat];
          const band = getBandFor(score);
          const pct = Math.round((score / 15) * 100);
          
          return (
            <div key={cat} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-deep-navy">{cat}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getBandColor(band)}`}>
                  {score}/15 — {getBandLabel(band)}
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
                <div className={`h-full ${getBandFillColor(band)}`} style={{ width: `${pct}%` }}></div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {COPY[cat][band]}
              </p>
            </div>
          );
        })}
      </div>

      {/* Priority Action */}
      <div className="bg-deep-navy text-white p-8 md:p-10 rounded-xl text-center shadow-2xl relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-dark/20 via-transparent to-transparent opacity-80 pointer-events-none" />
        <div className="relative z-10">
          <span className="text-teal-dark font-bold uppercase tracking-widest text-sm mb-4 block">Priority Action Plan</span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Your Biggest Opportunity: {lowestCat}</h3>
          <p className="text-gray-300 text-base max-w-3xl mx-auto mb-8 leading-relaxed">
            {COPY[lowestCat][lowestBand]}
          </p>
          <Link 
            href={CAT_LINKS[lowestCat]} 
            className="inline-flex items-center bg-teal-dark hover:bg-teal-light text-white font-bold px-8 py-4 rounded-md transition-all text-base shadow-lg"
          >
            See How We Fix {lowestCat} <span className="ml-2">→</span>
          </Link>
        </div>
      </div>

      {/* Send Email Action */}
      <div className="text-center">
        {!emailSent ? (
          <button 
            onClick={() => {
              // Simulate API call
              setTimeout(() => setEmailSent(true), 600);
            }}
            className="inline-flex items-center bg-white border-2 border-teal-dark text-teal-dark hover:bg-teal-50 font-bold px-8 py-3 rounded-md transition-all text-base shadow-sm"
          >
            ✉️ Email My Results to {leadForm.email || 'Me'}
          </button>
        ) : (
          <div className="inline-flex items-center text-green-600 font-bold px-8 py-3 bg-green-50 rounded-md border border-green-200">
            ✅ Results sent to {leadForm.email}!
          </div>
        )}
      </div>
    </div>
  );
}
