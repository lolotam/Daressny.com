
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FooterBrandSection } from './footer/FooterBrandSection';
import { FooterLinksSection } from './footer/FooterLinksSection';
import { FooterContactSection } from './footer/FooterContactSection';
import { footerLinks, contactInfo } from './footer/FooterData';

export const Footer = () => {
  const { language } = useLanguage();
  
  const currentInfo = language === 'ar' ? contactInfo.ar : contactInfo.en;
  const currentQuickLinks = language === 'ar' ? footerLinks.quickLinks.ar : footerLinks.quickLinks.en;
  const currentTeacherServices = language === 'ar' ? footerLinks.teacherServices.ar : footerLinks.teacherServices.en;

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <FooterBrandSection info={currentInfo} />
          
          {/* Quick Links */}
          <FooterLinksSection 
            title={currentInfo.quickLinks} 
            links={currentQuickLinks} 
          />
          
          {/* Teacher Services */}
          <FooterLinksSection 
            title={currentInfo.teacherServices} 
            links={currentTeacherServices} 
          />
          
          {/* Contact Info */}
          <FooterContactSection info={currentInfo} />
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>{currentInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
