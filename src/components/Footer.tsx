import React from 'react';
import { Shield, Scale, ExternalLink } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { getT } from '../data/translations';

interface FooterProps {
  language: SupportedLanguage;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = getT(language);

  return (
    <footer className="bg-[#1A3841] text-[#FFF3C8] mt-16 pt-12 pb-8 border-t-2 border-[#E5CB90]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#34A99D] flex items-center justify-center text-[#FFF3C8] shadow-xs">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-[#FFF3C8]">
                Nyaya<span className="text-[#34A99D]">Mitra</span> India
              </span>
            </div>
            <p className="text-xs text-[#E5CB90]/90 leading-relaxed font-medium max-w-md">
              A civic legal literacy initiative empowering Indian citizens with accurate statutory knowledge during traffic stops, arrests, house searches, and FIR registrations under the Constitution of India & BNSS / CrPC.
            </p>
          </div>

          {/* Col 2: Essential Helplines */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E5CB90]">
              National Helplines (24x7)
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FFF3C8]/80 font-semibold">
              <li>• National Emergency: <span className="text-[#E5CB90]">112</span></li>
              <li>• Women Helpline: <span className="text-[#E5CB90]">1091</span></li>
              <li>• Cyber Crime Helpline: <span className="text-[#E5CB90]">1930</span></li>
              <li>• NALSA Legal Aid: <span className="text-[#E5CB90]">15100</span></li>
              <li>• Childline Emergency: <span className="text-[#E5CB90]">1098</span></li>
            </ul>
          </div>

          {/* Col 3: Statutory References */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E5CB90]">
              Statutory Citations
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FFF3C8]/80 font-medium">
              <li>• Constitution of India (Arts 14, 19, 21, 22)</li>
              <li>• D.K. Basu v. State of WB (1997)</li>
              <li>• Lalita Kumari v. Govt of UP (2014)</li>
              <li>• K.S. Puttaswamy v. Union of India (2017)</li>
              <li>• Motor Vehicles Act & Rule 139 CMVR</li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-[#FFF3C8]/70 leading-relaxed space-y-1">
          <p className="font-bold text-[#E5CB90]">Legal Information Disclaimer:</p>
          <p>
            NyayaMitra is an informational educational platform and does not constitute formal attorney-client legal advice. In active criminal litigation or custodial emergencies, always contact a qualified legal advocate or the District Legal Services Authority (DLSA / NALSA Helpline 15100).
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#E5CB90]/70 pt-4 border-t border-white/10">
          <span>© {new Date().getFullYear()} NyayaMitra • Public Citizen Legal Literacy Initiative</span>
          <span className="mt-2 sm:mt-0 font-medium">
            Theme: Vintage Summer Sand & Jade Teal
          </span>
        </div>

      </div>
    </footer>
  );
};
