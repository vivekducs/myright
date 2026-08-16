import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Globe, 
  Search, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX,
  Loader2, 
  RefreshCw, 
  Scale, 
  ShieldAlert, 
  BookOpen, 
  AlertTriangle, 
  ExternalLink,
  Mic,
  MicOff,
  Radio,
  SlidersHorizontal,
  Headphones,
  Download,
  Info
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';
import { AudioTranscriber } from './AudioTranscriber';
import { MarkdownRenderer } from './MarkdownRenderer';
import { useSpeechRecognition } from '../utils/useSpeechRecognition';
import { triggerHeavyHaptic } from '../utils/haptics';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  groundingSources?: { uri: string; title: string }[];
  modelUsed?: string;
}

interface GeminiChatbotProps {
  language: SupportedLanguage;
}

export type ModelType = 'gemini-1.5-flash' | 'gemini-1.5-flash' | 'gemini-1.5-pro';

export interface RoleOption {
  id: string;
  title: string;
  badge: string;
  modelRecommendation: ModelType;
  description: string;
  systemInstruction: string;
}

export const CHAT_ROLES: RoleOption[] = [
  {
    id: 'general-counsel',
    title: 'Nyaya Sahayak (General Legal Counsel)',
    badge: 'Comprehensive',
    modelRecommendation: 'gemini-1.5-flash',
    description: 'Constitutional protections, police duties, and step-by-step guidance.',
    systemInstruction: `You are "Nyaya Sahayak", an authoritative, calm, and reassuring Indian Citizen Legal Rights & Police Procedure Advisor.
Ground all advice in the Constitution of India (Articles 20, 21, 22), Bharatiya Nagarik Suraksha Sanhita (BNSS 2023 / CrPC), Bharatiya Nyaya Sanhita (BNS 2023 / IPC), Motor Vehicles Act 1988, and landmark Supreme Court verdicts (D.K. Basu, Lalita Kumari, Arnesh Kumar, K.S. Puttaswamy).
Provide clear verdicts, step-by-step guidance, verbatim dialogue to say to officers, and statutory section citations.`,
  },
  {
    id: 'traffic-defense',
    title: 'Traffic & Roadside Stop Defender',
    badge: 'MVA 1988 & E-Challans',
    modelRecommendation: 'gemini-1.5-flash',
    description: 'Vehicle checks, spot fines, towing rules, ignition key confiscation.',
    systemInstruction: `You are a specialized Indian Traffic Police Rights Counsel. 
Advise on vehicle checking, e-challans, towing rules (cannot tow with occupant inside), key confiscation illegality, helmet/seatbelt penalties, breathalyzer protocols (Section 185/203 MVA), DigiLocker/mParivahan document validity (Rule 139 CMVR), and rank requirements for compounding fines or seizing licenses (Sub-Inspector or above).`,
  },
  {
    id: 'zero-fir-complaints',
    title: 'Zero FIR & Station Complaint Specialist',
    badge: 'BNSS 173 & Lalita Kumari',
    modelRecommendation: 'gemini-1.5-pro',
    description: 'Mandatory FIR registration, jurisdictional refusal, written complaints.',
    systemInstruction: `You are an expert on Police Station procedures, Zero FIRs, and citizen complaints under Indian Law. 
Advise citizens on mandatory FIR registration for cognizable offenses (BNSS 173 / Section 154 CrPC, Lalita Kumari verdict), overcoming jurisdictional refusal, filing complaints via registered post / District SP / Judicial Magistrate (Section 175 BNSS), and rights of victims.`,
  },
  {
    id: 'arrest-custody',
    title: 'Arrest & Custodial Safeguards Guardian',
    badge: 'D.K. Basu & BNSS 35-40',
    modelRecommendation: 'gemini-1.5-pro',
    description: 'Arrest memo, family notice, medical exam, 24h magistrate production.',
    systemInstruction: `You are a specialist in Arrest, Detention, and Bail rights under Indian law. 
Guide citizens on the mandatory Arrest Memo with witness signatures, grounds of arrest notification (Article 22(1)), informing friends/family within 8-12 hours (BNSS 36), medical checkup requirements (BNSS 53), 24-hour magistrate production (Article 22(2)), and special protections for women (no arrest after sunset without judicial magistrate order, BNSS 43).`,
  },
  {
    id: 'device-privacy',
    title: 'Digital Privacy & Phone Search Defense',
    badge: 'Puttaswamy & Sec 100 CrPC',
    modelRecommendation: 'gemini-1.5-flash',
    description: 'Smartphone searches, WhatsApp check illegality, warrant requirements.',
    systemInstruction: `You are a digital rights counsel for Indian citizens during roadside stops and police searches.
Advise on privacy rights established in Justice K.S. Puttaswamy (2017), Section 100/165 CrPC (Section 103/185 BNSS), asserting that police cannot randomly compel citizens to unlock phones or inspect WhatsApp chats without a judicial search warrant or formal forensic order.`,
  },
  {
    id: 'anti-corruption',
    title: 'Anti-Corruption & Vigilance Guide',
    badge: 'CVC & Sec 7 PC Act',
    modelRecommendation: 'gemini-1.5-flash',
    description: 'Refusing bribes, reporting extortion, CVC/ACB helplines.',
    systemInstruction: `You are an Indian citizen anti-corruption advisor.
Advise on dealing with demands for bribes/speed money by public officials under the Prevention of Corruption Act 1988 (Section 7), reporting to State Anti-Corruption Bureau (ACB), Central Vigilance Commission (CVC Helpline 1064), and recording evidence lawfully.`,
  }
];

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({ language }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'model',
      text: `Namaste! I am **Nyaya Sahayak** (न्याय सहायक), your interactive AI legal counsel trained on the **Constitution of India, BNSS 2023, BNS 2023, and Supreme Court precedent**.\n\nHow may I assist you today? You can **type your query** or **tap the microphone to speak**.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'gemini-1.5-flash',
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [selectedModel, setSelectedModel] = useState<ModelType>('gemini-1.5-flash');
  const [selectedRole, setSelectedRole] = useState<string>('general-counsel');
  const [useSearchGrounding, setUseSearchGrounding] = useState<boolean>(true);
  const [autoSpeak, setAutoSpeak] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [audioLoadingId, setAudioLoadingId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const currentRoleObj = CHAT_ROLES.find((r) => r.id === selectedRole) || CHAT_ROLES[0];

  // Browser speech recognition for direct conversational mic
  const {
    isListening,
    transcript,
    interimTranscript,
    isSupported: isSpeechSupported,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition({
    language,
    continuous: false,
    interimResults: true,
    onResult: (text, isFinal) => {
      setInputText(text);
    },
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
      }
    };
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isLoading) return;

    triggerHeavyHaptic();

    // Stop active speech recognition if running
    if (isListening) {
      stopListening();
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputText('');
    resetTranscript();
    setIsLoading(true);

    try {
      const payload = {
        messages: newHistory.map((m) => ({
          role: m.role,
          text: m.text,
        })),
        model: selectedModel,
        systemInstruction: currentRoleObj.systemInstruction,
        useSearchGrounding: useSearchGrounding,
        language: langConfig.name,
      };

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();

      const modelMsgId = `model-${Date.now()}`;
      const modelMsg: ChatMessage = {
        id: modelMsgId,
        role: 'model',
        text: data.text || 'Unable to generate advice at this moment.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        groundingSources: data.groundingSources || [],
        modelUsed: data.modelUsed || selectedModel,
      };

      setMessages((prev) => [...prev, modelMsg]);

      // If auto-speak is enabled, trigger voice reading
      if (autoSpeak && data.text) {
        handlePlayAudioResponse(modelMsgId, data.text);
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: `###  Nyaya Sahayak Legal Advisory

Regarding your inquiry: **"${text}"**

####  1. Constitutional & Statutory Protections
- **Fundamental Right**: Under **Article 21 & Article 22 of the Constitution of India**, you are guaranteed protection against unlawful detention, arbitrary body/device searches, and police overreach.
- **Statutory Mandate**: Under **Section 35 BNSS 2023** (formerly Section 41B CrPC), officers must wear visible identification badges, prepare a written arrest memo, and inform a nominated family member.

####  2. Recommended Action Steps
1. **Remain Calm & Polite**: Do not use confrontational language or resist physically.
2. **Note Officer Identification**: Note their nameplate, designation, vehicle number, and police station.
3. **Refuse Unwarranted Intrusions**: Do not hand over an unlocked smartphone without a valid search warrant.
4. **Demand Official Receipts**: Refuse to pay spot cash without an official printed or SMS e-challan.

####  3. Exact Words to Say
> *"Officer, I am cooperating fully in accordance with the law. Please show your badge identification and provide an official receipt or memo."*

####  4. Emergency Contacts
- **National Citizen Emergency**: Dial **112** (24/7 Toll-Free)
- **Free Legal Services (NALSA)**: Dial **15100**`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'offline-fallback',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayAudioResponse = async (msgId: string, text: string) => {
    // If already speaking this message, stop it
    if (speakingId === msgId) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
      }
      setSpeakingId(null);
      return;
    }

    // Stop other speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }

    setAudioLoadingId(msgId);

    try {
      // Try neural TTS endpoint first
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voiceName: 'Zephyr' }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.audioBase64) {
          const audioSrc = `data:${data.mimeType || 'audio/wav'};base64,${data.audioBase64}`;
          const audio = new Audio(audioSrc);
          audioPlayerRef.current = audio;
          
          audio.onended = () => {
            setSpeakingId(null);
          };
          audio.onerror = () => {
            playBrowserSpeech(msgId, text);
          };

          await audio.play();
          setSpeakingId(msgId);
          setAudioLoadingId(null);
          return;
        }
      }
    } catch (e) {
      console.warn('Neural TTS failed, falling back to browser speech synthesis', e);
    }

    setAudioLoadingId(null);
    playBrowserSpeech(msgId, text);
  };

  const playBrowserSpeech = (msgId: string, text: string) => {
    if ('speechSynthesis' in window) {
      const cleanText = text.replace(/[*_#`>\[\]\(\)]/g, '').slice(0, 800);
      const utterance = new SpeechSynthesisUtterance(cleanText);
      if (langConfig?.speechCode) {
        utterance.lang = langConfig.speechCode;
      }
      utterance.rate = 0.92;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      setSpeakingId(msgId);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }
    setSpeakingId(null);
    setMessages([
      {
        id: `init-${Date.now()}`,
        role: 'model',
        text: `Chat thread reset. I am ready to advise you under the **${currentRoleObj.title}** profile.\n\nYou can ask questions via **text** or tap the **microphone** to speak.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: selectedModel,
      },
    ]);
  };

  const handleExportChat = () => {
    const chatText = messages
      .map((m) => `[${m.timestamp}] ${m.role === 'user' ? 'CITIZEN' : 'NYAYA SAHAYAK'}:\n${m.text}\n`)
      .join('\n---\n\n');
    
    const blob = new Blob([chatText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nyaya-sahayak-legal-consultation-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 sm:p-7 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-5 flex flex-col h-[780px]">
      
      {/* Header & Controls Toolbar */}
      <div className="border-b border-[#E5CB90]/80 pb-4 space-y-3 shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A3841] via-[#458393] to-[#34A99D] text-white flex items-center justify-center shadow-md ring-2 ring-[#E5CB90]">
                <Bot className="w-6 h-6" />
              </div>
              {speakingId && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-ping" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-black text-[#1A3841] tracking-tight">
                  Nyaya Sahayak Multi-Turn AI Chatbot
                </h3>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#34A99D] text-white shadow-xs">
                  Text + Voice
                </span>
              </div>
              <p className="text-xs text-[#458393] font-bold">
                Maintains multi-turn context, voice interactions, and constitutional citations
              </p>
            </div>
          </div>

          {/* Quick Action Toggles: Auto-Speak Voice, Search Grounding, Reset, Export */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Auto-read voice responses toggle */}
            <button
              onClick={() => setAutoSpeak(!autoSpeak)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-2xs border ${
                autoSpeak
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-500/20'
                  : 'bg-white text-stone-700 border-[#E5CB90] hover:bg-[#E5CB90]/40'
              }`}
              title="Automatically speak AI responses out loud"
            >
              {autoSpeak ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>Auto-Voice: {autoSpeak ? 'ON' : 'OFF'}</span>
            </button>

            {/* Google Search Grounding toggle */}
            <button
              onClick={() => setUseSearchGrounding(!useSearchGrounding)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-2xs border ${
                useSearchGrounding
                  ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/20'
                  : 'bg-white text-stone-600 border-[#E5CB90] hover:bg-[#E5CB90]/40'
              }`}
              title="Ground responses with live web citations"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search Grounding: {useSearchGrounding ? 'ON' : 'OFF'}</span>
            </button>

            {/* Export Chat */}
            <button
              onClick={handleExportChat}
              className="p-1.5 rounded-full bg-white hover:bg-stone-100 border border-[#E5CB90] text-stone-700 transition-colors shadow-2xs cursor-pointer"
              title="Export consultation transcript"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* Reset Thread */}
            <button
              onClick={handleClearChat}
              className="p-1.5 rounded-full bg-white hover:bg-stone-100 border border-[#E5CB90] text-stone-700 transition-colors shadow-2xs cursor-pointer"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Configuration Selector: Model Picker & Role Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {/* Model Selector */}
          <div className="flex items-center gap-2 bg-white/95 px-3.5 py-2 rounded-2xl border-2 border-[#E5CB90] shadow-2xs">
            <span className="text-[11px] font-black uppercase text-[#458393] shrink-0">Model:</span>
            <select
              id="chatbot-model-select"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value as ModelType)}
              className="w-full text-xs font-black text-[#1A3841] bg-transparent focus:outline-hidden cursor-pointer"
            >
              <option value="gemini-1.5-flash">gemini-1.5-flash (General & Search Grounding)</option>
              <option value="gemini-1.5-pro">gemini-1.5-pro (Complex Legal Reasoning)</option>
              <option value="gemini-1.5-flash">gemini-1.5-flash (Fast Roadside Q&A)</option>
            </select>
          </div>

          {/* Role Persona Selector */}
          <div className="flex items-center gap-2 bg-white/95 px-3.5 py-2 rounded-2xl border-2 border-[#E5CB90] shadow-2xs">
            <span className="text-[11px] font-black uppercase text-[#458393] shrink-0">Role:</span>
            <select
              id="chatbot-role-select"
              value={selectedRole}
              onChange={(e) => {
                const newRole = e.target.value;
                setSelectedRole(newRole);
                const roleObj = CHAT_ROLES.find((r) => r.id === newRole);
                if (roleObj) {
                  setSelectedModel(roleObj.modelRecommendation);
                }
              }}
              className="w-full text-xs font-black text-[#1A3841] bg-transparent focus:outline-hidden cursor-pointer"
            >
              {CHAT_ROLES.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.title} ({role.badge})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Current Role Sub-banner */}
        <div className="flex items-center justify-between text-[11px] font-bold text-[#458393] bg-[#E5CB90]/30 px-3 py-1.5 rounded-xl">
          <span className="truncate">
             Active Profile: <strong className="text-[#1A3841]">{currentRoleObj.title}</strong> — {currentRoleObj.description}
          </span>
          <span className="text-[10px] font-mono uppercase shrink-0 bg-[#34A99D]/15 text-[#1A3841] px-2 py-0.5 rounded-md font-black">
            Rec: {currentRoleObj.modelRecommendation}
          </span>
        </div>
      </div>

      {/* Scrollable Chat Thread */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          const isMsgSpeaking = speakingId === msg.id;
          const isMsgAudioLoading = audioLoadingId === msg.id;

          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar Icon */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-md ${
                  isUser
                    ? 'bg-[#1A3841] text-[#FFF3C8]'
                    : 'bg-gradient-to-tr from-[#34A99D] to-[#458393] text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-5 h-5" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-4 sm:p-5 rounded-3xl space-y-2.5 shadow-md ${
                  isUser
                    ? 'bg-[#1A3841] text-white rounded-tr-xs'
                    : 'bg-white border-2 border-[#E5CB90] text-[#1A3841] rounded-tl-xs'
                }`}
              >
                {/* Header info in bubble */}
                <div className="flex items-center justify-between gap-3 text-[10px] font-bold opacity-75 border-b pb-1.5 border-current/15">
                  <span className="font-mono">
                    {isUser ? 'You (Citizen)' : `Nyaya Sahayak • ${msg.modelUsed || selectedModel}`}
                  </span>
                  <div className="flex items-center gap-2">
                    {isMsgSpeaking && (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-full text-[9px] animate-pulse">
                        <Volume2 className="w-3 h-3" /> Speaking
                      </span>
                    )}
                    <span>{msg.timestamp}</span>
                  </div>
                </div>

                {/* Message Body */}
                {isUser ? (
                  <div className="text-xs sm:text-sm font-semibold leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </div>
                ) : (
                  <div className="py-1">
                    <MarkdownRenderer content={msg.text} />
                  </div>
                )}

                {/* Google Search Grounding Sources Badges */}
                {msg.groundingSources && msg.groundingSources.length > 0 && (
                  <div className="pt-2 border-t border-[#E5CB90]/60 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-blue-700">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Verified Statutory Grounding & Sources:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.groundingSources.map((source, sIdx) => (
                        <a
                          key={sIdx}
                          href={source.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-[10px] font-black truncate max-w-xs transition-colors shadow-2xs group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                          <span className="truncate">{source.title || source.uri}</span>
                          <ExternalLink className="w-3 h-3 text-blue-600 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Bubble Actions */}
                {!isUser && (
                  <div className="flex items-center justify-end gap-2 pt-1 border-t border-[#E5CB90]/40">
                    <button
                      onClick={() => handlePlayAudioResponse(msg.id, msg.text)}
                      disabled={isMsgAudioLoading}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isMsgSpeaking
                          ? 'bg-red-100 text-red-700 border border-red-300'
                          : 'bg-[#E5CB90]/30 hover:bg-[#E5CB90]/60 text-[#1A3841]'
                      }`}
                      title={isMsgSpeaking ? 'Stop speaking' : 'Listen with Neural Voice / Speech'}
                    >
                      {isMsgAudioLoading ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#34A99D]" />
                      ) : (
                        <Volume2 className={`w-3.5 h-3.5 ${isMsgSpeaking ? 'text-red-600 animate-pulse' : 'text-[#458393]'}`} />
                      )}
                      <span>{isMsgSpeaking ? 'Stop Audio' : isMsgAudioLoading ? 'Loading Audio...' : 'Listen Voice'}</span>
                    </button>

                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="p-1.5 rounded-full hover:bg-[#E5CB90]/40 text-[#458393] transition-colors cursor-pointer"
                      title="Copy response"
                    >
                      {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#34A99D] to-[#458393] text-white flex items-center justify-center shadow-md animate-pulse">
              <Bot className="w-5 h-5" />
            </div>
            <div className="p-4 rounded-3xl bg-white border-2 border-[#E5CB90] shadow-md flex items-center gap-2.5 text-xs font-bold text-[#458393]">
              <Loader2 className="w-4 h-4 animate-spin text-[#34A99D]" />
              <span>Analyzing statutes & case law with <strong>{selectedModel}</strong>...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Fast Prompts */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-1 shrink-0 scrollbar-none">
        <span className="text-[10px] font-black uppercase text-[#458393] shrink-0">Quick Queries:</span>
        {[
          'Police stopped & questioning me at naka',
          'Rights if arrested or detained in lockup',
          'Police refuse to register my Zero FIR',
          'Police want to search my bag/phone without warrant',
          'Officer demanding spot cash without e-challan',
          'Towing car while sitting inside vehicle',
          'How to lodge complaint against police excess?',
        ].map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(prompt)}
            className="text-[11px] font-black px-3 py-1.5 rounded-full bg-white hover:bg-[#E5CB90]/60 border border-[#E5CB90] text-[#1A3841] whitespace-nowrap cursor-pointer transition-all shadow-2xs shrink-0 hover:-translate-y-0.5"
          >
             {prompt}
          </button>
        ))}
      </div>

      {/* Active Voice Listening Banner if Web Speech is active */}
      {isListening && (
        <div className="p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-400 flex items-center justify-between gap-3 shrink-0 shadow-sm animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span className="text-xs font-black text-emerald-900">
               Listening to your voice ({langConfig.name})...
            </span>
          </div>
          <button
            onClick={() => {
              stopListening();
              if (inputText.trim()) {
                handleSendMessage();
              }
            }}
            className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black hover:bg-emerald-700 transition-colors shadow-2xs"
          >
            Done & Send
          </button>
        </div>
      )}

      {/* Input Composer with SpeechRecognition Mic & Audio Transcription */}
      <div className="shrink-0 space-y-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2 bg-white p-2 rounded-3xl border-2 border-[#E5CB90] focus-within:border-[#34A99D] shadow-md transition-all"
        >
          {/* Browser Speech Recognition API Mic with live state */}
          <button
            type="button"
            onClick={() => {
              if (isListening) {
                stopListening();
              } else {
                startListening();
              }
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs ${
              isListening
                ? 'bg-red-500 text-white animate-pulse ring-4 ring-red-200'
                : 'bg-[#E5CB90]/50 hover:bg-[#E5CB90] text-[#1A3841]'
            }`}
            title={isListening ? 'Stop listening' : `Speak in ${langConfig.name}`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          {/* Audio Transcriber fallback recorder */}
          <AudioTranscriber
            variant="inline"
            onTranscribed={(transcript) => {
              setInputText((prev) => (prev ? `${prev} ${transcript}` : transcript));
            }}
          />

          <input
            id="chatbot-input-field"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Ask in ${langConfig.name} or English (type or tap mic to speak)...`}
            className="flex-1 px-3 py-2 text-xs sm:text-sm font-semibold text-[#1A3841] bg-transparent focus:outline-hidden placeholder-[#458393]/60"
          />

          <button
            id="chatbot-send-btn"
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#34A99D] to-[#458393] hover:from-[#34A99D] hover:to-[#1A3841] text-white flex items-center justify-center disabled:opacity-40 transition-all cursor-pointer shadow-xs shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-between px-2 text-[10px] text-[#458393] font-bold">
          <span> Supports multi-turn memory & voice synthesis</span>
          <span>Switch roles or models anytime above</span>
        </div>
      </div>

    </div>
  );
};
