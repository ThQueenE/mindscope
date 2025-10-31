import { EmotionalTestDataStructure, Language } from '../types';

export const emotionalTestData: EmotionalTestDataStructure = {
  [Language.EN]: {
    testName: 'Emotional Triggers Test',
    testDescription: 'What sparks your strongest feelings?',
    ui: {
      questionPrefix: 'Q',
      calculating: 'Analyzing Your Patterns...',
      backToMainMenu: 'Main Menu',
      backToMenu: 'Back to Menu',
      getPlan: "Start Growth Journey",
      scoreReactivity: 'Reactivity Score',
      scoreRegulation: 'Regulation Score',
      tipsTitle: 'Evidence-Based Tips for Growth',
      share: 'Share My Result',
      sharingResult: 'Sharing your result:',
      shareTitle: "My 'Emotional Triggers' Result",
      shareText: "I took the 'Emotional Triggers Test' and my result is '{resultLabel}'! Find out your emotional pattern.",
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
            question: "You receive unexpected, harsh criticism at work. What is your immediate inner response?",
            options: [
                { text: "Feel a hot surge of anger or shame; replay the comment in my head.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Try to immediately understand the logic behind the criticism.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Force myself to think about something else to avoid feeling bad.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Make a mental note to discuss it with a trusted colleague later.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "Source: Emotional Reactivity, Eisenberger et al. (2003) on social rejection"
        },
        {
            id: 2,
            question: "A plan you were excited about gets cancelled at the last minute. You...",
            options: [
                { text: "Feel deeply frustrated and let it ruin your mood for the rest of the day.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Feel disappointed, but quickly start thinking about alternative plans.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Pretend it doesn't bother you, even though it does.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Vent your frustration to a friend.", scores: { reactivity: 1, regulation: 2 } }
            ],
            source: "Source: Cognitive Reappraisal, Gross's Emotion Regulation Model (1998)"
        },
        {
            id: 3,
            question: "When you feel overwhelmed by anxiety about the future, what's your go-to strategy?",
            options: [
                { text: "Get lost in catastrophic 'what-if' scenarios.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Focus on my breath and ground myself in the present moment.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Watch TV or scroll social media to numb the feeling.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Break down the future worry into small, manageable steps.", scores: { reactivity: 0, regulation:2 } }
            ],
            source: "Source: Attentional Deployment, Sheppes et al. (2011) on regulation choice"
        },
        {
            id: 4,
            question: "Someone cuts you off in traffic. Your first reaction is to:",
            options: [
                { text: "Yell, honk the horn, and feel angry for the next several minutes.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Assume they might be in a hurry for an emergency and let it go.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Grip the steering wheel tightly but say nothing.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Turn up the music to improve your mood.", scores: { reactivity: 0, regulation: 1 } }
            ],
            source: "Source: Impulse Control, Mischel's work on delayed gratification"
        },
        {
            id: 5,
            question: "You feel a wave of sadness coming on. You tend to:",
            options: [
                { text: "Let it consume you completely.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Allow yourself to feel it, name the emotion, and let it pass.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Tell yourself to 'snap out of it' and ignore it.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Call a loved one for comfort.", scores: { reactivity: 1, regulation: 2 } }
            ],
            source: "Source: Emotional Acceptance, Hayes (1999), Acceptance and Commitment Therapy"
        },
        {
            id: 6,
            question: "When you're in a heated argument, are you more likely to:",
            options: [
                { text: "Say things you later regret.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Suggest taking a break to cool down before continuing.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Shut down completely and refuse to speak (stonewalling).", scores: { reactivity: 1, regulation: 0 } },
                { text: "Try to see the situation from the other person's perspective.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "Source: Conflict Regulation, Gottman's research on marital stability"
        },
        {
            id: 7,
            question: "You see a sentimental post online that makes you feel emotional in public. You...",
            options: [
                { text: "Feel embarrassed and quickly try to hide any sign of emotion.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Acknowledge the feeling internally and smile, not worried if others notice.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Become visibly teary-eyed, unable to control the reaction.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Share the post with a friend who would understand.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "Source: Expressive Suppression, Gross & John (2003)"
        },
        {
            id: 8,
            question: "After a long, stressful week, how do you recharge?",
            options: [
                { text: "Ruminate on all the things that went wrong.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Engage in a hobby that I find calming and restorative, like gardening or painting.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Go out and party to blow off steam, sometimes to excess.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Spend quality, quiet time with people I trust.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "Source: Situation Selection, Gross's Emotion Regulation Model (1998)"
        },
        {
            id: 9,
            question: "You're working on a frustrating task and keep failing. You are most likely to:",
            options: [
                { text: "Give up in a fit of anger and frustration.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Take a short break and come back to it with a fresh perspective.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Push through relentlessly, getting more and more stressed.", scores: { reactivity: 1, regulation: 0 } },
                { text: "Ask a colleague for help or a different point of view.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "Source: Frustration Tolerance, Ellis's work in REBT"
        },
        {
            id: 10,
            question: "When you feel happy and excited, you:",
            options: [
                { text: "Feel it intensely, but it often leads to impulsive decisions.", scores: { reactivity: 1, regulation: 0 } },
                { text: "Savor the moment and share my joy with others.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Downplay it, worried that it won't last.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Channel that energy into productive or creative work.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "Source: Positive Affect Regulation, Fredrickson's Broaden-and-Build Theory (2001)"
        },
        {
            id: 11,
            question: "Thinking about a past mistake fills you with guilt. You...",
            options: [
                { text: "Get stuck in a cycle of self-blame.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Acknowledge the feeling, reflect on the lesson learned, and practice self-forgiveness.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Blame others or the circumstances for the mistake.", scores: { reactivity: 1, regulation: 0 } },
                { text: "Try to do something good to 'make up' for it.", scores: { reactivity: 0, regulation: 1 } }
            ],
            source: "Source: Cognitive Reappraisal, Pennebaker's work on expressive writing"
        },
        {
            id: 12,
            question: "When a friend shares their exciting news, you feel:",
            options: [
                { text: "A pang of envy or comparison if their success highlights my own perceived failures.", scores: { reactivity: 2, regulation: 0 } },
                { text: "Genuine, wholehearted happiness for them.", scores: { reactivity: 0, regulation: 2 } },
                { text: "Neutral, it doesn't really affect me.", scores: { reactivity: 1, regulation: 1 } },
                { text: "Happy for them, and motivated to pursue my own goals.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "Source: Empathic Joy vs. Envy, Smith & Kim (2007) on social comparison"
        }
    ],
    scoring: {
      thresholds: {
        high_reactivity: { condition: (reactivity, regulation) => reactivity > regulation + 5 },
        high_regulation: { condition: (reactivity, regulation) => regulation > reactivity + 5 },
      }
    },
    results: {
      high_reactivity: {
        label: "High Reactivity",
        description: "Your responses suggest a tendency to experience emotions intensely and immediately. While this can mean deep passion and empathy, it may also lead to feeling overwhelmed, impulsive reactions, and lingering negative moods.",
        tips: [
          { tip: "Practice the 'PAUSE' Skill: When triggered, Pause before acting. Take a step back. Observe what you're feeling. Proceed mindfully with a chosen response.", citation: "see Linehan, DBT techniques" },
          { tip: "Use Temperature Change: To quickly calm down during intense distress, splash your face with cold water or hold an ice cube. This activates the 'dive reflex,' slowing your heart rate.", citation: "see Polyvagal Theory application" },
          { tip: "Grounding Exercise (5-4-3-2-1): Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This pulls you from emotional turmoil into the present moment.", citation: "common CBT/DBT grounding technique" }
        ]
      },
      balanced: {
        label: "Balanced",
        description: "Your responses indicate a healthy balance between feeling your emotions and managing them effectively. You can experience a full range of feelings but are typically able to respond to situations thoughtfully rather than impulsively.",
        tips: [
          { tip: "Label Your Emotions (Affect Labeling): Instead of just 'bad', get specific: 'I feel disappointed,' 'I feel anxious.' Naming the emotion can reduce its intensity.", citation: "see Lieberman et al., 2007, fMRI studies" },
          { tip: "Schedule 'Worry Time': Set aside 15 minutes a day to intentionally think about your worries. When a worry comes up outside this time, jot it down and 'postpone' it. This contains rumination.", citation: "a common Cognitive Behavioral Therapy (CBT) technique" },
          { tip: "Practice Cognitive Reappraisal: Ask yourself: 'Is there another way to look at this situation?' or 'What could I learn from this?' Actively looking for alternative interpretations changes your emotional response.", citation: "see Gross, 1998; Beck, Cognitive Therapy" }
        ]
      },
      high_regulation: {
        label: "High Regulation",
        description: "Your responses suggest a strong ability to manage your emotional responses. You are likely seen as calm, rational, and level-headed. The key is to ensure this regulation isn't slipping into suppression, where you might be disconnected from your authentic feelings.",
        tips: [
          { tip: "Check for Emotional Suppression: Ask yourself: 'Am I avoiding this feeling or truly managing it?' Allow yourself to feel negative emotions without judgment; they provide important information.", citation: "see Gross & John, 2003 on costs of suppression" },
          { tip: "Practice Self-Compassion: High regulators can sometimes be overly critical of their own 'irrational' feelings. Treat yourself with the same kindness you would offer a friend who is struggling.", citation: "see Kristin Neff's work on self-compassion" },
          { tip: "Increase Positive Affect: Don't just manage the negative; actively cultivate the positive. Intentionally savor small joys, practice gratitude, and share good news with others to broaden and build your emotional resources.", citation: "see Fredrickson, 2001, Broaden-and-Build Theory" }
        ]
      }
    }
  },
  [Language.AR]: {
    testName: 'مُحفزاتي العاطفية',
    testDescription: 'اكتشف ما يثير أقوى مشاعرك.',
    ui: {
      questionPrefix: 'س',
      calculating: 'جارٍ تحليل أنماطك...',
      backToMainMenu: 'القائمة الرئيسية',
      backToMenu: 'العودة للقائمة',
      getPlan: "ابدأ رحلة النمو",
      scoreReactivity: 'درجة التفاعلية',
      scoreRegulation: 'درجة التنظيم',
      tipsTitle: 'نصائح للنمو الذاتي',
      share: 'مشاركة نتيجتي',
      sharingResult: 'تتم مشاركة نتيجتك:',
      shareTitle: "نتيجتي في 'محفزاتي العاطفية'",
      shareText: "لقد أجريت 'اختبار محفزاتي العاطفية' وكانت نتيجتي '{resultLabel}'! اكتشف نمطك العاطفي.",
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
            question: "تلقيت نقدًا قاسيًا وغير متوقع في العمل. ما هي استجابتك الداخلية الفورية؟",
            options: [
                { text: "أشعر بموجة حارة من الغضب أو الخجل؛ وأعيد تكرار التعليق في رأسي.", scores: { reactivity: 2, regulation: 0 } },
                { text: "أحاول على الفور فهم المنطق وراء النقد.", scores: { reactivity: 0, regulation: 2 } },
                { text: "أجبر نفسي على التفكير في شيء آخر لتجنب الشعور بالسوء.", scores: { reactivity: 1, regulation: 1 } },
                { text: "أسجل ملاحظة ذهنية لمناقشتها مع زميل موثوق به لاحقًا.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "المصدر: التفاعلية العاطفية، أيزنبرجر وآخرون (2003) حول الرفض الاجتماعي"
        },
        {
            id: 2,
            question: "تم إلغاء خطة كنت متحمسًا لها في اللحظة الأخيرة. أنت...",
            options: [
                { text: "تشعر بالإحباط الشديد وتدع ذلك يفسد مزاجك لبقية اليوم.", scores: { reactivity: 2, regulation: 0 } },
                { text: "تشعر بخيبة أمل، لكنك تبدأ بسرعة في التفكير في خطط بديلة.", scores: { reactivity: 0, regulation: 2 } },
                { text: "تتظاهر بأن الأمر لا يزعجك، على الرغم من أنه يزعجك.", scores: { reactivity: 1, regulation: 1 } },
                { text: "تعبر عن إحباطك لصديق.", scores: { reactivity: 1, regulation: 2 } }
            ],
            source: "المصدر: إعادة التقييم المعرفي، نموذج تنظيم العاطفة لغروس (1998)"
        },
        {
            id: 3,
            question: "عندما تشعر بالإرهاق من القلق بشأن المستقبل، ما هي استراتيجيتك المفضلة؟",
            options: [
                { text: "أغرق في سيناريوهات كارثية 'ماذا لو'.", scores: { reactivity: 2, regulation: 0 } },
                { text: "أركز على أنفاسي وأثبت نفسي في اللحظة الحالية.", scores: { reactivity: 0, regulation: 2 } },
                { text: "أشاهد التلفزيون أو أتصفح وسائل التواصل الاجتماعي لتخدير الشعور.", scores: { reactivity: 1, regulation: 1 } },
                { text: "أقوم بتقسيم القلق المستقبلي إلى خطوات صغيرة يمكن التحكم فيها.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "المصدر: نشر الانتباه، شيبيس وآخرون (2011) حول اختيار تنظيم العاطفة"
        },
        {
            id: 4,
            question: "شخص ما يقطع عليك الطريق في حركة المرور. رد فعلك الأول هو:",
            options: [
                { text: "الصراخ، إطلاق بوق السيارة، والشعور بالغضب لعدة دقائق تالية.", scores: { reactivity: 2, regulation: 0 } },
                { text: "أفترض أنهم قد يكونون في عجلة من أمرهم لحالة طارئة وأترك الأمر.", scores: { reactivity: 0, regulation: 2 } },
                { text: "أقبض على عجلة القيادة بقوة ولكن لا أقول شيئًا.", scores: { reactivity: 1, regulation: 1 } },
                { text: "أرفع صوت الموسيقى لتحسين مزاجي.", scores: { reactivity: 0, regulation: 1 } }
            ],
            source: "المصدر: التحكم في الانفعالات، عمل ميشيل حول تأجيل الإشباع"
        },
        {
            id: 5,
            question: "تشعر بموجة من الحزن قادمة. تميل إلى:",
            options: [
                { text: "دعها تستهلكك بالكامل.", scores: { reactivity: 2, regulation: 0 } },
                { text: "اسمح لنفسك بالشعور بها، قم بتسمية العاطفة، ودعها تمر.", scores: { reactivity: 0, regulation: 2 } },
                { text: "أقول لنفسي 'تماسك' وأتجاهلها.", scores: { reactivity: 1, regulation: 1 } },
                { text: "أتصل بأحد الأحباء للحصول على الراحة.", scores: { reactivity: 1, regulation: 2 } }
            ],
            source: "المصدر: القبول العاطفي، هايز (1999)، علاج القبول والالتزام"
        },
        {
            id: 6,
            question: "عندما تكون في جدال حاد، هل من المرجح أن:",
            options: [
                { text: "تقول أشياء تندم عليها لاحقًا.", scores: { reactivity: 2, regulation: 0 } },
                { text: "تقترح أخذ استراحة لتهدأ قبل المتابعة.", scores: { reactivity: 0, regulation: 2 } },
                { text: "تنغلق تمامًا وترفض التحدث (المماطلة).", scores: { reactivity: 1, regulation: 0 } },
                { text: "تحاول رؤية الموقف من وجهة نظر الشخص الآخر.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "المصدر: تنظيم النزاع، بحث غوتمان حول استقرار الزواج"
        },
        {
            id: 7,
            question: "ترى منشورًا عاطفيًا على الإنترنت يجعلك تشعر بالعاطفة في الأماكن العامة. أنت...",
            options: [
                { text: "تشعر بالحرج وتحاول بسرعة إخفاء أي علامة على العاطفة.", scores: { reactivity: 1, regulation: 1 } },
                { text: "تعترف بالشعور داخليًا وتبتسم، غير قلق إذا لاحظ الآخرون.", scores: { reactivity: 0, regulation: 2 } },
                { text: "تدمع عيناك بشكل واضح، غير قادر على التحكم في رد الفعل.", scores: { reactivity: 2, regulation: 0 } },
                { text: "تشارك المنشور مع صديق يمكنه أن يفهم.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "المصدر: الكبت التعبيري، غروس وجون (2003)"
        },
        {
            id: 8,
            question: "بعد أسبوع طويل ومجهد، كيف تعيد شحن طاقتك؟",
            options: [
                { text: "أجتر كل الأشياء التي سارت بشكل خاطئ.", scores: { reactivity: 2, regulation: 0 } },
                { text: "أمارس هواية أجدها مهدئة ومجددة، مثل البستنة أو الرسم.", scores: { reactivity: 0, regulation: 2 } },
                { text: "أخرج للاحتفال للتنفيس، وأحيانًا إلى حد الإفراط.", scores: { reactivity: 1, regulation: 1 } },
                { text: "أقضي وقتًا هادئًا وممتعًا مع أشخاص أثق بهم.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "المصدر: اختيار الموقف، نموذج تنظيم العاطفة لغروس (1998)"
        },
        {
            id: 9,
            question: "أنت تعمل على مهمة محبطة وتفشل باستمرار. من المرجح أن:",
            options: [
                { text: "تستسلم في نوبة من الغضب والإحباط.", scores: { reactivity: 2, regulation: 0 } },
                { text: "تأخذ استراحة قصيرة وتعود إليها بمنظور جديد.", scores: { reactivity: 0, regulation: 2 } },
                { text: "تضغط على نفسك بلا هوادة، وتزداد توترًا.", scores: { reactivity: 1, regulation: 0 } },
                { text: "تطلب المساعدة من زميل أو وجهة نظر مختلفة.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "المصدر: تحمل الإحباط، عمل إليس في العلاج السلوكي الانفعالي العقلاني"
        },
        {
            id: 10,
            question: "عندما تشعر بالسعادة والحماس، أنت:",
            options: [
                { text: "تشعر به بشكل مكثف، ولكنه غالبًا ما يؤدي إلى قرارات متهورة.", scores: { reactivity: 1, regulation: 0 } },
                { text: "تستمتع باللحظة وتشارك فرحتي مع الآخرين.", scores: { reactivity: 0, regulation: 2 } },
                { text: "أقلل من شأنه، قلقًا من أنه لن يدوم.", scores: { reactivity: 1, regulation: 1 } },
                { text: "أوجه تلك الطاقة إلى عمل منتج أو إبداعي.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "المصدر: تنظيم التأثير الإيجابي، نظرية التوسيع والبناء لفريدريكسون (2001)"
        },
        {
            id: 11,
            question: "التفكير في خطأ سابق يملؤك بالذنب. أنت...",
            options: [
                { text: "أعلق في دائرة من لوم الذات.", scores: { reactivity: 2, regulation: 0 } },
                { text: "أعترف بالشعور، وأتأمل في الدرس المستفاد، وأمارس مسامحة الذات.", scores: { reactivity: 0, regulation: 2 } },
                { text: "ألوم الآخرين أو الظروف على الخطأ.", scores: { reactivity: 1, regulation: 0 } },
                { text: "أحاول أن أفعل شيئًا جيدًا 'للتعويض' عنه.", scores: { reactivity: 0, regulation: 1 } }
            ],
            source: "المصدر: إعادة التقييم المعرفي، عمل بينيبيكر حول الكتابة التعبيرية"
        },
        {
            id: 12,
            question: "عندما يشاركك صديق أخباره المثيرة، تشعر بـ:",
            options: [
                { text: "وخزة من الحسد أو المقارنة إذا كان نجاحه يسلط الضوء على إخفاقاتي المتصورة.", scores: { reactivity: 2, regulation: 0 } },
                { text: "سعادة حقيقية وصادقة من أجله.", scores: { reactivity: 0, regulation: 2 } },
                { text: "محايد، لا يؤثر علي حقًا.", scores: { reactivity: 1, regulation: 1 } },
                { text: "سعيد من أجله، ومتحمس لمتابعة أهدافي الخاصة.", scores: { reactivity: 0, regulation: 2 } }
            ],
            source: "المصدر: الفرح التعاطفي مقابل الحسد، سميث وكيم (2007) حول المقارنة الاجتماعية"
        }
    ],
    scoring: {
        thresholds: {
          high_reactivity: { condition: (reactivity, regulation) => reactivity > regulation + 5 },
          high_regulation: { condition: (reactivity, regulation) => regulation > reactivity + 5 },
        }
    },
    results: {
        high_reactivity: {
          label: "تفاعلية عالية",
          description: "يبدو أن لديك ميلًا لتجربة المشاعر بعمق وبشكل فوري. ورغم أن هذا قد يعكس شغفًا وتعاطفًا كبيرين، إلا أنه قد يؤدي أحيانًا إلى الشعور بالإرهاق، أو إلى ردود فعل مندفعة، أو استمرار المشاعر السلبية لفترة أطول.",
          tips: [
            { tip: "مارس مهارة 'التوقف': عند إثارتك، توقف قبل التصرف. خذ خطوة إلى الوراء. راقب ما تشعر به. ثم اختر استجابتك بوعي.", citation: "المصدر: تقنيات العلاج السلوكي الجدلي (DBT)" },
            { tip: "استخدم تغيير درجة الحرارة: لتهدأ بسرعة أثناء الضيق الشديد، اغسل وجهك بالماء البارد أو امسك مكعب ثلج. هذا ينشط 'منعكس الغوص'، مما يبطئ معدل ضربات قلبك.", citation: "المصدر: تطبيقات نظرية العصب المبهم (Polyvagal Theory)" },
            { tip: "تمرين التجذير (5-4-3-2-1): سمِّ 5 أشياء يمكنك رؤيتها، 4 يمكنك لمسها، 3 يمكنك سماعها، 2 يمكنك شمها، و 1 يمكنك تذوقه. هذا يسحبك من الاضطراب العاطفي إلى اللحظة الحالية.", citation: "المصدر: تقنيات التجذير في العلاج السلوكي المعرفي/الجدلي" }
          ]
        },
        balanced: {
          label: "متوازن",
          description: "تشير إجاباتك إلى توازن صحي بين الشعور بمشاعرك وإدارتها بفعالية. يمكنك تجربة مجموعة كاملة من المشاعر ولكنك عادة ما تكون قادرًا على الاستجابة للمواقف بتفكير بدلاً من الاندفاع.",
          tips: [
            { tip: "سمِّ مشاعرك (تسمية التأثير): بدلاً من مجرد 'سيئ'، كن محددًا: 'أشعر بخيبة أمل'، 'أشعر بالقلق'. تسمية العاطفة يمكن أن تقلل من حدتها.", citation: "المصدر: دراسات ليبرمان وآخرون (2007) بالرنين المغناطيسي الوظيفي" },
            { tip: "جدول 'وقت القلق': خصص 15 دقيقة يوميًا للتفكير عمدًا في مخاوفك. عندما يظهر قلق خارج هذا الوقت، دونه و'أجله'. هذا يحتوي على الاجترار.", citation: "المصدر: تقنية شائعة في العلاج السلوكي المعرفي (CBT)" },
            { tip: "مارس إعادة التقييم المعرفي: اسأل نفسك: 'هل هناك طريقة أخرى للنظر إلى هذا الموقف؟' أو 'ماذا يمكنني أن أتعلم من هذا؟' البحث بنشاط عن تفسيرات بديلة يغير استجابتك العاطفية.", citation: "المصدر: غروس (1998)؛ بيك، العلاج المعرفي" }
          ]
        },
        high_regulation: {
          label: "قدرة عالية على التنظيم",
          description: "تشير إجاباتك إلى قدرة قوية على إدارة استجاباتك العاطفية. من المحتمل أن يُنظر إليك على أنك هادئ وعقلاني ومتزن. المفتاح هو التأكد من أن هذا التنظيم لا يتحول إلى كبت، حيث قد تكون منفصلاً عن مشاعرك الحقيقية.",
          tips: [
            { tip: "تحقق من الكبت العاطفي: اسأل نفسك: 'هل أتجنب هذا الشعور أم أديره حقًا؟' اسمح لنفسك بالشعور بالمشاعر السلبية دون حكم؛ فهي توفر معلومات مهمة.", citation: "المصدر: غروس وجون (2003) حول تكاليف الكبت" },
            { tip: "مارس التعاطف مع الذات: يمكن للمنظمين العاليين أحيانًا أن يكونوا نقديين للغاية تجاه مشاعرهم 'غير العقلانية'. عامل نفسك بنفس اللطف الذي تقدمه لصديق يعاني.", citation: "المصدر: أبحاث كريستين نيف حول التعاطف مع الذات" },
            { tip: "زد من التأثير الإيجابي: لا تدير السلبيات فقط؛ بل قم بتنمية الإيجابيات بنشاط. استمتع عمدًا بالأفراح الصغيرة، مارس الامتنان، وشارك الأخبار الجيدة مع الآخرين لتوسيع وبناء مواردك العاطفية.", citation: "المصدر: نظرية التوسيع والبناء، فريدريكسون (2001)" }
          ]
        }
    }
  }
};