import React, { useState, useEffect } from 'react';
import { Language, CognitiveChallengeItem } from '../types';

interface CognitiveChallengeProps {
  language: Language;
  uiText: Record<string, string>;
  challenge: CognitiveChallengeItem | null;
  onBackToMenu: () => void;
  onTaskComplete: (task: 'mentalSpark') => void;
}

const CognitiveChallenge: React.FC<CognitiveChallengeProps> = ({
  language,
  uiText,
  challenge,
  onBackToMenu,
  onTaskComplete,
}) => {
  const [showHint, setShowHint] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // Reset state when a new daily challenge is loaded
    setShowHint(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [challenge]);

  if (!challenge) {
    return (
      <div className="text-center p-8">
        <p>{language === Language.AR ? 'جارٍ تحميل التحدي...' : 'Loading challenge...'}</p>
      </div>
    );
  }

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    onTaskComplete('mentalSpark');
  };
  
  const getButtonClass = (index: number) => {
    const isCorrect = index === challenge.correctAnswerIndex;
    const isSelected = selectedAnswer === index;

    if (isAnswered) {
        if (isCorrect) {
            return 'bg-success-light-bg text-success-text border-success ring-2 ring-success dark:bg-success-dark-bg dark:text-success-dark-text dark:border-success';
        }
        if (isSelected && !isCorrect) {
            return 'bg-danger-light-bg text-danger-text border-danger ring-2 ring-danger dark:bg-danger-dark-bg dark:text-danger-dark-text dark:border-danger';
        }
        return 'bg-gray-100 dark:bg-gray-800 opacity-60 cursor-not-allowed'; // Other non-selected, incorrect answers
    }

    return 'bg-light-bg dark:bg-dark-bg hover:bg-primary/10 dark:hover:bg-primary-dark/10 border-gray-300 dark:border-gray-600'; // Default state
  };


  return (
    <div className="p-4 md:p-8 animate-fade-in-deep w-full max-w-2xl mx-auto bg-light-card dark:bg-dark-card rounded-2xl shadow-xl backdrop-blur-sm">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark">{uiText.cognitiveChallengeTitle}</h1>
        <p className="text-md text-light-text-secondary dark:text-dark-text-secondary mt-2">{uiText.cognitiveChallengeSubtitle}</p>
      </div>

      <div className="p-4 bg-primary/5 dark:bg-primary-dark/10 rounded-lg">
        {challenge.image && (
          <img src={challenge.image} alt={challenge.category} className="rounded-lg mb-4 w-full h-48 object-cover shadow-md" />
        )}
        <div className="mb-4">
          <span className="text-xs font-bold uppercase text-primary dark:text-primary-dark tracking-wider">{uiText.categoryLabel}</span>
          <p className="text-lg font-semibold">{challenge.category}</p>
        </div>
        <p className="text-xl text-light-text dark:text-dark-text leading-relaxed font-lora italic">
          "{challenge.question}"
        </p>
      </div>
      
       <div className="mt-6 text-center">
         <button onClick={() => setShowHint(true)} disabled={showHint || isAnswered} className="px-4 py-2 text-sm bg-accent/10 hover:bg-accent/20 dark:bg-accent-dark/10 dark:hover:bg-accent-dark/20 text-accent-cool dark:text-accent-cool-dark font-semibold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {uiText.showHint}
        </button>
        {showHint && (
            <div className="mt-2 p-3 bg-accent/10 dark:bg-accent-dark/10 rounded-lg animate-fade-in-up text-accent-cool dark:text-accent-cool-dark italic">
                {challenge.hint}
            </div>
        )}
       </div>

      <div className="mt-6 grid grid-cols-1 gap-3">
        {challenge.options.map((option, index) => (
             <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`p-4 rounded-lg shadow-sm border-2 transition-all duration-300 text-lg font-medium text-left rtl:text-right ${getButtonClass(index)}`}
            >
                {option}
            </button>
        ))}
      </div>
      
       {isAnswered && (
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800/80 rounded-lg animate-fade-in-up border-t-2 border-gray-200 dark:border-gray-700">
            <h3 className={`text-xl font-bold text-center mb-2 ${selectedAnswer === challenge.correctAnswerIndex ? 'text-success' : 'text-danger'}`}>
                {selectedAnswer === challenge.correctAnswerIndex ? uiText.correctAnswer : uiText.incorrectAnswer}
            </h3>
            <p className="text-light-text dark:text-dark-text text-center">{challenge.answer}</p>
          </div>
        )}

      <div className="text-center mt-8">
        <button
          onClick={onBackToMenu}
          className="px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 active:scale-98"
        >
          {uiText.backToMainMenu}
        </button>
      </div>

      <style>{`
        @keyframes fade-in-deep {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-deep {
          animation: fade-in-deep 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CognitiveChallenge;