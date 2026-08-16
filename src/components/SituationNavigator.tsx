import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  Scale, 
  PhoneCall, 
  Volume2, 
  ArrowRight, 
  Search, 
  Sparkles,
  AlertTriangle,
  Building2,
  ExternalLink,
  ShieldCheck,
  FileText,
  Clock
} from 'lucide-react';
import { SITUATION_STEPS } from '../data/legalData';
import { ThreeDCard } from './ThreeDCard';
import { DetailPageTarget, SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';
import { LegalCitationsAndSourcesSection } from '../utils/legalHelpers';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const t = getT(language);

  // Sync if parent updates selectedSituationId
  React.useEffect(() => {
    if (selectedSituationId) {
      setActiveStepId(selectedSituationId);
    }
  }, [selectedSituationId]);

  const categories = useMemo(() => [
    { id: 'all', label: 'All Scenarios', count: SITUATION_STEPS.length },
    { id: 'traffic', label: 'Traffic & Checkpoints', count: SITUATION_STEPS.filter(s => s.category === 'traffic').length },
    { id: 'arrest', label: 'Arrest & Custody', count: SITUATION_STEPS.filter(s => s.category === 'arrest').length },
    { id: 'search', label: 'Search & Home Raids', count: SITUATION_STEPS.filter(s => s.category === 'search').length },
    { id: 'phone_privacy', label: 'Phone & Digital Privacy', count: SITUATION_STEPS.filter(s => s.category === 'phone_privacy').length },
    { id: 'women_child', label: 'Women, Couples & Family', count: SITUATION_STEPS.filter(s => s.category === 'women_child').length },
    { id: 'fundamental_rights', label: 'Fundamental Rights & Civil', count: SITUATION_STEPS.filter(s => s.category === 'fundamental_rights').length },
    { id: 'fir', label: 'FIR & Anti-Corruption', count: SITUATION_STEPS.filter(s => s.category === 'fir').length },
  ], []);

  const filteredSteps = useMemo(() => {
    return SITUATION_STEPS.filter(step => {
      const stepTrans = step.translations?.[language];
      const title = (stepTrans?.title || step.title).toLowerCase();
      const situation = (stepTrans?.situation || step.situation).toLowerCase();
      const query = searchQuery.toLowerCase().trim();

      const matchesSearch = !query || 
        title.includes(query) || 
        situation.includes(query) || 
        step.legalShield.toLowerCase().includes(query) ||
        step.id.toLowerCase().includes(query);

      const matchesCategory = selectedCategory === 'all' || step.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, language]);

  const currentStep =
    SITUATION_STEPS.find((s) => s.id === activeStepId) || filteredSteps[0] || SITUATION_STEPS[0];

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-teal-700">
              Interactive Citizen Compass • 18 Real-World Scenarios
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.situationTitle}
          </h2>
          <p className="text-sm text-slate-500 font-semibold">
            {t.situationSubtitle}
          </p>
        </div>

        {/* Real-time Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="situation-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search situations (e.g. key, thana, phone, couple)..."
            className="w-full pl-10 pr-8 py-2 text-xs font-semibold bg-white border border-slate-200 rounded-full text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-teal-600 focus:ring-2 focus:ring-teal-500/10 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-category-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer border ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-[1.02]'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                isActive ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Situation Selector Buttons Grid - 3D White Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filteredSteps.map((step) => {
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
                setTimeout(() => {
                  document.getElementById('situation-detail-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
              }}
              className={`p-4 rounded-3xl text-left font-bold text-xs transition-all duration-200 border flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-lg min-h-[100px] ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xl ring-4 ring-teal-500/20 scale-[1.02]'
                  : 'bg-white text-slate-800 border-slate-200/90 hover:border-teal-500 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-black ${
                  step.severity === 'critical'
                    ? 'bg-rose-50 text-rose-700 border border-rose-200'
                    : isSelected ? 'bg-teal-900/60 text-teal-300' : 'bg-teal-50 text-teal-800 border border-teal-200/60'
                }`}>
                  {step.category}
                </span>
                {isSelected ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                )}
              </div>
              <span className="line-clamp-2 leading-snug font-extrabold text-[13px]">
                {stepTitle}
              </span>
            </button>
          );
        })}
      </div>

      {filteredSteps.length === 0 && (
        <div className="p-8 rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 text-center space-y-2">
          <p className="text-sm font-bold text-slate-800">No situations match your search criteria "{searchQuery}".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="text-xs font-black text-teal-600 underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Detailed Selected Situation Card with 3D White Depth */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStepId}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
        >
          <ThreeDCard className="w-full" id="situation-detail-card">
            <div className="p-6 sm:p-8 rounded-[36px] bg-white border border-slate-200/90 shadow-xl space-y-6 mt-4">
              
              {/* Header Box */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-600 text-white shadow-xs">
                      {t.verifiedLawBadge}
                    </span>
                    <span className="text-xs text-slate-500 font-bold px-3 py-0.5 rounded-full bg-slate-100">
                      Constitutional Shield
                    </span>
                    {currentStep.severity === 'critical' && (
                      <span className="text-xs text-rose-700 font-black px-3 py-0.5 rounded-full bg-rose-50 border border-rose-200 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Critical Safeguard
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium mt-1 max-w-3xl leading-relaxed">
                    {situation}
                  </p>
                </div>

                {/* Helpline quick dial for this situation */}
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-full border border-slate-200 shadow-xs shrink-0 self-start md:self-center">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <PhoneCall className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold block leading-none">{t.helplineLabel}</span>
                    <span className="text-base font-black text-rose-600">{currentStep.helpline}</span>
                  </div>
                  <a
                    href={`tel:${currentStep.helpline.split(' ')[0]}`}
                    className="px-3.5 py-1.5 rounded-full bg-rose-600 text-white font-bold text-xs shadow-xs hover:bg-rose-700 transition-colors ml-1"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Fast-Scan 30-Sec Summary Card */}
              {currentStep.fastScan30Sec && (
                <div className="p-4 sm:p-5 rounded-3xl bg-amber-50/80 border border-amber-200 text-slate-900 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-black uppercase tracking-wider text-amber-900">
                      ⚡ Quick 30-Second Field Card (Read in 30 Seconds)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold pt-1">
                    <div className="p-3 bg-white rounded-2xl border border-amber-200/80 shadow-xs">
                      <span className="text-[10px] uppercase font-black text-amber-800 block mb-0.5">Key Shield</span>
                      <p className="text-slate-800 leading-snug">{currentStep.fastScan30Sec.topRightText}</p>
                    </div>
                    <div className="p-3 bg-white rounded-2xl border border-amber-200/80 shadow-xs">
                      <span className="text-[10px] uppercase font-black text-emerald-800 block mb-0.5">Must Do</span>
                      <p className="text-emerald-950 leading-snug">{currentStep.fastScan30Sec.mustDoText}</p>
                    </div>
                    <div className="p-3 bg-white rounded-2xl border border-amber-200/80 shadow-xs">
                      <span className="text-[10px] uppercase font-black text-blue-800 block mb-0.5">Remedy</span>
                      <p className="text-blue-950 leading-snug">{currentStep.fastScan30Sec.complainToText}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Summary of Your Legal Rights */}
              {currentStep.summaryRights && currentStep.summaryRights.length > 0 && (
                <div className="p-5 rounded-3xl bg-teal-50/60 border border-teal-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-teal-900">
                    <ShieldCheck className="w-5 h-5 text-teal-700" />
                    <h4 className="font-black text-sm uppercase tracking-wider">
                      Your Statutory Rights in This Situation
                    </h4>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {currentStep.summaryRights.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed bg-white p-3 rounded-2xl border border-teal-100 shadow-xs">
                        <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exact Words to Say (Dialogue Box with Audio Simulator & Modern 3D Mesh) */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white shadow-xl space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-teal-400" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-teal-300">
                      {t.exactSpokenWords}
                    </span>
                  </div>
                  <button
                    onClick={() => handleSpeak(sayThis)}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-900 text-xs font-extrabold hover:bg-teal-50 hover:scale-105 transition-all shadow-md cursor-pointer"
                  >
                    <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-teal-600 animate-spin' : 'text-slate-700'}`} />
                    <span>{isSpeaking ? t.playingAudio : t.listenAudio}</span>
                  </button>
                </div>
                <p className="text-base sm:text-xl font-bold italic tracking-wide text-slate-100 leading-relaxed">
                  "{sayThis}"
                </p>
              </div>

              {/* Two Column Grid: DOs and DONTs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Immediate DOs */}
                <div className="p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200 shadow-xs space-y-3.5">
                  <div className="flex items-center gap-2.5 text-emerald-900">
                    <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wider">
                      {t.immediateActions} (What To Do Now)
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {immediateActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed bg-white/80 p-3 rounded-2xl border border-emerald-100">
                        <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                          {idx + 1}
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Critical DON'Ts */}
                <div className="p-6 rounded-3xl bg-rose-50/80 border border-rose-200 shadow-xs space-y-3.5">
                  <div className="flex items-center gap-2.5 text-rose-900">
                    <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-rose-700" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wider">
                      {t.avoidMistakes} (What NOT To Do)
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {doNotDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-rose-950 font-medium leading-relaxed bg-white/80 p-3 rounded-2xl border border-rose-100">
                        <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Where To Complain / Remedy Forum */}
              {currentStep.whereToComplain && (
                <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900">
                      <Building2 className="w-5 h-5 text-teal-600" />
                      <h4 className="font-black text-sm uppercase tracking-wider">
                        Where To Complain & Legal Escalation Path
                      </h4>
                    </div>
                    {currentStep.whereToComplain.portalUrl && (
                      <a
                        href={currentStep.whereToComplain.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-teal-600 transition-colors shadow-xs"
                      >
                        <span>Official Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-900">
                      <span className="text-slate-500">Designated Authority: </span>
                      {currentStep.whereToComplain.authority}
                    </div>
                    {currentStep.whereToComplain.actSection && (
                      <div className="text-xs font-bold text-teal-700">
                        <span className="text-slate-900 font-extrabold">Statutory Remedy: </span>
                        {currentStep.whereToComplain.actSection}
                      </div>
                    )}
                    <ul className="space-y-1.5 pt-1">
                      {currentStep.whereToComplain.steps.map((st, i) => (
                        <li key={i} className="text-xs text-slate-700 font-medium flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/60">
                          <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Legal Shield & Section Citation + Open Full Page */}
              <div className="p-5 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-teal-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Scale className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-500 block uppercase tracking-wider">
                      {t.legalShield} & Landmark Precedents
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                      {legalShield}
                    </span>
                    {currentStep.landmarkCase && (
                      <span className="text-xs font-semibold text-slate-600 block mt-0.5">
                        ⚖️ {currentStep.landmarkCase}
                      </span>
                    )}
                  </div>
                </div>

                {onSelectTarget && (
                  <button
                    id={`situation-open-detail-${currentStep.id}`}
                    onClick={() => onSelectTarget({ type: 'situation', id: currentStep.id })}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-teal-600 text-white text-xs font-black shadow-md hover:scale-105 transition-all cursor-pointer shrink-0 self-start sm:self-center"
                  >
                    <span>{t.openDetailPage}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Comprehensive Sources, Legal Citations & Official Learn More Links */}
              <LegalCitationsAndSourcesSection step={currentStep} />

            </div>
          </ThreeDCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
