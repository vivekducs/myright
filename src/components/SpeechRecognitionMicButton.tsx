import React from 'react';
import { Mic, MicOff, AlertCircle, Sparkles, Volume2, Radio } from 'lucide-react';
import { useSpeechRecognition } from '../utils/useSpeechRecognition';
import { SupportedLanguage } from '../types';
import { LANGUAGE_OPTIONS } from '../data/translations';

interface SpeechRecognitionMicButtonProps {
  language: SupportedLanguage;
  onTranscriptChange: (text: string, isFinal: boolean) => void;
  onAutoSubmit?: (finalText: string) => void;
  buttonLabel?: string;
  variant?: 'prominent' | 'compact' | 'pill' | 'emergency-floating';
  placeholderHint?: string;
  className?: string;
}

export const SpeechRecognitionMicButton: React.FC<SpeechRecognitionMicButtonProps> = ({
  language,
  onTranscriptChange,
  onAutoSubmit,
  buttonLabel = 'Speak Situation (Speech API)',
  variant = 'prominent',
  placeholderHint,
  className = '',
}) => {
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const {
    isListening,
    transcript,
    interimTranscript,
    errorMessage,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
    currentLanguageCode,
  } = useSpeechRecognition({
    language,
    continuous: true,
    interimResults: true,
    onResult: (text, isFinal) => {
      onTranscriptChange(text, isFinal);
    },
    onEnd: () => {
      if (transcript && onAutoSubmit) {
        onAutoSubmit(transcript);
      }
    },
  });

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      resetTranscript();
      startListening();
    }
  };

  // Compact Variant (e.g. inside chat inputs or tight toolbars)
  if (variant === 'compact') {
    return (
      <div className={`relative inline-flex items-center ${className}`}>
        <button
          type="button"
          onClick={toggleListening}
          className={`flex items-center justify-center p-2 rounded-full transition-all cursor-pointer shadow-xs ${
            isListening
              ? 'bg-red-600 text-white animate-pulse ring-4 ring-red-300 scale-105'
              : 'bg-white hover:bg-[#E5CB90]/50 border border-[#E5CB90] text-[#1A3841] hover:text-[#34A99D]'
          }`}
          title={
            isListening
              ? `Listening in ${langConfig.name} (${currentLanguageCode}). Click to stop.`
              : `Speak query using browser SpeechRecognition (${langConfig.name})`
          }
        >
          {isListening ? (
            <MicOff className="w-4 h-4 text-white" />
          ) : (
            <Mic className="w-4 h-4 text-[#34A99D]" />
          )}
        </button>

        {isListening && (
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black tracking-wider uppercase whitespace-nowrap shadow-md animate-bounce">
            Listening...
          </span>
        )}
      </div>
    );
  }

  // Pill Variant (clean badge with language flag)
  if (variant === 'pill') {
    return (
      <div className={`inline-flex flex-col items-start gap-1.5 ${className}`}>
        <button
          type="button"
          onClick={toggleListening}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-xs ${
            isListening
              ? 'bg-red-600 text-white animate-pulse ring-2 ring-red-400'
              : 'bg-[#FFF3C8] hover:bg-[#E5CB90] border-2 border-[#E5CB90] text-[#1A3841]'
          }`}
        >
          {isListening ? (
            <>
              <MicOff className="w-3.5 h-3.5 text-white" />
              <span>Listening ({langConfig.nativeName})... Tap to Stop</span>
            </>
          ) : (
            <>
              <Mic className="w-3.5 h-3.5 text-[#34A99D]" />
              <span>{buttonLabel}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#34A99D]/15 text-[#1A3841]">
                {langConfig.flag} {langConfig.code.toUpperCase()}
              </span>
            </>
          )}
        </button>

        {isListening && (interimTranscript || transcript) && (
          <div className="text-[11px] font-bold text-[#1A3841] bg-white/95 px-3 py-1 rounded-xl border border-red-300 shadow-xs max-w-sm">
            <span className="text-red-600 font-black"> Live: </span>
            <span>{interimTranscript || transcript}</span>
          </div>
        )}

        {errorMessage && (
          <div className="flex items-center gap-1 text-red-600 text-[10px] font-bold">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    );
  }

  // Prominent Variant (Designed for high-stress accessibility)
  return (
    <div className={`w-full space-y-2.5 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={toggleListening}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md ${
            isListening
              ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse ring-4 ring-red-300 -translate-y-0.5'
              : 'bg-gradient-to-r from-[#1A3841] to-[#458393] hover:from-[#34A99D] hover:to-[#1A3841] text-white hover:shadow-lg hover:-translate-y-0.5'
          }`}
          title="Speak your situation in your selected Indian language"
        >
          {isListening ? (
            <>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <MicOff className="w-4 h-4 text-white" />
              </div>
              <span>Listening in {langConfig.name} ({langConfig.nativeName}) — Tap to Stop</span>
            </>
          ) : (
            <>
              <Mic className="w-4 h-4 text-[#FFF3C8]" />
              <span>{buttonLabel}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-[#FFF3C8] font-mono">
                {langConfig.flag} {currentLanguageCode}
              </span>
            </>
          )}
        </button>

        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#458393]">
          <Radio className={`w-3.5 h-3.5 ${isListening ? 'text-red-500 animate-pulse' : 'text-[#34A99D]'}`} />
          <span>Speech Recognition API</span>
        </div>
      </div>

      {/* Live Active Audio Stream Banner */}
      {isListening && (
        <div className="p-3.5 rounded-2xl bg-red-50/95 border-2 border-red-300 shadow-inner flex flex-col gap-1.5 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
              <span className="text-[11px] font-black uppercase text-red-800 tracking-wider">
                Capturing High-Stress Speech ({langConfig.name}):
              </span>
            </div>
            <span className="text-[10px] text-red-700 font-bold">
              Speak naturally or say key terms
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white text-xs sm:text-sm font-bold text-[#1A3841] min-h-[38px] border border-red-200">
            {interimTranscript || transcript ? (
              <span className="text-stone-900 leading-relaxed">
                {transcript} <span className="text-red-600 italic">{interimTranscript}</span>
              </span>
            ) : (
              <span className="text-stone-400 italic">
                {placeholderHint || 'Listening... describe what police are doing or what happened...'}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Error display */}
      {errorMessage && (
        <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
