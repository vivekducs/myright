import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Volume2, Copy, Check, Shield, Sparkles, User, AlertCircle } from 'lucide-react';
import { SCRIPTS_DATA } from '../data/scriptsData';
import { ThreeDCard } from './ThreeDCard';

interface VerbalScriptsProps {
  language: 'en' | 'hi' | 'hinglish';
}

export const VerbalScripts: React.FC<VerbalScriptsProps> = ({ language }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [scriptLang, setScriptLang] = useState<'en' | 'hi'>('en');

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
      utterance.rate = 0.92;
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
            {language === 'hi' ? 'पुलिस से क्या कहें (Verbal Scripts)' : 'What to Say to the Police (Verbal Dialogue Scripts)'}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            Respectful, legally backed sentences that defend your rights without provoking hostility or confrontation.
          </p>
        </div>

        {/* Script Language toggle */}
        <div className="flex items-center gap-1 bg-[#E5CB90]/40 p-1 rounded-xl border border-[#E5CB90]">
          <button
            onClick={() => setScriptLang('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              scriptLang === 'en' ? 'bg-[#458393] text-[#FFF3C8] shadow-2xs' : 'text-[#1A3841]'
            }`}
          >
            English Scripts
          </button>
          <button
            onClick={() => setScriptLang('hi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              scriptLang === 'hi' ? 'bg-[#458393] text-[#FFF3C8] shadow-2xs' : 'text-[#1A3841]'
            }`}
          >
            हिंदी संवाद
          </button>
        </div>
      </div>

      {/* Script Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SCRIPTS_DATA.map((item) => {
          const activeText =
            scriptLang === 'hi' ? item.citizenResponseHindi : item.citizenResponseEnglish;
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

                  <h3 className="text-base font-extrabold text-[#1A3841] leading-snug">
                    {item.scenario}
                  </h3>
                </div>

                {/* Police Says Box */}
                <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-900 font-semibold space-y-1">
                  <span className="text-[10px] uppercase font-bold text-red-700 block">
                    When Police Says:
                  </span>
                  <p className="italic text-red-950 font-bold">{item.policeAsks}</p>
                </div>

                {/* You Say Box (Script) */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#458393] to-[#34A99D] text-[#FFF3C8] shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#E5CB90]">
                      Your Response (Speak Politely & Firmly):
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleSpeak(item.id, activeText)}
                        className="p-1.5 rounded-lg bg-[#FFF3C8] text-[#1A3841] hover:bg-[#E5CB90] transition-colors"
                        title="Play audio pronunciation"
                      >
                        <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                      </button>
                      <button
                        onClick={() => handleCopy(item.id, activeText)}
                        className="p-1.5 rounded-lg bg-[#FFF3C8] text-[#1A3841] hover:bg-[#E5CB90] transition-colors"
                        title="Copy text"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#458393]" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-bold italic text-white leading-relaxed">
                    {activeText}
                  </p>
                </div>

                {/* De-escalation Pro Tip */}
                <div className="p-3 rounded-xl bg-[#E5CB90]/30 border border-[#E5CB90] flex items-start gap-2 text-xs text-[#1A3841] font-medium">
                  <AlertCircle className="w-4 h-4 text-[#458393] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1A3841]">Tactical Tip: </strong>
                    {item.tip}
                  </span>
                </div>

              </div>
            </ThreeDCard>
          );
        })}
      </div>
    </div>
  );
};
