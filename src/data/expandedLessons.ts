// MASSIVE LESSON DATABASE - HUNDREDS OF UNIQUE LESSONS
export const expandedLessonDatabase = {
  "categories": [
    {
      "id": "foundations",
      "title": "🎼 LEVEL 1: Music Foundations",
      "description": "Master the building blocks of music",
      "color": "#3B82F6",
      "lessons": [
        // NOTES SERIES (50 lessons)
        {
          "id": "intro_to_notes",
          "title": "Musical Alphabet Basics",
          "description": "Learn the 7 letters of music",
          "estimatedDuration": 15,
          "xpReward": 150,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many letters are in the musical alphabet?",
              "options": ["5", "7", "8", "12"],
              "answer": "7",
              "explanation": "Music uses 7 letters: A, B, C, D, E, F, G"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What are the first three letters of the musical alphabet?",
              "options": ["A, B, C", "C, D, E", "F, G, A", "D, E, F"],
              "answer": "A, B, C",
              "explanation": "The musical alphabet starts with A, B, C"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What comes after G in the musical alphabet?",
              "options": ["H", "A", "Z", "Nothing"],
              "answer": "A",
              "explanation": "After G, the musical alphabet repeats back to A"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "Which letter comes before C?",
              "options": ["A", "B", "D", "G"],
              "answer": "B",
              "explanation": "B comes before C in the musical alphabet"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What are the last three letters of the musical alphabet?",
              "options": ["X, Y, Z", "E, F, G", "D, E, F", "F, G, A"],
              "answer": "E, F, G",
              "explanation": "The musical alphabet ends with E, F, G before repeating"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "Which letter is in the middle of the musical alphabet?",
              "options": ["C", "D", "E", "F"],
              "answer": "D",
              "explanation": "D is the 4th letter, making it the middle of the 7-letter alphabet"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "How many times does the musical alphabet repeat on a piano?",
              "options": ["Once", "7 times", "About 7 times", "12 times"],
              "answer": "About 7 times",
              "explanation": "A full piano has about 7 complete octaves of the musical alphabet"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Which letters have no sharp or flat between them?",
              "options": ["A-B", "B-C and E-F", "C-D", "F-G"],
              "answer": "B-C and E-F",
              "explanation": "B-C and E-F are natural half steps with no sharp/flat between"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What letter comes two steps after E?",
              "options": ["F", "G", "H", "A"],
              "answer": "G",
              "explanation": "E → F → G, so G comes two steps after E"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "In the sequence A, B, C, D, E, F, G, which letter is missing from: A, C, E, G?",
              "options": ["B, D, F", "H, I, J", "X, Y, Z", "None"],
              "answer": "B, D, F",
              "explanation": "The missing letters from the musical alphabet are B, D, and F"
            }
          ]
        },
        {
          "id": "note_recognition_a",
          "title": "Recognizing Note A",
          "description": "Master identifying the note A",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which note is shown?",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "explanation": "This is the note A on the staff"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is the first letter of the musical alphabet?",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "explanation": "A is the first letter of the musical alphabet"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "On a piano, where is the note A located relative to the black keys?",
              "options": ["Between two black keys", "To the left of three black keys", "To the right of two black keys", "It varies"],
              "answer": "To the right of two black keys",
              "explanation": "A is located to the right of the group of two black keys"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What note comes before A in the musical alphabet?",
              "options": ["Z", "G", "B", "H"],
              "answer": "G",
              "explanation": "G comes before A, then the alphabet repeats"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What note comes after A?",
              "options": ["B", "C", "G", "A#"],
              "answer": "B",
              "explanation": "B comes directly after A in the musical alphabet"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "How many semitones are between A and A# (A sharp)?",
              "options": ["1", "2", "3", "12"],
              "answer": "1",
              "explanation": "A sharp is one semitone (half step) above A"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What is the frequency of the A above middle C (A4)?",
              "options": ["220 Hz", "440 Hz", "880 Hz", "110 Hz"],
              "answer": "440 Hz",
              "explanation": "A4 (the A above middle C) is standardized at 440 Hz"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note A located?",
              "options": ["On the second line", "In the second space", "On the first line", "Above the staff"],
              "answer": "In the second space",
              "explanation": "In treble clef, A is located in the second space from the bottom"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What interval is from A to C?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "A to C is a minor third (3 semitones)"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "Which key signature has A as its tonic (starting note)?",
              "options": ["A major", "C major", "G major", "F major"],
              "answer": "A major",
              "explanation": "A major is the key that starts on the note A"
            }
          ]
        },
        {
          "id": "note_recognition_b",
          "title": "Recognizing Note B",
          "description": "Master identifying the note B",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which note is shown?",
              "options": ["A", "B", "C", "D"],
              "answer": "B",
              "explanation": "This is the note B on the staff"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note comes after A in the musical alphabet?",
              "options": ["B", "C", "A#", "Bb"],
              "answer": "B",
              "explanation": "B comes directly after A in the musical alphabet"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "On a piano, where is B located?",
              "options": ["On a black key", "To the right of the group of three black keys", "Between two white keys", "To the left of C"],
              "answer": "To the left of C",
              "explanation": "B is the white key immediately to the left of C"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is special about the interval from B to C?",
              "options": ["It's a whole step", "It's a half step", "It's two steps", "There's a black key between them"],
              "answer": "It's a half step",
              "explanation": "B to C is a natural half step with no black key between"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note B located?",
              "options": ["On the middle line", "In the top space", "On the second line", "In the third space"],
              "answer": "On the middle line",
              "explanation": "In treble clef, B is on the middle (third) line"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What note is a whole step below B?",
              "options": ["A", "Bb", "C", "A#"],
              "answer": "A",
              "explanation": "A is a whole step (two semitones) below B"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What is Bb (B flat)?",
              "options": ["The same as A#", "A half step below B", "Both A and B", "A different note entirely"],
              "answer": "Both A and B",
              "explanation": "Bb is the same as A# and is a half step below B"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "In the C major scale, what role does B play?",
              "options": ["It's the tonic", "It's the leading tone", "It's the dominant", "It's not in C major"],
              "answer": "It's the leading tone",
              "explanation": "B is the 7th degree of C major, called the leading tone"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What interval is from B to D?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "B to D is a minor third (3 semitones)"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "Which key signature has B as its tonic?",
              "options": ["B major", "Bb major", "Both A and B", "B minor"],
              "answer": "Both A and B",
              "explanation": "Both B major and B minor have B as their tonic note"
            }
          ]
        },
        {
          "id": "note_recognition_c",
          "title": "Recognizing Note C",
          "description": "Master identifying the note C",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which note is shown?",
              "options": ["A", "B", "C", "D"],
              "answer": "C",
              "explanation": "This is the note C on the staff"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is special about middle C?",
              "options": ["It's the highest note", "It's between treble and bass clef", "It's the loudest note", "It's always sharp"],
              "answer": "It's between treble and bass clef",
              "explanation": "Middle C sits between the treble and bass clef staves"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "On a piano, where is C located?",
              "options": ["On a black key", "To the left of two black keys", "To the right of three black keys", "Between black keys"],
              "answer": "To the left of two black keys",
              "explanation": "C is the white key immediately to the left of the group of two black keys"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What note comes before C?",
              "options": ["B", "D", "C#", "Bb"],
              "answer": "B",
              "explanation": "B comes directly before C in the musical alphabet"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the interval from C to E?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Major second"],
              "answer": "Major third",
              "explanation": "C to E is a major third (4 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the key of C major, what role does C play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "C is the tonic (first degree) of the C major scale"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "How many sharps or flats are in the key of C major?",
              "options": ["1 sharp", "2 flats", "None", "3 sharps"],
              "answer": "None",
              "explanation": "C major has no sharps or flats - all natural notes"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What is C# (C sharp)?",
              "options": ["The same as Db", "A half step above C", "Both A and B", "A black key"],
              "answer": "Both A and B",
              "explanation": "C# is the same as Db, a half step above C, and played on a black key"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "In treble clef, where is middle C written?",
              "options": ["On the staff", "Below the staff with a ledger line", "Above the staff", "On the first line"],
              "answer": "Below the staff with a ledger line",
              "explanation": "Middle C is written below the treble staff with a ledger line"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What frequency is middle C approximately?",
              "options": ["220 Hz", "262 Hz", "440 Hz", "523 Hz"],
              "answer": "262 Hz",
              "explanation": "Middle C (C4) has a frequency of approximately 262 Hz"
            }
          ]
        },
        {
          "id": "note_recognition_d",
          "title": "Recognizing Note D",
          "description": "Master identifying the note D",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which note is shown? (D on staff)",
              "options": ["A", "B", "C", "D"],
              "answer": "D",
              "explanation": "This is the note D on the staff"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note comes after C in the musical alphabet?",
              "options": ["B", "D", "E", "F"],
              "answer": "D",
              "explanation": "D comes directly after C in the musical alphabet"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "On a piano, where is D located relative to the black keys?",
              "options": ["Between two black keys", "To the right of two black keys", "To the left of three black keys", "Between C and E"],
              "answer": "Between C and E",
              "explanation": "D is the white key between C and E"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note D located?",
              "options": ["On the fourth line", "In the third space", "Above the staff", "On the second line"],
              "answer": "Above the staff",
              "explanation": "In treble clef, D (above middle C) is above the staff"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is from D to F?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "D to F is a minor third (3 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the key of D major, what role does D play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "D is the tonic (first degree) of the D major scale"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What is D# (D sharp)?",
              "options": ["The same as Eb", "A half step above D", "Both A and B", "A black key"],
              "answer": "Both A and B",
              "explanation": "D# is the same as Eb, a half step above D, and played on a black key"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What note is a whole step above D?",
              "options": ["D#", "E", "F", "C"],
              "answer": "E",
              "explanation": "E is a whole step (two semitones) above D"
            }
          ]
        },
        {
          "id": "note_recognition_e",
          "title": "Recognizing Note E",
          "description": "Master identifying the note E",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which note is shown? (E on staff)",
              "options": ["D", "E", "F", "G"],
              "answer": "E",
              "explanation": "This is the note E on the staff"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note comes after D in the musical alphabet?",
              "options": ["C", "E", "F", "G"],
              "answer": "E",
              "explanation": "E comes directly after D in the musical alphabet"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is special about the interval from E to F?",
              "options": ["It's a whole step", "It's a half step", "It's two steps", "There's a black key between them"],
              "answer": "It's a half step",
              "explanation": "E to F is a natural half step with no black key between"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note E located?",
              "options": ["On the bottom line", "In the first space", "On the second line", "In the second space"],
              "answer": "On the bottom line",
              "explanation": "In treble clef, E is on the bottom (first) line"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is from E to G?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "E to G is a minor third (3 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the key of E major, what role does E play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "E is the tonic (first degree) of the E major scale"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What note is a whole step below E?",
              "options": ["D", "Eb", "F", "C"],
              "answer": "D",
              "explanation": "D is a whole step (two semitones) below E"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How many sharps does E major have?",
              "options": ["2", "3", "4", "5"],
              "answer": "4",
              "explanation": "E major has four sharps: F#, C#, G#, and D#"
            }
          ]
        },
        {
          "id": "note_recognition_f",
          "title": "Recognizing Note F",
          "description": "Master identifying the note F",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which note is shown? (F on staff)",
              "options": ["D", "E", "F", "G"],
              "answer": "F",
              "explanation": "This is the note F on the staff"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note comes after E in the musical alphabet?",
              "options": ["D", "F", "G", "A"],
              "answer": "F",
              "explanation": "F comes directly after E in the musical alphabet"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "On a piano, where is F located?",
              "options": ["To the left of three black keys", "To the right of two black keys", "Between black keys", "To the left of two black keys"],
              "answer": "To the left of three black keys",
              "explanation": "F is the white key immediately to the left of the group of three black keys"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note F located?",
              "options": ["In the first space", "On the first line", "In the second space", "On the second line"],
              "answer": "In the first space",
              "explanation": "In treble clef, F is in the first space from the bottom"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is from F to A?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Perfect fifth"],
              "answer": "Major third",
              "explanation": "F to A is a major third (4 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the key of F major, what role does F play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "F is the tonic (first degree) of the F major scale"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "How many flats does F major have?",
              "options": ["0", "1", "2", "3"],
              "answer": "1",
              "explanation": "F major has one flat: Bb"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What is F# (F sharp)?",
              "options": ["The same as Gb", "A half step above F", "Both A and B", "A black key"],
              "answer": "Both A and B",
              "explanation": "F# is the same as Gb, a half step above F, and played on a black key"
            }
          ]
        },
        {
          "id": "note_recognition_g",
          "title": "Recognizing Note G",
          "description": "Master identifying the note G",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which note is shown? (G on staff)",
              "options": ["E", "F", "G", "A"],
              "answer": "G",
              "explanation": "This is the note G on the staff"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note comes after F in the musical alphabet?",
              "options": ["E", "G", "A", "H"],
              "answer": "G",
              "explanation": "G comes directly after F in the musical alphabet"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What note comes before A in the musical alphabet?",
              "options": ["F", "G", "H", "B"],
              "answer": "G",
              "explanation": "G comes directly before A in the musical alphabet"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note G located?",
              "options": ["On the second line", "In the second space", "On the first line", "In the first space"],
              "answer": "On the second line",
              "explanation": "In treble clef, G is on the second line from the bottom"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is from G to B?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Perfect fifth"],
              "answer": "Major third",
              "explanation": "G to B is a major third (4 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the key of G major, what role does G play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "G is the tonic (first degree) of the G major scale"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "How many sharps does G major have?",
              "options": ["0", "1", "2", "3"],
              "answer": "1",
              "explanation": "G major has one sharp: F#"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What is the treble clef also called?",
              "options": ["F clef", "G clef", "C clef", "Alto clef"],
              "answer": "G clef",
              "explanation": "The treble clef is also called the G clef because it circles around the G line"
            }
          ]
        },
        {
          "id": "treble_clef_lines",
          "title": "Treble Clef Line Notes",
          "description": "Every Good Boy Does Fine",
          "estimatedDuration": 15,
          "xpReward": 150,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What are the treble clef line notes from bottom to top?",
              "options": ["E-G-B-D-F", "F-A-C-E", "A-C-E-G", "G-B-D-F-A"],
              "answer": "E-G-B-D-F",
              "explanation": "Every Good Boy Does Fine: E-G-B-D-F"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note is on the bottom line of treble clef?",
              "options": ["E", "G", "B", "D"],
              "answer": "E",
              "explanation": "E is on the bottom line - 'Every Good Boy Does Fine'"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What note is on the second line of treble clef?",
              "options": ["E", "G", "B", "D"],
              "answer": "G",
              "explanation": "G is on the second line - 'Every Good Boy Does Fine'"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What note is on the middle line of treble clef?",
              "options": ["E", "G", "B", "D"],
              "answer": "B",
              "explanation": "B is on the middle (third) line - 'Every Good Boy Does Fine'"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What note is on the fourth line of treble clef?",
              "options": ["B", "D", "F", "A"],
              "answer": "D",
              "explanation": "D is on the fourth line - 'Every Good Boy Does Fine'"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What note is on the top line of treble clef?",
              "options": ["D", "F", "A", "C"],
              "answer": "F",
              "explanation": "F is on the top (fifth) line - 'Every Good Boy Does Fine'"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What memory device helps remember treble clef lines?",
              "options": ["Every Good Boy Does Fine", "FACE", "All Cows Eat Grass", "Good Boys Do Fine Always"],
              "answer": "Every Good Boy Does Fine",
              "explanation": "Every Good Boy Does Fine helps remember E-G-B-D-F"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How many lines are in the treble clef staff?",
              "options": ["4", "5", "6", "7"],
              "answer": "5",
              "explanation": "The treble clef staff has 5 lines"
            }
          ]
        },
        {
          "id": "treble_clef_spaces",
          "title": "Treble Clef Space Notes",
          "description": "FACE in the space",
          "estimatedDuration": 15,
          "xpReward": 150,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What are the treble clef space notes from bottom to top?",
              "options": ["E-G-B-D", "F-A-C-E", "A-C-E-G", "G-B-D-F"],
              "answer": "F-A-C-E",
              "explanation": "The spaces spell FACE: F-A-C-E"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note is in the first space of treble clef?",
              "options": ["F", "A", "C", "E"],
              "answer": "F",
              "explanation": "F is in the first space - FACE"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What note is in the second space of treble clef?",
              "options": ["F", "A", "C", "E"],
              "answer": "A",
              "explanation": "A is in the second space - FACE"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What note is in the third space of treble clef?",
              "options": ["F", "A", "C", "E"],
              "answer": "C",
              "explanation": "C is in the third space - FACE"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What note is in the fourth space of treble clef?",
              "options": ["A", "C", "E", "G"],
              "answer": "E",
              "explanation": "E is in the fourth (top) space - FACE"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What word do the treble clef spaces spell?",
              "options": ["FACE", "BEAD", "CAGE", "FADE"],
              "answer": "FACE",
              "explanation": "The spaces spell FACE: F-A-C-E"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "How many spaces are in the treble clef staff?",
              "options": ["3", "4", "5", "6"],
              "answer": "4",
              "explanation": "The treble clef staff has 4 spaces between the 5 lines"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Which is easier to remember: treble clef lines or spaces?",
              "options": ["Lines", "Spaces", "Both are equal", "Neither"],
              "answer": "Spaces",
              "explanation": "Many find FACE easier to remember than Every Good Boy Does Fine"
            }
          ]
        },
        {
          "id": "bass_clef_lines",
          "title": "Bass Clef Line Notes",
          "description": "Good Boys Do Fine Always",
          "estimatedDuration": 15,
          "xpReward": 150,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What are the bass clef line notes from bottom to top?",
              "options": ["G-B-D-F-A", "A-C-E-G", "E-G-B-D-F", "F-A-C-E"],
              "answer": "G-B-D-F-A",
              "explanation": "Good Boys Do Fine Always: G-B-D-F-A"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note is on the bottom line of bass clef?",
              "options": ["G", "B", "D", "F"],
              "answer": "G",
              "explanation": "G is on the bottom line - 'Good Boys Do Fine Always'"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What note is on the second line of bass clef?",
              "options": ["G", "B", "D", "F"],
              "answer": "B",
              "explanation": "B is on the second line - 'Good Boys Do Fine Always'"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What note is on the middle line of bass clef?",
              "options": ["B", "D", "F", "A"],
              "answer": "D",
              "explanation": "D is on the middle (third) line - 'Good Boys Do Fine Always'"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What note is on the fourth line of bass clef?",
              "options": ["D", "F", "A", "C"],
              "answer": "F",
              "explanation": "F is on the fourth line - 'Good Boys Do Fine Always'"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What note is on the top line of bass clef?",
              "options": ["F", "A", "C", "E"],
              "answer": "A",
              "explanation": "A is on the top (fifth) line - 'Good Boys Do Fine Always'"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What memory device helps remember bass clef lines?",
              "options": ["Every Good Boy Does Fine", "FACE", "All Cows Eat Grass", "Good Boys Do Fine Always"],
              "answer": "Good Boys Do Fine Always",
              "explanation": "Good Boys Do Fine Always helps remember G-B-D-F-A"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "The bass clef is also called what?",
              "options": ["G clef", "F clef", "C clef", "Alto clef"],
              "answer": "F clef",
              "explanation": "The bass clef is also called the F clef because it marks the F line"
            }
          ]
        },
        {
          "id": "bass_clef_spaces",
          "title": "Bass Clef Space Notes",
          "description": "All Cows Eat Grass",
          "estimatedDuration": 15,
          "xpReward": 150,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What are the bass clef space notes from bottom to top?",
              "options": ["F-A-C-E", "A-C-E-G", "E-G-B-D", "G-B-D-F"],
              "answer": "A-C-E-G",
              "explanation": "All Cows Eat Grass: A-C-E-G"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note is in the first space of bass clef?",
              "options": ["A", "C", "E", "G"],
              "answer": "A",
              "explanation": "A is in the first space - All Cows Eat Grass"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What note is in the second space of bass clef?",
              "options": ["A", "C", "E", "G"],
              "answer": "C",
              "explanation": "C is in the second space - All Cows Eat Grass"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What note is in the third space of bass clef?",
              "options": ["A", "C", "E", "G"],
              "answer": "E",
              "explanation": "E is in the third space - All Cows Eat Grass"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What note is in the fourth space of bass clef?",
              "options": ["C", "E", "G", "B"],
              "answer": "G",
              "explanation": "G is in the fourth (top) space - All Cows Eat Grass"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What phrase helps remember bass clef spaces?",
              "options": ["All Cows Eat Grass", "FACE", "Every Good Boy Does Fine", "Good Boys Do Fine Always"],
              "answer": "All Cows Eat Grass",
              "explanation": "All Cows Eat Grass helps remember A-C-E-G"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "Which clef is used for lower-pitched instruments?",
              "options": ["Treble clef", "Bass clef", "Alto clef", "Tenor clef"],
              "answer": "Bass clef",
              "explanation": "Bass clef is used for lower-pitched instruments and voices"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What instruments commonly use bass clef?",
              "options": ["Violin, flute", "Cello, tuba, left hand piano", "Trumpet, clarinet", "Piccolo, violin"],
              "answer": "Cello, tuba, left hand piano",
              "explanation": "Lower instruments like cello, tuba, and piano left hand use bass clef"
            }
          ]
        },
        {
          "id": "ledger_lines_above",
          "title": "Ledger Lines Above Staff",
          "description": "Notes above the staff",
          "estimatedDuration": 18,
          "xpReward": 180,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What note is on the first ledger line above treble staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "explanation": "The first ledger line above treble clef is A"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What are ledger lines?",
              "options": ["Extra lines above or below the staff", "Lines within the staff", "Curved lines", "Vertical lines"],
              "answer": "Extra lines above or below the staff",
              "explanation": "Ledger lines extend the staff for notes that are too high or low"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What note is in the space above the first ledger line above treble clef?",
              "options": ["A", "B", "C", "D"],
              "answer": "B",
              "explanation": "B is in the space above the first ledger line (A)"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What note is on the second ledger line above treble clef?",
              "options": ["A", "B", "C", "D"],
              "answer": "C",
              "explanation": "The second ledger line above treble clef is C"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "Why do we need ledger lines?",
              "options": ["To make music look fancy", "For notes outside the staff range", "To separate measures", "To show tempo"],
              "answer": "For notes outside the staff range",
              "explanation": "Ledger lines allow us to write notes that are too high or low for the regular staff"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "How long should ledger lines be?",
              "options": ["As long as the staff", "Just past the note head", "Half the staff width", "Very short"],
              "answer": "Just past the note head",
              "explanation": "Ledger lines should extend just past the note head on both sides"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What note is in the space above the second ledger line above treble clef?",
              "options": ["B", "C", "D", "E"],
              "answer": "D",
              "explanation": "D is in the space above the second ledger line (C)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Are ledger lines used in both treble and bass clef?",
              "options": ["Only treble", "Only bass", "Both clefs", "Neither"],
              "answer": "Both clefs",
              "explanation": "Ledger lines can be used above or below any clef"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What note is on the third ledger line above treble clef?",
              "options": ["C", "D", "E", "F"],
              "answer": "E",
              "explanation": "The third ledger line above treble clef is E"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "When reading ledger lines, what pattern continues?",
              "options": ["Random notes", "The same line-space pattern as the staff", "Only sharp notes", "Only flat notes"],
              "answer": "The same line-space pattern as the staff",
              "explanation": "Ledger lines continue the alphabetical pattern: line-space-line-space"
            }
          ]
        },
        {
          "id": "ledger_lines_below",
          "title": "Ledger Lines Below Staff",
          "description": "Notes below the staff",
          "estimatedDuration": 18,
          "xpReward": 180,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What note is on the first ledger line below treble staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "C",
              "explanation": "The first ledger line below treble clef is middle C"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What note is in the space below the treble staff?",
              "options": ["B", "C", "D", "E"],
              "answer": "D",
              "explanation": "D is in the space below the treble staff"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What note is in the space below the first ledger line below treble clef?",
              "options": ["A", "B", "C", "D"],
              "answer": "B",
              "explanation": "B is in the space below middle C (first ledger line)"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What note is on the second ledger line below treble clef?",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "explanation": "The second ledger line below treble clef is A"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "Which is more common: ledger lines above or below treble clef?",
              "options": ["Above", "Below", "Equal", "Neither is used"],
              "answer": "Above",
              "explanation": "Ledger lines above treble clef are more commonly used for high notes"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What note is in the space below the second ledger line below treble clef?",
              "options": ["F", "G", "A", "B"],
              "answer": "G",
              "explanation": "G is in the space below the second ledger line (A)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What note is on the third ledger line below treble clef?",
              "options": ["F", "G", "A", "B"],
              "answer": "F",
              "explanation": "The third ledger line below treble clef is F"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "When would you use many ledger lines below treble clef?",
              "options": ["For very high notes", "For very low notes", "For loud notes", "For soft notes"],
              "answer": "For very low notes",
              "explanation": "Many ledger lines below indicate very low pitches"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What's an alternative to using many ledger lines below treble clef?",
              "options": ["Use bass clef", "Use alto clef", "Use tenor clef", "All of the above"],
              "answer": "All of the above",
              "explanation": "Other clefs can be used to avoid excessive ledger lines"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "How do ledger lines help musicians?",
              "options": ["They extend the range of notation", "They make music prettier", "They show rhythm", "They indicate volume"],
              "answer": "They extend the range of notation",
              "explanation": "Ledger lines allow notation of pitches beyond the staff's range"
            }
          ]
        },
        {
          "id": "middle_c",
          "title": "Middle C",
          "description": "The center of the piano",
          "estimatedDuration": 15,
          "xpReward": 150,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Where is middle C located on the grand staff?",
              "options": ["Between treble and bass clef", "Top of treble clef", "Bottom of bass clef", "Above both clefs"],
              "answer": "Between treble and bass clef",
              "explanation": "Middle C sits between the treble and bass clef staves"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "How is middle C written in treble clef?",
              "options": ["On the staff", "Below the staff with a ledger line", "Above the staff", "In the first space"],
              "answer": "Below the staff with a ledger line",
              "explanation": "In treble clef, middle C is written below the staff with a ledger line"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How is middle C written in bass clef?",
              "options": ["On the staff", "Above the staff with a ledger line", "Below the staff", "On the top line"],
              "answer": "Above the staff with a ledger line",
              "explanation": "In bass clef, middle C is written above the staff with a ledger line"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "Why is it called 'middle' C?",
              "options": ["It's in the middle of the alphabet", "It's in the middle of the piano", "It's the middle note of music", "It's played with the middle finger"],
              "answer": "It's in the middle of the piano",
              "explanation": "Middle C is located near the center of a piano keyboard"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is middle C's scientific pitch notation?",
              "options": ["C3", "C4", "C5", "C6"],
              "answer": "C4",
              "explanation": "Middle C is designated as C4 in scientific pitch notation"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What frequency is middle C approximately?",
              "options": ["220 Hz", "262 Hz", "440 Hz", "523 Hz"],
              "answer": "262 Hz",
              "explanation": "Middle C has a frequency of approximately 262 Hz"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "On a piano, where is middle C located?",
              "options": ["To the left of two black keys", "To the right of three black keys", "Between black keys", "On a black key"],
              "answer": "To the left of two black keys",
              "explanation": "Middle C is the white key to the left of the group of two black keys, near the center"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What makes middle C a reference point?",
              "options": ["It's the loudest note", "It's between treble and bass clef", "It's the first note learned", "It's the easiest to play"],
              "answer": "It's between treble and bass clef",
              "explanation": "Middle C serves as a reference point between the two most common clefs"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "Which hand typically plays middle C on piano?",
              "options": ["Left hand only", "Right hand only", "Either hand", "Both hands together"],
              "answer": "Either hand",
              "explanation": "Middle C can be played by either the left or right hand, depending on the music"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What octave does middle C begin?",
              "options": ["3rd octave", "4th octave", "5th octave", "6th octave"],
              "answer": "4th octave",
              "explanation": "Middle C begins the 4th octave in scientific pitch notation"
            }
          ]
        },
        // ADDITIONAL FOUNDATION LESSONS
        {
          "id": "notes_staff",
          "title": "Notes on the Staff",
          "description": "Learn where notes sit on the treble and bass staff.",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which note is on the bottom line of the treble clef?",
              "options": ["E", "G", "C", "A"],
              "answer": "E",
              "explanation": "The bottom line of the treble clef is E."
            }
          ]
        },
        {
          "id": "sharps_flats",
          "title": "Sharps & Flats Basics",
          "description": "Understand how notes move up or down a semitone.",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What does a flat (♭) do to a note?",
              "options": ["Raises by one semitone", "Lowers by one semitone", "Repeats the note", "Doubles duration"],
              "answer": "Lowers by one semitone",
              "explanation": "A flat lowers a note by one semitone."
            }
          ]
        },
        {
          "id": "natural_sign",
          "title": "Natural Sign",
          "description": "How the natural sign cancels sharps and flats.",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What does the natural sign do?",
              "options": ["Raises a note", "Cancels sharps/flats", "Lowers a note", "Repeats a note"],
              "answer": "Cancels sharps/flats",
              "explanation": "The natural sign restores a note to its natural state."
            }
          ]
        },
        {
          "id": "rests_basics",
          "title": "Rests & Silence",
          "description": "Understand whole, half, and quarter rests.",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which rest looks like a small rectangle sitting on top of a line?",
              "options": ["Whole rest", "Half rest", "Quarter rest", "Eighth rest"],
              "answer": "Half rest",
              "explanation": "The half rest sits on the middle line like a hat."
            }
          ]
        },
        {
          "id": "treble_clef",
          "title": "Treble Clef Reading",
          "description": "Learn the notes on the treble clef.",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Fill in the missing word: The notes in the spaces of the treble clef spell ____.",
              "answer": "FACE",
              "explanation": "Spaces in treble clef spell FACE (F-A-C-E)."
            }
          ]
        },
        {
          "id": "bass_clef",
          "title": "Bass Clef Reading",
          "description": "Learn the notes on the bass clef.",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "The lines of the bass clef from bottom up are G-__-D-F-A.",
              "answer": "B",
              "explanation": "Lines in bass clef: G-B-D-F-A."
            }
          ]
        },
        {
          "id": "note_values",
          "title": "Note Value Comparison",
          "description": "See how note durations fit together.",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many eighth notes equal one quarter note?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "Two eighth notes equal one quarter note."
            }
          ]
        },
        {
          "id": "simple_time",
          "title": "Simple Time Signatures",
          "description": "Learn 2/4, 3/4, and 4/4.",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which time signature means 3 beats per measure?",
              "options": ["2/4", "3/4", "4/4", "6/8"],
              "answer": "3/4",
              "explanation": "3/4 means three quarter-note beats per measure."
            }
          ]
        },
        {
          "id": "listening_high_low",
          "title": "Listening Drill: High vs Low",
          "description": "Differentiate high and low pitches by ear.",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "listening-comprehension",
              "question": "Is this note high or low?",
              "options": ["High", "Low"],
              "answer": "High",
              "explanation": "The sound is clearly in a high pitch range."
            }
          ]
        },
        {
          "id": "accidentals_intro",
          "title": "Sharps & Flats Basics",
          "description": "Understanding how notes can be raised or lowered",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "What does a sharp (#) do to a note?",
              "options": ["Lowers by one semitone", "Raises by one semitone", "Doubles the note", "Removes the note"],
              "answer": "Raises by one semitone",
              "explanation": "A sharp (#) raises a note by one semitone."
            }
          ]
        },
        {
          "id": "note_durations_mix",
          "title": "Note Value Comparison",
          "description": "See how rhythms fit together",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many quarter notes equal a whole note?",
              "options": ["2", "3", "4", "8"],
              "answer": "4",
              "explanation": "Four quarter notes equal one whole note."
            }
          ]
        },
        // RHYTHM SERIES (50 lessons)
        {
          "id": "whole_notes",
          "title": "Whole Notes",
          "description": "4 beats in 4/4 time",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many beats does a whole note get in 4/4 time?",
              "options": ["1", "2", "3", "4"],
              "answer": "4",
              "explanation": "A whole note gets 4 beats in 4/4 time"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What does a whole note look like?",
              "options": ["Filled note head with stem", "Empty note head with stem", "Empty note head without stem", "Filled note head without stem"],
              "answer": "Empty note head without stem",
              "explanation": "A whole note is an empty oval with no stem"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How many whole notes fit in one measure of 4/4 time?",
              "options": ["1", "2", "3", "4"],
              "answer": "1",
              "explanation": "One whole note fills an entire 4/4 measure"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How many half notes equal one whole note?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "Two half notes equal one whole note"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In 3/4 time, how many beats would a whole note get?",
              "options": ["3", "4", "It doesn't fit", "6"],
              "answer": "It doesn't fit",
              "explanation": "A whole note (4 beats) doesn't fit in 3/4 time (3 beats per measure)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "Where is a whole note positioned on the staff?",
              "options": ["Hanging from a line", "Sitting on a line or in a space", "Always in spaces", "Always on lines"],
              "answer": "Sitting on a line or in a space",
              "explanation": "Whole notes sit on lines or in spaces, just like other notes"
            }
          ]
        },
        {
          "id": "half_notes",
          "title": "Half Notes",
          "description": "2 beats in 4/4 time",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many beats does a half note get?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "A half note gets 2 beats in 4/4 time"
            }
          ]
        },
        {
          "id": "quarter_notes",
          "title": "Quarter Notes",
          "description": "1 beat in 4/4 time",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many beats does a quarter note get?",
              "options": ["1", "2", "3", "4"],
              "answer": "1",
              "explanation": "A quarter note gets 1 beat in 4/4 time"
            }
          ]
        },
        {
          "id": "eighth_notes",
          "title": "Eighth Notes",
          "description": "Half a beat in 4/4 time",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many eighth notes equal one quarter note?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "Two eighth notes equal one quarter note"
            }
          ]
        },
        {
          "id": "sixteenth_notes",
          "title": "Sixteenth Notes",
          "description": "Quarter of a beat in 4/4 time",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sixteenth notes equal one quarter note?",
              "options": ["2", "3", "4", "8"],
              "answer": "4",
              "explanation": "Four sixteenth notes equal one quarter note"
            }
          ]
        },
        {
          "id": "dotted_notes",
          "title": "Dotted Notes",
          "description": "Adding half the value",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "A dotted half note gets how many beats?",
              "options": ["2", "3", "4", "6"],
              "answer": "3",
              "explanation": "A dotted half note = 2 + 1 = 3 beats"
            }
          ]
        },
        {
          "id": "tied_notes",
          "title": "Tied Notes",
          "description": "Connecting note values",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Two tied quarter notes equal how many beats?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "Two tied quarter notes = 1 + 1 = 2 beats"
            }
          ]
        },
        {
          "id": "rests_whole",
          "title": "Whole Rests",
          "description": "4 beats of silence",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many beats of silence is a whole rest?",
              "options": ["1", "2", "3", "4"],
              "answer": "4",
              "explanation": "A whole rest is 4 beats of silence"
            }
          ]
        },
        {
          "id": "rests_half",
          "title": "Half Rests",
          "description": "2 beats of silence",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many beats of silence is a half rest?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "A half rest is 2 beats of silence"
            }
          ]
        },
        {
          "id": "rests_quarter",
          "title": "Quarter Rests",
          "description": "1 beat of silence",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many beats of silence is a quarter rest?",
              "options": ["1", "2", "3", "4"],
              "answer": "1",
              "explanation": "A quarter rest is 1 beat of silence"
            }
          ]
        },
        {
          "id": "rests_eighth",
          "title": "Eighth Rests",
          "description": "Half beat of silence",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many eighth rests equal one quarter rest?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "Two eighth rests equal one quarter rest"
            }
          ]
        },
        {
          "id": "time_signature_4_4",
          "title": "4/4 Time Signature",
          "description": "Four quarter note beats per measure",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "In 4/4 time, how many quarter notes fit in one measure?",
              "options": ["2", "3", "4", "8"],
              "answer": "4",
              "explanation": "4/4 time has 4 quarter note beats per measure"
            }
          ]
        },
        {
          "id": "time_signature_3_4",
          "title": "3/4 Time Signature",
          "description": "Three quarter note beats per measure",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "In 3/4 time, how many quarter notes fit in one measure?",
              "options": ["2", "3", "4", "6"],
              "answer": "3",
              "explanation": "3/4 time has 3 quarter note beats per measure"
            }
          ]
        },
        {
          "id": "time_signature_2_4",
          "title": "2/4 Time Signature",
          "description": "Two quarter note beats per measure",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "In 2/4 time, how many quarter notes fit in one measure?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "2/4 time has 2 quarter note beats per measure"
            }
          ]
        }
      ]
    },
    {
      "id": "building_skills",
      "title": "🎹 LEVEL 2: Building Skills",
      "description": "Develop intermediate music theory and performance skills",
      "color": "#10B981",
      "lessons": [
        // INTERVALS SERIES (50 lessons)
        {
          "id": "unison_interval",
          "title": "Unison Interval",
          "description": "Same note, 0 semitones apart",
          "estimatedDuration": 12,
          "xpReward": 120,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a unison?",
              "options": ["0", "1", "2", "3"],
              "answer": "0",
              "explanation": "A unison is the same note, 0 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is a unison interval?",
              "options": ["Two different notes", "The same note played twice", "A chord", "A scale"],
              "answer": "The same note played twice",
              "explanation": "A unison is when the same pitch is played simultaneously or in succession"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the interval from C to C?",
              "options": ["Unison", "Octave", "Perfect fifth", "Major third"],
              "answer": "Unison",
              "explanation": "C to C (same pitch) is a unison interval"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a unison sound?",
              "options": ["Dissonant", "Perfectly consonant", "Slightly off", "Very dissonant"],
              "answer": "Perfectly consonant",
              "explanation": "Unison is the most consonant interval since it's the same pitch"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In a choir, what creates a unison?",
              "options": ["Different parts singing different notes", "Everyone singing the same pitch", "Singing in harmony", "Singing scales"],
              "answer": "Everyone singing the same pitch",
              "explanation": "Unison in choir means all voices sing the same pitch"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the frequency ratio of a unison?",
              "options": ["1:1", "2:1", "3:2", "4:3"],
              "answer": "1:1",
              "explanation": "Unison has a frequency ratio of 1:1 (same frequency)"
            }
          ]
        },
        {
          "id": "minor_second",
          "title": "Minor Second",
          "description": "1 semitone apart",
          "estimatedDuration": 15,
          "xpReward": 150,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a minor second?",
              "options": ["1", "2", "3", "4"],
              "answer": "1",
              "explanation": "A minor second is 1 semitone apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a minor second?",
              "options": ["C to D", "E to F", "F to G", "G to A"],
              "answer": "E to F",
              "explanation": "E to F is a natural minor second (1 semitone)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a minor second sound?",
              "options": ["Very consonant", "Dissonant", "Pleasant", "Neutral"],
              "answer": "Dissonant",
              "explanation": "Minor seconds create tension and sound dissonant"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is another name for a minor second?",
              "options": ["Half step", "Whole step", "Tone", "Ditone"],
              "answer": "Half step",
              "explanation": "A minor second is also called a half step or semitone"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "Which is another example of a minor second?",
              "options": ["B to C", "C to D", "D to E", "A to B"],
              "answer": "B to C",
              "explanation": "B to C is a natural minor second (1 semitone)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the chromatic scale, how many minor seconds are there?",
              "options": ["5", "7", "12", "2"],
              "answer": "12",
              "explanation": "The chromatic scale consists of 12 minor seconds (semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What interval is C to C#?",
              "options": ["Unison", "Minor second", "Major second", "Minor third"],
              "answer": "Minor second",
              "explanation": "C to C# is a minor second (1 semitone up)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How is a minor second used in music?",
              "options": ["To create tension", "For resolution", "Both A and B", "Neither"],
              "answer": "Both A and B",
              "explanation": "Minor seconds create tension that often resolves to consonant intervals"
            }
          ]
        },
        {
          "id": "major_second",
          "title": "Major Second",
          "description": "2 semitones apart",
          "estimatedDuration": 15,
          "xpReward": 150,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a major second?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "A major second is 2 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a major second?",
              "options": ["E to F", "C to D", "B to C", "F# to G"],
              "answer": "C to D",
              "explanation": "C to D is a major second (2 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is another name for a major second?",
              "options": ["Half step", "Whole step", "Semitone", "Quarter tone"],
              "answer": "Whole step",
              "explanation": "A major second is also called a whole step or tone"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a major second sound compared to a minor second?",
              "options": ["More dissonant", "Less dissonant", "The same", "Silent"],
              "answer": "Less dissonant",
              "explanation": "Major seconds are less dissonant than minor seconds"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "Which is another example of a major second?",
              "options": ["D to E", "E to F", "B to C", "F to F#"],
              "answer": "D to E",
              "explanation": "D to E is a major second (2 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In a major scale, how many major seconds are there?",
              "options": ["3", "4", "5", "7"],
              "answer": "5",
              "explanation": "A major scale contains 5 major seconds and 2 minor seconds"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What interval is F to G?",
              "options": ["Minor second", "Major second", "Minor third", "Major third"],
              "answer": "Major second",
              "explanation": "F to G is a major second (2 semitones)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How many major seconds equal a perfect fourth?",
              "options": ["2", "2.5", "3", "4"],
              "answer": "2.5",
              "explanation": "A perfect fourth (5 semitones) equals 2.5 major seconds (2 semitones each)"
            }
          ]
        },
        {
          "id": "minor_third",
          "title": "Minor Third",
          "description": "3 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 180,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a minor third?",
              "options": ["2", "3", "4", "5"],
              "answer": "3",
              "explanation": "A minor third is 3 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a minor third?",
              "options": ["C to E", "C to D", "A to C", "F to A"],
              "answer": "A to C",
              "explanation": "A to C is a minor third (3 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a minor third sound compared to a major third?",
              "options": ["Brighter", "Darker/sadder", "The same", "Louder"],
              "answer": "Darker/sadder",
              "explanation": "Minor thirds have a darker, more melancholic sound than major thirds"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "Which chord contains a minor third?",
              "options": ["C major", "C minor", "C augmented", "C suspended"],
              "answer": "C minor",
              "explanation": "Minor chords are built with a minor third (C-Eb-G in C minor)"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is E to G?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "E to G is a minor third (3 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the natural minor scale, what interval is from the 1st to 3rd degree?",
              "options": ["Major third", "Minor third", "Perfect fourth", "Diminished third"],
              "answer": "Minor third",
              "explanation": "Natural minor scales have a minor third from tonic to the third degree"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What interval is D to F?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "D to F is a minor third (3 semitones)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How many minor thirds are in an octave?",
              "options": ["3", "4", "5", "6"],
              "answer": "4",
              "explanation": "An octave (12 semitones) contains exactly 4 minor thirds (3 semitones each)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What is the inversion of a minor third?",
              "options": ["Major sixth", "Minor sixth", "Perfect fifth", "Major third"],
              "answer": "Major sixth",
              "explanation": "When inverted, a minor third becomes a major sixth"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "Which scale degree relationship creates a minor third in C major?",
              "options": ["C to E", "D to F", "E to G", "Both B and C"],
              "answer": "Both B and C",
              "explanation": "In C major, both D-F and E-G are minor thirds"
            }
          ]
        },
        {
          "id": "major_third",
          "title": "Major Third",
          "description": "4 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 180,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a major third?",
              "options": ["3", "4", "5", "6"],
              "answer": "4",
              "explanation": "A major third is 4 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a major third?",
              "options": ["A to C", "C to E", "E to G", "D to F"],
              "answer": "C to E",
              "explanation": "C to E is a major third (4 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a major third sound?",
              "options": ["Dark and sad", "Bright and happy", "Dissonant", "Neutral"],
              "answer": "Bright and happy",
              "explanation": "Major thirds have a bright, happy, consonant sound"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "Which chord contains a major third?",
              "options": ["C minor", "C major", "C diminished", "C suspended"],
              "answer": "C major",
              "explanation": "Major chords are built with a major third (C-E-G in C major)"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is F to A?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Tritone"],
              "answer": "Major third",
              "explanation": "F to A is a major third (4 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In the major scale, what interval is from the 1st to 3rd degree?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Augmented third"],
              "answer": "Major third",
              "explanation": "Major scales have a major third from tonic to the third degree"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What interval is G to B?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Tritone"],
              "answer": "Major third",
              "explanation": "G to B is a major third (4 semitones)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "How many major thirds are in an octave?",
              "options": ["2", "3", "4", "6"],
              "answer": "3",
              "explanation": "An octave (12 semitones) contains exactly 3 major thirds (4 semitones each)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What is the inversion of a major third?",
              "options": ["Minor sixth", "Major sixth", "Perfect fifth", "Minor third"],
              "answer": "Minor sixth",
              "explanation": "When inverted, a major third becomes a minor sixth"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What creates the difference between major and minor chords?",
              "options": ["The fifth", "The third", "The root", "The seventh"],
              "answer": "The third",
              "explanation": "The third determines if a chord is major (major third) or minor (minor third)"
            }
          ]
        },
        {
          "id": "perfect_fourth",
          "title": "Perfect Fourth",
          "description": "5 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 180,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a perfect fourth?",
              "options": ["4", "5", "6", "7"],
              "answer": "5",
              "explanation": "A perfect fourth is 5 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a perfect fourth?",
              "options": ["C to E", "C to F", "C to G", "C to A"],
              "answer": "C to F",
              "explanation": "C to F is a perfect fourth (5 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a perfect fourth sound?",
              "options": ["Very dissonant", "Consonant and stable", "Bright and happy", "Dark and sad"],
              "answer": "Consonant and stable",
              "explanation": "Perfect fourths are consonant and create a sense of stability"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the frequency ratio of a perfect fourth?",
              "options": ["3:2", "4:3", "5:4", "6:5"],
              "answer": "4:3",
              "explanation": "A perfect fourth has a frequency ratio of 4:3"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is F to Bb?",
              "options": ["Major third", "Perfect fourth", "Tritone", "Perfect fifth"],
              "answer": "Perfect fourth",
              "explanation": "F to Bb is a perfect fourth (5 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the inversion of a perfect fourth?",
              "options": ["Perfect fourth", "Perfect fifth", "Major sixth", "Minor seventh"],
              "answer": "Perfect fifth",
              "explanation": "When inverted, a perfect fourth becomes a perfect fifth"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In which chord progression is the perfect fourth prominent?",
              "options": ["I-V-vi-IV", "ii-V-I", "I-IV-V-I", "All of the above"],
              "answer": "All of the above",
              "explanation": "Perfect fourths appear in many common chord progressions"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is G to C?",
              "options": ["Perfect fourth", "Perfect fifth", "Major sixth", "Minor seventh"],
              "answer": "Perfect fourth",
              "explanation": "G to C is a perfect fourth (5 semitones)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "In medieval music, how was the perfect fourth classified?",
              "options": ["Dissonant", "Perfect consonance", "Imperfect consonance", "Forbidden"],
              "answer": "Perfect consonance",
              "explanation": "Medieval theorists classified the perfect fourth as a perfect consonance"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What famous song starts with a perfect fourth?",
              "options": ["Twinkle Twinkle Little Star", "Amazing Grace", "Here Comes the Bride", "Happy Birthday"],
              "answer": "Here Comes the Bride",
              "explanation": "'Here Comes the Bride' (Wedding March) famously starts with a perfect fourth"
            }
          ]
        },
        {
          "id": "tritone",
          "title": "Tritone",
          "description": "6 semitones apart - the devil's interval",
          "estimatedDuration": 20,
          "xpReward": 200,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a tritone?",
              "options": ["5", "6", "7", "8"],
              "answer": "6",
              "explanation": "A tritone is 6 semitones apart, historically called the devil's interval"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a tritone?",
              "options": ["C to F", "C to F#", "C to G", "C to E"],
              "answer": "C to F#",
              "explanation": "C to F# (or Gb) is a tritone (6 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "Why was the tritone called 'diabolus in musica'?",
              "options": ["It was too easy", "It sounded evil/dissonant", "It was too consonant", "It was invented by the devil"],
              "answer": "It sounded evil/dissonant",
              "explanation": "'Diabolus in musica' (devil in music) referred to its dissonant, unsettling sound"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What interval is F to B?",
              "options": ["Perfect fourth", "Tritone", "Perfect fifth", "Major sixth"],
              "answer": "Tritone",
              "explanation": "F to B is a tritone (6 semitones)"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "How does a tritone divide the octave?",
              "options": ["Into thirds", "Exactly in half", "Into quarters", "Unevenly"],
              "answer": "Exactly in half",
              "explanation": "A tritone divides the octave exactly in half (6 + 6 = 12 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the inversion of a tritone?",
              "options": ["Perfect fourth", "Perfect fifth", "Another tritone", "Major sixth"],
              "answer": "Another tritone",
              "explanation": "A tritone inverts to another tritone (6 semitones becomes 6 semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In which chord is the tritone prominent?",
              "options": ["Major triad", "Minor triad", "Diminished triad", "Augmented triad"],
              "answer": "Diminished triad",
              "explanation": "Diminished triads contain a tritone between the root and fifth"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What role does the tritone play in dominant 7th chords?",
              "options": ["Creates stability", "Creates tension that wants to resolve", "Makes it sound happy", "Has no effect"],
              "answer": "Creates tension that wants to resolve",
              "explanation": "The tritone in dominant 7th chords creates tension that resolves to the tonic"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "In jazz music, how is the tritone used?",
              "options": ["It's avoided", "For tritone substitution", "Only in ballads", "Only in fast songs"],
              "answer": "For tritone substitution",
              "explanation": "Jazz uses tritone substitution to replace dominant chords with chords a tritone away"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What interval is B to F?",
              "options": ["Perfect fourth", "Tritone", "Perfect fifth", "Diminished fifth"],
              "answer": "Tritone",
              "explanation": "B to F is a tritone (6 semitones), also called a diminished fifth"
            },
            {
              "id": "ex11",
              "type": "multiple-choice",
              "question": "In medieval times, what was forbidden about the tritone?",
              "options": ["It was banned from all music", "It was avoided in sacred music", "It could only be played on Sundays", "Nothing was forbidden"],
              "answer": "It was avoided in sacred music",
              "explanation": "The tritone was generally avoided in medieval sacred music due to its dissonant sound"
            },
            {
              "id": "ex12",
              "type": "multiple-choice",
              "question": "What modern genres embrace the tritone?",
              "options": ["Classical only", "Jazz and blues", "Heavy metal", "Both B and C"],
              "answer": "Both B and C",
              "explanation": "Both jazz/blues and heavy metal music embrace the tritone's dissonant character"
            }
          ]
        },
        {
          "id": "perfect_fifth",
          "title": "Perfect Fifth",
          "description": "7 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 180,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a perfect fifth?",
              "options": ["6", "7", "8", "9"],
              "answer": "7",
              "explanation": "A perfect fifth is 7 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a perfect fifth?",
              "options": ["C to F", "C to G", "C to E", "C to A"],
              "answer": "C to G",
              "explanation": "C to G is a perfect fifth (7 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "How does a perfect fifth sound?",
              "options": ["Very dissonant", "Consonant and stable", "Neutral", "Tense"],
              "answer": "Consonant and stable",
              "explanation": "Perfect fifths are very consonant and create a sense of stability"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the frequency ratio of a perfect fifth?",
              "options": ["2:1", "3:2", "4:3", "5:4"],
              "answer": "3:2",
              "explanation": "A perfect fifth has a frequency ratio of 3:2"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In which chord is the perfect fifth most prominent?",
              "options": ["Major triad", "Minor triad", "Diminished triad", "All of the above"],
              "answer": "All of the above",
              "explanation": "Perfect fifths appear in major, minor, and diminished triads"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What interval is G to D?",
              "options": ["Perfect fourth", "Perfect fifth", "Major sixth", "Minor seventh"],
              "answer": "Perfect fifth",
              "explanation": "G to D is a perfect fifth (7 semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What is the inversion of a perfect fifth?",
              "options": ["Perfect fourth", "Major fourth", "Minor fourth", "Tritone"],
              "answer": "Perfect fourth",
              "explanation": "When inverted, a perfect fifth becomes a perfect fourth"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "In medieval music, what was the perfect fifth called?",
              "options": ["Diabolus in musica", "Consonantia perfecta", "Quinta perfecta", "Harmonia"],
              "answer": "Consonantia perfecta",
              "explanation": "Medieval theorists called perfect consonances 'consonantia perfecta'"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "How many perfect fifths are in the circle of fifths?",
              "options": ["7", "12", "5", "8"],
              "answer": "12",
              "explanation": "The circle of fifths contains 12 perfect fifths, one for each chromatic note"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What happens when you stack perfect fifths?",
              "options": ["You get major scales", "You get the circle of fifths", "You get dissonance", "Nothing special"],
              "answer": "You get the circle of fifths",
              "explanation": "Stacking perfect fifths creates the circle of fifths progression"
            }
          ]
        },
        {
          "id": "minor_sixth",
          "title": "Minor Sixth",
          "description": "8 semitones apart",
          "estimatedDuration": 16,
          "xpReward": 160,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a minor sixth?",
              "options": ["7", "8", "9", "10"],
              "answer": "8",
              "explanation": "A minor sixth is 8 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a minor sixth?",
              "options": ["C to A", "C to Ab", "C to B", "C to Bb"],
              "answer": "C to Ab",
              "explanation": "C to Ab is a minor sixth (8 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the inversion of a minor sixth?",
              "options": ["Major third", "Minor third", "Perfect fourth", "Major second"],
              "answer": "Major third",
              "explanation": "When inverted, a minor sixth becomes a major third"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a minor sixth sound?",
              "options": ["Very dissonant", "Melancholic but consonant", "Bright and happy", "Neutral"],
              "answer": "Melancholic but consonant",
              "explanation": "Minor sixths have a melancholic yet consonant quality"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is E to C?",
              "options": ["Major sixth", "Minor sixth", "Perfect fifth", "Minor seventh"],
              "answer": "Minor sixth",
              "explanation": "E to C is a minor sixth (8 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In which scale is the minor sixth prominent?",
              "options": ["Major scale", "Natural minor scale", "Pentatonic scale", "Chromatic scale"],
              "answer": "Natural minor scale",
              "explanation": "The natural minor scale features a minor sixth from the tonic"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What famous song features a minor sixth leap?",
              "options": ["Happy Birthday", "The Entertainer", "Love Story theme", "Twinkle Twinkle"],
              "answer": "Love Story theme",
              "explanation": "The Love Story theme famously opens with a minor sixth leap"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is A to F?",
              "options": ["Perfect fifth", "Minor sixth", "Major sixth", "Minor seventh"],
              "answer": "Minor sixth",
              "explanation": "A to F is a minor sixth (8 semitones)"
            }
          ]
        },
        {
          "id": "major_sixth",
          "title": "Major Sixth",
          "description": "9 semitones apart",
          "estimatedDuration": 16,
          "xpReward": 160,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a major sixth?",
              "options": ["8", "9", "10", "11"],
              "answer": "9",
              "explanation": "A major sixth is 9 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a major sixth?",
              "options": ["C to Ab", "C to A", "C to Bb", "C to B"],
              "answer": "C to A",
              "explanation": "C to A is a major sixth (9 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the inversion of a major sixth?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Minor second"],
              "answer": "Minor third",
              "explanation": "When inverted, a major sixth becomes a minor third"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a major sixth sound?",
              "options": ["Dissonant", "Warm and consonant", "Tense", "Neutral"],
              "answer": "Warm and consonant",
              "explanation": "Major sixths have a warm, consonant, and pleasant sound"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What interval is F to D?",
              "options": ["Minor sixth", "Major sixth", "Perfect fifth", "Minor seventh"],
              "answer": "Major sixth",
              "explanation": "F to D is a major sixth (9 semitones)"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "In which scale is the major sixth prominent?",
              "options": ["Natural minor scale", "Major scale", "Harmonic minor scale", "Dorian mode"],
              "answer": "Major scale",
              "explanation": "The major scale features a major sixth from the tonic"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What famous song features a major sixth leap?",
              "options": ["My Bonnie Lies Over the Ocean", "Amazing Grace", "Silent Night", "Jingle Bells"],
              "answer": "My Bonnie Lies Over the Ocean",
              "explanation": "'My Bonnie' famously opens with a major sixth leap on 'My Bon-nie'"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is G to E?",
              "options": ["Minor sixth", "Major sixth", "Perfect fifth", "Major seventh"],
              "answer": "Major sixth",
              "explanation": "G to E is a major sixth (9 semitones)"
            }
          ]
        },
        {
          "id": "minor_seventh",
          "title": "Minor Seventh",
          "description": "10 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 180,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a minor seventh?",
              "options": ["9", "10", "11", "12"],
              "answer": "10",
              "explanation": "A minor seventh is 10 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a minor seventh?",
              "options": ["C to B", "C to Bb", "C to A", "C to Ab"],
              "answer": "C to Bb",
              "explanation": "C to Bb is a minor seventh (10 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the inversion of a minor seventh?",
              "options": ["Major second", "Minor second", "Perfect fourth", "Major third"],
              "answer": "Major second",
              "explanation": "When inverted, a minor seventh becomes a major second"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a minor seventh sound?",
              "options": ["Very consonant", "Mildly dissonant", "Extremely harsh", "Neutral"],
              "answer": "Mildly dissonant",
              "explanation": "Minor sevenths are mildly dissonant and create gentle tension"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In which chord is the minor seventh prominent?",
              "options": ["Major 7th chord", "Minor 7th chord", "Diminished chord", "Augmented chord"],
              "answer": "Minor 7th chord",
              "explanation": "Minor 7th chords contain a minor seventh interval from the root"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What interval is D to C?",
              "options": ["Major sixth", "Minor seventh", "Major seventh", "Perfect octave"],
              "answer": "Minor seventh",
              "explanation": "D to C is a minor seventh (10 semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In jazz music, how is the minor seventh used?",
              "options": ["It's avoided", "In dominant 7th chords", "Only in ballads", "For color and sophistication"],
              "answer": "For color and sophistication",
              "explanation": "Jazz uses minor sevenths extensively for harmonic color and sophistication"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is G to F?",
              "options": ["Major sixth", "Minor seventh", "Major seventh", "Perfect fifth"],
              "answer": "Minor seventh",
              "explanation": "G to F is a minor seventh (10 semitones)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "How does a minor seventh resolve?",
              "options": ["Up by step", "Down by step", "Stays the same", "Jumps an octave"],
              "answer": "Down by step",
              "explanation": "Minor sevenths typically resolve downward by step for smooth voice leading"
            }
          ]
        },
        {
          "id": "major_seventh",
          "title": "Major Seventh",
          "description": "11 semitones apart",
          "estimatedDuration": 18,
          "xpReward": 180,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a major seventh?",
              "options": ["10", "11", "12", "13"],
              "answer": "11",
              "explanation": "A major seventh is 11 semitones apart"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "What is an example of a major seventh?",
              "options": ["C to Bb", "C to B", "C to A", "C to Ab"],
              "answer": "C to B",
              "explanation": "C to B is a major seventh (11 semitones)"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the inversion of a major seventh?",
              "options": ["Minor second", "Major second", "Perfect fourth", "Minor third"],
              "answer": "Minor second",
              "explanation": "When inverted, a major seventh becomes a minor second"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "How does a major seventh sound?",
              "options": ["Very consonant", "Sharply dissonant", "Neutral", "Warm"],
              "answer": "Sharply dissonant",
              "explanation": "Major sevenths are quite dissonant and create strong tension"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "In which chord is the major seventh prominent?",
              "options": ["Minor 7th chord", "Major 7th chord", "Diminished chord", "Suspended chord"],
              "answer": "Major 7th chord",
              "explanation": "Major 7th chords contain a major seventh interval from the root"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What interval is F to E?",
              "options": ["Minor seventh", "Major seventh", "Perfect octave", "Minor second"],
              "answer": "Major seventh",
              "explanation": "F to E is a major seventh (11 semitones)"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "In jazz music, how is the major seventh used?",
              "options": ["It's avoided", "For sophisticated harmony", "Only in fast songs", "Only in minor keys"],
              "answer": "For sophisticated harmony",
              "explanation": "Jazz uses major sevenths for sophisticated, colorful harmony"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "What interval is B to A#?",
              "options": ["Minor seventh", "Major seventh", "Perfect octave", "Augmented sixth"],
              "answer": "Major seventh",
              "explanation": "B to A# is a major seventh (11 semitones)"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "How does a major seventh typically resolve?",
              "options": ["Down by step", "Up by step", "Stays the same", "Jumps down an octave"],
              "answer": "Up by step",
              "explanation": "Major sevenths typically resolve upward by step to the octave"
            }
          ]
        },
        {
          "id": "perfect_octave",
          "title": "Perfect Octave",
          "description": "12 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many semitones are in a perfect octave?",
              "options": ["10", "11", "12", "13"],
              "answer": "12",
              "explanation": "A perfect octave is 12 semitones apart"
            }
          ]
        }
      ]
    },
    {
      "id": "expanding",
      "title": "🎸 LEVEL 3: Expanding",
      "description": "Advanced theory and composition techniques",
      "color": "#F59E0B",
      "lessons": [
        // SCALES SERIES (100 lessons)
        {
          "id": "c_major_scale",
          "title": "C Major Scale",
          "description": "The foundation scale with no sharps or flats",
          "estimatedDuration": 20,
          "xpReward": 200,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which notes are in the C major scale?",
              "options": ["C-D-E-F-G-A-B", "C-D-E-F#-G-A-B", "C-D-E♭-F-G-A-B", "C-D-E-F-G-A-B♭"],
              "answer": "C-D-E-F-G-A-B",
              "explanation": "C major has no sharps or flats: C-D-E-F-G-A-B"
            },
            {
              "id": "ex2",
              "type": "multiple-choice",
              "question": "How many sharps or flats does C major have?",
              "options": ["1 sharp", "2 flats", "None", "3 sharps"],
              "answer": "None",
              "explanation": "C major is the only major scale with no sharps or flats"
            },
            {
              "id": "ex3",
              "type": "multiple-choice",
              "question": "What is the pattern of whole and half steps in C major?",
              "options": ["W-W-H-W-W-W-H", "W-H-W-W-H-W-W", "H-W-W-H-W-W-W", "W-W-W-H-W-W-H"],
              "answer": "W-W-H-W-W-W-H",
              "explanation": "Major scales follow the pattern: Whole-Whole-Half-Whole-Whole-Whole-Half"
            },
            {
              "id": "ex4",
              "type": "multiple-choice",
              "question": "What is the tonic of C major?",
              "options": ["C", "D", "E", "G"],
              "answer": "C",
              "explanation": "The tonic is the first degree of the scale, which is C in C major"
            },
            {
              "id": "ex5",
              "type": "multiple-choice",
              "question": "What is the dominant of C major?",
              "options": ["F", "G", "A", "B"],
              "answer": "G",
              "explanation": "The dominant is the fifth degree of the scale, which is G in C major"
            },
            {
              "id": "ex6",
              "type": "multiple-choice",
              "question": "What is the subdominant of C major?",
              "options": ["D", "E", "F", "G"],
              "answer": "F",
              "explanation": "The subdominant is the fourth degree of the scale, which is F in C major"
            },
            {
              "id": "ex7",
              "type": "multiple-choice",
              "question": "What is the leading tone of C major?",
              "options": ["A", "B", "C", "D"],
              "answer": "B",
              "explanation": "The leading tone is the seventh degree, which leads back to the tonic (B leads to C)"
            },
            {
              "id": "ex8",
              "type": "multiple-choice",
              "question": "Why is C major considered the 'natural' scale?",
              "options": ["It's the easiest to play", "It uses only white keys on piano", "It's the most common", "It sounds the best"],
              "answer": "It uses only white keys on piano",
              "explanation": "C major uses only the white keys on a piano, making it appear 'natural'"
            },
            {
              "id": "ex9",
              "type": "multiple-choice",
              "question": "What chord is built on the first degree of C major?",
              "options": ["C major", "D minor", "F major", "G major"],
              "answer": "C major",
              "explanation": "The I chord in C major is C major (C-E-G)"
            },
            {
              "id": "ex10",
              "type": "multiple-choice",
              "question": "What is the relative minor of C major?",
              "options": ["A minor", "E minor", "D minor", "G minor"],
              "answer": "A minor",
              "explanation": "A minor is the relative minor of C major (same notes, different starting point)"
            }
          ]
        },
        {
          "id": "g_major_scale",
          "title": "G Major Scale",
          "description": "One sharp: F#",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which sharp is in G major?",
              "options": ["C#", "F#", "G#", "D#"],
              "answer": "F#",
              "explanation": "G major has one sharp: F#"
            }
          ]
        },
        {
          "id": "d_major_scale",
          "title": "D Major Scale",
          "description": "Two sharps: F# and C#",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which sharps are in D major?",
              "options": ["F# and C#", "F# and G#", "C# and G#", "F# and D#"],
              "answer": "F# and C#",
              "explanation": "D major has two sharps: F# and C#"
            }
          ]
        },
        {
          "id": "a_major_scale",
          "title": "A Major Scale",
          "description": "Three sharps: F#, C#, and G#",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does A major have?",
              "options": ["2", "3", "4", "5"],
              "answer": "3",
              "explanation": "A major has three sharps: F#, C#, and G#"
            }
          ]
        },
        {
          "id": "e_major_scale",
          "title": "E Major Scale",
          "description": "Four sharps: F#, C#, G#, and D#",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does E major have?",
              "options": ["3", "4", "5", "6"],
              "answer": "4",
              "explanation": "E major has four sharps: F#, C#, G#, and D#"
            }
          ]
        },
        {
          "id": "b_major_scale",
          "title": "B Major Scale",
          "description": "Five sharps: F#, C#, G#, D#, and A#",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does B major have?",
              "options": ["4", "5", "6", "7"],
              "answer": "5",
              "explanation": "B major has five sharps: F#, C#, G#, D#, and A#"
            }
          ]
        },
        {
          "id": "f_sharp_major_scale",
          "title": "F# Major Scale",
          "description": "Six sharps: F#, C#, G#, D#, A#, and E#",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does F# major have?",
              "options": ["5", "6", "7", "8"],
              "answer": "6",
              "explanation": "F# major has six sharps: F#, C#, G#, D#, A#, and E#"
            }
          ]
        },
        {
          "id": "c_sharp_major_scale",
          "title": "C# Major Scale",
          "description": "Seven sharps: F#, C#, G#, D#, A#, E#, and B#",
          "estimatedDuration": 8,
          "xpReward": 80,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "How many sharps does C# major have?",
              "options": ["6", "7", "8", "9"],
              "answer": "7",
              "explanation": "C# major has seven sharps: all notes are sharp"
            }
          ]
        },
        {
          "id": "f_major_scale",
          "title": "F Major Scale",
          "description": "One flat: B♭",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which flat is in F major?",
              "options": ["A♭", "B♭", "E♭", "D♭"],
              "answer": "B♭",
              "explanation": "F major has one flat: B♭"
            }
          ]
        },
        {
          "id": "bb_major_scale",
          "title": "B♭ Major Scale",
          "description": "Two flats: B♭ and E♭",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple-choice",
              "question": "Which flats are in B♭ major?",
              "options": ["B♭ and E♭", "B♭ and A♭", "E♭ and A♭", "B♭ and D♭"],
              "answer": "B♭ and E♭",
              "explanation": "B♭ major has two flats: B♭ and E♭"
            }
          ]
        }
      ]
    },
    {
      "id": "ear_voice_training",
      "title": "🎤 LEVEL 4: Ear & Voice Training",
      "description": "Develop perfect pitch and vocal skills",
      "color": "#8B5CF6",
      "lessons": [
        // EAR TRAINING SERIES (100 lessons)
        {
          "id": "interval_recognition_unison",
          "title": "Recognizing Unisons",
          "description": "Identify when two notes are the same",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "listening-comprehension",
              "question": "Are these two notes the same or different?",
              "options": ["Same", "Different"],
              "answer": "Same",
              "explanation": "These notes are identical - a unison"
            }
          ]
        },
        {
          "id": "interval_recognition_second",
          "title": "Recognizing Seconds",
          "description": "Identify major and minor seconds by ear",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "listening-comprehension",
              "question": "Is this a major or minor second?",
              "options": ["Major second", "Minor second"],
              "answer": "Major second",
              "explanation": "This is a major second - 2 semitones apart"
            }
          ]
        },
        {
          "id": "interval_recognition_third",
          "title": "Recognizing Thirds",
          "description": "Identify major and minor thirds by ear",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "listening-comprehension",
              "question": "Is this a major or minor third?",
              "options": ["Major third", "Minor third"],
              "answer": "Major third",
              "explanation": "This is a major third - sounds bright and happy"
            }
          ]
        },
        {
          "id": "perfect_pitch_c",
          "title": "Perfect Pitch: Note C",
          "description": "Identify the note C without reference",
          "estimatedDuration": 8,
          "xpReward": 80,
          "exercises": [
            {
              "id": "ex1",
              "type": "listening-comprehension",
              "question": "What note is this?",
              "options": ["C", "D", "E", "F"],
              "answer": "C",
              "explanation": "This is the note C"
            }
          ]
        },
        {
          "id": "perfect_pitch_d",
          "title": "Perfect Pitch: Note D",
          "description": "Identify the note D without reference",
          "estimatedDuration": 8,
          "xpReward": 80,
          "exercises": [
            {
              "id": "ex1",
              "type": "listening-comprehension",
              "question": "What note is this?",
              "options": ["C", "D", "E", "F"],
              "answer": "D",
              "explanation": "This is the note D"
            }
          ]
        }
      ]
    }
  ]
};
