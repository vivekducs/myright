import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Search,
  Scale,
  Shield,
  ShieldAlert,
  Lock,
  HardDrive,
  FileText,
  AlertOctagon,
  PhoneCall,
  ExternalLink,
  Volume2,
  VolumeX,
  Printer,
  Sparkles,
  Bookmark,
  CheckCircle2,
  MessageSquare,
  Building2,
  Maximize2,
  Minimize2,
  Car,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';
import { GUIDEBOOK_PAGES } from '../data/guidebook';
import { GuidebookPage, SupportedLanguage } from '../types';
import { getT } from '../data/translations';
import { AshokStambha } from './AshokStambha';

interface DigitalGuidebookProps {
  language: SupportedLanguage;
  initialPage?: number;
  onOpenSituation?: (id: string) => void;
}

const bookVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    rotateY: direction > 0 ? 5 : -5,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      rotateY: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    rotateY: direction < 0 ? 5 : -5,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

export const DigitalGuidebook: React.FC<DigitalGuidebookProps> = ({
  language,
  initialPage = 1,
  onOpenSituation,
}) => {
  const t = getT(language);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [direction, setDirection] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [copiedScript, setCopiedScript] = useState<boolean>(false);

  const totalPages = GUIDEBOOK_PAGES.length;

  const currentBookPage: GuidebookPage =
    GUIDEBOOK_PAGES.find((p) => p.page_number === currentPage) || GUIDEBOOK_PAGES[0];

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
    }
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
    }
  }, [currentPage, totalPages]);

  const handleJumpToPage = (pageNum: number) => {
    if (pageNum === currentPage) return;
    setDirection(pageNum > currentPage ? 1 : -1);
    setCurrentPage(pageNum);
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrevPage();
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevPage, handleNextPage]);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handlePrintPage = () => {
    window.print();
  };

  const handleCopyScript = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const getChapterIcon = (iconName: string) => {
    switch (iconName) {
      case 'scale': return <Scale className="w-5 h-5" />;
      case 'shield-alert': return <ShieldAlert className="w-5 h-5" />;
      case 'lock': return <Lock className="w-5 h-5" />;
      case 'hard-drive': return <HardDrive className="w-5 h-5" />;
      case 'file-text': return <FileText className="w-5 h-5" />;
      case 'alert-octagon': return <AlertOctagon className="w-5 h-5" />;
      case 'car': return <Car className="w-5 h-5" />;
      case 'phone-call': return <PhoneCall className="w-5 h-5" />;
      default: return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <div
      id="digital-guidebook-root"
      className={`w-full max-w-7xl mx-auto space-y-6 ${
        isFullscreen ? 'fixed inset-0 z-50 bg-[#e6ddd0] overflow-y-auto p-4 sm:p-8' : ''
      }`}
    >
      {/* 1. Header Toolbar */}
      <div className="bg-[#1A3841] text-[#FFF3C8] rounded-t-xl rounded-b-sm p-4 sm:p-6 border-b-4 border-[#8B4513] shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-[#FFF3C8]/10 border border-[#FFF3C8]/20 shrink-0">
            <BookOpen className="w-6 h-6 text-[#E5CB90]" />
          </div>
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
              The Citizen's Legal Hand-Book
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#E5CB90]/90 italic">
              Constitutional Rights & BNSS 2023 Procedures
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSpeak(`${currentBookPage.title}. ${currentBookPage.situation_trigger}. Rights: ${currentBookPage.your_rights_summary.join('. ')}. Action: ${currentBookPage.immediate_action_steps.join('. ')}`)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold font-serif border ${
              isSpeaking ? 'bg-red-900/50 border-red-500/50 text-red-200' : 'bg-transparent border-[#E5CB90]/40 text-[#E5CB90] hover:bg-[#E5CB90]/10'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span>{isSpeaking ? 'Stop Reading' : 'Read Aloud'}</span>
          </button>
          <button
            onClick={handlePrintPage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-transparent border border-[#E5CB90]/40 hover:bg-[#E5CB90]/10 text-[#E5CB90] text-xs font-bold font-serif"
          >
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-transparent border border-[#E5CB90]/40 hover:bg-[#E5CB90]/10 text-[#E5CB90] text-xs font-bold font-serif"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 2. The Book Interface */}
      <div className="relative min-h-[700px] perspective-[2000px]">
        {/* Previous/Next floating buttons */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white border border-slate-200 shadow-xl transition-all ${
            currentPage === 1 ? 'opacity-0' : 'opacity-100 hover:scale-110 cursor-pointer text-slate-800'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white border border-slate-200 shadow-xl transition-all ${
            currentPage === totalPages ? 'opacity-0' : 'opacity-100 hover:scale-110 cursor-pointer text-slate-800'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={bookVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-r-xl rounded-l-xl bg-[#fdfbf7] relative"
          >
            {/* Book Cover Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-xl" style={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
              opacity: 0.6
            }} />
            
            {/* Center Spine (Visible only on desktop two-page spread) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-16 -ml-8 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none z-10" />
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/10 pointer-events-none z-10" />

            {/* --- LEFT PAGE (Page 1 of spread) --- */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-black/10 relative">
              {/* Page Number (Left) */}
              <div className="absolute top-6 left-8 text-xs font-serif text-slate-400 font-bold">
                {currentPage * 2 - 1}
              </div>

              {/* Chapter Header */}
              <div className="mb-8 pt-4">
                <span className="font-serif text-sm font-black text-rose-900 tracking-[0.2em] uppercase border-b border-rose-900/30 pb-1 mb-4 inline-block">
                  Chapter {currentBookPage.page_number}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
                  {currentBookPage.title}
                </h1>
                <div className="flex flex-wrap gap-2 mt-4">
                  {currentBookPage.statutory_provisions.map((sp, idx) => (
                    <a
                      key={idx}
                      href={sp.official_source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100/80 hover:bg-rose-50 text-slate-700 font-serif text-[11px] border border-slate-300 transition-colors"
                    >
                      <Scale className="w-3 h-3 text-rose-800" />
                      <span>{sp.code}: {sp.section_or_article}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* The Situation */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-700" />
                  The Situation
                </h3>
                <p className="font-serif text-slate-700 leading-relaxed text-sm sm:text-base first-letter:text-4xl first-letter:font-bold first-letter:text-rose-900 first-letter:mr-1 first-letter:float-left">
                  {currentBookPage.situation_trigger}
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-700" />
                  Your Legal Rights
                </h3>
                <ul className="space-y-3">
                  {currentBookPage.your_rights_summary.map((right, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-serif text-slate-700 text-sm sm:text-base leading-relaxed">
                      <span className="text-emerald-700 mt-1">❧</span>
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* --- RIGHT PAGE (Page 2 of spread) --- */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 lg:p-12 relative">
               {/* Page Number (Right) */}
               <div className="absolute top-6 right-8 text-xs font-serif text-slate-400 font-bold hidden md:block">
                {currentPage * 2}
              </div>

              {/* Immediate Actions */}
              <div className="mb-8 md:pt-4">
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <AlertOctagon className="w-5 h-5 text-blue-700" />
                  Immediate Actions (What To Do)
                </h3>
                <ol className="list-decimal list-outside ml-5 space-y-3 font-serif text-slate-700 text-sm sm:text-base leading-relaxed">
                  {currentBookPage.immediate_action_steps.map((action, idx) => (
                    <li key={idx} className="pl-1 text-slate-700">{action}</li>
                  ))}
                </ol>
              </div>

              {/* What to say script */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-lg font-bold text-slate-800 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-amber-700" />
                    Exact Words To Say
                  </h3>
                  <button
                    onClick={() => handleCopyScript(currentBookPage.what_to_say_script)}
                    className="p-1.5 hover:bg-slate-200 rounded transition-colors text-slate-500"
                    title="Copy Script"
                  >
                    {copiedScript ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="bg-[#f0e8d5] p-5 rounded border border-[#dcd1ba] shadow-inner">
                  <p className="font-serif text-slate-800 font-bold italic leading-relaxed text-sm sm:text-base">
                    "{currentBookPage.what_to_say_script}"
                  </p>
                </div>
              </div>

              {/* Remedy & Complaints */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-slate-700" />
                  Where To Complain
                </h3>
                <p className="font-serif text-slate-700 leading-relaxed text-sm sm:text-base p-4 bg-slate-100/50 border border-slate-200 rounded">
                  {currentBookPage.remedy_and_complaint_forum}
                </p>
              </div>

              {/* Landmark Judgments */}
              {currentBookPage.landmark_judgments && currentBookPage.landmark_judgments.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-300">
                  <h4 className="font-serif text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Binding Supreme Court Precedents
                  </h4>
                  <ul className="space-y-2">
                    {currentBookPage.landmark_judgments.map((judgment, idx) => (
                      <li key={idx} className="font-serif text-xs text-slate-600">
                        ⚖ {judgment}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Table of Contents / Index (Bottom) */}
      <div className="bg-[#fdfbf7] rounded-xl p-6 border-2 border-[#e6ddd0] shadow-sm">
        <h3 className="font-serif text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
          Index of Chapters
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
          {GUIDEBOOK_PAGES.map((page) => (
            <button
              key={page.page_number}
              onClick={() => handleJumpToPage(page.page_number)}
              className={`flex items-baseline justify-between text-left group cursor-pointer ${
                currentPage === page.page_number ? 'text-rose-800 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="font-serif text-sm truncate mr-2 group-hover:underline">
                {page.page_number}. {page.title}
              </span>
              <span className="font-serif text-xs text-slate-400 group-hover:text-slate-600">
                Pg. {page.page_number * 2 - 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
