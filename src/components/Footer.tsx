import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Scale, 
  PhoneCall, 
  ExternalLink, 
  Smartphone, 
  Download, 
  CheckCircle2, 
  ArrowUp, 
  HeartHandshake, 
  BookOpen, 
  Lock, 
  Sparkles,
  Info,
  Radio,
  FileCheck
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { getT } from '../data/translations';
import { EMERGENCY_CONTACTS } from '../data/legalData';

interface FooterProps {
  language: SupportedLanguage;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const t = getT(language);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookmark = () => {
    setIsBookmarked(true);
    setTimeout(() => setIsBookmarked(false), 2500);
  };

  return (
    <footer className="bg-[#1A3841] text-[#FFF3C8] mt-16 pt-12 pb-28 sm:pb-12 border-t-2 border-[#E5CB90]/40 rounded-t-[40px] shadow-2xl relative overflow-hidden">
      
      {/* Subtle Circular Background Glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#34A99D]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#E5CB90]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Mobile-First App Info Banner Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 border border-[#E5CB90]/30 shadow-xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* App Profile */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#34A99D] via-[#458393] to-[#E5CB90] p-0.5 shadow-xl flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#1A3841] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#34A99D]" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    My<span className="text-[#34A99D]">Right</span> Mobile Hub
                  </h3>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#34A99D]/20 text-[#34A99D] border border-[#34A99D]">
                    v2.5 Live PWA
                  </span>
                </div>
                <p className="text-xs text-[#E5CB90]/80 mt-1 max-w-xl font-medium">
                  Official Citizen Legal Literacy Platform • Constitution of India & Bharatiya Nagarik Suraksha Sanhita (BNSS 2024–2026)
                </p>
              </div>
            </div>

            {/* App Status Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FFF3C8]">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Offline Cached</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FFF3C8]">
                <Lock className="w-3.5 h-3.5 text-[#E5CB90]" />
                <span>100% Client Privacy</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBookmark}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#34A99D] to-[#458393] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>{isBookmarked ? '✓ Installed / Saved' : 'Add App Icon'}</span>
              </motion.button>
            </div>

          </div>
        </div>

        {/* 24x7 Emergency Speed-Dial Grid (Circular App Style) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
              <h4 className="text-xs font-black uppercase tracking-wider text-[#E5CB90]">
                24x7 Citizen Emergency Speed-Dial (One-Tap Call)
              </h4>
            </div>
            <span className="text-[11px] text-[#FFF3C8]/60 hidden sm:inline">
              National Emergency Support Services
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {EMERGENCY_CONTACTS.map((item) => (
              <div
                key={item.number}
                className="p-3.5 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#34A99D] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#E5CB90] uppercase truncate">
                    {item.name.split(' ')[0]}
                  </span>
                  <button
                    onClick={() => handleCopy(item.number)}
                    title="Copy number"
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#FFF3C8]/70 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    {copiedNumber === item.number ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <span className="text-[9px] font-bold">CP</span>
                    )}
                  </button>
                </div>

                <div className="my-1">
                  <span className="text-xl font-black text-white group-hover:text-[#E5CB90] transition-colors block">
                    {item.number}
                  </span>
                  <span className="text-[10px] text-[#FFF3C8]/70 line-clamp-1">
                    {item.description}
                  </span>
                </div>

                <a
                  href={`tel:${item.number}`}
                  className="mt-2 w-full py-1.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-[11px] font-black flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Dial</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Columns: Mission, Citations, and Legal Aid Directory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-white/10">
          
          {/* Mission & Constitutional Purpose */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E5CB90] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#34A99D]" />
              <span>Constitutional Safeguards</span>
            </h4>
            <p className="text-xs text-[#FFF3C8]/80 leading-relaxed font-medium">
              Every citizen interacting with police in the Republic of India is shielded by Part III of the Constitution. Fundamental rights to life, personal liberty (Art 21), and protection against arbitrary arrest (Art 22) cannot be suspended.
            </p>
          </div>

          {/* Statutory Citations */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E5CB90] flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#34A99D]" />
              <span>Supreme Court Benchmarks</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FFF3C8]/80 font-medium">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A99D]" />
                <span>D.K. Basu v. State of West Bengal (1997)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A99D]" />
                <span>Lalita Kumari v. Govt of UP (2014) - Zero FIR</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A99D]" />
                <span>K.S. Puttaswamy v. UOI (2017) - Phone Privacy</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A99D]" />
                <span>Arnesh Kumar v. State of Bihar (2014)</span>
              </li>
            </ul>
          </div>

          {/* Legal Aid & Free Counsel DLSA */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E5CB90] flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#34A99D]" />
              <span>Free Legal Aid (Article 39A)</span>
            </h4>
            <p className="text-xs text-[#FFF3C8]/80 leading-relaxed font-medium">
              Citizens incapable of appointing a private advocate have a statutory right to free representation from the National Legal Services Authority (NALSA) and District Legal Services Authority (DLSA).
            </p>
            <div className="pt-1">
              <a
                href="https://nalsa.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#34A99D]/20 hover:bg-[#34A99D]/30 border border-[#34A99D] text-xs font-bold text-[#FFF3C8] transition-colors"
              >
                <span>Visit NALSA Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-3xl bg-white/5 border border-white/10 text-[11px] text-[#FFF3C8]/70 leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-[#E5CB90] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#E5CB90]">Legal Education Disclaimer:</p>
            <p>
              MyRight is an open civic legal awareness tool created to democratize access to constitutional rights. It does not replace professional legal counsel from an enrolled advocate. In emergency custody situations, contact DLSA / NALSA Helpline 15100 immediately.
            </p>
          </div>
        </div>

        {/* Bottom Bar with Floating Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5CB90]/70 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} MyRight India • Civic Legal Literacy Initiative</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#FFF3C8]/60">
              Sand & Jade Circular Theme
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#34A99D] text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};
