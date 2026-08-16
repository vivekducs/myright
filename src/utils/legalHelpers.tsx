import React from 'react';
import { 
  ExternalLink, 
  BookOpen, 
  Scale, 
  FileText, 
  Globe, 
  ShieldCheck, 
  Landmark, 
  ScrollText, 
  PhoneCall, 
  HelpCircle 
} from 'lucide-react';
import { OfficialSourceLink, SituationStep } from '../types';

/**
 * Returns a styled visual icon matching the official legal source type.
 */
export function getOfficialSourceIcon(type: OfficialSourceLink['type'] | string) {
  switch (type) {
    case 'gazette':
      return <ScrollText className="w-4 h-4 text-amber-700" />;
    case 'act':
      return <BookOpen className="w-4 h-4 text-emerald-700" />;
    case 'judgement':
      return <Scale className="w-4 h-4 text-indigo-700" />;
    case 'helpline':
      return <PhoneCall className="w-4 h-4 text-rose-700" />;
    case 'form':
      return <FileText className="w-4 h-4 text-teal-700" />;
    case 'portal':
    default:
      return <Globe className="w-4 h-4 text-[#458393]" />;
  }
}

/**
 * Returns badge label and color styles for the source type.
 */
export function getOfficialSourceBadge(type: OfficialSourceLink['type'] | string): { label: string; className: string } {
  switch (type) {
    case 'gazette':
      return {
        label: 'Official Gazette',
        className: 'bg-amber-100 text-amber-900 border-amber-300'
      };
    case 'act':
      return {
        label: 'Statutory Act / Law',
        className: 'bg-emerald-100 text-emerald-900 border-emerald-300'
      };
    case 'judgement':
      return {
        label: 'Supreme Court Precedent',
        className: 'bg-indigo-100 text-indigo-900 border-indigo-300'
      };
    case 'helpline':
      return {
        label: 'Emergency Helpline',
        className: 'bg-rose-100 text-rose-900 border-rose-300'
      };
    case 'form':
      return {
        label: 'Legal Form / Memo',
        className: 'bg-teal-100 text-teal-900 border-teal-300'
      };
    case 'portal':
    default:
      return {
        label: 'Government Portal',
        className: 'bg-sky-100 text-sky-900 border-sky-300'
      };
  }
}

/**
 * Renders an individual clickable 'Learn More' link that opens official gazettes, acts, or government portals in a new tab.
 */
export const LearnMoreLinkItem: React.FC<{
  link: OfficialSourceLink;
  compact?: boolean;
}> = ({ link, compact = false }) => {
  const badge = getOfficialSourceBadge(link.type);

  if (compact) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Open ${link.title} on ${link.department}`}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-teal-500 text-slate-800 text-xs font-bold transition-all shadow-xs hover:shadow-md group"
      >
        {getOfficialSourceIcon(link.type)}
        <span className="truncate max-w-[200px]">{link.title}</span>
        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-teal-600 shrink-0" />
      </a>
    );
  }

  return (
    <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-500 transition-all hover:shadow-lg flex flex-col justify-between space-y-3 shadow-xs">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${badge.className}`}>
            {badge.label}
          </span>
          <span className="text-[11px] font-bold text-slate-500">
            {link.department}
          </span>
        </div>

        <h5 className="text-sm font-black text-slate-900 leading-snug">
          {link.title}
        </h5>

        {link.description && (
          <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
            {link.description}
          </p>
        )}

        {link.gazetteRef && (
          <div className="mt-2 p-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[10px] font-bold text-amber-900 flex items-center gap-1.5">
            <ScrollText className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Gazette Ref: {link.gazetteRef}</span>
          </div>
        )}

        {link.citationRef && (
          <div className="mt-2 p-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-[10px] font-bold text-indigo-900 flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
            <span>Citation: {link.citationRef}</span>
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-slate-100">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 rounded-full bg-slate-900 hover:bg-teal-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all group cursor-pointer"
        >
          <span>Learn More / Open Source</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

/**
 * Comprehensive helper component that renders:
 * 1. Legal Citations
 * 2. Primary Sources & Official Gazettes
 * 3. Interactive Clickable 'Learn More' Links that open government portals in a new tab
 */
export const LegalCitationsAndSourcesSection: React.FC<{
  step: SituationStep;
  className?: string;
}> = ({ step, className = '' }) => {
  const hasCitations = step.legalCitations && step.legalCitations.length > 0;
  const hasSources = step.sources && step.sources.length > 0;
  const hasOfficialLinks = step.officialLinks && step.officialLinks.length > 0;

  if (!hasCitations && !hasSources && !hasOfficialLinks && !step.sourceActName) {
    return null;
  }

  return (
    <div className={`p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-5 ${className}`}>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-xs">
            <Landmark className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider text-slate-900">
              Sources, Legal Citations & Official Gazettes
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Direct statutory references, gazette notifications & Supreme Court authorities
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-black self-start sm:self-center">
          ✓ Verified Government Portal Sources
        </span>
      </div>

      {/* Grid for Citations & Sources list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Legal Citations Column */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-slate-500 tracking-wide">
            <Scale className="w-4 h-4 text-teal-600" />
            <span>Legal Citations & Statutory Shield</span>
          </div>

          <div className="space-y-2">
            {step.sourceActName && (
              <div className="text-xs font-extrabold text-slate-900 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80">
                <span className="text-amber-800 block text-[10px] uppercase">Primary Act & Section:</span>
                {step.sourceActName} {step.sourceSectionOrArticle ? `— ${step.sourceSectionOrArticle}` : ''}
              </div>
            )}

            {step.legalCitations && step.legalCitations.length > 0 ? (
              <ul className="space-y-1.5">
                {step.legalCitations.map((citation, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-bold">
                    <span className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      §
                    </span>
                    <span>{citation}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-slate-700 font-medium">
                {step.legalShield}
              </p>
            )}

            {step.landmarkCase && (
              <div className="text-xs font-bold text-indigo-950 bg-indigo-50/80 p-2.5 rounded-xl border border-indigo-200">
                <span className="text-indigo-800 font-black block text-[10px] uppercase">Landmark Ruling:</span>
                 {step.landmarkCase}
              </div>
            )}
          </div>
        </div>

        {/* Primary Sources & Gazettes Column */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-slate-500 tracking-wide">
            <ScrollText className="w-4 h-4 text-teal-600" />
            <span>Primary Sources & Gazettes</span>
          </div>

          {step.sources && step.sources.length > 0 ? (
            <ul className="space-y-2">
              {step.sources.map((src, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-bold bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{src}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-500 font-medium">
              The Gazette of India & Official Law Ministry statutory publications.
            </p>
          )}
        </div>

      </div>

      {/* Interactive Official Links ('Learn More' cards) */}
      {hasOfficialLinks && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h5 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-teal-600" />
              <span>Official Government & Legal Portal Links (Learn More)</span>
            </h5>
            <span className="text-[11px] text-slate-400 font-medium">
              Opens official portal in a new tab ↗
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {step.officialLinks!.map((link, idx) => (
              <LearnMoreLinkItem key={idx} link={link} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
