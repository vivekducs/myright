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

  const handleSend = async () => {
    if (!inputText.trim() || isTyping) return;

    const currentInput = inputText.trim();
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: currentInput,
    };

    const newHistory = [...messages, newMsg];
    setMessages(newHistory);
    setInputText('');
    setIsTyping(true);

    try {
      const payload = {
        messages: newHistory.map(m => ({
          role: m.role,
          text: m.content
        })),
        model: 'gemini-3.5-flash',
        language: language === 'hi' ? 'Hindi' : 'English',
        systemInstruction: `You are a concise, helpful sticky AI legal assistant for Indian citizens. Be brief, clear, and reassuring. Keep responses under 3 sentences if possible. Always refer to BNSS or BNS for criminal law.`
      };

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('API Error');

      const data = await res.json();
      const responseContent = data.text || "I'm sorry, I cannot provide advice at this moment.";

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
      };
      
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      speakText(responseContent);
    } catch (err) {
      console.error(err);
      const isHindi = language === 'hi';
      const fallbackContent = isHindi 
        ? "माफ़ करें, मुझे सर्वर से जुड़ने में समस्या हो रही है। कृपया पुनः प्रयास करें।"
        : "Sorry, I am having trouble connecting to the server. Please try again.";
        
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: fallbackContent,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      speakText(fallbackContent);
    }
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
            className="fixed bottom-24 right-4 sm:right-6 w-[340px] sm:w-[380px] h-[500px] max-h-[75vh] bg-white rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-200 z-50 flex flex-col overflow-hidden flex-shrink-0"
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
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white px-5 py-3.5 rounded-full shadow-lg shadow-teal-600/30 border border-teal-400/30 cursor-pointer group"
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
