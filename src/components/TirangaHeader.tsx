import React from 'react';
import { PhoneCall, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { AshokStambha } from './AshokStambha';

interface TirangaHeaderProps {
  onOpenEmergencyModal?: () => void;
}

export const TirangaHeader: React.FC<TirangaHeaderProps> = ({ onOpenEmergencyModal }) => {
  return (
    <div className="w-full bg-slate-900 text-slate-100 text-xs select-none border-b border-slate-800">
      {/* --- The Indian National Tricolour (Tiranga) Top Ribbon with Ashoka Chakra --- */}
      <div className="w-full h-1.5 flex relative overflow-hidden">
        {/* Saffron (Kesaria) */}
        <div className="w-1/3 bg-[#FF671F]" title="Saffron - Courage & Sacrifice" />
        {/* White (Shwet) with navy Chakra accent */}
        <div className="w-1/3 bg-[#FFFFFF] relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full border border-[#000080] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#000080]" />
          </div>
        </div>
        {/* Green (Hara) */}
        <div className="w-1/3 bg-[#046A38]" title="Green - Prosperity & Faith" />
      </div>

      {/* Official Government of India Top Banner */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-3">
        {/* Left: Ashok Stambha & National Portal Tag */}
        <div className="flex items-center gap-2.5">
          <AshokStambha size={20} showText={false} goldTone={true} />
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] sm:text-xs">
            <span className="font-bold text-amber-400 tracking-wide">
              भारत सरकार
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="font-semibold text-slate-200">
              Government of India
            </span>
            <span className="text-slate-500 hidden md:inline">•</span>
            <span className="text-[10px] text-teal-400 font-bold bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-800/60 hidden md:inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-teal-400" />
              Citizen Police Rights & Legal Literacy Portal
            </span>
          </div>
        </div>

        {/* Right: Rapid 112 / NALSA Free Legal Aid Hotline + Source badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[10px] text-slate-300 hidden lg:flex items-center gap-1.5 font-medium">
            <Scale className="w-3 h-3 text-teal-400" />
            Official Citations: BNSS 2023 • CrPC • Art. 21/22
          </span>

          <button
            onClick={onOpenEmergencyModal}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white text-[11px] font-black shadow-md hover:shadow-red-500/30 transition-transform active:scale-95 cursor-pointer"
            title="National Police Emergency Helpline 112 / NALSA 15100"
          >
            <PhoneCall className="w-2.5 h-2.5 animate-pulse text-white" />
            <span>SOS 112 / 15100</span>
          </button>
        </div>
      </div>
    </div>
  );
};

