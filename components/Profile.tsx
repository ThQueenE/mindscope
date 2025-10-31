import React, { useState } from 'react';
import { Language, UnlockedBadges, ActivityStreak, LastTestResult } from '../types';
import { badgeDefinitions } from '../constants/badges';

interface ProfileProps {
  language: Language;
  onBackToMenu: () => void;
  unlockedBadges: UnlockedBadges;
  uiText: Record<string, string>;
  activityStreak: ActivityStreak | null;
  lastTestResult: LastTestResult | null;
}

const Profile: React.FC<ProfileProps> = ({ language, onBackToMenu, unlockedBadges, uiText, activityStreak, lastTestResult }) => {
  const [modalContent, setModalContent] = useState<{name: string, description: string} | null>(null);
  const allBadgeIds = Object.keys(badgeDefinitions);

  const FlameIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary dark:text-primary-dark drop-shadow-lg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45.385c-.345.678-.597 1.396-.822 2.148-.224.752-.395 1.546-.51 2.348-.114.801-.19 1.62-.224 2.453-.035.832-.038 1.67.01 2.512.047.841.13 1.67.256 2.483.128.813.298 1.603.51 2.368.213.765.468 1.494.76 2.182.292.688.63 1.314.996 1.865a1 1 0 001.752-.85c-.35-.53-.655-1.13-.93-1.785-.276-.655-.52-1.34-.733-2.05-.213-.71-.39-1.446-.525-2.2-.134-.753-.23-1.526-.27-2.316-.04-.79-.043-1.58.01-2.38.053-.799.14-1.58.26-2.345.12-.765.28-1.51.49-2.23.21-.72.46-1.395.74-2.027.28-.632.59-1.19.88-1.664a1 1 0 00-.51-1.63z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="p-4 md:p-6 animate-fade-in-deep w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark">{uiText.profileTitle}</h1>
      </div>

      {/* Last Insight Section */}
      {lastTestResult && (
        <div className="mb-8 p-6 bg-white/50 dark:bg-dark-card/50 rounded-2xl shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4 text-center">{uiText.lastInsightTitle}</h2>
          <div className="text-center">
            <h3 className="text-xl font-bold">{lastTestResult.title}</h3>
            <p className="mt-2 text-md text-gray-700 dark:text-slate-300 italic">"{lastTestResult.summary}"</p>
          </div>
        </div>
      )}

      {/* Streak Counter Section */}
      <div className="mb-8 p-6 bg-white/50 dark:bg-dark-card/50 rounded-2xl shadow-lg backdrop-blur-sm text-center">
        <h2 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">{uiText.currentStreak}</h2>
        {activityStreak && activityStreak.count > 0 ? (
          <div className="flex items-center justify-center gap-2">
            <FlameIcon />
            <div className="flex items-baseline">
                <span className="text-7xl font-bold text-primary dark:text-primary-dark" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                  {activityStreak.count}
                </span>
                <span className="text-base font-normal text-gray-500 dark:text-slate-400 ltr:ml-2 rtl:mr-2">
                  {uiText.streakDays}
                </span>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-slate-400 italic">{uiText.noStreak}</p>
        )}
      </div>


      <div className="p-4 bg-white/50 dark:bg-dark-card/50 rounded-2xl shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary dark:text-primary-dark">{uiText.myBadges}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allBadgeIds.map((badgeId) => {
            const isUnlocked = !!unlockedBadges[badgeId];
            const badgeInfo = badgeDefinitions[badgeId];
            const { name, description } = badgeInfo[language];
            const iconPath = badgeInfo.icon;

            return (
              <div 
                key={badgeId}
                onClick={() => !isUnlocked && setModalContent({ name, description })}
                className={`flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 ${isUnlocked ? 'bg-primary/10 dark:bg-primary-dark/10' : 'bg-gray-100/50 dark:bg-slate-700/30 opacity-60 hover:opacity-100 cursor-pointer'}`}
              >
                <div className={`relative w-20 h-20 flex items-center justify-center rounded-full mb-3 ${isUnlocked ? 'bg-primary dark:bg-primary-dark' : 'bg-gray-300 dark:bg-slate-600'}`}>
                   <svg className={`w-12 h-12 ${isUnlocked ? 'text-white' : 'text-gray-500 dark:text-slate-400'}`} viewBox="0 0 24 24" fill="currentColor">
                     <path d={iconPath}></path>
                   </svg>
                   {!isUnlocked && (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-500 dark:text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0V7a4 4 0 118 0v10m-8 0h12A2 2 0 0020 17V9a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                     </div>
                   )}
                </div>
                <h3 className={`font-bold ${isUnlocked ? 'text-primary dark:text-primary-dark' : 'text-gray-500 dark:text-slate-400'}`}>{name}</h3>
                <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
                  {isUnlocked ? description : uiText.locked}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onBackToMenu}
          className="px-8 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg shadow-md hover:bg-primary-hover dark:hover:bg-primary-dark-hover transition-all duration-300 transform hover:scale-105 active:scale-98"
        >
          {uiText.backToMainMenu}
        </button>
      </div>
      
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in-up backdrop-blur-sm" onClick={() => setModalContent(null)}>
          <div className="bg-light-card dark:bg-dark-card rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-sm text-center transform transition-all" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-primary dark:text-primary-dark mb-4">{modalContent.name}</h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">{modalContent.description}</p>
            <button
              onClick={() => setModalContent(null)}
              className="mt-4 px-8 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary-hover dark:hover:bg-primary-dark-hover transition-colors"
            >
              {uiText.close}
            </button>
          </div>
        </div>
      )}

       <style>{`
        @keyframes fade-in-deep {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-deep {
            animation: fade-in-deep 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Profile;