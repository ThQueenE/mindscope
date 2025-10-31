import { BadgeDefinition, Language } from '../types';

// A unique ID for each badge
export const BADGE_IDS = {
    TEST_VETERAN_5: 'test_veteran_5',
    DIVERSE_EXPLORER: 'diverse_explorer',
    STREAK_3_DAY: 'streak_3_day',
    STREAK_7_DAY: 'streak_7_day',
    // New Badges
    TEST_VETERAN_10: 'test_veteran_10',
    STREAK_14_DAY: 'streak_14_day',
    STREAK_30_DAY: 'streak_30_day',
};

// SVG path data for badge icons
const ICONS = {
    CROWN: "M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z", // Placeholder
    STAR: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    COMPASS: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-8c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM12 4l3 3-3-3-3 3 3-3z m0 16l-3-3 3 3 3-3-3 3z m-8-8l-3 3 3-3 3 3-3-3z m16 0l3-3-3 3-3-3 3 3z", // Simplified placeholder
    FLAME: "M12.395 2.553a1 1 0 00-1.45.385c-.345.678-.597 1.396-.822 2.148-.224.752-.395 1.546-.51 2.348-.114.801-.19 1.62-.224 2.453-.035.832-.038 1.67.01 2.512.047.841.13 1.67.256 2.483.128.813.298 1.603.51 2.368.213.765.468 1.494.76 2.182.292.688.63 1.314.996 1.865a1 1 0 001.752-.85c-.35-.53-.655-1.13-.93-1.785-.276-.655-.52-1.34-.733-2.05-.213-.71-.39-1.446-.525-2.2-.134-.753-.23-1.526-.27-2.316-.04-.79-.043-1.58.01-2.38.053-.799.14-1.58.26-2.345.12-.765.28-1.51.49-2.23.21-.72.46-1.395.74-2.027.28-.632.59-1.19.88-1.664a1 1 0 00-.51-1.63z",
    // New Icons
    MEDAL: "M9 4v1.255a7.5 7.5 0 014.243 12.245L12 21l-1.243-3.5A7.5 7.5 0 019 5.255V4m3 11a3 3 0 100-6 3 3 0 000 6z",
    SUN: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
}

// Master list of all badges available in the app
export const badgeDefinitions: Record<string, BadgeDefinition> = {
    [BADGE_IDS.TEST_VETERAN_5]: {
        icon: ICONS.STAR,
        [Language.EN]: {
            name: 'Test Veteran',
            description: 'Complete a total of 5 tests.',
        },
        [Language.AR]: {
            name: 'خبير الاختبارات',
            description: 'أكمل ما مجموعه 5 اختبارات.',
        },
    },
    [BADGE_IDS.DIVERSE_EXPLORER]: {
        icon: ICONS.COMPASS,
        [Language.EN]: {
            name: 'Diverse Explorer',
            description: 'Complete all 4 different types of tests.',
        },
        [Language.AR]: {
            name: 'المستكشف المتنوع',
            description: 'أكمل جميع أنواع الاختبارات الأربعة المختلفة.',
        },
    },
    [BADGE_IDS.STREAK_3_DAY]: {
        icon: ICONS.FLAME,
        [Language.EN]: {
            name: 'Consistent Habit',
            description: 'Maintain a 3-day activity streak.',
        },
        [Language.AR]: {
            name: 'عادة مستمرة',
            description: 'حافظ على سلسلة نشاط لمدة 3 أيام.',
        },
    },
    [BADGE_IDS.STREAK_7_DAY]: {
        icon: ICONS.FLAME, // Changed from STAR to FLAME for consistency
        [Language.EN]: {
            name: 'Weekly Warrior',
            description: 'Maintain a 7-day activity streak.',
        },
        [Language.AR]: {
            name: 'محارب الأسبوع',
            description: 'حافظ على سلسلة نشاط لمدة 7 أيام.',
        },
    },
    // New Badge Definitions
    [BADGE_IDS.TEST_VETERAN_10]: {
        icon: ICONS.MEDAL,
        [Language.EN]: {
            name: 'Seasoned Veteran',
            description: 'Complete a total of 10 tests.',
        },
        [Language.AR]: {
            name: 'خبير متمرس',
            description: 'أكمل ما مجموعه 10 اختبارات.',
        },
    },
    [BADGE_IDS.STREAK_14_DAY]: {
        icon: ICONS.FLAME,
        [Language.EN]: {
            name: 'Fortnight Fire',
            description: 'Maintain a 14-day activity streak.',
        },
        [Language.AR]: {
            name: 'شعلة الأسبوعين',
            description: 'حافظ على سلسلة نشاط لمدة 14 يومًا.',
        },
    },
    [BADGE_IDS.STREAK_30_DAY]: {
        icon: ICONS.SUN,
        [Language.EN]: {
            name: 'Monthly Monument',
            description: 'Maintain a 30-day activity streak.',
        },
        [Language.AR]: {
            name: 'إنجاز شهري',
            description: 'حافظ على سلسلة نشاط لمدة 30 يومًا.',
        },
    },
};