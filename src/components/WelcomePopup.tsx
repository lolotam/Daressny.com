
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('darsaniWelcomeShown');
    
    if (!hasVisited) {
      // If first visit, set a timeout to show popup after 1.5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('darsaniWelcomeShown', 'true');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative animate-fade-in">
        <button
          onClick={closePopup}
          className="absolute top-4 left-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="إغلاق"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
        
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center p-3 bg-brand-blue/10 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">👋 مرحبًا بك في منصة درسني!</h3>
        </div>
        
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-6 w-6 text-green-700 flex-shrink-0 mr-2">✓</span>
            <span>احجز دروسك الخصوصية مع نخبة المعلمين أونلاين أو بالمنزل.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-6 w-6 text-green-700 flex-shrink-0 mr-2">✓</span>
            <span>تصفح مكتبتنا التعليمية الشاملة وطور مستواك الدراسي الآن!</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-6 w-6 text-green-700 flex-shrink-0 mr-2">✓</span>
            <span>سجل مجانًا كطالب أو كمدرس وابدأ رحلتك نحو التفوق.</span>
          </li>
        </ul>
        
        <div className="flex flex-col space-y-3">
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 w-full py-6 text-lg">
            <Link to="/register" onClick={closePopup}>سجل الآن</Link>
          </Button>
          <Button 
            variant="outline" 
            onClick={closePopup}
            className="border-gray-300 text-gray-700 hover:bg-gray-100 w-full"
          >
            استكشاف المنصة
          </Button>
        </div>
      </div>
    </div>
  );
};
