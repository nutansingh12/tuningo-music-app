// Test the pattern matching function exactly as it appears in the code
const extractNoteFromQuestion = (question, exercise) => {
  const lowerQuestion = question.toLowerCase();

  // Look for "What note is shown on the [treble/bass] clef staff?" patterns
  const whatNoteMatch = lowerQuestion.match(/what\s+note\s+is\s+shown\s+on\s+the\s+(treble|bass)\s+clef/);
  if (whatNoteMatch && exercise?.answer) {
    return {
      note: exercise.answer.toUpperCase(),
      clef: whatNoteMatch[1]
    };
  }

  // Look for "What note is shown on the staff?" (generic)
  if (lowerQuestion.includes('what note is shown') && lowerQuestion.includes('staff') && exercise?.answer) {
    const clefFromContext = lowerQuestion.includes('bass') ? 'bass' : 'treble';
    return {
      note: exercise.answer.toUpperCase(),
      clef: clefFromContext
    };
  }

  return null;
};

// Test cases
const testCases = [
  {
    question: "What note is shown on the bass clef staff?",
    exercise: { answer: "G" },
    expected: { note: "G", clef: "bass" }
  },
  {
    question: "What note is shown on the treble clef staff?",
    exercise: { answer: "A" },
    expected: { note: "A", clef: "treble" }
  },
  {
    question: "What note is shown on the staff?",
    exercise: { answer: "C" },
    expected: { note: "C", clef: "treble" }
  }
];

console.log('Testing pattern matching function...\n');

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}:`);
  console.log('Question:', testCase.question);
  console.log('Exercise answer:', testCase.exercise.answer);

  const result = extractNoteFromQuestion(testCase.question, testCase.exercise);
  console.log('Result:', result);
  console.log('Expected:', testCase.expected);

  const matches = JSON.stringify(result) === JSON.stringify(testCase.expected);
  console.log(matches ? '✅ PASS' : '❌ FAIL');
  console.log('---');
});
