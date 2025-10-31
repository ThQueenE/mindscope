import React, { useState, useEffect, useCallback, useRef } from 'react';
import html2canvas from 'html2canvas';
import { 
    Language, GameState, ProfileType, EmotionalResultCategory, SelfPerceptionResultCategory, MotivationType,
    GenericQuestion, Question, EmotionalQuestion, SelfPerceptionQuestion, MotivationQuestion, SavedQuizState, UnlockedBadges, JournalHistory, JournalEntry,
    ActivityStreak,
    LastTestResult,
    CognitiveChallengeItem,
    DailyCheckin,
    JourneyHistory,
    JourneyEvent,
} from './types';
import { gameData as personalityGameData } from './constants/gameData';
import { emotionalTestData } from './constants/emotionalTestData';
import { selfPerceptionTestData } from './constants/selfPerceptionTestData';
import { motivationTestData } from './constants/motivationTestData';
import { badgeDefinitions, BADGE_IDS } from './constants/badges';
import { cognitiveChallengeData } from './constants/cognitiveChallenges';
import { personalizedPrompts } from './constants/personalizedPrompts';
import Intro from './components/Intro';
import LanguageSelector from './components/LanguageSelector';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Calculating from './components/Calculating';
import Analytics from './components/Analytics';
import Profile from './components/Profile';
import Journal from './components/Journal';
import ToastNotification from './components/ToastNotification';
import AchievementsPage from './components/AchievementsPage';
import ShareCard from './components/ShareCard';
import BreathingExercise from './components/BreathingExercise';
import CognitiveChallenge from './components/CognitiveChallenge';
import YourJourney from './components/YourJourney';

type ActiveTest = 'mirror' | 'emotional' | 'self_perception' | 'motivation';
type Theme = 'light' | 'dark';
type Notification = { message: string; type: 'success' | 'error' };

const initialTestState = { currentQuestionIndex: 0, answers: {} };
const ALL_TESTS: ActiveTest[] = ['mirror', 'emotional', 'self_perception', 'motivation'];
const initialDailyCheckin: DailyCheckin = { mindfulMoment: false, dailyReflection: false, mentalSpark: false };

// Global navigation guard function
const safeNavigate = (targetUrl: string) => {
  try {
    const currentLocation = window.location;
    if (currentLocation.protocol === 'blob:' || currentLocation.origin === 'null') return;
    if (!targetUrl || typeof targetUrl !== 'string' || targetUrl.startsWith('blob:')) return;
    const newUrl = new URL(targetUrl, currentLocation.href);
    if (newUrl.origin !== currentLocation.origin) return;
    history.pushState({}, '', newUrl.href);
  } catch (error) {
    console.error('safeNavigate: A critical error occurred during the navigation attempt.', { error });
  }
};

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);
  const [activeTest, setActiveTest] = useState<ActiveTest | null>(null);
  const [isFromDeepLink, setIsFromDeepLink] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false); // State to manage first launch flow
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
        try {
            const storedTheme = window.localStorage.getItem('theme');
            if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        } catch (e) { console.error("Could not access localStorage for theme", e); }
    }
    return 'light';
  });

  // Consolidated state for each test
  const [mirrorTest, setMirrorTest] = useState(initialTestState);
  const [emotionalTest, setEmotionalTest] = useState(initialTestState);
  const [selfPerceptionTest, setSelfPerceptionTest] = useState(initialTestState);
  const [motivationTest, setMotivationTest] = useState(initialTestState);

  // Consolidated state for results
  const [mirrorResult, setMirrorResult] = useState<{ type: ProfileType } | null>(null);
  const [emotionalResult, setEmotionalResult] = useState<{ category: EmotionalResultCategory, scores: { reactivity: number, regulation: number } } | null>(null);
  const [selfPerceptionResult, setSelfPerceptionResult] = useState<{ category: SelfPerceptionResultCategory, scores: { selfScore: number, perceivedOthersScore: number, discrepancyIndex: number } } | null>(null);
  const [motivationResult, setMotivationResult] = useState<{ primaryMotive: MotivationType } | null>(null);
  
  const [savedProgress, setSavedProgress] = useState<Partial<Record<ActiveTest, boolean>>>({});
  
  // New states for Badge System
  const [unlockedBadges, setUnlockedBadges] = useState<UnlockedBadges>({});
  
  // New state for Journal feature
  const [journalHistory, setJournalHistory] = useState<JournalHistory>([]);
  const [dailyJournalPrompt, setDailyJournalPrompt] = useState({ text: '', isLoading: false });

  
  // New state for activity streak
  const [activityStreak, setActivityStreak] = useState<ActivityStreak | null>(null);
  
  // New state for last test result
  const [lastTestResult, setLastTestResult] = useState<LastTestResult | null>(null);
  
  // New state for Cognitive Challenge
  const [cognitiveChallenge, setCognitiveChallenge] = useState<{ challenge: CognitiveChallengeItem | null; }>({ challenge: null });

  // State for custom loading text
  const [loadingText, setLoadingText] = useState('');

  // New state for toast notifications
  const [notification, setNotification] = useState<Notification | null>(null);
  
  // State and ref for new sharing feature
  const [shareCardContent, setShareCardContent] = useState<{ title: string; description: string; activeTest: ActiveTest | null; resultCategory: string | null; } | null>(null);
  const shareCardRef = useRef<HTMLDivElement>(null);

  // New states for engagement features
  const [dailyCheckin, setDailyCheckin] = useState<DailyCheckin>(initialDailyCheckin);
  const [dailyCheckinCompleted, setDailyCheckinCompleted] = useState(false);
  const [journeyHistory, setJourneyHistory] = useState<JourneyHistory>([]);

  const clearQuizProgress = useCallback((testKey: ActiveTest) => {
    try {
        localStorage.removeItem(`quizProgress_${testKey}`);
        setSavedProgress(prev => ({ ...prev, [testKey]: false }));
    } catch (error) {
        console.error("Could not clear quiz progress from storage", error);
    }
  }, []);

  const performFullReset = useCallback(() => {
    safeNavigate(window.location.pathname);
    try {
        localStorage.clear(); // Clear everything for a true reset
    } catch (e) { console.error("Error clearing localStorage:", e); }
    
    // Re-initialize all state to empty defaults
    setMirrorTest(initialTestState); setMirrorResult(null);
    setEmotionalTest(initialTestState); setEmotionalResult(null);
    setSelfPerceptionTest(initialTestState); setSelfPerceptionResult(null);
    setMotivationTest(initialTestState); setMotivationResult(null);
    setActiveTest(null); 
    setIsFromDeepLink(false);
    setUnlockedBadges({});
    setJournalHistory([]);
    setActivityStreak(null);
    setLastTestResult(null);
    setSavedProgress({});
    setDailyCheckin(initialDailyCheckin);
    setDailyCheckinCompleted(false);
    setJourneyHistory([]);
  }, []);
  
  const logJourneyEvent = useCallback((type: JourneyEvent['type'], description: string) => {
    const today = new Date().toISOString().split('T')[0];
    const newEvent: JourneyEvent = { date: today, type, description };
    setJourneyHistory(prev => {
      // Avoid duplicate events of the same type on the same day
      const todayEvents = prev.filter(e => e.date === today && e.type === type);
      if (todayEvents.length > 0) return prev;
      return [...prev, newEvent];
    });
  }, []);
  
  // New function to save result history for analytics
  const saveResultToHistory = useCallback((resultTitle: string, resultSummary: string, categoryKey: string) => {
    try {
      const historyStr = localStorage.getItem('resultHistory');
      const history = historyStr ? JSON.parse(historyStr) : [];
      history.push(resultTitle); // For analytics, just the title is fine.
      localStorage.setItem('resultHistory', JSON.stringify(history));
      
      const newLastResult = { title: resultTitle, summary: resultSummary, categoryKey };
      // Also save the last test result for the profile page
      localStorage.setItem('lastTestResult', JSON.stringify(newLastResult));
      setLastTestResult(newLastResult);

      logJourneyEvent('test', resultTitle);

    } catch (error) {
      console.error('Could not save result to history', error);
    }
  }, [logJourneyEvent]);

  const updateCompletionCount = (testKey: ActiveTest) => {
      if (isFromDeepLink) return;
      const storageKey = `${testKey}_completions`;
      const sessionKey = `completed_${testKey}`;
      try {
          if (!sessionStorage.getItem(sessionKey)) {
              const currentCount = parseInt(localStorage.getItem(storageKey) || '0', 10);
              localStorage.setItem(storageKey, String(currentCount + 1));
              
              // Track unique test types completed for badges
              const completedTypesStr = localStorage.getItem('completedTestTypes');
              const completedTypes = completedTypesStr ? JSON.parse(completedTypesStr) : [];
              if (!completedTypes.includes(testKey)) {
                  completedTypes.push(testKey);
                  localStorage.setItem('completedTestTypes', JSON.stringify(completedTypes));
              }
              
              sessionStorage.setItem(sessionKey, 'true');
          }
      } catch (error) {
          console.error("Could not update local/session storage", error);
      }
  };
  
  const checkAndAwardBadges = useCallback(() => {
    try {
        const historyStr = localStorage.getItem('resultHistory');
        const totalTests = historyStr ? JSON.parse(historyStr).length : 0;
        
        const newBadges: UnlockedBadges = {};

        // Define progress data
        const completedTypesStr = localStorage.getItem('completedTestTypes');
        const uniqueTestsCompleted = completedTypesStr ? JSON.parse(completedTypesStr).length : 0;

        // Badge criteria checks
        if (totalTests > 0) {
            if (!unlockedBadges[BADGE_IDS.TEST_VETERAN_5] && totalTests >= 5) newBadges[BADGE_IDS.TEST_VETERAN_5] = true;
            if (!unlockedBadges[BADGE_IDS.TEST_VETERAN_10] && totalTests >= 10) newBadges[BADGE_IDS.TEST_VETERAN_10] = true;
            if (!unlockedBadges[BADGE_IDS.DIVERSE_EXPLORER] && uniqueTestsCompleted >= ALL_TESTS.length) newBadges[BADGE_IDS.DIVERSE_EXPLORER] = true;
        }

        // Streak badge checks
        if (activityStreak) {
          if (!unlockedBadges[BADGE_IDS.STREAK_3_DAY] && activityStreak.count >= 3) newBadges[BADGE_IDS.STREAK_3_DAY] = true;
          if (!unlockedBadges[BADGE_IDS.STREAK_7_DAY] && activityStreak.count >= 7) newBadges[BADGE_IDS.STREAK_7_DAY] = true;
          if (!unlockedBadges[BADGE_IDS.STREAK_14_DAY] && activityStreak.count >= 14) newBadges[BADGE_IDS.STREAK_14_DAY] = true;
          if (!unlockedBadges[BADGE_IDS.STREAK_30_DAY] && activityStreak.count >= 30) newBadges[BADGE_IDS.STREAK_30_DAY] = true;
        }

        if (Object.keys(newBadges).length > 0) {
            setUnlockedBadges(prev => ({ ...prev, ...newBadges }));
            setNotification({
                message: personalityGameData[language].ui.badgeUnlockedToast,
                type: 'success',
            });
        }
    } catch (e) {
        console.error("Error checking for badges:", e);
    }
  }, [unlockedBadges, language, activityStreak]);

  const calculateMirrorResult = useCallback((finalAnswers: Record<number, number>) => {
    const profiles = Object.entries(finalAnswers).map(([qId, oIdx]) => 
        personalityGameData[language].questions.find(q => q.id === parseInt(qId, 10))?.options[oIdx]?.profile
    ).filter((p): p is ProfileType => !!p);
    const counts = profiles.reduce((acc, p) => ({...acc, [p]: (acc[p] || 0) + 1}), {} as Record<ProfileType, number>);
    const resultType = (Object.keys(counts) as ProfileType[]).reduce((a, b) => counts[a] > counts[b] ? a : b, ProfileType.DREAMER);
    const resultData = personalityGameData[language].results[resultType];
    setMirrorResult({ type: resultType });
    saveResultToHistory(resultData.title, resultData.poetic_explanation, resultType);
    updateCompletionCount('mirror');
    clearQuizProgress('mirror');
    setGameState(GameState.RESULTS);
  }, [language, clearQuizProgress, saveResultToHistory]);

  const calculateEmotionalResult = useCallback((finalAnswers: Record<number, number>) => {
    const allScores = Object.entries(finalAnswers).map(([qId, oIdx]) => 
        emotionalTestData[language].questions.find(q => q.id === parseInt(qId, 10))?.options[oIdx]?.scores
    ).filter((s): s is { reactivity: number; regulation: number; } => !!s);
    const finalScores = allScores.reduce((acc, s) => ({ reactivity: acc.reactivity + s.reactivity, regulation: acc.regulation + s.regulation }), { reactivity: 0, regulation: 0 });
    const { scoring, results } = emotionalTestData[language];
    let category: EmotionalResultCategory = EmotionalResultCategory.BALANCED;
    if (scoring.thresholds.high_reactivity.condition(finalScores.reactivity, finalScores.regulation)) category = EmotionalResultCategory.HIGH_REACTIVITY;
    else if (scoring.thresholds.high_regulation.condition(finalScores.reactivity, finalScores.regulation)) category = EmotionalResultCategory.HIGH_REGULATION;
    const resultData = results[category];
    setEmotionalResult({ category, scores: finalScores });
    saveResultToHistory(resultData.label, resultData.description, category);
    updateCompletionCount('emotional');
    clearQuizProgress('emotional');
    setGameState(GameState.RESULTS);
  }, [language, clearQuizProgress, saveResultToHistory]);

  const calculateSelfPerceptionResult = useCallback((finalAnswers: Record<number, number>) => {
    const allScores = Object.entries(finalAnswers).map(([qId, oIdx]) =>
        selfPerceptionTestData[language].questions.find(q => q.id === parseInt(qId, 10))?.options[oIdx]?.scores
    ).filter((s): s is { selfScore: number; perceivedOthersScore: number; } => !!s);
    const finalScores = allScores.reduce((acc, s) => ({ selfScore: acc.selfScore + s.selfScore, perceivedOthersScore: acc.perceivedOthersScore + s.perceivedOthersScore }), { selfScore: 0, perceivedOthersScore: 0 });
    const { scoring, results } = selfPerceptionTestData[language];
    const discrepancyIndex = Math.abs(finalScores.selfScore - finalScores.perceivedOthersScore);
    let category: SelfPerceptionResultCategory = SelfPerceptionResultCategory.HIGH_DISCREPANCY;
    if (discrepancyIndex <= scoring.thresholds.aligned.maxDiscrepancy) category = SelfPerceptionResultCategory.ALIGNED;
    else if (discrepancyIndex <= scoring.thresholds.moderate_discrepancy.maxDiscrepancy) category = SelfPerceptionResultCategory.MODERATE_DISCREPANCY;
    const resultData = results[category];
    setSelfPerceptionResult({ category, scores: { ...finalScores, discrepancyIndex } });
    saveResultToHistory(resultData.label, resultData.description, category);
    updateCompletionCount('self_perception');
    clearQuizProgress('self_perception');
    setGameState(GameState.RESULTS);
  }, [language, clearQuizProgress, saveResultToHistory]);
  
  const calculateMotivationResult = useCallback((finalAnswers: Record<number, number>) => {
    const motives = Object.entries(finalAnswers).map(([qId, oIdx]) => 
        motivationTestData[language].questions.find(q => q.id === parseInt(qId, 10))?.options[oIdx]?.motivation
    ).filter((m): m is MotivationType => !!m);
    const counts = motives.reduce((acc, m) => ({...acc, [m]: (acc[m] || 0) + 1}), {} as Record<MotivationType, number>);
    const [primaryMotive = MotivationType.AUTONOMY] = (Object.keys(counts) as MotivationType[]).sort((a, b) => counts[b] - counts[a]);
    const { results } = motivationTestData[language];
    const resultData = results[primaryMotive];
    setMotivationResult({ primaryMotive });
    saveResultToHistory(resultData.label, resultData.description, primaryMotive);
    updateCompletionCount('motivation');
    clearQuizProgress('motivation');
    setGameState(GameState.RESULTS);
  }, [language, clearQuizProgress, saveResultToHistory]);

  const handleDeepLink = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const testParam = params.get('test');
    if (!testParam) return;
    
    setIsFromDeepLink(true);
    const selectedLang = params.get('lang') === 'ar' ? Language.AR : Language.EN;
    setLanguage(selectedLang);

    if (testParam === 'mirror' && params.has('profile')) {
        const profile = params.get('profile') as ProfileType;
        if (Object.values(ProfileType).includes(profile)) { setActiveTest('mirror'); setMirrorResult({ type: profile }); setGameState(GameState.RESULTS); }
    } else if (testParam === 'emotional' && params.has('cat')) {
        const category = params.get('cat') as EmotionalResultCategory;
        if (Object.keys(emotionalTestData[selectedLang].results).includes(category)) { setActiveTest('emotional'); setEmotionalResult({ category, scores: { reactivity: 0, regulation: 0 } }); setGameState(GameState.RESULTS); }
    } else if (testParam === 'self_perception' && params.has('cat')) {
        const category = params.get('cat') as SelfPerceptionResultCategory;
        if (Object.keys(selfPerceptionTestData[selectedLang].results).includes(category)) { setActiveTest('self_perception'); setSelfPerceptionResult({ category, scores: { selfScore: 0, perceivedOthersScore: 0, discrepancyIndex: 0 } }); setGameState(GameState.RESULTS); }
    } else if (testParam === 'motivation' && params.has('motive')) {
        const motive = params.get('motive') as MotivationType;
        if (Object.values(MotivationType).includes(motive)) { setActiveTest('motivation'); setMotivationResult({ primaryMotive: motive }); setGameState(GameState.RESULTS); }
    }
  }, []);

  const handleActivityUpdate = useCallback(() => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    setActivityStreak(prevStreak => {
      if (!prevStreak) {
        return { count: 1, lastActivityDate: today };
      }
      if (prevStreak.lastActivityDate === today) {
        return prevStreak;
      }
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      if (prevStreak.lastActivityDate === yesterdayStr) {
        return { count: prevStreak.count + 1, lastActivityDate: today };
      }
      return { count: 1, lastActivityDate: today };
    });
  }, []);
  
  // Load saved data on initial app load, handling first-time launch
  useEffect(() => {
    try {
      const isFirst = !localStorage.getItem('isFirstLaunch');
      setIsFirstTimeUser(isFirst);

      if (isFirst) {
        console.log('✅ First launch detected → data fully reset.');
        performFullReset();
        localStorage.setItem('isFirstLaunch', 'false');
        console.log('✅ isFirstLaunch flag set to false.');
      } else {
        console.log('✅ Subsequent launch → loading user progress.');
        handleDeepLink();
        const progress: Partial<Record<ActiveTest, boolean>> = {};
        for (const testKey of ALL_TESTS) {
          if (localStorage.getItem(`quizProgress_${testKey}`)) progress[testKey] = true;
        }
        setSavedProgress(progress);
        
        const storedBadges = localStorage.getItem('unlockedBadges');
        if (storedBadges) setUnlockedBadges(JSON.parse(storedBadges));
        const storedJournal = localStorage.getItem('journalHistory');
        if (storedJournal) setJournalHistory(JSON.parse(storedJournal));
        const storedStreak = localStorage.getItem('activityStreak');
        if (storedStreak) setActivityStreak(JSON.parse(storedStreak));
        const storedLastResult = localStorage.getItem('lastTestResult');
        if (storedLastResult) setLastTestResult(JSON.parse(storedLastResult));
        const storedJourney = localStorage.getItem('journeyHistory');
        if (storedJourney) setJourneyHistory(JSON.parse(storedJourney));

        const today = new Date().toISOString().split('T')[0];
        const storedCheckin = localStorage.getItem(`dailyCheckin_${today}`);
        if (storedCheckin) {
            const checkinData = JSON.parse(storedCheckin);
            setDailyCheckin(checkinData);
            if (checkinData.mindfulMoment && checkinData.dailyReflection && checkinData.mentalSpark) {
                setDailyCheckinCompleted(true);
            }
        }
      }
    } catch (e) {
      console.error("Initialization error:", e);
    }
  }, [handleDeepLink, performFullReset]);

  // Effect to check for new badges whenever progress is made
  useEffect(() => {
    checkAndAwardBadges();
  }, [activityStreak, checkAndAwardBadges, gameState]); // Re-check on state changes and plan/streak updates

  // Effect to save badge progress
  useEffect(() => {
    if (Object.keys(unlockedBadges).length > 0) {
      try { localStorage.setItem('unlockedBadges', JSON.stringify(unlockedBadges)); } catch (e) { console.error(e); }
    }
  }, [unlockedBadges]);

  // Effect to save journal history
  useEffect(() => {
    if (journalHistory.length > 0) {
      try { localStorage.setItem('journalHistory', JSON.stringify(journalHistory)); } catch (e) { console.error(e); }
    }
  }, [journalHistory]);

  // Effect to save activity streak
  useEffect(() => {
    if (activityStreak) {
      try { localStorage.setItem('activityStreak', JSON.stringify(activityStreak)); } catch (e) { console.error(e); }
    }
  }, [activityStreak]);

  // Effect to save daily check-in
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    try {
        localStorage.setItem(`dailyCheckin_${today}`, JSON.stringify(dailyCheckin));
    } catch (e) { console.error(e); }

    // Check for completion
    if (dailyCheckin.mindfulMoment && dailyCheckin.dailyReflection && dailyCheckin.mentalSpark && !dailyCheckinCompleted) {
        setDailyCheckinCompleted(true);
        handleActivityUpdate();
        logJourneyEvent('checkin', personalityGameData[language].ui.checkInComplete);
    }
  }, [dailyCheckin, dailyCheckinCompleted, handleActivityUpdate, language, logJourneyEvent]);


  // Effect to save quiz progress to localStorage
  useEffect(() => {
    if (!activeTest || gameState !== GameState.QUIZ) return;
    const testState = { mirror: mirrorTest, emotional: emotionalTest, self_perception: selfPerceptionTest, motivation: motivationTest }[activeTest];
    if (testState.currentQuestionIndex === 0 && Object.keys(testState.answers).length === 0) return;
    try {
      localStorage.setItem(`quizProgress_${activeTest}`, JSON.stringify(testState));
      if (!savedProgress[activeTest]) setSavedProgress(prev => ({...prev, [activeTest]: true}));
    } catch (e) { console.error(e); }
  }, [mirrorTest, emotionalTest, selfPerceptionTest, motivationTest, activeTest, gameState, savedProgress]);

  useEffect(() => { document.documentElement.lang = language; document.documentElement.dir = language === Language.AR ? 'rtl' : 'ltr'; }, [language]);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        console.error("Could not save theme to localStorage", e);
    }
  }, [theme]);
  
  useEffect(() => {
    if (gameState === GameState.RETURNING_TO_MENU) {
      const timer = setTimeout(() => {
        performFullReset();
        setGameState(GameState.MAIN_MENU);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [gameState, performFullReset]);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setGameState(GameState.MAIN_MENU);
  };

  const handleTestSelect = (test: ActiveTest) => {
    setActiveTest(test);
    setIsFromDeepLink(false);
    
    try {
        const savedData = localStorage.getItem(`quizProgress_${test}`);
        const testStateUpdater = { mirror: setMirrorTest, emotional: setEmotionalTest, self_perception: setSelfPerceptionTest, motivation: setMotivationTest }[test];
        if (savedData) testStateUpdater(JSON.parse(savedData));
        else testStateUpdater(initialTestState);
    } catch (error) {
        console.error("Could not load quiz progress", error);
        const testStateUpdater = { mirror: setMirrorTest, emotional: setEmotionalTest, self_perception: setSelfPerceptionTest, motivation: setMotivationTest }[test];
        testStateUpdater(initialTestState);
    }
    setGameState(GameState.QUIZ);
  };

  const handleAnswer = useCallback((questionId: number, optionIndex: number) => {
    if (!activeTest) return;
    const testStateUpdater = { mirror: setMirrorTest, emotional: setEmotionalTest, self_perception: setSelfPerceptionTest, motivation: setMotivationTest }[activeTest];
    testStateUpdater(prev => ({ ...prev, answers: { ...prev.answers, [questionId]: optionIndex } }));
  }, [activeTest]);

  const handlePrevious = useCallback(() => {
    if (!activeTest) return;
    const testStateUpdater = { mirror: setMirrorTest, emotional: setEmotionalTest, self_perception: setSelfPerceptionTest, motivation: setMotivationTest }[activeTest];
    testStateUpdater(prev => ({ ...prev, currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1) }));
  }, [activeTest]);

  const handleNext = useCallback(() => {
    if (!activeTest) return;
    const testData = { mirror: personalityGameData[language].questions, emotional: emotionalTestData[language].questions, self_perception: selfPerceptionTestData[language].questions, motivation: motivationTestData[language].questions }[activeTest];
    const { state, setState, calculate } = {
      mirror: { state: mirrorTest, setState: setMirrorTest, calculate: calculateMirrorResult },
      emotional: { state: emotionalTest, setState: setEmotionalTest, calculate: calculateEmotionalResult },
      self_perception: { state: selfPerceptionTest, setState: setSelfPerceptionTest, calculate: calculateSelfPerceptionResult },
      motivation: { state: motivationTest, setState: setMotivationTest, calculate: calculateMotivationResult }
    }[activeTest];

    if (state.currentQuestionIndex < testData.length - 1) {
      setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
    } else {
      setGameState(GameState.CALCULATING);
      const uiText = { mirror: personalityGameData, emotional: emotionalTestData, self_perception: selfPerceptionTestData, motivation: motivationTestData }[activeTest][language].ui;
      setLoadingText(uiText.calculating);
      calculate(state.answers);
    }
  }, [activeTest, language, mirrorTest, emotionalTest, selfPerceptionTest, motivationTest, calculateMirrorResult, calculateEmotionalResult, calculateSelfPerceptionResult, calculateMotivationResult]);

  const handleShare = async () => {
    if (isSharing) return;
    setIsSharing(true);

    let shareData: {
      cardTitle: string;
      cardDescription: string;
      shareUrl: string;
      shareTitle: string;
      shareText: string;
      uiText: Record<string, string>;
      activeTest: ActiveTest;
      resultCategory: string;
    } | null = null;
    const baseUrl = `${window.location.origin}${window.location.pathname}`;

    if (activeTest === 'mirror' && mirrorResult) {
        const resultData = personalityGameData[language].results[mirrorResult.type];
        shareData = {
            cardTitle: resultData.title,
            cardDescription: resultData.poetic_explanation.split('.')[0] + '.',
            shareUrl: `${baseUrl}?test=mirror&lang=${language}&profile=${mirrorResult.type}`,
            shareTitle: personalityGameData[language].ui.shareTitle,
            shareText: personalityGameData[language].ui.shareText.replace('{profileTitle}', resultData.title),
            uiText: personalityGameData[language].ui,
            activeTest: 'mirror',
            resultCategory: mirrorResult.type,
        };
    } else if (activeTest === 'emotional' && emotionalResult) {
        const resultData = emotionalTestData[language].results[emotionalResult.category];
        shareData = {
            cardTitle: resultData.label,
            cardDescription: resultData.description.split('.')[0] + '.',
            shareUrl: `${baseUrl}?test=emotional&lang=${language}&cat=${emotionalResult.category}`,
            shareTitle: emotionalTestData[language].ui.shareTitle,
            shareText: emotionalTestData[language].ui.shareText.replace('{resultLabel}', resultData.label),
            uiText: emotionalTestData[language].ui,
            activeTest: 'emotional',
            resultCategory: emotionalResult.category,
        };
    } else if (activeTest === 'self_perception' && selfPerceptionResult) {
        const resultData = selfPerceptionTestData[language].results[selfPerceptionResult.category];
        shareData = {
            cardTitle: resultData.label,
            cardDescription: resultData.description.split('.')[0] + '.',
            shareUrl: `${baseUrl}?test=self_perception&lang=${language}&cat=${selfPerceptionResult.category}`,
            shareTitle: selfPerceptionTestData[language].ui.shareTitle,
            shareText: selfPerceptionTestData[language].ui.shareText.replace('{resultLabel}', resultData.label),
            uiText: selfPerceptionTestData[language].ui,
            activeTest: 'self_perception',
            resultCategory: selfPerceptionResult.category,
        };
    } else if (activeTest === 'motivation' && motivationResult) {
        const resultData = motivationTestData[language].results[motivationResult.primaryMotive];
        shareData = {
            cardTitle: resultData.label,
            cardDescription: resultData.description.split('.')[0] + '.',
            shareUrl: `${baseUrl}?test=motivation&lang=${language}&motive=${motivationResult.primaryMotive}`,
            shareTitle: motivationTestData[language].ui.shareTitle,
            shareText: motivationTestData[language].ui.shareText.replace('{resultLabel}', resultData.label),
            uiText: motivationTestData[language].ui,
            activeTest: 'motivation',
            resultCategory: motivationResult.primaryMotive,
        };
    }

    if (!shareData) {
        console.error("No share data available for the current result.");
        setIsSharing(false);
        return;
    }

    const { cardTitle, cardDescription, shareUrl, shareTitle, shareText, uiText, activeTest: shareActiveTest, resultCategory } = shareData;

    setShareCardContent({ title: cardTitle, description: cardDescription, activeTest: shareActiveTest, resultCategory: resultCategory });

    setTimeout(async () => {
        if (!shareCardRef.current) {
            console.error("Share card element not found for capturing.");
            setIsSharing(false);
            setShareCardContent(null);
            await navigator.clipboard.writeText(shareUrl);
            setNotification({ message: uiText.clipboardSuccess, type: 'success' });
            return;
        }

        try {
            const canvas = await html2canvas(shareCardRef.current, { useCORS: true, backgroundColor: null });
            const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png', 0.95));

            if (!blob) throw new Error("Could not create image blob.");

            const file = new File([blob], 'mindscope-result.png', { type: 'image/png' });
            
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: shareTitle,
                    text: shareText,
                    url: shareUrl,
                    files: [file],
                });
            } else if (navigator.share) {
                await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
            } else {
                await navigator.clipboard.writeText(shareUrl);
                setNotification({ message: uiText.clipboardSuccess, type: 'success' });
            }
        } catch (err) {
            if (err instanceof Error && err.name !== 'AbortError') {
                console.error('Share failed:', err);
                try {
                    if (navigator.share) {
                        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
                    } else {
                        await navigator.clipboard.writeText(shareUrl);
                        setNotification({ message: uiText.clipboardSuccess, type: 'success' });
                    }
                } catch (fallbackErr) {
                    console.error('Fallback share failed:', fallbackErr);
                    setNotification({ message: uiText.clipboardError, type: 'error' });
                }
            }
        } finally {
            setIsSharing(false);
            setShareCardContent(null);
        }
    }, 100);
  };
  
  const handleBackToMainMenuFromQuiz = () => setGameState(GameState.MAIN_MENU);
  const handleViewAnalytics = () => setGameState(GameState.ANALYTICS);
  const handleViewProfile = () => setGameState(GameState.PROFILE);
  const handleViewAchievements = () => setGameState(GameState.ACHIEVEMENTS);
  const handleStartBreathing = () => setGameState(GameState.BREATHING_EXERCISE);
  const handleViewYourJourney = () => setGameState(GameState.YOUR_JOURNEY);

  const getDailyJournalPrompt = useCallback(() => {
    setDailyJournalPrompt({ text: '', isLoading: true });
    
    let promptPool: string[];
    const category = lastTestResult?.categoryKey as ProfileType | undefined;
    
    if (category && personalizedPrompts[language][category]) {
      promptPool = personalizedPrompts[language][category];
    } else {
      promptPool = personalizedPrompts[language].default;
    }
    
    const today = new Date().toISOString().split('T')[0];
    try {
        const cachedPromptStr = localStorage.getItem('dailyJournalPrompt');
        if (cachedPromptStr) {
            const cachedPrompt = JSON.parse(cachedPromptStr);
            if (cachedPrompt.date === today && cachedPrompt.lang === language) {
                setDailyJournalPrompt({ text: cachedPrompt.prompt, isLoading: false });
                return;
            }
        }
    } catch (e) { console.error("Could not read cached prompt", e); }
    
    const dayOfYear = getDayOfYear();
    const newPrompt = promptPool[dayOfYear % promptPool.length];

    setDailyJournalPrompt({ text: newPrompt, isLoading: false });
    try {
        localStorage.setItem('dailyJournalPrompt', JSON.stringify({ prompt: newPrompt, date: today, lang: language }));
    } catch(e) {
        console.error("Could not save daily prompt to cache", e);
    }
}, [language, lastTestResult]);

  const handleViewJournal = () => {
    getDailyJournalPrompt();
    setGameState(GameState.JOURNAL);
  };
  
  const handleShowCognitiveChallenge = () => {
    const challenges = cognitiveChallengeData[language].challenges;
    const dayOfYear = getDayOfYear();
    const challengeIndex = dayOfYear % challenges.length;
    const todaysChallenge = challenges[challengeIndex];

    setCognitiveChallenge({
      challenge: todaysChallenge,
    });
    setGameState(GameState.COGNITIVE_CHALLENGE);
  };

  const handleTaskComplete = useCallback((task: keyof DailyCheckin) => {
    setDailyCheckin(prev => ({...prev, [task]: true}));
  }, []);

  const handleJournalEntry = (text: string) => {
    const userEntry: JournalEntry = { role: 'user', content: text, timestamp: new Date().toISOString() };
    setJournalHistory(prevHistory => [...prevHistory, userEntry]);
    handleActivityUpdate();
    handleTaskComplete('dailyReflection');
    logJourneyEvent('journal', text.substring(0, 50) + '...');
  };
  
  const renderContent = () => {
    switch (gameState) {
      case GameState.INTRO: return <Intro onComplete={() => setGameState(GameState.LANGUAGE_SELECT)} />;
      case GameState.LANGUAGE_SELECT: return <LanguageSelector onSelect={handleLanguageSelect} />;
      case GameState.MAIN_MENU: return <MainMenu onSelectTest={handleTestSelect} onShowAnalytics={handleViewAnalytics} onShowProfile={handleViewProfile} onShowJournal={handleViewJournal} onShowAchievements={handleViewAchievements} onStartBreathing={handleStartBreathing} onShowCognitiveChallenge={handleShowCognitiveChallenge} onShowYourJourney={handleViewYourJourney} language={language} theme={theme} onToggleTheme={() => setTheme(p => p === 'light' ? 'dark' : 'light')} savedProgress={savedProgress} uiText={personalityGameData[language].ui} lastTestResult={lastTestResult} dailyCheckin={dailyCheckin} dailyCheckinCompleted={dailyCheckinCompleted} />;
      case GameState.BREATHING_EXERCISE: return <BreathingExercise onClose={() => setGameState(GameState.MAIN_MENU)} language={language} uiText={personalityGameData[language].ui} onTaskComplete={() => handleTaskComplete('mindfulMoment')} />;
      case GameState.COGNITIVE_CHALLENGE:
        return <CognitiveChallenge
          language={language}
          uiText={personalityGameData[language].ui}
          challenge={cognitiveChallenge.challenge}
          onBackToMenu={() => setGameState(GameState.MAIN_MENU)}
          onTaskComplete={() => handleTaskComplete('mentalSpark')}
        />;
      
      case GameState.QUIZ: {
        const testData = {
          mirror: { questions: personalityGameData[language].questions, ui: personalityGameData[language].ui, state: mirrorTest },
          emotional: { questions: emotionalTestData[language].questions, ui: emotionalTestData[language].ui, state: emotionalTest },
          self_perception: { questions: selfPerceptionTestData[language].questions, ui: selfPerceptionTestData[language].ui, state: selfPerceptionTest },
          motivation: { questions: motivationTestData[language].questions, ui: motivationTestData[language].ui, state: motivationTest },
        }[activeTest!];
        
        const qData = testData.questions[testData.state.currentQuestionIndex];
        const genericQuestion: GenericQuestion = { id: qData.id, question: (qData as SelfPerceptionQuestion).self_perception || (qData as Question).question, subQuestion: (qData as SelfPerceptionQuestion).social_perception, source: qData.source, options: qData.options };

        // Fix: The Quiz component's `onAnswer` prop expects a function that only takes `optionIndex`.
        // We adapt the `handleAnswer` function here by wrapping it in an arrow function,
        // which captures the `genericQuestion.id` from the current scope and passes it along with the `optionIndex`.
        return <Quiz 
          language={language} 
          questionData={genericQuestion} 
          onAnswer={(optionIndex) => handleAnswer(genericQuestion.id, optionIndex)} 
          onNext={handleNext} 
          onPrevious={handlePrevious} 
          onBackToMenu={handleBackToMainMenuFromQuiz} 
          selectedOptionIndex={testData.state.answers[genericQuestion.id]} 
          currentQuestion={testData.state.currentQuestionIndex + 1} 
          totalQuestions={testData.questions.length} 
          uiText={testData.ui} 
        />;
      }

      case GameState.CALCULATING: return <Calculating text={loadingText} />;
      
      case GameState.RESULTS: {
        if (!activeTest) return null;

        if (activeTest === 'mirror' && mirrorResult) {
            const resultData = personalityGameData[language].results[mirrorResult.type];
            return (
                <Result 
                    title={resultData.title}
                    onRestart={() => setGameState(GameState.MAIN_MENU)} 
                    onShare={handleShare}
                    isSharing={isSharing}
                    uiText={personalityGameData[language].ui}
                >
                    <div className="space-y-4">
                        <p className="font-lora text-lg italic text-center">{resultData.poetic_explanation}</p>
                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-2 text-primary dark:text-primary-dark">{personalityGameData[language].ui.psychologicalInsightTitle}</h3>
                            <p className="text-base">{resultData.psychological_insight}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-2 text-primary dark:text-primary-dark">{personalityGameData[language].ui.selfGrowthTitle}</h3>
                            <ul className="list-disc ltr:list-inside rtl:list-outside rtl:mr-6 space-y-2">
                                {resultData.advice.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </Result>
            );
        }
        
        if (activeTest === 'emotional' && emotionalResult) {
             const resultData = emotionalTestData[language].results[emotionalResult.category];
             return (
                <Result
                    title={resultData.label}
                    onRestart={() => setGameState(GameState.MAIN_MENU)}
                    onShare={handleShare}
                    isSharing={isSharing}
                    uiText={emotionalTestData[language].ui}
                >
                     <div className="space-y-4">
                        <p className="text-base text-center">{resultData.description}</p>
                        <div className="flex justify-around text-center my-4">
                            <div>
                                <div className="text-2xl font-bold text-primary dark:text-primary-dark">{emotionalResult.scores.reactivity}</div>
                                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{emotionalTestData[language].ui.scoreReactivity}</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary dark:text-primary-dark">{emotionalResult.scores.regulation}</div>
                                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{emotionalTestData[language].ui.scoreRegulation}</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-2 text-primary dark:text-primary-dark">{emotionalTestData[language].ui.tipsTitle}</h3>
                            <ul className="space-y-3">
                                {resultData.tips.map((tip, index) => (
                                    <li key={index} className="p-3 bg-primary/10 dark:bg-primary-dark/10 rounded-lg">
                                        <p className="font-semibold">{tip.tip}</p>
                                        <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary italic mt-1">({tip.citation})</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Result>
            );
        }

        if (activeTest === 'self_perception' && selfPerceptionResult) {
            const resultData = selfPerceptionTestData[language].results[selfPerceptionResult.category];
            return (
                <Result
                    title={resultData.label}
                    onRestart={() => setGameState(GameState.MAIN_MENU)}
                    onShare={handleShare}
                    isSharing={isSharing}
                    uiText={selfPerceptionTestData[language].ui}
                >
                     <div className="space-y-4">
                        <p className="text-base text-center">{resultData.description}</p>
                         <div className="flex justify-around text-center my-4">
                            <div>
                                <div className="text-2xl font-bold text-primary dark:text-primary-dark">{selfPerceptionResult.scores.selfScore}</div>
                                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{selfPerceptionTestData[language].ui.selfScore}</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary dark:text-primary-dark">{selfPerceptionResult.scores.perceivedOthersScore}</div>
                                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{selfPerceptionTestData[language].ui.perceivedOthersScore}</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-accent dark:text-accent-dark">{selfPerceptionResult.scores.discrepancyIndex}</div>
                                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{selfPerceptionTestData[language].ui.discrepancyIndex}</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-2 text-primary dark:text-primary-dark">{selfPerceptionTestData[language].ui.interventionsTitle}</h3>
                             <ul className="space-y-3">
                                {resultData.interventions.map((item, index) => (
                                    <li key={index} className="p-3 bg-light-card dark:bg-dark-bg rounded-lg">
                                        <p className="font-semibold">{item.intervention}</p>
                                        <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary italic mt-1">({item.citation})</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Result>
            );
        }

        if (activeTest === 'motivation' && motivationResult) {
            const resultData = motivationTestData[language].results[motivationResult.primaryMotive];
            return (
                <Result
                    title={resultData.label}
                    onRestart={() => setGameState(GameState.MAIN_MENU)}
                    onShare={handleShare}
                    isSharing={isSharing}
                    uiText={motivationTestData[language].ui}
                >
                    <div className="space-y-4">
                        <p className="text-base text-center">{resultData.description}</p>
                        <div>
                            <h3 className="text-xl font-bold mt-6 mb-2 text-primary dark:text-primary-dark">{motivationTestData[language].ui.recommendationsTitle}</h3>
                            <ul className="space-y-3">
                                {resultData.recommendations.map((item, index) => (
                                    <li key={index} className="p-3 bg-light-card dark:bg-dark-bg rounded-lg">
                                        <p className="font-semibold">{item.recommendation}</p>

                                        <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary italic mt-1">({item.citation})</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Result>
            );
        }
        
        return null;
      }
      
      case GameState.ANALYTICS: {
          const testNames = {
              mirror: personalityGameData[language].testName,
              emotional: emotionalTestData[language].testName,
              self_perception: selfPerceptionTestData[language].testName,
              motivation: motivationTestData[language].testName,
          };
          return <Analytics 
            onBackToMenu={() => setGameState(GameState.MAIN_MENU)} 
            language={language} 
            uiText={personalityGameData[language].ui} 
            testNames={testNames} 
          />;
        }

      case GameState.PROFILE:
          return <Profile onBackToMenu={() => setGameState(GameState.MAIN_MENU)} language={language} unlockedBadges={unlockedBadges} uiText={personalityGameData[language].ui} activityStreak={activityStreak} lastTestResult={lastTestResult} />;

      case GameState.JOURNAL:
          return <Journal onBackToMenu={() => setGameState(GameState.MAIN_MENU)} language={language} history={journalHistory} onSubmit={handleJournalEntry} uiText={personalityGameData[language].ui} prompt={dailyJournalPrompt} onTaskComplete={() => handleTaskComplete('dailyReflection')} />;
      
      case GameState.ACHIEVEMENTS:
          return <AchievementsPage onBackToMenu={() => setGameState(GameState.MAIN_MENU)} language={language} unlockedBadges={unlockedBadges} uiText={personalityGameData[language].ui} />;

      case GameState.YOUR_JOURNEY:
          return <YourJourney history={journeyHistory} onBackToMenu={() => setGameState(GameState.MAIN_MENU)} language={language} uiText={personalityGameData[language].ui} />;

      case GameState.RETURNING_TO_MENU: return <Calculating text={personalityGameData[language].ui.returningToMenu} />;
      
      default: return null;
    }
  };

  return (
    <div className="text-light-text dark:text-dark-text min-h-screen flex items-center justify-center p-4 transition-colors duration-500">
      {shareCardContent && (
        <ShareCard
          shareRef={shareCardRef}
          title={shareCardContent.title}
          description={shareCardContent.description}
          language={language}
          theme={theme}
          activeTest={shareCardContent.activeTest}
          resultCategory={shareCardContent.resultCategory}
          uiText={personalityGameData[language].ui}
        />
      )}
      {notification && <ToastNotification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
      <div key={gameState} className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;