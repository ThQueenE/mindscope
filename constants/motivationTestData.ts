import { MotivationTestDataStructure, Language, MotivationType } from '../types';

export const motivationTestData: MotivationTestDataStructure = {
  [Language.EN]: {
    testName: 'Hidden Motivation Finder',
    testDescription: 'What truly drives you to act?',
    ui: {
      questionPrefix: 'Q',
      calculating: 'Discovering Your Drives...',
      backToMainMenu: 'Main Menu',
      backToMenu: 'Back to Menu',
      getPlan: "Start Growth Journey",
      dominantMotivesTitle: 'Your Dominant Motivation',
      recommendationsTitle: 'Recommendations for You',
      share: 'Share My Result',
      shareTitle: "My 'Hidden Motivation' Result",
      shareText: "My dominant motivation is '{resultLabel}'! Find out yours.",
      clipboardSuccess: 'Link copied to clipboard!',
      clipboardError: 'Could not copy link.',
      sharing: 'Sharing...',
      next: 'Next',
      previous: 'Previous',
      returningToMenu: 'Returning to main menu...',
      resumeTest: "Resume",
    },
    questions: [
        {
            id: 1,
            question: "When choosing a new job, which is more appealing?",
            options: [
                { text: "A role with clear, predictable tasks and a stable company.", motivation: MotivationType.SECURITY },
                { text: "A flexible role where I can set my own hours and methods.", motivation: MotivationType.AUTONOMY },
                { text: "A competitive role with high potential for promotion.", motivation: MotivationType.STATUS },
                { text: "A role where I can build strong friendships with my team.", motivation: MotivationType.RELATEDNESS }
            ],
            source: "Source: Self-Determination Theory (Autonomy) vs. Maslow's Hierarchy (Security)"
        },
        {
            id: 2,
            question: "I feel most satisfied at work when I...",
            options: [
                { text: "Master a difficult skill I've been working on for a long time.", motivation: MotivationType.COMPETENCE },
                { text: "Get to work on a wide variety of different projects and tasks.", motivation: MotivationType.NOVELTY },
                { text: "Receive a public award or recognition for my contributions.", motivation: MotivationType.STATUS },
                { text: "Successfully help a colleague solve a problem.", motivation: MotivationType.RELATEDNESS }
            ],
            source: "Source: Self-Determination Theory (Competence) vs. Trait Theory (Novelty)"
        },
        {
            id: 3,
            question: "A perfect weekend involves...",
            options: [
                { text: "Attending an exclusive event where I can network with important people.", motivation: MotivationType.STATUS },
                { text: "Having a deep, meaningful conversation with a close friend.", motivation: MotivationType.RELATEDNESS },
                { text: "Having the freedom to do whatever I want, without a schedule.", motivation: MotivationType.AUTONOMY },
                { text: "Learning a new and exciting skill, like cooking or coding.", motivation: MotivationType.NOVELTY }
            ],
            source: "Source: Self-Determination Theory (Relatedness) vs. Sociometer Theory (Status)"
        },
        {
            id: 4,
            question: "I'm more likely to take a risk if...",
            options: [
                { text: "I've carefully analyzed all the data and have a solid backup plan.", motivation: MotivationType.SECURITY },
                { text: "I feel confident that I have the skills to handle any challenge.", motivation: MotivationType.COMPETENCE },
                { text: "It offers a chance to try something completely new and different.", motivation: MotivationType.NOVELTY },
                { text: "I have the full support and encouragement of my team.", motivation: MotivationType.RELATEDNESS }
            ],
            source: "Source: Maslow's Hierarchy (Security) vs. Self-Efficacy (Competence)"
        },
        {
            id: 5,
            question: "What kind of travel do you prefer?",
            options: [
                { text: "A spontaneous trip to a place I've never been before.", motivation: MotivationType.NOVELTY },
                { text: "A solo trip where I am in complete control of the itinerary.", motivation: MotivationType.AUTONOMY },
                { text: "A well-planned trip to a safe and comfortable resort.", motivation: MotivationType.SECURITY },
                { text: "A trip to a luxury destination known for its prestige.", motivation: MotivationType.STATUS }
            ],
            source: "Source: Trait Theory (Novelty) vs. Self-Determination Theory (Autonomy)"
        },
        {
            id: 6,
            question: "Financial success is important to me because it provides...",
            options: [
                { text: "The respect and admiration of others.", motivation: MotivationType.STATUS },
                { text: "A sense of safety and predictability for the future.", motivation: MotivationType.SECURITY },
                { text: "The freedom to live life on my own terms.", motivation: MotivationType.AUTONOMY },
                { text: "The ability to support and care for my loved ones.", motivation: MotivationType.RELATEDNESS }
            ],
            source: "Source: Evolutionary Psychology (Status) vs. Maslow's Hierarchy (Security)"
        },
        {
            id: 7,
            question: "Which compliment would mean the most to you?",
            options: [
                { text: "'You are brilliant at what you do.'", motivation: MotivationType.COMPETENCE },
                { text: "'You are such a kind and supportive person.'", motivation: MotivationType.RELATEDNESS },
                { text: "'You are incredibly adventurous.'", motivation: MotivationType.NOVELTY },
                { text: "'You are very influential.'", motivation: MotivationType.STATUS }
            ],
            source: "Source: Self-Determination Theory (Competence vs. Relatedness)"
        },
        {
            id: 8,
            question: "I prefer a work environment that is...",
            options: [
                { text: "Highly structured with clear hierarchies and titles.", motivation: MotivationType.STATUS },
                { text: "A flat organization where I can work independently.", motivation: MotivationType.AUTONOMY },
                { text: "A stable and long-term company with good benefits.", motivation: MotivationType.SECURITY },
                { text: "A place where I feel a strong sense of belonging with my coworkers.", motivation: MotivationType.RELATEDNESS }
            ],
            source: "Source: Self-Determination Theory (Autonomy) vs. Social Dominance Theory (Status)"
        },
        {
            id: 9,
            question: "When it comes to daily routines, I...",
            options: [
                { text: "Prefer a predictable schedule that I can rely on.", motivation: MotivationType.SECURITY },
                { text: "Crave variety and dislike doing the same thing every day.", motivation: MotivationType.NOVELTY },
                { text: "Need to feel like I'm improving and getting better at them.", motivation: MotivationType.COMPETENCE },
                { text: "Enjoy routines that involve interacting with people I like.", motivation: MotivationType.RELATEDNESS }
            ],
            source: "Source: Trait Theory (Security) vs. Trait Theory (Novelty)"
        },
        {
            id: 10,
            question: "When making a major life decision, I am most likely to...",
            options: [
                { text: "Consult with my closest friends and family for their input.", motivation: MotivationType.RELATEDNESS },
                { text: "Make the decision that aligns with my own personal values, regardless of others' opinions.", motivation: MotivationType.AUTONOMY },
                { text: "Choose the option that seems safest and has the least risk.", motivation: MotivationType.SECURITY },
                { text: "Choose the option that will improve my skills and expertise.", motivation: MotivationType.COMPETENCE }
            ],
            source: "Source: Self-Determination Theory (Relatedness vs. Autonomy)"
        },
        {
            id: 11,
            question: "I feel most proud when...",
            options: [
                { text: "I solve a problem that no one else could figure out.", motivation: MotivationType.COMPETENCE },
                { text: "I am publicly recognized for a significant achievement.", motivation: MotivationType.STATUS },
                { text: "I successfully try something new and outside my comfort zone.", motivation: MotivationType.NOVELTY },
                { text: "I make a decision that is 100% my own.", motivation: MotivationType.AUTONOMY }
            ],
            source: "Source: Achievement Goal Theory (Mastery vs. Performance)"
        },
        {
            id: 12,
            question: "Which activity sounds more rejuvenating?",
            options: [
                { text: "Exploring a new city or trying an exotic food.", motivation: MotivationType.NOVELTY },
                { text: "Spending a relaxed evening with your inner circle of friends.", motivation: MotivationType.RELATEDNESS },
                { text: "Organizing your personal finances and creating a budget.", motivation: MotivationType.SECURITY },
                { text: "Perfecting a presentation for a high-stakes meeting.", motivation: MotivationType.COMPETENCE }
            ],
            source: "Source: Maslow's Hierarchy (Belonging) vs. Arousal Theory (Novelty)"
        },
        {
            id: 13,
            question: "Which aspect of a team project is most rewarding?",
            options: [
                { text: "Being recognized as the key contributor to the success.", motivation: MotivationType.STATUS },
                { text: "The camaraderie and shared sense of accomplishment with the team.", motivation: MotivationType.RELATEDNESS },
                { text: "Developing a new skill or deepening my expertise in an area.", motivation: MotivationType.COMPETENCE },
                { text: "Having the freedom to execute my part of the project as I see fit.", motivation: MotivationType.AUTONOMY }
            ],
            source: "Source: Tuckman's Stages of Group Development"
        },
        {
            id: 14,
            question: "When you face a major life change, what is your primary need?",
            options: [
                { text: "A clear roadmap and a sense of predictability.", motivation: MotivationType.SECURITY },
                { text: "The opportunity to learn and adapt to the new circumstances.", motivation: MotivationType.NOVELTY },
                { text: "Support and connection from people who understand.", motivation: MotivationType.RELATEDNESS },
                { text: "To feel in control of the decisions that affect me.", motivation: MotivationType.AUTONOMY }
            ],
            source: "Source: Cognitive Appraisal Theory, Lazarus & Folkman"
        },
        {
            id: 15,
            question: "What makes you feel most alive?",
            options: [
                { text: "Mastering a complex task or challenge.", motivation: MotivationType.COMPETENCE },
                { text: "Exploring a new place or idea for the first time.", motivation: MotivationType.NOVELTY },
                { text: "Achieving a position of leadership or influence.", motivation: MotivationType.STATUS },
                { text: "Feeling a deep connection and belonging with others.", motivation: MotivationType.RELATEDNESS }
            ],
            source: "Source: Eudaimonic vs. Hedonic Well-being, Ryan & Deci"
        },
        {
            id: 16,
            question: "If you received a surprise bonus, what would you most likely do with it?",
            options: [
                { text: "Invest it or put it into savings for long-term stability.", motivation: MotivationType.SECURITY },
                { text: "Spend it on a unique experience, like an impromptu trip.", motivation: MotivationType.NOVELTY },
                { text: "Use it to take a course or buy equipment to advance my skills.", motivation: MotivationType.COMPETENCE },
                { text: "Buy something that signals success and achievement.", motivation: MotivationType.STATUS }
            ],
            source: "Source: Prospect Theory, Kahneman & Tversky"
        },
        {
            id: 17,
            question: "What is a non-negotiable for you in life?",
            options: [
                { text: "Having the liberty to chart my own course.", motivation: MotivationType.AUTONOMY },
                { text: "Feeling safe and having a reliable support system.", motivation: MotivationType.SECURITY },
                { text: "Feeling like I'm making progress and growing my abilities.", motivation: MotivationType.COMPETENCE },
                { text: "Being a part of a community where I am valued.", motivation: MotivationType.RELATEDNESS }
            ],
            source: "Source: Basic Psychological Needs Theory (BPNT), a sub-theory of SDT"
        }
    ],
    results: {
      [MotivationType.AUTONOMY]: {
        label: "Autonomy",
        description: "You are driven by a need for independence, freedom, and control over your own life. You thrive when you can make your own choices, express your true self, and act in alignment with your personal values.",
        recommendations: [
          { recommendation: "Negotiate for more flexibility in your work, such as setting your own hours or having ownership over specific projects.", citation: "see Self-Determination Theory, Deci & Ryan" },
          { recommendation: "Start a personal project or hobby where you have complete creative control from start to finish.", citation: "Occupational psychology on job crafting" },
          { recommendation: "Practice making small, value-driven decisions daily, even if it's just choosing what to eat for lunch without outside influence.", citation: "Values clarification exercises in ACT" },
          { recommendation: "When feeling constrained, identify what is within your control vs. what is not. Focus your energy on your sphere of influence.", citation: "Based on Stoic philosophy & CBT" }
        ]
      },
      [MotivationType.COMPETENCE]: {
        label: "Competence",
        description: "You are driven by a desire to be effective, capable, and masterful in your endeavors. You gain satisfaction from learning, improving your skills, and overcoming challenges through your expertise.",
        recommendations: [
          { recommendation: "Set 'learning goals' not just 'performance goals.' Focus on the process of skill acquisition, not just the outcome.", citation: "see Achievement Goal Theory, Dweck" },
          { recommendation: "Seek constructive feedback regularly. Frame it as a tool for growth to accelerate your mastery of a subject.", citation: "Principles of 'Deliberate Practice', Ericsson" },
          { recommendation: "Break down a large skill you want to learn into smaller, manageable sub-skills. Celebrate the mastery of each small part.", citation: "Scaffolding in educational psychology" },
          { recommendation: "Mentor someone else in an area where you are already skilled. Teaching reinforces your own competence.", citation: "The 'Protégé Effect' in learning" }
        ]
      },
      [MotivationType.RELATEDNESS]: {
        label: "Relatedness",
        description: "You are driven by a need to connect with others, feel a sense of belonging, and have meaningful, caring relationships. You thrive in supportive, collaborative environments and value community.",
        recommendations: [
          { recommendation: "Schedule regular, dedicated time for deep conversations with friends and family, free from distractions.", citation: "see Maslow's Hierarchy, need for belonging" },
          { recommendation: "Join a group, club, or class based on a shared interest to build new connections in a low-pressure setting.", citation: "Social psychology on group formation" },
          { recommendation: "Practice active and empathetic listening. Ask open-ended questions to show genuine interest in others.", citation: "Interpersonal communication skills, Carl Rogers" },
          { recommendation: "Volunteer for a cause you care about. Working alongside others for a shared purpose is a powerful way to build bonds.", citation: "Research on prosocial behavior and well-being" }
        ]
      },
      [MotivationType.SECURITY]: {
        label: "Security",
        description: "You are driven by a need for safety, stability, and predictability. You are most comfortable when you have a clear plan, understand the risks, and feel that your future is secure and stable.",
        recommendations: [
          { recommendation: "Create structured routines and plans for your week. Predictability can lower anxiety and provide a sense of control.", citation: "see Maslow's Hierarchy, safety needs" },
          { recommendation: "Build a financial 'safety net,' such as an emergency fund. Tangible security can greatly increase psychological comfort.", citation: "Behavioral finance principles" },
          { recommendation: "When facing change, gather as much information as possible. Knowledge reduces uncertainty and increases a sense of security.", citation: "Cognitive appraisal theories of stress" },
          { recommendation: "Practice gradual exposure to small, controlled changes. This builds tolerance for uncertainty in a safe way.", citation: "Principles of Exposure Therapy in CBT" }
        ]
      },
      [MotivationType.STATUS]: {
        label: "Status",
        description: "You are driven by a need for recognition, respect, and influence. You are motivated by opportunities to advance, gain prestige, and have your accomplishments acknowledged by others.",
        recommendations: [
          { recommendation: "Identify clear, hierarchical career paths or goals that offer tangible markers of progress and prestige.", citation: "Occupational psychology on career ladders" },
          { recommendation: "Take on leadership roles in projects or community groups, even small ones, to practice influence.", citation: "Social Identity Theory of Leadership" },
          { recommendation: "Develop expertise in a niche area. Being the 'go-to' person for a specific topic naturally confers status and respect.", citation: "The concept of 'thought leadership'" },
          { recommendation: "Learn to tactfully communicate your accomplishments. Frame your successes in terms of team benefits to avoid appearing arrogant.", citation: "Impression management literature" }
        ]
      },
      [MotivationType.NOVELTY]: {
        label: "Novelty",
        description: "You are driven by a need for new experiences, variety, and intellectual stimulation. You are easily bored by routine and thrive when you are exploring, learning, and encountering the unexpected.",
        recommendations: [
          { recommendation: "Incorporate 'structured variety' into your work. Dedicate specific times or days to work on different types of tasks or projects.", citation: "Job crafting for employee engagement" },
          { recommendation: "Make a list of new things to try each month – a new restaurant, a different route to work, a new genre of book or music.", citation: "see Arousal Theory and sensation-seeking" },
          { recommendation: "Engage in micro-learning. Spend 15 minutes each day learning about a random, interesting topic online.", citation: "Lifelong learning principles" },
          { recommendation: "When feeling stagnant, rearrange your physical environment. A simple change like moving your desk can provide a fresh perspective.", citation: "Environmental psychology on stimulation" }
        ]
      }
    }
  },
  [Language.AR]: {
    testName: 'مكتشف الدوافع',
    testDescription: 'ما الذي يدفعك حقًا للتصرف؟',
    ui: {
      questionPrefix: 'س',
      calculating: 'جارٍ اكتشاف دوافعك...',
      backToMainMenu: 'القائمة الرئيسية',
      backToMenu: 'العودة للقائمة',
      getPlan: "ابدأ رحلة النمو",
      dominantMotivesTitle: 'دافعك الأساسي',
      recommendationsTitle: 'توصيات مخصصة لك',
      share: 'مشاركة نتيجتي',
      shareTitle: "نتيجتي في 'مكتشف الدوافع'",
      shareText: "دافعي الأساسي هو '{resultLabel}'! اكتشف دافعك.",
      clipboardSuccess: 'تم نسخ الرابط!',
      clipboardError: 'تعذر نسخ الرابط.',
      sharing: 'جارٍ المشاركة...',
      next: 'التالي',
      previous: 'السابق',
      returningToMenu: 'جارٍ العودة إلى القائمة الرئيسية...',
      resumeTest: "استئناف",
    },
    questions: [
      {
        id: 1,
        question: "عند اختيار وظيفة جديدة، أي الخيارات أكثر جاذبية؟",
        options: [
          { text: "دور بمهام واضحة ومتوقعة في شركة مستقرة.", motivation: MotivationType.SECURITY },
          { text: "دور مرن حيث يمكنني تحديد ساعات عملي وأساليب عملي.", motivation: MotivationType.AUTONOMY },
          { text: "دور تنافسي مع إمكانية عالية للترقية.", motivation: MotivationType.STATUS },
          { text: "دور يمكنني من خلاله بناء صداقات قوية مع فريقي.", motivation: MotivationType.RELATEDNESS }
        ],
        source: "المصدر: نظرية تقرير المصير (الاستقلالية) مقابل هرم ماسلو (الأمان)"
      },
      {
        id: 2,
        question: "أشعر بأكبر قدر من الرضا في العمل عندما...",
        options: [
          { text: "أتقن مهارة صعبة كنت أعمل عليها لفترة طويلة.", motivation: MotivationType.COMPETENCE },
          { text: "أعمل على مجموعة واسعة من المشاريع والمهام المختلفة.", motivation: MotivationType.NOVELTY },
          { text: "أتلقى جائزة عامة أو تقديرًا لمساهماتي.", motivation: MotivationType.STATUS },
          { text: "أنجح في مساعدة زميل في حل مشكلة.", motivation: MotivationType.RELATEDNESS }
        ],
        source: "المصدر: نظرية تقرير المصير (الكفاءة) مقابل نظرية السمات (الجدة)"
      },
      {
        id: 3,
        question: "عطلة نهاية أسبوع مثالية تتضمن...",
        options: [
          { text: "حضور حدث حصري حيث يمكنني التواصل مع أشخاص مهمين.", motivation: MotivationType.STATUS },
          { text: "إجراء محادثة عميقة وذات مغزى مع صديق مقرب.", motivation: MotivationType.RELATEDNESS },
          { text: "الحصول على حرية فعل ما أريد، دون جدول زمني.", motivation: MotivationType.AUTONOMY },
          { text: "تعلم مهارة جديدة ومثيرة، مثل الطهي أو البرمجة.", motivation: MotivationType.NOVELTY }
        ],
        source: "المصدر: نظرية تقرير المصير (الارتباط) مقابل نظرية مقياس المجتمع (المكانة)"
      },
      {
        id: 4,
        question: "من المرجح أن أخاطر إذا...",
        options: [
          { text: "قمت بتحليل جميع البيانات بعناية ولدي خطة احتياطية قوية.", motivation: MotivationType.SECURITY },
          { text: "شعرت بالثقة بأن لدي المهارات اللازمة للتعامل مع أي تحد.", motivation: MotivationType.COMPETENCE },
          { text: "كانت هناك فرصة لتجربة شيء جديد ومختلف تمامًا.", motivation: MotivationType.NOVELTY },
          { text: "حظيت بالدعم والتشجيع الكامل من فريقي.", motivation: MotivationType.RELATEDNESS }
        ],
        source: "المصدر: هرم ماسلو (الأمان) مقابل الكفاءة الذاتية (الكفاءة)"
      },
      {
        id: 5,
        question: "ما نوع السفر الذي تفضله؟",
        options: [
          { text: "رحلة عفوية إلى مكان لم أزره من قبل.", motivation: MotivationType.NOVELTY },
          { text: "رحلة فردية حيث أكون المتحكم الكامل في خط سير الرحلة.", motivation: MotivationType.AUTONOMY },
          { text: "رحلة مخططة جيدًا إلى منتجع آمن ومريح.", motivation: MotivationType.SECURITY },
          { text: "رحلة إلى وجهة فاخرة معروفة بمكانتها.", motivation: MotivationType.STATUS }
        ],
        source: "المصدر: نظرية السمات (الجدة) مقابل نظرية تقرير المصير (الاستقلالية)"
      },
      {
        id: 6,
        question: "النجاح المالي مهم بالنسبة لي لأنه يوفر...",
        options: [
          { text: "احترام وتقدير الآخرين.", motivation: MotivationType.STATUS },
          { text: "شعورًا بالأمان والقدرة على التنبؤ بالمستقبل.", motivation: MotivationType.SECURITY },
          { text: "حرية عيش الحياة بشروطي الخاصة.", motivation: MotivationType.AUTONOMY },
          { text: "القدرة على دعم ورعاية أحبائي.", motivation: MotivationType.RELATEDNESS }
        ],
        source: "المصدر: علم النفس التطوري (المكانة) مقابل هرم ماسلو (الأمان)"
      },
      {
        id: 7,
        question: "أي مجاملة تعني لك أكثر؟",
        options: [
          { text: "'أنت بارع فيما تفعله.'", motivation: MotivationType.COMPETENCE },
          { text: "'أنت شخص لطيف وداعم للغاية.'", motivation: MotivationType.RELATEDNESS },
          { text: "'أنت مغامر بشكل لا يصدق.'", motivation: MotivationType.NOVELTY },
          { text: "'أنت مؤثر جدًا.'", motivation: MotivationType.STATUS }
        ],
        source: "المصدر: نظرية تقرير المصير (الكفاءة مقابل الارتباط)"
      },
      {
        id: 8,
        question: "أفضل بيئة عمل تكون...",
        options: [
          { text: "منظمة للغاية مع تسلسلات هرمية وألقاب واضحة.", motivation: MotivationType.STATUS },
          { text: "منظمة مسطحة حيث يمكنني العمل بشكل مستقل.", motivation: MotivationType.AUTONOMY },
          { text: "شركة مستقرة وطويلة الأمد مع مزايا جيدة.", motivation: MotivationType.SECURITY },
          { text: "مكان أشعر فيه بالانتماء القوي مع زملائي في العمل.", motivation: MotivationType.RELATEDNESS }
        ],
        source: "المصدر: نظرية تقرير المصير (الاستقلالية) مقابل نظرية الهيمنة الاجتماعية (المكانة)"
      },
      {
        id: 9,
        question: "فيما يتعلق بالروتين اليومي، أنا...",
        options: [
          { text: "أفضل جدولًا يمكن التنبؤ به ويمكنني الاعتماد عليه.", motivation: MotivationType.SECURITY },
          { text: "أتوق إلى التنوع وأكره القيام بنفس الشيء كل يوم.", motivation: MotivationType.NOVELTY },
          { text: "أحتاج أن أشعر بأنني أتحسن وأصبح أفضل في مهامي.", motivation: MotivationType.COMPETENCE },
          { text: "أستمتع بالروتين الذي يتضمن التفاعل مع أشخاص أحبهم.", motivation: MotivationType.RELATEDNESS }
        ],
        source: "المصدر: نظرية السمات (الأمان) مقابل نظرية السمات (الجدة)"
      },
      {
        id: 10,
        question: "عند اتخاذ قرار حياتي كبير، من المرجح أن...",
        options: [
          { text: "أستشير أصدقائي المقربين وعائلتي لآرائهم.", motivation: MotivationType.RELATEDNESS },
          { text: "أتخذ القرار الذي يتماشى مع قيمي الشخصية، بغض النظر عن آراء الآخرين.", motivation: MotivationType.AUTONOMY },
          { text: "أختار الخيار الذي يبدو الأكثر أمانًا والأقل خطورة.", motivation: MotivationType.SECURITY },
          { text: "أختار الخيار الذي سيحسن مهاراتي وخبرتي.", motivation: MotivationType.COMPETENCE }
        ],
        source: "المصدر: نظرية تقرير المصير (الارتباط مقابل الاستقلالية)"
      },
      {
        id: 11,
        question: "أشعر بالفخر الأكبر عندما...",
        options: [
          { text: "أحل مشكلة لم يتمكن أي شخص آخر من حلها.", motivation: MotivationType.COMPETENCE },
          { text: "يتم تكريمي علنًا على إنجاز كبير.", motivation: MotivationType.STATUS },
          { text: "أجرب بنجاح شيئًا جديدًا وخارج منطقة راحتي.", motivation: MotivationType.NOVELTY },
          { text: "أتخذ قرارًا هو قراري بنسبة 100٪.", motivation: MotivationType.AUTONOMY }
        ],
        source: "المصدر: نظرية هدف الإنجاز (الإتقان مقابل الأداء)"
      },
      {
        id: 12,
        question: "أي نشاط يبدو أكثر تجديدًا للنشاط؟",
        options: [
          { text: "استكشاف مدينة جديدة أو تجربة طعام غريب.", motivation: MotivationType.NOVELTY },
          { text: "قضاء أمسية هادئة مع دائرتك المقربة من الأصدقاء.", motivation: MotivationType.RELATEDNESS },
          { text: "تنظيم أموالك الشخصية وإنشاء ميزانية.", motivation: MotivationType.SECURITY },
          { text: "إتقان عرض تقديمي لاجتماع عالي المخاطر.", motivation: MotivationType.COMPETENCE }
        ],
        source: "المصدر: هرم ماسلو (الانتماء) مقابل نظرية الإثارة (الجدة)"
      },
      {
        id: 13,
        question: "أي جانب من جوانب المشروع الجماعي هو الأكثر إرضاءً؟",
        options: [
            { text: "أن يتم الاعتراف بي كمساهم رئيسي في النجاح.", motivation: MotivationType.STATUS },
            { text: "الصداقة والشعور المشترك بالإنجاز مع الفريق.", motivation: MotivationType.RELATEDNESS },
            { text: "تطوير مهارة جديدة أو تعميق خبرتي في مجال ما.", motivation: MotivationType.COMPETENCE },
            { text: "الحصول على حرية تنفيذ الجزء الخاص بي من المشروع كما أراه مناسبًا.", motivation: MotivationType.AUTONOMY }
        ],
        source: "المصدر: مراحل تطور المجموعة لتوكمان"
      },
      {
        id: 14,
        question: "عندما تواجه تغييرًا كبيرًا في حياتك، ما هي حاجتك الأساسية؟",
        options: [
            { text: "خارطة طريق واضحة وشعور بالقدرة على التنبؤ.", motivation: MotivationType.SECURITY },
            { text: "فرصة للتعلم والتكيف مع الظروف الجديدة.", motivation: MotivationType.NOVELTY },
            { text: "الدعم والتواصل من الأشخاص الذين يفهمون.", motivation: MotivationType.RELATEDNESS },
            { text: "الشعور بالسيطرة على القرارات التي تؤثر علي.", motivation: MotivationType.AUTONOMY }
        ],
        source: "المصدر: نظرية التقييم المعرفي، لازاروس وفولكمان"
      },
      {
        id: 15,
        question: "ما الذي يجعلك تشعر بالحياة أكثر؟",
        options: [
            { text: "إتقان مهمة أو تحدٍ معقد.", motivation: MotivationType.COMPETENCE },
            { text: "استكشاف مكان أو فكرة جديدة لأول مرة.", motivation: MotivationType.NOVELTY },
            { text: "تحقيق منصب قيادي أو مؤثر.", motivation: MotivationType.STATUS },
            { text: "الشعور بالارتباط العميق والانتماء مع الآخرين.", motivation: MotivationType.RELATEDNESS }
        ],
        source: "المصدر: الرفاهية اليودايمونية مقابل الهدونية، ريان وديسي"
      },
      {
        id: 16,
        question: "إذا تلقيت مكافأة مفاجئة، فماذا ستفعل بها على الأرجح؟",
        options: [
            { text: "استثمارها أو وضعها في المدخرات لتحقيق الاستقرار على المدى الطويل.", motivation: MotivationType.SECURITY },
            { text: "إنفاقها على تجربة فريدة، مثل رحلة مرتجلة.", motivation: MotivationType.NOVELTY },
            { text: "استخدامها لأخذ دورة أو شراء معدات لتطوير مهاراتي.", motivation: MotivationType.COMPETENCE },
            { text: "شراء شيء يرمز للنجاح والإنجاز.", motivation: MotivationType.STATUS }
        ],
        source: "المصدر: نظرية الاحتمال، كانيمان وتفيرسكي"
      },
      {
        id: 17,
        question: "ما هو الشيء غير القابل للتفاوض بالنسبة لك في الحياة؟",
        options: [
            { text: "امتلاك حرية رسم مساري الخاص.", motivation: MotivationType.AUTONOMY },
            { text: "الشعور بالأمان ووجود نظام دعم موثوق.", motivation: MotivationType.SECURITY },
            { text: "الشعور بأنني أحقق تقدمًا وأنمي قدراتي.", motivation: MotivationType.COMPETENCE },
            { text: "أن أكون جزءًا من مجتمع أُقدَّر فيه.", motivation: MotivationType.RELATEDNESS }
        ],
        source: "المصدر: نظرية الاحتياجات النفسية الأساسية (BPNT)، نظرية فرعية من SDT"
      }
    ],
    results: {
      [MotivationType.AUTONOMY]: {
        label: "الاستقلالية",
        description: "ما يحركك هو حاجتك للاستقلال والحرية والتحكم في مسار حياتك. أنت تزدهر حين تتمكن من اتخاذ قراراتك الخاصة، والتعبير عن ذاتك الحقيقية، والتصرف بما يتماشى مع قيمك.",
        recommendations: [
          { recommendation: "تفاوض من أجل مزيد من المرونة في عملك، مثل تحديد ساعات العمل الخاصة بك أو امتلاك ملكية مشاريع معينة.", citation: "انظر نظرية تقرير المصير، ديسي وريان" },
          { recommendation: "ابدأ مشروعًا شخصيًا أو هواية حيث يكون لديك سيطرة إبداعية كاملة من البداية إلى النهاية.", citation: "علم النفس المهني حول صياغة الوظائف" },
          { recommendation: "تدرب على اتخاذ قرارات صغيرة قائمة على القيم يوميًا، حتى لو كان ذلك مجرد اختيار ما ستأكله للغداء دون تأثير خارجي.", citation: "تمارين توضيح القيم في علاج القبول والالتزام" },
          { recommendation: "عندما تشعر بالقيود، حدد ما هو ضمن سيطرتك مقابل ما هو ليس كذلك. ركز طاقتك على دائرة تأثيرك.", citation: "بناءً على الفلسفة الرواقية والعلاج السلوكي المعرفي" }
        ]
      },
      [MotivationType.COMPETENCE]: {
        label: "الكفاءة",
        description: "أنت مدفوع بالرغبة في أن تكون فعالاً وقادراً ومتقناً في مساعيك. تكتسب الرضا من التعلم وتحسين مهاراتك والتغلب على التحديات من خلال خبرتك.",
        recommendations: [
          { recommendation: "ضع 'أهداف تعلم' وليس فقط 'أهداف أداء'. ركز على عملية اكتساب المهارات، وليس فقط النتيجة.", citation: "انظر نظرية هدف الإنجاز، دويك" },
          { recommendation: "اطلب ملاحظات بناءة بانتظام. اعتبرها أداة للنمو لتسريع إتقانك لموضوع ما.", citation: "مبادئ 'الممارسة المتعمدة'، إريكسون" },
          { recommendation: "قسّم مهارة كبيرة تريد تعلمها إلى مهارات فرعية أصغر يمكن التحكم فيها. احتفل بإتقان كل جزء صغير.", citation: "ال سقالات في علم النفس التربوي" },
          { recommendation: "قم بتوجيه شخص آخر في مجال تتقنه بالفعل. التدريس يعزز كفاءتك الخاصة.", citation: "تأثير 'المتدرب' في التعلم" }
        ]
      },
      [MotivationType.RELATEDNESS]: {
        label: "الانتماء",
        description: "أنت مدفوع بالحاجة إلى التواصل مع الآخرين، والشعور بالانتماء، وإقامة علاقات هادفة ورعاية. تزدهر في بيئات داعمة وتعاونية وتقدر المجتمع.",
        recommendations: [
          { recommendation: "حدد وقتًا منتظمًا ومخصصًا للمحادثات العميقة مع الأصدقاء والعائلة، بعيدًا عن المشتتات.", citation: "انظر هرم ماسلو، الحاجة إلى الانتماء" },
          { recommendation: "انضم إلى مجموعة أو نادٍ أو فصل دراسي بناءً على اهتمام مشترك لبناء علاقات جديدة في بيئة منخفضة الضغط.", citation: "علم النفس الاجتماعي حول تكوين المجموعات" },
          { recommendation: "مارس الاستماع الفعال والمتعاطف. اطرح أسئلة مفتوحة لإظهار اهتمام حقيقي بالآخرين.", citation: "مهارات التواصل بين الأشخاص، كارل روجرز" },
          { recommendation: "تطوع لقضية تهتم بها. العمل جنبًا إلى جنب مع الآخرين من أجل هدف مشترك هو وسيلة قوية لبناء الروابط.", citation: "بحث حول السلوك الاجتماعي الإيجابي والرفاهية" }
        ]
      },
      [MotivationType.SECURITY]: {
        label: "الأمان",
        description: "أنت مدفوع بالحاجة إلى الأمان والاستقرار والقدرة على التنبؤ. تكون في أفضل حالاتك عندما يكون لديك خطة واضحة، وتفهم المخاطر، وتشعر أن مستقبلك آمن ومستقر.",
        recommendations: [
          { recommendation: "أنشئ روتينًا وخططًا منظمة لأسبوعك. يمكن للقدرة على التنبؤ أن تقلل من القلق وتوفر شعورًا بالسيطرة.", citation: "انظر هرم ماسلو، احتياجات الأمان" },
          { recommendation: "ابنِ 'شبكة أمان' مالية، مثل صندوق طوارئ. يمكن للأمان الملموس أن يزيد بشكل كبير من الراحة النفسية.", citation: "مبادئ التمويل السلوكي" },
          { recommendation: "عند مواجهة التغيير، اجمع أكبر قدر ممكن من المعلومات. المعرفة تقلل من عدم اليقين وتزيد من الشعور بالأمان.", citation: "نظريات التقييم المعرفي للتوتر" },
          { recommendation: "تدرب على التعرض التدريجي لتغييرات صغيرة ومسيطر عليها. هذا يبني القدرة على تحمل عدم اليقين بطريقة آمنة.", citation: "مبادئ العلاج بالتعرض في العلاج السلوكي المعرفي" }
        ]
      },
      [MotivationType.STATUS]: {
        label: "المكانة",
        description: "أنت مدفوع بالحاجة إلى التقدير والاحترام والتأثير. أنت متحمس لفرص التقدم واكتساب الهيبة والاعتراف بإنجازاتك من قبل الآخرين.",
        recommendations: [
          { recommendation: "حدد مسارات أو أهدافًا وظيفية هرمية واضحة توفر علامات ملموسة للتقدم والهيبة.", citation: "علم النفس المهني حول السلالم الوظيفية" },
          { recommendation: "تولى أدوارًا قيادية في المشاريع أو المجموعات المجتمعية، حتى الصغيرة منها، لممارسة التأثير.", citation: "نظرية الهوية الاجتماعية للقيادة" },
          { recommendation: "طور خبرة في مجال متخصص. كونك الشخص 'المفضل' لموضوع معين يمنحك مكانة واحترامًا بشكل طبيعي.", citation: "مفهوم 'القيادة الفكرية'" },
          { recommendation: "تعلم كيفية توصيل إنجازاتك بلباقة. صغ نجاحاتك من حيث فوائد الفريق لتجنب الظهور بمظهر متعجرف.", citation: "أدبيات إدارة الانطباع" }
        ]
      },
      [MotivationType.NOVELTY]: {
        label: "التجديد",
        description: "أنت مدفوع بالحاجة إلى تجارب جديدة وتنوع وتحفيز فكري. تشعر بالملل بسهولة من الروتين وتزدهر عندما تستكشف وتتعلم وتواجه ما هو غير متوقع.",
        recommendations: [
          { recommendation: "أدرج 'التنوع المنظم' في عملك. خصص أوقاتًا أو أيامًا محددة للعمل على أنواع مختلفة من المهام أو المشاريع.", citation: "صياغة الوظائف لإشراك الموظفين" },
          { recommendation: "ضع قائمة بالأشياء الجديدة التي ستجربها كل شهر - مطعم جديد، طريق مختلف للعمل، نوع جديد من الكتب أو الموسيقى.", citation: "انظر نظرية الإثارة والبحث عن الإحساس" },
          { recommendation: "انخرط في التعلم المصغر. اقضِ 15 دقيقة كل يوم في التعلم عن موضوع عشوائي ومثير للاهتمام عبر الإنترنت.", citation: "مبادئ التعلم مدى الحياة" },
          { recommendation: "عندما تشعر بالركود، أعد ترتيب بيئتك المادية. تغيير بسيط مثل نقل مكتبك يمكن أن يوفر منظورًا جديدًا.", citation: "علم النفس البيئي حول التحفيز" }
        ]
      }
    }
  }
};