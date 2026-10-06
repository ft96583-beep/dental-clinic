import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

export function TopBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`bg-blue-900 text-white text-xs sm:text-sm py-2 px-4 transition-all duration-300 overflow-hidden sticky top-0 z-50 ${
        isVisible ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0 py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <span className="text-cyan-200 font-medium tracking-wide">
          Top Notch Dental Care For Your Teeth
        </span>
        <div className="flex items-center space-x-6 text-slate-200 font-medium">
          <a href="tel:+1234567890" className="flex items-center space-x-1.5 hover:text-white transition-colors">
            <Phone className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span>+1 (234) 567-890</span>
          </a>
          <a href="mailto:contact@dencare.com" className="flex items-center space-x-1.5 hover:text-white transition-colors">
            <Mail className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span>contact@dencare.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
