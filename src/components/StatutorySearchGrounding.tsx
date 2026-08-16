import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Globe, ExternalLink, CheckCircle2, ShieldCheck, Sparkles, Loader2, AlertCircle, Scale, Building } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { AudioTranscriber } from './AudioTranscriber';
import { MarkdownRenderer } from './MarkdownRenderer';

interface StatutorySearchGroundingProps {
  language: SupportedLanguage;
}

interface GroundingSource {
  title: string;
  uri: string;
}

export const StatutorySearchGrounding: React.FC<StatutorySearchGroundingProps> = ({ language }) => {
  const [query, setQuery] = useState('');
  const [stateJurisdiction, setStateJurisdiction] = useState('All India / National');
  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState<string | null>(null);
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const [error, setError] = useState<string | null>(null);

  const INDIAN_STATES = [
    'All India / National',
    'Delhi NCR',
    'Maharashtra (Mumbai)',
    'Karnataka (Bengaluru)',
    'Tamil Nadu (Chennai)',
    'Telangana (Hyderabad)',
    'West Bengal (Kolkata)',
    'Gujarat (Ahmedabad)',
    'Uttar Pradesh',
    'Punjab & Haryana',
    'Rajasthan',
    'Kerala',
    'Madhya Pradesh',
    'Bihar',
    'Odisha',
    'Andhra Pradesh',
  ];

  const PRESET_GROUNDED_CHECKS = [
    'Are police allowed to seize car keys according to latest High Court circulars?',
    'What is the fine for driving without helmet under updated Motor Vehicle Act?',
    'Mandatory guidelines for recording CCTV in police station interrogations',
    'Can digital DigiLocker RC and Driving License be rejected by traffic police?',
    'New BNSS provisions regarding electronic summons and Zero FIR registration',
  ];

  const handleVerify = async (queryText?: string) => {
    const q = queryText || query;
    if (!q.trim()) return;

    setLoading(true);
    setError(null);
    setResultText(null);
    setSources([]);

    try {
      const res = await fetch('/api/verify-statute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, state: stateJurisdiction }),
      });

      if (!res.ok) {
        throw new Error(`Verification service returned ${res.status}`);
      }

      const data = await res.json();
      setResultText(data.verifiedAnswer);
      setSources(data.sources || []);
    } catch (err: any) {
      console.error('Search grounding error:', err);
      setError('Could not verify with Google Search Grounding. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-700 text-white shadow-xs flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              Google Search Grounding
            </span>
            <span className="text-xs font-bold text-[#34A99D] px-2.5 py-0.5 rounded-full bg-[#34A99D]/15">
              gemini-3.5-flash with googleSearch tool
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#1A3841] tracking-tight">
            Live Statutory & Police Rules Verifier
          </h3>
          <p className="text-xs sm:text-sm text-[#458393] font-bold">
            Real-time web search grounding to fetch the latest state police circulars, e-challan rules, and high court precedents.
          </p>
        </div>
      </div>

      {/* Query Form */}
      <div className="p-6 rounded-3xl bg-white border-2 border-[#E5CB90] shadow-md space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Query input */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="block text-xs font-black uppercase text-[#1A3841]">
              Legal Statute / Rule to Verify:
            </label>
            <div className="relative">
              <input
                id="search-grounding-query"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Can traffic police remove car keys or seize vehicle on spot without e-challan?"
                className="w-full p-3.5 rounded-2xl bg-[#FFF3C8]/40 border-2 border-[#E5CB90] text-xs sm:text-sm font-semibold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D]"
              />
            </div>
          </div>

          {/* State Jurisdiction Picker */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase text-[#1A3841]">
              State / Jurisdiction:
            </label>
            <select
              value={stateJurisdiction}
              onChange={(e) => setStateJurisdiction(e.target.value)}
              className="w-full p-3.5 rounded-2xl bg-[#FFF3C8]/40 border-2 border-[#E5CB90] text-xs sm:text-sm font-bold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D] cursor-pointer"
            >
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Voice Input & Submit Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <AudioTranscriber
            buttonLabel="Voice Query (gemini-3.5-flash)"
            onTranscribed={(transcript) => {
              setQuery(transcript);
              handleVerify(transcript);
            }}
          />

          <button
            onClick={() => handleVerify()}
            disabled={loading || !query.trim()}
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-black shadow-md hover:shadow-xl disabled:opacity-50 transition-all cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Searching Google & Verifying Statutes...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Run Google Search Grounding Check</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Preset verification scenarios */}
      <div className="space-y-2">
        <span className="text-xs font-black uppercase tracking-wider text-[#458393] block">
          Frequently Grounded Legal Inquiries:
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESET_GROUNDED_CHECKS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(preset);
                handleVerify(preset);
              }}
              className="text-left text-xs font-bold px-3.5 py-1.5 rounded-full bg-white hover:bg-[#E5CB90]/60 border border-[#E5CB90] hover:border-blue-500 text-[#1A3841] transition-all cursor-pointer shadow-2xs"
            >
              🔍 {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Grounded Verification Output */}
      {resultText && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-blue-500 shadow-xl space-y-5"
        >
          <div className="flex items-center justify-between border-b border-[#E5CB90] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                <CheckCircle2 className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-[#1A3841]">
                  Grounded Statutory Verification
                </h4>
                <p className="text-xs text-[#458393] font-bold">
                  Jurisdiction: {stateJurisdiction} • Powered by Google Search Grounding
                </p>
              </div>
            </div>
          </div>

          {/* Main Answer */}
          <div className="py-1">
            <MarkdownRenderer content={resultText} />
          </div>

          {/* Web Sources Grid */}
          {sources.length > 0 && (
            <div className="pt-3 border-t border-[#E5CB90]/70 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-blue-800">
                <Globe className="w-3.5 h-3.5" />
                <span>Grounded Web Sources & Official Portals ({sources.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sources.map((source, sIdx) => (
                  <a
                    key={sIdx}
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl bg-blue-50/80 hover:bg-blue-100/90 border border-blue-200 text-blue-950 text-xs font-bold transition-all shadow-2xs group"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span className="truncate">{source.title || source.uri}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-800 text-xs font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

    </div>
  );
};
