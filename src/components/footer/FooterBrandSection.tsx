
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { ContactInfo } from './FooterData';

interface FooterBrandSectionProps {
  info: ContactInfo;
}

export const FooterBrandSection: React.FC<FooterBrandSectionProps> = ({ info }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold text-brand-blue">{info.platformName}</h2>
      <p className="text-gray-300">{info.slogan}</p>
      <div className="flex space-x-4 space-x-reverse">
        {/* Social Media Icons */}
        <a 
          href="https://instagram.com/daressny" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="https://facebook.com/daressny" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href="https://tiktok.com/@daressny" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
          aria-label="TikTok"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"/><path d="M13 12v8m-2 -8v8"/><path d="M15.09 4.111a8.82 8.82 0 0 0 -6.18 0"/><path d="M12 4v4"/><path d="M20 10c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10c1.088 0 2.134 .184 3.11 .523"/></svg>
        </a>
        <a 
          href="https://wa.me/96560685150" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
          aria-label="WhatsApp"
          title="تواصل معنا عبر واتساب"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>
        </a>
      </div>
    </div>
  );
};
