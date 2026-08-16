import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Globe, Search, Copy, Check, Volume2, Loader2, RefreshCw, Scale, ShieldAlert, BookOpen, AlertTriangle, ExternalLink } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';
import { AudioTranscriber } from './AudioTranscriber';
import { SpeechRecognitionMicButton } from './SpeechRecognitionMicButton';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ChatMessage {
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

type ModelType = 'gemini-3.5-flash' | 'gemini-3.1-flash-lite' | 'gemini-3.1-pro-preview';

interface RoleOption {
  id: string;
  title: string;
  badge: string;
  systemInstruction: string;
}

const CHAT_ROLES: RoleOption[] = [
  {
    id: 'general-counsel',
    title: 'Nyaya Sahayak (General Legal Counsel)',
    badge: 'Comprehensive',
    systemInstruction: `You are "Nyaya Sahayak", an authoritative and reassuring Indian Citizen Legal Rights & Police Procedure Advisor.
Ground all advice in the Constitution of India (Articles 20, 21, 22), Bharatiya Nagarik Suraksha Sanhita (BNSS 2023 / CrPC), Bharatiya Nyaya Sanhita (BNS 2023 / IPC), Motor Vehicles Act 1988, and landmark Supreme Court verdicts (D.K. Basu, Lalita Kumari, Arnesh Kumar).
Provide concise verdicts, step-by-step guidance, verbatim dialogue to say to officers, and statutory section citations.`,
  },
  {
    id: 'traffic-defense',
    title: 'Traffic & Roadside Stop Defender',
    badge: 'MVA 1988 & E-Challans',
    systemInstruction: `You are a specialized Indian Traffic Police Rights Counsel. 
Advise on vehicle checking, e-challans, towing rules (cannot tow with occupant inside), key confiscation illegality, helmet/seatbelt penalties, breathalyzer protocols (Section 185/203 MVA), DigiLocker/mParivahan document validity, and rank requirements for seizing licenses (Sub-Inspector or above).`,
  },
  {
    id: 'zero-fir-complaints',
    title: 'Zero FIR & Station Complaint Specialist',
    badge: 'BNSS 173 & Lalita Kumari',
    systemInstruction: `You are an expert on Police Station procedures, Zero FIRs, and citizen complaints. 
Advise citizens on mandatory FIR registration for cognizable offenses (BNSS 173 / Section 154 CrPC, Lalita Kumari verdict), overcoming jurisdictional refusal, filing complaints via registered post / SP / Magistrate (Section 175 BNSS), and rights of victims.`,
  },
  {
    id: 'arrest-custody',
    title: 'Arrest & Custodial Safeguards Guardian',
    badge: 'D.K. Basu & BNSS 35-40',
    systemInstruction: `You are a specialist in Arrest, Detention, and Bail rights under Indian law. 
Guide citizens on the mandatory Arrest Memo, grounds of arrest notification (Article 22(1)), informing friends/family (BNSS 36), medical checkup requirements (BNSS 53), 24-hour magistrate production (Article 22(2)), and special protections for women (no arrest after sunset without judicial magistrate order, BNSS 43).`,
  },
];

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({ language }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'model',
      text: `Namaste! I am **Nyaya Sahayak** (न्याय सहायक), your interactive AI legal counsel trained on the **Constitution of India, BNSS 2023, BNS 2023, and Supreme Court precedent**.\n\nHow may I assist you with your police interaction or legal situation today? You can type your query or tap the microphone to speak.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'gemini-3.5-flash',
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [selectedModel, setSelectedModel] = useState<ModelType>('gemini-3.5-flash');
  const [selectedRole, setSelectedRole] = useState<string>('general-counsel');
  const [useSearchGrounding, setUseSearchGrounding] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const currentRoleObj = CHAT_ROLES.find((r) => r.id === selectedRole) || CHAT_ROLES[0];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputText('');
    setIsLoading(true);

    try {
      // Build API payload
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

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.text || 'Unable to generate advice at this moment.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        groundingSources: data.groundingSources || [],
        modelUsed: data.modelUsed || selectedModel,
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: `Under **Article 21 and Section 35 BNSS 2023**, you have constitutional protections. (Note: Fallback advisory activated for: "${text}"). Please ask for officer identification badges, demand an official receipt for any seizure or fine, and dial **112** if in distress.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'offline-fallback',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if ('speechSynthesis' in window) {
      if (speakingId === id) {
        window.speechSynthesis.cancel();
        setSpeakingId(null);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (langConfig?.speechCode) {
        utterance.lang = langConfig.speechCode;
      }
      utterance.rate = 0.92;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        role: 'model',
        text: `Chat thread cleared. I am ready to advise you under the **${currentRoleObj.title}** profile.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: selectedModel,
      },
    ]);
  };

  return (
    <div className="p-4 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-6 flex flex-col h-[780px]">
      
      {/* Header & Controls Toolbar */}
      <div className="border-b border-[#E5CB90]/80 pb-4 space-y-3 shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A3841] via-[#458393] to-[#34A99D] text-white flex items-center justify-center shadow-md ring-2 ring-[#E5CB90]">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#1A3841] tracking-tight">
                  Nyaya Sahayak Multi-Turn Chat
                </h3>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#34A99D] text-white">
                  Gemini AI
                </span>
              </div>
              <p className="text-xs text-[#458393] font-bold">
                Maintains full conversation history & statutory reasoning
              </p>
            </div>
          </div>

          {/* Top Actions: Clear Chat & Search Grounding Toggle */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setUseSearchGrounding(!useSearchGrounding)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-2xs border ${
                useSearchGrounding
                  ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/20'
                  : 'bg-white text-stone-600 border-[#E5CB90] hover:bg-[#E5CB90]/40'
              }`}
              title="Google Search Grounding for live legal citations"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Google Search Grounding: {useSearchGrounding ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={handleClearChat}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-stone-100 border border-[#E5CB90] text-stone-700 text-xs font-bold shadow-2xs cursor-pointer"
              title="Reset conversation"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Configuration Bar: Model Picker & Role Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {/* Model Selector */}
          <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-2xl border border-[#E5CB90] shadow-2xs">
            <span className="text-[11px] font-black uppercase text-[#458393] shrink-0">Model:</span>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value as ModelType)}
              className="w-full text-xs font-black text-[#1A3841] bg-transparent focus:outline-hidden cursor-pointer"
            >
              <option value="gemini-3.5-flash">gemini-3.5-flash (General & Search Grounding)</option>
              <option value="gemini-3.1-flash-lite">gemini-3.1-flash-lite (Fast Response)</option>
              <option value="gemini-3.1-pro-preview">gemini-3.1-pro-preview (Complex Legal Analysis)</option>
            </select>
          </div>

          {/* Role Persona Selector */}
          <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-2xl border border-[#E5CB90] shadow-2xs">
            <span className="text-[11px] font-black uppercase text-[#458393] shrink-0">Advisor Role:</span>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
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
      </div>

      {/* Scrollable Chat Thread */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
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
                  <span className="font-mono">{isUser ? 'You (Citizen)' : `Nyaya Sahayak • ${msg.modelUsed || selectedModel}`}</span>
                  <span>{msg.timestamp}</span>
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
                  <div className="flex items-center justify-end gap-2 pt-1">
                    <button
                      onClick={() => handleSpeak(msg.id, msg.text)}
                      className="p-1.5 rounded-full hover:bg-[#E5CB90]/40 text-[#458393] transition-colors cursor-pointer"
                      title="Listen via Text-to-Speech"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${speakingId === msg.id ? 'text-red-600 animate-pulse' : ''}`} />
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
              <span>Analyzing statutes & precedent ({selectedModel})...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Fast Prompts */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-1 shrink-0 scrollbar-none">
        <span className="text-[10px] font-black uppercase text-[#458393] shrink-0">Common Situations:</span>
        {[
          'Police stopped & questioning me at naka',
          'Rights if arrested or detained in lockup',
          'Police refuse to register my FIR',
          'Police want to search my bag/phone without warrant',
          'Officer threatening, abusing, or assaulted me',
          'Police officer asking for a bribe / cash',
          'Where & how to complain against police misconduct?',
          'Vehicle key snatching & towing rules',
        ].map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(prompt)}
            className="text-[11px] font-black px-3 py-1.5 rounded-full bg-white hover:bg-[#E5CB90]/60 border border-[#E5CB90] text-[#1A3841] whitespace-nowrap cursor-pointer transition-all shadow-2xs shrink-0 hover:-translate-y-0.5"
          >
            ⚖️ {prompt}
          </button>
        ))}
      </div>

      {/* Input Composer with SpeechRecognition Mic & Audio Transcription */}
      <div className="shrink-0 space-y-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2 bg-white p-2 rounded-3xl border-2 border-[#E5CB90] focus-within:border-[#34A99D] shadow-md transition-all"
        >
          {/* Browser Speech Recognition API Mic */}
          <SpeechRecognitionMicButton
            language={language}
            variant="compact"
            onTranscriptChange={(text) => {
              setInputText(text);
            }}
          />

          {/* Audio Transcriber fallback */}
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
      </div>

    </div>
  );
};
