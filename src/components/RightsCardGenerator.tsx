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

  const legalSafeguardsMap: Record<SupportedLanguage, Array<{ title: string; desc: string }>> = {
    en: [
      { title: 'Article 21 & Privacy', desc: 'No random search of private phones without formal magistrate search warrant.' },
      { title: 'D.K. Basu Memo (Sec 41B)', desc: 'Mandatory written arrest memo on the spot with witness signature + 24hr magistrate rule.' },
      { title: 'Rule 139 MVA DigiLocker', desc: 'Digital DL & RC on DigiLocker/mParivahan are 100% legal; keys cannot be snatched.' },
      { title: 'Zero FIR (Lalita Kumari)', desc: 'Any police station must register Zero FIR for cognizable offences regardless of area.' },
      { title: 'Sunset Protection (Sec 46(4))', desc: 'No woman can be arrested after sunset without prior Judicial Magistrate written order.' },
    ],
    hi: [
      { title: 'अनुच्छेद 21 व फोन निजता', desc: 'बिना मजिस्ट्रेट वारंट के फोन या व्हाट्सएप की मनमानी तलाशी अवैध है।' },
      { title: 'डी.के. बसु मेमो (धारा 41B)', desc: 'गिरफ्तारी के समय लिखित अरेस्ट मेमो और गवाह के हस्ताक्षर अनिवार्य हैं।' },
      { title: 'नियम 139 MVA डिजिलॉकर', desc: 'डिजिलॉकर/mParivahan में डिजिटल DL और RC पूर्णतः वैध हैं; चाबी निकालना गैरकानूनी है।' },
      { title: 'जीरो एफआईआर (ललिता कुमारी)', desc: 'गंभीर अपराध में किसी भी थाने में तुरंत जीरो FIR दर्ज कराना अनिवार्य है।' },
      { title: 'महिला सुरक्षा (धारा 46(4))', desc: 'सूर्यास्त के बाद और सूर्योदय से पहले महिला को न्यायिक मजिस्ट्रेट के बिना गिरफ्तार नहीं किया जा सकता।' },
    ],
    te: [
      { title: 'ఆర్టికల్ 21 & ఫోన్ గోప్యత', desc: 'మేజిస్ట్రేట్ వారెంట్ లేకుండా వ్యక్తిగత మొబైల్ ఫోన్లు లేదా వాట్సాప్ తనిఖీ చేయడం చట్టవిరుద్ధం.' },
      { title: 'డి.కె. బసు మెమో (సెక్షన్ 41B)', desc: 'అరెస్ట్ సమయంలో తప్పనిసరిగా సాక్షి సంతకంతో కూడిన లిఖితపూర్వక అరెస్ట్ మెమో ఇవ్వాలి.' },
      { title: 'రూల్ 139 MVA డిజిలాకర్', desc: 'డిజిలాకర్/mParivahan లోని డిజిటల్ DL & RC 100% చెల్లుబాటు అవుతాయి; కీ లాక్కోవడం నిషేధం.' },
      { title: 'జీరో ఎఫ్.ఐ.ఆర్ (లలితా కుమారి)', desc: 'పరిధితో సంబంధం లేకుండా ఏ పోలీస్ స్టేషన్‌లోనైనా జీరో ఎఫ్.ఐ.ఆర్ నమోదు చేయాలి.' },
      { title: 'మహిళా రక్షణ (సెక్షన్ 46(4))', desc: 'సూర్యాస్తమయం తర్వాత మరియు సూర్యోదయానికి ముందు మహిళలను అరెస్ట్ చేయకూడదు.' },
    ],
    ta: [
      { title: 'பிரிவு 21 & போன் தனியுரிமை', desc: 'நீதிமன்ற வாரண்ட் இன்றி உங்கள் மொபைல் போனை பரிசோதிக்க போலீசுக்கு அதிகாரம் இல்லை.' },
      { title: 'டி.கே. பாசு மெமோ (பிரிவு 41B)', desc: 'கைது செய்யும்போது சாட்சி கையொப்பத்துடன் கூடிய கைது குறிப்பாணை வழங்குவது கட்டாயம்.' },
      { title: 'விதி 139 MVA டிஜிலாக்கர்', desc: 'டிஜிலாக்கர்/mParivahan டிஜிட்டல் ஆவணங்கள் செல்லுபடியாகும்; சாவியை பறிக்க முடியாது.' },
      { title: 'ஜீரோ எஃப்.ஐ.ஆர் (லலிதா குமாரி)', desc: 'எல்லை பாராமல் எந்த காவல் நிலையத்திலும் ஜீரோ எஃப்.ஐ.ஆர் பதிவு செய்யப்பட வேண்டும்.' },
      { title: 'பெண்கள் பாதுகாப்பு (பிரிவு 46(4))', desc: 'சூரிய அஸ்தமனத்திற்குப் பிறகு மாஜிஸ்திரேட் உத்தரவின்றி பெண்களை கைது செய்ய முடியாது.' },
    ],
    bn: [
      { title: 'ধারা ২১ ও ফোন গোপনীয়তা', desc: 'ম্যাজিস্ট্রেটের ওয়ারেন্ট ছাড়া মোবাইল ফোন বা চ্যাট তল্লাশি করা সম্পূর্ণ বেআইনি।' },
      { title: 'ডি.কে. বসু মেমো (ধারা ৪১B)', desc: 'গ্রেপ্তারের সময় সাক্ষীর স্বাক্ষরসহ লিখিত অ্যারেস্ট মেমো দেওয়া বাধ্যতামূলক।' },
      { title: 'নিয়ম ১৩৯ MVA ডিজিলকার', desc: 'ডিজিলকার/mParivahan এর নথি বৈধ; গাড়ির চাবি ছিনিয়ে নেওয়া বেআইনি।' },
      { title: 'জিরো এফআইআর (ললিতা কুমারী)', desc: 'এলাকা নির্বিশেষে যেকোনো থানায় তাৎক্ষণিক জিরো এফআইআর দায়ের করতে হবে।' },
      { title: 'নারী সুরক্ষা (ধারা ৪৬(৪))', desc: 'সূর্যাস্তের পর এবং সূর্যোদয়ের পূর্বে ম্যাজিস্ট্রেটের আদেশ ছাড়া নারীকে গ্রেপ্তার করা যাবে না।' },
    ],
    mr: [
      { title: 'कलम २१ व फोन गोपनीयता', desc: 'मॅजिस्ट्रेट वॉरंटशिवाय मोबाईल फोन किंवा चॅट तपासणे बेकायदेशीर आहे.' },
      { title: 'डी.के. बासू मेमो (कलम ४१B)', desc: 'अटकेच्या वेळी साक्षीदाराच्या स्वाक्षरीसह लेखी अरेस्ट मेमो देणे बंधनकारक आहे.' },
      { title: 'नियम १३९ MVA डिजिलॉकर', desc: 'डिजिलॉकर/mParivahan मधील कागदपत्रे १००% वैध आहेत; गाडीची चावी काढता येत नाही.' },
      { title: 'झिरो एफआयआर (ललिता कुमारी)', desc: 'हद्दीची अट न ठेवता कोणत्याही पोलीस ठाण्यात झिरो एफआयआर नोंदवणे बंधनकारक आहे.' },
      { title: 'महिला संरक्षण (कलम ४६(४))', desc: 'सूर्यास्तानंतर आणि सूर्योदयापूर्वी महिलेला न्यायालयीन आदेशाशिवाय अटक करता येत नाही.' },
    ],
    gu: [
      { title: 'કલમ ૨૧ અને ફોન પ્રાઈવસી', desc: 'મેજિસ્ટ્રેટ વોરંટ વિના મોબાઈલ ફોન કે વોટ્સએપ ચેક કરવું ગેરકાયદેસર છે.' },
      { title: 'ડી.કે. બસુ મેમો (કલમ ૪૧B)', desc: 'ધરપકડ સમયે સાક્ષીની સહી સાથે લિખિત અરેસ્ટ મેમો આપવો ફરજિયાત છે.' },
      { title: 'નિયમ ૧૩૯ MVA ડિઝિલૉકર', desc: 'ડિઝિલૉકર/mParivahan ના દસ્તાવેજો માન્ય છે; ચાવી ઝૂંટવી શકાતી નથી.' },
      { title: 'ઝીરો એફઆઈઆર (લલિતા કુમારી)', desc: 'વિસ્તાર ધ્યાનમાં લીધા વિના કોઈપણ પોલીસ સ્ટેશને ઝીરો FIR નોંધવી ફરજિયાત છે.' },
      { title: 'મહિલા સુરક્ષા (કલમ ૪૬(૪))', desc: 'સૂર્યાસ્ત પછી મહિલાને ન્યાયિક મેજિસ્ટ્રેટના લેખિત આદેશ વિના ધરપકડ કરી શકાતી નથી.' },
    ],
    kn: [
      { title: 'ಕಲಮು 21 & ಫೋನ್ ಗೌಪ್ಯತೆ', desc: 'ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ವಾರಂಟ್ ಇಲ್ಲದೆ ಮೊಬೈಲ್ ಫೋನ್ ಪರಿಶೀಲಿಸುವುದು ಕಾನೂನುಬಾಹಿರ.' },
      { title: 'ಡಿ.ಕೆ. ಬಸು ಮೆಮೊ (ಸೆಕ್ಷನ್ 41B)', desc: 'ಬಂಧನದ ಸಮಯದಲ್ಲಿ ಸಾಕ್ಷಿದಾರರ ಸಹಿಯೊಂದಿಗೆ ಲಿಖಿತ ಅರೆಸ್ಟ್ ಮೆಮೊ ನೀಡುವುದು ಕಡ್ಡಾಯ.' },
      { title: 'ನಿಯಮ 139 MVA ಡಿಜಿಲಾಕರ್', desc: 'ಡಿಜಿಲಾಕರ್/mParivahan ನಲ್ಲಿನ ದಾಖಲೆಗಳು ಮಾನ್ಯವಾಗಿವೆ; ಕೀಲಿ ಕಸಿದುಕೊಳ್ಳುವಂತಿಲ್ಲ.' },
      { title: 'ಝೀರೋ ಎಫ್‌ಐಆರ್ (ಲಲಿತಾ ಕುಮಾರಿ)', desc: 'ವ್ಯಾಪ್ತಿಯನ್ನು ಲೆಕ್ಕಿಸದೆ ಯಾವುದೇ ಠಾಣೆಯಲ್ಲಿ ಝೀರೋ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಬೇಕು.' },
      { title: 'ಮಹಿಳಾ ರಕ್ಷಣೆ (ಸೆಕ್ಷನ್ 46(4))', desc: 'ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಮಹಿಳೆಯನ್ನು ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ಅನುಮತಿಯಿಲ್ಲದೆ ಬಂಧಿಸುವಂತಿಲ್ಲ.' },
    ],
    ml: [
      { title: 'ആർട്ടിക്കിൾ 21 & ഫോൺ സ്വകാര്യത', desc: 'മജിസ്‌ട്രേറ്റ് വാറന്റില്ലാതെ മൊബൈൽ ഫോൺ പരിശോധിക്കുന്നത് നിയമവിരുദ്ധമാണ്.' },
      { title: 'ഡി.കെ. ബസു മെമ്മോ (വകുപ്പ് 41B)', desc: 'അറസ്റ്റ് ചെയ്യുമ്പോൾ സാക്ഷിയുടെ ഒപ്പോടുകൂടിയ അറസ്റ്റ് മെമ്മോ നൽകണം.' },
      { title: 'ചട്ടം 139 MVA ഡിജിലോക്കർ', desc: 'ഡിജിലോക്കർ/mParivahan രേഖകൾ സാധുവാണ്; വാഹനം താക്കോൽ ഊരിയെടുക്കരുത്.' },
      { title: 'സീറോ എഫ്.ഐ.ആർ (ലളിത കുമാരി)', desc: 'പരിധി നോക്കാതെ ഏത് പോലീസ് സ്റ്റേഷനിലും സീറോ എഫ്.ഐ.ആർ രജിസ്റ്റർ ചെയ്യണം.' },
      { title: 'സ്ത്രീ സുരക്ഷ (വകുപ്പ് 46(4))', desc: 'സൂര്യാസ്തമയത്തിന് ശേഷം മജിസ്‌ട്രേറ്റ് അനുമതിയില്ലാതെ സ്ത്രീകളെ അറസ്റ്റ് ചെയ്യരുത്.' },
    ],
    pa: [
      { title: 'ਧਾਰਾ 21 ਅਤੇ ਫੋਨ ਪ੍ਰਾਈਵੇਸੀ', desc: 'ਮੈਜਿਸਟ੍ਰੇਟ ਵਾਰੰਟ ਤੋਂ ਬਿਨਾਂ ਫੋਨ ਜਾਂ ਵਟਸਐਪ ਚੈੱਕ ਕਰਨਾ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ।' },
      { title: 'ਡੀ.ਕੇ. ਬਾਸੂ ਮੈਮੋ (ਧਾਰਾ 41B)', desc: 'ਗ੍ਰਿਫ਼ਤਾਰੀ ਸਮੇਂ ਗਵਾਹ ਦੇ ਦਸਤਖ਼ਤਾਂ ਵਾਲਾ ਲਿਖਤੀ ਅਰੈਸਟ ਮੈਮੋ ਦੇਣਾ ਲਾਜ਼ਮੀ ਹੈ।' },
      { title: 'ਨਿਯਮ 139 MVA ਡਿਜੀਲੌਕਰ', desc: 'ਡਿਜੀਲੌਕਰ/mParivahan ਦੇ ਦਸਤਾਵੇਜ਼ ਜਾਇਜ਼ ਹਨ; ਚਾਬੀ ਖੋਹਣਾ ਮਨ੍ਹਾ ਹੈ।' },
      { title: 'ਜ਼ੀਰੋ ਐਫਆਈਆਰ (ਲਲਿਤਾ ਕੁਮਾਰੀ)', desc: 'ਹੱਦਬੰਦੀ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ ਕਿਸੇ ਵੀ ਥਾਣੇ \'ਚ ਜ਼ੀਰੋ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨੀ ਲਾਜ਼ਮੀ ਹੈ।' },
      { title: 'ਔਰਤ ਸੁਰੱਖਿਆ (ਧਾਰਾ 46(4))', desc: 'ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਬਾਅਦ ਮੈਜਿਸਟ੍ਰੇਟ ਦੇ ਹੁਕਮਾਂ ਤੋਂ ਬਿਨਾਂ ਔਰਤ ਨੂੰ ਗ੍ਰਿਫ਼ਤਾਰ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।' },
    ],
    hinglish: [
      { title: 'Article 21 & Phone Privacy', desc: 'Bina magistrate search warrant ke phone ya WhatsApp check karna illegal hai.' },
      { title: 'D.K. Basu Memo (Sec 41B)', desc: 'Arrest ke waqt spot par written arrest memo + witness sign compulsory hai.' },
      { title: 'Rule 139 MVA DigiLocker', desc: 'DigiLocker/mParivahan documents 100% legal hain; keys snatch nahi ho sakti.' },
      { title: 'Zero FIR (Lalita Kumari)', desc: 'Kisi bhi police station mein Zero FIR register karwana legally mandatory hai.' },
      { title: 'Sunset Protection (Sec 46(4))', desc: 'Sunset ke baad aur sunrise se pehle woman ko arrest nahi kiya ja sakta.' },
    ],
  };

  const legalSafeguards = legalSafeguardsMap[language] || legalSafeguardsMap.en;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#34A99D] text-white shadow-xs">
              {t.digitalPocketPassBadge}
            </span>
            <span className="text-xs font-bold text-[#458393] px-3 py-0.5 rounded-full bg-[#458393]/10">
              {t.walletCarryDesc}
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
            <span>{t.personalizePassTitle}</span>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-black text-[#1A3841]">{t.yourFullName}</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 rounded-full bg-white border-2 border-[#E5CB90] text-sm font-bold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D] px-4 shadow-2xs"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-black text-[#1A3841]">{t.emergencyContactLabel}</label>
            <input
              type="text"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              className="w-full p-3 rounded-full bg-white border-2 border-[#E5CB90] text-sm font-bold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D] px-4 shadow-2xs"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-black text-[#1A3841]">{t.cityStateLabel}</label>
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
              <span>{t.celebrateRefresh}</span>
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
                  <span className="text-[10px] text-[#E5CB90] block uppercase font-bold">{t.yourFullName.replace(':', '')}</span>
                  <span className="font-black text-white text-sm truncate block">{userName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#E5CB90] block uppercase font-bold">{t.emergencyContactLabel.replace(':', '')}</span>
                  <span className="font-bold text-[#34A99D] truncate block">{emergencyContact}</span>
                </div>
              </div>

              {/* 5 Core Constitutional Bullet Shield */}
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] uppercase font-black tracking-wider text-[#E5CB90] block">
                  {t.legalShield}
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
                <span>{t.cityStateLabel.replace(':', '')}: {userCity}</span>
              </div>

            </div>
          </ThreeDCard>
        </div>

      </div>
    </div>
  );
};
