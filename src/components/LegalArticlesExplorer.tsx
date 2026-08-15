import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, Filter, ShieldCheck, CheckCircle2, XCircle, ChevronDown, ChevronUp, Scale, Sparkles, Volume2 } from 'lucide-react';
import { LEGAL_RIGHTS } from '../data/legalData';
import { Category, SupportedLanguage } from '../types';
import { ThreeDCard } from './ThreeDCard';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface LegalArticlesExplorerProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  searchQuery: string;
  language: SupportedLanguage;
}

export const LegalArticlesExplorer: React.FC<LegalArticlesExplorerProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  language,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(LEGAL_RIGHTS[0].id);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const t = getT(language);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: t.catAll },
    { id: 'traffic', label: t.catTraffic },
    { id: 'arrest', label: t.catArrest },
    { id: 'women_child', label: t.catWomenChild },
    { id: 'fir', label: t.catFIR },
    { id: 'phone_privacy', label: t.catPhonePrivacy },
    { id: 'search', label: t.catSearch },
    { id: 'fundamental_rights', label: t.catFundamentalRights },
  ];

  const filteredRights = LEGAL_RIGHTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const trans = item.translations?.[language];
    const transTitle = trans?.title?.toLowerCase() || '';
    const transSummary = trans?.summary?.toLowerCase() || '';

    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.lawRef.toLowerCase().includes(q) ||
      transTitle.includes(q) ||
      transSummary.includes(q);
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleSpeakDialogue = (id: string, text: string) => {
    if ('speechSynthesis' in window) {
      if (speakingId === id) {
        window.speechSynthesis.cancel();
        setSpeakingId(null);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language);
      if (langConfig?.speechCode) {
        utterance.lang = langConfig.speechCode;
      }
      utterance.rate = 0.92;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5CB90]/60 pb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#458393] text-white">
              Official Statutory Compendium
            </span>
            <span className="text-xs font-bold text-[#34A99D]">
              Constitution of India & BNSS / CrPC
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841] tracking-tight">
            {t.rightsTitle}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            {t.rightsSubtitle}
          </p>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#34A99D] text-white shadow-sm scale-105'
                  : 'bg-[#FFF3C8] text-[#1A3841] border border-[#E5CB90] hover:bg-[#E5CB90]/40'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Rights List Accordion / Grid */}
      <div className="space-y-4">
        {filteredRights.length === 0 ? (
          <div className="text-center py-12 bg-[#FFF3C8] rounded-3xl border border-[#E5CB90] p-6">
            <Scale className="w-12 h-12 text-[#458393] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-[#1A3841]">No matching legal provisions found</h3>
            <p className="text-sm text-[#458393] mt-1">
              Try adjusting your search query or choosing "All Rights".
            </p>
          </div>
        ) : (
          filteredRights.map((right) => {
            const isExpanded = expandedId === right.id;
            const trans = right.translations?.[language];
            const displayTitle = trans?.title || right.title;
            const displaySummary = trans?.summary || right.summary;
            const displayDialogue = trans?.exactDialogue || right.exactDialogue;

            return (
              <ThreeDCard key={right.id} className="w-full">
                <div
                  id={`right-card-${right.id}`}
                  className="rounded-3xl bg-gradient-to-b from-[#FFF3C8] to-[#FFF8E7] border-2 border-[#E5CB90] shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  {/* Card Header (Click to toggle) */}
                  <div
                    onClick={() => toggleExpand(right.id)}
                    className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-[#E5CB90]/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#34A99D] to-[#458393] text-[#FFF3C8] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#458393]/20 text-[#1A3841] border border-[#458393]/40">
                            {right.category.replace('_', ' ')}
                          </span>
                          <span className="text-xs font-mono font-bold text-[#458393] bg-[#E5CB90]/40 px-2 py-0.5 rounded-md">
                            {right.lawRef}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-[#1A3841] leading-snug">
                          {displayTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#458393] font-medium mt-1">
                          {displaySummary}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-[#458393] bg-[#FFF3C8] p-2 rounded-xl border border-[#E5CB90]">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#E5CB90]/60 space-y-6"
                      >
                        {/* Landmark Judgment Banner */}
                        {right.scJudgment && (
                          <div className="p-3.5 rounded-2xl bg-[#E5CB90]/30 border border-[#E5CB90] flex items-center gap-2.5 text-xs text-[#1A3841] font-semibold">
                            <Sparkles className="w-4 h-4 text-[#458393] shrink-0" />
                            <span>
                              <strong>Landmark Supreme Court Benchmark:</strong> {right.scJudgment}
                            </span>
                          </div>
                        )}

                        {/* Core Key Safeguards */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1A3841]">
                            Key Statutory Safeguards:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {right.keyPoints.map((pt, idx) => (
                              <div
                                key={idx}
                                className="p-3 rounded-xl bg-white/70 border border-[#E5CB90]/60 text-xs sm:text-sm font-medium text-[#1A3841] flex items-start gap-2"
                              >
                                <span className="w-4 h-4 rounded-full bg-[#34A99D]/20 text-[#34A99D] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                                  ✓
                                </span>
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Two Columns: Police Duties & Police Prohibitions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300 space-y-2">
                            <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-black uppercase tracking-wider">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{t.whatPoliceMustDo}</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-emerald-950 font-medium">
                              {right.whatPoliceMustDo.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-emerald-700 font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-300 space-y-2">
                            <div className="flex items-center gap-1.5 text-rose-800 text-xs font-black uppercase tracking-wider">
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                              <span>{t.whatPoliceCannotDo}</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-rose-950 font-medium">
                              {right.whatPoliceCannotDo.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-rose-700 font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                        {/* Spoken Dialogue Pill */}
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#458393] to-[#34A99D] text-[#FFF3C8] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#E5CB90] block mb-1">
                              {t.exactSpokenWords}
                            </span>
                            <p className="text-sm font-bold italic text-white">
                              {displayDialogue}
                            </p>
                          </div>
                          <button
                            onClick={() => handleSpeakDialogue(right.id, displayDialogue)}
                            className="self-start sm:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF3C8] hover:bg-[#E5CB90] text-[#1A3841] text-xs font-bold transition-all shadow-xs cursor-pointer"
                          >
                            <Volume2 className={`w-3.5 h-3.5 ${speakingId === right.id ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                            <span>{speakingId === right.id ? t.playingAudio : t.listenAudio}</span>
                          </button>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ThreeDCard>
            );
          })
        )}
      </div>
    </div>
  );
};
