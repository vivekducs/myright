import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  AlertOctagon, 
  BookOpen, 
  Shield, 
  MessageSquareText, 
  Bot, 
  FileBadge, 
  HelpCircle, 
  PhoneCall, 
  X, 
  Sparkles,
  Layers,
  HeartHandshake,
  Compass,
  Building2,
  Download,
  Globe,
  Check
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface MobileBottomBarProps {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  onOpenEmergencyModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  language,
  setLanguage,
  onOpenEmergencyModal,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.substring(1) || 'situations';
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const t = getT(language);
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const mainTabs = [
    { id: 'situations', label: t.navSituations.split(' ')[0], icon: Compass, badge: 'Hot' },
    { id: 'rights', label: t.navRights.split(' ')[0], icon: BookOpen },
    // Center is SOS
    { id: 'dk-basu', label: 'DK Basu', icon: Shield },
    { id: 'more', label: 'Tools', icon: Layers, isMore: true },
  ];

  const moreTools = [
    { id: 'guidebook', label: t.navGuidebook || 'Digital Guidebook', desc: '11-Chapter official statutory e-book', icon: BookOpen, color: 'from-[#34A99D] to-[#1A3841]' },
    { id: 'departments', label: t.navDepartments || 'Govt Portals', desc: 'Verified official gov portals & helplines', icon: Building2, color: 'from-[#34A99D] to-[#458393]' },
    { id: 'scripts', label: t.navScripts, desc: 'Exact phrases to speak to officers', icon: MessageSquareText, color: 'from-[#458393] to-[#1A3841]' },
    { id: 'ai-advisor', label: t.navAIAdvisor, desc: 'AI Copilot under BNSS & CrPC', icon: Bot, color: 'from-[#E5CB90] to-[#34A99D]' },
    { id: 'pocket-pass', label: t.navPocketPass, desc: 'Printable citizen legal ID pass', icon: FileBadge, color: 'from-[#34A99D] to-[#1A3841]' },
    { id: 'quiz', label: t.navQuiz, desc: 'Test legal knowledge & bust myths', icon: HelpCircle, color: 'from-[#458393] to-[#34A99D]' },
  ];

  const handleTabClick = (tabId: string) => {
    if (tabId === 'more') {
      setIsMoreMenuOpen(!isMoreMenuOpen);
    } else {
      navigate(`/${tabId}`);
      setIsMoreMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectMoreTool = (toolId: string) => {
    navigate(`/${toolId}`);
    setIsMoreMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* App-like "More Tools" Bottom Sheet Drawer */}
      <AnimatePresence>
        {isMoreMenuOpen && (
          <div className="fixed inset-0 z-50 sm:hidden flex flex-col justify-end bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMoreMenuOpen(false)}
              className="absolute inset-0"
            />
            
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 bg-[#1A3841] text-[#FFF3C8] rounded-t-[36px] border-t-2 border-[#E5CB90]/40 p-6 pb-28 shadow-2xl space-y-5"
            >
              {/* Drawer Handle */}
              <div className="w-12 h-1.5 rounded-full bg-[#E5CB90]/40 mx-auto" />

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-black text-lg text-white flex items-center gap-2">
                    <span>MyRight Mobile Hub</span>
                  </h3>
                  <div className="text-[10px] text-[#E5CB90]/80 mt-1 leading-tight">
                    <span className="bg-[#E5CB90]/20 text-[#E5CB90] px-1.5 py-0.5 rounded mr-1">v2.5 Live PWA</span>
                    Official Citizen Legal Literacy Platform &bull; Constitution of India &amp; BNSS 2024–2026
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-[#34A99D] font-bold mt-1.5 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Offline Cached</span>
                    <span className="flex items-center gap-1"><Check className="w-3 h-3" /> 100% Client Privacy</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMoreMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FFF3C8] hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language & Install Actions */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-bold text-white transition-all"
                  >
                    <Globe className="w-4 h-4 text-[#E5CB90]" />
                    <span>{currentLangObj.nativeName}</span>
                  </button>
                  
                  <AnimatePresence>
                    {isLangDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full mb-2 left-0 w-full max-h-48 overflow-y-auto bg-white rounded-2xl shadow-xl p-1 z-50 border border-slate-200"
                      >
                        {LANGUAGE_OPTIONS.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsLangDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 ${
                              language === lang.code ? 'bg-teal-50 text-teal-700' : 'text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <span>{lang.flag}</span>
                            <span>{lang.nativeName}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[#E5CB90] text-[#1A3841] text-xs font-black shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Install App</span>
                </button>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 gap-3">
                {moreTools.map((tool) => {
                  const Icon = tool.icon;
                  const isActive = activeTab === tool.id;
                  return (
                    <motion.button
                      key={tool.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSelectMoreTool(tool.id)}
                      className={`p-4 rounded-3xl text-left border flex flex-col justify-between transition-all ${
                        isActive
                          ? 'bg-[#34A99D] text-white border-[#FFF3C8] shadow-lg'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-[#FFF3C8]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-2 shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-extrabold text-sm block text-white leading-tight">
                          {tool.label}
                        </span>
                        <span className="text-[10px] text-[#E5CB90]/70 line-clamp-2 mt-0.5">
                          {tool.desc}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Quick Legal Aid Card in Drawer */}
              <div className="p-3.5 rounded-3xl bg-[#34A99D]/20 border border-[#34A99D]/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#34A99D] flex items-center justify-center text-white shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-white block">NALSA Free Legal Aid</span>
                    <span className="text-[10px] text-[#E5CB90]">Dial 15100 for 24x7 Advocate Support</span>
                  </div>
                </div>
                <a
                  href="tel:15100"
                  className="px-3 py-1.5 rounded-full bg-[#E5CB90] text-[#1A3841] text-xs font-black shadow-xs shrink-0"
                >
                  Call
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Bottom App Navigation Dock on Mobile */}
      <nav className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
        <div className="bg-[#1A3841]/95 backdrop-blur-xl border-2 border-[#E5CB90]/40 rounded-full shadow-2xl px-2 py-1.5 flex items-center justify-between relative">
          
          {/* Situations Tab */}
          <button
            id="mobile-nav-situations"
            onClick={() => handleTabClick('situations')}
            className={`flex-1 py-1.5 flex flex-col items-center justify-center gap-0.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'situations' ? 'text-[#34A99D]' : 'text-[#FFF3C8]/70 hover:text-white'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              activeTab === 'situations' ? 'bg-[#34A99D]/20 ring-2 ring-[#34A99D]' : ''
            }`}>
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight">{t.navSituations.split(' ')[0]}</span>
          </button>

          {/* Rights Compendium Tab */}
          <button
            id="mobile-nav-rights"
            onClick={() => handleTabClick('rights')}
            className={`flex-1 py-1.5 flex flex-col items-center justify-center gap-0.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'rights' ? 'text-[#34A99D]' : 'text-[#FFF3C8]/70 hover:text-white'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              activeTab === 'rights' ? 'bg-[#34A99D]/20 ring-2 ring-[#34A99D]' : ''
            }`}>
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight">{t.navRights.split(' ')[0]}</span>
          </button>

          {/* Center Elevated Circular SOS Button */}
          <div className="relative -top-5 px-1">
            <motion.button
              id="mobile-center-sos-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onOpenEmergencyModal}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-red-600 text-white shadow-xl shadow-red-600/50 flex flex-col items-center justify-center border-3 border-[#FFF3C8] cursor-pointer relative group"
            >
              <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30" />
              <PhoneCall className="w-6 h-6 animate-pulse" />
              <span className="text-[9px] font-black tracking-tighter uppercase leading-none">SOS</span>
            </motion.button>
          </div>

          {/* D.K. Basu Tab */}
          <button
            id="mobile-nav-dk-basu"
            onClick={() => handleTabClick('dk-basu')}
            className={`flex-1 py-1.5 flex flex-col items-center justify-center gap-0.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'dk-basu' ? 'text-[#34A99D]' : 'text-[#FFF3C8]/70 hover:text-white'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              activeTab === 'dk-basu' ? 'bg-[#34A99D]/20 ring-2 ring-[#34A99D]' : ''
            }`}>
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight">D.K. Basu</span>
          </button>

          {/* More Tools Drawer Tab */}
          <button
            id="mobile-nav-more"
            onClick={() => handleTabClick('more')}
            className={`flex-1 py-1.5 flex flex-col items-center justify-center gap-0.5 rounded-full transition-all cursor-pointer ${
              isMoreMenuOpen || ['scripts', 'ai-advisor', 'pocket-pass', 'quiz'].includes(activeTab)
                ? 'text-[#E5CB90]'
                : 'text-[#FFF3C8]/70 hover:text-white'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isMoreMenuOpen || ['scripts', 'ai-advisor', 'pocket-pass', 'quiz'].includes(activeTab)
                ? 'bg-[#E5CB90]/20 ring-2 ring-[#E5CB90]'
                : ''
            }`}>
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight">Tools</span>
          </button>

        </div>
      </nav>
    </>
  );
};
