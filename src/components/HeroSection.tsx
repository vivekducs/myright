import React from 'react';
import { motion } from 'motion/react';
import { Shield, Car, ShieldAlert, FileText, Smartphone, UserCheck, Search, ArrowRight, Sparkles, Scale } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import { SupportedLanguage } from '../types';
import { getT } from '../data/translations';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectCategory: (category: string) => void;
  onSelectQuickSituation: (situationId: string) => void;
  language: SupportedLanguage;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectCategory,
  onSelectQuickSituation,
  language,
}) => {
  const t = getT(language);

  const quickActionsMap: Record<string, { label: string; sub: string }> = {
    'traffic-stopped': {
      label: language === 'hi' ? 'ट्रैफिक पुलिस ने रोका' :
             language === 'te' ? 'ట్రాఫిక్ పోలీసులు ఆపారా?' :
             language === 'ta' ? 'போக்குவரத்து காவலர் நிறுத்தினாரா?' :
             language === 'bn' ? 'ট্রাফিক পুলিশ আটকেছে?' :
             language === 'mr' ? 'ट्रॅफिक पोलिसांनी अडवले?' :
             language === 'gu' ? 'ટ્રાફિક પોલીસે રોક્યા?' :
             language === 'kn' ? 'ಟ್ರಾಫಿಕ್ ಪೊಲೀಸರು ತಡೆದಿದ್ದಾರಾ?' :
             language === 'ml' ? 'ട്രാഫിക് പോലീസ് തടഞ്ഞുവോ?' :
             language === 'pa' ? 'ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਨੇ ਰੋਕਿਆ?' :
             'Stopped by Traffic Police',
      sub: language === 'hi' ? 'चाबी, चालान और डिजिलॉकर' :
           language === 'te' ? 'కీ, చలాన్ & డిజిలాకర్ రూల్స్' :
           language === 'ta' ? 'சாவி, சலான் & டிஜிலாக்கர் விதிகள்' :
           'Keys, Challan & DigiLocker Rules',
    },
    'police-threatens-arrest': {
      label: language === 'hi' ? 'गिरफ्तारी या थाने की धमकी' :
             language === 'te' ? 'అరెస్ట్ లేదా నిర్బంధ బెదిరింపు' :
             language === 'ta' ? 'கைது அல்லது காவல் அச்சுறுத்தல்' :
             language === 'bn' ? 'গ্রেপ্তার বা আটক করার হুমকি' :
             language === 'mr' ? 'अटक किंवा कोठडीची धमकी' :
             language === 'gu' ? 'ધરપકડની ધમકી' :
             language === 'kn' ? 'ಬಂಧನದ ಬೆದರಿಕೆ' :
             language === 'ml' ? 'അറസ്റ്റ് ഭീഷണി' :
             language === 'pa' ? 'ਗ੍ਰਿਫ਼ਤਾਰੀ ਦੀ ਧਮਕੀ' :
             'Arrest or Detention Threat',
      sub: language === 'hi' ? 'डी.के. बसु मेमो व 24 घंटे का नियम' :
           language === 'te' ? 'డి.కె. బసు మెమో & 24 గంటల నియమం' :
           'D.K. Basu Memo & 24hr Rule',
    },
    'fir-refused': {
      label: language === 'hi' ? 'थाना FIR नहीं लिख रहा' :
             language === 'te' ? 'ఎఫ్.ఐ.ఆర్ నమోదు నిరాకరణ' :
             language === 'ta' ? 'எஃப்.ஐ.ஆர் பதிவு செய்ய மறுப்பு' :
             language === 'bn' ? 'এফআইআর নিতে অস্বীকার' :
             language === 'mr' ? 'एफआयआर नोंदवण्यास नकार' :
             language === 'gu' ? 'એફઆઈઆર નોંધવાનો ઇનકાર' :
             language === 'kn' ? 'ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಲು ನಿರಾಕರಣೆ' :
             language === 'ml' ? 'എഫ്.ഐ.ആർ നിരസിക്കൽ' :
             language === 'pa' ? 'ਐਫਆਈਆਰ ਦਰਜ ਨਾ ਕਰਨਾ' :
             'Police Refusing FIR',
      sub: language === 'hi' ? 'जीरो FIR व सुप्रीम कोर्ट आदेश' :
           language === 'te' ? 'జీరో ఎఫ్.ఐ.ఆర్ & సుప్రీం కోర్టు ఆదేశాలు' :
           'Zero FIR & Lalita Kumari Remedies',
    },
    'night-women-visit': {
      label: language === 'hi' ? 'महिलाओं व बच्चों के अधिकार' :
             language === 'te' ? 'మహిళలు & పిల్లల రక్షణ' :
             language === 'ta' ? 'பெண்கள் & குழந்தைகள் பாதுகாப்பு' :
             language === 'bn' ? 'নারী ও শিশু সুরক্ষা' :
             language === 'mr' ? 'महिला व बाल संरक्षण' :
             language === 'gu' ? 'મહિલા અને બાળ સુરક્ષા' :
             language === 'kn' ? 'ಮಹಿಳೆಯರು & ಮಕ್ಕಳ ರಕ್ಷಣೆ' :
             language === 'ml' ? 'സ്ത്രീ & ശിശു സംരക്ഷണം' :
             language === 'pa' ? 'ਔਰਤਾਂ ਤੇ ਬੱਚਿਆਂ ਦੇ ਅਧਿਕਾਰ' :
             'Women & Child Protections',
      sub: language === 'hi' ? 'सूर्यास्त के बाद गिरफ्तारी निषेध' :
           'No Sunset Arrest & Home Questioning',
    },
    'phone-check-naka': {
      label: language === 'hi' ? 'फोन व व्हाट्सएप चेकिंग' :
             language === 'te' ? 'ఫోన్ & వాట్సాప్ తనిఖీ' :
             language === 'ta' ? 'போன் & வாட்ஸ்அப் சோதனை' :
             language === 'bn' ? 'ফোন ও হোয়াটসঅ্যাপ তল্লাশি' :
             language === 'mr' ? 'फोन व व्हॉट्सॲप तपासणी' :
             language === 'gu' ? 'ફોન અને વોટ્સએપ ચેકિંગ' :
             language === 'kn' ? 'ಫೋನ್ & ವಾಟ್ಸಾಪ್ ತಪಾಸಣೆ' :
             language === 'ml' ? 'ഫോൺ & വാട്ട്‌സ്ആപ്പ് പരിശോധന' :
             language === 'pa' ? 'ਫੋਨ ਤੇ ਵਟਸਐਪ ਚੈਕਿੰਗ' :
             'Phone & WhatsApp Privacy',
      sub: language === 'hi' ? 'पुट्टास्वामी फैसला व डिजिटल निजता' :
           'Article 21 Digital Privacy Shield',
    },
  };

  const quickActions = [
    {
      id: 'traffic-stopped',
      label: quickActionsMap['traffic-stopped'].label,
      sub: quickActionsMap['traffic-stopped'].sub,
      icon: Car,
      category: 'traffic',
    },
    {
      id: 'police-threatens-arrest',
      label: quickActionsMap['police-threatens-arrest'].label,
      sub: quickActionsMap['police-threatens-arrest'].sub,
      icon: ShieldAlert,
      category: 'arrest',
    },
    {
      id: 'fir-refused',
      label: quickActionsMap['fir-refused'].label,
      sub: quickActionsMap['fir-refused'].sub,
      icon: FileText,
      category: 'fir',
    },
    {
      id: 'night-women-visit',
      label: quickActionsMap['night-women-visit'].label,
      sub: quickActionsMap['night-women-visit'].sub,
      icon: UserCheck,
      category: 'women_child',
    },
    {
      id: 'phone-check-naka',
      label: quickActionsMap['phone-check-naka'].label,
      sub: quickActionsMap['phone-check-naka'].sub,
      icon: Smartphone,
      category: 'phone_privacy',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#E5CB90]/60">
      {/* Decorative Vintage Summer Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E5CB90]/50 to-[#34A99D]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-80 h-80 rounded-full bg-gradient-to-tr from-[#34A99D]/30 to-[#458393]/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5CB90]/50 border border-[#E5CB90] shadow-xs text-xs font-bold text-[#1A3841] backdrop-blur-sm text-center"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#458393] shrink-0" />
            <span>{t.heroBadge}</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A3841] leading-tight"
          >
            {t.heroTitle} <span className="text-[#34A99D] underline decoration-[#E5CB90] decoration-wavy">{t.heroTitleHighlight}</span>
          </motion.h1>

          <p className="text-sm sm:text-lg text-[#458393] max-w-2xl mx-auto font-medium leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Quick Search Bar */}
          <div className="max-w-2xl mx-auto pt-2">
            <div className="relative flex items-center bg-[#FFF3C8] rounded-2xl border-2 border-[#E5CB90] shadow-md focus-within:border-[#34A99D] transition-all p-1.5">
              <Search className="w-5 h-5 text-[#458393] ml-3 mr-2 shrink-0" />
              <input
                id="hero-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-transparent text-xs sm:text-base font-semibold text-[#1A3841] placeholder:text-[#458393]/70 focus:outline-hidden py-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 text-xs font-bold text-[#458393] hover:text-[#1A3841] cursor-pointer"
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
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A3841]">
                {t.quickSituationsHeading}
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
                    className="h-full p-4 rounded-2xl bg-gradient-to-b from-[#FFF3C8] to-[#E5CB90]/40 border border-[#E5CB90] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
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
                      <span>View Rights</span>
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
