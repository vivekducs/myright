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
        particleCount: 50,
        spread: 70,
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
        particleCount: 110,
        spread: 100,
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
      {/* Tab Selector with Circular Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5CB90]/60 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#458393] text-white shadow-xs">
              Gamified Civic Learning
            </span>
            <span className="text-xs font-bold text-[#34A99D] px-3 py-0.5 rounded-full bg-[#34A99D]/15">
              Interactive Myth Busting & Scenarios
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A3841] tracking-tight">
            {t.quizTitle}
          </h2>
          <p className="text-sm text-[#458393] font-bold">
            {t.quizSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#FFF3C8] p-1.5 rounded-full border-2 border-[#E5CB90] shadow-xs">
          <button
            id="tab-myths-btn"
            onClick={() => setActiveTab('myths')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeTab === 'myths'
                ? 'bg-[#458393] text-[#FFF3C8] shadow-md'
                : 'text-[#1A3841] hover:bg-[#E5CB90]/40'
            }`}
          >
            Myth-Buster 3D Cards
          </button>
          <button
            id="tab-quiz-btn"
            onClick={() => setActiveTab('quiz')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-[#458393] text-[#FFF3C8] shadow-md'
                : 'text-[#1A3841] hover:bg-[#E5CB90]/40'
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
              💡 Tap any card to flip in 3D and reveal the official statutory legal reality.
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
                  className="cursor-pointer select-none min-h-[230px] group"
                >
                  <ThreeDCard className="h-full">
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="w-full h-full relative min-h-[230px]"
                    >
                      {/* FRONT OF CARD (The Common Myth) */}
                      <div
                        style={{ backfaceVisibility: 'hidden' }}
                        className={`absolute inset-0 p-6 rounded-[32px] border-2 shadow-md group-hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                          isFlipped ? 'pointer-events-none' : ''
                        } bg-gradient-to-b from-[#FFF3C8] to-[#FFF9E6] border-red-300/80 group-hover:border-red-400`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-300">
                              Common Myth ✕
                            </span>
                            <span className="text-[11px] font-black text-[#458393] uppercase px-2.5 py-0.5 rounded-full bg-[#E5CB90]/40">
                              {item.tag}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-black text-[#1A3841] leading-snug">
                            "{mythText}"
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-[#E5CB90]/60 flex items-center justify-between text-xs font-black text-[#34A99D]">
                          <span>Tap to flip and reveal reality</span>
                          <div className="w-7 h-7 rounded-full bg-[#34A99D]/20 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* BACK OF CARD (The Legal Reality) */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                        className={`absolute inset-0 p-6 rounded-[32px] border-2 shadow-xl flex flex-col justify-between transition-all bg-gradient-to-b from-[#34A99D] to-[#458393] text-[#FFF3C8] border-[#34A99D] ${
                          !isFlipped ? 'pointer-events-none' : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFF3C8] text-[#1A3841]">
                              Legal Reality ✓
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#E5CB90] px-2 py-0.5 rounded-full bg-white/10">
                              {item.lawSection}
                            </span>
                          </div>
                          <h4 className="text-sm font-black text-white mb-1">
                            {realityHeading}
                          </h4>
                          <p className="text-xs text-[#FFF3C8]/90 font-semibold leading-relaxed">
                            {explanationText}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#FFF3C8]/20 text-[11px] text-[#E5CB90] font-black flex items-center justify-between">
                          <span>Tap to flip back</span>
                          <RefreshCw className="w-3.5 h-3.5" />
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
              <div className="p-6 sm:p-8 rounded-[36px] bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-6">
                
                {/* Progress Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5CB90]">
                  <span className="text-xs font-black uppercase tracking-wider text-[#458393]">
                    Question {currentQIndex + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#34A99D]/20 text-[#1A3841] text-xs font-black border border-[#34A99D]">
                    Score: {score}
                  </span>
                </div>

                {/* Question */}
                <div>
                  <span className="text-[11px] font-black uppercase text-[#458393] tracking-wider block mb-1">
                    Scenario / Rule:
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#1A3841] leading-snug">
                    {currentQ.question}
                  </h3>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctIndex;

                    let btnStyle = 'bg-white hover:bg-[#E5CB90]/40 border-2 border-[#E5CB90] text-[#1A3841] hover:border-[#34A99D]';
                    if (isAnswered) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-950 font-black';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100 border-2 border-rose-500 text-rose-950 font-black';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        id={`quiz-opt-${idx}`}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswered}
                        className={`w-full p-4 rounded-full text-left text-sm font-bold transition-all flex items-center justify-between cursor-pointer shadow-2xs hover:scale-[1.01] px-5 ${btnStyle}`}
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
                    className="p-5 rounded-3xl bg-[#E5CB90]/40 border-2 border-[#E5CB90] space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-black text-[#1A3841]">
                      <Sparkles className="w-4 h-4 text-[#34A99D]" />
                      <span>Legal Reference & Rule:</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#1A3841] leading-relaxed">
                      {currentQ.explanation}
                    </p>
                    <span className="inline-block text-[11px] font-mono font-bold text-[#458393] bg-white/90 px-3 py-1 rounded-full border border-[#E5CB90]">
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
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#458393] hover:bg-[#34A99D] text-[#FFF3C8] font-black text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
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
              <div className="p-8 sm:p-10 rounded-[40px] bg-[#FFF3C8] border-2 border-[#E5CB90] text-center space-y-6 shadow-2xl">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#34A99D] to-[#458393] text-white flex items-center justify-center mx-auto shadow-xl ring-4 ring-[#FFF3C8]">
                  <Award className="w-12 h-12 text-[#E5CB90]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1A3841]">
                    Quiz Complete!
                  </h3>
                  <p className="text-base font-black text-[#458393]">
                    You scored {score} out of {QUIZ_QUESTIONS.length}
                  </p>
                </div>

                <p className="text-sm font-bold text-[#1A3841] max-w-md mx-auto leading-relaxed">
                  {score >= 4
                    ? '🎉 Outstanding! You are exceptionally well-informed about your fundamental rights and police procedures under Indian law.'
                    : 'Good attempt! Explore the D.K. Basu guidelines and legal articles to brush up on your citizen safeguards.'}
                </p>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#458393] hover:bg-[#34A99D] text-[#FFF3C8] font-black text-sm shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all cursor-pointer"
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
