import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';

interface BreathingExerciseProps {
  onClose: () => void;
  language: Language;
  uiText: Record<string, string>;
  onTaskComplete: (task: 'mindfulMoment') => void;
}

const BreathingExercise: React.FC<BreathingExerciseProps> = ({ onClose, uiText, onTaskComplete }) => {
  const [phase, setPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle');
  const [counter, setCounter] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const wasStarted = useRef(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervals = { inhale: 4, hold: 4, exhale: 6 };
    
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      if (phase === 'inhale') {
        setPhase('hold');
        setCounter(intervals.hold);
      } else if (phase === 'hold') {
        setPhase('exhale');
        setCounter(intervals.exhale);
      } else if (phase === 'exhale') {
        setPhase('inhale');
        setCounter(intervals.inhale);
      }
    }
  }, [isRunning, counter, phase]);
  
  const startExercise = () => {
    setIsRunning(true);
    wasStarted.current = true;
    setPhase('inhale');
    setCounter(4);
  };

  const handleClose = () => {
    if (wasStarted.current) {
      onTaskComplete('mindfulMoment');
    }
    onClose();
  };
  
  const phaseText = {
      idle: '',
      inhale: uiText.breathingInhale,
      hold: uiText.breathingHold,
      exhale: uiText.breathingExhale,
  }

  const getCircleAnimation = () => {
      if (!isRunning) return 'scale-50';
      switch(phase) {
          case 'inhale': return 'scale-100';
          case 'hold': return 'scale-100';
          case 'exhale': return 'scale-50';
          default: return 'scale-50';
      }
  }

  return (
    <div className="fixed inset-0 bg-light-bg dark:bg-dark-bg z-50 flex flex-col items-center justify-center p-4 animate-fade-in-up">
        <button onClick={handleClose} className="absolute top-4 ltr:right-4 rtl:left-4 text-light-text-secondary dark:text-dark-text-secondary text-2xl">&times;</button>
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark mb-8">{uiText.breathingTitle}</h1>
        </div>
        
        <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Outer pulsating ring */}
            {isRunning && <div className="absolute w-full h-full rounded-full bg-primary/20 dark:bg-primary-dark/20 animate-pulse-slow"></div>}
            
            {/* Main circle */}
            <div className={`w-48 h-48 rounded-full bg-primary dark:bg-primary-dark transition-transform duration-[4000ms] ease-in-out ${getCircleAnimation()}`}></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                {isRunning && (
                    <>
                        <p className="text-2xl font-semibold">{phaseText[phase]}</p>
                        <p className="text-5xl font-mono">{counter}</p>
                    </>
                )}
            </div>
        </div>
        
        <div className="mt-12 text-center">
        {!isRunning ? (
            <button onClick={startExercise} className="px-8 py-4 bg-primary dark:bg-primary-dark text-white rounded-lg shadow-lg text-xl font-semibold transform hover:scale-105 transition">
                {uiText.breathingStart}
            </button>
        ) : (
             <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">{uiText.breathingComplete}</p>
        )}
        </div>
       <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.2;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default BreathingExercise;