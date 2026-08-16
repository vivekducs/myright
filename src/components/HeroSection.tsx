import React from 'react';
import { motion } from 'motion/react';
import { Shield, Car, ShieldAlert, FileText, Smartphone, UserCheck, Search, ArrowRight, Sparkles, Scale, Compass, CheckCircle2 } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import { SupportedLanguage } from '../types';
import { getT } from '../data/translations';
import { AudioTranscriber } from './AudioTranscriber';

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

  const quickActionsMap: Record<string, Record<SupportedLanguage, { label: string; sub: string }>> = {
    'traffic-stopped': {
      en: { label: 'Stopped by Traffic Police', sub: 'Keys, Challan & DigiLocker Rules' },
      hi: { label: 'ट्रैफिक पुलिस ने रोका', sub: 'चाबी, चालान और डिजिलॉकर नियम' },
      te: { label: 'ట్రాఫిక్ పోలీసులు ఆపారా?', sub: 'కీ, చలాన్ & డిజిలాకర్ నిబంధనలు' },
      ta: { label: 'போக்குவரத்து காவலர் நிறுத்தினாரா?', sub: 'சாவி, சலான் & டிஜிலாக்கர் விதிகள்' },
      bn: { label: 'ট্রাফিক পুলিশ আটকেছে?', sub: 'চাবি, চালান ও ডিজিলকার নিয়ম' },
      mr: { label: 'ट्रॅफिक पोलिसांनी अडवले?', sub: 'चावी, चलन व डिजिलॉकर नियम' },
      gu: { label: 'ટ્રાફિક પોલીસે રોક્યા?', sub: 'ચાવી, મેમો અને ડિઝિલૉકર નિયમો' },
      kn: { label: 'ಟ್ರಾಫಿಕ್ ಪೊಲೀಸರು ತಡೆದಿದ್ದಾರಾ?', sub: 'ಕೀಲಿ, ಚಲನ್ ಮತ್ತು ಡಿಜಿಲಾಕರ್ ನಿಯಮಗಳು' },
      ml: { label: 'ട്രാഫിക് പോലീസ് തടഞ്ഞുവോ?', sub: 'താക്കോൽ, ചലാൻ, ഡിജിലോക്കർ നിയമങ്ങൾ' },
      pa: { label: 'ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਨੇ ਰੋਕਿਆ?', sub: 'ਚਾਬੀ, ਚਲਾਨ ਤੇ ਡਿਜੀਲੌਕਰ ਨਿਯਮ' },
      hinglish: { label: 'Traffic Police ne Roka?', sub: 'Key snatching, Challan & DigiLocker' },
    },
    'police-threatens-arrest': {
      en: { label: 'Arrest or Detention Threat', sub: 'D.K. Basu Memo & 24hr Rule' },
      hi: { label: 'गिरफ्तारी या थाने की धमकी', sub: 'डी.के. बसु मेमो व 24 घंटे का नियम' },
      te: { label: 'అరెస్ట్ లేదా నిర్బంధ బెదిరింపు', sub: 'డి.కె. బసు మెమో & 24 గంటల నియమం' },
      ta: { label: 'கைது அல்லது காவல் அச்சுறுத்தல்', sub: 'டி.கே. பாசு மெமோ & 24 மணி நேர விதி' },
      bn: { label: 'গ্রেপ্তার বা আটক করার হুমকি', sub: 'ডি.কে. বসু মেমো ও ২৪ ঘণ্টার নিয়ম' },
      mr: { label: 'अटक किंवा कोठडीची धमकी', sub: 'डी.के. बासू मेमो व २४ तासांचा नियम' },
      gu: { label: 'ધરપકડ અથવા કસ્ટડીની ધમકી', sub: 'ડી.કે. બસુ મેમો અને ૨૪ કલાકનો નિયમ' },
      kn: { label: 'ಬಂಧನ ಅಥವಾ ಕಸ್ಟಡಿ ಬೆದರಿಕೆ', sub: 'ಡಿ.ಕೆ. ಬಸು ಮೆಮೊ & 24 ಗಂಟೆಗಳ ನಿಯಮ' },
      ml: { label: 'അറസ്റ്റ് അല്ലെങ്കിൽ തടങ്കൽ ഭീഷണി', sub: 'ഡി.കെ. ബസു മെമ്മോ & 24 മണിക്കൂർ നിയമം' },
      pa: { label: 'ਗ੍ਰਿਫ਼ਤਾਰੀ ਜਾਂ ਹਿਰਾਸਤ ਦੀ ਧਮਕੀ', sub: 'ਡੀ.ਕੇ. ਬਾਸੂ ਮੈਮੋ ਤੇ 24 ਘੰਟੇ ਦਾ ਨਿਯਮ' },
      hinglish: { label: 'Arrest ya Thaney ki Dhamki?', sub: 'D.K. Basu Memo & 24 Hour Magistrate Rule' },
    },
    'fir-refused': {
      en: { label: 'Police Refusing FIR', sub: 'Zero FIR & Lalita Kumari Remedies' },
      hi: { label: 'थाना FIR नहीं लिख रहा', sub: 'जीरो FIR व सुप्रीम कोर्ट आदेश' },
      te: { label: 'ఎఫ్.ఐ.ఆర్ నమోదు నిರಾకరణ', sub: 'జీరో ఎఫ్.ఐ.ఆర్ & సుప్రీం కోర్టు ఆదేశాలు' },
      ta: { label: 'எஃப்.ஐ.ஆர் பதிவு செய்ய மறுப்பு', sub: 'ஜீரோ எஃப்.ஐ.ஆர் & உச்ச நீதிமன்ற தீர்ப்பு' },
      bn: { label: 'এফআইআর নিতে অস্বীকার', sub: 'জিরো এফআইআর ও সুপ্রিম কোর্টের নির্দেশ' },
      mr: { label: 'एफआयआर नोंदवण्यास नकार', sub: 'झिरो एफआयआर व सर्वोच्च न्यायालय आदेश' },
      gu: { label: 'એફઆઈઆર નોંધવાનો ઇનકાર', sub: 'ઝીરો એફઆઈઆર અને સુપ્રીમ કોર્ટ આદેશ' },
      kn: { label: 'ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಲು ನಿರಾಕರಣೆ', sub: 'ಝೀರೋ ಎಫ್‌ಐಆರ್ & ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಆದೇಶ' },
      ml: { label: 'എഫ്.ഐ.ആർ രജിസ്ട്രേഷൻ നിരസിക്കൽ', sub: 'സീറോ എഫ്.ഐ.ആർ & സുപ്രീം കോടതി ഉത്തരവ്' },
      pa: { label: 'ਐਫਆਈਆਰ ਦਰਜ ਕਰਨ ਤੋਂ ਇਨਕਾਰ', sub: 'ਜ਼ੀਰੋ ਐਫਆਈਆਰ ਤੇ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਹੁਕਮ' },
      hinglish: { label: 'Thana FIR nahi likh raha?', sub: 'Zero FIR & Lalita Kumari Supreme Court Judgment' },
    },
    'night-women-visit': {
      en: { label: 'Women & Child Protections', sub: 'No Sunset Arrest & Home Questioning' },
      hi: { label: 'महिलाओं व बच्चों के अधिकार', sub: 'सूर्यास्त के बाद गिरफ्तारी निषेध' },
      te: { label: 'మహిళలు & పిల్లల రక్షణ', sub: 'సూర్యాస్తమయం తర్వాత అరెస్ట్ నిಷేధం' },
      ta: { label: 'பெண்கள் & குழந்தைகள் பாதுகாப்பு', sub: 'சூரிய அஸ்தமனத்திற்குப் பின் கைது தடை' },
      bn: { label: 'নারী ও শিশু সুরক্ষা', sub: 'সূর্যাস্তের পর গ্রেপ্তার নিষিদ্ধ' },
      mr: { label: 'महिला व बाल संरक्षण', sub: 'सूर्यास्तानंतर अटकेस बंदी' },
      gu: { label: 'મહિલા અને બાળ સુરક્ષા', sub: 'સૂર્યાસ્ત પછી ધરપકડ પર પ્રતિબંધ' },
      kn: { label: 'ಮಹಿಳೆಯರು & ಮಕ್ಕಳ ರಕ್ಷಣೆ', sub: 'ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಬಂಧನ ನಿಷೇಧ' },
      ml: { label: 'സ്ത്രീ & ശിശു സംരക്ഷണം', sub: 'സൂര്യാസ്തമയത്തിന് ശേഷം അറസ്റ്റ് പാടില്ല' },
      pa: { label: 'ਔਰਤਾਂ ਤੇ ਬੱਚਿਆਂ ਦੇ ਅਧਿਕਾਰ', sub: 'ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਬਾਅਦ ਗ੍ਰਿਫ਼ਤਾਰੀ ਮਨਾਹੀ' },
      hinglish: { label: 'Women & Children Rights', sub: 'Sunset ke baad no arrest & ghar par questioning' },
    },
    'phone-check-naka': {
      en: { label: 'Phone & WhatsApp Privacy', sub: 'Article 21 Digital Privacy Shield' },
      hi: { label: 'फोन व व्हाट्सएप चेकिंग', sub: 'पुट्टास्वामी फैसला व डिजिटल निजता' },
      te: { label: 'ఫోన్ & వాట్సాప్ తనిఖీ', sub: 'ఆర్టికల్ 21 డిజిటಲ್ గోప್ಯత రక్షణ' },
      ta: { label: 'போன் & வாட்ஸ்அப் சோதனை', sub: 'பிரிவு 21 டிஜிட்டல் தனியுரிமை பாதுகாப்பு' },
      bn: { label: 'ফোন ও হোয়াটসঅ্যাপ তল্লাশি', sub: 'ধারা ২১ ডিজিটাল গোপনীয়তা সুরক্ষা' },
      mr: { label: 'फोन व व्हॉट्सॲप तपासणी', sub: 'कलम २१ डिजिटल गोपनीयता कवच' },
      gu: { label: 'ફોન અને વોટ્સએપ ચેકિંગ', sub: 'કલમ ૨૧ ડિજિટલ પ્રાઈવસી કવચ' },
      kn: { label: 'ಫೋನ್ & ವಾಟ್ಸಾಪ್ ತಪಾಸಣೆ', sub: 'ಕಲಮು 21 ಡಿಜಿಟಲ್ ಗೌಪ್ಯತಾ ರಕ್ಷಣೆ' },
      ml: { label: 'ഫോൺ & വാട്ട്‌സ്ആപ്പ് പരിശോധന', sub: 'ആർട്ടിക്കിൾ 21 ഡിജിറ്റൽ സ്വകാര്യത' },
      pa: { label: 'ਫੋਨ ਤੇ ਵਟਸਐਪ ਚੈਕਿੰਗ', sub: 'ਧਾਰਾ 21 ਡਿਜੀਟਲ ਪ੍ਰਾਈਵੇਸੀ ਸੁਰੱਖਿਆ' },
      hinglish: { label: 'Phone & WhatsApp Checking', sub: 'Article 21 & Puttaswamy Privacy Shield' },
    },
  };

  const getQuickAction = (key: string) => {
    const item = quickActionsMap[key];
    if (!item) return { label: key, sub: '' };
    return item[language] || item.en;
  };

  const quickActions = [
    {
      id: 'traffic-stopped',
      label: getQuickAction('traffic-stopped').label,
      sub: getQuickAction('traffic-stopped').sub,
      icon: Car,
      category: 'traffic',
    },
    {
      id: 'police-threatens-arrest',
      label: getQuickAction('police-threatens-arrest').label,
      sub: getQuickAction('police-threatens-arrest').sub,
      icon: ShieldAlert,
      category: 'arrest',
    },
    {
      id: 'fir-refused',
      label: getQuickAction('fir-refused').label,
      sub: getQuickAction('fir-refused').sub,
      icon: FileText,
      category: 'fir',
    },
    {
      id: 'night-women-visit',
      label: getQuickAction('night-women-visit').label,
      sub: getQuickAction('night-women-visit').sub,
      icon: UserCheck,
      category: 'women_child',
    },
    {
      id: 'phone-check-naka',
      label: getQuickAction('phone-check-naka').label,
      sub: getQuickAction('phone-check-naka').sub,
      icon: Smartphone,
      category: 'phone_privacy',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#E5CB90]/60">
      {/* Decorative Vintage Summer Circular Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E5CB90]/50 to-[#34A99D]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-80 h-80 rounded-full bg-gradient-to-tr from-[#34A99D]/30 to-[#458393]/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Floating Circular Badge */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E5CB90]/60 hover:bg-[#E5CB90]/90 border border-[#E5CB90] shadow-sm hover:shadow-md text-xs font-black text-[#1A3841] backdrop-blur-sm text-center transition-all cursor-default"
          >
            <div className="w-5 h-5 rounded-full bg-[#458393] flex items-center justify-center text-[#FFF3C8]">
              <Sparkles className="w-3 h-3 shrink-0" />
            </div>
            <span>{t.heroBadge}</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A3841] leading-tight"
          >
            {t.heroTitle} <span className="text-[#34A99D] underline decoration-[#E5CB90] decoration-wavy">{t.heroTitleHighlight}</span>
          </motion.h1>

          <p className="text-sm sm:text-lg text-[#458393] max-w-2xl mx-auto font-bold leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Quick Search Bar with Circular Rounded-Full Geometry */}
          <div className="max-w-2xl mx-auto pt-3">
            <div className="relative flex items-center bg-[#FFF3C8] rounded-full border-2 border-[#E5CB90] shadow-lg hover:shadow-xl focus-within:border-[#34A99D] focus-within:ring-4 focus-within:ring-[#34A99D]/20 transition-all p-2">
              <div className="w-10 h-10 rounded-full bg-[#34A99D]/15 flex items-center justify-center text-[#458393] ml-1 mr-3 shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <input
                id="hero-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-transparent text-xs sm:text-base font-bold text-[#1A3841] placeholder:text-[#458393]/70 focus:outline-hidden py-1.5"
              />
              <div className="flex items-center gap-1.5 mr-1">
                <AudioTranscriber
                  variant="inline"
                  onTranscribed={(transcript) => {
                    setSearchQuery(transcript);
                    onSelectCategory('all');
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-3 py-1 rounded-full bg-[#E5CB90]/60 hover:bg-[#E5CB90] text-xs font-black text-[#1A3841] cursor-pointer transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Situation Action Cards */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#34A99D]/20 flex items-center justify-center text-[#34A99D]">
                <Compass className="w-4 h-4" />
              </div>
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1A3841]">
                {t.quickSituationsHeading}
              </h2>
            </div>
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
                  className="cursor-pointer group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="h-full p-5 rounded-3xl bg-gradient-to-b from-[#FFF3C8] via-[#FFF3C8] to-[#E5CB90]/40 border-2 border-[#E5CB90] group-hover:border-[#34A99D] shadow-sm hover:shadow-2xl hover:shadow-[#34A99D]/15 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Circular Icon Container */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34A99D] to-[#458393] flex items-center justify-center text-[#FFF3C8] shadow-md mb-3.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ring-4 ring-[#FFF3C8]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-extrabold text-sm text-[#1A3841] group-hover:text-[#34A99D] leading-snug line-clamp-2 mb-1.5 transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-xs text-[#458393] font-semibold line-clamp-2">
                        {item.sub}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-[#E5CB90]/70 flex items-center justify-between text-xs font-black text-[#34A99D] group-hover:text-[#1A3841]">
                      <span>View Rights</span>
                      <div className="w-6 h-6 rounded-full bg-[#34A99D]/15 group-hover:bg-[#34A99D] group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
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
