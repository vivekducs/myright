import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Mic, Volume2, VolumeX, Loader2, MessageSquare } from 'lucide-react';
import { SupportedLanguage } from '../types';

interface StickyAIAssistantProps {
  language: SupportedLanguage;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export const StickyAIAssistant: React.FC<StickyAIAssistantProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Setup Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      // Set language based on app state
      if (language === 'hi') recognitionRef.current.lang = 'hi-IN';
      else if (language === 'te') recognitionRef.current.lang = 'te-IN';
      else if (language === 'ta') recognitionRef.current.lang = 'ta-IN';
      else recognitionRef.current.lang = 'en-IN';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, [language]);

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  const speakText = (text: string) => {
    if (!isSpeaking || !('speechSynthesis' in window)) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    if (language === 'hi') utterance.lang = 'hi-IN';
    else if (language === 'te') utterance.lang = 'te-IN';
    else if (language === 'ta') utterance.lang = 'ta-IN';
    else utterance.lang = 'en-IN';
    
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    // AI Response logic
    setTimeout(() => {
      const isHindi = language === 'hi';
      const lowerInput = inputText.toLowerCase();
      
      let responseContent = "";
      
      if (lowerInput.includes('bribe') || lowerInput.includes('money') || lowerInput.includes('pay') || lowerInput.includes('घूस') || lowerInput.includes('पैसे')) {
        responseContent = isHindi
          ? "आपको बिना आधिकारिक रसीद (e-challan) के पुलिस को कोई नकद भुगतान करने की आवश्यकता नहीं है। यदि कोई अधिकारी रिश्वत मांगता है, तो आप भ्रष्टाचार निरोधक ब्यूरो (1064) पर कॉल कर सकते हैं।"
          : "You do not have to pay any cash to the police without an official receipt (e-challan). If an officer demands a bribe, you can call the Anti-Corruption Bureau at 1064.";
      } else if (lowerInput.includes('arrest') || lowerInput.includes('detain') || lowerInput.includes('गिरफ्तार') || lowerInput.includes('हिरासत')) {
        responseContent = isHindi
          ? "यदि आपको गिरफ्तार किया जा रहा है, तो डी.के. बासु दिशानिर्देशों के अनुसार, अधिकारी को अपनी नेमप्लेट पहननी चाहिए, गिरफ्तारी मेमो बनाना चाहिए और आपको अपने परिवार को सूचित करने का अधिकार है।"
          : "If you are being arrested, as per D.K. Basu guidelines, the officer must wear their nameplate, prepare an Arrest Memo, and you have the right to inform your family.";
      } else if (lowerInput.includes('fir') || lowerInput.includes('complaint') || lowerInput.includes('शिकायत')) {
        responseContent = isHindi
          ? "आप किसी भी पुलिस स्टेशन में 'जीरो एफआईआर' (Zero FIR) दर्ज कर सकते हैं, चाहे घटना कहीं भी हुई हो। पुलिस एफआईआर दर्ज करने से इनकार नहीं कर सकती (ललिता कुमारी बनाम उत्तर प्रदेश राज्य)।"
          : "You can file a 'Zero FIR' at any police station regardless of where the incident occurred. The police cannot refuse to register an FIR for a cognizable offense (Lalita Kumari vs State of UP).";
      } else {
        responseContent = isHindi 
          ? "नमस्ते! मैं आपका एआई कानूनी सहायक हूँ। मैं समझता हूँ कि पुलिस से जुड़े मामले तनावपूर्ण हो सकते हैं। कृपया घबराएं नहीं, आपको चुप रहने और कानूनी सलाह लेने का अधिकार है (अनुच्छेद 20(3))।"
          : "Hello! I am your AI Legal Assistant. I understand police situations can be stressful. Please stay calm, you have the right to remain silent and seek legal counsel (Article 20(3)).";
      }
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
      };
      
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      speakText(responseContent);
      
    }, 1500);
  };

  // Add initial greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = language === 'hi' 
        ? "नमस्ते! मैं आपका व्यक्तिगत एआई कानूनी सहायक हूँ। आप मुझसे अपनी स्थिति के बारे में बोलकर या लिखकर पूछ सकते हैं।"
        : "Hello! I am your personal AI Legal Assistant. You can ask me about your situation by typing or speaking.";
        
      setMessages([{ id: 'init', role: 'assistant', content: greeting }]);
      speakText(greeting);
    }
  }, [isOpen, language, messages.length]);

  return (
    <>
      {/* Expanded Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[380px] h-[500px] max-h-[75vh] bg-white rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-200 z-50 flex flex-col overflow-hidden flex-shrink-0"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B1A2C] to-slate-900 p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-400/30">
                  <Sparkles className="w-4 h-4 text-teal-300" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">AI Legal Assistant</h3>
                  <p className="text-[10px] text-teal-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Online • Ready to help
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsSpeaking(!isSpeaking)}
                  className="p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title="Toggle Voice Responses"
                >
                  {isSpeaking ? <Volume2 className="w-4 h-4 text-slate-300" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-300" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-teal-600 text-white rounded-tr-sm' 
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-500 transition-all">
                <button
                  onClick={toggleListen}
                  className={`p-2 rounded-full transition-all cursor-pointer ${
                    isListening 
                      ? 'bg-red-100 text-red-600 animate-pulse' 
                      : 'hover:bg-slate-200 text-slate-500'
                  }`}
                  title="Speak"
                >
                  {isListening ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mic className="w-4 h-4" />}
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={language === 'hi' ? "अपना सवाल पूछें..." : "Ask a legal question..."}
                  className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputText.trim()}
                  className="p-2 rounded-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:hover:bg-teal-600 text-white transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-28 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white px-5 py-3.5 rounded-full shadow-lg shadow-teal-600/30 border border-teal-400/30 cursor-pointer group"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-teal-100 group-hover:animate-pulse" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-teal-600" />
            </div>
            <span className="font-bold text-sm tracking-wide shadow-sm hidden sm:block">AI Assistant</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
