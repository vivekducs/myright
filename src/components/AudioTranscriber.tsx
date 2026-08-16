import React, { useState, useRef } from 'react';
import { Mic, MicOff, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { blobToBase64 } from '../utils/audioUtils';

interface AudioTranscriberProps {
  onTranscribed: (text: string) => void;
  buttonLabel?: string;
  className?: string;
  variant?: 'inline' | 'button' | 'pill';
}

export const AudioTranscriber: React.FC<AudioTranscriberProps> = ({
  onTranscribed,
  buttonLabel = 'Voice Input',
  className = '',
  variant = 'button',
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const startRecording = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        // Stop audio tracks
        stream.getTracks().forEach((track) => track.stop());

        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await handleSendForTranscription(audioBlob);
      };

      mediaRecorder.start(250);
      setIsRecording(true);
      setRecordingDuration(0);

      // Duration counter
      timerRef.current = window.setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    } catch (err: any) {
      console.error('Microphone error:', err);
      setError('Microphone access denied or unavailable.');
    }
  };

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  const handleSendForTranscription = async (blob: Blob) => {
    setIsTranscribing(true);
    try {
      const base64Audio = await blobToBase64(blob);
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64: base64Audio,
          mimeType: blob.type || 'audio/webm',
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      if (data.transcription) {
        onTranscribed(data.transcription);
      } else {
        setError('No speech recognized.');
      }
    } catch (err: any) {
      console.error('Transcription error:', err);
      setError('Transcription failed. Please try again.');
    } finally {
      setIsTranscribing(false);
    }
  };

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        {isRecording ? (
          <button
            type="button"
            onClick={stopRecording}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-black animate-pulse shadow-md transition-all cursor-pointer"
            title="Click to stop and transcribe"
          >
            <MicOff className="w-3.5 h-3.5" />
            <span>Stop ({recordingDuration}s)</span>
          </button>
        ) : isTranscribing ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E5CB90]/60 text-[#1A3841] text-xs font-black shadow-xs">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#34A99D]" />
            <span>Transcribing (gemini-1.5-flash)...</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={startRecording}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-[#E5CB90]/50 border border-[#E5CB90] text-[#1A3841] hover:text-[#34A99D] text-xs font-bold shadow-2xs transition-all cursor-pointer"
            title="Speak using microphone (Transcribed via Gemini 3.5 Flash)"
          >
            <Mic className="w-3.5 h-3.5 text-[#34A99D]" />
            <span>Speak</span>
          </button>
        )}
        {error && <span className="text-[10px] text-red-600 font-bold">{error}</span>}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start gap-1.5 ${className}`}>
      {isRecording ? (
        <button
          type="button"
          onClick={stopRecording}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-black shadow-md animate-pulse cursor-pointer transition-all"
        >
          <MicOff className="w-4 h-4" />
          <span>Recording Voice ({recordingDuration}s) — Click to Transcribe</span>
        </button>
      ) : isTranscribing ? (
        <button
          type="button"
          disabled
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5CB90] text-[#1A3841] text-xs sm:text-sm font-bold shadow-xs cursor-wait"
        >
          <Loader2 className="w-4 h-4 animate-spin text-[#34A99D]" />
          <span>AI Audio Transcription in Progress...</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={startRecording}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#E5CB90]/40 border-2 border-[#E5CB90] hover:border-[#34A99D] text-[#1A3841] text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
        >
          <Mic className="w-4 h-4 text-[#34A99D]" />
          <span>{buttonLabel}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#34A99D]/15 text-[#34A99D] font-extrabold">
            gemini-1.5-flash
          </span>
        </button>
      )}

      {error && (
        <div className="flex items-center gap-1 text-red-600 text-xs font-bold">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
