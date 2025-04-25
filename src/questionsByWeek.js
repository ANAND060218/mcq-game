// Default-export a plain array
const questionsByWeek = [
    {
      week: 1,
      questions: [
        {
          questionText: "Which of the following is not true according to the Dennard Scaling?",
          answerOptions: [
            { answerText: "Voltage is proportional to the dimension of a transistor", isCorrect: false },
            { answerText: "Current is inversely proportional to the dimension of a transistor", isCorrect: true },
            { answerText: "Power of a transistor is proportional to its area", isCorrect: false },
            { answerText: "Current is proportional to the dimension of a transistor", isCorrect: false }
          ]
        },
        // … add the rest of Week 1’s questions here …
      ]
    },
    {
      week: 2,
      questions: [
        {
          questionText: "Which of the following options is correct?",
          answerOptions: [
            { answerText: "I-1, II-2, III-3", isCorrect: false },
            { answerText: "I-1, II-3, III-2", isCorrect: false },
            { answerText: "I-2, II-1, III-3", isCorrect: false },
            { answerText: "I-2, II-3, III-1", isCorrect: true }
          ]
        },
        // … Week 2’s questions …
      ]
    },
    // … Weeks 3 through 6 …
  ];
  
  export default questionsByWeek;
  