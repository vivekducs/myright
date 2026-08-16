import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Shield,
  Scale,
  ExternalLink,
  BookOpen,
  Volume2,
  Copy,
  Check,
  Printer,
  Share2,
  Phone,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Building2,
  FileText,
  BadgeAlert,
  HelpCircle,
  Globe
} from 'lucide-react';
import { LegalRight, SituationStep, DepartmentLink, DKBasuGuideline, ScriptDialogue, SupportedLanguage, DetailPageTarget } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';
import { LEGAL_RIGHTS, SITUATION_STEPS, EMERGENCY_CONTACTS } from '../data/legalData';
import { OFFICIAL_DEPARTMENTS } from '../data/departmentData';
import { LegalCitationsAndSourcesSection } from '../utils/legalHelpers';

interface DetailPageProps {
  target: DetailPageTarget;
  language: SupportedLanguage;
  onBack: () => void;
  onSelectTarget: (target: DetailPageTarget) => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({
  target,
  language,
  onBack,
  onSelectTarget,
}) => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const t = getT(language);
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  // Resolve target object
  let rightItem: LegalRight | undefined;
  let sitItem: SituationStep | undefined;
  let deptItem: DepartmentLink | undefined;
  let dkItem: DKBasuGuideline | undefined;
  let scriptItem: ScriptDialogue | undefined;

  if (target.type === 'right') {
    rightItem = LEGAL_RIGHTS.find((r) => r.id === target.id);
  } else if (target.type === 'situation') {
    sitItem = SITUATION_STEPS.find((s) => s.id === target.id);
    // Find corresponding right if any
    const matchedRight = LEGAL_RIGHTS.find((r) => r.category === sitItem?.category);
    if (matchedRight) rightItem = matchedRight;
  } else if (target.type === 'department') {
    deptItem = OFFICIAL_DEPARTMENTS.find((d) => d.id === target.id);
  }

  // Find relevant official departments linked to this topic
  const linkedDepartments: DepartmentLink[] = OFFICIAL_DEPARTMENTS.filter((d) => {
    if (deptItem) return d.id === deptItem.id;
    if (target.type === 'right' && rightItem) {
      if (rightItem.category === 'traffic' && d.category === 'traffic') return true;
      if (rightItem.category === 'arrest' && (d.category === 'police' || d.category === 'human_rights' || d.category === 'legal_aid')) return true;
      if (rightItem.category === 'women_child' && d.category === 'women_child') return true;
      if (rightItem.category === 'phone_privacy' && d.category === 'cyber') return true;
      if (rightItem.category === 'fir' && (d.category === 'police' || d.category === 'rti_vigilance')) return true;
    }
    if (target.type === 'situation' && sitItem) {
      if (sitItem.category === 'traffic' && d.category === 'traffic') return true;
      if (sitItem.category === 'arrest' && (d.category === 'police' || d.category === 'human_rights')) return true;
      if (sitItem.category === 'women_child' && d.category === 'women_child') return true;
      if (sitItem.category === 'phone_privacy' && d.category === 'cyber') return true;
      if (sitItem.category === 'fir' && d.category === 'police') return true;
    }
    return false;
  }).slice(0, 3);

  // If none matched, provide top 2 essentials
  const fallbackDepartments = linkedDepartments.length > 0 ? linkedDepartments : OFFICIAL_DEPARTMENTS.slice(0, 2);

  // Data extraction with language fallback
  const title = 
    deptItem ? (deptItem.translations?.[language]?.name || deptItem.name) :
    rightItem ? (rightItem.translations?.[language]?.title || rightItem.title) :
    sitItem ? (sitItem.translations?.[language]?.title || sitItem.title) :
    dkItem ? `D.K. Basu Rule #${dkItem.num}: ${dkItem.translations?.[language]?.title || dkItem.title}` :
    scriptItem ? (scriptItem.translations?.[language]?.scenario || scriptItem.scenario) :
    'MyRight Legal Protection';

  const summaryText =
    deptItem ? (deptItem.translations?.[language]?.description || deptItem.description) :
    rightItem ? (rightItem.translations?.[language]?.summary || rightItem.summary) :
    sitItem ? (sitItem.translations?.[language]?.situation || sitItem.situation) :
    dkItem ? (dkItem.translations?.[language]?.desc || dkItem.desc) :
    scriptItem ? scriptItem.tip :
    '';

  const lawRef = 
    rightItem?.lawRef || 
    sitItem?.legalShield || 
    (deptItem ? deptItem.officialSourceCitation : 'Constitution of India & Bharatiya Nagarik Suraksha Sanhita (BNSS)');

  const scJudgment = 
    rightItem?.scJudgment || 
    (dkItem ? 'D.K. Basu v. State of West Bengal, AIR 1997 SC 610 (Binding on all Police Forces)' : 
    (target.type === 'situation' ? 'Supreme Court Landmark Rulings & High Court Directives' : 'Supreme Court Precedents'));

  const dialogue = 
    rightItem?.translations?.[language]?.exactDialogue || rightItem?.exactDialogue ||
    sitItem?.translations?.[language]?.sayThis || sitItem?.sayThis ||
    scriptItem?.citizenResponses?.[language] || (language === 'hi' ? scriptItem?.citizenResponseHindi : scriptItem?.citizenResponseEnglish) ||
    '“Officer, I am cooperating with due respect. Under the statutory law and Supreme Court guidelines, kindly follow the prescribed procedural rules.”';

  const handleCopyCitation = () => {
    const textToCopy = `MYRIGHT LEGAL CITATION:\n${title}\nStatutory Basis: ${lawRef}\nCourt Ruling: ${scJudgment}\nExact Dialogue to Speak: "${dialogue}"\nPortal: ${window.location.origin}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSpeakSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(dialogue);
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="space-y-8 max-w-5xl mx-auto pb-16"
    >
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5CB90]/70 pb-4">
        <button
          id="detail-page-back-btn"
          onClick={onBack}
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FFF3C8] hover:bg-[#E5CB90] border-2 border-[#E5CB90] text-sm font-black text-[#1A3841] transition-all hover:-translate-x-1 shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#34A99D]" />
          <span>{t.backToDirectory}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            id="detail-page-copy-btn"
            onClick={handleCopyCitation}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFF3C8] hover:bg-[#E5CB90]/80 border border-[#E5CB90] text-xs font-black text-[#1A3841] transition-all shadow-xs cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#458393]" />}
            <span>{copied ? t.copiedText : t.copyText}</span>
          </button>

          <button
            id="detail-page-print-btn"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFF3C8] hover:bg-[#E5CB90]/80 border border-[#E5CB90] text-xs font-black text-[#1A3841] transition-all shadow-xs cursor-pointer hidden sm:flex"
          >
            <Printer className="w-3.5 h-3.5 text-[#458393]" />
            <span>{t.printDoc}</span>
          </button>

          <span className="px-3.5 py-1 rounded-full bg-[#34A99D]/15 border border-[#34A99D]/40 text-[#1A3841] text-xs font-black">
             {langConfig.name}
          </span>
        </div>
      </div>

      {/* Main Hero Card for the selected Right / Department / Situation */}
      <div className="p-6 sm:p-10 rounded-[36px] bg-[#FFF3C8] border-3 border-[#34A99D] shadow-xl space-y-6">
        
        {/* Badges & Meta */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#34A99D] to-[#458393] text-white shadow-xs">
            MyRight Citizen Shield
          </span>
          <span className="px-3.5 py-1 rounded-full text-xs font-black bg-amber-200/80 text-amber-900 border border-amber-300">
            {t.verifiedLawBadge}
          </span>
          {deptItem && (
            <span className="px-3.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300">
              {deptItem.verifiedGovBadge}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-[#1A3841] tracking-tight leading-tight">
          {title}
        </h1>

        {/* Overview Summary */}
        <p className="text-base sm:text-lg text-[#1A3841] font-semibold leading-relaxed p-4 rounded-3xl bg-white/80 border border-[#E5CB90] shadow-inner">
          {summaryText}
        </p>

        {/* Legal Citation Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-3xl bg-[#E5CB90]/40 border-2 border-[#E5CB90] space-y-1">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-[#458393] tracking-wide">
              <Scale className="w-4 h-4 text-[#34A99D]" />
              <span>{t.sourceArticle}</span>
            </div>
            <p className="text-sm font-black text-[#1A3841]">
              {lawRef}
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-[#E5CB90]/40 border-2 border-[#E5CB90] space-y-1">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-[#458393] tracking-wide">
              <Shield className="w-4 h-4 text-[#34A99D]" />
              <span>Landmark Supreme Court Precedent</span>
            </div>
            <p className="text-sm font-black text-[#1A3841]">
              {scJudgment}
            </p>
          </div>
        </div>

      </div>

      {/* Spoken Verbal Script Box with Audio TTS */}
      <div className="p-6 sm:p-8 rounded-[36px] bg-gradient-to-br from-[#458393] via-[#34A99D] to-[#1A3841] text-white shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#E5CB90]/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#E5CB90]" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E5CB90] block">
                {t.exactSpokenWords}
              </span>
              <span className="text-[11px] text-white/80 font-medium">
                De-escalate calmly while asserting your statutory rights
              </span>
            </div>
          </div>

          <button
            id="speak-script-detail-btn"
            onClick={handleSpeakSpeech}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF3C8] text-[#1A3841] text-xs font-black hover:bg-[#E5CB90] hover:scale-105 transition-all shadow-md cursor-pointer self-start sm:self-center"
          >
            <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
            <span>{isSpeaking ? t.playingAudio : t.listenAudio}</span>
          </button>
        </div>

        <blockquote className="p-5 rounded-3xl bg-white/10 border border-white/20 text-base sm:text-xl font-bold italic tracking-wide text-white leading-relaxed">
          {dialogue}
        </blockquote>
      </div>

      {/* Department Full Overview & Key Services (If Department) */}
      {deptItem && (
        <div className="p-6 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#34A99D] text-white flex items-center justify-center shadow-xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#1A3841]">
                Department Overview & Jurisdiction
              </h2>
              <p className="text-xs text-[#458393] font-bold">
                {deptItem.ministryOrAuthority}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#1A3841] font-semibold leading-relaxed">
            {deptItem.translations?.[language]?.fullOverview || deptItem.fullOverview}
          </p>

          {/* Key Services Offered */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#458393]">
              Services Provided Directly to Citizens:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deptItem.servicesProvided.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E5CB90] text-xs font-bold text-[#1A3841]">
                  <CheckCircle2 className="w-4 h-4 text-[#34A99D] shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Government Portal Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E5CB90]">
            <a
              href={deptItem.portalUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#458393] hover:bg-[#34A99D] text-white text-sm font-black shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>Launch Official Portal ({deptItem.verifiedGovBadge})</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {deptItem.grievanceUrl && (
              <a
                href={deptItem.grievanceUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E5CB90] hover:bg-[#E5CB90]/80 text-[#1A3841] text-sm font-black shadow-xs hover:scale-105 transition-all"
              >
                <span>File Grievance / Complaint Online</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {deptItem.helplineNumber && (
              <a
                href={`tel:${deptItem.helplineNumber}`}
                className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-black shadow-md hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {deptItem.helplineName}: {deptItem.helplineNumber}</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* Action Protocols Grid: What Police Must Do vs Cannot Do / Do's & Don'ts */}
      {rightItem && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* What Police Must Do */}
          <div className="p-6 sm:p-7 rounded-[32px] bg-emerald-50/95 border-2 border-emerald-300 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-emerald-900 text-xs font-black uppercase tracking-wider">
              <div className="w-7 h-7 rounded-full bg-emerald-200 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              </div>
              <span>{t.whatPoliceMustDo}</span>
            </div>
            <ul className="space-y-3">
              {rightItem.whatPoliceMustDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 font-bold leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Police Cannot Do */}
          <div className="p-6 sm:p-7 rounded-[32px] bg-rose-50/95 border-2 border-rose-300 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-rose-900 text-xs font-black uppercase tracking-wider">
              <div className="w-7 h-7 rounded-full bg-rose-200 flex items-center justify-center">
                <XCircle className="w-4 h-4 text-rose-700" />
              </div>
              <span>{t.whatPoliceCannotDo}</span>
            </div>
            <ul className="space-y-3">
              {rightItem.whatPoliceCannotDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-950 font-bold leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}

      {/* Immediate Steps & Mistakes to Avoid (If Situation) */}
      {sitItem && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-[32px] bg-emerald-50/95 border-2 border-emerald-300 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 text-xs font-black uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>{t.immediateActions}</span>
              </div>
              <ul className="space-y-2.5">
                {sitItem.immediateActions.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-950 font-bold leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-7 rounded-[32px] bg-rose-50/95 border-2 border-rose-300 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-rose-900 text-xs font-black uppercase tracking-wider">
                <XCircle className="w-4 h-4 text-rose-700" />
                <span>{t.avoidMistakes}</span>
              </div>
              <ul className="space-y-2.5">
                {sitItem.doNotDo.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-rose-950 font-bold leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Citations, Official Sources & Learn More Links */}
          <LegalCitationsAndSourcesSection step={sitItem} />
        </>
      )}

      {/* Official Government Portals & Department Links Connected to this Right */}
      <div className="p-6 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-md space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#458393] text-white flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#1A3841]">
                Connected Official Government Portals & Verification Sources
              </h3>
              <p className="text-xs text-[#458393] font-bold">
                Direct official departments handling enforcement, e-challans, complaints & legal aid
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fallbackDepartments.map((dept) => (
            <div
              key={dept.id}
              className="p-5 rounded-3xl bg-white border-2 border-[#E5CB90] hover:border-[#34A99D] transition-all hover:shadow-md flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#34A99D]/15 text-[#34A99D] text-[10px] font-black uppercase tracking-wider">
                    {dept.verifiedGovBadge}
                  </span>
                  {dept.helplineNumber && (
                    <span className="text-[11px] font-black text-red-600">
                      ☎ {dept.helplineNumber}
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-black text-[#1A3841] leading-snug">
                  {dept.name}
                </h4>
                <p className="text-xs text-[#458393] font-semibold mt-1 line-clamp-2">
                  {dept.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#E5CB90]/60">
                <a
                  href={dept.portalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-full bg-[#458393] hover:bg-[#34A99D] text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <span>Open Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => onSelectTarget({ type: 'department', id: dept.id })}
                  className="py-2 px-3 rounded-full bg-[#E5CB90]/40 hover:bg-[#E5CB90] text-[#1A3841] text-xs font-black cursor-pointer transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Back Button & Emergency Hotline Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-[#E5CB90]/40 border-2 border-[#E5CB90]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#458393] hover:bg-[#34A99D] text-white font-black text-sm transition-all hover:scale-105 shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backToDirectory}</span>
        </button>

        <div className="flex items-center gap-3 text-xs font-bold text-[#1A3841]">
          <span>Need immediate assistance?</span>
          <a
            href="tel:112"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-black shadow-xs hover:scale-105 transition-transform"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 112 SOS</span>
          </a>
        </div>
      </div>

    </motion.div>
  );
};
