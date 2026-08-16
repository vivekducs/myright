import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, Sparkles, AlertCircle, ShieldCheck, CheckCircle2, XCircle, MessageSquare, Scale, Loader2, Volume2, Radio, Globe, MessageSquareText, Mic, ExternalLink, Link } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';
import { GeminiChatbot } from './GeminiChatbot';
import { GeminiLiveVoice } from './GeminiLiveVoice';
import { StatutorySearchGrounding } from './StatutorySearchGrounding';
import { AudioTranscriber } from './AudioTranscriber';
import { SpeechRecognitionMicButton } from './SpeechRecognitionMicButton';
import { MarkdownRenderer } from './MarkdownRenderer';

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
  relatedSources?: { title: string; url: string; description?: string; department?: string }[];
  isUrgent?: boolean;
}

type AIAdvisorMode = 'advisor' | 'chat' | 'live-voice' | 'search-grounding';

export const AIAdvisor: React.FC<AIAdvisorProps> = ({ language }) => {
  const [activeMode, setActiveMode] = useState<AIAdvisorMode>('chat');
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
      'ਨਾਕੇ ਤੇ ਪੁਲਿਸ ਫੋਨ ਅਨਲੌਕ ਕਰਕੇ ਵ੍ਹਟਸਐਪ ਦਿਖਾਉਣ ਲਈ ਕਹਿ ਰਹੀ ਹੈ',
      'ਥਾਣੇਦਾਰ ਇਲਾਕਾ ਨਾ ਹੋਣ ਦਾ ਬਹਾਨਾ ਬਣਾ ਕੇ ਪਰਚਾ ਨਹੀਂ ਦਰਜ ਕਰ ਰਿਹਾ',
      'ਸ਼ਾਮ ਤੋਂ ਬਾਅਦ ਪੁਲਿਸ ਘਰ ਆ ਕੇ ਭੈਣ ਤੋਂ ਪੁੱਛਗਿੱਛ ਕਰ ਰਹੀ ਹੈ',
      'ਮੈਂ ਕਾਰ ਵਿੱਚ ਬੈਠਾ ਹਾਂ ਫਿਰ ਵੀ ਕਰੇਨ ਗੱਡੀ ਖਿੱਚ ਕੇ ਲੈ ਜਾ ਰਹੀ ਹੈ',
    ],
    hinglish: [
      'Traffic police ne bike ki key nikal li aur bina challan cash maang rahe hain',
      'Naka par police phone unlock karke private chats dikhane ko bol rahi hai',
      'Thane wale keh rahe hain ki ye hamara area nahi hai aur Zero FIR nahi likh rahe',
      'Shaam ke baad police ghar aake sister se poochtaach karne ki koshish kar rahi hai',
      'Gaadi ke andar baithe hone ke bawajood traffic crane car tow kar rahi hai',
    ],
  };

  const sampleScenarios = presetsByLang[language] || presetsByLang.en;

  const handleAsk = async (queryText?: string) => {
    const q = queryText || question;
    if (!q.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, language }),
      });

      if (!res.ok) {
        throw new Error(`Advisor server returned ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      console.error('AI Advisor error:', err);
      setResponse({
        summary: `Under Article 21 and Supreme Court judgments (D.K. Basu & Lalita Kumari), you have guaranteed legal protections regarding: "${q}".`,
        whatToDoNow: [
          'Politely state that you are fully aware of your rights under Indian Law and Supreme Court guidelines.',
          'Request the officer’s name, batch number, and jurisdictional police station respectfully.',
          'If demanded cash without an electronic receipt or e-challan, refuse firmly and request a court summons or official portal receipt.',
          'Call National Citizen Emergency at 112 or NALSA Legal Aid helpline at 15100 if rights are violated.',
        ],
        whatNOTToDo: [
          'Do NOT become physically confrontational or use abusive language.',
          'Do NOT hand over your phone unlocked or allow random inspection without a magistrate warrant.',
          'Do NOT sign any blank paper or memo without reading and obtaining a copy on the spot.',
        ],
        exactWordsToSay:
          language === 'hi'
            ? 'सर, मैं कानून का सम्मान करता हूँ। कृपया कानूनी प्रक्रिया का पालन करें और नियमानुसार रसीद या मेमो प्रदान करें।'
            : 'Officer, I am cooperating fully with the law. Kindly follow statutory procedure and provide an official memo/receipt.',
        legalProvisions: [
          { law: 'Article 21, Constitution of India', explanation: 'Right to life, dignity, and fair procedural due process.' },
          { law: 'Section 35 BNSS 2023 / Section 41B CrPC', explanation: 'Mandatory arrest memo and identification badges for officers.' },
          { law: 'D.K. Basu v. State of West Bengal', explanation: 'Binding Supreme Court 11-point procedural safeguards.' },
        ],
        emergencyHelpline: '112 (National Emergency) / 15100 (Free Legal Aid)',
        isUrgent: false,
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
      const utterance = new SpeechSynthesisUtterance(text);
      if (langConfig?.speechCode) {
        utterance.lang = langConfig.speechCode;
      }
      utterance.rate = 0.90;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#458393] text-white shadow-xs">
              AI Legal Suite
            </span>
            <span className="text-xs font-bold text-[#34A99D] px-3 py-0.5 rounded-full bg-[#34A99D]/15">
              Powered by Gemini (3.5 Flash • 3.1 Flash Lite • 3.1 Pro • Live API)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A3841] tracking-tight">
            {t.aiTitle}
          </h2>
          <p className="text-sm text-[#458393] font-bold">
            {t.aiSubtitle}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#E5CB90]/50 px-4 py-2 rounded-full border-2 border-[#E5CB90] text-xs font-black text-[#1A3841] shadow-xs self-start sm:self-center">
          <span>{langConfig.flag}</span>
          <span>Response Language: {langConfig.name}</span>
        </div>
      </div>

      {/* Sub-Mode Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto p-1.5 rounded-3xl bg-[#E5CB90]/35 border-2 border-[#E5CB90] shadow-xs">
        <button
          id="mode-tab-chat"
          onClick={() => setActiveMode('chat')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer whitespace-nowrap ${
            activeMode === 'chat'
              ? 'bg-[#1A3841] text-[#FFF3C8] shadow-md -translate-y-0.5'
              : 'text-[#1A3841] hover:bg-[#FFF3C8]'
          }`}
        >
          <MessageSquareText className="w-4 h-4 text-[#34A99D]" />
          <span>Gemini Multi-Turn Chatbot</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#34A99D]/20 text-teal-800">
            gemini-3.5-flash / 3.1-pro
          </span>
        </button>

        <button
          id="mode-tab-live-voice"
          onClick={() => setActiveMode('live-voice')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer whitespace-nowrap ${
            activeMode === 'live-voice'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md -translate-y-0.5'
              : 'text-[#1A3841] hover:bg-[#FFF3C8]'
          }`}
        >
          <Radio className="w-4 h-4 text-emerald-300 animate-pulse" />
          <span>Live Voice Conversations</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold">
            Live API
          </span>
        </button>

        <button
          id="mode-tab-search-grounding"
          onClick={() => setActiveMode('search-grounding')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer whitespace-nowrap ${
            activeMode === 'search-grounding'
              ? 'bg-blue-700 text-white shadow-md -translate-y-0.5'
              : 'text-[#1A3841] hover:bg-[#FFF3C8]'
          }`}
        >
          <Globe className="w-4 h-4 text-blue-200" />
          <span>Google Search Grounding</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
            gemini-3.5-flash
          </span>
        </button>

        <button
          id="mode-tab-advisor"
          onClick={() => setActiveMode('advisor')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer whitespace-nowrap ${
            activeMode === 'advisor'
              ? 'bg-[#458393] text-white shadow-md -translate-y-0.5'
              : 'text-[#1A3841] hover:bg-[#FFF3C8]'
          }`}
        >
          <Bot className="w-4 h-4 text-[#FFF3C8]" />
          <span>Structured 30s Advisor</span>
        </button>
      </div>

      {/* Render Mode Content */}
      <AnimatePresence mode="wait">
        
        {/* Mode 1: Gemini Chatbot */}
        {activeMode === 'chat' && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            <GeminiChatbot language={language} />
          </motion.div>
        )}

        {/* Mode 2: Live Voice Conversations (Live API) */}
        {activeMode === 'live-voice' && (
          <motion.div
            key="live-voice"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            <GeminiLiveVoice language={language} />
          </motion.div>
        )}

        {/* Mode 3: Google Search Grounding Verifier */}
        {activeMode === 'search-grounding' && (
          <motion.div
            key="search-grounding"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            <StatutorySearchGrounding language={language} />
          </motion.div>
        )}

        {/* Mode 4: Structured Single-Assessment Advisor */}
        {activeMode === 'advisor' && (
          <motion.div
            key="advisor"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Query Input Card with Browser Speech Recognition API */}
            <div className="p-6 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="block text-sm font-black text-[#1A3841]">
                  Describe your immediate situation or legal question:
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  <AudioTranscriber
                    variant="inline"
                    buttonLabel="Record (Gemini 3.5)"
                    onTranscribed={(transcript) => {
                      setQuestion(transcript);
                      handleAsk(transcript);
                    }}
                  />
                </div>
              </div>

              {/* Real-Time Browser Speech Recognition Mic Control */}
              <SpeechRecognitionMicButton
                language={language}
                buttonLabel={`Speak Situation in ${langConfig.name}`}
                placeholderHint="Speak your situation naturally (e.g. Police stopped my bike, took keys and demanding fine without receipt)..."
                onTranscriptChange={(text, isFinal) => {
                  setQuestion(text);
                }}
                onAutoSubmit={(finalText) => {
                  if (finalText.trim()) {
                    handleAsk(finalText);
                  }
                }}
              />
              
              <div className="relative">
                <textarea
                  id="ai-advisor-query-input"
                  rows={3}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. Police stopped my car at night, snatched keys and asking to unlock my phone without warrant..."
                  className="w-full p-4 sm:p-5 rounded-3xl bg-white border-2 border-[#E5CB90] text-sm sm:text-base font-semibold text-[#1A3841] focus:outline-hidden focus:border-[#34A99D] shadow-inner placeholder-[#458393]/60"
                />
              </div>

              {/* Quick Sample Scenarios Pills */}
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#458393] block">
                  Tap a common scenario to assess immediately:
                </span>
                <div className="flex flex-wrap gap-2">
                  {sampleScenarios.map((sc, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setQuestion(sc);
                        handleAsk(sc);
                      }}
                      className="text-left text-xs font-bold px-4 py-2 rounded-full bg-white/90 hover:bg-[#E5CB90]/60 border-2 border-[#E5CB90] hover:border-[#34A99D] text-[#1A3841] transition-all cursor-pointer shadow-2xs hover:scale-[1.02]"
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
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#34A99D] to-[#458393] hover:from-[#34A99D] hover:to-[#1A3841] text-white font-black text-sm sm:text-base shadow-md hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Analyzing Indian Law...</span>
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
                  <div className="p-6 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#34A99D] shadow-2xl space-y-6">
                    
                    {/* Header Box */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5CB90]">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34A99D] to-[#458393] text-white flex items-center justify-center shadow-md ring-2 ring-[#FFF3C8]">
                          <Bot className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-[#1A3841]">
                            Legal Assessment & Action Plan
                          </h3>
                          <p className="text-xs text-[#458393] font-bold">
                            Constitution of India & Bharatiya Nagarik Suraksha Sanhita (BNSS)
                          </p>
                        </div>
                      </div>

                      {response.emergencyHelpline && (
                        <div className="px-4 py-2 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs font-black self-start sm:self-center shadow-2xs">
                          Helpline: {response.emergencyHelpline}
                        </div>
                      )}
                    </div>

                    {/* Summary Statement */}
                    {response.summary && (
                      <div className="p-5 rounded-3xl bg-[#E5CB90]/40 border-2 border-[#E5CB90] shadow-2xs">
                        <MarkdownRenderer content={response.summary} />
                      </div>
                    )}

                    {/* Spoken Dialogue to officer */}
                    {response.exactWordsToSay && (
                      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#458393] via-[#34A99D] to-[#458393] text-white shadow-lg space-y-3 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#E5CB90]/30 flex items-center justify-center">
                              <MessageSquare className="w-4 h-4 text-[#E5CB90]" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-wider text-[#E5CB90]">
                              {t.exactSpokenWords}
                            </span>
                          </div>
                          <button
                            onClick={() => handleSpeakSpeech(response.exactWordsToSay || '')}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF3C8] text-[#1A3841] text-xs font-black hover:bg-[#E5CB90] hover:scale-105 transition-all shadow-xs cursor-pointer"
                          >
                            <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'text-red-600 animate-spin' : 'text-[#458393]'}`} />
                            <span>{isSpeaking ? t.playingAudio : t.listenAudio}</span>
                          </button>
                        </div>
                        <p className="text-base sm:text-lg font-bold italic tracking-wide text-white leading-relaxed">
                          "{response.exactWordsToSay}"
                        </p>
                      </div>
                    )}

                    {/* Steps: What to Do & What NOT to Do */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Do Now */}
                      {response.whatToDoNow && response.whatToDoNow.length > 0 && (
                        <div className="p-6 rounded-3xl bg-emerald-50/95 border-2 border-emerald-300 shadow-sm space-y-3">
                          <div className="flex items-center gap-2.5 text-emerald-800 text-xs font-black uppercase tracking-wider">
                            <div className="w-7 h-7 rounded-full bg-emerald-200 flex items-center justify-center">
                              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                            </div>
                            <span>{t.immediateActions}</span>
                          </div>
                          <ul className="space-y-2.5">
                            {response.whatToDoNow.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-emerald-950 font-bold leading-relaxed">
                                <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-2xs">
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
                        <div className="p-6 rounded-3xl bg-rose-50/95 border-2 border-rose-300 shadow-sm space-y-3">
                          <div className="flex items-center gap-2.5 text-rose-800 text-xs font-black uppercase tracking-wider">
                            <div className="w-7 h-7 rounded-full bg-rose-200 flex items-center justify-center">
                              <XCircle className="w-4 h-4 text-rose-700" />
                            </div>
                            <span>{t.avoidMistakes}</span>
                          </div>
                          <ul className="space-y-2.5">
                            {response.whatNOTToDo.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-rose-950 font-bold leading-relaxed">
                                <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-2xs">
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
                      <div className="space-y-2.5 pt-2">
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1A3841]">
                          <Scale className="w-4 h-4 text-[#34A99D]" />
                          <span>{t.legalShield}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {response.legalProvisions.map((lp, i) => (
                            <div key={i} className="p-4 rounded-3xl bg-white border-2 border-[#E5CB90] shadow-2xs">
                              <span className="font-mono text-xs font-black text-[#458393] block mb-1">
                                {lp.law}
                              </span>
                              <p className="text-xs font-bold text-[#1A3841] leading-relaxed">
                                {lp.explanation}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Official Portal Citations & Related Sources */}
                    {response.relatedSources && response.relatedSources.length > 0 && (
                      <div className="space-y-3 pt-3 border-t border-[#E5CB90]/60">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1A3841]">
                            <Globe className="w-4 h-4 text-[#34A99D]" />
                            <span>Official Statutory Sources & Citizen Portals</span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#34A99D]/15 text-[#1A3841] border border-[#34A99D]/30">
                            Verified Links
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {response.relatedSources.map((source, sIdx) => (
                            <a
                              key={sIdx}
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group p-3 rounded-2xl bg-white hover:bg-[#FFF3C8] border border-[#E5CB90] hover:border-[#34A99D] shadow-2xs transition-all flex items-start justify-between gap-2"
                            >
                              <div className="space-y-0.5 flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#34A99D] group-hover:scale-125 transition-transform shrink-0" />
                                  <span className="text-xs font-black text-[#1A3841] group-hover:text-[#458393] truncate">
                                    {source.title}
                                  </span>
                                </div>
                                {source.description && (
                                  <p className="text-[11px] font-medium text-[#458393] line-clamp-1">
                                    {source.description}
                                  </p>
                                )}
                                {source.department && (
                                  <span className="inline-block text-[9px] font-mono font-bold text-[#1A3841]/70 bg-stone-100 px-1.5 py-0.2 rounded-sm">
                                    {source.department}
                                  </span>
                                )}
                              </div>
                              <ExternalLink className="w-3.5 h-3.5 text-[#34A99D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-0.5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </ThreeDCard>
              </motion.div>
            )}
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
};
