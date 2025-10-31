import { SelfPerceptionTestDataStructure, Language } from '../types';

export const selfPerceptionTestData: SelfPerceptionTestDataStructure = {
  [Language.EN]: {
    testName: 'Self-Perception Mirror',
    testDescription: 'See yourself through your own eyes—and theirs.',
    ui: {
      questionPrefix: 'Q',
      calculating: 'Analyzing Your Perceptions...',
      backToMainMenu: 'Main Menu',
      backToMenu: 'Back to Menu',
      getPlan: "Start Growth Journey",
      selfScore: 'Self-Score',
      perceivedOthersScore: 'Perceived Others Score',
      discrepancyIndex: 'Discrepancy Index',
      interventionsTitle: 'Personalized Micro-Interventions',
      share: 'Share My Result',
      sharingResult: 'Sharing your result:',
      shareTitle: "My 'Self-Perception' Result",
      shareText: "My self-perception is '{resultLabel}'! Find out yours.",
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
        self_perception: "I see myself as generally confident.",
        social_perception: "I believe others see me as...",
        options: [
          { text: "Confident and self-assured.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "Competent, but perhaps a bit quiet.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "Nervous or hesitant on the inside.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Insecure and lacking in confidence.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Self-Esteem, Rosenberg self-esteem scale (1965)"
      },
      {
        id: 2,
        self_perception: "I consider myself to be a warm and friendly person.",
        social_perception: "I believe others find me...",
        options: [
          { text: "Approachable and very friendly.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "Polite and generally pleasant.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "A bit reserved or hard to get to know.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Distant or cold.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Social Self (Agreeableness), The Big Five personality traits"
      },
      {
        id: 3,
        self_perception: "In my heart, I am a creative and unconventional thinker.",
        social_perception: "My colleagues and friends probably think I am...",
        options: [
          { text: "Highly innovative and original.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "Creative on some topics.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "Practical and down-to-earth.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Conventional and prefer traditional methods.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Self-Other Accuracy (Openness), Vazire's SOKA model"
      },
      {
        id: 4,
        self_perception: "I strive to be a reliable and disciplined person.",
        social_perception: "I worry that others might sometimes see me as...",
        options: [
          { text: "Extremely dependable. (My self-perception aligns)", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "Reliable most of the time. (A slight difference)", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "A bit disorganized. (A noticeable difference)", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Unreliable or flaky. (A strong difference)", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Self-Discrepancy Theory, Higgins (1987)"
      },
      {
        id: 5,
        self_perception: "I am an intelligent and capable person.",
        social_perception: "In challenging situations, I think others perceive me as...",
        options: [
          { text: "Highly competent and knowledgeable.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "Knowledgeable, but I might miss some details.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "Struggling but trying my best.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Overwhelmed and out of my depth.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Self-Efficacy, Bandura (1977)"
      },
      {
        id: 6,
        self_perception: "I have a good sense of humor.",
        social_perception: "When I tell a joke, I think people generally find it...",
        options: [
          { text: "Genuinely funny.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "Amusing, but maybe not hilarious.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "A bit odd or quirky.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Awkward or not funny.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Impression Management, Goffman (1956)"
      },
      {
        id: 7,
        self_perception: "I am a physically attractive person.",
        social_perception: "I believe that when people first meet me, they find my appearance...",
        options: [
          { text: "Very attractive.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "Pleasant or average.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "Unremarkable.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Unattractive.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Body Image / Objectification Theory, Fredrickson & Roberts (1997)"
      },
      {
        id: 8,
        self_perception: "I try to be a kind and compassionate person.",
        social_perception: "I am concerned that my actions sometimes come across as...",
        options: [
          { text: "Consistently kind. (My intent is clear)", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "Well-intentioned but occasionally clumsy. (Minor gap)", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "Indifferent or detached. (Significant gap)", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Selfish or unkind. (Major gap)", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Intent vs. Impact, Social Cognition Literature"
      },
      {
        id: 9,
        self_perception: "I am a natural leader.",
        social_perception: "In group settings, I think others see me as...",
        options: [
          { text: "The leader they look to for guidance.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "A valuable contributor, but not the main leader.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "A team player who prefers to follow.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Someone who avoids taking charge.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Leadership Identity, Social Identity Theory of Leadership"
      },
      {
        id: 10,
        self_perception: "Deep down, I feel like an interesting person with unique experiences.",
        social_perception: "I feel that, in conversation, others probably perceive me as...",
        options: [
          { text: "Fascinating and engaging.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "A good listener, but not especially remarkable.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "A bit boring or quiet.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "Socially awkward.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "Source: Social Anxiety, Clark & Wells model (1995)"
      }
    ],
    scoring: {
      thresholds: {
        aligned: { maxDiscrepancy: 8 },
        moderate_discrepancy: { maxDiscrepancy: 16 },
      }
    },
    results: {
      aligned: {
        label: "Aligned Self-Image",
        description: "Your self-perception and your view of how others see you are closely matched. This suggests a strong sense of self-awareness and authenticity. You likely present yourself to the world in a way that feels true to who you are.",
        interventions: [
          { intervention: "Values Affirmation: Take 5 minutes to write about a personal value that is most important to you (e.g., creativity, honesty) and a time you expressed it. This reinforces your authentic self.", citation: "see Self-Affirmation Theory, Steele, 1988" },
          { intervention: "Mindful Social Interaction: In your next conversation, practice simply listening without planning your response. Notice how it feels to be present. This strengthens the connection between your internal state and external behavior.", citation: "rooted in Mindfulness-Based Stress Reduction (MBSR)" },
          { intervention: "Seek Congruent Feedback: Ask a trusted friend: 'When do you see me at my best?' This can provide positive reinforcement for your aligned self-view.", citation: "based on principles from Positive Psychology" }
        ]
      },
      moderate_discrepancy: {
        label: "Slightly Misaligned Self-Image",
        description: "There's a noticeable, but not extreme, gap between how you see yourself and how you believe others see you. This is common and can point to specific areas of insecurity or situations where you might engage in impression management.",
        interventions: [
          { intervention: "Discrepancy Journaling: Pick one area where your scores differed. Write down: 'I see myself as ___, but I fear others see me as ___. What's one piece of evidence that my fear might not be 100% true?'", citation: "a Cognitive Behavioral Therapy (CBT) thought record technique" },
          { intervention: "Behavioral Experiment: Choose a low-stakes situation to act more in line with your 'true self'. For example, if you see yourself as funny but think others don't, share a lighthearted observation in a group chat. Note the actual response vs. your feared response.", citation: "core component of CBT for social anxiety" },
          { intervention: "Identify the 'Ought' Self: Reflect on whether the 'others' view' is influenced by societal or family expectations (your 'ought' self). Acknowledging this can reduce its power. (Are you trying to be someone you 'should' be?)", citation: "see Higgins' Self-Discrepancy Theory" }
        ]
      },
      high_discrepancy: {
        label: "Significantly Divergent Self-Image",
        description: "There is a significant gap between your inner self-view and your perception of your social self. This could indicate strong feelings of being misunderstood, high social anxiety, or a critical inner voice that distorts how you think others perceive you. This gap can be a source of stress.",
        interventions: [
          { intervention: "Challenge Mind-Reading: Your assumption about what others think is a guess, not a fact. Ask yourself: 'What's a more generous or neutral explanation for their behavior?' This counters a common cognitive distortion.", citation: "see Cognitive Restructuring in CBT, Beck" },
          { intervention: "Practice Self-Compassion: Write a kind, supportive letter to yourself as if you were writing to a friend experiencing these feelings of being misjudged. Acknowledge the pain of this discrepancy without judgment.", citation: "see Kristin Neff's work on self-compassion" },
          { intervention: "Small Step of Vulnerability: Share a genuine (but not overly personal) thought or feeling with a safe, trusted person. For example: 'I'm feeling a bit nervous about this presentation.' This helps bridge the gap between your inner and outer worlds.", citation: "inspired by Brené Brown's research on vulnerability" }
        ]
      }
    }
  },
  [Language.AR]: {
    testName: 'مرآة الذات',
    testDescription: 'اكتشف صورتك في عينيك وفي عيون الآخرين.',
    ui: {
      questionPrefix: 'س',
      calculating: 'جارٍ تحليل تصوراتك...',
      backToMainMenu: 'القائمة الرئيسية',
      backToMenu: 'العودة للقائمة',
      getPlan: "ابدأ رحلة النمو",
      selfScore: 'تقييم ذاتي',
      perceivedOthersScore: 'تصوّر الآخرين',
      discrepancyIndex: 'مؤشر التباين',
      interventionsTitle: 'تمارين دقيقة ومخصصة',
      share: 'مشاركة نتيجتي',
      sharingResult: 'تتم مشاركة نتيجتك:',
      shareTitle: "نتيجتي في 'مرآة الذات'",
      shareText: "إدراكي الذاتي هو '{resultLabel}'! اكتشف إدراكك.",
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
        self_perception: "أرى نفسي كشخص واثق بشكل عام.",
        social_perception: "أعتقد أن الآخرين يرونني كـ...",
        options: [
          { text: "واثق ومؤكد لذاته.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "كفؤ، ولكن ربما قليل الكلام.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "متوتر أو متردد من الداخل.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "غير آمن ويفتقر إلى الثقة.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: تقدير الذات، مقياس روزنبرغ لتقدير الذات (1965)"
      },
      {
        id: 2,
        self_perception: "أعتبر نفسي شخصًا دافئًا وودودًا.",
        social_perception: "أعتقد أن الآخرين يجدونني...",
        options: [
          { text: "سهل التعامل وودود جدًا.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "مهذبًا ولطيفًا بشكل عام.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "متحفظًا بعض الشيء أو يصعب التعرف عليه.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "بعيدًا أو باردًا.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: الذات الاجتماعية (القبول)، سمات الشخصية الخمس الكبرى"
      },
      {
        id: 3,
        self_perception: "في قلبي، أنا مفكر مبدع وغير تقليدي.",
        social_perception: "ربما يعتقد زملائي وأصدقائي أنني...",
        options: [
          { text: "مبتكر وأصلي للغاية.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "مبدع في بعض المواضيع.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "عملي وواقعي.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "تقليدي وأفضل الطرق المعتادة.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: دقة الذات والآخر (الانفتاح)، نموذج SOKA لفازير"
      },
      {
        id: 4,
        self_perception: "أسعى لأن أكون شخصًا موثوقًا ومنضبطًا.",
        social_perception: "أخشى أن يراني الآخرون أحيانًا كـ...",
        options: [
          { text: "يمكن الاعتماد عليه للغاية. (تصوري الذاتي متوافق)", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "موثوق في معظم الأوقات. (فرق طفيف)", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "غير منظم بعض الشيء. (فرق ملحوظ)", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "غير موثوق أو متقلب. (فرق قوي)", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: نظرية التباين الذاتي، هيغنز (1987)"
      },
      {
        id: 5,
        self_perception: "أنا شخص ذكي وقادر.",
        social_perception: "في المواقف الصعبة، أعتقد أن الآخرين ينظرون إليّ كـ...",
        options: [
          { text: "كفؤ للغاية ومطلع.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "مطلع، لكن قد تفوتني بعض التفاصيل.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "أعاني ولكنني أبذل قصارى جهدي.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "مرتبك وفي موقف صعب.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: الكفاءة الذاتية، باندورا (1977)"
      },
      {
        id: 6,
        self_perception: "أتمتع بروح الدعابة.",
        social_perception: "عندما أقول نكتة، أعتقد أن الناس يجدونها بشكل عام...",
        options: [
          { text: "مضحكة حقًا.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "مسلية، ولكن ربما ليست مضحكة للغاية.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "غريبة بعض الشيء أو فريدة.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "محرجة أو غير مضحكة.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: إدارة الانطباع، جوفمان (1956)"
      },
      {
        id: 7,
        self_perception: "أنا شخص جذاب جسديًا.",
        social_perception: "أعتقد أنه عندما يقابلني الناس لأول مرة، يجدون مظهري...",
        options: [
          { text: "جذابًا جدًا.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "لطيفًا أو متوسطًا.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "عاديًا.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "غير جذاب.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: صورة الجسد / نظرية التشخيص، فريدريكسون وروبرتس (1997)"
      },
      {
        id: 8,
        self_perception: "أحاول أن أكون شخصًا لطيفًا ورحيمًا.",
        social_perception: "أخشى أن تصرفاتي تبدو أحيانًا كـ...",
        options: [
          { text: "لطيفة باستمرار. (نيتي واضحة)", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "ذات نوايا حسنة ولكنها خرقاء أحيانًا. (فجوة طفيفة)", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "غير مبالية أو منعزلة. (فجوة كبيرة)", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "أنانية أو غير لطيفة. (فجوة رئيسية)", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: النية مقابل التأثير، أدبيات الإدراك الاجتماعي"
      },
      {
        id: 9,
        self_perception: "أنا قائد بالفطرة.",
        social_perception: "في الإعدادات الجماعية، أعتقد أن الآخرين يرونني كـ...",
        options: [
          { text: "القائد الذي يلجؤون إليه للتوجيه.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "مساهم قيم، ولكن ليس القائد الرئيسي.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "لاعب فريق يفضل المتابعة.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "شخص يتجنب تولي المسؤولية.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: هوية القيادة، نظرية الهوية الاجتماعية للقيادة"
      },
      {
        id: 10,
        self_perception: "في أعماقي، أشعر أنني شخص مثير للاهتمام ولدي تجارب فريدة.",
        social_perception: "أشعر أنه في المحادثة، ربما ينظر إليّ الآخرون على أنني...",
        options: [
          { text: "رائع وجذاب.", scores: { selfScore: 4, perceivedOthersScore: 4 } },
          { text: "مستمع جيد، ولكن لست مميزًا بشكل خاص.", scores: { selfScore: 4, perceivedOthersScore: 3 } },
          { text: "ممل بعض الشيء أو هادئ.", scores: { selfScore: 4, perceivedOthersScore: 2 } },
          { text: "محرج اجتماعيًا.", scores: { selfScore: 4, perceivedOthersScore: 1 } }
        ],
        source: "المصدر: القلق الاجتماعي، نموذج كلارك وويلز (1995)"
      }
    ],
    scoring: {
        thresholds: {
          aligned: { maxDiscrepancy: 8 },
          moderate_discrepancy: { maxDiscrepancy: 16 },
        }
    },
    results: {
      aligned: {
        label: "صورة ذاتية متوافقة",
        description: "تصوّرك الذاتي ورؤيتك لكيفية نظر الآخرين إليك متطابقان إلى حد كبير، مما يوحي بحس عالٍ من الوعي الذاتي والأصالة. أنت على الأرجح تعبر عن نفسك بطريقة تشعر أنها حقيقية.",
        interventions: [
          { intervention: "تأكيد القيم: خذ 5 دقائق للكتابة عن قيمة شخصية هي الأهم بالنسبة لك (مثل الإبداع، الصدق) ووقت عبرت فيه عنها. هذا يعزز ذاتك الأصيلة.", citation: "انظر نظرية تأكيد الذات، ستيل، 1988" },
          { intervention: "التفاعل الاجتماعي اليقظ: في محادثتك التالية، تدرب على الاستماع ببساطة دون التخطيط لردك. لاحظ كيف تشعر بأنك حاضر. هذا يقوي الصلة بين حالتك الداخلية وسلوكك الخارجي.", citation: "متجذر في تقليل الإجهاد القائم على اليقظة (MBSR)" },
          { intervention: "اطلب ملاحظات متطابقة: اسأل صديقًا موثوقًا به: 'متى تراني في أفضل حالاتي؟' يمكن أن يوفر هذا تعزيزًا إيجابيًا لرؤيتك الذاتية المتوافقة.", citation: "بناءً على مبادئ من علم النفس الإيجابي" }
        ]
      },
      moderate_discrepancy: {
        label: "صورة ذاتية متباينة قليلاً",
        description: "توجد فجوة ملحوظة بين رؤيتك لنفسك وكيف تعتقد أن الآخرين يرونك. هذا أمر شائع وقد يشير إلى جوانب معينة من عدم الأمان أو مواقف تحاول فيها إدارة انطباعك عن عمد.",
        interventions: [
          { intervention: "تدوين التباين: اختر مجالًا واحدًا اختلفت فيه درجاتك. اكتب: 'أرى نفسي كـ ___، لكني أخشى أن يراني الآخرون كـ ___. ما هو دليل واحد على أن خوفي قد لا يكون صحيحًا بنسبة 100٪؟'", citation: "تقنية سجل الأفكار في العلاج السلوكي المعرفي (CBT)" },
          { intervention: "تجربة سلوكية: اختر موقفًا منخفض المخاطر للتصرف بشكل أكبر بما يتماشى مع 'ذاتك الحقيقية'. على سبيل المثال، إذا كنت ترى نفسك مضحكًا ولكنك تعتقد أن الآخرين لا يفعلون ذلك، شارك بملاحظة خفيفة في محادثة جماعية. لاحظ الرد الفعلي مقابل ردك المخيف.", citation: "مكون أساسي في العلاج السلوكي المعرفي للقلق الاجتماعي" },
          { intervention: "حدد 'الذات الواجبة': فكر فيما إذا كانت 'نظرة الآخرين' متأثرة بالتوقعات المجتمعية أو العائلية ('ذاتك الواجبة'). الاعتراف بهذا يمكن أن يقلل من قوته. (هل تحاول أن تكون شخصًا 'يجب' أن تكونه؟)", citation: "انظر نظرية التباين الذاتي لهيغنز" }
        ]
      },
      high_discrepancy: {
        label: "صورة ذاتية شديدة التباين",
        description: "توجد فجوة كبيرة بين رؤيتك الداخلية لنفسك وتصورك لذاتك الاجتماعية. قد يشير هذا إلى شعور عميق بأنه يُساء فهمك، أو قلق اجتماعي عالٍ، أو صوت داخلي ناقد يشوه الطريقة التي تعتقد أن الآخرين ينظرون بها إليك.",
        interventions: [
          { intervention: "تحدى قراءة الأفكار: افتراضك حول ما يفكر فيه الآخرون هو تخمين، وليس حقيقة. اسأل نفسك: 'ما هو التفسير الأكثر كرمًا أو حيادية لسلوكهم؟' هذا يقاوم تشويهًا معرفيًا شائعًا.", citation: "انظر إعادة الهيكلة المعرفية في العلاج السلوكي المعرفي، بيك" },
          { intervention: "مارس التعاطف مع الذات: اكتب رسالة لطيفة وداعمة لنفسك كما لو كنت تكتب لصديق يعاني من هذه المشاعر بأنه يساء الحكم عليه. اعترف بألم هذا التباين دون حكم.", citation: "انظر أعمال كريستين نيف حول التعاطف مع الذات" },
          { intervention: "خطوة صغيرة من الضعف: شارك فكرة أو شعورًا حقيقيًا (ولكن ليس شخصيًا للغاية) مع شخص آمن وموثوق به. على سبيل المثال: 'أشعر ببعض التوتر بشأن هذا العرض التقديمي'. هذا يساعد على سد الفجوة بين عالمك الداخلي والخارجي.", citation: "مستوحى من أبحاث برينيه براون حول الضعف" }
        ]
      }
    }
  }
};