import React from 'react';
import { GenericQuestion, Language } from '../types';
import { playSound, ANSWER_SELECT_SOUND, NEXT_QUESTION_SOUND, QUIZ_COMPLETE_SOUND } from '../utils/sounds';

interface QuizProps {
  language: Language;
  questionData: GenericQuestion;
  onAnswer: (optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onBackToMenu: () => void;
  selectedOptionIndex?: number;
  currentQuestion: number;
  totalQuestions: number;
  uiText: Record<string, string>;
}

const Quiz: React.FC<QuizProps> = ({ 
  language, 
  questionData, 
  onAnswer, 
  onNext, 
  onPrevious,
  onBackToMenu,
  selectedOptionIndex,
  currentQuestion, 
  totalQuestions, 
  uiText 
}) => {

  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  const optionPrefixes = language === Language.AR ? ['أ', 'ب', 'ج', 'د'] : ['A', 'B', 'C', 'D'];

  const handleAnswerClick = (index: number) => {
    // Only play the sound if a new answer is selected to avoid repetitive noise.
    if (selectedOptionIndex !== index) {
      playSound(ANSWER_SELECT_SOUND);
    }
    onAnswer(index);
  };

  const handleNextClick = () => {
    // Play the appropriate sound for progressing or completing the quiz.
    if (currentQuestion === totalQuestions) {
      playSound(QUIZ_COMPLETE_SOUND, 0.7); // Slightly louder for completion emphasis.
    } else {
      playSound(NEXT_QUESTION_SOUND);
    }
    
    // A brief delay allows the sound to be heard before the UI transitions.
    setTimeout(() => {
      onNext();
    }, 150);
  };


  return (
    <div className="relative p-4 md:p-8 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg animate-fade-in-up backdrop-blur-sm">

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-light-text dark:text-dark-text">
          <span className="font-semibold w-1/3 ltr:text-left rtl:text-right">{`${uiText.questionPrefix}${currentQuestion}`}</span>
          <div className="w-1/3 text-center">
            <button
              onClick={onBackToMenu}
              className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-all duration-200 transform hover:scale-105 active:scale-98"
              aria-label={uiText.backToMenu}
            >
              {uiText.backToMenu}
            </button>
          </div>
          <span className="text-sm w-1/3 ltr:text-right rtl:text-left">{`${currentQuestion} / ${totalQuestions}`}</span>
        </div>
        <div className="w-full bg-primary/10 dark:bg-primary-dark/10 rounded-full h-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-accent to-primary dark:from-accent-dark dark:to-primary-dark h-3 rounded-full transition-all duration-1000 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className={`text-center mb-6 ${questionData.subQuestion ? 'border-b border-gray-200 dark:border-gray-700 pb-6' : ''}`}>
        <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-4 italic">{questionData.source}</p>
        <h2 className={`text-xl md:text-2xl font-semibold text-light-text dark:text-dark-text ${questionData.subQuestion ? 'mb-1' : 'mb-2'}`}>{questionData.question}</h2>
        {questionData.subQuestion && (
            <p className="text-md text-light-text-secondary dark:text-dark-text-secondary">{questionData.subQuestion}</p>
        )}
      </div>

      <div className={`grid grid-cols-1 ${questionData.options.length > 2 ? 'md:grid-cols-2' : ''} gap-4`}>
        {questionData.options.map((option, index) => {
          const isSelected = selectedOptionIndex === index;
          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`p-4 rounded-lg shadow ltr:text-left rtl:text-right transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark transform hover:scale-105 active:scale-98
                ${
                  isSelected
                    ? 'bg-primary dark:bg-primary-dark text-white ring-2 ring-offset-2 ring-accent dark:ring-accent-dark ring-offset-light-bg dark:ring-offset-dark-bg'
                    : 'bg-gray-200 dark:bg-gray-700 text-light-text dark:text-dark-text hover:bg-gray-300 dark:hover:bg-gray-600'
                }
              `}
            >
              <span className="font-bold ltr:mr-2 rtl:ml-2">{optionPrefixes[index]}.</span>
              {option.text}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={onPrevious}
          disabled={currentQuestion === 1}
          className="px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-light-text dark:text-dark-text rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-98"
        >
          {uiText.previous}
        </button>
        <button
          onClick={handleNextClick}
          disabled={selectedOptionIndex === undefined}
          className="px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg shadow-md hover:bg-primary-hover dark:hover:bg-primary-dark-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-98"
        >
          {uiText.next}
        </button>
      </div>
    </div>
  );
};

export default Quiz;