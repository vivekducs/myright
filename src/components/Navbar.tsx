import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, PhoneCall, Globe, BookOpen, AlertOctagon, HelpCircle, MessageSquareText, FileBadge, Check } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  onOpenEmergencyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  onOpenEmergencyModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = getT(language);
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const navItems = [
    { id: 'situations', label: t.navSituations, icon: AlertOctagon },
    { id: 'rights', label: t.navRights, icon: BookOpen },
    { id: 'dk-basu', label: t.navDKBasu, icon: Shield },
    { id: 'scripts', label: t.navScripts, icon: MessageSquareText },
    { id: 'ai-advisor', label: t.navAIAdvisor, icon: Shield },
    { id: 'pocket-pass', label: t.navPocketPass, icon: FileBadge },
    { id: 'quiz', label: t.navQuiz, icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FFF3C8]/90 border-b border-[#E5CB90]/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            id="brand-logo"
            onClick={() => setActiveTab('situations')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#34A99D] to-[#458393] flex items-center justify-center text-[#FFF3C8] shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-7 h-7 text-[#FFF3C8]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-[#1A3841]">
                  Nyaya<span className="text-[#34A99D]">Mitra</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#E5CB90]/70 text-[#1A3841] border border-[#E5CB90]">
                  India
                </span>
              </div>
              <p className="text-xs text-[#458393] font-medium hidden sm:block">
                {t.appSub}
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFF3C8] p-1.5 rounded-2xl border border-[#E5CB90]/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#458393] text-[#FFF3C8] shadow-sm'
                      : 'text-[#1A3841] hover:text-[#34A99D] hover:bg-[#E5CB90]/30'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#E5CB90]' : 'text-[#458393]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Language + SOS Button */}
          <div className="flex items-center gap-2.5">
            
            {/* Regional Language Custom Dropdown */}
            <div className="relative">
              <button
                id="language-select-trigger"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E5CB90]/40 hover:bg-[#E5CB90]/70 border border-[#E5CB90] text-xs font-extrabold text-[#1A3841] transition-all cursor-pointer shadow-xs"
              >
                <Globe className="w-4 h-4 text-[#458393]" />
                <span className="max-w-[80px] sm:max-w-[120px] truncate">{currentLangObj.nativeName}</span>
                <span className="text-[10px] text-[#458393] font-mono uppercase">({currentLangObj.code})</span>
              </button>

              {isLangDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto z-50 bg-[#FFF3C8] border-2 border-[#E5CB90] rounded-2xl shadow-xl p-2 space-y-1">
                    <div className="px-2 py-1.5 text-[11px] font-black uppercase text-[#458393] border-b border-[#E5CB90]/60">
                      🇮🇳 {t.languageSelectLabel}
                    </div>
                    {LANGUAGE_OPTIONS.map((lang) => {
                      const isSelected = language === lang.code;
                      return (
                        <button
                          key={lang.code}
                          id={`lang-option-${lang.code}`}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-bold transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#458393] text-white'
                              : 'hover:bg-[#E5CB90]/50 text-[#1A3841]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{lang.flag}</span>
                            <div>
                              <div className="leading-tight">{lang.nativeName}</div>
                              <div className={`text-[10px] ${isSelected ? 'text-[#FFF3C8]' : 'text-[#458393]'}`}>
                                {lang.name}
                              </div>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#FFF3C8]" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Fast SOS Emergency Trigger */}
            <motion.button
              id="emergency-sos-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenEmergencyModal}
              className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all animate-pulse cursor-pointer shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>SOS 112</span>
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#E5CB90]/40 border border-[#E5CB90] text-[#1A3841] cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-[#E5CB90]/70 space-y-2 bg-[#FFF3C8]"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 p-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#458393] text-[#FFF3C8]'
                        : 'bg-[#E5CB90]/30 text-[#1A3841]'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#34A99D]" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

      </div>
    </header>
  );
};
