import React from 'react';
import { PhoneCall, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { AshokStambha } from './AshokStambha';

interface TirangaHeaderProps {
  onOpenEmergencyModal?: () => void;
}

export const TirangaHeader: React.FC<TirangaHeaderProps> = ({ onOpenEmergencyModal }) => {
  return (
    <div className="w-full bg-[#1A3841] text-[#FFF3C8] text-xs select-none border-b border-[#E5CB90]/40">
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
          <AshokStambha size={22} showText={false} goldTone={true} />
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] sm:text-xs">
            <span className="font-bold text-[#E5CB90] tracking-wide">
              भारत सरकार
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="font-semibold text-white/90">
              Government of India
            </span>
            <span className="text-white/40 hidden md:inline">•</span>
            <span className="text-[10px] text-[#34A99D] font-bold bg-[#34A99D]/15 px-2 py-0.2 rounded-full border border-[#34A99D]/30 hidden md:inline-flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5 text-[#34A99D]" />
              Citizen Police Rights & Legal Literacy Portal
            </span>
          </div>
        </div>

        {/* Right: Rapid 112 / NALSA Free Legal Aid Hotline + Source badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[10px] text-[#E5CB90] hidden lg:flex items-center gap-1 font-medium">
            <Scale className="w-3 h-3 text-[#34A99D]" />
            Official Citations: BNSS 2023 • CrPC • Art. 21/22
          </span>

          <button
            onClick={onOpenEmergencyModal}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/90 hover:bg-red-500 text-white text-[11px] font-black shadow-xs transition-transform active:scale-95 cursor-pointer"
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
