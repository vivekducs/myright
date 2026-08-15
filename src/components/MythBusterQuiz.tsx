import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Sparkles, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight, ShieldAlert, AlertTriangle } from 'lucide-react';
import { MYTHS_DATA } from '../data/mythsData';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { ThreeDCard } from './ThreeDCard';
import confetti from 'canvas-confetti';

interface MythBusterQuizProps {
  language: 'en' | 'hi' | 'hinglish';
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
            {language === 'hi' ? 'मिथक व ज्ञान परीक्षा' : 'Police Myths & Citizen Knowledge Quiz'}
          </h2>
          <p className="text-sm text-[#458393] font-medium">
            Shatter common misconceptions about police powers and test your understanding of Indian criminal law.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-[#E5CB90]/40 p-1 rounded-2xl border border-[#E5CB90]">
          <button
            onClick={() => setActiveTab('myths')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'myths'
                ? 'bg-[#458393] text-[#FFF3C8] shadow-xs'
                : 'text-[#1A3841] hover:bg-[#E5CB90]/30'
            }`}
          >
            10 Big Police Myths
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-[#458393] text-[#FFF3C8] shadow-xs'
                : 'text-[#1A3841] hover:bg-[#E5CB90]/30'
            }`}
          >
            Interactive Quiz
          </button>
        </div>
      </div>

      {/* MYTHS TAB */}
      {activeTab === 'myths' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MYTHS_DATA.map((item) => {
            const isFlipped = !!flippedMyths[item.id];
            return (
              <ThreeDCard
                key={item.id}
                className="cursor-pointer h-72"
                onClick={() => toggleFlip(item.id)}
              >
                <div
                  className={`h-full p-5 rounded-3xl border-2 transition-all flex flex-col justify-between ${
                    isFlipped
                      ? 'bg-gradient-to-br from-[#458393] to-[#1A3841] text-[#FFF3C8] border-[#34A99D] shadow-lg'
                      : 'bg-gradient-to-b from-[#FFF3C8] to-[#E5CB90]/30 text-[#1A3841] border-[#E5CB90] shadow-sm hover:shadow-md'
                  }`}
                >
                  {!isFlipped ? (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-700 border border-red-400">
                            Myth
                          </span>
                          <span className="text-xs font-bold text-[#458393]">{item.tag}</span>
                        </div>
                        <h3 className="font-extrabold text-base text-[#1A3841] leading-snug">
                          "{item.myth}"
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-[#E5CB90]/60 flex items-center justify-between text-xs font-bold text-[#34A99D]">
                        <span>Click to reveal legal reality</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-400 text-emerald-950">
                            Legal Reality
                          </span>
                          <span className="text-[10px] font-bold text-[#E5CB90]">{item.lawSection}</span>
                        </div>
                        <h4 className="font-extrabold text-sm text-[#E5CB90]">
                          {item.reality}
                        </h4>
                        <p className="text-xs text-white/90 font-medium leading-relaxed">
                          {item.explanation}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/20 text-[10px] font-bold text-[#E5CB90] text-center">
                        Tap card to flip back
                      </div>
                    </>
                  )}
                </div>
              </ThreeDCard>
            );
          })}
        </div>
      )}

      {/* QUIZ TAB */}
      {activeTab === 'quiz' && (
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <ThreeDCard>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF3C8] border-2 border-[#E5CB90] shadow-xl space-y-6">
                
                {/* Quiz Header & Progress */}
                <div className="flex items-center justify-between border-b border-[#E5CB90] pb-3">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#34A99D]" />
                    <span className="text-xs font-extrabold uppercase text-[#1A3841]">
                      Question {currentQIndex + 1} of {QUIZ_QUESTIONS.length}
                    </span>
                  </div>
                  <span className="text-xs font-black text-[#458393]">
                    Score: {score}
                  </span>
                </div>

                {/* Question */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#1A3841] leading-snug">
                  {currentQ.question}
                </h3>

                {/* Options */}
                <div className="space-y-2.5">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctIndex;
                    let btnStyle = 'bg-white border-[#E5CB90] text-[#1A3841] hover:bg-[#E5CB90]/30';

                    if (isAnswered) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-extrabold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100 border-rose-500 text-rose-950 font-extrabold';
                      } else {
                        btnStyle = 'bg-white/60 border-gray-200 text-gray-500 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full p-3.5 rounded-2xl border-2 text-left font-semibold text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle} cursor-pointer`}
                      >
                        <span>{opt}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Box */}
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-[#E5CB90]/40 border border-[#E5CB90] space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-[#1A3841]">
                      <Sparkles className="w-4 h-4 text-[#34A99D]" />
                      <span>Legal Citation: {currentQ.legalReference}</span>
                    </div>
                    <p className="text-xs text-[#1A3841] font-medium leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </motion.div>
                )}

                {/* Next Button */}
                {isAnswered && (
                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-3 rounded-xl bg-[#458393] hover:bg-[#34A99D] text-[#FFF3C8] font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{currentQIndex === QUIZ_QUESTIONS.length - 1 ? 'View Final Result' : 'Next Question'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

              </div>
            </ThreeDCard>
          ) : (
            <ThreeDCard>
              <div className="p-8 rounded-3xl bg-[#FFF3C8] border-2 border-[#34A99D] text-center space-y-5 shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#34A99D] to-[#458393] text-[#FFF3C8] flex items-center justify-center mx-auto shadow-md">
                  <Award className="w-8 h-8 text-[#E5CB90]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-[#1A3841]">Quiz Completed!</h3>
                  <p className="text-sm font-semibold text-[#458393]">
                    You scored <span className="text-lg font-black text-[#1A3841]">{score}</span> out of <span className="text-lg font-black text-[#1A3841]">{QUIZ_QUESTIONS.length}</span>
                  </p>
                </div>

                <p className="text-xs text-[#1A3841] font-medium max-w-md mx-auto">
                  {score === QUIZ_QUESTIONS.length
                    ? 'Outstanding! You have a firm, legally fortified grasp of your fundamental rights with Indian police.'
                    : 'Good attempt! Share this guide with friends and family so every citizen knows their legal protections.'}
                </p>

                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-2.5 rounded-xl bg-[#458393] hover:bg-[#34A99D] text-[#FFF3C8] font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-[#E5CB90]" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </ThreeDCard>
          )}
        </div>
      )}
    </div>
  );
};
