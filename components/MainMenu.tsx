import React, { useState, useEffect } from 'react';
import { Language, PsychologicalTerm, LastTestResult, DailyCheckin } from '../types';
import { gameData } from '../constants/gameData';
import { emotionalTestData } from '../constants/emotionalTestData';
import { selfPerceptionTestData } from '../constants/selfPerceptionTestData';
import { motivationTestData } from '../constants/motivationTestData';
import { psychologicalTerms } from '../constants/psychologicalTerms';
import { resultInsights } from '../constants/resultInsights';

type ActiveTest = 'mirror' | 'emotional' | 'self_perception' | 'motivation';

interface MainMenuProps {
  onSelectTest: (test: ActiveTest) => void;
  onShowAnalytics: () => void;
  onShowProfile: () => void;
  onShowJournal: () => void;
  onShowAchievements: () => void;
  onStartBreathing: () => void;
  onShowCognitiveChallenge: () => void;
  onShowYourJourney: () => void;
  language: Language;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  savedProgress: Partial<Record<ActiveTest, boolean>>;
  uiText: Record<string, string>;
  lastTestResult: LastTestResult | null;
  dailyCheckin: DailyCheckin;
  dailyCheckinCompleted: boolean;
}

const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const MainMenu: React.FC<MainMenuProps> = ({ 
  onSelectTest, 
  onShowAnalytics,
  onShowProfile,
  onShowJournal,
  onShowAchievements,
  onStartBreathing,
  onShowCognitiveChallenge,
  onShowYourJourney,
  language, 
  theme, 
  onToggleTheme, 
  savedProgress,
  uiText,
  lastTestResult,
  dailyCheckin,
  dailyCheckinCompleted
}) => {
  const [mirrorCompletions, setMirrorCompletions] = useState(0);
  const [emotionalCompletions, setEmotionalCompletions] = useState(0);
  const [selfPerceptionCompletions, setSelfPerceptionCompletions] = useState(0);
  const [motivationCompletions, setMotivationCompletions] = useState(0);
  const [dailyInsight, setDailyInsight] = useState<{title: string, text: string} | null>(null);
  const [insightResponded, setInsightResponded] = useState(false);
  const [wordOfTheDay, setWordOfTheDay] = useState<PsychologicalTerm | null>(null);
  
  useEffect(() => {
    const getInitialCount = (key: string) => {
        try {
            const storedCount = localStorage.getItem(key);
            if (storedCount) return parseInt(storedCount, 10);
            const randomBase = Math.floor(Math.random() * (4800 - 1200 + 1)) + 1200;
            localStorage.setItem(key, String(randomBase));
            return randomBase;
        } catch (error) {
            console.error("Could not read from local storage", error);
            return 1000;
        }
    };

    setMirrorCompletions(getInitialCount('mirror_completions'));
    setEmotionalCompletions(getInitialCount('emotional_completions'));
    setSelfPerceptionCompletions(getInitialCount('self_perception_completions'));
    setMotivationCompletions(getInitialCount('motivation_completions'));

  }, []);

  // Effect to load daily insight and word of the day
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    
    // Load Personalized Daily Insight
    try {
        if (lastTestResult) {
            const { categoryKey, title } = lastTestResult;
            const insightsForCategory = resultInsights[language][categoryKey];
            
            if (insightsForCategory && insightsForCategory.length > 0) {
                const dayOfYear = getDayOfYear();
                const insightIndex = dayOfYear % insightsForCategory.length;
                const insightText = insightsForCategory[insightIndex];
                
                // Extract the primary title word, e.g., "Visionary" from "The Visionary (Creative...)"
                const resultTitleShort = title.split('(')[0].replace('The', '').trim();
                const personalizedTitle = uiText.personalizedInsightTitle.replace('{resultTitle}', resultTitleShort);
                
                setDailyInsight({ title: personalizedTitle, text: insightText });
            } else {
                 // Fallback if the category key has no insights
                 setDailyInsight({ title: uiText.todaysInsightTitle, text: language === 'ar' ? 'اكتشف حكمة جديدة كل يوم.' : 'Discover a new insight every day.' });
            }
        } else {
            // No tests taken yet, show a welcome/prompt message
            setDailyInsight({ title: uiText.noResultInsightTitle, text: language === 'ar' ? 'أكمل اختبارك الأول لفتح الحكم المخصصة لك.' : 'Complete your first test to unlock personalized insights.' });
        }
    } catch (error) {
        console.error("Could not load or set daily insight", error);
        setDailyInsight({ title: uiText.todaysInsightTitle, text: language === 'ar' ? 'اكتشف حكمة جديدة كل يوم.' : 'Discover a new insight every day.' });
    }
    
    // Load Word of the Day
    try {
      const termsForLang = psychologicalTerms[language];
      const storedTermData = localStorage.getItem('wordOfTheDay');
      let lastTerm: { index: number; date: string } | null = null;
      if (storedTermData) lastTerm = JSON.parse(storedTermData);

      if (lastTerm && lastTerm.date === today) {
          setWordOfTheDay(termsForLang[lastTerm.index]);
      } else {
          let newIndex;
          const lastIndex = lastTerm ? lastTerm.index : -1;
          if (termsForLang.length <= 1) newIndex = 0;
          else { do { newIndex = Math.floor(Math.random() * termsForLang.length); } while (newIndex === lastIndex); }
          setWordOfTheDay(termsForLang[newIndex] || termsForLang[0]);
          localStorage.setItem('wordOfTheDay', JSON.stringify({ index: newIndex, date: today }));
      }
    } catch (error) {
        console.error("Could not load or set word of the day", error);
        const termsForLang = psychologicalTerms[language];
        setWordOfTheDay(termsForLang[Math.floor(Math.random() * termsForLang.length)]);
    }

  }, [language, lastTestResult, uiText]); 
  
  const handleInsightResponse = (response: 'resonates' | 'not_today') => {
    setInsightResponded(true);
    const today = new Date().toISOString().split('T')[0];
    const feedback = {
      date: today,
      insight: dailyInsight?.text,
      response,
    };
    try {
      const feedbackHistoryStr = localStorage.getItem('dailyInsightFeedback');
      const feedbackHistory = feedbackHistoryStr ? JSON.parse(feedbackHistoryStr) : [];
      feedbackHistory.push(feedback);
      const trimmedHistory = feedbackHistory.slice(-30);
      localStorage.setItem('dailyInsightFeedback', JSON.stringify(trimmedHistory));
    } catch (e) {
      console.error("Could not save insight feedback", e);
    }
  };
  
  const toggleLabel = language === 'ar' ? (theme === 'light' ? 'الوضع الداكن' : 'الوضع الفاتح') : (theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  
  const themePrimary = {
    bg: 'bg-primary/5 dark:bg-primary-dark/10',
    icon: 'text-primary dark:text-primary-dark',
    title: 'text-primary-hover dark:text-primary-dark',
    description: 'text-light-text-secondary dark:text-dark-text-secondary',
    hoverBorder: 'hover:border-primary dark:hover:border-primary-dark'
  };
  
  const themeAccentWarm = {
    bg: 'bg-accent-warm/10 dark:bg-accent-warm-dark/10',
    icon: 'text-accent-warm dark:text-accent-warm-dark',
    title: 'text-accent-warm-hover dark:text-accent-warm-dark',
    description: 'text-light-text-secondary dark:text-dark-text-secondary',
    hoverBorder: 'hover:border-accent-warm dark:hover:border-accent-warm-dark'
  };

  const tests = [
    { 
        key: 'mirror' as const, 
        title: gameData[language].testName, 
        description: language === Language.AR ? 'من أنت عندما لا يراقبك أحد؟' : 'Who are you when no one is watching?', 
        completions: mirrorCompletions, 
        ui: gameData[language].ui, 
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 7.5a6.25 6.25 0 11-12.5 0 6.25 6.25 0 0112.5 0z M17 19.5v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />,
        theme: themePrimary
    },
    { 
        key: 'emotional' as const, 
        title: emotionalTestData[language].testName, 
        description: emotionalTestData[language].testDescription, 
        completions: emotionalCompletions, 
        ui: emotionalTestData[language].ui, 
        icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h3.75l1.5-3 3 6 1.5-3h3.75" /></>,
        theme: themeAccentWarm
    },
    { 
        key: 'self_perception' as const, 
        title: selfPerceptionTestData[language].testName, 
        description: selfPerceptionTestData[language].testDescription, 
        completions: selfPerceptionCompletions, 
        ui: selfPerceptionTestData[language].ui, 
        icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
        theme: themePrimary
    },
    { 
        key: 'motivation' as const, 
        title: motivationTestData[language].testName, 
        description: motivationTestData[language].testDescription, 
        completions: motivationCompletions, 
        ui: motivationTestData[language].ui, 
        icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m6-9h-2.25m-13.5 0H3m12-6l-2.25 2.25M7.5 16.5L9 15m6-6l-2.25 2.25M16.5 7.5L15 9" /></>,
        theme: themeAccentWarm
    }
  ];

  const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
  const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
  const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  const CircleIcon = () => <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>;


  const dailyTasks = [
    { key: 'mindfulMoment' as const, label: uiText.mindfulMomentTask, action: onStartBreathing },
    { key: 'dailyReflection' as const, label: uiText.dailyReflectionTask, action: onShowJournal },
    { key: 'mentalSpark' as const, label: uiText.mentalSparkTask, action: onShowCognitiveChallenge },
  ];

  return (
    <div className="animate-fade-in-up p-4 relative">
      <div className="absolute top-0 ltr:right-0 rtl:left-0">
          <button onClick={onToggleTheme} className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-warm-dark" aria-label={toggleLabel}>
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'transform rotate-45 opacity-0' : 'transform rotate-0 opacity-100'}`}><SunIcon /></span>
              <span className={`absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'transform rotate-0 opacity-100' : 'transform -rotate-45 opacity-0'}`}><MoonIcon /></span>
            </div>
          </button>
      </div>

      <div className="text-center my-8 md:my-12 p-4 rounded-lg bg-light-card dark:bg-dark-card shadow-sm">
        {dailyInsight ? (
            <>
                <h2 className="text-sm font-bold uppercase text-primary dark:text-primary-dark tracking-wider mb-2">{dailyInsight.title}</h2>
                <p className="font-lora text-xl md:text-2xl italic text-accent-cool dark:text-accent-cool-dark">"{dailyInsight.text}"</p>
            </>
        ) : (
            <div className="h-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary dark:border-primary-dark"></div>
            </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-6">

        {/* Daily Check-in Hub */}
        <div className="w-full max-w-md p-4 bg-light-card dark:bg-dark-card rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-center mb-4 text-primary dark:text-primary-dark">{uiText.todaysCheckInTitle}</h3>
            <div className="space-y-3">
              {dailyTasks.map(task => (
                <button 
                  key={task.key} 
                  onClick={task.action}
                  disabled={dailyCheckin[task.key]}
                  className="w-full flex items-center justify-between p-3 bg-primary/5 dark:bg-primary-dark/10 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-default hover:bg-primary/10 dark:hover:bg-primary-dark/20"
                >
                  <span className="font-semibold">{task.label}</span>
                  {dailyCheckin[task.key] ? <CheckIcon /> : <CircleIcon />}
                </button>
              ))}
            </div>
            {dailyCheckinCompleted && (
              <p className="text-center text-sm font-semibold text-success mt-4 animate-fade-in-up-fast">{uiText.checkInComplete}</p>
            )}
        </div>

        {tests.map(test => (
          <button 
            key={test.key} 
            onClick={() => onSelectTest(test.key)} 
            className={`relative w-full max-w-md p-5 rounded-xl shadow-md hover:shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0.5 ltr:text-left rtl:text-right ${test.theme.bg} ${test.theme.hoverBorder}`}
          >
            {savedProgress[test.key] && (<div className="absolute top-3 ltr:right-3 rtl:left-3 bg-accent-cool/80 text-white text-xs font-bold px-3 py-1 rounded-full">{test.ui.resumeTest}</div>)}
            
            <div>
              <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 ${test.theme.icon}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{test.icon}</svg>
                  </div>
                  <h2 className={`text-xl font-bold ${test.theme.title}`}>{test.title}</h2>
              </div>
              <div className="ltr:pl-12 rtl:pr-12">
                <p className={`font-light mt-1 ${test.theme.description}`}>{test.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-light-text-secondary dark:text-dark-text-secondary bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full w-fit">
                    <UserIcon />
                    <span>{test.completions.toLocaleString()} {uiText.completionsSuffix}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
        
        <div className="w-full max-w-md mt-4 p-4 bg-light-card dark:bg-dark-card rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-center mb-4 text-primary dark:text-primary-dark">{uiText.myProgressTitle}</h3>
            <div className="grid grid-cols-2 gap-2 text-center">
                <button onClick={onShowAnalytics} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105 active:scale-98">
                <span className="text-2xl" role="img" aria-label="Analytics">📊</span>
                <span className="block text-xs mt-1 font-semibold">{uiText.viewAnalytics}</span>
                </button>
                <button onClick={onShowProfile} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105 active:scale-98">
                <span className="text-2xl" role="img" aria-label="Profile">👤</span>
                <span className="block text-xs mt-1 font-semibold">{uiText.viewProfile}</span>
                </button>
                <button onClick={onShowAchievements} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105 active:scale-98">
                <span className="text-2xl" role="img" aria-label="Achievements">🎖️</span>
                <span className="block text-xs mt-1 font-semibold">{uiText.viewAchievements}</span>
                </button>
                <button onClick={onShowYourJourney} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105 active:scale-98">
                <span className="text-2xl" role="img" aria-label="Journey">🗓️</span>
                <span className="block text-xs mt-1 font-semibold">{uiText.viewYourJourney}</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;