// Fix: Moved enum definitions here to resolve circular dependency issues.
export enum Language {
  EN = 'en',
  AR = 'ar',
}

export enum GameState {
  INTRO = 'intro',
  LANGUAGE_SELECT = 'language_select',
  MAIN_MENU = 'main_menu',
  QUIZ = 'quiz',
  CALCULATING = 'calculating',
  RESULTS = 'results',
  RETURNING_TO_MENU = 'returning_to_menu',
  ANALYTICS = 'analytics',
  PROFILE = 'profile',
  JOURNAL = 'journal', // New state for the journal page
  ACHIEVEMENTS = 'achievements', // New state for the achievements page
  BREATHING_EXERCISE = 'breathing_exercise', // New state for the breathing exercise
  COGNITIVE_CHALLENGE = 'cognitive_challenge', // New state for the daily cognitive challenge
  YOUR_JOURNEY = 'your_journey', // New state for the journey timeline
}

export enum ProfileType {
  DREAMER = 'dreamer',
  THINKER = 'thinker',
  DOER = 'doer',
  HEALER = 'healer',
}

export enum EmotionalResultCategory {
  HIGH_REACTIVITY = 'high_reactivity',
  BALANCED = 'balanced',
  HIGH_REGULATION = 'high_regulation',
}

export enum SelfPerceptionResultCategory {
  ALIGNED = 'aligned',
  MODERATE_DISCREPANCY = 'moderate_discrepancy',
  HIGH_DISCREPANCY = 'high_discrepancy',
}

export enum MotivationType {
    AUTONOMY = 'autonomy',
    COMPETENCE = 'competence',
    RELATEDNESS = 'relatedness',
    SECURITY = 'security',
    STATUS = 'status',
    NOVELTY = 'novelty',
}

// A generic question type for the refactored Quiz component
export interface GenericOption {
  text: string;
}

export interface GenericQuestion {
  id: number;
  question: string;
  subQuestion?: string;
  source: string;
  options: GenericOption[];
}


// Types for "The Mirror Within" Test
export interface AnswerOption {
  text: string;
  profile: ProfileType;
}

export interface Question {
  id: number;
  question: string;
  options: AnswerOption[];
  source: string;
}

export interface ResultProfile {
  title: string;
  poetic_explanation: string;
  psychological_insight: string;
  advice: string[];
}

export interface GameDataStructure {
  [Language.EN]: {
    testName: string; // Added for consistency
    questions: Question[];
    results: Record<ProfileType, ResultProfile>;
    // Fix: Specify keys required by the Welcome component to resolve type error in App.tsx.
    // An index signature is included to maintain compatibility with other components.
    ui: {
      [key: string]: string;
    };
  };
  [Language.AR]: {
    testName: string; // Added for consistency
    questions: Question[];
    results: Record<ProfileType, ResultProfile>;
    ui: {
      [key: string]: string;
    };
  };
}


// Types for "Emotional Triggers Test"
export interface EmotionalAnswerOption {
  text: string;
  scores: {
    reactivity: number;
    regulation: number;
  };
}

export interface EmotionalQuestion {
  id: number;
  question: string;
  options: EmotionalAnswerOption[];
  source: string;
}

export interface EmotionalResult {
  label: string;
  description: string;
  tips: {
    tip: string;
    citation: string;
  }[];
}

export interface ScoringRules {
  thresholds: {
    high_reactivity: {
      condition: (reactivity: number, regulation: number) => boolean;
    };
    high_regulation: {
      condition: (reactivity: number, regulation: number) => boolean;
    };
  };
}

export interface EmotionalTestDataStructure {
  [Language.EN]: {
    testName: string;
    testDescription: string;
    questions: EmotionalQuestion[];
    scoring: ScoringRules;
    results: Record<EmotionalResultCategory, EmotionalResult>;
    ui: Record<string, string>;
  };
  [Language.AR]: {
    testName: string;
    testDescription: string;
    questions: EmotionalQuestion[];
    scoring: ScoringRules;
    results: Record<EmotionalResultCategory, EmotionalResult>;
    ui: Record<string, string>;
  };
}

// Types for "Self-Perception Mirror" Test
export interface SelfPerceptionAnswerOption {
    text: string;
    scores: {
        selfScore: number;
        perceivedOthersScore: number;
    };
}

export interface SelfPerceptionQuestion {
    id: number;
    self_perception: string;
    social_perception: string;
    options: SelfPerceptionAnswerOption[];
    source: string;
}

export interface SelfPerceptionResult {
    label: string;
    description: string;
    interventions: {
        intervention: string;
        citation: string;
    }[];
}

export interface SelfPerceptionScoringRules {
    thresholds: {
        aligned: { maxDiscrepancy: number };
        moderate_discrepancy: { maxDiscrepancy: number };
    };
}

export interface SelfPerceptionTestDataStructure {
    [Language.EN]: {
        testName: string;
        testDescription: string;
        questions: SelfPerceptionQuestion[];
        scoring: SelfPerceptionScoringRules;
        results: Record<SelfPerceptionResultCategory, SelfPerceptionResult>;
        ui: Record<string, string>;
    };
    [Language.AR]: {
        testName: string;
        testDescription: string;
        questions: SelfPerceptionQuestion[];
        scoring: SelfPerceptionScoringRules;
        results: Record<SelfPerceptionResultCategory, SelfPerceptionResult>;
        ui: Record<string, string>;
    };
}

// Types for "Hidden Motivation Finder" Test
export interface MotivationAnswerOption {
    text: string;
    motivation: MotivationType;
}

export interface MotivationQuestion {
    id: number;
    question: string;
    options: MotivationAnswerOption[];
    source: string;
}

export interface MotivationResult {
    label: string;
    description: string;
    recommendations: {
        recommendation: string;
        citation: string;
    }[];
}

export interface MotivationTestDataStructure {
    [Language.EN]: {
        testName: string;
        testDescription: string;
        questions: MotivationQuestion[];
        results: Record<MotivationType, MotivationResult>;
        ui: Record<string, string>;
    };
    [Language.AR]: {
        testName: string;
        testDescription: string;
        questions: MotivationQuestion[];
        results: Record<MotivationType, MotivationResult>;
        ui: Record<string, string>;
    };
}

// Type for storing quiz progress in local storage
export interface SavedQuizState {
    currentQuestionIndex: number;
    answers: Record<number, number>;
}

// Types for the new Badge System
export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string; // SVG path data or a component name
}

export type UnlockedBadges = Record<string, boolean>;

export interface BadgeDefinition {
    icon: string;
    [Language.EN]: { name: string; description: string };
    [Language.AR]: { name: string; description: string };
}

// Types for the Daily Journal feature
export interface JournalEntry {
    role: 'user' | 'model';
    content: string;
    timestamp: string;
}

export type JournalHistory = JournalEntry[];

// New type for activity streak
export interface ActivityStreak {
  count: number;
  lastActivityDate: string; // YYYY-MM-DD
}

// New type for last test result
export interface LastTestResult {
  title: string;
  summary: string;
  categoryKey: string;
}

// New type for Psychological Word of the Day
export interface PsychologicalTerm {
    term: string;
    definition: string;
    question: string;
}

// New types for Daily Cognitive Challenge
export interface CognitiveChallengeItem {
  question: string;
  category: string;
  hint: string;
  answer: string; // This will now be the explanation
  image?: string; // Image is now optional
  options: string[];
  correctAnswerIndex: number;
}

export interface CognitiveChallengeDataStructure {
  [Language.EN]: {
    challenges: CognitiveChallengeItem[];
  };
  [Language.AR]: {
    challenges: CognitiveChallengeItem[];
  };
}

// New Types for Engagement Features
export interface DailyCheckin {
    mindfulMoment: boolean;
    dailyReflection: boolean;
    mentalSpark: boolean;
}

export interface JourneyEvent {
    date: string; // YYYY-MM-DD
    type: 'checkin' | 'test' | 'journal';
    description: string;
}

export type JourneyHistory = JourneyEvent[];
