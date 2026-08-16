import { useState, useEffect, useRef, useCallback } from 'react';
import { SupportedLanguage } from '../types';
import { LANGUAGE_OPTIONS } from '../data/translations';

// Web Speech API Types
interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface UseSpeechRecognitionOptions {
  language?: SupportedLanguage;
  continuous?: boolean;
  interimResults?: boolean;
  onResult?: (transcript: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

export function useSpeechRecognition(options: UseSpeechRecognitionOptions = {}) {
  const {
    language = 'en',
    continuous = false,
    interimResults = true,
    onResult,
    onError,
    onEnd,
  } = options;

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef<any>(null);
  const langConfig = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      setIsSupported(true);
    } else {
      setIsSupported(false);
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // Ignore if already stopped
      }
    }
    setIsListening(false);
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
    setErrorMessage(null);
  }, []);

  const startListening = useCallback(
    (customLangCode?: string) => {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        setErrorMessage('Speech Recognition API is not supported in this browser.');
        if (onError) onError('Speech Recognition API is not supported in this browser.');
        return;
      }

      setErrorMessage(null);
      setTranscript('');
      setInterimTranscript('');

      // Stop any existing instance
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // Ignore
        }
      }

      try {
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.continuous = continuous;
        recognition.interimResults = interimResults;
        recognition.maxAlternatives = 1;

        // Set recognition language
        const targetLang = customLangCode || langConfig.speechCode || 'en-IN';
        recognition.lang = targetLang;

        recognition.onstart = () => {
          setIsListening(true);
          setErrorMessage(null);
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let currentFinal = '';
          let currentInterim = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const item = event.results[i];
            if (item.isFinal) {
              currentFinal += item[0].transcript;
            } else {
              currentInterim += item[0].transcript;
            }
          }

          if (currentFinal) {
            setTranscript((prev) => {
              const updated = prev ? `${prev} ${currentFinal.trim()}` : currentFinal.trim();
              if (onResult) onResult(updated, true);
              return updated;
            });
            setInterimTranscript('');
          } else {
            setInterimTranscript(currentInterim);
            if (onResult && currentInterim) {
              onResult(currentInterim, false);
            }
          }
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.warn('SpeechRecognition error:', event.error);
          let userMsg = `Speech recognition error: ${event.error}`;
          if (event.error === 'not-allowed' || event.error === 'permission-denied') {
            userMsg = 'Microphone permission denied. Please allow microphone access in your browser.';
          } else if (event.error === 'no-speech') {
            userMsg = 'No speech detected. Please speak closer to your microphone.';
          } else if (event.error === 'network') {
            userMsg = 'Network connection issue for speech recognition.';
          }
          setErrorMessage(userMsg);
          setIsListening(false);
          if (onError) onError(userMsg);
        };

        recognition.onend = () => {
          setIsListening(false);
          if (onEnd) onEnd();
        };

        recognition.start();
      } catch (err: any) {
        console.error('Failed to start speech recognition:', err);
        setErrorMessage(err.message || 'Could not start speech recognition.');
        setIsListening(false);
        if (onError) onError(err.message || 'Could not start speech recognition.');
      }
    },
    [continuous, interimResults, langConfig.speechCode, onError, onResult, onEnd]
  );

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // Ignore
        }
      }
    };
  }, []);

  return {
    isListening,
    transcript,
    interimTranscript,
    errorMessage,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
    currentLanguageCode: langConfig.speechCode || 'en-IN',
  };
}
