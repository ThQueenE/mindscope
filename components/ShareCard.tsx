import React from 'react';
import { Language, ProfileType, EmotionalResultCategory, SelfPerceptionResultCategory, MotivationType } from '../types';

type ActiveTest = 'mirror' | 'emotional' | 'self_perception' | 'motivation';

interface ShareCardProps {
  title: string;
  description: string;
  language: Language;
  theme: 'light' | 'dark';
  shareRef: React.RefObject<HTMLDivElement>;
  activeTest: ActiveTest | null;
  resultCategory: string | null;
  uiText: Record<string, string>;
}

// A map of result categories to their corresponding icon and color accent
const ICONS: Record<string, { icon: React.ReactNode, color: string, darkColor: string }> = {
    // Personality Test (Mirror)
    [ProfileType.DREAMER]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25V8.846a2.652 2.652 0 00-2.75-2.75H15.17l-5.75-5.75v11.586z" />, color: 'border-purple-500', darkColor: 'dark:border-purple-400' },
    [ProfileType.THINKER]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />, color: 'border-blue-500', darkColor: 'dark:border-blue-400' },
    [ProfileType.DOER]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 00-5.84-2.56m0 0a14.95 14.95 0 01-5.84 2.56m5.84-2.56v-4.82a6 6 0 015.84-7.38c0 1.812-.464 3.543-1.258 5.06z" />, color: 'border-red-500', darkColor: 'dark:border-red-400' },
    [ProfileType.HEALER]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />, color: 'border-green-500', darkColor: 'dark:border-green-400' },
    // Emotional Test
    [EmotionalResultCategory.HIGH_REACTIVITY]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.62a8.983 8.983 0 013.362-3.812A8.222 8.222 0 0112 5.25v2.887m3.362 0c.097.534.174 1.074.225 1.625M12 15.75a8.983 8.983 0 01-3.362-3.812A8.249 8.249 0 0112 5.25v5.138" />, color: 'border-orange-500', darkColor: 'dark:border-orange-400' },
    [EmotionalResultCategory.BALANCED]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />, color: 'border-teal-500', darkColor: 'dark:border-teal-400' },
    [EmotionalResultCategory.HIGH_REGULATION]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, color: 'border-indigo-500', darkColor: 'dark:border-indigo-400' },
    // Self Perception Test
    [SelfPerceptionResultCategory.ALIGNED]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.4-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.4-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.4 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.4.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />, color: 'border-green-500', darkColor: 'dark:border-green-400' },
    [SelfPerceptionResultCategory.MODERATE_DISCREPANCY]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />, color: 'border-yellow-500', darkColor: 'dark:border-yellow-400' },
    [SelfPerceptionResultCategory.HIGH_DISCREPANCY]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />, color: 'border-red-500', darkColor: 'dark:border-red-400' },
    // Motivation Test
    [MotivationType.AUTONOMY]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />, color: 'border-sky-500', darkColor: 'dark:border-sky-400' },
    [MotivationType.COMPETENCE]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />, color: 'border-amber-500', darkColor: 'dark:border-amber-400' },
    [MotivationType.RELATEDNESS]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.964A3 3 0 0012 15a3 3 0 00-3.741-2.964m-4.5 0a3 3 0 00-3.741 2.964 3 3 0 003.741-2.964m7.5-2.964a3 3 0 00-3.741 2.964 3 3 0 003.741-2.964M3 13.5a3 3 0 013-3m12 0a3 3 0 013 3m-6 0a3 3 0 013-3m-6 0a3 3 0 013-3" />, color: 'border-rose-500', darkColor: 'dark:border-rose-400' },
    [MotivationType.SECURITY]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, color: 'border-slate-500', darkColor: 'dark:border-slate-400' },
    [MotivationType.STATUS]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 001.05-9.221 9.75 9.75 0 00-1.05-9.221h9a9.75 9.75 0 00-1.05 9.221A9.75 9.75 0 0016.5 18.75z" />, color: 'border-violet-500', darkColor: 'dark:border-violet-400' },
    [MotivationType.NOVELTY]: { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.109 1.109 0 00-.554 0l-.143-.048a2.25 2.25 0 01-1.161-.886l-.51-.766c-.32-.48-.226-1.121.216-1.49l1.068-.89a1.125 1.125 0 00.405-.864v-.568a9 9 0 109.918 9.918" />, color: 'border-lime-500', darkColor: 'dark:border-lime-400' },
};

const ShareCard: React.FC<ShareCardProps> = ({ title, description, language, theme, shareRef, activeTest, resultCategory, uiText }) => {
  const isArabic = language === Language.AR;
  const cardClasses = theme === 'dark'
    ? 'bg-dark-card text-dark-text'
    : 'bg-light-card text-light-text';
  
  const resultVisual = resultCategory ? ICONS[resultCategory] : null;
  const IconComponent = resultVisual?.icon;
  const borderColorClass = resultVisual ? `${resultVisual.color} ${resultVisual.darkColor}` : 'border-transparent';

  return (
    <div
      ref={shareRef}
      id="share-card"
      // Positioned off-screen and sized for capture
      className={`absolute left-[-9999px] top-0 p-10 w-[450px] h-[350px] flex flex-col justify-between shadow-2xl rounded-lg border-t-8 ${cardClasses} ${isArabic ? 'font-tajawal' : 'font-inter'} ${borderColorClass}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="flex-grow flex flex-col justify-center text-center">
        {IconComponent && (
          <div className="mx-auto mb-4">
            <svg className={`w-12 h-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {IconComponent}
            </svg>
          </div>
        )}
        <h2 className="text-3xl font-bold leading-tight mb-4">{title}</h2>
        <p className="text-lg italic">"{description}"</p>
      </div>

      <div className="text-center mt-4">
        <p className="text-lg font-semibold text-primary dark:text-primary-dark">{uiText.appSlogan}</p>
      </div>
    </div>
  );
};

export default ShareCard;