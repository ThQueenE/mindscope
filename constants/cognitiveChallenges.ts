import { CognitiveChallengeDataStructure, Language } from '../types';

export const cognitiveChallengeData: CognitiveChallengeDataStructure = {
  [Language.EN]: {
    challenges: [
      {
        question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
        category: "Word Riddle",
        hint: "Think about something that represents places but isn't real.",
        options: ["A globe", "A map", "A dream"],
        correctAnswerIndex: 1,
        answer: "A map. It visually represents geographical features like cities and mountains without containing the physical objects themselves.",
      },
      {
        question: "A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the portrait?",
        category: "Lateral Thinking",
        hint: "The man is describing a family relationship. Think about who 'my father's son' is to him.",
        options: ["Himself", "His father", "His son"],
        correctAnswerIndex: 2,
        answer: "His son. 'My father's son' can only be the man himself (since he has no brothers). So, the statement becomes 'that man's father is me,' making the man in the portrait his son.",
      },
      {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        category: "Word Riddle",
        hint: "This riddle is about letters, not time itself.",
        options: ["The letter 'O'", "The future", "The letter 'M'"],
        correctAnswerIndex: 2,
        answer: "The letter 'M'. It appears once in the word 'minute', twice in 'moment', and not at all in 'a thousand years'.",
      },
      {
        question: "The more you take, the more you leave behind. What am I?",
        category: "Lateral Thinking",
        hint: "This has to do with movement.",
        options: ["Memories", "Footsteps", "Holes"],
        correctAnswerIndex: 1,
        answer: "Footsteps. Every step you take creates a footprint that you leave behind.",
      },
      {
        question: "What has an eye, but cannot see?",
        category: "Word Riddle",
        hint: "It's a common household object used for sewing.",
        options: ["A needle", "A potato", "A storm"],
        correctAnswerIndex: 0,
        answer: "A needle. It has an 'eye' through which thread is passed, but it has no vision.",
      },
      {
        question: "I have a neck without a head, and a body without legs. What am I?",
        category: "Word Riddle",
        hint: "You can fill me up, but I am often empty.",
        options: ["A bottle", "A snake", "A shirt"],
        correctAnswerIndex: 0,
        answer: "A bottle. It has a neck and a body, but no head or legs.",
      },
      {
        question: "A man pushes his car to a hotel and tells the owner he's bankrupt. Why?",
        category: "Lateral Thinking",
        hint: "Think about games, not real life.",
        options: ["He crashed his car", "He's playing Monopoly", "He's a professional car pusher"],
        correctAnswerIndex: 1,
        answer: "He's playing Monopoly. His game piece is the car, and landing on a property with a hotel that he can't afford bankrupts him.",
      },
      {
        question: "What is full of holes but still holds water?",
        category: "Word Riddle",
        hint: "It gets wetter as it dries.",
        options: ["A net", "A sponge", "A cloud"],
        correctAnswerIndex: 1,
        answer: "A sponge. Its porous structure allows it to absorb and hold liquids despite being full of holes.",
      },
      {
        question: "I am always hungry, I must always be fed. The finger I lick will soon turn red. What am I?",
        category: "Lateral Thinking",
        hint: "I am a powerful element, both creative and destructive.",
        options: ["A baby", "Rust", "Fire"],
        correctAnswerIndex: 2,
        answer: "Fire. It consumes fuel ('is always hungry'), and touching it ('licking a finger') causes a burn ('will soon turn red').",
      }
    ]
  },
  [Language.AR]: {
    challenges: [
      {
        question: "لدي مدن، ولكن لا بيوت. لدي جبال، ولكن لا أشجار. لدي ماء، ولكن لا أسماك. فما أنا؟",
        category: "لغز كلمات",
        hint: "فكر في شيء يمثل الأماكن ولكنه ليس حقيقيًا.",
        options: ["كرة أرضية", "خريطة", "حلم"],
        correctAnswerIndex: 1,
        answer: "الخريطة. إنها تمثل بصريًا المعالم الجغرافية مثل المدن والجبال دون أن تحتوي على الأشياء المادية نفسها.",
      },
      {
        question: "رجل ينظر إلى لوحة. سأله شخص ما عن صاحب اللوحة التي ينظر إليها. فأجاب: 'ليس لدي إخوة أو أخوات، لكن والد ذلك الرجل هو ابن أبي'. فمن في اللوحة؟",
        category: "تفكير جانبي",
        hint: "الرجل يصف علاقة عائلية. فكر في من يكون 'ابن أبي' بالنسبة له.",
        options: ["نفسه", "والده", "ابنه"],
        correctAnswerIndex: 2,
        answer: "ابنه. 'ابن أبي' يمكن أن يكون الرجل نفسه فقط (لأنه ليس لديه إخوة). لذا، تصبح العبارة 'والد ذلك الرجل هو أنا'، مما يجعل الرجل في اللوحة ابنه.",
      },
      {
        question: "ما هو الشيء الذي يمشي بلا رجلين ويبكي بلا عينين؟",
        category: "لغز",
        hint: "أنا صديق السماء.",
        options: ["الريح", "السحابة", "النهر"],
        correctAnswerIndex: 1,
        answer: "السحابة. هي التي تمشي في السماء (بلا أرجل) و 'تبكي' بالمطر (بلا أعين).",
      },
      {
        question: "كلما أخذت منه أكثر، تركت وراءك أكثر. فما أنا؟",
        category: "تفكير جانبي",
        hint: "الأمر يتعلق بالحركة.",
        options: ["ذكريات", "خطوات", "حفر"],
        correctAnswerIndex: 1,
        answer: "الخطوات. كل خطوة تخطوها تترك وراءها أثرًا.",
      },
      {
        question: "ما هو الشيء الذي له عين، ولكنه لا يرى؟",
        category: "لغز كلمات",
        hint: "هو أداة منزلية شائعة تستخدم للخياطة.",
        options: ["إبرة", "بطاطس", "عاصفة"],
        correctAnswerIndex: 0,
        answer: "الإبرة. لها 'عين' يمر من خلالها الخيط، لكنها لا تبصر.",
      },
      {
        question: "لدي رقبة بلا رأس، وجسم بلا أرجل. فما أنا؟",
        category: "لغز كلمات",
        hint: "يمكنك أن تملأني، لكني غالبًا ما أكون فارغة.",
        options: ["زجاجة", "ثعبان", "قميص"],
        correctAnswerIndex: 0,
        answer: "الزجاجة. لها رقبة وجسم، لكن لا رأس لها ولا أرجل.",
      },
      {
        question: "رجل يدفع سيارته إلى فندق ويخبر المالك أنه مفلس. لماذا؟",
        category: "تفكير جانبي",
        hint: "فكر في الألعاب اللوحية الشهيرة.",
        options: ["لقد حطم سيارته", "إنه يلعب مونوبولي", "إنه دافع سيارات محترف"],
        correctAnswerIndex: 1,
        answer: "إنه يلعب مونوبولي. قطعة اللعب الخاصة به هي السيارة، والوصول إلى عقار به فندق لا يستطيع تحمل تكلفته يجعله يفلس.",
      },
      {
        question: "ما هو الشيء المليء بالثقوب ولكنه لا يزال يحتفظ بالماء؟",
        category: "لغز كلمات",
        hint: "يصبح أكثر رطوبة كلما جفف.",
        options: ["شبكة", "إسفنجة", "سحابة"],
        correctAnswerIndex: 1,
        answer: "الإسفنجة. تركيبتها المسامية تسمح لها بامتصاص السوائل والاحتفاظ بها على الرغم من كونها مليئة بالثقوب.",
      },
      {
        question: "أنا دائمًا جائع، ويجب أن أُطعم دائمًا. الإصبع الذي ألعقه سرعان ما يحمر. فما أنا؟",
        category: "تفكير جانبي",
        hint: "أنا عنصر قوي، خلاق ومدمر في آن واحد.",
        options: ["طفل رضيع", "صدأ", "نار"],
        correctAnswerIndex: 2,
        answer: "النار. إنها تستهلك الوقود ('دائمًا جائعة')، ولمسها ('لعق إصبع') يسبب حرقًا ('سرعان ما يحمر').",
      }
    ]
  }
};