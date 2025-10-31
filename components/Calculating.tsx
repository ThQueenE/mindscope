import React from 'react';

interface CalculatingProps {
    text: string;
}

const Calculating: React.FC<CalculatingProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-light-card/80 dark:bg-dark-card/80 rounded-2xl shadow-lg animate-fade-in-up backdrop-blur-sm">
      <div className="w-24 h-24 mb-6 relative">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          {/* Static outer ring */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20 dark:text-primary-dark/20" />
          
          {/* Rotating Rings */}
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="219" strokeDashoffset="150" className="text-accent-warm dark:text-accent-warm-dark animate-spin-slow" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="282" strokeDashoffset="240" className="text-primary dark:text-primary-dark animate-spin-reverse" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="157" strokeDashoffset="100" className="text-accent-cool dark:text-accent-cool-dark animate-spin-medium" />
        </svg>
        {/* Center orb */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-primary/20 dark:bg-primary-dark/20 rounded-full animate-pulse-gentle"></div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text animate-pulse">{text}</h2>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-medium {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; transform-origin: center; }
        .animate-spin-medium { animation: spin-medium 3s linear infinite; transform-origin: center; }
        .animate-spin-reverse { animation: spin-reverse 5s linear infinite; transform-origin: center; }
        .animate-pulse-gentle { animation: pulse-gentle 2.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Calculating;