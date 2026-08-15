import React from 'react';
import { motion } from 'motion/react';
import { Shield, Car, ShieldAlert, FileText, Smartphone, UserCheck, Search, ArrowRight, Sparkles, Scale } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectCategory: (category: string) => void;
  onSelectQuickSituation: (situationId: string) => void;
  language: 'en' | 'hi' | 'hinglish';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectCategory,
  onSelectQuickSituation,
  language,
}) => {
  const quickActions = [
    {
      id: 'traffic-stopped',
      label: language === 'hi' ? 'ट्रैफिक पुलिस ने रोका' : 'Stopped by Traffic Police',
      sub: language === 'hi' ? 'चाबी, चालान और कागजात नियम' : 'Keys, Challan & DigiLocker Rules',
      icon: Car,
      color: 'from-[#34A99D] to-[#458393]',
      accentBg: 'bg-[#34A99D]/15',
      category: 'traffic',
    },
    {
      id: 'police-threatens-arrest',
      label: language === 'hi' ? 'गिरफ्तारी या थाने की धमकी' : 'Arrest or Detention Threat',
      sub: language === 'hi' ? 'डी.के. बसु मेमो व 24 घंटे का नियम' : 'D.K. Basu Memo & 24hr Magistrate Rule',
      icon: ShieldAlert,
      color: 'from-[#458393] to-[#1A3841]',
      accentBg: 'bg-[#458393]/15',
      category: 'arrest',
    },
    {
      id: 'fir-refused',
      label: language === 'hi' ? 'थाना FIR नहीं लिख रहा' : 'Police Refusing to Register FIR',
      sub: language === 'hi' ? 'जीरो FIR व सुप्रीम कोर्ट आदेश' : 'Zero FIR & Lalita Kumari Remedies',
      icon: FileText,
      color: 'from-[#E5CB90] to-[#34A99D]',
      accentBg: 'bg-[#E5CB90]/25',
      category: 'fir',
    },
    {
      id: 'night-women-visit',
      label: language === 'hi' ? 'महिलाओं व बच्चों के अधिकार' : 'Women & Child Protections',
      sub: language === 'hi' ? 'सूर्यास्त के बाद गिरफ्तारी निषेध' : 'No Sunset Arrest & Home Questioning',
      icon: UserCheck,
      color: 'from-[#34A99D] to-[#E5CB90]',
      accentBg: 'bg-[#34A99D]/20',
      category: 'women_child',
    },
    {
      id: 'phone-check-naka',
      label: language === 'hi' ? 'फोन व व्हाट्सएप चेकिंग' : 'Phone & WhatsApp Privacy',
      sub: language === 'hi' ? 'पुट्टास्वामी फैसला व डिजिटल अधिकार' : 'Article 21 Digital Privacy Shield',
      icon: Smartphone,
      color: 'from-[#458393] to-[#34A99D]',
      accentBg: 'bg-[#458393]/20',
      category: 'phone_privacy',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#E5CB90]/60">
      {/* Decorative Vintage Summer Sunburst Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E5CB90]/50 to-[#34A99D]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-80 h-80 rounded-full bg-gradient-to-tr from-[#34A99D]/30 to-[#458393]/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5CB90]/50 border border-[#E5CB90] shadow-xs text-xs font-bold text-[#1A3841] backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#458393]" />
            <span>Updated with Bharatiya Nagarik Suraksha Sanhita (BNSS) & Landmark Supreme Court Rulings</span>
          </motion.div>
        </div>

        {/* Main Headline & Vibe */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A3841] leading-tight"
          >
            {language === 'hi' ? (
              <>
                भारतीय नागरिक एवं <span className="text-[#34A99D] underline decoration-[#E5CB90]">पुलिस अधिकार</span> गाइड
              </>
            ) : (
              <>
                Know Your <span className="text-[#34A99D] underline decoration-[#E5CB90] decoration-wavy">Police Rights</span> & Fundamental Shields
              </>
            )}
          </motion.h1>

          <p className="text-base sm:text-lg text-[#458393] max-w-2xl mx-auto font-medium leading-relaxed">
            {language === 'hi'
              ? 'ट्रैफिक चेकिंग, मनमानी गिरफ्तारी, घर की तलाशी या एफआईआर दर्ज कराने के दौरान अपने कानूनी अधिकारों को जानें और आत्मविश्वास से बात करें।'
              : 'Empowering Indian citizens with immediate, legally grounded guidance during traffic stops, unlawful detentions, FIR refusals, and home searches under the Constitution & BNSS/CrPC.'}
          </p>

          {/* Quick Search Bar */}
          <div className="max-w-2xl mx-auto pt-2">
            <div className="relative flex items-center bg-[#FFF3C8] rounded-2xl border-2 border-[#E5CB90] shadow-md focus-within:border-[#34A99D] transition-all p-1.5">
              <Search className="w-5 h-5 text-[#458393] ml-3 mr-2" />
              <input
                id="hero-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'hi'
                    ? 'खोजें: चाबी छीनना, जीरो एफआईआर, महिला अधिकार, डी.के. बसु, फोन चेकिंग...'
                    : 'Search situation: key snatching, zero FIR, sunset arrest, phone check, bail...'
                }
                className="w-full bg-transparent text-sm sm:text-base font-semibold text-[#1A3841] placeholder:text-[#458393]/70 focus:outline-hidden py-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 text-xs font-bold text-[#458393] hover:text-[#1A3841]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 3D Interactive Situation Action Cards */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#34A99D]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A3841]">
                {language === 'hi' ? 'तत्काल स्थिति चुनें (Quick Situations)' : 'Instant Situation Solver (Choose What Is Happening)'}
              </h2>
            </div>
            <span className="text-xs text-[#458393] font-medium hidden sm:inline">
              Interactive 3D Cards • Click to view step-by-step rights
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {quickActions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ThreeDCard
                  key={item.id}
                  id={`hero-card-${item.id}`}
                  onClick={() => {
                    onSelectQuickSituation(item.id);
                    onSelectCategory(item.category);
                  }}
                  className="cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="h-full p-4 rounded-2xl bg-gradient-to-b from-[#FFF3C8] to-[#E5CB90]/40 border border-[#E5CB90] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#34A99D] to-[#458393] flex items-center justify-center text-[#FFF3C8] shadow-xs mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-sm text-[#1A3841] leading-snug line-clamp-2 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-xs text-[#458393] font-medium line-clamp-2">
                        {item.sub}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#E5CB90]/60 flex items-center justify-between text-xs font-bold text-[#34A99D]">
                      <span>{language === 'hi' ? 'नियम देखें' : 'View Action'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                </ThreeDCard>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
