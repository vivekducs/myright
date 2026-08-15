import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bot, Send, Sparkles, AlertCircle, ShieldCheck, CheckCircle2, XCircle, MessageSquare, Scale, Loader2, Volume2, RefreshCw } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface AIAdvisorProps {
  language: SupportedLanguage;
}

interface AIResponse {
  summary?: string;
  advice?: string;
  whatToDoNow?: string[];
  whatNOTToDo?: string[];
  exactWordsToSay?: string;
  legalProvisions?: { law: string; explanation: string }[];
  legalArticles?: string[];
  officerObligations?: string;
  emergencyHelpline?: string;
  isUrgent?: boolean;
}

export const AIAdvisor: React.FC<AIAdvisorProps> = ({ language }) => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const t = getT(language);
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const presetsByLang: Record<SupportedLanguage, string[]> = {
    en: [
      'Police took my bike key and is demanding cash on the spot without e-challan',
      'Police asking me to unlock my phone and show WhatsApp chats at a naka',
      'Station officer refusing to register my theft complaint saying it is not their area',
      'Police arrived at my house late evening to question my sister',
      'Traffic crane towing my car while I am sitting inside the vehicle',
    ],
    hi: [
      'ट्रैफिक पुलिस ने बाइक की चाबी निकाल ली और बिना ई-चालान नकद मांग रहे हैं',
      'नाके पर पुलिस मेरा फोन अनलॉक करके व्हाट्सएप चैट दिखाने को कह रही है',
      'थानेदार चोरी की शिकायत दर्ज नहीं कर रहे और दूसरे थाने जाने को बोल रहे हैं',
      'शाम के बाद पुलिस मेरे घर मेरी बहन से पूछताछ करने आई है',
      'मैं कार के अंदर बैठा हूँ फिर भी क्रेन गाड़ी टो कर रही है',
    ],
    te: [
      'ట్రాఫిక్ పోలీసులు బైక్ కీ తీసుకుని నగదు డిమాండ్ చేస్తున్నారు',
      'నాకా వద్ద ఫోన్ అన్‌లాక్ చేసి వాట్సాప్ చాట్స్ చూపించమంటున్నారు',
      'స్టేషన్ ఆఫీసర్ పరిధి కాదని నా చోరీ ఫిర్యాదును నమోదు చేయట్లేదు',
      'రాత్రి సమయంలో మా సోదరిని విచారించడానికి పోలీసులు ఇంటికి వచ్చారు',
      'నేను కారులో కూర్చుని ఉండగానే క్రేన్ కారును లాగుతోంది',
    ],
    ta: [
      'போக்குவரத்து காவலர் சாவியை பிடுங்கி ரசீது இல்லாமல் பணம் கேட்கிறார்',
      'போலீஸ் சோதனையில் போனை திறந்து வாட்ஸ்அப் காட்டச் சொல்கிறார்கள்',
      'எல்லை இல்லை என்று கூறி எனது திருட்டு புகாரை காவல்நிலையம் மறுக்கிறது',
      'இரவு நேரத்தில் எனது சகோதரியை விசாரிக்க போலீசார் வீட்டிற்கு வந்துள்ளனர்',
      'நான் காருக்குள் இருக்கும் போதே காரை டோ செய்கிறார்கள்',
    ],
    bn: [
      'ট্রাফিক পুলিশ বাইকের চাবি নিয়ে রসিদ ছাড়া নগদ টাকা দাবি করছে',
      'পুলিশ চেকপোস্টে ফোন আনলক করে হোয়াটসঅ্যাপ চ্যাট দেখাতে বলছে',
      'থানার অফিসার এলাকা নেই বলে চুরির অভিযোগ নিতে অস্বীকার করছেন',
      'সন্ধ্যার পর পুলিশ বাড়িতে আমার বোনকে জিজ্ঞাসাবাদ করতে এসেছে',
      'আমি গাড়ির ভেতরে থাকা সত্ত্বেও ক্রেন গাড়ি টো করছে',
    ],
    mr: [
      'ट्रॅफिक पोलिसांनी बाईकची चावी काढून घेतली आणि पावतीशिवाय पैसे मागत आहेत',
      'नाकाबंदीवर पोलिस फोन अनलॉक करून व्हॉट्सॲप चॅट दाखवायला सांगत आहेत',
      'हद्द नाही म्हणून पोलिस तक्रार नोंदवून घेण्यास नकार देत आहेत',
      'संध्याकाळनंतर पोलिस घरी येऊन बहिणीची चौकशी करत आहेत',
      'मी गाडीत बसलेलो असताना क्रेन गाडी टो करत आहे',
    ],
    gu: [
      'ટ્રાફિક પોલીસે બાઇકની ચાવી કાઢી લીધી અને રોકડા માંગી રહ્યા છે',
      'નાકા પર પોલીસ ફોન અનલોક કરીને વોટ્સએપ જોવા માંગે છે',
      'વિસ્તાર નથી કહીને પોલીસ ફરિયાદ નોંધવાની ના પાડે છે',
      'સાંજે પોલીસ ઘરે આવીને બહેનની પૂછપરછ કરી રહી છે',
      'હું કારમાં બેઠો છું છતાં ક્રેન કાર ટો કરી રહી છે',
    ],
    kn: [
      'ಟ್ರಾಫಿಕ್ ಪೊಲೀಸರು ಬೈಕ್ ಕೀ ತೆಗೆದುಕೊಂಡು ರಶೀದಿ ಇಲ್ಲದೆ ಹಣ ಕೇಳುತ್ತಿದ್ದಾರೆ',
      'ಚೆಕ್‌ಪೋಸ್ಟ್‌ನಲ್ಲಿ ಫೋನ್ ಅನ್‌ಲಾಕ್ ಮಾಡಿ ವಾಟ್ಸಾಪ್ ತೋರಿಸಲು ಹೇಳುತ್ತಿದ್ದಾರೆ',
      'ವ್ಯಾಪ್ತಿಯಿಲ್ಲ ಎಂದು ಠಾಣಾಧಿಕಾರಿ ಕಳ್ಳತನ ದೂರು ದಾಖಲಿಸುತ್ತಿಲ್ಲ',
      'ರಾತ್ರಿ ವೇಳೆ ಪೊಲೀಸರು ಸಹೋದರಿಯನ್ನು ವಿಚಾರಿಸಲು ಮನೆಗೆ ಬಂದಿದ್ದಾರೆ',
      'ನಾನು ಕಾರಿನಲ್ಲಿ ಕುಳಿತಿರುವಾಗಲೇ ಕ್ರೇನ್ ಕಾರನ್ನು ಎಳೆಯುತ್ತಿದೆ',
    ],
    ml: [
      'ട്രാഫിക് പോലീസ് ബൈക്ക് താക്കോൽ എടുത്ത് രസീത് ഇല്ലാതെ പണം ആവശ്യപ്പെടുന്നു',
      'പോലീസ് ഫോൺ അൺലോക്ക് ചെയ്ത് വാട്ട്‌സ്ആപ്പ് കാണിക്കാൻ പറയുന്നു',
      'അതിർത്തി ഇല്ലെന്ന് പറഞ്ഞ് പോലീസ് പരാതി നിരസിക്കുന്നു',
      'രാത്രിയിൽ സഹോദരിയെ ചോദ്യം ചെയ്യാൻ പോലീസ് വീട്ടിലെത്തി',
      'ഞാൻ കാറിൽ ഇരിക്കുമ്പോൾ ക്രെയിൻ കാർ വലിച്ചുകൊണ്ടുപോകുന്നു',
    ],
    pa: [
      'ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਨੇ ਬਾਈਕ ਦੀ ਚਾਬੀ ਕੱਢ ਲਈ ਤੇ ਨਕਦ ਮੰਗ ਰਹੇ ਹਨ',
      'ਨਾਕੇ \'ਤੇ ਪੁਲਿਸ ਫੋਨ ਅਨਲਾਕ ਕਰਵਾ ਕੇ ਵਟਸਐਪ ਦੇਖਣਾ ਚਾਹੁੰਦੀ ਹੈ',
      'ਥਾਣੇ \'ਚ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ',
      'ਰਾਤ ਨੂੰ ਪੁਲਿਸ ਭੈਣ ਤੋਂ ਪੁੱਛਗਿੱਛ ਕਰਨ ਘਰ ਆਈ ਹੈ',
      'ਮੈਂ ਕਾਰ \'ਚ ਬੈਠਾ ਹਾਂ ਤੇ ਕ੍ਰੇਨ ਗੱਡੀ ਟੋ ਕਰ ਰਹੀ ਹੈ',
    ],
    hinglish: [
      'Traffic police ne bike key nikal li aur bina challan cash demand kar rahe hain',
      'Naka par police phone unlock karke WhatsApp chats dikhane bol rahi hai',
      'SHO complaint lene se mana kar raha hai bolkar yeh unka area nahi hai',
      'Evening ke baad police sister se questioning karne ghar aayi hai',
      'Main car ke andar baitha hu fir bhi vehicle tow kar rahe hain',
    ],
  };

  const presetScenarios = presetsByLang[language] || presetsByLang.en;

  const handleAsk = async (textToQuery?: string) => {
    const q = textToQuery || question;
    if (!q.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          situationCategory: 'Citizen Police Interaction',
          language,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      console.warn('Backend query notice, using structured fallback model:', err);
      setResponse({
        summary: language === 'hi'
          ? 'भारतीय संविधान और कानून के तहत पुलिस आपके साथ मनमानी नहीं कर सकती। शांत रहकर अपनी बात रखें।'
          : 'Under the Constitution of India and CrPC/BNSS, police officers are bound by strict statutory procedures and cannot act arbitrarily.',
        whatToDoNow: [
          language === 'hi' ? 'अधिकारी का नाम, पद व थाना विनम्रता से पूछें।' : 'Stay calm and politely ask for the officer’s name, rank, and station.',
          language === 'hi' ? 'अनुच्छेद 21 व 22 के तहत अपने अधिकारों का हवाला दें।' : 'State your constitutional protections firmly under Article 21 and Article 22.',
          language === 'hi' ? 'किसी भी जब्ती या जुर्माने की आधिकारिक सरकारी रसीद मांगें।' : 'Demand an official written receipt or e-challan for any seized item or fine.',
          language === 'hi' ? '112 या मुफ्त कानूनी सलाह (15100) पर कॉल करें।' : 'Call 112 or NALSA Free Legal Aid (15100) if you feel unsafe.'
        ],
        whatNOTToDo: [
          language === 'hi' ? 'बिना रसीद नकद या रिश्वत न दें।' : 'Do NOT offer informal bribes or cash without an official printed receipt.',
          language === 'hi' ? 'हाथापाई या बहस न करें।' : 'Do NOT physically resist or escalate tension.',
          language === 'hi' ? 'कोरे कागज पर दस्तखत न करें।' : 'Do NOT sign blank or unread documents.'
        ],
        exactWordsToSay: language === 'hi'
          ? '“सर, मैं कानून का पूरा सम्मान करता हूँ। कृपया मुझे सरकारी ई-चालान रसीद दें और कानूनी प्रक्रिया बताएं।”'
          : '“Officer, with due respect, I am fully cooperating with the law. Please provide the official receipt and state the legal grounds under the CrPC/BNSS.”',
        legalProvisions: [
          { law: 'Article 21 Constitution', explanation: 'Right to Life and Personal Liberty including privacy' },
          { law: 'Article 22 & D.K. Basu', explanation: 'Protection against arbitrary arrest and right to inform family' }
        ],
        emergencyHelpline: '112 / 15100',
        isUrgent: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSpeakSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (langConfig?.speechCode) {
        utterance.lang = langConfig.speechCode;
      }
      utterance.rate = 0.92;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#34A99D] to-[#458393] text-white shadow-2xs">
              Gemini 2.5 Flash Legal Copilot
            </span>
            <span className="text-xs font-bold text-[#458393]">
              Instant Constitutional & Police Advisory
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841] tracking-tight">
            {t.aiTitle}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            {t.aiSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#E5CB90]/40 px-3 py-1.5 rounded-xl border border-[#E5CB90] text-xs font-bold text-[#1A3841]">
          <span>{langConfig.flag}</span>
          <span>{langConfig.nativeName}</span>
        </div>
      </div>

      {/* Input Box & Preset Triggers */}
      <div className="p-6 rounded-3xl bg-gradient-to-b from-[#FFF3C8] via-[#FFF9E6] to-[#E5CB90]/30 border-2 border-[#E5CB90] shadow-lg space-y-4">
        <div>
          <label htmlFor="ai-situation-textarea" className="block text-xs font-extrabold uppercase tracking-wider text-[#1A3841] mb-2">
            Describe your situation (What is the officer saying or doing?):
          </label>
          <div className="relative">
            <textarea
              id="ai-situation-textarea"
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g. Traffic police took my keys and asking for spot fine, or police at door asking to search without warrant..."
              className="w-full p-4 rounded-2xl bg-white border-2 border-[#E5CB90] text-sm sm:text-base font-semibold text-[#1A3841] placeholder:text-[#458393]/60 focus:outline-hidden focus:border-[#34A99D] shadow-inner resize-none"
            />
          </div>
        </div>

        {/* Preset quick pills */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-extrabold uppercase text-[#458393] tracking-wider block">
            {t.quickSituationsHeading}
          </span>
          <div className="flex flex-wrap gap-2">
            {presetScenarios.map((sc, idx) => (
              <button
                key={idx}
                id={`preset-btn-${idx}`}
                onClick={() => {
                  setQuestion(sc);
                  handleAsk(sc);
                }}
                className="text-left text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/80 hover:bg-[#E5CB90]/50 border border-[#E5CB90] text-[#1A3841] transition-all cursor-pointer shadow-2xs hover:scale-[1.01]"
              >
                ⚡ {sc}
              </button>
            ))}
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-end pt-2">
          <button
            id="ask-ai-submit-btn"
            onClick={() => handleAsk()}
            disabled={loading || !question.trim()}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#34A99D] to-[#458393] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg disabled:opacity-50 transition-all cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{t.playingAudio}</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Get Legal Assessment</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Structured AI Advisory Output Card */}
      {response && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ThreeDCard className="w-full">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF3C8] border-2 border-[#34A99D] shadow-xl space-y-6">
              
              {/* Header Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5CB90]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#34A99D] to-[#458393] text-white flex items-center justify-center shadow-xs">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A3841]">
                      Legal Assessment & Action Plan
                    </h3>
                    <p className="text-xs text-[#458393] font-bold">
                      Constitution of India & Bharatiya Nagarik Suraksha Sanhita (BNSS)
                    </p>
                  </div>
                </div>

                {response.emergencyHelpline && (
                  <div className="px-3.5 py-1.5 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs font-black self-start sm:self-center">
                    Helpline: {response.emergencyHelpline}
                  </div>
                )}
              </div>

              {/* Summary Statement */}
              {response.summary && (
                <div className="p-4 rounded-2xl bg-[#E5CB90]/40 border border-[#E5CB90] text-sm sm:text-base font-bold text-[#1A3841] leading-relaxed">
                  {response.summary}
                </div>
              )}

              {/* Spoken Dialogue to officer */}
              {response.exactWordsToSay && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#458393] to-[#34A99D] text-white shadow-md space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-[#E5CB90]" />
                      <span className="text-xs font-black uppercase tracking-wider text-[#E5CB90]">
                        {t.exactSpokenWords}
                      </span>
                    </div>
                    <button
                      onClick={() => handleSpeakSpeech(response.exactWordsToSay || '')}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FFF3C8] text-[#1A3841] text-xs font-bold hover:bg-[#E5CB90] transition-colors cursor-pointer"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                      <span>{isSpeaking ? t.playingAudio : t.listenAudio}</span>
                    </button>
                  </div>
                  <p className="text-base sm:text-lg font-bold italic tracking-wide text-white leading-snug">
                    "{response.exactWordsToSay}"
                  </p>
                </div>
              )}

              {/* Steps: What to Do & What NOT to Do */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Do Now */}
                {response.whatToDoNow && response.whatToDoNow.length > 0 && (
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 text-xs font-black uppercase tracking-wider">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>{t.immediateActions}</span>
                    </div>
                    <ul className="space-y-2">
                      {response.whatToDoNow.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Do Not Do */}
                {response.whatNOTToDo && response.whatNOTToDo.length > 0 && (
                  <div className="p-5 rounded-2xl bg-rose-50 border border-rose-300 space-y-3">
                    <div className="flex items-center gap-2 text-rose-800 text-xs font-black uppercase tracking-wider">
                      <XCircle className="w-5 h-5 text-rose-600" />
                      <span>{t.avoidMistakes}</span>
                    </div>
                    <ul className="space-y-2">
                      {response.whatNOTToDo.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                            ✕
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Legal provisions list */}
              {response.legalProvisions && response.legalProvisions.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1A3841]">
                    <Scale className="w-4 h-4 text-[#34A99D]" />
                    <span>{t.legalShield}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {response.legalProvisions.map((lp, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-white border border-[#E5CB90] shadow-2xs">
                        <span className="font-mono text-xs font-black text-[#458393] block mb-0.5">
                          {lp.law}
                        </span>
                        <p className="text-xs font-medium text-[#1A3841]">
                          {lp.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </ThreeDCard>
        </motion.div>
      )}
    </div>
  );
};
