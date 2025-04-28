
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-brand-blue">منصة درسني</h2>
            <p className="text-gray-300">مع درسني، مستقبلك بين يديك.</p>
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
                href="https://wa.me/96555683677" 
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
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-brand-blue transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-blue transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/teachers" className="hover:text-brand-blue transition-colors">المعلمين</Link>
              </li>
              <li>
                <Link to="/subjects" className="hover:text-brand-blue transition-colors">المواد الدراسية</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-blue transition-colors">المدونة</Link>
              </li>
            </ul>
          </div>
          
          {/* Teacher Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">خدمات المعلمين</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register?role=teacher" className="hover:text-brand-blue transition-colors">سجل كمعلم</Link>
              </li>
              <li>
                <Link to="/teacher-development" className="hover:text-brand-blue transition-colors">تطوير المهارات</Link>
              </li>
              <li>
                <Link to="/faq?role=teacher" className="hover:text-brand-blue transition-colors">أسئلة شائعة للمعلمين</Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-brand-blue transition-colors">قصص نجاح</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">تواصل معنا</h3>
            <address className="not-italic">
              <p className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5 text-brand-blue" />
                <a href="mailto:info@daressny.com" className="hover:text-brand-blue transition-colors">
                  info@daressny.com
                </a>
              </p>
              <p className="flex items-center gap-2 mb-3">
                <Phone className="h-5 w-5 text-brand-blue" />
                <a href="tel:+96555683677" dir="ltr" className="hover:text-brand-blue transition-colors">
                  +96555683677
                </a>
              </p>
              <p className="flex items-center gap-2 mb-5">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <span>الكويت - السالمية</span>
              </p>
              
              <div className="space-y-2">
                <Button asChild className="w-full" variant="outline">
                  <a href="https://wa.me/96555683677" target="_blank" rel="noopener noreferrer">
                    تواصل مع فريق الدعم
                  </a>
                </Button>
                <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  <a href="https://wa.me/96555683677" target="_blank" rel="noopener noreferrer">
                    احجز جلسة تدريبية الآن
                  </a>
                </Button>
              </div>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} منصة درسني. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
