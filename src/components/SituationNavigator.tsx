import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle2, XCircle, MessageSquare, Scale, PhoneCall, Shield, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { SITUATION_STEPS } from '../data/legalData';
import { ThreeDCard } from './ThreeDCard';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface SituationNavigatorProps {
  selectedSituationId: string | null;
  onSelectSituation: (id: string) => void;
  language: SupportedLanguage;
}

export const SituationNavigator: React.FC<SituationNavigatorProps> = ({
  selectedSituationId,
  onSelectSituation,
  language,
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5CB90]/60 pb-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841] tracking-tight">
            {t.situationTitle}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            {t.situationSubtitle}
          </p>
        </div>
      </div>

      {/* Situation Selector Buttons Grid */}
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
              className={`p-3.5 rounded-2xl text-left font-bold text-xs sm:text-sm transition-all border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-[#458393] text-[#FFF3C8] border-[#34A99D] shadow-md scale-[1.02]'
                  : 'bg-[#FFF3C8] text-[#1A3841] border-[#E5CB90] hover:bg-[#E5CB90]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-extrabold ${
                  step.severity === 'critical'
                    ? 'bg-red-500/20 text-red-900 border border-red-400'
                    : 'bg-[#34A99D]/20 text-[#1A3841] border border-[#34A99D]'
                }`}>
                  {step.category}
                </span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-[#E5CB90] animate-ping" />}
              </div>
              <span className="line-clamp-2 leading-tight">
                {stepTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Selected Situation Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStepId}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
        >
          <ThreeDCard className="w-full">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFF3C8] via-[#FFF9E6] to-[#E5CB90]/30 border-2 border-[#E5CB90] shadow-lg space-y-6">
              
              {/* Header Box */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E5CB90]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#34A99D] text-white">
                      {t.verifiedLawBadge}
                    </span>
                    <span className="text-xs text-[#458393] font-semibold">
                      Citizen Statutory Guide
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841]">
                    {title}
                  </h3>
                  <p className="text-sm text-[#458393] font-medium mt-1">
                    {situation}
                  </p>
                </div>

                {/* Helpline quick dial for this situation */}
                <div className="flex items-center gap-2 bg-[#FFF3C8] p-2.5 rounded-2xl border border-[#E5CB90] shadow-2xs">
                  <PhoneCall className="w-5 h-5 text-red-600 animate-pulse" />
                  <div>
                    <span className="text-[11px] text-[#458393] font-bold block leading-none">{t.helplineLabel}</span>
                    <span className="text-sm font-extrabold text-red-600">{currentStep.helpline}</span>
                  </div>
                </div>
              </div>

              {/* Exact Words to Say (Dialogue Box with Audio Simulator) */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#458393] to-[#34A99D] text-[#FFF3C8] shadow-md space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#E5CB90]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5CB90]">
                      {t.exactSpokenWords}
                    </span>
                  </div>
                  <button
                    onClick={() => handleSpeak(sayThis)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FFF3C8] text-[#1A3841] text-xs font-bold hover:bg-[#E5CB90] transition-colors shadow-xs cursor-pointer"
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                    <span>{isSpeaking ? t.playingAudio : t.listenAudio}</span>
                  </button>
                </div>
                <p className="text-base sm:text-lg font-bold italic tracking-wide text-white leading-snug">
                  {sayThis}
                </p>
              </div>

              {/* Two Column Grid: DOs and DONTs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Immediate DOs */}
                <div className="p-5 rounded-2xl bg-emerald-50/90 border border-emerald-300 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h4 className="font-extrabold text-sm uppercase tracking-wider">
                      {t.immediateActions}
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {immediateActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Critical DON'Ts */}
                <div className="p-5 rounded-2xl bg-rose-50/90 border border-rose-300 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-rose-800">
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <h4 className="font-extrabold text-sm uppercase tracking-wider">
                      {t.avoidMistakes}
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {doNotDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Legal Shield & Section Citation */}
              <div className="p-4 rounded-2xl bg-[#E5CB90]/40 border border-[#E5CB90] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#458393] text-[#FFF3C8] flex items-center justify-center shrink-0 shadow-2xs">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1A3841] block uppercase tracking-wider">
                    {t.legalShield}
                  </span>
                  <span className="text-sm font-extrabold text-[#458393]">
                    {legalShield}
                  </span>
                </div>
              </div>

            </div>
          </ThreeDCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
