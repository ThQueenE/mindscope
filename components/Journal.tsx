import React, { useState, useEffect, useRef } from 'react';
import { JournalHistory, Language } from '../types';

interface JournalProps {
  language: Language;
  history: JournalHistory;
  onSubmit: (text: string) => void;
  onBackToMenu: () => void;
  uiText: Record<string, string>;
  prompt: { text: string; isLoading: boolean };
  onTaskComplete: (task: 'dailyReflection') => void;
}

const Journal: React.FC<JournalProps> = ({ language, history, onSubmit, onBackToMenu, uiText, prompt, onTaskComplete }) => {
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat history whenever it updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    onSubmit(inputText.trim());
    onTaskComplete('dailyReflection'); // Notify that the task is complete
    setInputText('');
  };
  
  const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>;

  return (
    <div className="p-4 md:p-6 animate-fade-in-deep w-full max-w-2xl mx-auto flex flex-col h-[80vh] bg-white/50 dark:bg-dark-card/50 rounded-2xl shadow-lg backdrop-blur-sm">
      <div className="flex-shrink-0 text-center mb-4">
        <h1 className="text-3xl font-bold text-primary dark:text-primary-dark">{uiText.journalTitle}</h1>
      </div>

       {/* Daily Prompt Section */}
      <div className="flex-shrink-0 p-4 mb-4 bg-primary/10 dark:bg-primary-dark/10 rounded-lg text-center">
        <h2 className="text-sm font-bold text-primary dark:text-primary-dark mb-2">{uiText.journalPromptTitle}</h2>
        {prompt.isLoading ? (
          <div className="flex items-center justify-center">
             <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary dark:border-primary-dark"></div>
          </div>
        ) : (
          <p className="text-base italic text-light-text dark:text-dark-text">"{prompt.text}"</p>
        )}
      </div>

      {/* Chat History */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {history.map((entry, index) => (
          <div key={index} className={`flex items-end gap-2 animate-fade-in-up-fast ${entry.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {entry.role === 'model' && (
              <div className="w-8 h-8 rounded-full bg-accent/50 dark:bg-accent-dark/50 flex-shrink-0"></div>
            )}
            <div
              className={`max-w-xs md:max-w-md p-3 rounded-2xl ${
                entry.role === 'user'
                  ? 'bg-primary dark:bg-primary-dark text-white rounded-br-none rtl:rounded-br-2xl rtl:rounded-bl-none'
                  : 'bg-accent/10 dark:bg-accent-dark/10 text-light-text dark:text-dark-text rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none'
              }`}
            >
              <p className="text-base" dir={language === Language.AR && entry.role === 'model' ? 'rtl' : 'ltr'}>{entry.content}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Form */}
      <div className="flex-shrink-0 mt-4 p-2">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={uiText.journalPlaceholder}
            rows={1}
            className="flex-grow p-3 bg-white/80 dark:bg-slate-800/80 border-2 border-transparent focus:border-primary dark:focus:border-primary-dark rounded-xl resize-none focus:outline-none transition-colors duration-200"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary dark:bg-primary-dark text-white rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100"
          >
            <SendIcon />
          </button>
        </form>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={onBackToMenu}
          className="px-6 py-2 bg-transparent text-sm text-primary/80 dark:text-primary-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
        >
          {uiText.backToMainMenu}
        </button>
      </div>
       <style>{`
        @keyframes fade-in-deep {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-deep {
            animation: fade-in-deep 0.7s ease-out forwards;
        }
        /* Hide scrollbar for clean look */
        .overflow-y-auto::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
};

export default Journal;