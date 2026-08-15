import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, PhoneCall, Globe, BookOpen, AlertOctagon, HelpCircle, MessageSquareText, FileBadge } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: 'en' | 'hi' | 'hinglish';
  setLanguage: (lang: 'en' | 'hi' | 'hinglish') => void;
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

  const navItems = [
    { id: 'situations', label: language === 'hi' ? 'तुरंत समाधान' : 'Situation Guide', icon: AlertOctagon },
    { id: 'rights', label: language === 'hi' ? 'कानूनी अधिकार' : 'Rights Library', icon: BookOpen },
    { id: 'dk-basu', label: language === 'hi' ? 'डी.के. बसु नियम' : 'D.K. Basu Rules', icon: Shield },
    { id: 'scripts', label: language === 'hi' ? 'क्या बोलें' : 'Verbal Scripts', icon: MessageSquareText },
    { id: 'ai-advisor', label: language === 'hi' ? 'AI कानूनी साथी' : 'AI Legal Advisor', icon: Shield },
    { id: 'pocket-pass', label: language === 'hi' ? 'डिजिटल पास' : 'Pocket Pass', icon: FileBadge },
    { id: 'quiz', label: language === 'hi' ? 'क्विज व मिथक' : 'Myths & Quiz', icon: HelpCircle },
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
                  India Rights
                </span>
              </div>
              <p className="text-xs text-[#458393] font-medium hidden sm:block">
                Citizen Legal & Police Rights Navigator
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#FFF3C8] p-1.5 rounded-2xl border border-[#E5CB90]/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
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
          <div className="flex items-center gap-3">
            
            {/* Language Selector */}
            <div className="relative flex items-center bg-[#E5CB90]/40 rounded-xl p-1 border border-[#E5CB90]">
              <Globe className="w-4 h-4 text-[#458393] ml-1.5 mr-1" />
              <select
                id="language-select"
                aria-label="Select Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'hinglish')}
                className="bg-transparent text-xs font-bold text-[#1A3841] pr-2 py-1 outline-hidden cursor-pointer"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="hinglish">Hinglish</option>
              </select>
            </div>

            {/* Fast SOS Emergency Trigger */}
            <motion.button
              id="emergency-sos-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenEmergencyModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all animate-pulse"
            >
              <PhoneCall className="w-4 h-4" />
              <span>SOS 112</span>
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#E5CB90]/40 border border-[#E5CB90] text-[#1A3841]"
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
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm font-semibold transition-all ${
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
