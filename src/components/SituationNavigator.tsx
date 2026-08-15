import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle2, XCircle, MessageSquare, Scale, PhoneCall, Shield, Sparkles, Volume2, ArrowRight, Compass } from 'lucide-react';
import { SITUATION_STEPS } from '../data/legalData';
import { ThreeDCard } from './ThreeDCard';
import { DetailPageTarget, SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface SituationNavigatorProps {
  selectedSituationId: string | null;
  onSelectSituation: (id: string) => void;
  language: SupportedLanguage;
  onSelectTarget?: (target: DetailPageTarget) => void;
}

export const SituationNavigator: React.FC<SituationNavigatorProps> = ({
  selectedSituationId,
  onSelectSituation,
  language,
  onSelectTarget,
}) => {
  const [activeStepId, setActiveStepId] = useState<string>(
    selectedSituationId || SITUATION_STEPS[0].id
  );
  const [isSpeaking, setIsSpeaking] = useState(false);

  const t = getT(language);

  // Sync if parent updates selectedSituationId
  React.useEffect(() => {
    if (selectedSituationId) {
      setActiveStepId(selectedSituationId);
    }
  }, [selectedSituationId]);

  const currentStep =
    SITUATION_STEPS.find((s) => s.id === activeStepId) || SITUATION_STEPS[0];

  // Resolve translated content if available
  const trans = currentStep.translations?.[language];
  const title = trans?.title || currentStep.title;
  const situation = trans?.situation || currentStep.situation;
  const immediateActions = trans?.immediateActions || currentStep.immediateActions;
  const doNotDo = trans?.doNotDo || currentStep.doNotDo;
  const sayThis = trans?.sayThis || currentStep.sayThis;
  const legalShield = trans?.legalShield || currentStep.legalShield;

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language);
      if (langConfig?.speechCode) {
        utterance.lang = langConfig.speechCode;
      }
      utterance.rate = 0.92;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Title & Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34A99D] animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-[#34A99D]">Interactive Citizen Compass</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A3841] tracking-tight">
            {t.situationTitle}
          </h2>
          <p className="text-sm text-[#458393] font-bold">
            {t.situationSubtitle}
          </p>
        </div>
      </div>

      {/* Situation Selector Buttons Grid - Circular Pills & App Tokens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {SITUATION_STEPS.map((step) => {
          const isSelected = activeStepId === step.id;
          const stepTrans = step.translations?.[language];
          const stepTitle = stepTrans?.title || step.title;

          return (
            <button
              key={step.id}
              id={`situation-btn-${step.id}`}
              onClick={() => {
                setActiveStepId(step.id);
                onSelectSituation(step.id);
              }}
              className={`p-4 rounded-3xl text-left font-black text-xs sm:text-sm transition-all duration-200 border-2 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                isSelected
                  ? 'bg-[#458393] text-[#FFF3C8] border-[#34A99D] shadow-xl ring-4 ring-[#34A99D]/25 scale-[1.02]'
                  : 'bg-[#FFF3C8] text-[#1A3841] border-[#E5CB90] hover:border-[#34A99D] hover:bg-[#E5CB90]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-black ${
                  step.severity === 'critical'
                    ? 'bg-red-500/20 text-red-900 border border-red-400'
                    : isSelected ? 'bg-white/20 text-white' : 'bg-[#34A99D]/20 text-[#1A3841] border border-[#34A99D]'
                }`}>
                  {step.category}
                </span>
                {isSelected ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5CB90] animate-ping" />
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#458393]/30" />
                )}
              </div>
              <span className="line-clamp-2 leading-snug font-extrabold">
                {stepTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Selected Situation Card with Circular Aesthetics */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStepId}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
        >
          <ThreeDCard className="w-full">
            <div className="p-6 sm:p-8 rounded-[36px] bg-gradient-to-b from-[#FFF3C8] via-[#FFF9E6] to-[#E5CB90]/30 border-2 border-[#E5CB90] shadow-xl space-y-6">
              
              {/* Header Box */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#E5CB90]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#34A99D] text-white shadow-xs">
                      {t.verifiedLawBadge}
                    </span>
                    <span className="text-xs text-[#458393] font-bold px-3 py-0.5 rounded-full bg-[#458393]/10">
                      Constitutional Shield
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1A3841]">
                    {title}
                  </h3>
                  <p className="text-sm text-[#458393] font-bold mt-1">
                    {situation}
                  </p>
                </div>

                {/* Helpline quick dial for this situation */}
                <div className="flex items-center gap-3 bg-[#FFF3C8] p-3 rounded-full border-2 border-[#E5CB90] shadow-xs shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-600/15 flex items-center justify-center text-red-600">
                    <PhoneCall className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#458393] font-black block leading-none">{t.helplineLabel}</span>
                    <span className="text-base font-black text-red-600">{currentStep.helpline}</span>
                  </div>
                  <a
                    href={`tel:${currentStep.helpline}`}
                    className="px-3.5 py-1.5 rounded-full bg-red-600 text-white font-black text-xs shadow-xs hover:bg-red-700 transition-colors ml-1"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Exact Words to Say (Dialogue Box with Audio Simulator) */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#458393] via-[#34A99D] to-[#458393] text-[#FFF3C8] shadow-lg space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#E5CB90]/30 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-[#E5CB90]" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#E5CB90]">
                      {t.exactSpokenWords}
                    </span>
                  </div>
                  <button
                    onClick={() => handleSpeak(sayThis)}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF3C8] text-[#1A3841] text-xs font-black hover:bg-[#E5CB90] hover:scale-105 transition-all shadow-md cursor-pointer"
                  >
                    <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                    <span>{isSpeaking ? t.playingAudio : t.listenAudio}</span>
                  </button>
                </div>
                <p className="text-base sm:text-xl font-bold italic tracking-wide text-white leading-relaxed">
                  "{sayThis}"
                </p>
              </div>

              {/* Two Column Grid: DOs and DONTs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Immediate DOs */}
                <div className="p-6 rounded-3xl bg-emerald-50/95 border-2 border-emerald-300 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2.5 text-emerald-800">
                    <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wider">
                      {t.immediateActions}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {immediateActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-emerald-950 font-bold leading-relaxed">
                        <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                          {idx + 1}
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Critical DON'Ts */}
                <div className="p-6 rounded-3xl bg-rose-50/95 border-2 border-rose-300 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2.5 text-rose-800">
                    <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-rose-700" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wider">
                      {t.avoidMistakes}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {doNotDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-rose-950 font-bold leading-relaxed">
                        <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Legal Shield & Section Citation + Open Full Page */}
              <div className="p-5 rounded-3xl bg-[#E5CB90]/40 border-2 border-[#E5CB90] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34A99D] to-[#458393] text-[#FFF3C8] flex items-center justify-center shrink-0 shadow-md">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#1A3841] block uppercase tracking-wider">
                      {t.legalShield}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#458393]">
                      {legalShield}
                    </span>
                  </div>
                </div>

                {onSelectTarget && (
                  <button
                    id={`situation-open-detail-${currentStep.id}`}
                    onClick={() => onSelectTarget({ type: 'situation', id: currentStep.id })}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#458393] hover:bg-[#34A99D] text-white text-xs font-black shadow-md hover:scale-105 transition-all cursor-pointer shrink-0 self-start sm:self-center"
                  >
                    <span>{t.openDetailPage}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          </ThreeDCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
