import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EmergencyBar } from './components/EmergencyBar';
import { SituationNavigator } from './components/SituationNavigator';
import { DKBasuCard } from './components/DKBasuCard';
import { VerbalScripts } from './components/VerbalScripts';
import { AIAdvisor } from './components/AIAdvisor';
import { RightsCardGenerator } from './components/RightsCardGenerator';
import { LegalArticlesExplorer } from './components/LegalArticlesExplorer';
import { MythBusterQuiz } from './components/MythBusterQuiz';
import { DepartmentDirectory } from './components/DepartmentDirectory';
import { DigitalGuidebook } from './components/DigitalGuidebook';
import { DetailPage } from './components/DetailPage';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { StickyAIAssistant } from './components/StickyAIAssistant';
import { Category, DetailPageTarget, SupportedLanguage } from './types';
import { Shield, PhoneCall, AlertTriangle } from 'lucide-react';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.substring(1) || 'situations';

  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSituationId, setSelectedSituationId] = useState<string | null>(null);
  const [detailTarget, setDetailTarget] = useState<DetailPageTarget | null>(null);
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: string) => {
    setDetailTarget(null);
    navigate(`/${tab}`);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, detailTarget]);

  // Determine if HeroSection should be visible
  // We only show it on the home/situations route when no detail page is active
  const isHomeRoute = location.pathname === '/' || location.pathname === '/situations';
  const showHeroSection = !detailTarget && isHomeRoute;

  const handleSelectQuickSituation = (situationId: string) => {
    setSelectedSituationId(situationId);
    setDetailTarget(null);
    navigate('/situations');
    // Smooth scroll down to main content area
    setTimeout(() => {
      const el = document.getElementById('main-content');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category as Category);
    setDetailTarget(null);
    navigate('/rights');
  };

  const handleOpenDetail = (target: DetailPageTarget) => {
    setDetailTarget(target);
    setTimeout(() => {
      const el = document.getElementById('main-content');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900 relative">
      {/* Subtle top ambient gradient mesh */}
      <div className="fixed inset-0 bg-mesh-light pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <Navbar
          language={language}
          setLanguage={setLanguage}
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        />

        {/* Hero Section (Hidden when inside a detail page or non-home tabs to maximize reading space) */}
        {showHeroSection && (
          <HeroSection
            searchQuery={searchQuery}
            setSearchQuery={(q) => {
              setSearchQuery(q);
              if (q.trim()) {
                setDetailTarget(null);
                navigate('/rights');
              }
            }}
            onSelectCategory={handleSelectCategory}
            onSelectQuickSituation={handleSelectQuickSituation}
            language={language}
          />
        )}

        {/* Emergency Strip */}
        <EmergencyBar
          isOpen={isEmergencyModalOpen}
          onClose={() => setIsEmergencyModalOpen(false)}
          language={language}
        />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <AnimatePresence mode="wait">
            
            {/* Detail Page / Dedicated Single View */}
            {detailTarget ? (
              <motion.div
                key={`detail-${detailTarget.type}-${detailTarget.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <DetailPage
                  target={detailTarget}
                  language={language}
                  onBack={() => setDetailTarget(null)}
                  onSelectTarget={handleOpenDetail}
                />
              </motion.div>
            ) : (
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/situations" replace />} />
                
                <Route path="/situations" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <SituationNavigator
                      selectedSituationId={selectedSituationId}
                      onSelectSituation={(id) => setSelectedSituationId(id)}
                      language={language}
                      onSelectTarget={handleOpenDetail}
                    />
                  </motion.div>
                } />

                <Route path="/guidebook" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <DigitalGuidebook
                      language={language}
                      onOpenSituation={(id) => {
                        setSelectedSituationId(id);
                        navigate('/situations');
                      }}
                    />
                  </motion.div>
                } />

                <Route path="/rights" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <LegalArticlesExplorer
                      selectedCategory={selectedCategory}
                      onSelectCategory={setSelectedCategory}
                      searchQuery={searchQuery}
                      language={language}
                      onSelectTarget={handleOpenDetail}
                    />
                  </motion.div>
                } />

                <Route path="/departments" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <DepartmentDirectory
                      language={language}
                      onSelectTarget={handleOpenDetail}
                    />
                  </motion.div>
                } />

                <Route path="/dk-basu" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <DKBasuCard language={language} />
                  </motion.div>
                } />

                <Route path="/scripts" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <VerbalScripts language={language} />
                  </motion.div>
                } />

                <Route path="/ai-advisor" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <AIAdvisor language={language} />
                  </motion.div>
                } />

                <Route path="/pocket-pass" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <RightsCardGenerator language={language} />
                  </motion.div>
                } />

                <Route path="/quiz" element={
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                    <MythBusterQuiz language={language} />
                  </motion.div>
                } />
              </Routes>
            )}

          </AnimatePresence>
        </main>

        {/* Mobile App Navigation Dock */}
        <MobileBottomBar
          language={language}
          setLanguage={setLanguage}
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        />

        {/* Footer */}
        <Footer language={language} />

        {/* Global Sticky AI Assistant */}
        <StickyAIAssistant language={language} />
      </div>
    </div>
  );
}
