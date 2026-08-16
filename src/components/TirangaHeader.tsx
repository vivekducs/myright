import React, { useState } from 'react';
import { ShieldCheck, Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import flagSvg from '../data/flag.svg';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface TirangaHeaderProps {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

export const TirangaHeader: React.FC<TirangaHeaderProps> = ({ language, setLanguage }) => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const t = getT(language);
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];
  return (
    <div className="w-full bg-slate-900 text-slate-100 text-xs select-none border-b border-slate-800">
      {/* --- The Indian National Tricolour (Tiranga) Top Ribbon with Ashoka Chakra --- */}
      <div className="w-full h-1.5 flex relative overflow-hidden">
        {/* Saffron (Kesaria) */}
        <div className="w-1/3 bg-[#FF671F]" title="Saffron - Courage & Sacrifice" />
        {/* White (Shwet) with navy Chakra accent */}
        <div className="w-1/3 bg-[#FFFFFF] relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full border border-[#000080] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#000080]" />
          </div>
        </div>
        {/* Green (Hara) */}
        <div className="w-1/3 bg-[#046A38]" title="Green - Prosperity & Faith" />
      </div>

      {/* Official Government of India Top Banner */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-3">
        {/* Left: Ashok Stambha & National Portal Tag */}
        <div className="flex items-center gap-2.5">
          <img src={flagSvg} alt="Indian Flag" className="h-4 w-6 object-cover shadow-sm border border-slate-700/50 rounded-[1px]" />
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] sm:text-xs">
            <span className="text-[10px] text-teal-400 font-bold bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-800/60 hidden md:inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-teal-400" />
              Citizen Police Rights & Legal Literacy Portal
            </span>
          </div>
        </div>

        {/* Right: Accessibility & Language */}
        <div className="flex items-center gap-4">
          
          <div className="hidden lg:flex items-center gap-3 text-[10px] text-slate-300 font-medium">
            <a href="#main-content" className="hover:text-white transition-colors cursor-pointer outline-none focus:ring-1 focus:ring-teal-400 rounded-sm">Skip to main content</a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => document.documentElement.style.fontSize = '90%'} 
                className="hover:text-white transition-colors cursor-pointer"
                title="Decrease Text Size"
              >
                A-
              </button>
              <button 
                onClick={() => document.documentElement.style.fontSize = '100%'} 
                className="hover:text-white transition-colors cursor-pointer font-bold"
                title="Normal Text Size"
              >
                A
              </button>
              <button 
                onClick={() => document.documentElement.style.fontSize = '110%'} 
                className="hover:text-white transition-colors cursor-pointer"
                title="Increase Text Size"
              >
                A+
              </button>
            </div>
            <span className="text-slate-600">|</span>
          </div>

          {/* Language Selector in Top Header */}
          <div className="relative z-50 ml-auto sm:ml-0">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentLangObj.nativeName}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLangDropdownOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-56 max-h-[70vh] overflow-y-auto z-50 bg-white border border-slate-200 rounded-xl shadow-xl py-1"
                  >
                    <div className="px-3 py-2 text-[10px] font-black uppercase text-slate-400 border-b border-slate-100 bg-slate-50 sticky top-0">
                      Select Language / भाषा चुनें
                    </div>
                    {LANGUAGE_OPTIONS.map((lang) => {
                      const isSelected = language === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-teal-50 text-teal-700'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span>{lang.nativeName}</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-teal-600" />}
                        </button>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </div>
  );
};

