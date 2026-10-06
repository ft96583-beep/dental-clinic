import { useState, useEffect } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { BlogPage } from './pages/BlogPage';
import { PagesOverview } from './pages/PagesOverview';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const getPageFromPath = (path: string) => {
    if (path === '/services') return 'services';
    if (path === '/case-studies') return 'case-studies';
    if (path === '/blog') return 'blog';
    if (path === '/pages') return 'pages';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(() => getPageFromPath(window.location.pathname));

  // Ensure intro runs every time app mounts or refreshes
  useEffect(() => {
    setShowIntro(true);
  }, []);

  // Sync state with browser history back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleSelectService = (_serviceId: string) => {
    handleNavigate('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Required Dental Clinic Intro Animation on every open/refresh */}
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Top Blue Information Bar Component with Scroll Hiding */}
      <TopBar />

      {/* Header / Navbar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onBookClick={handleBookClick} 
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home onNavigate={handleNavigate} onSelectService={handleSelectService} onBookClick={handleBookClick} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onBookClick={handleBookClick} />
        )}
        {currentPage === 'case-studies' && (
          <CaseStudiesPage onBookClick={handleBookClick} />
        )}
        {currentPage === 'blog' && (
          <BlogPage onBookClick={handleBookClick} />
        )}
        {currentPage === 'pages' && (
          <PagesOverview onBookClick={handleBookClick} />
        )}
      </main>

      {/* Footer with branding */}
      <Footer onNavigate={handleNavigate} />

      {/* Professional Appointment Popup Modal */}
      <AppointmentModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
