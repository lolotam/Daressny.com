
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-blue">
          منصة درسني
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-brand-blue transition-colors">
            الرئيسية
          </Link>
          <Link to="/teachers" className="font-medium hover:text-brand-blue transition-colors">
            المعلمين
          </Link>
          <Link to="/subjects" className="font-medium hover:text-brand-blue transition-colors">
            المواد الدراسية
          </Link>
          <Link to="/resources" className="font-medium hover:text-brand-blue transition-colors">
            المصادر التعليمية
          </Link>
          <Link to="/about" className="font-medium hover:text-brand-blue transition-colors">
            من نحن
          </Link>
          <Link to="/contact" className="font-medium hover:text-brand-blue transition-colors">
            اتصل بنا
          </Link>
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
            <Link to="/" className="font-medium hover:text-brand-blue transition-colors py-2 border-b border-gray-100">
              الرئيسية
            </Link>
            <Link to="/teachers" className="font-medium hover:text-brand-blue transition-colors py-2 border-b border-gray-100">
              المعلمين
            </Link>
            <Link to="/subjects" className="font-medium hover:text-brand-blue transition-colors py-2 border-b border-gray-100">
              المواد الدراسية
            </Link>
            <Link to="/resources" className="font-medium hover:text-brand-blue transition-colors py-2 border-b border-gray-100">
              المصادر التعليمية
            </Link>
            <Link to="/about" className="font-medium hover:text-brand-blue transition-colors py-2 border-b border-gray-100">
              من نحن
            </Link>
            <Link to="/contact" className="font-medium hover:text-brand-blue transition-colors py-2 border-b border-gray-100">
              اتصل بنا
            </Link>
            <div className="flex gap-4 mt-2">
              <Button asChild variant="outline" className="flex-1 border-brand-blue text-brand-blue">
                <Link to="/login">تسجيل دخول</Link>
              </Button>
              <Button asChild className="flex-1 bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/register">انضم الآن</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
