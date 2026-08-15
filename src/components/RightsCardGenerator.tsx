import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Download, Printer, Share2, Sparkles, CheckCircle2, User, Phone, MapPin, QrCode } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import confetti from 'canvas-confetti';

interface RightsCardGeneratorProps {
  language: 'en' | 'hi' | 'hinglish';
}

export const RightsCardGenerator: React.FC<RightsCardGeneratorProps> = ({ language }) => {
  const [userName, setUserName] = useState('Indian Citizen');
  const [emergencyContact, setEmergencyContact] = useState('+91 98765 43210');
  const [userCity, setUserCity] = useState('New Delhi, India');
  const [selectedProfile, setSelectedProfile] = useState<'all' | 'traffic' | 'women' | 'student'>('all');
  const [isCopied, setIsCopied] = useState(false);

  const handleCelebrate = () => {
    confetti({
      particleCount: 60,
      spread: 70,
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#34A99D] text-white">
              Digital Pocket Pass
            </span>
            <span className="text-xs font-bold text-[#458393]">
              Carry on your phone or print for wallet
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841] tracking-tight">
            {language === 'hi' ? 'नागरिक अधिकार पॉकेट पास' : 'Citizen Legal Rights Pocket Pass Generator'}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            Generate a personalized digital emergency legal reference card with key Indian constitutional protections.
          </p>
        </div>

        {/* Print / Download buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              handleCelebrate();
              handlePrint();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#458393] hover:bg-[#34A99D] text-[#FFF3C8] font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#E5CB90]" />
            <span>Print Pass</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFF3C8] hover:bg-[#E5CB90] border border-[#E5CB90] text-[#1A3841] font-bold text-xs shadow-xs transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#458393]" />
            <span>{isCopied ? 'Link Copied!' : 'Share Pass'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Customization Controls */}
        <div className="lg:col-span-5 space-y-4 p-6 rounded-3xl bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-md">
          <h3 className="text-lg font-extrabold text-[#1A3841] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#34A99D]" />
            <span>Customize Your Pass</span>
          </h3>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-[#1A3841] block mb-1">
                Citizen Name / Alias
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-[#E5CB90] font-semibold text-sm text-[#1A3841] focus:outline-hidden focus:border-[#34A99D]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#1A3841] block mb-1">
                Emergency Relative / Lawyer Contact
              </label>
              <input
                type="text"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-[#E5CB90] font-semibold text-sm text-[#1A3841] focus:outline-hidden focus:border-[#34A99D]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#1A3841] block mb-1">
                City / State
              </label>
              <input
                type="text"
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-[#E5CB90] font-semibold text-sm text-[#1A3841] focus:outline-hidden focus:border-[#34A99D]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#1A3841] block mb-1">
                Key Shield Focus Profile
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'all', label: 'Universal (All Rights)' },
                  { id: 'traffic', label: 'Daily Commuter (Traffic)' },
                  { id: 'women', label: 'Women Shield (Sec 46)' },
                  { id: 'student', label: 'Student / Youth (Digital)' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProfile(p.id as any)}
                    className={`p-2 rounded-xl text-xs font-bold text-left transition-all border ${
                      selectedProfile === p.id
                        ? 'bg-[#458393] text-[#FFF3C8] border-[#34A99D]'
                        : 'bg-white text-[#1A3841] border-[#E5CB90] hover:bg-[#E5CB90]/20'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Pocket Pass Preview */}
        <div className="lg:col-span-7 flex justify-center">
          <ThreeDCard intensity={20} className="w-full max-w-md">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-[#458393] via-[#34A99D] to-[#1A3841] text-[#FFF3C8] shadow-2xl border-3 border-[#E5CB90] relative overflow-hidden space-y-4">
              
              {/* Card Holographic Top Bar */}
              <div className="flex items-center justify-between border-b border-[#E5CB90]/40 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E5CB90] text-[#1A3841] flex items-center justify-center font-black">
                    <Shield className="w-5 h-5 text-[#1A3841]" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm tracking-wide uppercase text-[#FFF3C8] block">
                      CITIZEN LEGAL PASS
                    </span>
                    <span className="text-[10px] text-[#E5CB90] font-semibold">
                      Republic of India • Constitutional Shield
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#E5CB90] text-[#1A3841]">
                  VERIFIED LAW
                </span>
              </div>

              {/* Citizen Identity Box */}
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#E5CB90]/30 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#E5CB90] font-bold">Bearer:</span>
                  <span className="text-sm font-extrabold text-white">{userName || 'Indian Citizen'}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#E5CB90]/80">Emergency Contact:</span>
                  <span className="font-bold text-[#FFF3C8]">{emergencyContact}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#E5CB90]/80">Jurisdiction:</span>
                  <span className="font-bold text-[#FFF3C8]">{userCity}</span>
                </div>
              </div>

              {/* Core Statutory Rights Summary on Pass */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5CB90] block">
                  Mandatory Legal Shields (Show to Officer):
                </span>
                
                <div className="space-y-1.5 text-xs text-white font-medium">
                  <div className="p-2 rounded-xl bg-black/20 border border-white/10 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E5CB90] shrink-0 mt-0.5" />
                    <span><strong>Article 21 & 22:</strong> Protection against arbitrary arrest, right to grounds of arrest, and right to consult legal counsel.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/20 border border-white/10 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E5CB90] shrink-0 mt-0.5" />
                    <span><strong>D.K. Basu Directives:</strong> Mandatory visible name tag, written Arrest Memo with witness, and 24-hr magistrate presentation.</span>
                  </div>
                  {selectedProfile === 'women' ? (
                    <div className="p-2 rounded-xl bg-black/20 border border-white/10 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5CB90] shrink-0 mt-0.5" />
                      <span><strong>Sec 46(4) CrPC:</strong> No woman can be arrested between sunset and sunrise without a Judicial Magistrate order.</span>
                    </div>
                  ) : (
                    <div className="p-2 rounded-xl bg-black/20 border border-white/10 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5CB90] shrink-0 mt-0.5" />
                      <span><strong>Motor Vehicles Act:</strong> Police cannot snatch keys. Digital docs on DigiLocker are 100% legal (Rule 139).</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer with Emergency Dialers */}
              <div className="pt-3 border-t border-[#E5CB90]/40 flex items-center justify-between text-xs font-bold">
                <div>
                  <span className="text-[#E5CB90] block text-[10px]">SOS Police Emergency:</span>
                  <span className="text-base font-black text-white">112 / 15100</span>
                </div>
                <div className="text-right">
                  <span className="text-[#E5CB90] block text-[10px]">Women Helpline:</span>
                  <span className="text-sm font-black text-white">1091</span>
                </div>
              </div>

            </div>
          </ThreeDCard>
        </div>

      </div>
    </div>
  );
};
