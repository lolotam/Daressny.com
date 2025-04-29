
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();
  
  const footerLinks = {
    quickLinks: {
      ar: [
        { name: 'الرئيسية', path: '/' },
        { name: 'من نحن', path: '/about' },
        { name: 'المعلمين', path: '/teachers' },
        { name: 'المواد الدراسية', path: '/subjects' },
        { name: 'المدونة', path: '/blog' },
      ],
      en: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Teachers', path: '/teachers' },
        { name: 'Subjects', path: '/subjects' },
        { name: 'Blog', path: '/blog' },
      ]
    },
    teacherServices: {
      ar: [
        { name: 'سجل كمعلم', path: '/register?role=teacher' },
        { name: 'تطوير المهارات', path: '/teacher-development' },
        { name: 'أسئلة شائعة للمعلمين', path: '/faq?role=teacher' },
        { name: 'قصص نجاح', path: '/success-stories' },
      ],
      en: [
        { name: 'Register as Teacher', path: '/register?role=teacher' },
        { name: 'Skill Development', path: '/teacher-development' },
        { name: 'Teacher FAQ', path: '/faq?role=teacher' },
        { name: 'Success Stories', path: '/success-stories' },
      ]
    }
  };

  const contactInfo = {
    ar: {
      platformName: 'منصة درسني',
      slogan: 'مع درسني، مستقبلك بين يديك.',
      email: 'info@daressny.com',
      phone: '+96555683677',
      address: 'الكويت - السالمية',
      supportTeam: 'تواصل مع فريق الدعم',
      bookSession: 'احجز جلسة تدريبية الآن',
      copyright: `© ${new Date().getFullYear()} منصة درسني. جميع الحقوق محفوظة.`,
      quickLinks: 'روابط سريعة',
      teacherServices: 'خدمات المعلمين',
      contactUs: 'تواصل معنا'
    },
    en: {
      platformName: 'Darsni Platform',
      slogan: 'With Darsni, your future is in your hands.',
      email: 'info@daressny.com',
      phone: '+96555683677',
      address: 'Kuwait - Salmiya',
      supportTeam: 'Contact Support Team',
      bookSession: 'Book a Training Session Now',
      copyright: `© ${new Date().getFullYear()} Darsni Platform. All rights reserved.`,
      quickLinks: 'Quick Links',
      teacherServices: 'Teacher Services',
      contactUs: 'Contact Us'
    }
  };

  const currentInfo = language === 'ar' ? contactInfo.ar : contactInfo.en;
  const currentQuickLinks = language === 'ar' ? footerLinks.quickLinks.ar : footerLinks.quickLinks.en;
  const currentTeacherServices = language === 'ar' ? footerLinks.teacherServices.ar : footerLinks.teacherServices.en;

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-brand-blue">{currentInfo.platformName}</h2>
            <p className="text-gray-300">{currentInfo.slogan}</p>
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
                title={language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">{currentInfo.quickLinks}</h3>
            <ul className="space-y-2">
              {currentQuickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-brand-blue transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Teacher Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">{currentInfo.teacherServices}</h3>
            <ul className="space-y-2">
              {currentTeacherServices.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-brand-blue transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">{currentInfo.contactUs}</h3>
            <address className="not-italic">
              <p className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5 text-brand-blue" />
                <a href="mailto:info@daressny.com" className="hover:text-brand-blue transition-colors">
                  {currentInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2 mb-3">
                <Phone className="h-5 w-5 text-brand-blue" />
                <a href="tel:+96555683677" dir="ltr" className="hover:text-brand-blue transition-colors">
                  {currentInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 mb-5">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <span>{currentInfo.address}</span>
              </p>
              
              <div className="space-y-2">
                <Button asChild className="w-full" variant="outline">
                  <a href="https://wa.me/96560685150" target="_blank" rel="noopener noreferrer">
                    {currentInfo.supportTeam}
                  </a>
                </Button>
                <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  <a href="https://wa.me/96560685150" target="_blank" rel="noopener noreferrer">
                    {currentInfo.bookSession}
                  </a>
                </Button>
              </div>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>{currentInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
