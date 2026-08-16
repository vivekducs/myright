import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles, AlertCircle, PhoneCall, PhoneOff, Radio, RefreshCw, MessageSquare } from 'lucide-react';
import { float32ToInt16PCM, arrayBufferToBase64, base64ToAudioBuffer } from '../utils/audioUtils';
import { SupportedLanguage } from '../types';

interface GeminiLiveVoiceProps {
  language: SupportedLanguage;
}

interface TranscriptMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const GeminiLiveVoice: React.FC<GeminiLiveVoiceProps> = ({ language }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Ready to connect to Live Voice Counsel');
  const [error, setError] = useState<string | null>(null);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [transcripts, setTranscripts] = useState<TranscriptMessage[]>([]);

  // Refs for Web Audio and WebSocket
  const wsRef = useRef<WebSocket | null>(null);
  const inputAudioCtxRef = useRef<AudioContext | null>(null);
  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const isMutedRef = useRef<boolean>(false);

  // Sync ref with state
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disconnectLive();
    };
  }, []);

  const connectLive = async () => {
    setError(null);
    setIsConnecting(true);
    setStatusMessage('Connecting to Gemini Live API (gemini-3.1-flash-live-preview)...');

    try {
      // 1. Initialize Audio Contexts
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      
      // Input Audio Context (16kHz for Gemini Live model input)
      inputAudioCtxRef.current = new AudioContextClass({ sampleRate: 16000 });
      // Output Audio Context (24kHz for Gemini Live audio playback)
      outputAudioCtxRef.current = new AudioContextClass({ sampleRate: 24000 });
      nextStartTimeRef.current = outputAudioCtxRef.current.currentTime;

      // 2. Request microphone stream
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      mediaStreamRef.current = stream;

      // 3. Connect to Backend WebSocket
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/live`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnecting(false);
        setIsConnected(true);
        setStatusMessage('Live Voice Counsel connected! Speak naturally into your microphone.');
        
        // Setup input audio processor node
        setupAudioInput(stream, inputAudioCtxRef.current!);
      };

      ws.onmessage = async (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.error) {
            setError(data.error);
            setStatusMessage('Error received from Live API');
          }

          // Interruption signal: cancel playback immediately
          if (data.interrupted) {
            stopAllActivePlayback();
            setIsSpeaking(false);
            setStatusMessage('Interrupted — Listening to you...');
          }

          // Audio chunk playback
          if (data.audio && outputAudioCtxRef.current) {
            playAudioChunk(data.audio);
          }
        } catch (err) {
          console.error('Error handling WS message:', err);
        }
      };

      ws.onerror = (e) => {
        console.error('WebSocket error:', e);
        setError('WebSocket connection error. Make sure your server is running.');
        disconnectLive();
      };

      ws.onclose = () => {
        setIsConnected(false);
        setIsConnecting(false);
        setStatusMessage('Live voice session ended.');
      };
    } catch (err: any) {
      console.error('Failed to connect Live API:', err);
      setError(err?.message || 'Could not access microphone or connect to Live API.');
      disconnectLive();
    }
  };

  const setupAudioInput = (stream: MediaStream, audioCtx: AudioContext) => {
    const source = audioCtx.createMediaStreamSource(stream);
    // ScriptProcessor with buffer size 2048 or 4096 (approx 128ms - 256ms)
    const processor = audioCtx.createScriptProcessor(4096, 1, 1);
    processorRef.current = processor;

    processor.onaudioprocess = (e) => {
      if (isMutedRef.current || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
        return;
      }

      const inputData = e.inputBuffer.getChannelData(0);

      // Measure volume level for visualizer
      let sum = 0;
      for (let i = 0; i < inputData.length; i++) {
        sum += inputData[i] * inputData[i];
      }
      const rms = Math.sqrt(sum / inputData.length);
      setVolumeLevel(Math.min(100, Math.round(rms * 400)));

      // Convert float32 [-1.0, 1.0] to 16-bit PCM ArrayBuffer
      const pcmBuffer = float32ToInt16PCM(inputData);
      const base64PCM = arrayBufferToBase64(pcmBuffer);

      // Send to server
      wsRef.current.send(
        JSON.stringify({
          audio: base64PCM,
        })
      );
    };

    source.connect(processor);
    processor.connect(audioCtx.destination);
  };

  const playAudioChunk = (base64Audio: string) => {
    const audioCtx = outputAudioCtxRef.current;
    if (!audioCtx) return;

    try {
      setIsSpeaking(true);
      setStatusMessage('Legal Counsel is speaking...');

      const audioBuffer = base64ToAudioBuffer(base64Audio, audioCtx, 24000);
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);

      // Ensure gapless playback by scheduling next start time
      const currentTime = audioCtx.currentTime;
      if (nextStartTimeRef.current < currentTime) {
        nextStartTimeRef.current = currentTime;
      }

      source.start(nextStartTimeRef.current);
      nextStartTimeRef.current += audioBuffer.duration;

      activeSourcesRef.current.push(source);

      source.onended = () => {
        activeSourcesRef.current = activeSourcesRef.current.filter((s) => s !== source);
        if (activeSourcesRef.current.length === 0) {
          setIsSpeaking(false);
          setStatusMessage('Live Listening — Speak anytime...');
        }
      };
    } catch (e) {
      console.error('Audio chunk decoding error:', e);
    }
  };

  const stopAllActivePlayback = () => {
    activeSourcesRef.current.forEach((src) => {
      try {
        src.stop();
        src.disconnect();
      } catch (e) {
        // ignore
      }
    });
    activeSourcesRef.current = [];
    if (outputAudioCtxRef.current) {
      nextStartTimeRef.current = outputAudioCtxRef.current.currentTime;
    }
  };

  const disconnectLive = () => {
    stopAllActivePlayback();

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }
    if (inputAudioCtxRef.current) {
      inputAudioCtxRef.current.close().catch(() => {});
      inputAudioCtxRef.current = null;
    }
    if (outputAudioCtxRef.current) {
      outputAudioCtxRef.current.close().catch(() => {});
      outputAudioCtxRef.current = null;
    }
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    setIsConnected(false);
    setIsConnecting(false);
    setIsSpeaking(false);
    setVolumeLevel(0);
    setStatusMessage('Session disconnected.');
  };

  return (
    <div className="p-6 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-6">
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xs flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              Live Voice Mode
            </span>
            <span className="text-xs font-bold text-[#34A99D] px-2.5 py-0.5 rounded-full bg-[#34A99D]/15">
              gemini-3.1-flash-live-preview
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#1A3841]">
            Real-Time Legal Voice Counsel
          </h3>
          <p className="text-xs sm:text-sm text-[#458393] font-bold">
            Instant bidirectional voice conversation with zero-latency interruption support.
          </p>
        </div>

        {/* Live indicator badge */}
        <div className="flex items-center gap-2">
          {isConnected ? (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-black shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE ACTIVE</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 text-stone-600 text-xs font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
              <span>STANDBY</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/90 to-[#E5CB90]/25 border-2 border-[#E5CB90] shadow-inner space-y-6 text-center">
        
        {/* Animated Voice Orb / Waveform Visualizer */}
        <div className="relative flex items-center justify-center">
          {/* Wave ripple rings */}
          {isConnected && (
            <>
              <motion.div
                animate={{
                  scale: isSpeaking ? [1, 1.35, 1] : volumeLevel > 10 ? [1, 1.25, 1] : [1, 1.05, 1],
                  opacity: isSpeaking ? [0.6, 0.2, 0.6] : [0.4, 0.1, 0.4],
                }}
                transition={{ repeat: Infinity, duration: isSpeaking ? 1.2 : 2.0 }}
                className={`absolute w-44 h-44 rounded-full ${
                  isSpeaking ? 'bg-teal-400/40' : 'bg-emerald-400/30'
                }`}
              />
              <motion.div
                animate={{
                  scale: isSpeaking ? [1, 1.6, 1] : volumeLevel > 20 ? [1, 1.45, 1] : [1, 1.1, 1],
                  opacity: isSpeaking ? [0.4, 0, 0.4] : [0.2, 0, 0.2],
                }}
                transition={{ repeat: Infinity, duration: isSpeaking ? 1.5 : 2.5 }}
                className={`absolute w-56 h-56 rounded-full ${
                  isSpeaking ? 'bg-cyan-400/30' : 'bg-[#34A99D]/20'
                }`}
              />
            </>
          )}

          {/* Central Call Button / Orb */}
          <button
            onClick={isConnected ? disconnectLive : connectLive}
            disabled={isConnecting}
            className={`relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-300 cursor-pointer ${
              isConnected
                ? isSpeaking
                  ? 'bg-gradient-to-tr from-teal-600 via-[#34A99D] to-cyan-500 scale-105 ring-4 ring-teal-300'
                  : isMuted
                  ? 'bg-gradient-to-tr from-stone-600 to-stone-700 ring-4 ring-stone-300'
                  : 'bg-gradient-to-tr from-emerald-600 to-teal-600 ring-4 ring-emerald-300'
                : 'bg-gradient-to-tr from-[#1A3841] via-[#458393] to-[#34A99D] hover:scale-105 ring-4 ring-[#E5CB90]'
            }`}
          >
            {isConnecting ? (
              <RefreshCw className="w-10 h-10 animate-spin text-white" />
            ) : isConnected ? (
              isSpeaking ? (
                <>
                  <Volume2 className="w-10 h-10 animate-bounce" />
                  <span className="text-[10px] font-black uppercase mt-1 tracking-wider">Speaking</span>
                </>
              ) : isMuted ? (
                <>
                  <MicOff className="w-10 h-10 text-stone-300" />
                  <span className="text-[10px] font-black uppercase mt-1">Muted</span>
                </>
              ) : (
                <>
                  <Mic className="w-10 h-10 animate-pulse" />
                  <span className="text-[10px] font-black uppercase mt-1 tracking-wider">Listening</span>
                </>
              )
            ) : (
              <>
                <PhoneCall className="w-10 h-10 mb-1" />
                <span className="text-xs font-black uppercase tracking-wider">Start Call</span>
              </>
            )}
          </button>
        </div>

        {/* Live Status Description */}
        <div className="space-y-1 max-w-md">
          <div className="text-sm sm:text-base font-black text-[#1A3841]">
            {statusMessage}
          </div>
          <p className="text-xs text-[#458393] font-bold">
            {isConnected
              ? 'Speak naturally in English, Hindi, or mixed phrases. You can interrupt anytime by talking.'
              : 'Tap "Start Call" to open a low-latency, two-way conversational legal audio stream.'}
          </p>
        </div>

        {/* Action Controls when Connected */}
        {isConnected && (
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-xs ${
                isMuted
                  ? 'bg-amber-100 border-2 border-amber-400 text-amber-900'
                  : 'bg-white hover:bg-[#E5CB90]/40 border-2 border-[#E5CB90] text-[#1A3841]'
              }`}
            >
              {isMuted ? <MicOff className="w-4 h-4 text-amber-700" /> : <Mic className="w-4 h-4 text-[#34A99D]" />}
              <span>{isMuted ? 'Unmute Mic' : 'Mute Mic'}</span>
            </button>

            <button
              onClick={disconnectLive}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <PhoneOff className="w-4 h-4" />
              <span>End Voice Call</span>
            </button>
          </div>
        )}

        {/* Error notification */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-800 text-xs font-bold flex items-center gap-2 max-w-lg text-left">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

      </div>

      {/* Suggested Spoken Phrases */}
      <div className="space-y-2">
        <span className="text-xs font-black uppercase tracking-wider text-[#458393] block">
          Try saying aloud:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#1A3841]">
          <div className="p-3 rounded-2xl bg-white border border-[#E5CB90] shadow-2xs">
            🗣️ "A police officer stopped my car and is asking for cash without challan. What do I say?"
          </div>
          <div className="p-3 rounded-2xl bg-white border border-[#E5CB90] shadow-2xs">
            🗣️ "What are my rights if an officer wants to search my phone at a midnight checkpost?"
          </div>
          <div className="p-3 rounded-2xl bg-white border border-[#E5CB90] shadow-2xs">
            🗣️ "Can female police officers arrest women after sunset under the new BNSS laws?"
          </div>
          <div className="p-3 rounded-2xl bg-white border border-[#E5CB90] shadow-2xs">
            🗣️ "How do I demand an official arrest memo under D.K. Basu guidelines right now?"
          </div>
        </div>
      </div>

    </div>
  );
};
