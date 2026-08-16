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
import { AshokStambha } from './AshokStambha';

interface DigitalGuidebookProps {
  language: SupportedLanguage;
  initialPage?: number;
  onOpenSituation?: (id: string) => void;
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction > 0 ? 15 : -15,
    scale: 0.96,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
      rotateY: { duration: 0.3 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction < 0 ? 15 : -15,
    scale: 0.96,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

export const DigitalGuidebook: React.FC<DigitalGuidebookProps> = ({
  language,
  initialPage = 1,
  onOpenSituation,
}) => {
  // 1-indexed page number matching page_number in dataset
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

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input field
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

  // Clean up speech on unmount
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
      case 'scale':
        return <Scale className="w-5 h-5" />;
      case 'shield-alert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'lock':
        return <Lock className="w-5 h-5" />;
      case 'hard-drive':
        return <HardDrive className="w-5 h-5" />;
      case 'file-text':
        return <FileText className="w-5 h-5" />;
      case 'alert-octagon':
        return <AlertOctagon className="w-5 h-5" />;
      case 'car':
        return <Car className="w-5 h-5" />;
      case 'phone-call':
        return <PhoneCall className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  const filteredPages = GUIDEBOOK_PAGES.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.chapter.toLowerCase().includes(q) ||
      p.situation_trigger.toLowerCase().includes(q) ||
      p.your_rights_summary.some((r) => r.toLowerCase().includes(q)) ||
      p.statutory_provisions.some((sp) =>
        `${sp.code} ${sp.section_or_article} ${sp.official_title}`.toLowerCase().includes(q)
      )
    );
  });

  return (
    <div
      id="digital-guidebook-root"
      className={`w-full max-w-6xl mx-auto space-y-6 ${
        isFullscreen ? 'fixed inset-0 z-50 bg-[#FFF3C8] overflow-y-auto p-4 sm:p-8' : ''
      }`}
    >
      {/* ========================================================================= */}
      {/* 1. OFFICIAL BOOK HEADER & TOP CONTROLS */}
      {/* ========================================================================= */}
      <div className="bg-[#1A3841] text-[#FFF3C8] rounded-3xl p-5 sm:p-7 border-2 border-[#E5CB90]/60 shadow-xl relative overflow-hidden">
        {/* National Flag Tricolour Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="w-1/3 bg-[#FF671F]" />
          <div className="w-1/3 bg-[#FFFFFF]" />
          <div className="w-1/3 bg-[#046A38]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-1">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-2.5 rounded-2xl bg-white/10 border border-[#E5CB90]/40 shrink-0 shadow-inner">
              <AshokStambha size={44} showText={false} goldTone={true} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#E5CB90] text-[#1A3841]">
                  Official Citizen Digital Handbook
                </span>
                <span className="text-[10px] text-[#34A99D] font-bold hidden sm:inline">
                  • BNSS 2023 / BNS 2023 / Constitution of India
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                Indian Citizen Police Rights & Legal Guidebook
              </h2>
              <p className="text-xs sm:text-sm text-[#E5CB90]/90 font-medium mt-1">
                A 5-chapter interactive slide manual: <span className="text-white font-bold">Situation → Your Rights → What To Do → Where To Complain</span>
              </p>
            </div>
          </div>

          {/* Quick Action Controls */}
          <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-center">
            <button
              id="guidebook-listen-btn"
              onClick={() =>
                handleSpeak(
                  `${currentBookPage.title}. ${currentBookPage.situation_trigger}. Rights: ${currentBookPage.your_rights_summary.join(
                    '. '
                  )}. Action: ${currentBookPage.immediate_action_steps.join('. ')}`
                )
              }
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs ${
                isSpeaking
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-[#34A99D] hover:bg-[#458393] text-white'
              }`}
              title="Listen to this page (Audio Voiceover)"
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isSpeaking ? 'Stop Audio' : 'Listen Page'}</span>
            </button>

            <button
              id="guidebook-print-btn"
              onClick={handlePrintPage}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF3C8] text-xs font-bold border border-white/20 transition-all cursor-pointer shadow-xs"
              title="Print this page or export as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              id="guidebook-fullscreen-btn"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF3C8] text-xs font-bold border border-white/20 transition-all cursor-pointer shadow-xs"
              title="Toggle Fullscreen Book Reader"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Carousel Slide Track & Quick Search */}
        <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search within Guidebook */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#1A3841]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search BNS, BNSS, arrest, FIR, search..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FFF3C8] text-[#1A3841] text-xs font-medium placeholder-[#1A3841]/50 focus:outline-none focus:ring-2 focus:ring-[#34A99D] shadow-inner"
            />
          </div>

          {/* Carousel Navigation Toolbar */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <button
              id="guidebook-top-prev-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                currentPage === 1
                  ? 'opacity-30 border-white/10 text-white/30 cursor-not-allowed'
                  : 'bg-white/10 hover:bg-[#34A99D] text-white border-white/30'
              }`}
              title="Previous Page (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs text-[#E5CB90] font-black px-2">
              Slide {currentPage} of {totalPages}
            </span>

            <button
              id="guidebook-top-next-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                currentPage === totalPages
                  ? 'opacity-30 border-white/10 text-white/30 cursor-not-allowed'
                  : 'bg-white/10 hover:bg-[#34A99D] text-white border-white/30'
              }`}
              title="Next Page (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-Slide Carousel Tab Strip */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10 overflow-x-auto pb-1 scrollbar-none">
          {GUIDEBOOK_PAGES.map((page) => {
            const isCurrent = page.page_number === currentPage;
            return (
              <button
                key={page.page_number}
                id={`guidebook-tab-${page.page_number}`}
                onClick={() => handleJumpToPage(page.page_number)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer shrink-0 ${
                  isCurrent
                    ? 'bg-[#E5CB90] text-[#1A3841] shadow-md scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white/80'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-black ${
                    isCurrent ? 'bg-[#1A3841] text-[#E5CB90]' : 'bg-white/20 text-white'
                  }`}
                >
                  {page.page_number}
                </span>
                <span className="truncate max-w-[140px] sm:max-w-[200px]">{page.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STATE-MANAGED FLIPBOOK CAROUSEL SLIDE CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden">
        {/* Large Floating Carousel Navigation Buttons on Left & Right for Desktop */}
        <button
          id="guidebook-floating-prev"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center shadow-xl border-2 transition-all cursor-pointer ${
            currentPage === 1
              ? 'opacity-0 pointer-events-none'
              : 'bg-[#1A3841] hover:bg-[#34A99D] text-[#FFF3C8] hover:text-white border-[#E5CB90] hover:scale-110 active:scale-95'
          }`}
          title="Previous Page [←]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          id="guidebook-floating-next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
          className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center shadow-xl border-2 transition-all cursor-pointer ${
            currentPage === totalPages
              ? 'opacity-0 pointer-events-none'
              : 'bg-[#34A99D] hover:bg-[#1A3841] text-white hover:text-[#FFF3C8] border-[#E5CB90] hover:scale-110 active:scale-95'
          }`}
          title="Next Page [→]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Slide Stage */}
        <div className="relative min-h-[640px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-3xl border-3 border-[#E5CB90] shadow-2xl overflow-hidden"
            >
              {/* Book Spine / Binding Texture Effect */}
              <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-[#1A3841]/40 via-[#1A3841]/10 to-transparent z-10 pointer-events-none" />

              {/* Slide Top Header Bar */}
              <div className="bg-[#1A3841] text-[#FFF3C8] px-6 sm:px-8 py-3.5 flex items-center justify-between border-b-2 border-[#E5CB90]/40">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#34A99D] text-white font-black text-xs flex items-center justify-center shadow-xs">
                    {currentBookPage.page_number}
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#E5CB90] block">
                      {currentBookPage.chapter}
                    </span>
                    <span className="text-xs font-bold text-white/90 truncate max-w-xs sm:max-w-md block">
                      {currentBookPage.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-white/15 text-[#E5CB90] border border-white/20">
                    Page {currentPage} / {totalPages}
                  </span>
                </div>
              </div>

              {/* Slide Body Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Header Title & Statutory Badges */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[#E5CB90]/40">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#34A99D] to-[#1A3841] text-white flex items-center justify-center shrink-0 shadow-md">
                      {getChapterIcon(currentBookPage.icon)}
                    </div>
                    <div>
                      <h1 className="font-display text-2xl sm:text-3xl font-black text-[#1A3841] tracking-tight">
                        {currentBookPage.title}
                      </h1>
                      <p className="text-xs sm:text-sm text-[#458393] font-bold mt-0.5">
                        Verified under statutory provisions of the Republic of India
                      </p>
                    </div>
                  </div>

                  {/* Statutory Provisions Quick Badges */}
                  <div className="flex flex-wrap gap-2 self-start md:self-center">
                    {currentBookPage.statutory_provisions.map((sp, idx) => (
                      <a
                        key={idx}
                        href={sp.official_source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3841]/5 hover:bg-[#34A99D]/15 text-[#1A3841] hover:text-[#34A99D] border border-[#1A3841]/20 text-[11px] font-bold transition-all cursor-pointer"
                        title={`${sp.official_title} - Click to verify on India Code`}
                      >
                        <Scale className="w-3 h-3 text-[#34A99D]" />
                        <span>
                          {sp.code}: {sp.section_or_article}
                        </span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* 4-Step Action Framework Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* STEP 1: The Trigger Situation */}
                  <div className="p-6 rounded-3xl bg-amber-50/70 border-2 border-amber-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-black flex items-center justify-center">
                          1
                        </span>
                        <h3 className="text-xs font-black uppercase tracking-wider text-amber-900">
                          Step 1: The Trigger Situation
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-[#1A3841] leading-relaxed">
                        "{currentBookPage.situation_trigger}"
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center gap-2 text-xs text-amber-800 font-bold">
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Immediate high-stress legal encounter</span>
                    </div>
                  </div>

                  {/* STEP 2: Guaranteed Rights */}
                  <div className="p-6 rounded-3xl bg-teal-50/70 border-2 border-teal-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full bg-[#34A99D] text-white text-xs font-black flex items-center justify-center">
                          2
                        </span>
                        <h3 className="text-xs font-black uppercase tracking-wider text-[#1A3841]">
                          Step 2: Your Guaranteed Rights
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {currentBookPage.your_rights_summary.map((right, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#1A3841]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#34A99D] shrink-0 mt-0.5" />
                            <span>{right}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-teal-200/60 flex items-center gap-2 text-xs text-[#458393] font-bold">
                      <Shield className="w-4 h-4 text-[#34A99D] shrink-0" />
                      <span>Protected by Constitution & BNSS 2023</span>
                    </div>
                  </div>

                  {/* STEP 3: What To Do Under 30 Seconds */}
                  <div className="p-6 rounded-3xl bg-blue-50/70 border-2 border-blue-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">
                          3
                        </span>
                        <h3 className="text-xs font-black uppercase tracking-wider text-blue-900">
                          Step 3: What To Do Now (Under 30s)
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {currentBookPage.immediate_action_steps.map((action, aIdx) => (
                          <li
                            key={aIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#1A3841]"
                          >
                            <span className="w-4 h-4 rounded-full bg-blue-200 text-blue-900 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                              {aIdx + 1}
                            </span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center gap-2 text-xs text-blue-800 font-bold">
                      <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Take proactive, legally sound steps</span>
                    </div>
                  </div>

                  {/* STEP 4: Where To Complain */}
                  <div className="p-6 rounded-3xl bg-emerald-50/70 border-2 border-emerald-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs font-black flex items-center justify-center">
                          4
                        </span>
                        <h3 className="text-xs font-black uppercase tracking-wider text-emerald-900">
                          Step 4: Where To Complain If Violated
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-[#1A3841] mb-3">
                        Official Grievance Authority:
                      </p>
                      <div className="p-3.5 rounded-2xl bg-white border border-emerald-300 text-xs sm:text-sm font-bold text-emerald-950 shadow-xs">
                        {currentBookPage.remedy_and_complaint_forum}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-emerald-800 font-bold">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        National Escalation Channels
                      </span>
                      <span className="text-[11px] bg-emerald-200/80 px-2 py-0.5 rounded-md">
                        Helpline 15100 / 112
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verbal What To Say Script */}
                <div className="p-6 rounded-3xl bg-[#1A3841] text-[#FFF3C8] border-2 border-[#E5CB90] shadow-md">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-5 h-5 text-[#34A99D]" />
                      <span className="text-xs font-black uppercase tracking-wider text-[#E5CB90]">
                        Verbal Script • What To Say to the Officer (Word-for-Word)
                      </span>
                    </div>
                    <button
                      id="guidebook-copy-script-btn"
                      onClick={() => handleCopyScript(currentBookPage.what_to_say_script)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
                    >
                      {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedScript ? 'Copied!' : 'Copy Script'}</span>
                    </button>
                  </div>
                  <blockquote className="text-sm sm:text-base font-semibold italic text-white/95 leading-relaxed bg-black/20 p-4 rounded-2xl border border-white/10">
                    "{currentBookPage.what_to_say_script}"
                  </blockquote>
                </div>

                {/* Supreme Court Landmark Judgments Banner */}
                {currentBookPage.landmark_judgments && currentBookPage.landmark_judgments.length > 0 && (
                  <div className="p-5 rounded-3xl bg-[#FFF3C8] border-2 border-[#E5CB90] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E5CB90] text-[#1A3841] flex items-center justify-center shrink-0 shadow-xs">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#1A3841] block">
                        Supreme Court of India • Landmark Binding Precedents
                      </span>
                      <div className="space-y-1.5 mt-1.5">
                        {currentBookPage.landmark_judgments.map((judgment, jIdx) => (
                          <p key={jIdx} className="text-xs sm:text-sm font-extrabold text-[#458393]">
                            ⚖️ {judgment}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Carousel Navigation Controls */}
              <div className="bg-[#FFF3C8] px-6 sm:px-8 py-5 border-t-2 border-[#E5CB90] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  id="guidebook-bottom-prev-btn"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black transition-all cursor-pointer shadow-md ${
                    currentPage === 1
                      ? 'opacity-40 cursor-not-allowed bg-gray-300 text-gray-600'
                      : 'bg-[#1A3841] hover:bg-[#458393] text-white hover:scale-105 active:scale-95'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Page</span>
                </button>

                {/* Page Indicator Indicators */}
                <div className="flex items-center gap-2">
                  {GUIDEBOOK_PAGES.map((page) => (
                    <button
                      key={page.page_number}
                      onClick={() => handleJumpToPage(page.page_number)}
                      className={`h-3 rounded-full transition-all cursor-pointer ${
                        page.page_number === currentPage
                          ? 'w-8 bg-[#34A99D] shadow-xs'
                          : 'w-3 bg-[#1A3841]/20 hover:bg-[#1A3841]/50'
                      }`}
                      title={`Go to Page ${page.page_number}: ${page.title}`}
                    />
                  ))}
                </div>

                <button
                  id="guidebook-bottom-next-btn"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black transition-all cursor-pointer shadow-md ${
                    currentPage === totalPages
                      ? 'opacity-40 cursor-not-allowed bg-gray-300 text-gray-600'
                      : 'bg-[#34A99D] hover:bg-[#1A3841] text-white hover:scale-105 active:scale-95'
                  }`}
                >
                  <span>Next Page</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FLIPBOOK CAROUSEL MINIATURE SLIDE CARDS (QUICK JUMP GRID) */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E5CB90] shadow-lg">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-[#34A99D]" />
            <div>
              <h3 className="font-display text-xl font-bold text-[#1A3841]">
                Complete 5-Page Legal Guidebook Slides
              </h3>
              <p className="text-xs text-[#458393] font-semibold">
                Click any slide to jump directly into that chapter
              </p>
            </div>
          </div>
          <span className="text-xs font-black text-[#1A3841] bg-[#E5CB90]/60 px-3 py-1 rounded-full">
            5 Core Pages
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDEBOOK_PAGES.map((page) => {
            const isCurrent = page.page_number === currentPage;
            return (
              <button
                key={page.page_number}
                id={`guidebook-card-${page.page_number}`}
                onClick={() => {
                  handleJumpToPage(page.page_number);
                  const el = document.getElementById('digital-guidebook-root');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-5 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between gap-3 relative ${
                  isCurrent
                    ? 'bg-[#1A3841] text-[#FFF3C8] border-[#34A99D] shadow-lg scale-[1.02]'
                    : 'bg-[#FFF3C8]/40 hover:bg-[#FFF3C8] text-[#1A3841] border-[#E5CB90] hover:border-[#34A99D]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs ${
                        isCurrent ? 'bg-[#34A99D] text-white' : 'bg-[#E5CB90] text-[#1A3841]'
                      }`}
                    >
                      {page.page_number}
                    </span>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider ${
                        isCurrent ? 'text-[#E5CB90]' : 'text-[#458393]'
                      }`}
                    >
                      {page.chapter.split(':')[0]}
                    </span>
                  </div>
                  <h4 className="text-sm font-black line-clamp-1">{page.title}</h4>
                  <p
                    className={`text-xs line-clamp-2 mt-1.5 ${
                      isCurrent ? 'text-white/80' : 'text-[#1A3841]/75'
                    }`}
                  >
                    {page.situation_trigger}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t text-[11px] font-bold flex items-center justify-between ${
                    isCurrent
                      ? 'border-white/20 text-[#E5CB90]'
                      : 'border-[#E5CB90] text-[#34A99D]'
                  }`}
                >
                  <span>{page.statutory_provisions.length} Statutory Laws</span>
                  <span>{isCurrent ? '● Active Slide' : 'View Slide →'}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
