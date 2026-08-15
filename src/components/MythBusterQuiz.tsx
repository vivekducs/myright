import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Sparkles, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight, ShieldAlert, AlertTriangle } from 'lucide-react';
import { MYTHS_DATA } from '../data/mythsData';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { ThreeDCard } from './ThreeDCard';
import confetti from 'canvas-confetti';
import { SupportedLanguage } from '../types';
import { getT, LANGUAGE_OPTIONS } from '../data/translations';

interface MythBusterQuizProps {
  language: SupportedLanguage;
}

export const MythBusterQuiz: React.FC<MythBusterQuizProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'myths' | 'quiz'>('myths');
  
  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Myth Flip state
  const [flippedMyths, setFlippedMyths] = useState<Record<string, boolean>>({});

  const t = getT(language);

  const toggleFlip = (id: string) => {
    setFlippedMyths((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === QUIZ_QUESTIONS[currentQIndex].correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#34A99D', '#E5CB90', '#FFF3C8', '#458393'],
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
      });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  const currentQ = QUIZ_QUESTIONS[currentQIndex];

  return (
    <div className="space-y-6">
      {/* Tab Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841] tracking-tight">
            {t.quizTitle}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            {t.quizSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#FFF3C8] p-1.5 rounded-2xl border border-[#E5CB90]">
          <button
            id="tab-myths-btn"
            onClick={() => setActiveTab('myths')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'myths'
                ? 'bg-[#458393] text-[#FFF3C8] shadow-xs'
                : 'text-[#1A3841] hover:bg-[#E5CB90]/30'
            }`}
          >
            Myth-Buster 3D Cards
          </button>
          <button
            id="tab-quiz-btn"
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-[#458393] text-[#FFF3C8] shadow-xs'
                : 'text-[#1A3841] hover:bg-[#E5CB90]/30'
            }`}
          >
            Citizen Knowledge Quiz
          </button>
        </div>
      </div>

      {/* Mode 1: 3D Flip Myth-Busting Cards */}
      {activeTab === 'myths' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#458393]">
              💡 Tap any card to flip and reveal the official statutory legal reality.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MYTHS_DATA.map((item) => {
              const isFlipped = !!flippedMyths[item.id];
              const trans = item.translations?.[language];
              const mythText = trans?.myth || item.myth;
              const realityHeading = trans?.reality || item.reality;
              const explanationText = trans?.explanation || item.explanation;

              return (
                <div
                  key={item.id}
                  id={`myth-card-${item.id}`}
                  onClick={() => toggleFlip(item.id)}
                  className="cursor-pointer select-none min-h-[220px]"
                >
                  <ThreeDCard className="h-full">
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="w-full h-full relative min-h-[220px]"
                    >
                      {/* FRONT OF CARD (The Common Myth) */}
                      <div
                        style={{ backfaceVisibility: 'hidden' }}
                        className={`absolute inset-0 p-6 rounded-3xl border-2 shadow-md flex flex-col justify-between transition-all ${
                          isFlipped ? 'pointer-events-none' : ''
                        } bg-gradient-to-b from-[#FFF3C8] to-[#FFF9E6] border-red-300/80`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-100 text-red-800 border border-red-300">
                              Common Myth ✕
                            </span>
                            <span className="text-[11px] font-extrabold text-[#458393] uppercase">
                              {item.tag}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-extrabold text-[#1A3841] leading-snug">
                            "{mythText}"
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-[#E5CB90]/60 flex items-center justify-between text-xs font-bold text-[#34A99D]">
                          <span>Tap to reveal legal reality</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* BACK OF CARD (The Legal Reality) */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                        className={`absolute inset-0 p-6 rounded-3xl border-2 shadow-md flex flex-col justify-between transition-all bg-gradient-to-b from-[#34A99D] to-[#458393] text-[#FFF3C8] border-[#34A99D] ${
                          !isFlipped ? 'pointer-events-none' : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF3C8] text-[#1A3841]">
                              Legal Reality ✓
                            </span>
                            <span className="text-[10px] font-mono text-[#E5CB90]">
                              {item.lawSection}
                            </span>
                          </div>
                          <h4 className="text-sm font-black text-white mb-1">
                            {realityHeading}
                          </h4>
                          <p className="text-xs text-[#FFF3C8]/90 font-medium leading-relaxed">
                            {explanationText}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#FFF3C8]/20 text-[11px] text-[#E5CB90] font-bold">
                          Tap to flip back
                        </div>
                      </div>
                    </motion.div>
                  </ThreeDCard>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mode 2: Interactive Rights Quiz */}
      {activeTab === 'quiz' && (
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <ThreeDCard className="w-full">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-6">
                
                {/* Progress Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E5CB90]">
                  <span className="text-xs font-black uppercase tracking-wider text-[#458393]">
                    Question {currentQIndex + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#34A99D]/20 text-[#1A3841] text-xs font-bold border border-[#34A99D]">
                    Score: {score}
                  </span>
                </div>

                {/* Question */}
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#458393] tracking-wider block mb-1">
                    Scenario / Rule:
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A3841] leading-snug">
                    {currentQ.question}
                  </h3>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctIndex;

                    let btnStyle = 'bg-white hover:bg-[#E5CB90]/40 border-[#E5CB90] text-[#1A3841]';
                    if (isAnswered) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100 border-rose-500 text-rose-950';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        id={`quiz-opt-${idx}`}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswered}
                        className={`w-full p-4 rounded-2xl border-2 text-left text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on answer */}
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-[#E5CB90]/40 border border-[#E5CB90] space-y-2"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A3841]">
                      <Sparkles className="w-4 h-4 text-[#34A99D]" />
                      <span>Legal Reference & Rule:</span>
                    </div>
                    <p className="text-xs font-medium text-[#1A3841] leading-relaxed">
                      {currentQ.explanation}
                    </p>
                    <span className="inline-block text-[11px] font-mono font-bold text-[#458393] bg-white/80 px-2 py-0.5 rounded-md">
                      {currentQ.legalReference}
                    </span>
                  </motion.div>
                )}

                {/* Next Question Trigger */}
                {isAnswered && (
                  <div className="flex justify-end pt-2">
                    <button
                      id="quiz-next-btn"
                      onClick={handleNextQuestion}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#458393] hover:bg-[#34A99D] text-[#FFF3C8] font-extrabold text-sm shadow-md transition-all cursor-pointer"
                    >
                      <span>{currentQIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Final Score'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

              </div>
            </ThreeDCard>
          ) : (
            <ThreeDCard className="w-full">
              <div className="p-8 rounded-3xl bg-[#FFF3C8] border-2 border-[#E5CB90] text-center space-y-6">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#34A99D] to-[#458393] text-white flex items-center justify-center mx-auto shadow-lg">
                  <Award className="w-10 h-10 text-[#E5CB90]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3841]">
                    Quiz Complete!
                  </h3>
                  <p className="text-sm font-bold text-[#458393]">
                    You scored {score} out of {QUIZ_QUESTIONS.length}
                  </p>
                </div>

                <p className="text-sm text-[#1A3841] max-w-md mx-auto">
                  {score >= 4
                    ? '🎉 Outstanding! You are exceptionally well-informed about your fundamental rights and police procedures under Indian law.'
                    : 'Good attempt! Explore the D.K. Basu guidelines and legal articles to brush up on your citizen safeguards.'}
                </p>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#458393] hover:bg-[#34A99D] text-[#FFF3C8] font-extrabold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Retake Quiz</span>
                  </button>
                </div>
              </div>
            </ThreeDCard>
          )}
        </div>
      )}
    </div>
  );
};
