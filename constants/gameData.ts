import { GameDataStructure, Language, ProfileType } from '../types';

export const gameData: GameDataStructure = {
  [Language.EN]: {
    testName: 'Personality Test',
    ui: {
      backToMainMenu: 'Main Menu',
      backToMenu: 'Back to Menu',
      share: 'Share My Result',
      endQuote: '“You are not what happens to you — you are what you choose to become.”',
      questionPrefix: 'Q',
      psychologicalInsightTitle: 'Psychological Insight',
      selfGrowthTitle: 'Tips for Self-Growth',
      sharingResult: 'Sharing your result:',
      shareTitle: "My 'Personality Test' Result",
      shareText: "I got '{profileTitle}'! Find out your personality profile.",
      clipboardSuccess: 'Link copied to clipboard!',
      clipboardError: 'Could not copy link.',
      calculating: 'Analyzing Your Profile...',
      sharing: 'Sharing...',
      next: 'Next',
      previous: 'Previous',
      completionsSuffix: 'users',
      returningToMenu: 'Returning to main menu...',
      todaysInsightTitle: "Today's Insight",
      personalizedInsightTitle: "An Insight for the {resultTitle}",
      noResultInsightTitle: "Your Journey Begins",
      resumeTest: "Resume",
      // App Slogan
      appSlogan: 'Discover yourself.',
      // Analytics Page Strings
      viewAnalytics: "Analytics",
      analyticsTitle: "📊 Progress Analytics",
      testsTakenTitle: "Tests Taken",
      resultPatternsTitle: "Result Patterns",
      noData: "No data yet. Complete a test to see your analytics!",
      noResultData: "Complete tests to see your result patterns.",
      daysPassed: "Days Passed",
      daysRemaining: "Days Remaining",
      // Profile & Badges Strings
      myProgressTitle: "My Progress",
      viewProfile: "My Profile",
      profileTitle: "My Profile",
      myBadges: "My Badges",
      badgeUnlocked: "Badge Unlocked!",
      locked: "Locked",
      close: "Awesome!",
      lastInsightTitle: "Last Insight",
      currentStreak: "Current Streak",
      streakDays: "Days",
      noStreak: "Complete a daily task or journal entry to start a streak!",
      // Daily Journal Strings
      viewJournal: "Daily Journal",
      journalTitle: "Daily Journal",
      journalPlaceholder: "How are you feeling today? What's on your mind?",
      journalSubmit: "Reflect",
      journalPromptTitle: "Today's Prompt for You",
      // New Achievements Page Strings
      viewAchievements: "Achievements",
      achievementsTitle: "🏅 Your Achievements",
      achievementsSubtitle: "Check your unlocked badges and keep progressing!",
      achievementsProgress: "Your Progress:",
      badgeUnlockedToast: "🎉 Congrats! You unlocked a new badge – check it on the Achievements page.",
      // New Daily Engagement Strings
      viewBreathingExercise: "Mindful Breath",
      wordOfTheDayTitle: "Psychological Word of the Day",
      insightResonates: "This resonates",
      insightNotToday: "Not for me today",
      insightThanks: "Thank you for your reflection.",
      breathingTitle: "1-Minute Calm",
      breathingStart: "Start",
      breathingInhale: "Inhale...",
      breathingHold: "Hold",
      breathingExhale: "Exhale...",
      breathingComplete: "Well done.",
      breathingClose: "Close",
      // New Daily Cognitive Challenge strings
      viewCognitiveChallenge: "Daily Cognitive Challenge",
      cognitiveChallengeTitle: "Daily Cognitive Challenge",
      cognitiveChallengeSubtitle: "Sharpen your mind with today's puzzle.",
      categoryLabel: "Category",
      showHint: "Show Hint",
      correctAnswer: "Correct!",
      incorrectAnswer: "Not quite!",
      explanationLabel: "Explanation",
      // New Engagement Feature Strings
      todaysCheckInTitle: "Today's Check-in",
      mindfulMomentTask: "Mindful Moment",
      dailyReflectionTask: "Daily Reflection",
      mentalSparkTask: "Mental Spark",
      checkInComplete: "Check-in complete! Your streak is extended.",
      viewYourJourney: "Your Journey",
    },
    // Fix: Removed the `dailyTasks` property as it's obsolete and not part of the GameDataStructure type.
    questions: [
      {
        id: 1,
        question: 'When starting a new project, what is your first instinct?',
        options: [
          { text: 'Imagine all the creative possibilities.', profile: ProfileType.DREAMER },
          { text: 'Create a detailed plan and timeline.', profile: ProfileType.THINKER },
          { text: 'Jump right in and start building something.', profile: ProfileType.DOER },
          { text: 'Consider how the project will benefit others.', profile: ProfileType.HEALER },
        ],
        source: 'Source: Big Five Personality Model (Openness), Costa & McCrae (1992)',
      },
      {
        id: 2,
        question: 'How do you typically handle stress?',
        options: [
          { text: 'Escape into my imagination or a good book.', profile: ProfileType.DREAMER },
          { text: 'Analyze the source of the stress to find a solution.', profile: ProfileType.THINKER },
          { text: 'Engage in a physical activity like running or working out.', profile: ProfileType.DOER },
          { text: 'Talk it out with a close friend or family member.', profile: ProfileType.HEALER },
        ],
        source: 'Source: Daniel Goleman, "Emotional Intelligence" (1995)',
      },
      {
        id: 3,
        question: 'A friend is upset. Your first reaction is to:',
        options: [
          { text: 'Help them see the situation from a different, more optimistic perspective.', profile: ProfileType.DREAMER },
          { text: 'Offer logical advice to help solve their problem.', profile: ProfileType.THINKER },
          { text: 'Distract them with a fun activity to cheer them up.', profile: ProfileType.DOER },
          { text: 'Listen quietly and offer a comforting presence.', profile: ProfileType.HEALER },
        ],
        source: 'Source: Daniel Goleman, "Emotional Intelligence" (1995)',
      },
      {
        id: 4,
        question: 'What motivates you the most in your career?',
        options: [
          { text: 'The freedom to innovate and express my creativity.', profile: ProfileType.DREAMER },
          { text: 'Mastery of my craft and becoming an expert.', profile: ProfileType.THINKER },
          { text: 'Achieving measurable results and hitting targets.', profile: ProfileType.DOER },
          { text: 'Making a positive impact on my community or team.', profile: ProfileType.HEALER },
        ],
        source: 'Source: Deci & Ryan, "Self-Determination Theory" (1985)',
      },
      {
        id: 5,
        question: 'In a group discussion, you are most likely to be the one who:',
        options: [
          { text: 'Proposes unconventional, "out-of-the-box" ideas.', profile: ProfileType.DREAMER },
          { text: 'Asks clarifying questions and points out logical fallacies.', profile: ProfileType.THINKER },
          { text: 'Takes charge and assigns action items to move forward.', profile: ProfileType.DOER },
          { text: 'Ensures everyone feels heard and respected.', profile: ProfileType.HEALER },
        ],
        source: 'Source: Belbin, "Team Roles at Work" (1993)',
      },
        {
        id: 6,
        question: "When facing a difficult personal challenge, you rely on your:",
        options: [
            { text: "Intuition and inner vision to guide you.", profile: ProfileType.DREAMER },
            { text: "Rational mind to break down the problem.", profile: ProfileType.THINKER },
            { text: "Resilience and determination to push through.", profile: ProfileType.DOER },
            { text: "Support system and emotional connections.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Carl Jung, "Psychological Types" (1921)',
        },
        {
        id: 7,
        question: "An ideal weekend for you involves:",
        options: [
            { text: "Visiting an art gallery or exploring a new, inspiring place.", profile: ProfileType.DREAMER },
            { text: "Reading a non-fiction book or learning a new skill.", profile: ProfileType.THINKER },
            { text: "Hiking, sports, or working on a home improvement project.", profile: ProfileType.DOER },
            { text: "Spending quality time with loved ones or volunteering.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Csikszentmihalyi, "Flow" (1990)',
        },
        {
        id: 8,
        question: "How do you define success?",
        options: [
            { text: "Living a life true to my own unique vision.", profile: ProfileType.DREAMER },
            { text: "The continuous pursuit of knowledge and understanding.", profile: ProfileType.THINKER },
            { text: "The accomplishment of ambitious goals.", profile: ProfileType.DOER },
            { text: "The depth and quality of my relationships.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Rosenberg, "Society and the Adolescent Self-Image" (1965)',
        },
        {
        id: 9,
        question: "When learning something new, you prefer:",
        options: [
            { text: "Abstract concepts and theoretical models.", profile: ProfileType.DREAMER },
            { text: "Structured lessons with clear facts and data.", profile: ProfileType.THINKER },
            { text: "Hands-on practice and trial-and-error.", profile: ProfileType.DOER },
            { text: "Collaborative learning with a group or mentor.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Kolb, "Experiential Learning" (1984)',
        },
        {
        id: 10,
        question: "Your approach to conflict is to:",
        options: [
            { text: "Find a creative compromise that satisfies everyone's imagination.", profile: ProfileType.DREAMER },
            { text: "Mediate with objective logic and find a fair resolution.", profile: ProfileType.THINKER },
            { text: "Address it directly and decisively to resolve it quickly.", profile: ProfileType.DOER },
            { text: "Promote understanding and empathy between all parties.", profile: ProfileType.HEALER }
        ],
        source: 'Source: John Bowlby, "Attachment and Loss" (1969)',
        },
        {
        id: 11,
        question: "What kind of environment helps you thrive?",
        options: [
            { text: "An unstructured space that allows for spontaneity and creativity.", profile: ProfileType.DREAMER },
            { text: "An organized, quiet, and predictable environment.", profile: ProfileType.THINKER },
            { text: "A dynamic, fast-paced setting with constant challenges.", profile: ProfileType.DOER },
            { text: "A harmonious and supportive atmosphere.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Big Five Personality Model (Conscientiousness), Costa & McCrae (1992)',
        },
        {
        id: 12,
        question: "You receive unexpected criticism. How do you react internally?",
        options: [
            { text: "Question if it limits my creative freedom.", profile: ProfileType.DREAMER },
            { text: "Evaluate its validity and logic before accepting or rejecting it.", profile: ProfileType.THINKER },
            { text: "Feel a surge of motivation to prove them wrong.", profile: ProfileType.DOER },
            { text: "Feel concerned about its impact on my relationship with the person.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Carol Dweck, "Mindset: The New Psychology of Success" (2006)',
        },
        {
        id: 13,
        question: "When you think about the future, you are most excited by:",
        options: [
            { text: "The endless possibilities and novel experiences ahead.", profile: ProfileType.DREAMER },
            { text: "The new knowledge and discoveries that await.", profile: ProfileType.THINKER },
            { text: "The goals I will achieve and milestones I will reach.", profile: ProfileType.DOER },
            { text: "The relationships I will build and nurture.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Seligman, "Learned Optimism" (1990)',
        },
        {
        id: 14,
        question: "What's your relationship with rules?",
        options: [
            { text: "They are often too restrictive for true innovation.", profile: ProfileType.DREAMER },
            { text: "They provide necessary structure and order.", profile: ProfileType.THINKER },
            { text: "They are guidelines, but can be bent to achieve a goal.", profile: ProfileType.DOER },
            { text: "They are important for ensuring fairness and harmony.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Big Five Personality Model (Agreeableness), Costa & McCrae (1992)',
        },
        {
        id: 15,
        question: "You feel most fulfilled when you:",
        options: [
            { text: "Create something entirely new and original.", profile: ProfileType.DREAMER },
            { text: "Solve a complex puzzle or understand a difficult concept.", profile: ProfileType.THINKER },
            { text: "Overcome a major obstacle through sheer effort.", profile: ProfileType.DOER },
            { text: "Help someone feel understood and cared for.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Ryff, "Psychological Well-Being" (1989)',
        },
        {
        id: 16,
        question: "If you were a character in a story, you'd be the:",
        options: [
            { text: "Mystical visionary or the eccentric artist.", profile: ProfileType.DREAMER },
            { text: "Wise scholar or the brilliant detective.", profile: ProfileType.THINKER },
            { text: "Courageous hero or the determined pioneer.", profile: ProfileType.DOER },
            { text: "Loyal companion or the nurturing guardian.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Carl Jung, "Archetypes and the Collective Unconscious" (1959)',
        },
        {
        id: 17,
        question: "Your decision-making process is primarily based on:",
        options: [
            { text: "My gut feeling and what feels right in the moment.", profile: ProfileType.DREAMER },
            { text: "Careful analysis of data and potential outcomes.", profile: ProfileType.THINKER },
            { text: "What will lead to the most effective and direct result.", profile: ProfileType.DOER },
            { text: "What will maintain harmony and benefit the group.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Kahneman, "Thinking, Fast and Slow" (2011)',
        },
        {
        id: 18,
        question: "When reflecting on your past, you tend to focus on:",
        options: [
            { text: "The moments of inspiration and wonder.", profile: ProfileType.DREAMER },
            { text: "The lessons learned and knowledge gained.", profile: ProfileType.THINKER },
            { text: "The challenges overcome and victories won.", profile: ProfileType.DOER },
            { text: "The cherished memories with people you love.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Pennebaker, "Expressive Writing: Words That Heal" (1997)',
        },
        {
        id: 19,
        question: "What is your greatest strength?",
        options: [
            { text: "My imagination.", profile: ProfileType.DREAMER },
            { text: "My intellect.", profile: ProfileType.THINKER },
            { text: "My drive.", profile: ProfileType.DOER },
            { text: "My compassion.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Peterson & Seligman, "Character Strengths and Virtues" (2004)',
        },
        {
        id: 20,
        question: "People come to you for help with:",
        options: [
            { text: "Brainstorming creative solutions to their problems.", profile: ProfileType.DREAMER },
            { text: "Getting an objective and well-reasoned opinion.", profile: ProfileType.THINKER },
            { text: "Creating a plan of action and getting motivated.", profile: ProfileType.DOER },
            { text: "A listening ear and emotional support.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Goffman, "The Presentation of Self in Everyday Life" (1956)',
        },
        {
        id: 21,
        question: "What does 'freedom' mean to you?",
        options: [
            { text: "The freedom to explore my thoughts and dreams without limits.", profile: ProfileType.DREAMER },
            { text: "The freedom from ignorance that comes with knowledge.", profile: ProfileType.THINKER },
            { text: "The freedom to act and shape my own destiny.", profile: ProfileType.DOER },
            { text: "The freedom to connect authentically with others.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Rokeach, "The Nature of Human Values" (1973)',
        },
        {
        id: 22,
        question: "A perfect day ends with:",
        options: [
            { text: "Journaling about my ideas and feelings.", profile: ProfileType.DREAMER },
            { text: "Feeling satisfied that I've learned something new.", profile: ProfileType.THINKER },
            { text: "A sense of accomplishment from my day's work.", profile: ProfileType.DOER },
            { text: "A deep conversation with someone I care about.", profile: ProfileType.HEALER }
        ],
        source: 'Source: James Clear, "Atomic Habits" (2018)',
        },
        {
        id: 23,
        question: "You are asked to describe yourself in one word. You choose:",
        options: [
            { text: "Visionary", profile: ProfileType.DREAMER },
            { text: "Analytical", profile: ProfileType.THINKER },
            { text: "Driven", profile: ProfileType.DOER },
            { text: "Caring", profile: ProfileType.HEALER }
        ],
        source: 'Source: Rogers, "On Becoming a Person" (1961)',
        },
        {
        id: 24,
        question: "When collaborating on a team, your ideal role is to:",
        options: [
            { text: "Generate the initial concept and vision.", profile: ProfileType.DREAMER },
            { text: "Research and analyze information to ensure accuracy.", profile: ProfileType.THINKER },
            { text: "Organize the tasks and keep the team on track.", profile: ProfileType.DOER },
            { text: "Mediate disagreements and foster a positive team spirit.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Tuckman, "Stages of Group Development" (1965)',
      },
      {
        id: 25,
        question: "What is most essential for a happy life?",
        options: [
          { text: "Purpose and self-expression.", profile: ProfileType.DREAMER },
          { text: "Clarity and understanding.", profile: ProfileType.THINKER },
          { text: "Achievement and progress.", profile: ProfileType.DOER },
          { text: "Connection and belonging.", profile: ProfileType.HEALER }
        ],
        source: 'Source: Seligman, "Flourish: A Visionary New Understanding of Happiness" (2011)',
      },
      {
        id: 26,
        question: "When faced with an uncertain future, your first move is to:",
        options: [
          { text: "Envision multiple exciting potential outcomes.", profile: ProfileType.DREAMER },
          { text: "Gather as much information as possible to predict the most likely scenario.", profile: ProfileType.THINKER },
          { text: "Take a small, decisive action to see what happens.", profile: ProfileType.DOER },
          { text: "Discuss the possibilities and your feelings with people you trust.", profile: ProfileType.HEALER }
        ],
        source: "Source: Ambiguity Tolerance, Frenkel-Brunswik (1949)"
      },
      {
        id: 27,
        question: "You feel the most profoundly happy in a moment of:",
        options: [
          { text: "Sudden creative inspiration or awe-inspiring beauty.", profile: ProfileType.DREAMER },
          { text: "Deep understanding, when a complex idea finally clicks.", profile: ProfileType.THINKER },
          { text: "Triumph, after successfully completing a difficult task.", profile: ProfileType.DOER },
          { text: "Genuine connection, feeling truly in sync with another person.", profile: ProfileType.HEALER }
        ],
        source: "Source: Eudaimonic vs. Hedonic Well-being, Ryan & Deci (2001)"
      },
      {
        id: 28,
        question: "How do you internally process a significant failure?",
        options: [
          { text: "See it as a narrative plot twist, a lesson for a future chapter.", profile: ProfileType.DREAMER },
          { text: "Systematically deconstruct what went wrong to prevent it from happening again.", profile: ProfileType.THINKER },
          { text: "Feel a brief sting, then immediately focus on the next practical step or attempt.", profile: ProfileType.DOER },
          { text: "Take time to be kind to myself and process the disappointment with support.", profile: ProfileType.HEALER }
        ],
        source: "Source: Carol Dweck, 'Mindset: The New Psychology of Success' (2006) on Growth Mindset"
      },
      {
        id: 29,
        question: "If you could leave one thing behind, what would it be?",
        options: [
          { text: "An inspiring idea that changes how people see the world.", profile: ProfileType.DREAMER },
          { text: "A clear, logical system or body of knowledge that helps others understand.", profile: ProfileType.THINKER },
          { text: "A tangible company, building, or project that I created.", profile: ProfileType.DOER },
          { text: "A legacy of strong relationships and a nurtured community.", profile: ProfileType.HEALER }
        ],
        source: "Source: Erik Erikson, 'Stages of Psychosocial Development' (Generativity vs. Stagnation)"
      },
      {
        id: 30,
        question: "A friend is stuck in a rut. Your preferred way to help is by:",
        options: [
          { text: "Helping them brainstorm wild new possibilities for their life.", profile: ProfileType.DREAMER },
          { text: "Laying out the pros and cons of their situation to find a logical path forward.", profile: ProfileType.THINKER },
          { text: "Helping them with a practical task, like updating their resume or cleaning their space.", profile: ProfileType.DOER },
          { text: "Simply being present with them, offering comfort and a non-judgmental ear.", profile: ProfileType.HEALER }
        ],
        source: "Source: Social Support Theory (Instrumental vs. Emotional Support)"
      }
    ],
    results: {
      [ProfileType.DREAMER]: {
        title: 'صاحب الرؤية (مبدع + حدسي)',
        poetic_explanation: 'أنت رسام الاحتمالات، وعقلك لوحة فنية يمتزج فيها الحدس والإبداع بسلاسة. ترى العالم بألوان زاهية من المعنى والرمزية، وتجد العجب في كل ما هو يومي. تسترشد ببوصلة داخلية، ويُنار طريقك ببئر عميق من الشعور والخيال.',
        psychological_insight: 'يشير هذا الملف الشخصي إلى ارتباط قوي بالتفكير المجرد والعمق العاطفي. تكمن نقاط قوتك في أفكارك المبتكرة وطبيعتك المتعاطفة. ومع ذلك، قد تجد أحيانًا صعوبة في التركيز على التفاصيل العملية أو الحقائق الواقعية. يكمن نموك في إيجاد طرق لتحقيق رؤاك دون أن تفقد شرارتك الخيالية.',
        advice: [
          'رسّخ رؤاك: لتحقيق أفكارك، اربطها بخطوة أولى واحدة وملموسة يمكنك اتخاذها.',
          'احمِ طاقتك: تعاطفك هبة. ضع حدودًا لتجنب امتصاص ضغوط الآخرين، وحافظ على مساحتك الخيالية.',
          'تعاون مع الواقعيين: شارك مع "المُنجِز" أو "المفكر" الذي يمكنه مساعدتك في هيكلة وتنفيذ مفاهيمك الرائعة.',
          'عش الحاضر: مارس اليقظة الذهنية من خلال التركيز على حواسك لبضع دقائق كل يوم للبقاء متجذرًا في الواقع.'
        ],
      },
      [ProfileType.THINKER]: {
        title: 'المفكر (تحليلي + هادئ)',
        poetic_explanation: 'أنت مهندس المنطق، تبني عالمك على أساس من العقل والوضوح. عقلك مساحة هادئة ومنظمة حيث تكون المشاكل ألغازًا يجب حلها والمعرفة هي الكنز النهائي. أنت تبحر في الحياة بيد ثابتة، وتقدر الحقيقة والدقة فوق كل شيء.',
        psychological_insight: 'هذا يعني أنك تتفوق في التحليل الموضوعي والتخطيط الاستراتيجي. هدوؤك هو مصدر استقرار للآخرين. تكمن قوتك في قدرتك على رؤية الأنماط وحل المشكلات المعقدة والبقاء هادئًا تحت الضغط. ومع ذلك، قد تكافح أحيانًا مع الجوانب الفوضوية والعاطفية للحياة أو تجد صعوبة في اتخاذ القرارات عندما تكون البيانات غير كاملة. مسار نموك يتضمن تعلم الثقة بحدسك والتواصل مع مشاعرك الخاصة.',
        advice: [
          'ثق بحدسك أحيانًا: بالنسبة للقرارات الصغيرة، جرب المضي قدمًا بحدسك لتمرين تلك العضلة.',
          'مارس "المفردات العاطفية": حدد وسمّي مشاعرك بنشاط لفهمها بشكل أفضل.',
          'خصّص وقتًا للراحة: عقلك يعمل دائمًا؛ خصص وقتًا للراحة غير الفكرية، مثل المشي في الطبيعة.',
          'قدّر وجهات النظر المختلفة: استمع بنشاط إلى "أصحاب الرؤى" و "المُحتوين" لاكتساب رؤية أكثر شمولية.',
        ],
      },
      [ProfileType.DOER]: {
        title: 'المُنجِز (عملي + واثق)',
        poetic_explanation: 'أنت قوة من قوى الطبيعة، تترجم النية إلى عمل بزخم لا يمكن إيقافه. طاقتك واضحة، وتزدهر في التحديات والنتائج الملموسة. بالنسبة لك، العالم هو منظر طبيعي من الأهداف التي يجب تحقيقها والجبال التي يجب تسلقها. أنت تقود بثقة وتلهم الآخرين من خلال تصميمك المطلق.',
        psychological_insight: 'هذا يعني أنك قائد بالفطرة ومحقق للإنجازات، مدفوعًا بالرغبة في تحقيق الأشياء. ثقتك معدية، وتتفوق في تحويل الخطط إلى واقع. التحدي بالنسبة لك هو تجنب الإرهاق من خلال إدراك أن الراحة منتجة وأن الضعف ليس ضعفًا. رحلتك تتضمن تعلم الاحتفال بالعملية، وليس فقط النصر، والاستماع بنشاط كما تتصرف.',
        advice: [
          'مارس التوقفات الاستراتيجية: قبل القفز إلى العمل، خذ خمس دقائق للتفكير في "لماذا" وراء هدفك.',
          'احتفل بالعملية، وليس فقط الفوز: اعترف بالخطوات الصغيرة والجهد على طول الطريق لتجنب الإرهاق.',
          'استمع بنشاط: في المحادثات، ابذل جهدًا واعيًا للاستماع دون التخطيط لخطوتك التالية.',
          'خصّص وقتًا غير منظم: خصص وقتًا في تقويمك بدون جدول أعمال، مما يسمح بالراحة والعفوية.',
        ],
      },
      [ProfileType.HEALER]: {
        title: 'المُحتوي (عطوف + راسخ)',
        poetic_explanation: 'أنت قلب عالمك، مرساة ثابتة من التعاطف والتفاهم. تمتلك القدرة النادرة على الاستماع ليس فقط للكلمات، ولكن للمشاعر التي تكمن وراءها. تكمن قوتك في الاتصال، في رعاية العلاقات، وفي خلق مساحات يشعر فيها الجميع بالأمان والتقدير. أنت الصمغ الذي يجمع المجتمعات معًا.',
        psychological_insight: 'هذا يعني أن لديك درجة عالية من الذكاء العاطفي، خاصة في التعاطف والوعي الاجتماعي. هديتك هي قدرتك على خلق الانسجام وجعل الآخرين يشعرون بأنهم مرئيون ومفهومون. التحدي الأساسي في طريقك هو أن تمد هذا التعاطف نفسه لنفسك. لأنك متناغم جدًا مع احتياجات الآخرين، قد تهمل أحيانًا احتياجاتك الخاصة، أو تتجنب الصراع للحفاظ على السلام. يكمن نموك في وضع حدود صحية وتقدير احتياجاتك الخاصة بقدر ما تقدر احتياجات الآخرين.',
        advice: [
          'أعط الأولوية للتعاطف مع الذات: عامل نفسك بنفس اللطف والتفهم الذي تقدمه للآخرين.',
          'تدرب على قول "لا": ارفض بأدب الطلبات التي تستنزف طاقتك أو تتعارض مع احتياجاتك الخاصة.',
          'عبر عن آرائك الخاصة: في المجموعات، شارك وجهة نظرك بلطف، حتى لو كانت تختلف عن الآخرين.',
          'خصّص وقتًا لنفسك: أعد شحن بطاريتك العاطفية بالأنشطة التي تستمتع بها بنفسك.',
        ],
      },
    },
  },
  // Fix: Added missing Arabic language data structure
  [Language.AR]: {
    testName: 'اختبار الشخصية',
    ui: {
      backToMainMenu: 'القائمة الرئيسية',
      backToMenu: 'العودة للقائمة',
      share: 'مشاركة نتيجتي',
      endQuote: '“أنت لست ما يحدث لك — أنت ما تختار أن تصبح.”',
      questionPrefix: 'س',
      psychologicalInsightTitle: 'نظرة نفسية',
      selfGrowthTitle: 'نصائح للنمو الذاتي',
      sharingResult: 'تتم مشاركة نتيجتك:',
      shareTitle: "نتيجتي في 'اختبار الشخصية'",
      shareText: "لقد حصلت على '{profileTitle}'! اكتشف ملفك الشخصي.",
      clipboardSuccess: 'تم نسخ الرابط!',
      clipboardError: 'تعذر نسخ الرابط.',
      calculating: 'جارٍ تحليل ملفك الشخصي...',
      sharing: 'جارٍ المشاركة...',
      next: 'التالي',
      previous: 'السابق',
      completionsSuffix: 'مستخدم',
      returningToMenu: 'جارٍ العودة إلى القائمة الرئيسية...',
      todaysInsightTitle: "حكمة اليوم",
      personalizedInsightTitle: "حكمة خاصة بـ {resultTitle}",
      noResultInsightTitle: "رحلتك تبدأ",
      resumeTest: "استئناف",
      // App Slogan
      appSlogan: 'اكتشف نفسك.',
      viewAnalytics: "التحليلات",
      analyticsTitle: "📊 تحليلات التقدم",
      testsTakenTitle: "الاختبارات المُنجَزة",
      resultPatternsTitle: "أنماط النتائج",
      noData: "لا توجد بيانات بعد. أكمل اختبارًا لرؤية تحليلاتك!",
      noResultData: "أكمل الاختبارات لرؤية أنماط نتائجك.",
      daysPassed: "أيام مضت",
      daysRemaining: "أيام متبقية",
      myProgressTitle: "تقدمي",
      viewProfile: "ملفي الشخصي",
      profileTitle: "ملفي الشخصي",
      myBadges: "شاراتي",
      badgeUnlocked: "تم فتح شارة!",
      locked: "مغلق",
      close: "رائع!",
      lastInsightTitle: "آخر حكمة",
      currentStreak: "أيام متتالية",
      streakDays: "أيام",
      noStreak: "ابدأ سلسلة نجاحك اليومية.",
      viewJournal: "يومياتي",
      journalTitle: "يومياتي",
      journalPlaceholder: "كيف تشعر اليوم؟ ما الذي يدور في ذهنك؟",
      journalSubmit: "دوّن",
      journalPromptTitle: "سؤال اليوم",
      // New Achievements Page Strings
      viewAchievements: "الإنجازات",
      achievementsTitle: "🏅 إنجازاتك",
      achievementsSubtitle: "اكتشف الشارات التي حصلت عليها واستمر في التقدم.",
      achievementsProgress: "مستوى تقدمك:",
      badgeUnlockedToast: "🎉 تهانينا! لقد حصلت على شارة جديدة - اكتشفها في صفحة الإنجازات.",
      // New Daily Engagement Strings
      viewBreathingExercise: "تنفس واعي",
      wordOfTheDayTitle: "مصطلح اليوم النفسي",
      insightResonates: "تلامسني",
      insightNotToday: "لا تناسبني اليوم",
      insightThanks: "شكرًا لمشاركتك.",
      breathingTitle: "دقيقة هدوء",
      breathingStart: "ابدأ",
      breathingInhale: "شهيق...",
      breathingHold: "احبس",
      breathingExhale: "زفير...",
      breathingComplete: "أحسنت.",
      breathingClose: "إغلاق",
      // New Daily Cognitive Challenge strings
      viewCognitiveChallenge: "التحدي المعرفي اليومي",
      cognitiveChallengeTitle: "التحدي المعرفي اليومي",
      cognitiveChallengeSubtitle: "اشحذ عقلك مع لغز اليوم.",
      categoryLabel: "الفئة",
      showHint: "إظهار تلميح",
      correctAnswer: "صحيح!",
      incorrectAnswer: "ليس تمامًا!",
      explanationLabel: "الشرح",
      // New Engagement Feature Strings
      todaysCheckInTitle: "تسجيل الحضور اليومي",
      mindfulMomentTask: "لحظة تأمل",
      dailyReflectionTask: "تفكير يومي",
      mentalSparkTask: "تحدي العقل",
      checkInComplete: "اكتمل تسجيل حضورك! استمر في التقدم.",
      viewYourJourney: "رحلتي",
    },
    questions: [
      {
        id: 1,
        question: 'عند بدء مشروع جديد، ما هو دافعك الأول؟',
        options: [
          { text: 'تخيل كل الإمكانيات الإبداعية.', profile: ProfileType.DREAMER },
          { text: 'إنشاء خطة وجدول زمني مفصل.', profile: ProfileType.THINKER },
          { text: 'القفز مباشرة والبدء في بناء شيء ما.', profile: ProfileType.DOER },
          { text: 'التفكير في كيفية إفادة المشروع للآخرين.', profile: ProfileType.HEALER },
        ],
        source: 'المصدر: نموذج الشخصية الخمسة الكبار (الانفتاح)، كوستا وماكري (1992)',
      },
      {
        id: 2,
        question: 'كيف تتعامل عادة مع التوتر؟',
        options: [
          { text: 'أهرب إلى خيالي أو كتاب جيد.', profile: ProfileType.DREAMER },
          { text: 'أحلل مصدر التوتر لإيجاد حل.', profile: ProfileType.THINKER },
          { text: 'أمارس نشاطًا بدنيًا مثل الجري أو التمرين.', profile: ProfileType.DOER },
          { text: 'أتحدث مع صديق مقرب أو فرد من العائلة.', profile: ProfileType.HEALER },
        ],
        source: 'المصدر: دانيال جولمان، "الذكاء العاطفي" (1995)',
      },
      {
        id: 3,
        question: 'صديق لك منزعج. رد فعلك الأول هو:',
        options: [
          { text: 'مساعدته على رؤية الموقف من منظور مختلف وأكثر تفاؤلاً.', profile: ProfileType.DREAMER },
          { text: 'تقديم نصيحة منطقية للمساعدة في حل مشكلته.', profile: ProfileType.THINKER },
          { text: 'إلهاؤه بنشاط ممتع لإسعاده.', profile: ProfileType.DOER },
          { text: 'الاستماع بهدوء وتقديم وجود مريح.', profile: ProfileType.HEALER },
        ],
        source: 'المصدر: دانيال جولمان، "الذكاء العاطفي" (1995)',
      },
      {
        id: 4,
        question: 'ما الذي يحفزك أكثر في حياتك المهنية؟',
        options: [
          { text: 'حرية الابتكار والتعبير عن إبداعي.', profile: ProfileType.DREAMER },
          { text: 'إتقان حرفتي وأن أصبح خبيرًا.', profile: ProfileType.THINKER },
          { text: 'تحقيق نتائج قابلة للقياس والوصول إلى الأهداف.', profile: ProfileType.DOER },
          { text: 'إحداث تأثير إيجابي على مجتمعي أو فريقي.', profile: ProfileType.HEALER },
        ],
        source: 'المصدر: ديسي وريان، "نظرية تقرير المصير" (1985)',
      },
      {
        id: 5,
        question: 'في مناقشة جماعية، من المرجح أن تكون الشخص الذي:',
        options: [
          { text: 'يقترح أفكارًا غير تقليدية و "خارج الصندوق".', profile: ProfileType.DREAMER },
          { text: 'يطرح أسئلة توضيحية ويشير إلى المغالطات المنطقية.', profile: ProfileType.THINKER },
          { text: 'يتولى المسؤولية ويحدد بنود العمل للمضي قدمًا.', profile: ProfileType.DOER },
          { text: 'يضمن أن يشعر الجميع بأنهم مسموعون ومحترمون.', profile: ProfileType.HEALER },
        ],
        source: 'المصدر: بيلبين، "أدوار الفريق في العمل" (1993)',
      },
        {
        id: 6,
        question: "عند مواجهة تحدٍ شخصي صعب، تعتمد على:",
        options: [
            { text: "حدسك ورؤيتك الداخلية لإرشادك.", profile: ProfileType.DREAMER },
            { text: "عقلك العقلاني لتحليل المشكلة.", profile: ProfileType.THINKER },
            { text: "مرونتك وعزيمتك للمضي قدمًا.", profile: ProfileType.DOER },
            { text: "نظام الدعم الخاص بك وعلاقاتك العاطفية.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: كارل يونغ، "الأنماط النفسية" (1921)',
        },
        {
        id: 7,
        question: "عطلة نهاية أسبوع مثالية بالنسبة لك تتضمن:",
        options: [
            { text: "زيارة معرض فني أو استكشاف مكان جديد وملهم.", profile: ProfileType.DREAMER },
            { text: "قراءة كتاب غير خيالي أو تعلم مهارة جديدة.", profile: ProfileType.THINKER },
            { text: "المشي لمسافات طويلة، أو ممارسة الرياضة، أو العمل في مشروع تحسين منزلي.", profile: ProfileType.DOER },
            { text: "قضاء وقت ممتع مع الأحباء أو التطوع.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: تشيكسينتميهالي، "التدفق" (1990)',
        },
        {
        id: 8,
        question: "كيف تعرف النجاح؟",
        options: [
            { text: "عيش حياة صادقة مع رؤيتي الفريدة.", profile: ProfileType.DREAMER },
            { text: "السعي المستمر للمعرفة والفهم.", profile: ProfileType.THINKER },
            { text: "تحقيق الأهداف الطموحة.", profile: ProfileType.DOER },
            { text: "عمق ونوعية علاقاتي.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: روزنبرغ، "المجتمع وصورة الذات المراهقة" (1965)',
        },
        {
        id: 9,
        question: "عندما تتعلم شيئًا جديدًا، تفضل:",
        options: [
            { text: "المفاهيم المجردة والنماذج النظرية.", profile: ProfileType.DREAMER },
            { text: "الدروس المنظمة مع حقائق وبيانات واضحة.", profile: ProfileType.THINKER },
            { text: "الممارسة العملية والتجربة والخطأ.", profile: ProfileType.DOER },
            { text: "التعلم التعاوني مع مجموعة أو مرشد.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: كولب، "التعلم التجريبي" (1984)',
        },
        {
        id: 10,
        question: "نهجك في التعامل مع الصراع هو:",
        options: [
            { text: "إيجاد حل وسط إبداعي يرضي خيال الجميع.", profile: ProfileType.DREAMER },
            { text: "التوسط بمنطق موضوعي وإيجاد حل عادل.", profile: ProfileType.THINKER },
            { text: "معالجته بشكل مباشر وحاسم لحله بسرعة.", profile: ProfileType.DOER },
            { text: "تعزيز التفاهم والتعاطف بين جميع الأطراف.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: جون بولبي، "التعلق والفقدان" (1969)',
        },
        {
        id: 11,
        question: "ما نوع البيئة التي تساعدك على الازدهار؟",
        options: [
            { text: "مساحة غير منظمة تسمح بالعفوية والإبداع.", profile: ProfileType.DREAMER },
            { text: "بيئة منظمة وهادئة ويمكن التنبؤ بها.", profile: ProfileType.THINKER },
            { text: "بيئة ديناميكية وسريعة الخطى مع تحديات مستمرة.", profile: ProfileType.DOER },
            { text: "جو متناغم وداعم.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: نموذج الشخصية الخمسة الكبار (الضمير)، كوستا وماكري (1992)',
        },
        {
        id: 12,
        question: "تتلقى نقدًا غير متوقع. كيف تتفاعل داخليًا؟",
        options: [
            { text: "أتساءل عما إذا كان يحد من حريتي الإبداعية.", profile: ProfileType.DREAMER },
            { text: "أقوم بتقييم صحته ومنطقه قبل قبوله أو رفضه.", profile: ProfileType.THINKER },
            { text: "أشعر باندفاع من الحافز لإثبات أنهم مخطئون.", profile: ProfileType.DOER },
            { text: "أشعر بالقلق بشأن تأثيره على علاقتي بالشخص.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: كارول دويك، "العقلية: علم النفس الجديد للنجاح" (2006)',
        },
        {
        id: 13,
        question: "عندما تفكر في المستقبل، فأنت أكثر حماسًا بـ:",
        options: [
            { text: "الإمكانيات التي لا نهاية لها والتجارب الجديدة المقبلة.", profile: ProfileType.DREAMER },
            { text: "المعرفة والاكتشافات الجديدة التي تنتظر.", profile: ProfileType.THINKER },
            { text: "الأهداف التي سأحققها والإنجازات التي سأصل إليها.", profile: ProfileType.DOER },
            { text: "العلاقات التي سأبنيها وأرعاها.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: سليجمان، "التفاؤل المكتسب" (1990)',
        },
        {
        id: 14,
        question: "ما هي علاقتك بالقواعد؟",
        options: [
            { text: "غالبًا ما تكون مقيدة للغاية للابتكار الحقيقي.", profile: ProfileType.DREAMER },
            { text: "توفر الهيكل والنظام اللازمين.", profile: ProfileType.THINKER },
            { text: "هي مبادئ توجيهية، ولكن يمكن تعديلها لتحقيق هدف.", profile: ProfileType.DOER },
            { text: "هي مهمة لضمان العدالة والوئام.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: نموذج الشخصية الخمسة الكبار (القبول)، كوستا وماكري (1992)',
        },
        {
        id: 15,
        question: "تشعر بالرضا الأكبر عندما:",
        options: [
            { text: "أخلق شيئًا جديدًا وأصليًا تمامًا.", profile: ProfileType.DREAMER },
            { text: "أحل لغزًا معقدًا أو أفهم مفهومًا صعبًا.", profile: ProfileType.THINKER },
            { text: "أتغلب على عقبة كبيرة بجهد محض.", profile: ProfileType.DOER },
            { text: "أساعد شخصًا ما على الشعور بأنه مفهوم ومهتم به.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: رايف، "الرفاهية النفسية" (1989)',
        },
        {
        id: 16,
        question: "إذا كنت شخصية في قصة، فستكون:",
        options: [
            { text: "صاحب الرؤية الغامض أو الفنان غريب الأطوار.", profile: ProfileType.DREAMER },
            { text: "العالم الحكيم أو المحقق اللامع.", profile: ProfileType.THINKER },
            { text: "البطل الشجاع أو الرائد المصمم.", profile: ProfileType.DOER },
            { text: "الرفيق المخلص أو الوصي الراعي.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: كارل يونغ، "النماذج الأولية واللاوعي الجمعي" (1959)',
        },
        {
        id: 17,
        question: "تعتمد عملية اتخاذ القرار لديك بشكل أساسي على:",
        options: [
            { text: "شعوري الداخلي وما أشعر أنه صحيح في الوقت الحالي.", profile: ProfileType.DREAMER },
            { text: "تحليل دقيق للبيانات والنتائج المحتملة.", profile: ProfileType.THINKER },
            { text: "ما سيؤدي إلى النتيجة الأكثر فعالية ومباشرة.", profile: ProfileType.DOER },
            { text: "ما سيحافظ على الانسجام ويفيد المجموعة.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: كانيمان، "التفكير، السريع والبطيء" (2011)',
        },
        {
        id: 18,
        question: "عند التفكير في ماضيك، تميل إلى التركيز على:",
        options: [
            { text: "لحظات الإلهام والدهشة.", profile: ProfileType.DREAMER },
            { text: "الدروس المستفادة والمعرفة المكتسبة.", profile: ProfileType.THINKER },
            { text: "التحديات التي تم التغلب عليها والانتصارات التي تم تحقيقها.", profile: ProfileType.DOER },
            { text: "الذكريات العزيزة مع الأشخاص الذين تحبهم.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: بينيبيكر، "الكتابة التعبيرية: كلمات تشفي" (1997)',
        },
        {
        id: 19,
        question: "ما هي أعظم نقاط قوتك؟",
        options: [
            { text: "خيالي.", profile: ProfileType.DREAMER },
            { text: "عقلي.", profile: ProfileType.THINKER },
            { text: "دافعي.", profile: ProfileType.DOER },
            { text: "تعاطفي.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: بيترسون وسليجمان، "نقاط القوة والفضائل الشخصية" (2004)',
        },
        {
        id: 20,
        question: "يأتي الناس إليك للمساعدة في:",
        options: [
            { text: "العصف الذهني لإيجاد حلول إبداعية لمشاكلهم.", profile: ProfileType.DREAMER },
            { text: "الحصول على رأي موضوعي ومدروس جيدًا.", profile: ProfileType.THINKER },
            { text: "إنشاء خطة عمل والحصول على الحافز.", profile: ProfileType.DOER },
            { text: "أذن صاغية ودعم عاطفي.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: جوفمان، "عرض الذات في الحياة اليومية" (1956)',
        },
        {
        id: 21,
        question: "ماذا تعني لك 'الحرية'؟",
        options: [
            { text: "حرية استكشاف أفكاري وأحلامي بلا حدود.", profile: ProfileType.DREAMER },
            { text: "الحرية من الجهل التي تأتي مع المعرفة.", profile: ProfileType.THINKER },
            { text: "حرية التصرف وتشكيل مصيري.", profile: ProfileType.DOER },
            { text: "حرية التواصل الأصيل مع الآخرين.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: روكيتش، "طبيعة القيم الإنسانية" (1973)',
        },
        {
        id: 22,
        question: "يوم مثالي ينتهي بـ:",
        options: [
            { text: "تدوين أفكاري ومشاعري.", profile: ProfileType.DREAMER },
            { text: "الشعور بالرضا لأنني تعلمت شيئًا جديدًا.", profile: ProfileType.THINKER },
            { text: "شعور بالإنجاز من عملي اليومي.", profile: ProfileType.DOER },
            { text: "محادثة عميقة مع شخص أهتم به.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: جيمس كلير، "العادات الذرية" (2018)',
        },
        {
        id: 23,
        question: "يُطلب منك وصف نفسك في كلمة واحدة. تختار:",
        options: [
            { text: "صاحب رؤية", profile: ProfileType.DREAMER },
            { text: "تحليلي", profile: ProfileType.THINKER },
            { text: "طموح", profile: ProfileType.DOER },
            { text: "عطوف", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: روجرز، "في أن تصبح شخصًا" (1961)',
        },
        {
        id: 24,
        question: "عند التعاون في فريق، دورك المثالي هو:",
        options: [
            { text: "توليد المفهوم الأولي والرؤية.", profile: ProfileType.DREAMER },
            { text: "البحث وتحليل المعلومات لضمان الدقة.", profile: ProfileType.THINKER },
            { text: "تنظيم المهام والحفاظ على مسار الفريق.", profile: ProfileType.DOER },
            { text: "التوسط في الخلافات وتعزيز روح الفريق الإيجابية.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: توكمان، "مراحل تطور المجموعة" (1965)',
      },
      {
        id: 25,
        question: "ما هو الأكثر أهمية لحياة سعيدة؟",
        options: [
          { text: "الهدف والتعبير عن الذات.", profile: ProfileType.DREAMER },
          { text: "الوضوح والفهم.", profile: ProfileType.THINKER },
          { text: "الإنجاز والتقدم.", profile: ProfileType.DOER },
          { text: "الاتصال والانتماء.", profile: ProfileType.HEALER }
        ],
        source: 'المصدر: سليجمان، "الازدهار: فهم جديد ورؤيوي للسعادة" (2011)',
      },
      {
        id: 26,
        question: "عندما تواجه مستقبلاً غامضًا، خطوتك الأولى هي:",
        options: [
          { text: "تخيل عدة نتائج محتملة ومثيرة.", profile: ProfileType.DREAMER },
          { text: "جمع أكبر قدر ممكن من المعلومات للتنبؤ بالسيناريو الأكثر احتمالاً.", profile: ProfileType.THINKER },
          { text: "اتخاذ إجراء صغير وحاسم لمعرفة ما سيحدث.", profile: ProfileType.DOER },
          { text: "مناقشة الاحتمالات ومشاعرك مع الأشخاص الذين تثق بهم.", profile: ProfileType.HEALER }
        ],
        source: "المصدر: تحمل الغموض، فرينكل-برونزويك (1949)"
      },
      {
        id: 27,
        question: "تشعر بالسعادة العميقة في لحظة من:",
        options: [
          { text: "الإلهام الإبداعي المفاجئ أو الجمال المذهل.", profile: ProfileType.DREAMER },
          { text: "الفهم العميق، عندما تتضح فكرة معقدة أخيرًا.", profile: ProfileType.THINKER },
          { text: "الانتصار، بعد إكمال مهمة صعبة بنجاح.", profile: ProfileType.DOER },
          { text: "التواصل الحقيقي، والشعور بالانسجام التام مع شخص آخر.", profile: ProfileType.HEALER }
        ],
        source: "المصدر: الرفاهية اليودايمونية مقابل الهدونية، ريان وديسي (2001)"
      },
      {
        id: 28,
        question: "كيف تتعامل داخليًا مع فشل كبير؟",
        options: [
          { text: "أراه كتحول في القصة، درس لفصل قادم.", profile: ProfileType.DREAMER },
          { text: "أحلل بشكل منهجي ما حدث بشكل خاطئ لمنعه من الحدوث مرة أخرى.", profile: ProfileType.THINKER },
          { text: "أشعر بوخزة قصيرة، ثم أركز فورًا على الخطوة العملية التالية أو المحاولة التالية.", profile: ProfileType.DOER },
          { text: "آخذ وقتًا لأكون لطيفًا مع نفسي وأعالج خيبة الأمل بالدعم.", profile: ProfileType.HEALER }
        ],
        source: "المصدر: كارول دويك، 'العقلية: علم النفس الجديد للنجاح' (2006) حول عقلية النمو"
      },
      {
        id: 29,
        question: "إذا كان بإمكانك أن تترك شيئًا واحدًا خلفك، فماذا سيكون؟",
        options: [
          { text: "فكرة ملهمة تغير طريقة رؤية الناس للعالم.", profile: ProfileType.DREAMER },
          { text: "نظام منطقي واضح أو مجموعة من المعارف تساعد الآخرين على الفهم.", profile: ProfileType.THINKER },
          { text: "شركة ملموسة، أو مبنى، أو مشروع قمت بإنشائه.", profile: ProfileType.DOER },
          { text: "إرث من العلاقات القوية ومجتمع تم رعايته.", profile: ProfileType.HEALER }
        ],
        source: "المصدر: إريك إريكسون، 'مراحل التطور النفسي الاجتماعي' (الإنتاجية مقابل الركود)"
      },
      {
        id: 30,
        question: "صديق لك عالق في روتين. طريقتك المفضلة للمساعدة هي:",
        options: [
          { text: "مساعدتهم في العصف الذهني لاحتمالات جديدة وجريئة لحياتهم.", profile: ProfileType.DREAMER },
          { text: "عرض إيجابيات وسلبيات وضعهم لإيجاد مسار منطقي للمضي قدمًا.", profile: ProfileType.THINKER },
          { text: "مساعدتهم في مهمة عملية، مثل تحديث سيرتهم الذاتية أو تنظيف مساحتهم.", profile: ProfileType.DOER },
          { text: "مجرد التواجد معهم، وتقديم الراحة وأذن صاغية غير قضائية.", profile: ProfileType.HEALER }
        ],
        source: "المصدر: نظرية الدعم الاجتماعي (الدعم الفعال مقابل الدعم العاطفي)"
      }
    ],
    results: {
      [ProfileType.DREAMER]: {
        title: 'صاحب الرؤية (مبدع + حدسي)',
        poetic_explanation: 'أنت رسام الاحتمالات، وعقلك لوحة فنية يمتزج فيها الحدس والإبداع بسلاسة. ترى العالم بألوان زاهية من المعنى والرمزية، وتجد العجب في كل ما هو يومي. تسترشد ببوصلة داخلية، ويُنار طريقك ببئر عميق من الشعور والخيال.',
        psychological_insight: 'يشير هذا الملف الشخصي إلى ارتباط قوي بالتفكير المجرد والعمق العاطفي. تكمن نقاط قوتك في أفكارك المبتكرة وطبيعتك المتعاطفة. ومع ذلك، قد تجد أحيانًا صعوبة في التركيز على التفاصيل العملية أو الحقائق الواقعية. يكمن نموك في إيجاد طرق لتحقيق رؤاك دون أن تفقد شرارتك الخيالية.',
        advice: [
          'رسّخ رؤاك: لتحقيق أفكارك، اربطها بخطوة أولى واحدة وملموسة يمكنك اتخاذها.',
          'احمِ طاقتك: تعاطفك هبة. ضع حدودًا لتجنب امتصاص ضغوط الآخرين، وحافظ على مساحتك الخيالية.',
          'تعاون مع الواقعيين: شارك مع "المُنجِز" أو "المفكر" الذي يمكنه مساعدتك في هيكلة وتنفيذ مفاهيمك الرائعة.',
          'عش الحاضر: مارس اليقظة الذهنية من خلال التركيز على حواسك لبضع دقائق كل يوم للبقاء متجذرًا في الواقع.'
        ],
      },
      [ProfileType.THINKER]: {
        title: 'المفكر (تحليلي + هادئ)',
        poetic_explanation: 'أنت مهندس المنطق، تبني عالمك على أساس من العقل والوضوح. عقلك مساحة هادئة ومنظمة حيث تكون المشاكل ألغازًا يجب حلها والمعرفة هي الكنز النهائي. أنت تبحر في الحياة بيد ثابتة، وتقدر الحقيقة والدقة فوق كل شيء.',
        psychological_insight: 'هذا يعني أنك تتفوق في التحليل الموضوعي والتخطيط الاستراتيجي. هدوؤك هو مصدر استقرار للآخرين. تكمن قوتك في قدرتك على رؤية الأنماط وحل المشكلات المعقدة والبقاء هادئًا تحت الضغط. ومع ذلك، قد تكافح أحيانًا مع الجوانب الفوضوية والعاطفية للحياة أو تجد صعوبة في اتخاذ القرارات عندما تكون البيانات غير كاملة. مسار نموك يتضمن تعلم الثقة بحدسك والتواصل مع مشاعرك الخاصة.',
        advice: [
          'ثق بحدسك أحيانًا: بالنسبة للقرارات الصغيرة، جرب المضي قدمًا بحدسك لتمرين تلك العضلة.',
          'مارس "المفردات العاطفية": حدد وسمّي مشاعرك بنشاط لفهمها بشكل أفضل.',
          'خصّص وقتًا للراحة: عقلك يعمل دائمًا؛ خصص وقتًا للراحة غير الفكرية، مثل المشي في الطبيعة.',
          'قدّر وجهات النظر المختلفة: استمع بنشاط إلى "أصحاب الرؤى" و "المُحتوين" لاكتساب رؤية أكثر شمولية.',
        ],
      },
      [ProfileType.DOER]: {
        title: 'المُنجِز (عملي + واثق)',
        poetic_explanation: 'أنت قوة من قوى الطبيعة، تترجم النية إلى عمل بزخم لا يمكن إيقافه. طاقتك واضحة، وتزدهر في التحديات والنتائج الملموسة. بالنسبة لك، العالم هو منظر طبيعي من الأهداف التي يجب تحقيقها والجبال التي يجب تسلقها. أنت تقود بثقة وتلهم الآخرين من خلال تصميمك المطلق.',
        psychological_insight: 'هذا يعني أنك قائد بالفطرة ومحقق للإنجازات، مدفوعًا بالرغبة في تحقيق الأشياء. ثقتك معدية، وتتفوق في تحويل الخطط إلى واقع. التحدي بالنسبة لك هو تجنب الإرهاق من خلال إدراك أن الراحة منتجة وأن الضعف ليس ضعفًا. رحلتك تتضمن تعلم الاحتفال بالعملية، وليس فقط النصر، والاستماع بنشاط كما تتصرف.',
        advice: [
          'مارس التوقفات الاستراتيجية: قبل القفز إلى العمل، خذ خمس دقائق للتفكير في "لماذا" وراء هدفك.',
          'احتفل بالعملية، وليس فقط الفوز: اعترف بالخطوات الصغيرة والجهد على طول الطريق لتجنب الإرهاق.',
          'استمع بنشاط: في المحادثات، ابذل جهدًا واعيًا للاستماع دون التخطيط لخطوتك التالية.',
          'خصّص وقتًا غير منظم: خصص وقتًا في تقويمك بدون جدول أعمال، مما يسمح بالراحة والعفوية.',
        ],
      },
      [ProfileType.HEALER]: {
        title: 'المُحتوي (عطوف + راسخ)',
        poetic_explanation: 'أنت قلب عالمك، مرساة ثابتة من التعاطف والتفاهم. تمتلك القدرة النادرة على الاستماع ليس فقط للكلمات، ولكن للمشاعر التي تكمن وراءها. تكمن قوتك في الاتصال، في رعاية العلاقات، وفي خلق مساحات يشعر فيها الجميع بالأمان والتقدير. أنت الصمغ الذي يجمع المجتمعات معًا.',
        psychological_insight: 'هذا يعني أن لديك درجة عالية من الذكاء العاطفي، خاصة في التعاطف والوعي الاجتماعي. هديتك هي قدرتك على خلق الانسجام وجعل الآخرين يشعرون بأنهم مرئيون ومفهومون. التحدي الأساسي في طريقك هو أن تمد هذا التعاطف نفسه لنفسك. لأنك متناغم جدًا مع احتياجات الآخرين، قد تهمل أحيانًا احتياجاتك الخاصة، أو تتجنب الصراع للحفاظ على السلام. يكمن نموك في وضع حدود صحية وتقدير احتياجاتك الخاصة بقدر ما تقدر احتياجات الآخرين.',
        advice: [
          'أعط الأولوية للتعاطف مع الذات: عامل نفسك بنفس اللطف والتفهم الذي تقدمه للآخرين.',
          'تدرب على قول "لا": ارفض بأدب الطلبات التي تستنزف طاقتك أو تتعارض مع احتياجاتك الخاصة.',
          'عبر عن آرائك الخاصة: في المجموعات، شارك وجهة نظرك بلطف، حتى لو كانت تختلف عن الآخرين.',
          'خصّص وقتًا لنفسك: أعد شحن بطاريتك العاطفية بالأنشطة التي تستمتع بها بنفسك.',
        ],
      },
    },
  },
};