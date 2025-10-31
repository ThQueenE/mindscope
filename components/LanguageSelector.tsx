import React from 'react';
import { Language } from '../types';

interface LanguageSelectorProps {
  onSelect: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  return (
    <div className="text-center animate-fade-in-up">
      <div className="mb-8">
        <h1 className="text-5xl font-cormorant font-bold tracking-widest text-[#115E60] dark:text-[#65C3C6]">MindScope</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <button
          onClick={() => onSelect(Language.EN)}
          className="px-8 py-3 bg-transparent border-2 border-[#115E60] text-[#115E60] rounded-lg shadow-md hover:bg-[#115E60] hover:text-white dark:border-[#65C3C6] dark:text-[#65C3C6] dark:hover:bg-[#65C3C6] dark:hover:text-dark-bg transition-all duration-300 transform hover:scale-105 active:scale-98 w-48 text-lg"
        >
          English
        </button>
        <button
          onClick={() => onSelect(Language.AR)}
          className="px-8 py-3 bg-transparent border-2 border-[#115E60] text-[#115E60] rounded-lg shadow-md hover:bg-[#115E60] hover:text-white dark:border-[#65C3C6] dark:text-[#65C3C6] dark:hover:bg-[#65C3C6] dark:hover:text-dark-bg transition-all duration-300 transform hover:scale-105 active:scale-98 w-48 text-lg"
        >
          العربية
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;