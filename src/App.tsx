import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import { Footer } from './components/Footer';
import { Category, SupportedLanguage } from './types';
import { Shield, PhoneCall, AlertTriangle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('situations');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSituationId, setSelectedSituationId] = useState<string | null>(null);
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);

  const handleSelectQuickSituation = (situationId: string) => {
    setSelectedSituationId(situationId);
    setActiveTab('situations');
    // Smooth scroll down to situation navigator
    const el = document.getElementById('main-content-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category as Category);
    setActiveTab('rights');
  };

  return (
    <div className="min-h-screen bg-[#FFF3C8] text-[#1A3841] flex flex-col font-sans selection:bg-[#E5CB90] selection:text-[#1A3841]">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          if (q.trim()) {
            setActiveTab('rights');
          }
        }}
        onSelectCategory={handleSelectCategory}
        onSelectQuickSituation={handleSelectQuickSituation}
        language={language}
      />

      {/* Emergency Strip */}
      <EmergencyBar
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        language={language}
      />

      {/* Main Content Area */}
      <main id="main-content-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatePresence mode="wait">
          
          {/* Situation Navigator View */}
          {activeTab === 'situations' && (
            <motion.div
              key="situations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <SituationNavigator
                selectedSituationId={selectedSituationId}
                onSelectSituation={(id) => setSelectedSituationId(id)}
                language={language}
              />
            </motion.div>
          )}

          {/* Legal Rights Compendium View */}
          {activeTab === 'rights' && (
            <motion.div
              key="rights"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <LegalArticlesExplorer
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                searchQuery={searchQuery}
                language={language}
              />
            </motion.div>
          )}

          {/* D.K. Basu Guidelines Checklist */}
          {activeTab === 'dk-basu' && (
            <motion.div
              key="dk-basu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <DKBasuCard language={language} />
            </motion.div>
          )}

          {/* Verbal Scripts Simulator */}
          {activeTab === 'scripts' && (
            <motion.div
              key="scripts"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <VerbalScripts language={language} />
            </motion.div>
          )}

          {/* AI Legal Advisor */}
          {activeTab === 'ai-advisor' && (
            <motion.div
              key="ai-advisor"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <AIAdvisor language={language} />
            </motion.div>
          )}

          {/* Pocket Rights Pass Generator */}
          {activeTab === 'pocket-pass' && (
            <motion.div
              key="pocket-pass"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <RightsCardGenerator language={language} />
            </motion.div>
          )}

          {/* Myths & Quiz */}
          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <MythBusterQuiz language={language} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Floating Emergency Floating Action Pill on Mobile */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsEmergencyModalOpen(true)}
          className="p-3.5 rounded-full bg-red-600 text-white shadow-2xl flex items-center gap-2 font-bold text-xs border-2 border-[#FFF3C8] animate-bounce cursor-pointer"
        >
          <PhoneCall className="w-5 h-5" />
          <span>SOS 112</span>
        </motion.button>
      </div>

      {/* Footer */}
      <Footer language={language} />

    </div>
  );
}
