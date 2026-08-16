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
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-2xl border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
      {/* --- National Tiranga Banner & Satyameva Jayate Header --- */}
      <TirangaHeader language={language} setLanguage={setLanguage} />

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4 sm:gap-8">

          {/* Circular Brand Logo with State Emblem & Tiranga Indicator */}
          <div
            id="brand-logo"
            onClick={() => navigate('/situations')}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img src={ashokChakra} alt="Ashok Chakra" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-slate-800 group-hover:text-teal-700 transition-colors">
                  My<span className="text-teal-600">Right</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase px-1.5 py-0.5 rounded-sm bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900 border border-amber-200/50 shadow-sm">
                  भारत
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block tracking-wide uppercase mt-0.5">
                Citizen Police Rights & Action Navigator
              </p>
            </div>
          </div>

          {/* Desktop Nav - Clean Text Links with Hover Animation */}
          <nav className="hidden xl:flex flex-1 items-center gap-6 h-full overflow-x-auto no-scrollbar scroll-smooth mask-edges">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => navigate(`/${item.id}`)}
                  className={`group relative flex items-center gap-1.5 py-6 text-xs font-bold transition-colors cursor-pointer ${isActive
                      ? 'text-teal-700'
                      : item.isSpecial
                        ? 'text-teal-600 hover:text-teal-800'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                  <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-teal-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span className="whitespace-nowrap tracking-wide">{item.label}</span>

                  {/* Subtle Badge */}
                  {item.badge && !isActive && (
                    <span className="absolute -top-3 -right-2 text-[8px] bg-teal-50 text-teal-700 px-1 py-0.5 rounded-sm font-extrabold border border-teal-100 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                      {item.badge}
                    </span>
                  )}

                  {/* Animated Bottom Border */}
                  <span className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-t-full transition-all duration-300 ${isActive ? 'bg-teal-600 scale-x-100' : 'bg-slate-300 scale-x-0 group-hover:scale-x-100'
                    }`} />
                </button>
              );
            })}
          </nav>

          {/* Right Actions: SOS Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">

            {/* Fast SOS Emergency Trigger Button */}
            <motion.button
              id="emergency-sos-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenEmergencyModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-500/20 hover:shadow-red-500/40 transition-all cursor-pointer shrink-0 border border-red-400/30"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <PhoneCall className="w-3.5 h-3.5 animate-pulse drop-shadow-md" />
              </div>
              <span className="hidden xs:inline sm:inline tracking-wide">SOS</span>
              <span className="tracking-wider">112</span>
            </motion.button>

            {/* Mobile quick menu trigger */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
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
              className="xl:hidden py-4 border-t border-slate-100 space-y-2 bg-white"
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
                      className={`flex items-center gap-2.5 p-3.5 rounded-2xl text-xs font-bold transition-all cursor-pointer shadow-xs ${isActive
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
