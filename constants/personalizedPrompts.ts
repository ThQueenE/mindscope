import { Language, ProfileType } from '../types';

type PromptMap = {
  [key in Language]: {
    default: string[];
    [ProfileType.DREAMER]: string[];
    [ProfileType.THINKER]: string[];
    [ProfileType.DOER]: string[];
    [ProfileType.HEALER]: string[];
  };
};

export const personalizedPrompts: PromptMap = {
  [Language.EN]: {
    default: [
      "What is one thing you are grateful for today?",
      "How can you be kinder to yourself today?",
      "What is a challenge you're facing and how can you approach it with curiosity?",
      "What brought you a moment of simple joy today?",
      "Describe a feeling you experienced today, without judgment."
    ],
    [ProfileType.DREAMER]: [
      "What was the most inspiring idea you encountered today?",
      "If you could paint a picture of your current feelings, what would it look like?",
      "What's a small step you can take to bring a big dream closer to reality?",
      "Describe a moment today that felt magical or meaningful.",
    ],
    [ProfileType.THINKER]: [
      "What was the most interesting problem you thought about today?",
      "Write down a complex thought and try to simplify it into one clear sentence.",
      "What new piece of information did you learn today, and how does it connect to what you already know?",
      "What is a belief you hold that you could challenge from a different logical perspective?",
    ],
    [ProfileType.DOER]: [
      "What tangible step, big or small, did you take towards a goal today?",
      "Describe a moment when you felt most effective or productive.",
      "What is one task you completed that you're proud of?",
      "How did you turn an intention into an action today?",
    ],
    [ProfileType.HEALER]: [
      "In what way did you offer support or compassion to someone else today?",
      "Describe a moment where you felt a strong connection with another person.",
      "What is one act of kindness you can offer yourself right now?",
      "How did you protect your peace or energy today?",
    ],
  },
  [Language.AR]: {
    default: [
      "ما هو الشيء الوحيد الذي تشعر بالامتنان له اليوم؟",
      "كيف يمكنك أن تكون أكثر لطفاً مع نفسك اليوم؟",
      "ما هو التحدي الذي تواجهه وكيف يمكنك التعامل معه بفضول؟",
      "ما الذي جلب لك لحظة من الفرح البسيط اليوم؟",
      "صِف شعوراً مررت به اليوم، دون إصدار أحكام."
    ],
    [ProfileType.DREAMER]: [
      "ما هي أكثر فكرة ملهمة واجهتها اليوم؟",
      "إذا كان بإمكانك رسم لوحة لمشاعرك الحالية، كيف ستبدو؟",
      "ما هي الخطوة الصغيرة التي يمكنك اتخاذها لتقريب حلم كبير من الواقع؟",
      "صِف لحظة اليوم التي شعرت فيها بالسحر أو المعنى.",
    ],
    [ProfileType.THINKER]: [
      "ما هي أكثر مشكلة مثيرة للاهتمام فكرت فيها اليوم؟",
      "دوّن فكرة معقدة وحاول تبسيطها في جملة واحدة واضحة.",
      "ما هي المعلومة الجديدة التي تعلمتها اليوم، وكيف ترتبط بما تعرفه بالفعل؟",
      "ما هو المعتقد الذي تتبناه ويمكنك تحديه من منظور منطقي مختلف؟",
    ],
    [ProfileType.DOER]: [
      "ما هي الخطوة الملموسة، كبيرة كانت أم صغيرة، التي اتخذتها نحو تحقيق هدف اليوم؟",
      "صِف لحظة شعرت فيها بأنك الأكثر فعالية أو إنتاجية.",
      "ما هي المهمة الواحدة التي أنجزتها وتفخر بها؟",
      "كيف حولت نية إلى فعل اليوم؟",
    ],
    [ProfileType.HEALER]: [
      "بأي طريقة قدمت الدعم أو التعاطف لشخص آخر اليوم؟",
      "صِف لحظة شعرت فيها بارتباط قوي مع شخص آخر.",
      "ما هو فعل اللطف الوحيد الذي يمكنك أن تقدمه لنفسك الآن؟",
      "كيف حميت سلامك أو طاقتك اليوم؟",
    ],
  },
};
