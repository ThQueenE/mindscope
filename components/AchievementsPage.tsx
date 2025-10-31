import React, { useState, useEffect } from 'react';
import { Language, UnlockedBadges } from '../types';
import { badgeDefinitions } from '../constants/badges';

interface AchievementsPageProps {
  language: Language;
  unlockedBadges: UnlockedBadges;
  onBackToMenu: () => void;
  uiText: Record<string, string>;
}

const AchievementsPage: React.FC<AchievementsPageProps> = ({ language, unlockedBadges, onBackToMenu, uiText }) => {
  const allBadgeIds = Object.keys(badgeDefinitions);
  const unlockedCount = Object.keys(unlockedBadges).length;
  const totalCount = allBadgeIds.length;
  const progress = totalCount > 0 ? (unlockedCount / totalCount) * 100 : 0;

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const targetProgress = Math.round(progress);
    if (targetProgress === animatedProgress) return;

    const timeout = setTimeout(() => {
        setAnimatedProgress(targetProgress);
    }, 100); // Small delay to trigger animation on mount

    return () => clearTimeout(timeout);
  }, [progress]);
  
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedProgress / 100) * circumference;

  const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 0V7a4 4 0 118 0v10m-8 0h12A2 2 0 0020 17V9a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );

  return (
    <div className="p-4 md:p-6 animate-fade-in-deep w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark">{uiText.achievementsTitle}</h1>
        <p className="text-md text-light-text-secondary dark:text-dark-text-secondary mt-2">{uiText.achievementsSubtitle}</p>
      </div>

      <div className="flex justify-center items-center mb-10">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} fill="none" stroke="currentColor" strokeWidth="12" className="text-gray-200 dark:text-gray-700" />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="text-primary dark:text-primary-dark transition-all duration-1000 ease-in-out"
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-primary dark:text-primary-dark">{`${Math.round(progress)}%`}</span>
            <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{uiText.achievementsProgress}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {allBadgeIds.map((badgeId) => {
          const isUnlocked = !!unlockedBadges[badgeId];
          const badgeInfo = badgeDefinitions[badgeId];
          const { name, description } = badgeInfo[language];

          return (
            <div
              key={badgeId}
              className={`p-4 rounded-xl transition-all duration-300 ${isUnlocked ? 'bg-primary/10 dark:bg-primary-dark/10 shadow-lg shadow-primary/20 dark:shadow-primary-dark/20' : 'bg-light-bg dark:bg-dark-bg opacity-70'}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`relative w-20 h-20 flex items-center justify-center rounded-full mb-3 ${isUnlocked ? 'bg-primary dark:bg-primary-dark' : 'bg-gray-300 dark:bg-gray-600'}`}>
                  <svg className={`w-12 h-12 ${isUnlocked ? 'text-white' : 'text-gray-500 dark:text-slate-400'}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d={badgeInfo.icon}></path>
                  </svg>
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center">
                      <LockIcon />
                    </div>
                  )}
                </div>
                <h3 className={`font-bold text-lg ${isUnlocked ? 'text-primary dark:text-primary-dark' : 'text-light-text-secondary dark:text-dark-text-secondary'}`}>{name}</h3>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1">
                  {isUnlocked ? description : uiText.locked}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={onBackToMenu}
          className="px-8 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg shadow-md hover:bg-primary-hover dark:hover:bg-primary-dark-hover transition-all duration-300"
        >
          {uiText.backToMainMenu}
        </button>
      </div>
    </div>
  );
};

export default AchievementsPage;