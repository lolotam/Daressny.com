import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Book, BookOpen, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المواد الدراسية', path: '/subjects' },
    { name: 'المصادر التعليمية', path: '/resources' },
    { name: 'احجز درس', path: '/book' },
    { name: 'انضم كمدرس', path: '/join-teacher' },
    { name: 'المدونة', path: '/blog' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  // Social media items
  const socialItems = [
    { icon: <Instagram size={18} />, url: 'https://instagram.com/daressny', label: 'Instagram' },
    { icon: <Facebook size={18} />, url: 'https://facebook.com/daressny', label: 'Facebook' },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"/><path d="M13 12v8m-2 -8v8"/><path d="M15.09 4.111a8.82 8.82 0 0 0 -6.18 0"/><path d="M12 4v4"/><path d="M20 10c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10c1.088 0 2.134 .184 3.11 .523"/></svg>, url: 'https://tiktok.com/@daressny', label: 'TikTok' },
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
        <Link to="/" className="text-2xl font-bold text-brand-blue">
          منصة درسني
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`font-medium transition-colors relative py-2 px-1 group ${
                isActive(item.path) 
                  ? 'text-brand-blue' 
                  : 'text-gray-700 hover:text-brand-blue'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                isActive(item.path) ? 'scale-x-100' : ''
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4 mr-8">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-blue transition-colors"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
            <Link to="/login">تسجيل دخول</Link>
          </Button>
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
            <Link to="/register">انضم الآن</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500 p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                {item.name === 'المواد الدراسية' && <Book size={18} className="inline ml-2" />}
                {item.name === 'المصادر التعليمية' && <BookOpen size={18} className="inline ml-2" />}
                {item.name === 'اتصل بنا' && <MessageSquare size={18} className="inline ml-2" />}
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
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <Button asChild variant="outline" className="flex-1 border-brand-blue text-brand-blue">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>تسجيل دخول</Link>
              </Button>
              <Button asChild className="flex-1 bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>انضم الآن</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
