import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Volume2, Copy, Check, Shield, Sparkles, User, AlertCircle } from 'lucide-react';
import { SCRIPTS_DATA } from '../data/scriptsData';
import { ThreeDCard } from './ThreeDCard';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface VerbalScriptsProps {
  language: SupportedLanguage;
}

export const VerbalScripts: React.FC<VerbalScriptsProps> = ({ language }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const t = getT(language);
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#458393] text-white">
              De-escalation & Legal Shield
            </span>
            <span className="text-xs font-bold text-[#34A99D]">
              Exact Verbal Phrases to Speak
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841] tracking-tight">
            {t.scriptsTitle}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            {t.scriptsSubtitle}
          </p>
        </div>

        {/* Selected Regional Language Indicator */}
        <div className="inline-flex items-center gap-2 bg-[#E5CB90]/40 px-3 py-1.5 rounded-xl border border-[#E5CB90] text-xs font-bold text-[#1A3841]">
          <span>{langConfig.flag}</span>
          <span>{langConfig.nativeName}</span>
          <span className="text-[10px] text-[#458393]">({langConfig.name})</span>
        </div>
      </div>

      {/* Script Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SCRIPTS_DATA.map((item) => {
          const trans = item.translations?.[language];
          const scenarioTitle = trans?.scenario || item.scenario;
          const officerWords = trans?.policeAsks || item.policeAsks;
          const tipText = trans?.tip || item.tip;
          const citizenResponse =
            item.citizenResponses?.[language] ||
            (language === 'hi' ? (item.citizenResponseHindi || item.citizenResponseEnglish) : item.citizenResponseEnglish);

          const isPlaying = playingId === item.id;
          const isCopied = copiedId === item.id;

          return (
            <ThreeDCard key={item.id}>
              <div className="h-full p-6 rounded-3xl bg-gradient-to-b from-[#FFF3C8] via-[#FFF9E6] to-[#E5CB90]/30 border-2 border-[#E5CB90] shadow-md flex flex-col justify-between space-y-4">
                
                {/* Scenario Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#34A99D]/20 text-[#1A3841] border border-[#34A99D]">
                      {item.category.replace('_', ' ')}
                    </span>
                    <span className="text-xs font-bold text-[#458393]">
                      Law: {item.legalBasis}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1A3841] leading-snug">
                    {scenarioTitle}
                  </h3>
                </div>

                {/* Dialogue Comparison Box */}
                <div className="space-y-3">
                  {/* Police Statement Box */}
                  <div className="p-3.5 rounded-2xl bg-red-50/80 border border-red-200 flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-red-800 tracking-wider block">
                        If the Officer says:
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-red-950 italic">
                        "{officerWords}"
                      </p>
                    </div>
                  </div>

                  {/* Citizen Counter-Statement (Respectful & Firm) */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#458393] to-[#34A99D] text-[#FFF3C8] shadow-md space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E5CB90]">
                        Your exact words ({langConfig.name}):
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleSpeak(item.id, citizenResponse)}
                          className="p-1.5 rounded-lg bg-[#FFF3C8] text-[#1A3841] hover:bg-[#E5CB90] transition-colors cursor-pointer"
                          title="Listen with voice synthesis"
                        >
                          <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                        </button>
                        <button
                          onClick={() => handleCopy(item.id, citizenResponse)}
                          className="p-1.5 rounded-lg bg-[#FFF3C8] text-[#1A3841] hover:bg-[#E5CB90] transition-colors cursor-pointer"
                          title="Copy to clipboard"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#458393]" />}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-bold italic tracking-wide text-white leading-snug">
                      "{citizenResponse}"
                    </p>
                  </div>
                </div>

                {/* Why This Works & Tips */}
                <div className="p-3 rounded-2xl bg-[#E5CB90]/40 border border-[#E5CB90] text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#1A3841] font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#458393]" />
                    <span>Statutory Foundation:</span>
                  </div>
                  <p className="text-[#1A3841]/90 font-medium">
                    Backed by {item.legalBasis} and Supreme Court procedural mandates.
                  </p>
                  <p className="text-[#458393] font-semibold text-[11px] pt-1 border-t border-[#E5CB90]/60">
                    💡 Tip: {tipText}
                  </p>
                </div>

              </div>
            </ThreeDCard>
          );
        })}
      </div>
    </div>
  );
};
