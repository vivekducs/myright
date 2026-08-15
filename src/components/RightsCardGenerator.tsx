import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Download, Printer, Share2, Sparkles, CheckCircle2, User, Phone, MapPin, QrCode } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import confetti from 'canvas-confetti';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface RightsCardGeneratorProps {
  language: SupportedLanguage;
}

export const RightsCardGenerator: React.FC<RightsCardGeneratorProps> = ({ language }) => {
  const [userName, setUserName] = useState('Indian Citizen');
  const [emergencyContact, setEmergencyContact] = useState('+91 98765 43210');
  const [userCity, setUserCity] = useState('New Delhi, India');
  const [isCopied, setIsCopied] = useState(false);

  const t = getT(language);
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const handleCelebrate = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#E5CB90', '#34A99D', '#458393', '#FFF3C8'],
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Indian Citizen Police Rights Pocket Pass',
        text: 'Know your Fundamental Rights under Article 21 & D.K. Basu Guidelines with NyayaMitra.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const legalSafeguards = [
    {
      title: 'Article 21 & Privacy',
      desc: 'No random search of private phones without formal magistrate search warrant.',
    },
    {
      title: 'D.K. Basu Memo (Sec 41B)',
      desc: 'Mandatory written arrest memo on the spot with witness signature + 24hr magistrate rule.',
    },
    {
      title: 'Rule 139 MVA DigiLocker',
      desc: 'Digital DL & RC on DigiLocker/mParivahan are 100% legal; keys cannot be snatched.',
    },
    {
      title: 'Zero FIR (Lalita Kumari)',
      desc: 'Any police station must register Zero FIR for cognizable offences regardless of area.',
    },
    {
      title: 'Sunset Protection (Sec 46(4))',
      desc: 'No woman can be arrested after sunset without prior Judicial Magistrate written order.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#34A99D] text-white shadow-xs">
              Digital Pocket Pass
            </span>
            <span className="text-xs font-bold text-[#458393] px-3 py-0.5 rounded-full bg-[#458393]/10">
              Carry on your phone or print for wallet
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A3841] tracking-tight">
            {t.passTitle}
          </h2>
          <p className="text-sm text-[#458393] font-bold">
            {t.passSubtitle}
          </p>
        </div>

        {/* Print / Download buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              handleCelebrate();
              handlePrint();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#458393] hover:bg-[#34A99D] text-[#FFF3C8] font-black text-xs shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#E5CB90]" />
            <span>{t.printDoc}</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF3C8] hover:bg-[#E5CB90] border-2 border-[#E5CB90] text-[#1A3841] font-black text-xs shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#458393]" />
            <span>{isCopied ? t.copiedText : t.shareDoc}</span>
          </button>
        </div>
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-4">
          <div className="flex items-center gap-2.5 text-sm font-black text-[#1A3841] uppercase tracking-wider pb-3 border-b border-[#E5CB90]">
            <div className="w-8 h-8 rounded-full bg-[#34A99D]/20 flex items-center justify-center text-[#34A99D]">
              <User className="w-4 h-4" />
            </div>
            <span>Personalize Your Shield Pass</span>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-black text-[#1A3841]">Your Full Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 rounded-full bg-white border-2 border-[#E5CB90] text-sm font-bold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D] px-4 shadow-2xs"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-black text-[#1A3841]">Emergency Advocate / Family Phone:</label>
            <input
              type="text"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              className="w-full p-3 rounded-full bg-white border-2 border-[#E5CB90] text-sm font-bold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D] px-4 shadow-2xs"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-black text-[#1A3841]">City & State:</label>
            <input
              type="text"
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
              className="w-full p-3 rounded-full bg-white border-2 border-[#E5CB90] text-sm font-bold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D] px-4 shadow-2xs"
            />
          </div>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCelebrate}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#34A99D] to-[#458393] hover:from-[#34A99D] hover:to-[#1A3841] text-white font-black text-xs shadow-md hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#E5CB90]" />
              <span>✨ Celebrate & Refresh Pass</span>
            </motion.button>
          </div>
        </div>

        {/* Right Column: High-Res Physical Badge Card Preview */}
        <div className="lg:col-span-7 flex justify-center">
          <ThreeDCard className="w-full max-w-md group">
            <div
              id="citizen-pass-card"
              className="p-7 rounded-[36px] bg-gradient-to-br from-[#1A3841] via-[#244C58] to-[#12272D] text-[#FFF3C8] border-3 border-[#E5CB90] shadow-2xl space-y-5 relative overflow-hidden group-hover:border-[#34A99D] transition-all"
            >
              {/* Background watermark badge */}
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-[#FFF3C8]">
                <Shield className="w-56 h-56" />
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#E5CB90]/40 pb-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#34A99D] to-[#E5CB90] flex items-center justify-center text-[#1A3841] font-black shadow-md ring-2 ring-white/20">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-base tracking-tight text-white leading-none">
                      NyayaMitra Legal Shield
                    </h3>
                    <span className="text-[10px] text-[#E5CB90] font-bold tracking-wider uppercase mt-0.5 block">
                      Citizen Rights Pocket Pass
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#FFF3C8]/10 text-[#E5CB90] border border-[#E5CB90]/40 font-bold">
                  {langConfig.nativeName}
                </span>
              </div>

              {/* Citizen Credentials Bar */}
              <div className="grid grid-cols-2 gap-2 bg-[#FFF3C8]/10 p-3.5 rounded-3xl border border-[#E5CB90]/30 text-xs relative z-10 backdrop-blur-xs">
                <div>
                  <span className="text-[10px] text-[#E5CB90] block uppercase font-bold">Citizen Name</span>
                  <span className="font-black text-white text-sm truncate block">{userName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#E5CB90] block uppercase font-bold">Emergency Contact</span>
                  <span className="font-bold text-[#34A99D] truncate block">{emergencyContact}</span>
                </div>
              </div>

              {/* 5 Core Constitutional Bullet Shield */}
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] uppercase font-black tracking-wider text-[#E5CB90] block">
                  Mandatory Legal Safeguards (Constitution & CrPC/BNSS):
                </span>
                <div className="space-y-2 text-[11px] leading-tight">
                  {legalSafeguards.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[#FFF3C8]/90 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#34A99D]/30 flex items-center justify-center text-[#34A99D] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>
                        <strong className="text-white font-bold">{item.title}:</strong> {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#E5CB90]/40 flex items-center justify-between text-[10px] text-[#E5CB90] font-mono relative z-10">
                <span>National SOS: 112 • Legal Aid: 15100</span>
                <span>Location: {userCity}</span>
              </div>

            </div>
          </ThreeDCard>
        </div>

      </div>
    </div>
  );
};
