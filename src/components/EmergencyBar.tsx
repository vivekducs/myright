import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Copy, Check, ShieldAlert, X, AlertTriangle, ExternalLink } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/legalData';

interface EmergencyBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyBar: React.FC<EmergencyBarProps> = ({ isOpen, onClose }) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <>
      {/* Rapid Emergency Helpline Banner in Page */}
      <section className="bg-gradient-to-r from-[#458393] via-[#34A99D] to-[#1A3841] text-[#FFF3C8] py-4 px-4 sm:px-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/90 flex items-center justify-center text-white shadow-xs shrink-0 animate-bounce">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base tracking-tight text-[#FFF3C8]">
                  National Emergency Helplines (24x7 Free)
                </span>
                <span className="bg-red-500/30 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-red-400/40">
                  Govt of India
                </span>
              </div>
              <p className="text-xs text-[#E5CB90] font-medium">
                Tap to call directly or copy number if facing unlawful police coercion
              </p>
            </div>
          </div>

          {/* Helpline Quick Chips */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {EMERGENCY_CONTACTS.slice(0, 4).map((c) => (
              <div
                key={c.number}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FFF3C8]/10 hover:bg-[#FFF3C8]/20 border border-[#E5CB90]/40 transition-colors"
              >
                <span className="text-xs font-semibold text-[#FFF3C8]">{c.name.split(' ')[0]}:</span>
                <a
                  href={`tel:${c.number}`}
                  className="text-sm font-extrabold text-[#E5CB90] hover:underline"
                >
                  {c.number}
                </a>
                <button
                  onClick={() => handleCopy(c.number)}
                  title="Copy number"
                  className="text-[#FFF3C8]/70 hover:text-white"
                >
                  {copiedNumber === c.number ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Full SOS Emergency Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3841]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-[#FFF3C8] rounded-3xl border-3 border-red-500/80 shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-red-600 to-rose-700 p-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-8 h-8 text-yellow-300 animate-pulse" />
                  <div>
                    <h3 className="text-xl font-extrabold">EMERGENCY SOS & LEGAL ASSISTANCE</h3>
                    <p className="text-xs text-red-100 font-medium">
                      If you are in immediate danger or facing unlawful police detention
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
                
                {/* Immediate Rule Reminder */}
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-red-900 leading-relaxed font-medium space-y-1">
                    <p className="font-bold text-sm text-red-950">Immediate Checklist for Police Detention:</p>
                    <p>1. Stay calm. State clearly: “I am cooperating, please tell me the grounds of arrest under Article 22(1).”</p>
                    <p>2. You have the statutory right to make 1 phone call to a family member or advocate.</p>
                    <p>3. Do NOT sign blank papers or unread confessions.</p>
                  </div>
                </div>

                {/* Helpline Numbers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EMERGENCY_CONTACTS.map((item) => (
                    <div
                      key={item.number}
                      className="p-3.5 rounded-2xl bg-white border border-[#E5CB90] shadow-xs flex items-center justify-between hover:border-[#34A99D] transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-[#1A3841] block">{item.name}</span>
                        <span className="text-lg font-black text-red-600">{item.number}</span>
                        <p className="text-[11px] text-[#458393] font-medium leading-tight">{item.description}</p>
                      </div>

                      <div className="flex flex-col gap-1.5 shrink-0 ml-3">
                        <a
                          href={`tel:${item.number}`}
                          className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </a>
                        <button
                          onClick={() => handleCopy(item.number)}
                          className="px-2 py-1 rounded-lg bg-[#E5CB90]/40 text-[#1A3841] text-[10px] font-bold hover:bg-[#E5CB90]"
                        >
                          {copiedNumber === item.number ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* NALSA Portal Link */}
                <div className="p-4 rounded-2xl bg-[#34A99D]/15 border border-[#34A99D] flex items-center justify-between text-xs font-semibold text-[#1A3841]">
                  <div>
                    <span className="font-bold block text-sm">Need Free Legal Aid?</span>
                    <span>NALSA provides free advocates under Article 39A for eligible citizens & arrested individuals.</span>
                  </div>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#458393] text-white text-xs font-bold flex items-center gap-1 shrink-0 ml-2"
                  >
                    <span>NALSA Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
