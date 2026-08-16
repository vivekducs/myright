import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, PhoneCall, Globe, BookOpen, AlertOctagon, HelpCircle, MessageSquareText, FileBadge, Check, Sparkles, ChevronDown, Compass, Building2, BookMarked, Search } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SupportedLanguage } from '../types';
import { getT } from '../data/translations';
import ashokChakra from '../data/Ashok chakra.png';
import { TirangaHeader } from './TirangaHeader';

interface NavbarProps {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  onOpenEmergencyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onOpenEmergencyModal,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.substring(1) || 'situations';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = getT(language);

  const navItems = [
    { id: 'situations', label: t.navSituations, icon: Compass, badge: '30s Guide' },
    { id: 'guidebook', label: t.navGuidebook || 'Digital Book', icon: BookMarked, isSpecial: true },
    { id: 'ai-advisor', label: t.navAIAdvisor || 'AI Legal Shield', icon: Sparkles, badge: 'Live AI & Chat' },
    { id: 'rights', label: t.navRights, icon: BookOpen },
    { id: 'departments', label: t.navDepartments, icon: Building2 },
    { id: 'dk-basu', label: t.navDKBasu, icon: Shield },
    { id: 'scripts', label: t.navScripts, icon: MessageSquareText },
    { id: 'pocket-pass', label: t.navPocketPass, icon: FileBadge },
    { id: 'quiz', label: t.navQuiz, icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs transition-all">
      {/* --- National Tiranga Banner & Satyameva Jayate Header --- */}
      <TirangaHeader language={language} setLanguage={setLanguage} />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Circular Brand Logo with State Emblem & Tiranga Indicator */}
          <div 
            id="brand-logo"
            onClick={() => navigate('/situations')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300 ring-2 ring-slate-200 p-1">
                <img src={ashokChakra} alt="Ashok Chakra" className="w-full h-full object-contain" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">
                  My<span className="text-teal-600">Right</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 shadow-xs">
                  भारत
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold hidden sm:block">
                Citizen Police Rights & 30-Sec Action Navigator
              </p>
            </div>
          </div>

          {/* Desktop Nav - Circular Pill Group */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-xs backdrop-blur-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => navigate(`/${item.id}`)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md -translate-y-0.5'
                      : item.isSpecial
                      ? 'bg-teal-50 text-teal-800 hover:bg-teal-600 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-400' : 'text-slate-500'}`} />
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.badge && !isActive && (
                    <span className="text-[8px] bg-teal-600 text-white px-1.5 py-0.2 rounded-full font-extrabold ml-0.5">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Search & SOS Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Quick Search Trigger */}
            <button
              onClick={() => navigate('/rights')}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
              title="Search Rights & Laws"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Fast SOS Emergency Trigger Button */}
            <motion.button
              id="emergency-sos-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenEmergencyModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-red-500/25 transition-all cursor-pointer shrink-0 border border-white/20"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <span className="hidden xs:inline sm:inline">SOS</span>
              <span>112</span>
            </motion.button>

            {/* Mobile quick menu trigger */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-slate-100 space-y-2 bg-white"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-top-${item.id}`}
                      onClick={() => {
                        navigate(`/${item.id}`);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-2.5 p-3.5 rounded-2xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-md'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-teal-50 text-teal-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};
