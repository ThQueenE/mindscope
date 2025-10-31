import React from 'react';

interface ResultProps {
  title: string;
  onRestart: () => void;
  onShare: () => void;
  isSharing: boolean;
  uiText: Record<string, string>;
  children: React.ReactNode;
}

const Result: React.FC<ResultProps> = ({ title, onRestart, onShare, isSharing, uiText, children }) => {

  return (
    <div className="p-4 md:p-8 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg animate-fade-in-up backdrop-blur-sm text-light-text dark:text-dark-text">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark mb-2">{title}</h1>
      </div>

      <div className="mb-8 text-light-text-secondary dark:text-dark-text-secondary">
        {children}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-light-text dark:text-dark-text rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 active:scale-98 w-full md:w-auto"
        >
          {uiText.backToMainMenu}
        </button>
        <button
          onClick={onShare}
          disabled={isSharing}
          className="px-8 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg shadow-md hover:bg-primary-hover dark:hover:bg-primary-dark-hover transition-all duration-300 w-full md:w-auto disabled:opacity-75 disabled:cursor-wait flex items-center justify-center transform hover:scale-105 active:scale-98"
        >
          {isSharing ? (
            <>
              <svg className="animate-spin -ml-1 rtl:ml-1 ltr:mr-3 rtl:ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {uiText.sharing}
            </>
          ) : (
            uiText.share
          )}
        </button>
      </div>
    </div>
  );
};

export default Result;