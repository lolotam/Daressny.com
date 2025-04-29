
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Book, BookOpen, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Navigation items
  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('subjects'), path: '/subjects' },
    { name: t('resources'), path: '/resources' },
    { name: t('book'), path: '/book' },
    { name: t('joinTeacher'), path: '/join-teacher' },
    { name: t('blog'), path: '/blog' },
    { name: t('contact'), path: '/contact' },
  ];

  // Social media items
  const socialItems = [
    { icon: <Instagram size={18} />, url: 'https://instagram.com/daressny', label: 'Instagram' },
    { icon: <Facebook size={18} />, url: 'https://facebook.com/daressny', label: 'Facebook' },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"/><path d="M13 12v8m-2 -8v8"/><path d="M15.09 4.111a8.82 8.82 0 0 0 -6.18 0"/><path d="M12 4v4"/><path d="M20 10c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10c1.088 0 2.134 .184 3.11 .523"/></svg>, url: 'https://tiktok.com/@daressny', label: 'TikTok' },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>, url: 'https://wa.me/96560685150', label: 'WhatsApp' },
  ];

  // Check if the nav item is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/67701b70-7d61-42f4-a7f4-f9f298d38920.png" 
            alt="درسني" 
            className="h-14 w-auto mr-2" 
          />
        </Link>
        
        {/* Desktop Navigation - Updated to show on a single row */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`font-medium text-sm transition-colors px-3 py-2 mx-1 rounded hover:bg-gray-100 ${
                  isActive(item.path) 
                    ? 'text-brand-blue' 
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Language Switcher + Social Media Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 mr-4">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-blue transition-colors"
                aria-label={item.label}
                title={item.label === 'WhatsApp' ? 'تواصل معنا عبر واتساب' : item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
            <Link to="/login">{t('login')}</Link>
          </Button>
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
            <Link to="/register">{t('register')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button 
            className="text-gray-500 p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-white border-t mt-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`font-medium transition-colors py-2 border-b border-gray-100 ${
                  isActive(item.path) 
                    ? 'text-brand-blue' 
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name === t('subjects') && <Book size={18} className="inline ml-2" />}
                {item.name === t('resources') && <BookOpen size={18} className="inline ml-2" />}
                {item.name === t('contact') && <MessageSquare size={18} className="inline ml-2" />}
                {item.name}
              </Link>
            ))}

            {/* Social Media Icons (Mobile) */}
            <div className="flex gap-6 py-4 justify-center border-b border-gray-100">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand-blue transition-colors"
                  aria-label={item.label}
                  title={item.label === 'WhatsApp' ? 'تواصل معنا عبر واتساب' : item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <Button asChild variant="outline" className="flex-1 border-brand-blue text-brand-blue">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>{t('login')}</Link>
              </Button>
              <Button asChild className="flex-1 bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>{t('register')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
