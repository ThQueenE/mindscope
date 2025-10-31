import React, { useEffect } from 'react';

interface IntroProps {
  onComplete: () => void;
  isFirstTime?: boolean;
}

const Intro: React.FC<IntroProps> = ({ onComplete, isFirstTime = true }) => {
  const duration = isFirstTime ? 2500 : 500;

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`animate-fade-in-out`} style={{ animationDuration: `${duration}ms` }}>
        <svg className="w-28 h-28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Central Eye Shape */}
          <circle cx="50" cy="50" r="10" className="fill-[#115E60] dark:fill-[#65C3C6]" />
          
          {/* Radiating Waves */}
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#328E91] dark:text-[#88D4D6] animate-wave" style={{ animationDelay: '0s' }}/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#65C3C6] dark:text-[#A9E1E2] animate-wave" style={{ animationDelay: '0.3s' }}/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#115E60] dark:text-[#65C3C6] animate-wave" style={{ animationDelay: '0.6s' }}/>
        </svg>
      </div>
      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: scale(0.9); }
          20% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }
        .animate-fade-in-out {
          animation: fade-in-out ease-in-out forwards;
        }
        @keyframes wave {
          0% {
            stroke-dasharray: 0 500;
            opacity: 0;
          }
          50% {
            stroke-dasharray: 500 500;
            opacity: 1;
          }
          100% {
            stroke-dasharray: 500 0;
            opacity: 0;
          }
        }
        .animate-wave {
          animation: wave 1.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Intro;