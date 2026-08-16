import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Volume2, Copy, Check, Shield, Sparkles, User, AlertCircle, Mic, MicOff, Search, Target, Award, ArrowDownCircle, RefreshCw } from 'lucide-react';
import { SCRIPTS_DATA } from '../data/scriptsData';
import { ThreeDCard } from './ThreeDCard';
import { SupportedLanguage, ScriptDialogue } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';
import { useSpeechRecognition } from '../utils/useSpeechRecognition';
import { SpeechRecognitionMicButton } from './SpeechRecognitionMicButton';

interface VerbalScriptsProps {
  language: SupportedLanguage;
}

export const VerbalScripts: React.FC<VerbalScriptsProps> = ({ language }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Practice Rehearsal State for individual scripts
  const [practicingId, setPracticingId] = useState<string | null>(null);
  const [practiceTranscript, setPracticeTranscript] = useState<string>('');
  const [practiceScore, setPracticeScore] = useState<number | null>(null);

  const t = getT(language);
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const scriptCardsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories = [
    { id: 'all', label: 'All Scenarios' },
    { id: 'traffic', label: ' Traffic Stops' },
    { id: 'search', label: ' Phone & Bag Search' },
    { id: 'arrest', label: ' Arrest Safeguards' },
    { id: 'police_station', label: ' FIR & Station' },
    { id: 'women_rights', label: ' Women Protection' },
  ];

  // Helper for computing similarity between spoken text and target script
  const calculateMatchScore = (spoken: string, target: string): number => {
    if (!spoken.trim() || !target.trim()) return 0;
    const spokenWords = spoken.toLowerCase().replace(/[^\w\s\u0900-\u097F]/gi, '').split(/\s+/).filter(Boolean);
    const targetWords = target.toLowerCase().replace(/[^\w\s\u0900-\u097F]/gi, '').split(/\s+/).filter(Boolean);
    if (targetWords.length === 0) return 0;

    let matchCount = 0;
    spokenWords.forEach((word) => {
      if (targetWords.some((tw) => tw.includes(word) || word.includes(tw))) {
        matchCount++;
      }
    });

    const score = Math.min(100, Math.round((matchCount / targetWords.length) * 100));
    return score;
  };

  // Practice Speech Recognition Hook
  const {
    isListening: isPracticeListening,
    startListening: startPracticeListening,
    stopListening: stopPracticeListening,
    resetTranscript: resetPracticeTranscript,
  } = useSpeechRecognition({
    language,
    continuous: true,
    interimResults: true,
    onResult: (text) => {
      setPracticeTranscript(text);
      if (practicingId) {
        const item = SCRIPTS_DATA.find((s) => s.id === practicingId);
        if (item) {
          const target = item.citizenResponses?.[language] || item.citizenResponseEnglish;
          const score = calculateMatchScore(text, target);
          setPracticeScore(score);
        }
      }
    },
  });

  const handleStartPractice = (item: ScriptDialogue) => {
    if (practicingId === item.id && isPracticeListening) {
      stopPracticeListening();
      setPracticingId(null);
      return;
    }

    setPracticingId(item.id);
    setPracticeTranscript('');
    setPracticeScore(null);
    resetPracticeTranscript();
    startPracticeListening();
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if ('speechSynthesis' in window) {
      if (playingId === id) {
        window.speechSynthesis.cancel();
        setPlayingId(null);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (langConfig?.speechCode) {
        utterance.lang = langConfig.speechCode;
      }
      utterance.rate = 0.90;
      utterance.onend = () => setPlayingId(null);
      utterance.onerror = () => setPlayingId(null);
      setPlayingId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filtered and Ranked Scripts based on Voice / Text Query
  const filteredScripts = useMemo(() => {
    return SCRIPTS_DATA.filter((item) => {
      // Category check
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'traffic' && !item.category.includes('traffic') && !item.id.includes('traffic')) return false;
        if (selectedCategory === 'search' && !item.category.includes('search') && !item.id.includes('search') && !item.id.includes('phone')) return false;
        if (selectedCategory === 'arrest' && !item.category.includes('arrest') && !item.id.includes('arrest') && !item.id.includes('detention')) return false;
        if (selectedCategory === 'police_station' && !item.category.includes('police_station') && !item.id.includes('fir')) return false;
        if (selectedCategory === 'women_rights' && !item.category.includes('women') && !item.id.includes('women')) return false;
      }

      // Search Query
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const trans = item.translations?.[language];
      const citizenResponse = item.citizenResponses?.[language] || item.citizenResponseEnglish;
      const hindiResp = item.citizenResponseHindi || '';

      return (
        item.scenario.toLowerCase().includes(q) ||
        item.policeAsks.toLowerCase().includes(q) ||
        item.legalBasis.toLowerCase().includes(q) ||
        citizenResponse.toLowerCase().includes(q) ||
        hindiResp.toLowerCase().includes(q) ||
        (trans?.scenario && trans.scenario.toLowerCase().includes(q)) ||
        (trans?.policeAsks && trans.policeAsks.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCategory, language]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#458393] text-white shadow-xs">
              De-escalation & Legal Shield
            </span>
            <span className="text-xs font-bold text-[#34A99D] px-3 py-0.5 rounded-full bg-[#34A99D]/15">
              Exact Verbal Phrases to Speak
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A3841] tracking-tight">
            {t.scriptsTitle}
          </h2>
          <p className="text-sm text-[#458393] font-bold">
            {t.scriptsSubtitle}
          </p>
        </div>

        {/* Selected Regional Language Indicator */}
        <div className="inline-flex items-center gap-2 bg-[#E5CB90]/50 px-4 py-2 rounded-full border-2 border-[#E5CB90] text-xs font-black text-[#1A3841] shadow-xs">
          <span className="text-base">{langConfig.flag}</span>
          <span>{langConfig.nativeName}</span>
          <span className="text-[10px] text-[#458393]">({langConfig.name})</span>
        </div>
      </div>

      {/* EMERGENCY VOICE MATCHER CARD (Web Speech API Integration) */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FFF3C8] via-[#FFF9E6] to-[#E5CB90]/40 border-2 border-[#E5CB90] shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-black shadow-md">
              <Mic className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#1A3841]">
                 High-Stress Voice Matcher (Speak Situation)
              </h3>
              <p className="text-xs text-[#458393] font-bold">
                Too stressed to type? Speak what the officer said or describe what's happening to find your exact legal script.
              </p>
            </div>
          </div>
        </div>

        {/* Speech Recognition Mic Action Component */}
        <SpeechRecognitionMicButton
          language={language}
          buttonLabel={`Speak Officer's Statement or Situation (${langConfig.name})`}
          placeholderHint="Say e.g. 'police took my car keys', 'asking for phone search', 'bina warrant checking'..."
          onTranscriptChange={(text) => {
            setSearchQuery(text);
          }}
        />

        {/* Text Search Bar & Clear Filter */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#458393]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Or type to search scripts (e.g., 'key snatching', 'DigiLocker', 'night arrest', 'phone unlock')..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border-2 border-[#E5CB90] text-xs sm:text-sm font-semibold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D] shadow-inner"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-3 py-2 rounded-2xl bg-white hover:bg-stone-100 border border-[#E5CB90] text-xs font-bold text-[#1A3841] cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                selectedCategory === cat.id
                  ? 'bg-[#34A99D] text-white font-black'
                  : 'bg-white hover:bg-[#E5CB90]/60 text-[#1A3841] border border-[#E5CB90]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {searchQuery && (
          <div className="text-xs font-bold text-[#34A99D] flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" />
            <span>Found {filteredScripts.length} matching legal script{filteredScripts.length === 1 ? '' : 's'} for "{searchQuery}"</span>
          </div>
        )}
      </div>

      {/* Script Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredScripts.map((item) => {
          const trans = item.translations?.[language];
          const scenarioTitle = trans?.scenario || item.scenario;
          const officerWords = trans?.policeAsks || item.policeAsks;
          const tipText = trans?.tip || item.tip;
          const citizenResponse =
            item.citizenResponses?.[language] ||
            (language === 'hi' ? (item.citizenResponseHindi || item.citizenResponseEnglish) : item.citizenResponseEnglish);

          const isPlaying = playingId === item.id;
          const isCopied = copiedId === item.id;
          const isPracticingThis = practicingId === item.id;

          return (
            <ThreeDCard key={item.id} className="group">
              <div 
                ref={(el) => {
                  scriptCardsRef.current[item.id] = el;
                }}
                className={`h-full p-6 rounded-[32px] bg-gradient-to-b from-[#FFF3C8] via-[#FFF9E6] to-[#E5CB90]/30 border-2 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  searchQuery ? 'border-[#34A99D] shadow-xl ring-2 ring-[#34A99D]/30' : 'border-[#E5CB90] group-hover:border-[#34A99D] shadow-md group-hover:shadow-2xl'
                }`}
              >
                
                {/* Scenario Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-[#34A99D]/20 text-[#1A3841] border border-[#34A99D]">
                      {item.category.replace('_', ' ')}
                    </span>
                    <span className="text-xs font-bold text-[#458393] px-2.5 py-0.5 rounded-full bg-[#E5CB90]/50">
                      Law: {item.legalBasis}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#1A3841] group-hover:text-[#34A99D] transition-colors leading-snug">
                    {scenarioTitle}
                  </h3>
                </div>

                {/* Dialogue Comparison Box */}
                <div className="space-y-3">
                  {/* Police Statement Box */}
                  <div className="p-4 rounded-3xl bg-red-50/90 border-2 border-red-200 flex items-start gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-red-800 tracking-wider block">
                        If the Officer says:
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-red-950 italic mt-0.5">
                        "{officerWords}"
                      </p>
                    </div>
                  </div>

                  {/* Citizen Counter-Statement (Respectful & Firm) */}
                  <div className="p-5 rounded-3xl bg-gradient-to-r from-[#458393] via-[#34A99D] to-[#458393] text-[#FFF3C8] shadow-lg space-y-2.5 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#E5CB90]">
                        Your exact words ({langConfig.name}):
                      </span>
                      <div className="flex items-center gap-1.5">
                        {/* Practice Speaking Button with Browser Speech Recognition */}
                        <button
                          onClick={() => handleStartPractice(item)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-black flex items-center gap-1 transition-all shadow-xs cursor-pointer ${
                            isPracticingThis && isPracticeListening
                              ? 'bg-red-600 text-white animate-pulse'
                              : 'bg-[#FFF3C8] text-[#1A3841] hover:bg-[#E5CB90]'
                          }`}
                          title="Practice speaking this script into your mic"
                        >
                          <Mic className="w-3.5 h-3.5" />
                          <span>{isPracticingThis && isPracticeListening ? 'Recording...' : 'Practice'}</span>
                        </button>

                        <button
                          onClick={() => handleSpeak(item.id, citizenResponse)}
                          className="w-8 h-8 rounded-full bg-[#FFF3C8] text-[#1A3841] hover:bg-[#E5CB90] hover:scale-110 transition-all flex items-center justify-center shadow-xs cursor-pointer"
                          title="Listen with voice synthesis"
                        >
                          <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                        </button>
                        <button
                          onClick={() => handleCopy(item.id, citizenResponse)}
                          className="w-8 h-8 rounded-full bg-[#FFF3C8] text-[#1A3841] hover:bg-[#E5CB90] hover:scale-110 transition-all flex items-center justify-center shadow-xs cursor-pointer"
                          title="Copy to clipboard"
                        >
                          {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#458393]" />}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-bold italic tracking-wide text-white leading-relaxed">
                      "{citizenResponse}"
                    </p>
                  </div>

                  {/* Speech Rehearsal Feedback Box (Active when practicing) */}
                  {isPracticingThis && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between font-black">
                        <span className="text-amber-900 flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5 text-amber-700 animate-bounce" />
                          Live Voice Rehearsal:
                        </span>
                        {practiceScore !== null && (
                          <span className={`px-2 py-0.5 rounded-full text-white font-mono font-black ${practiceScore >= 70 ? 'bg-emerald-600' : 'bg-amber-600'}`}>
                            {practiceScore}% Accuracy
                          </span>
                        )}
                      </div>

                      <div className="p-2 rounded-xl bg-white text-[#1A3841] font-semibold border border-amber-200">
                        {practiceTranscript ? (
                          <span>"{practiceTranscript}"</span>
                        ) : (
                          <span className="italic text-stone-400">Speak the exact script phrase aloud now...</span>
                        )}
                      </div>

                      {practiceScore !== null && practiceScore >= 70 && (
                        <div className="flex items-center gap-1 text-emerald-700 font-bold text-[11px]">
                          <Award className="w-3.5 h-3.5" />
                          <span>Excellent delivery! You are well-prepared for any checkpoint interaction.</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Why This Works & Tips */}
                <div className="p-4 rounded-3xl bg-[#E5CB90]/40 border-2 border-[#E5CB90] text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1A3841] font-black">
                    <Sparkles className="w-4 h-4 text-[#458393]" />
                    <span>Statutory Foundation:</span>
                  </div>
                  <p className="text-[#1A3841]/90 font-bold pl-6">
                    Backed by {item.legalBasis} and Supreme Court procedural mandates.
                  </p>
                  <p className="text-[#458393] font-bold text-xs pt-1.5 border-t border-[#E5CB90]/70 pl-6">
                     Tip: {tipText}
                  </p>
                </div>

              </div>
            </ThreeDCard>
          );
        })}
      </div>

      {filteredScripts.length === 0 && (
        <div className="p-10 rounded-3xl bg-[#FFF3C8] border-2 border-[#E5CB90] text-center space-y-3">
          <AlertCircle className="w-10 h-10 text-[#458393] mx-auto" />
          <h4 className="text-base font-black text-[#1A3841]">No Scripts Match "{searchQuery}"</h4>
          <p className="text-xs text-[#458393] font-bold">
            Try speaking different keywords like "challan", "warrant", "FIR", or "search".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-5 py-2 rounded-full bg-[#34A99D] text-white text-xs font-black hover:bg-[#1A3841] transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
