import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, Filter, ShieldCheck, CheckCircle2, XCircle, ChevronDown, ChevronUp, Scale, Sparkles } from 'lucide-react';
import { LEGAL_RIGHTS } from '../data/legalData';
import { Category } from '../types';
import { ThreeDCard } from './ThreeDCard';

interface LegalArticlesExplorerProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  searchQuery: string;
  language: 'en' | 'hi' | 'hinglish';
}

export const LegalArticlesExplorer: React.FC<LegalArticlesExplorerProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  language,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(LEGAL_RIGHTS[0].id);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: language === 'hi' ? 'सभी अधिकार' : 'All Rights' },
    { id: 'traffic', label: language === 'hi' ? 'ट्रैफिक व वाहन' : 'Traffic & Vehicles' },
    { id: 'arrest', label: language === 'hi' ? 'गिरफ्तारी व हिरासत' : 'Arrest & Detention' },
    { id: 'women_child', label: language === 'hi' ? 'महिला व बाल सुरक्षा' : 'Women & Children' },
    { id: 'fir', label: language === 'hi' ? 'एफआईआर व थाना' : 'FIR & Police Station' },
    { id: 'phone_privacy', label: language === 'hi' ? 'फोन व प्राइवेसी' : 'Phone & Privacy' },
    { id: 'search', label: language === 'hi' ? 'तलाशी के नियम' : 'Search & Seizure' },
    { id: 'fundamental_rights', label: language === 'hi' ? 'मौलिक अधिकार' : 'Fundamental Rights' },
  ];

  const filteredRights = LEGAL_RIGHTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.lawRef.toLowerCase().includes(q) ||
      (item.hindiTitle && item.hindiTitle.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
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
            {language === 'hi' ? 'कानूनी अधिकार एवं धाराएं' : 'Citizen Rights & Legal Sections Compendium'}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            Explore your exact rights categorized by situation with clear statutory references and judicial precedents.
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#458393] text-[#FFF3C8] border-[#34A99D] shadow-sm'
                  : 'bg-[#FFF3C8] text-[#1A3841] border-[#E5CB90] hover:bg-[#E5CB90]/40'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Cards List */}
      <div className="space-y-4">
        {filteredRights.length === 0 ? (
          <div className="p-8 text-center bg-[#FFF3C8] rounded-3xl border border-[#E5CB90]">
            <p className="text-base font-bold text-[#1A3841]">No legal rights found matching your search.</p>
            <p className="text-xs text-[#458393] mt-1">Try searching for keywords like "traffic", "arrest", "phone", or "FIR".</p>
          </div>
        ) : (
          filteredRights.map((right) => {
            const isExpanded = expandedId === right.id;
            return (
              <ThreeDCard key={right.id} intensity={8}>
                <div className="p-6 rounded-3xl bg-gradient-to-b from-[#FFF3C8] via-[#FFF9E6] to-[#E5CB90]/25 border-2 border-[#E5CB90] shadow-sm hover:shadow-md transition-all">
                  
                  {/* Card Header & Toggle */}
                  <div
                    onClick={() => toggleExpand(right.id)}
                    className="flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#34A99D] text-white">
                          {right.category.replace('_', ' ')}
                        </span>
                        <span className="text-xs font-bold text-[#458393]">
                          Law: {right.lawRef}
                        </span>
                        {right.scJudgment && (
                          <span className="text-[10px] font-semibold text-[#1A3841] bg-[#E5CB90]/60 px-2 py-0.5 rounded-md border border-[#E5CB90]">
                            {right.scJudgment}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold text-[#1A3841]">
                        {language === 'hi' && right.hindiTitle ? right.hindiTitle : right.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#458393] font-medium leading-relaxed">
                        {language === 'hi' && right.hindiSummary ? right.hindiSummary : right.summary}
                      </p>
                    </div>

                    <button
                      className="p-2 rounded-xl bg-[#E5CB90]/40 text-[#458393] hover:bg-[#E5CB90] shrink-0 transition-colors"
                      aria-label="Expand legal right details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-5 border-t border-[#E5CB90] space-y-5"
                      >
                        {/* Key Legal Safeguards Bullet Points */}
                        <div className="space-y-2">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1A3841] block">
                            Key Constitutional & Statutory Safeguards:
                          </span>
                          <ul className="space-y-2">
                            {right.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1A3841] font-medium leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-[#34A99D] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Two columns: Police Obligations vs Prohibitions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                            <span className="text-xs font-bold uppercase text-emerald-800 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>What Police MUST Do:</span>
                            </span>
                            <ul className="space-y-1 text-xs text-emerald-950 font-medium">
                              {right.whatPoliceMustDo.map((p, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span>•</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                            <span className="text-xs font-bold uppercase text-rose-800 flex items-center gap-1.5">
                              <XCircle className="w-4 h-4 text-rose-600" />
                              <span>What Police CANNOT Do:</span>
                            </span>
                            <ul className="space-y-1 text-xs text-rose-950 font-medium">
                              {right.whatPoliceCannotDo.map((p, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span>✕</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Spoken phrase */}
                        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#458393] to-[#34A99D] text-[#FFF3C8] text-xs sm:text-sm font-bold italic shadow-xs">
                          <span className="text-[10px] uppercase font-extrabold not-italic text-[#E5CB90] block mb-0.5">
                            Spoken Defense Phrase:
                          </span>
                          {right.exactDialogue}
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
