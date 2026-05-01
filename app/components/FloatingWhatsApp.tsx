'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WA_LINK } from '../lib/whatsapp';

const FloatingWhatsApp = () => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
  >
    <FaWhatsapp className="text-white text-3xl" />
  </a>
);

export default FloatingWhatsApp;
