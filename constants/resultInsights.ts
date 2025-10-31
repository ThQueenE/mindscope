import { Language, ProfileType, EmotionalResultCategory, SelfPerceptionResultCategory, MotivationType } from '../types';

type InsightMap = {
  [key in Language]: Record<string, string[]>;
};

export const resultInsights: InsightMap = {
  [Language.EN]: {
    [ProfileType.DREAMER]: [
      "Your imagination is your greatest asset today. Where can it take you?",
      "Don't forget to ground one of your brilliant ideas in a small, concrete action.",
      "A moment of mindfulness can connect your inner world with the outer one. Take a deep breath."
    ],
    [ProfileType.THINKER]: [
      "Logic is a powerful tool, but don't forget to check in with your feelings today.",
      "It's okay if not everything has a perfect solution. Embrace a little ambiguity.",
      "Your analytical mind needs rest. Schedule a few minutes to just be, not think."
    ],
    [ProfileType.DOER]: [
      "Action is your strength. Is there a pause you can take today to ensure your action is aligned with your 'why'?",
      "Celebrate the small steps, not just the final victory. Your effort is worthy of recognition.",
      "Remember, listening can be the most powerful action you take today."
    ],
    [ProfileType.HEALER]: [
      "You give so much to others. What is one act of compassion you can give yourself today?",
      "Your empathy is a superpower. Remember to protect it with healthy boundaries.",
      "It's okay to say 'no.' It doesn't make you any less caring."
    ],
    [EmotionalResultCategory.HIGH_REACTIVITY]: [
      "Your feelings are intense because you care deeply. Today, practice pausing before you react.",
      "Notice the physical signs of a rising emotion. Can you name it without judgment?",
      "A splash of cold water or a deep, slow exhale can be your reset button."
    ],
    [EmotionalResultCategory.BALANCED]: [
      "Your balance is a strength. Today, notice how your emotions guide you without controlling you.",
      "Affect labeling: simply naming a feeling ('this is disappointment') can lessen its power.",
      "You navigate your inner world well. Share that calm strength with someone today."
    ],
    [EmotionalResultCategory.HIGH_REGULATION]: [
      "Your calm is a gift. Make sure you're still allowing yourself to truly feel, not just manage.",
      "Are you managing a feeling, or avoiding it? A moment of honest self-reflection can be powerful.",
      "Self-compassion isn't just for hard times. Be kind to yourself about your 'irrational' feelings too."
    ],
    [SelfPerceptionResultCategory.ALIGNED]: [
      "Your inner self and outer self are in harmony. Live in that authenticity today.",
      "Reinforce your values. Take one small action that is 100% true to who you are.",
      "Your self-awareness is strong. Use it to connect genuinely with others."
    ],
    [SelfPerceptionResultCategory.MODERATE_DISCREPANCY]: [
      "Notice the small gap between who you are and who you think you should be. Can you be a little kinder to yourself in that space?",
      "Take a small risk today to act as your 'true self' in a low-stakes situation.",
      "Is the way you think others see you based on evidence, or just a fear?"
    ],
    [SelfPerceptionResultCategory.HIGH_DISCREPANCY]: [
      "You are not a mind reader. The story you believe others have about you is often a reflection of your own fears.",
      "Practice self-compassion. How would you talk to a friend who felt this misunderstood?",
      "A small act of vulnerability with a trusted person can help bridge the gap between your inner and outer worlds."
    ],
    [MotivationType.AUTONOMY]: [
        "Your freedom is your fuel. What's one decision you can make today, big or small, that is entirely your own?",
        "Where do you feel most in control of your life? Lean into that feeling.",
        "True autonomy also means taking ownership of your responsibilities. Tackle one with pride."
    ],
    [MotivationType.COMPETENCE]: [
        "Your drive for mastery is powerful. What's one small thing you can get 1% better at today?",
        "Celebrate your progress. Look back at a skill you have now that you didn't have a year ago.",
        "Teaching someone else is the ultimate test of competence. Share a piece of your knowledge."
    ],
    [MotivationType.RELATEDNESS]: [
        "Connection is your cornerstone. Reach out to one person today just to see how they're doing.",
        "Meaningful relationships are built on small, consistent moments of presence.",
        "Who in your life makes you feel like you truly belong? Send them a thought of gratitude."
    ],
    [MotivationType.SECURITY]: [
        "Your need for stability is a strength that helps you plan and build. What's one thing you can do today to make your future-self feel more secure?",
        "A sense of security comes from trusting yourself to handle the unexpected.",
        "Organize a small part of your life today—your desk, your inbox—and enjoy the feeling of calm control."
    ],
    [MotivationType.STATUS]: [
        "Your ambition drives you forward. Channel that energy into a task that will earn you respect through excellence.",
        "True status comes from competence and integrity. Let your work speak for itself today.",
        "Acknowledge someone else's achievement. Lifting others up is a mark of a true leader."
    ],
    [MotivationType.NOVELTY]: [
        "Your curiosity is a gift. Learn one new, interesting thing today, just for the fun of it.",
        "Break your routine in one small way. Take a different path, listen to a new genre of music.",
        "What's a new experience you've been putting off? Take the first step towards it."
    ],
  },
  [Language.AR]: {
    [ProfileType.DREAMER]: [
      "خيالك هو أعظم أصولك اليوم. إلى أين يمكن أن يأخذك؟",
      "لا تنس أن تجسد إحدى أفكارك الرائعة في خطوة صغيرة وملموسة.",
      "لحظة من اليقظة يمكن أن تربط عالمك الداخلي بالخارجي. خذ نفسًا عميقًا."
    ],
    [ProfileType.THINKER]: [
      "المنطق أداة قوية، لكن لا تنس أن تتفقد مشاعرك اليوم.",
      "لا بأس إذا لم يكن لكل شيء حل مثالي. تقبل القليل من الغموض.",
      "عقلك التحليلي يحتاج إلى الراحة. خصص بضع دقائق لتكون فقط، لا لتفكر."
    ],
    [ProfileType.DOER]: [
      "الفعل هو قوتك. هل يمكنك التوقف للحظة اليوم للتأكد من أن فعلك يتماشى مع 'لماذا'؟",
      "احتفل بالخطوات الصغيرة، وليس فقط بالنصر النهائي. مجهودك يستحق التقدير.",
      "تذكر، قد يكون الاستماع هو أقوى إجراء تتخذه اليوم."
    ],
    [ProfileType.HEALER]: [
      "أنت تعطي الكثير للآخرين. ما هو فعل الرحمة الذي يمكنك أن تمنحه لنفسك اليوم؟",
      "تعاطفك قوة خارقة. تذكر أن تحميه بحدود صحية.",
      "لا بأس في قول 'لا'. هذا لا يجعلك أقل اهتمامًا."
    ],
    [EmotionalResultCategory.HIGH_REACTIVITY]: [
      "مشاعرك شديدة لأنك تهتم بعمق. اليوم، تدرب على التوقف قبل أن تتفاعل.",
      "لاحظ العلامات الجسدية للعاطفة المتصاعدة. هل يمكنك تسميتها دون حكم؟",
      "رشة ماء بارد أو زفير عميق وبطيء يمكن أن يكون زر إعادة الضبط الخاص بك."
    ],
    [EmotionalResultCategory.BALANCED]: [
      "توازنك قوة. اليوم، لاحظ كيف ترشدك مشاعرك دون أن تسيطر عليك.",
      "تسمية المشاعر: مجرد تسمية الشعور ('هذه خيبة أمل') يمكن أن يقلل من قوته.",
      "أنت تتنقل في عالمك الداخلي جيدًا. شارك هذه القوة الهادئة مع شخص ما اليوم."
    ],
    [EmotionalResultCategory.HIGH_REGULATION]: [
      "هدوؤك هبة. تأكد من أنك لا تزال تسمح لنفسك بأن تشعر حقًا، وليس فقط بالإدارة.",
      "هل تدير شعورًا أم تتجنبه؟ لحظة من التفكير الذاتي الصادق يمكن أن تكون قوية.",
      "التعاطف مع الذات ليس فقط للأوقات الصعبة. كن لطيفًا مع نفسك بشأن مشاعرك 'غير المنطقية' أيضًا."
    ],
    [SelfPerceptionResultCategory.ALIGNED]: [
      "ذاتك الداخلية والخارجية في وئام. عش في تلك الأصالة اليوم.",
      "عزز قيمك. اتخذ إجراءً صغيرًا واحدًا يكون صادقًا 100٪ مع من أنت.",
      "وعيك الذاتي قوي. استخدمه للتواصل بصدق مع الآخرين."
    ],
    [SelfPerceptionResultCategory.MODERATE_DISCREPANCY]: [
      "لاحظ الفجوة الصغيرة بين من أنت ومن تعتقد أنه يجب أن تكون. هل يمكنك أن تكون ألطف قليلاً مع نفسك في تلك المساحة؟",
      "خاطر بخطورة صغيرة اليوم لتتصرف كـ'نفسك الحقيقية' في موقف منخفض المخاطر.",
      "هل الطريقة التي تعتقد أن الآخرين يرونك بها مبنية على أدلة، أم مجرد خوف؟"
    ],
    [SelfPerceptionResultCategory.HIGH_DISCREPANCY]: [
      "تذكر أنك لا تقرأ الأفكار. فالقصة التي تنسجها في عقلك حول رأي الآخرين بك، هي في الغالب انعكاس لمخاوفك أنت.",
      "مارس التعاطف مع الذات. كيف تتحدث إلى صديق يشعر بأنه يساء فهمه؟",
      "فعل صغير من الضعف مع شخص موثوق به يمكن أن يساعد في سد الفجوة بين عالمك الداخلي والخارجي."
    ],
    [MotivationType.AUTONOMY]: [
      "حريتك هي وقودك. ما هو القرار الوحيد الذي يمكنك اتخاذه اليوم، كبيرًا كان أم صغيرًا، ويكون قرارك بالكامل؟",
      "أين تشعر بأنك الأكثر سيطرة على حياتك؟ استند إلى هذا الشعور.",
      "الاستقلالية الحقيقية تعني أيضًا تحمل مسؤولياتك. تعامل مع واحدة منها بفخر."
    ],
    [MotivationType.COMPETENCE]: [
      "دافعك للإتقان قوي. ما هو الشيء الصغير الذي يمكنك أن تتحسن فيه بنسبة 1٪ اليوم؟",
      "احتفل بتقدمك. انظر إلى مهارة تمتلكها الآن لم تكن لديك قبل عام.",
      "تعليم شخص آخر هو الاختبار النهائي للكفاءة. شارك جزءًا من معرفتك."
    ],
    [MotivationType.RELATEDNESS]: [
      "التواصل هو حجر الزاوية لديك. تواصل مع شخص واحد اليوم فقط لترى كيف حاله.",
      "العلاقات ذات المغزى تُبنى على لحظات صغيرة ومتسقة من الحضور.",
      "من في حياتك يجعلك تشعر بأنك تنتمي حقًا؟ أرسل له فكرة امتنان."
    ],
    [MotivationType.SECURITY]: [
      "حاجتك إلى الاستقرار هي قوة تساعدك على التخطيط والبناء. ما هو الشيء الوحيد الذي يمكنك فعله اليوم لتجعل نفسك المستقبلي يشعر بمزيد من الأمان؟",
      "الشعور بالأمان يأتي من ثقتك بنفسك للتعامل مع ما هو غير متوقع.",
      "نظم جزءًا صغيرًا من حياتك اليوم - مكتبك، بريدك الوارد - واستمتع بشعور السيطرة الهادئة."
    ],
    [MotivationType.STATUS]: [
      "طموحك يدفعك إلى الأمام. وجّه تلك الطاقة نحو مهمة ستكسبك الاحترام من خلال التميز.",
      "المكانة الحقيقية تأتي من الكفاءة والنزاهة. دع عملك يتحدث عن نفسه اليوم.",
      "اعترف بإنجاز شخص آخر. رفع الآخرين هو علامة على القائد الحقيقي."
    ],
    [MotivationType.NOVELTY]: [
      "فضولك هبة. تعلم شيئًا جديدًا ومثيرًا للاهتمام اليوم، فقط من أجل المتعة.",
      "اكسر روتينك بطريقة صغيرة واحدة. اسلك طريقًا مختلفًا، استمع إلى نوع جديد من الموسيقى.",
      "ما هي التجربة الجديدة التي كنت تؤجلها؟ اتخذ الخطوة الأولى نحوها."
    ]
  }
};