import { Language, PsychologicalTerm } from '../types';

export const psychologicalTerms: Record<Language, PsychologicalTerm[]> = {
  [Language.EN]: [
    {
      term: "Sonder",
      definition: "The profound feeling of realizing that every random passerby is living a life as vivid and complex as your own.",
      question: "How does this realization change the way you see strangers in a crowd?"
    },
    {
      term: "Cognitive Dissonance",
      definition: "The mental discomfort experienced when holding two or more contradictory beliefs, ideas, or values, or when a belief is contradicted by a new action.",
      question: "Can you recall a time you felt this inner conflict? What was it about?"
    },
    {
      term: "Impostor Syndrome",
      definition: "An internal experience of believing that you are not as competent as others perceive you to be, often accompanied by a fear of being exposed as a 'fraud'.",
      question: "In which moments of success have you felt this feeling the strongest?"
    },
    {
        term: "Limerence",
        definition: "A state of profound, obsessive romantic infatuation with another person, characterized by intrusive thoughts and an intense desire for reciprocation.",
        question: "How does this differ from what society typically calls 'love'?"
    }
  ],
  [Language.AR]: [
    {
      term: "Sonder (سوندر)",
      definition: "الشعور العميق بالإدراك بأن كل عابر سبيل عشوائي يعيش حياة حية ومعقدة تمامًا مثل حياتك.",
      question: "كيف يغير هذا الإدراك طريقة رؤيتك للغرباء في الزحام؟"
    },
    {
      term: "التنافر المعرفي",
      definition: "الانزعاج العقلي الذي يُعاش عند اعتناق معتقدين أو أكثر متناقضين، أو عندما يتعارض معتقد مع سلوك جديد.",
      question: "هل يمكنك تذكر مرة شعرت فيها بهذا الصراع الداخلي؟ ماذا كان الموقف؟"
    },
    {
      term: "متلازمة المحتال",
      definition: "تجربة داخلية تتمثل في الاعتقاد بأنك لست كفؤًا كما يراك الآخرون، وغالبًا ما يصاحبها الخوف من أن يتم كشفك كـ 'محتال'.",
      question: "في أي لحظات نجاح شعرت بهذا الإحساس بقوة أكبر؟"
    },
    {
        term: "Limerence (ليمرنس)",
        definition: "حالة من الولع الرومانسي المهووس بشخص آخر، تتميز بأفكار متطفلة ورغبة شديدة في أن يبادلك نفس الشعور.",
        question: "كيف يختلف هذا المفهوم عما يسميه المجتمع عادةً 'الحب'؟"
    }
  ]
};