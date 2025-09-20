// Level 1: Musical Alphabet & Note Recognition
export const level1Lessons = {
  "id": "intro_to_notes",
  "title": "🎵 LEVEL 1: Musical Alphabet & Note Recognition",
  "description": "Learn the basics of musical notes and staff reading",
  "color": "#3B82F6",
  "lessons": [
    {
      "id": "intro_to_notes",
      "title": "Musical Alphabet Basics",
      "description": "Learn the 7 letters of music: A, B, C, D, E, F, G",
      "type": "theory",
      "difficulty": "beginner",
      "estimatedDuration": 8,
      "xpReward": 100,
      "prerequisites": [],
      "exercises": [
        {
          "id": "alphabet-1",
          "type": "multiple-choice",
          "question": "How many letters are in the musical alphabet?",
          "options": [
            { "id": "a", "text": "5", "isCorrect": false },
            { "id": "b", "text": "7", "isCorrect": true },
            { "id": "c", "text": "8", "isCorrect": false },
            { "id": "d", "text": "12", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "beginner",
          "explanation": "The musical alphabet has 7 letters: A, B, C, D, E, F, G"
        },
        {
          "id": "alphabet-2", 
          "type": "multiple-choice",
          "question": "What are the first three letters of the musical alphabet?",
          "options": ["A, B, C", "C, D, E", "D, E, F", "F, G, A"],
          "answer": "A, B, C",
          "explanation": "The musical alphabet starts with A, B, C and continues through G"
        },
        {
          "id": "alphabet-3",
          "type": "multiple-choice", 
          "question": "What comes after G in the musical alphabet?",
          "options": ["H", "A", "Z", "Nothing"],
          "answer": "A",
          "explanation": "After G, the musical alphabet repeats starting with A again"
        },
        {
          "id": "piano-layout-1",
          "type": "multiple-choice",
          "question": "On a piano, where is C located relative to the black keys?",
          "options": ["To the left of a group of 2 black keys", "To the right of a group of 2 black keys", "Between 2 black keys", "It has no relation to black keys"],
          "answer": "To the left of a group of 2 black keys",
          "explanation": "C is always found to the left of a group of 2 black keys on the piano"
        },
        {
          "id": "piano-layout-2",
          "type": "multiple-choice",
          "question": "On a piano, where is F located?",
          "options": ["To the left of a group of 3 black keys", "To the right of a group of 3 black keys", "Between the first 2 black keys", "Between the last 2 black keys"],
          "answer": "To the left of a group of 3 black keys",
          "explanation": "F is always found to the left of a group of 3 black keys on the piano"
        }
      ]
    },
    {
      "id": "note_recognition_combined",
      "title": "Recognizing Notes",
      "description": "Learn to identify notes on the treble and bass clef",
      "type": "sight-reading",
      "difficulty": "beginner",
      "estimatedDuration": 15,
      "xpReward": 150,
      "prerequisites": ["intro_to_notes"],
      "exercises": [
        {
          "id": "treble-note-1",
          "type": "multiple-choice",
          "question": "What note is shown on the treble clef staff?",
          "options": ["C", "D", "E", "F"],
          "answer": "E",
          "explanation": "This note is on the first line of the treble clef, which is E"
        },
        {
          "id": "bass-note-1", 
          "type": "multiple-choice",
          "question": "What note is shown on the bass clef staff?",
          "options": ["F", "G", "A", "B"],
          "answer": "G",
          "explanation": "This note is on the second line of the bass clef, which is G"
        },
        {
          "id": "treble-note-2",
          "type": "multiple-choice",
          "question": "What note is shown on the treble clef staff?",
          "options": ["A", "B", "C", "D"],
          "answer": "C",
          "explanation": "This note is on the third space of the treble clef, which is C"
        }
      ]
    }
  ]
};
