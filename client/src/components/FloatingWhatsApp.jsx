import React from 'react';
import { STORE_INFO } from '../data/mockData';
import { Phone } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Enchantique%2C%20I%20would%20like%20to%20speak%20with%20a%20Kerala%20jewellery%20stylist`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Kerala Jewellery Stylist on WhatsApp"
    >
      <Phone size={18} />
      <span>Chat with Stylist</span>
    </a>
  );
};
