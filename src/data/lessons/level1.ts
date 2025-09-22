// Level 1: Musical Alphabet & Note Recognition
export const level1Lessons =     {
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
            },
            {
              "id": "ex11",
              "type": "multiple-choice",
              "question": "On a piano, where is the note A located relative to the black keys?",
              "options": ["Between two black keys", "To the left of three black keys", "To the right of two black keys", "It varies"],
              "answer": "To the right of two black keys",
              "explanation": "A is located to the right of the group of two black keys"
            },
            {
              "id": "ex12",
              "type": "multiple-choice",
              "question": "On a piano, where is B located?",
              "options": ["On a black key", "To the right of the group of three black keys", "Between two white keys", "To the left of C"],
              "answer": "To the left of C",
              "explanation": "B is the white key immediately to the left of C"
            },
            {
              "id": "ex13",
              "type": "multiple-choice",
              "question": "On a piano, where is C located?",
              "options": ["On a black key", "To the left of two black keys", "To the right of three black keys", "Between black keys"],
              "answer": "To the left of two black keys",
              "explanation": "C is the white key immediately to the left of the group of two black keys"
            },
            {
              "id": "ex14",
              "type": "multiple-choice",
              "question": "On a piano, where is D located relative to the black keys?",
              "options": ["Between two black keys", "To the right of two black keys", "To the left of three black keys", "Between C and E"],
              "answer": "Between C and E",
              "explanation": "D is the white key between C and E"
            },
            {
              "id": "ex15",
              "type": "multiple-choice",
              "question": "On a piano, where is F located?",
              "options": ["To the left of three black keys", "To the right of two black keys", "Between black keys", "To the left of two black keys"],
              "answer": "To the left of three black keys",
              "explanation": "F is the white key immediately to the left of the group of three black keys"
            }
          ]
        },
        {
          "id": "note_recognition_combined",
          "title": "Recognizing Notes",
          "description": "Master identifying all musical notes A-G with randomized exercises",
          "type": "theory",
          "difficulty": "beginner",
          "estimatedDuration": 20,
          "xpReward": 200,
          "randomizeExercises": true,
          "exerciseCount": 10,
          "exercisePool": [
            // Note A exercises
            {
              "id": "a_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the treble clef staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "explanation": "This is the note A on the staff"
            },
            {
              "id": "a_ex2",
              "type": "multiple-choice",
              "question": "What is the first letter of the musical alphabet?",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "explanation": "A is the first letter of the musical alphabet"
            },
            {
              "id": "a_ex4",
              "type": "multiple-choice",
              "question": "What note comes before A in the musical alphabet?",
              "options": ["Z", "G", "B", "H"],
              "answer": "G",
              "explanation": "G comes before A, then the alphabet repeats"
            },
            {
              "id": "a_ex5",
              "type": "multiple-choice",
              "question": "What note comes after A?",
              "options": ["B", "C", "G", "A#"],
              "answer": "B",
              "explanation": "B comes directly after A in the musical alphabet"
            },
            {
              "id": "a_ex6",
              "type": "multiple-choice",
              "question": "How many semitones are between A and A# (A sharp)?",
              "options": ["1", "2", "3", "12"],
              "answer": "1",
              "explanation": "A sharp is one semitone (half step) above A"
            },
            {
              "id": "a_ex7",
              "type": "multiple-choice",
              "question": "What is the frequency of the A above middle C (A4)?",
              "options": ["220 Hz", "440 Hz", "880 Hz", "110 Hz"],
              "answer": "440 Hz",
              "explanation": "A4 (the A above middle C) is standardized at 440 Hz"
            },
            {
              "id": "a_ex8",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note A located?",
              "options": ["On the second line", "In the second space", "On the first line", "Above the staff"],
              "answer": "In the second space",
              "explanation": "In treble clef, A is located in the second space from the bottom"
            },
            {
              "id": "a_ex9",
              "type": "multiple-choice",
              "question": "What interval is from A to C?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "A to C is a minor third (3 semitones)"
            },
            {
              "id": "a_ex10",
              "type": "multiple-choice",
              "question": "Which key signature has A as its tonic (starting note)?",
              "options": ["A major", "C major", "G major", "F major"],
              "answer": "A major",
              "explanation": "A major is the key that starts on the note A"
            },
            // Note B exercises
            {
              "id": "b_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the treble clef staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "B",
              "explanation": "This is the note B on the staff"
            },
            {
              "id": "b_ex2",
              "type": "multiple-choice",
              "question": "What note comes after A in the musical alphabet?",
              "options": ["B", "C", "A#", "Bb"],
              "answer": "B",
              "explanation": "B comes directly after A in the musical alphabet"
            },
            {
              "id": "b_ex4",
              "type": "multiple-choice",
              "question": "What is special about the interval from B to C?",
              "options": ["It's a whole step", "It's a half step", "It's two steps", "There's a black key between them"],
              "answer": "It's a half step",
              "explanation": "B to C is a natural half step with no black key between"
            },
            {
              "id": "b_ex5",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note B located?",
              "options": ["On the middle line", "In the top space", "On the second line", "In the third space"],
              "answer": "On the middle line",
              "explanation": "In treble clef, B is on the middle (third) line"
            },
            {
              "id": "b_ex6",
              "type": "multiple-choice",
              "question": "What note is a whole step below B?",
              "options": ["A", "Bb", "C", "A#"],
              "answer": "A",
              "explanation": "A is a whole step (two semitones) below B"
            },
            {
              "id": "b_ex7",
              "type": "multiple-choice",
              "question": "What is Bb (B flat)?",
              "options": ["The same as A#", "A half step below B", "Both A and B", "A different note entirely"],
              "answer": "Both A and B",
              "explanation": "Bb is the same as A# and is a half step below B"
            },
            {
              "id": "b_ex8",
              "type": "multiple-choice",
              "question": "In the C major scale, what role does B play?",
              "options": ["It's the tonic", "It's the leading tone", "It's the dominant", "It's not in C major"],
              "answer": "It's the leading tone",
              "explanation": "B is the 7th degree of C major, called the leading tone"
            },
            {
              "id": "b_ex9",
              "type": "multiple-choice",
              "question": "What interval is from B to D?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "B to D is a minor third (3 semitones)"
            },
            {
              "id": "b_ex10",
              "type": "multiple-choice",
              "question": "Which key signature has B as its tonic?",
              "options": ["B major", "Bb major", "Both A and B", "B minor"],
              "answer": "Both A and B",
              "explanation": "Both B major and B minor have B as their tonic note"
            },
            // Note C exercises
            {
              "id": "c_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the treble clef staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "C",
              "explanation": "This is the note C on the staff"
            },
            {
              "id": "c_ex2",
              "type": "multiple-choice",
              "question": "What is special about middle C?",
              "options": ["It's the highest note", "It's between treble and bass clef", "It's the loudest note", "It's always sharp"],
              "answer": "It's between treble and bass clef",
              "explanation": "Middle C sits between the treble and bass clef staves"
            },
            {
              "id": "c_ex4",
              "type": "multiple-choice",
              "question": "What note comes before C?",
              "options": ["B", "D", "C#", "Bb"],
              "answer": "B",
              "explanation": "B comes directly before C in the musical alphabet"
            },
            {
              "id": "c_ex5",
              "type": "multiple-choice",
              "question": "What is the interval from C to E?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Major second"],
              "answer": "Major third",
              "explanation": "C to E is a major third (4 semitones)"
            },
            {
              "id": "c_ex6",
              "type": "multiple-choice",
              "question": "In the key of C major, what role does C play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "C is the tonic (first degree) of the C major scale"
            },
            {
              "id": "c_ex7",
              "type": "multiple-choice",
              "question": "How many sharps or flats are in the key of C major?",
              "options": ["1 sharp", "2 flats", "None", "3 sharps"],
              "answer": "None",
              "explanation": "C major has no sharps or flats - all natural notes"
            },
            {
              "id": "c_ex8",
              "type": "multiple-choice",
              "question": "What is C# (C sharp)?",
              "options": ["The same as Db", "A half step above C", "Both A and B", "A black key"],
              "answer": "Both A and B",
              "explanation": "C# is the same as Db, a half step above C, and played on a black key"
            },
            {
              "id": "c_ex9",
              "type": "multiple-choice",
              "question": "In treble clef, where is middle C written?",
              "options": ["On the staff", "Below the staff with a ledger line", "Above the staff", "On the first line"],
              "answer": "Below the staff with a ledger line",
              "explanation": "Middle C is written below the treble staff with a ledger line"
            },
            {
              "id": "c_ex10",
              "type": "multiple-choice",
              "question": "What frequency is middle C approximately?",
              "options": ["220 Hz", "262 Hz", "440 Hz", "523 Hz"],
              "answer": "262 Hz",
              "explanation": "Middle C (C4) has a frequency of approximately 262 Hz"
            },
            // Note D exercises
            {
              "id": "d_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the treble clef staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "D",
              "explanation": "This is the note D on the staff"
            },
            {
              "id": "d_ex2",
              "type": "multiple-choice",
              "question": "What note comes after C in the musical alphabet?",
              "options": ["B", "D", "E", "F"],
              "answer": "D",
              "explanation": "D comes directly after C in the musical alphabet"
            },
            {
              "id": "d_ex4",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note D located?",
              "options": ["On the fourth line", "In the third space", "Above the staff", "On the second line"],
              "answer": "Above the staff",
              "explanation": "In treble clef, D (above middle C) is above the staff"
            },
            {
              "id": "d_ex5",
              "type": "multiple-choice",
              "question": "What interval is from D to F?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "D to F is a minor third (3 semitones)"
            },
            {
              "id": "d_ex6",
              "type": "multiple-choice",
              "question": "In the key of D major, what role does D play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "D is the tonic (first degree) of the D major scale"
            },
            {
              "id": "d_ex7",
              "type": "multiple-choice",
              "question": "What is D# (D sharp)?",
              "options": ["The same as Eb", "A half step above D", "Both A and B", "A black key"],
              "answer": "Both A and B",
              "explanation": "D# is the same as Eb, a half step above D, and played on a black key"
            },
            {
              "id": "d_ex8",
              "type": "multiple-choice",
              "question": "What note is a whole step above D?",
              "options": ["D#", "E", "F", "C"],
              "answer": "E",
              "explanation": "E is a whole step (two semitones) above D"
            },
            // Note E exercises
            {
              "id": "e_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the treble clef staff?",
              "options": ["D", "E", "F", "G"],
              "answer": "E",
              "explanation": "This is the note E on the staff"
            },
            {
              "id": "e_ex2",
              "type": "multiple-choice",
              "question": "What note comes after D in the musical alphabet?",
              "options": ["C", "E", "F", "G"],
              "answer": "E",
              "explanation": "E comes directly after D in the musical alphabet"
            },
            {
              "id": "e_ex3",
              "type": "multiple-choice",
              "question": "What is special about the interval from E to F?",
              "options": ["It's a whole step", "It's a half step", "It's two steps", "There's a black key between them"],
              "answer": "It's a half step",
              "explanation": "E to F is a natural half step with no black key between"
            },
            {
              "id": "e_ex4",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note E located?",
              "options": ["On the bottom line", "In the first space", "On the second line", "In the second space"],
              "answer": "On the bottom line",
              "explanation": "In treble clef, E is on the bottom (first) line"
            },
            {
              "id": "e_ex5",
              "type": "multiple-choice",
              "question": "What interval is from E to G?",
              "options": ["Major second", "Minor third", "Major third", "Perfect fourth"],
              "answer": "Minor third",
              "explanation": "E to G is a minor third (3 semitones)"
            },
            {
              "id": "e_ex6",
              "type": "multiple-choice",
              "question": "In the key of E major, what role does E play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "E is the tonic (first degree) of the E major scale"
            },
            {
              "id": "e_ex7",
              "type": "multiple-choice",
              "question": "What note is a whole step below E?",
              "options": ["D", "Eb", "F", "C"],
              "answer": "D",
              "explanation": "D is a whole step (two semitones) below E"
            },
            {
              "id": "e_ex8",
              "type": "multiple-choice",
              "question": "How many sharps does E major have?",
              "options": ["2", "3", "4", "5"],
              "answer": "4",
              "explanation": "E major has four sharps: F#, C#, G#, and D#"
            },
            // Note F exercises
            {
              "id": "f_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the treble clef staff?",
              "options": ["D", "E", "F", "G"],
              "answer": "F",
              "explanation": "This is the note F on the staff"
            },
            {
              "id": "f_ex2",
              "type": "multiple-choice",
              "question": "What note comes after E in the musical alphabet?",
              "options": ["D", "F", "G", "A"],
              "answer": "F",
              "explanation": "F comes directly after E in the musical alphabet"
            },
            {
              "id": "f_ex4",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note F located?",
              "options": ["In the first space", "On the first line", "In the second space", "On the second line"],
              "answer": "In the first space",
              "explanation": "In treble clef, F is in the first space from the bottom"
            },
            {
              "id": "f_ex5",
              "type": "multiple-choice",
              "question": "What interval is from F to A?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Perfect fifth"],
              "answer": "Major third",
              "explanation": "F to A is a major third (4 semitones)"
            },
            {
              "id": "f_ex6",
              "type": "multiple-choice",
              "question": "In the key of F major, what role does F play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "F is the tonic (first degree) of the F major scale"
            },
            {
              "id": "f_ex7",
              "type": "multiple-choice",
              "question": "How many flats does F major have?",
              "options": ["0", "1", "2", "3"],
              "answer": "1",
              "explanation": "F major has one flat: Bb"
            },
            {
              "id": "f_ex8",
              "type": "multiple-choice",
              "question": "What is F# (F sharp)?",
              "options": ["The same as Gb", "A half step above F", "Both A and B", "A black key"],
              "answer": "Both A and B",
              "explanation": "F# is the same as Gb, a half step above F, and played on a black key"
            },
            // Note G exercises
            {
              "id": "g_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the treble clef staff?",
              "options": ["E", "F", "G", "A"],
              "answer": "G",
              "explanation": "This is the note G on the staff"
            },
            {
              "id": "g_ex2",
              "type": "multiple-choice",
              "question": "What note comes after F in the musical alphabet?",
              "options": ["E", "G", "A", "H"],
              "answer": "G",
              "explanation": "G comes directly after F in the musical alphabet"
            },
            {
              "id": "g_ex3",
              "type": "multiple-choice",
              "question": "What note comes before A in the musical alphabet?",
              "options": ["F", "G", "H", "B"],
              "answer": "G",
              "explanation": "G comes directly before A in the musical alphabet"
            },
            {
              "id": "g_ex4",
              "type": "multiple-choice",
              "question": "In treble clef, where is the note G located?",
              "options": ["On the second line", "In the second space", "On the first line", "In the first space"],
              "answer": "On the second line",
              "explanation": "In treble clef, G is on the second line from the bottom"
            },
            {
              "id": "g_ex5",
              "type": "multiple-choice",
              "question": "What interval is from G to B?",
              "options": ["Minor third", "Major third", "Perfect fourth", "Perfect fifth"],
              "answer": "Major third",
              "explanation": "G to B is a major third (4 semitones)"
            },
            {
              "id": "g_ex6",
              "type": "multiple-choice",
              "question": "In the key of G major, what role does G play?",
              "options": ["Dominant", "Subdominant", "Tonic", "Leading tone"],
              "answer": "Tonic",
              "explanation": "G is the tonic (first degree) of the G major scale"
            },
            {
              "id": "g_ex7",
              "type": "multiple-choice",
              "question": "How many sharps does G major have?",
              "options": ["0", "1", "2", "3"],
              "answer": "1",
              "explanation": "G major has one sharp: F#"
            },
            {
              "id": "g_ex8",
              "type": "multiple-choice",
              "question": "What is the treble clef also called?",
              "options": ["F clef", "G clef", "C clef", "Alto clef"],
              "answer": "G clef",
              "explanation": "The treble clef is also called the G clef because it circles around the G line"
            },
            // Bass clef note recognition exercises
            {
              "id": "bass_a_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the bass clef staff?",
              "options": ["G", "A", "B", "C"],
              "answer": "A",
              "explanation": "This is the note A on the bass clef staff"
            },
            {
              "id": "bass_b_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the bass clef staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "B",
              "explanation": "This is the note B on the bass clef staff"
            },
            {
              "id": "bass_c_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the bass clef staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "C",
              "explanation": "This is the note C on the bass clef staff"
            },
            {
              "id": "bass_d_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the bass clef staff?",
              "options": ["B", "C", "D", "E"],
              "answer": "D",
              "explanation": "This is the note D on the bass clef staff"
            },
            {
              "id": "bass_e_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the bass clef staff?",
              "options": ["C", "D", "E", "F"],
              "answer": "E",
              "explanation": "This is the note E on the bass clef staff"
            },
            {
              "id": "bass_f_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the bass clef staff?",
              "options": ["D", "E", "F", "G"],
              "answer": "F",
              "explanation": "This is the note F on the bass clef staff"
            },
            {
              "id": "bass_g_ex1",
              "type": "multiple-choice",
              "question": "What note is shown on the bass clef staff?",
              "options": ["E", "F", "G", "A"],
              "answer": "G",
              "explanation": "This is the note G on the bass clef staff"
            }
          ],
          "exercises": []
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
        // RHYTHM TRAINING - Comprehensive randomized lesson
        {
          "id": "rhythm_training",
          "title": "Rhythm Training",
          "description": "Master note values, rests, and time signatures - randomized practice",
          "type": "theory",
          "difficulty": "beginner",
          "estimatedDuration": 25,
          "xpReward": 250,
          "prerequisites": [],
          "randomizeExercises": true,
          "exerciseCount": 10,
          "exercises": [
            // WHOLE NOTES EXERCISES
            {
              "id": "whole-1",
              "type": "multiple-choice",
              "question": "How many beats does a whole note get in 4/4 time?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": false },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": true }
              ],
              "correctAnswer": "d",
              "difficulty": "beginner",
              "explanation": "A whole note gets 4 beats in 4/4 time"
            },
            {
              "id": "whole-2",
              "type": "multiple-choice",
              "question": "What does a whole note look like?",
              "options": [
                { "id": "a", "text": "Filled note head with stem", "isCorrect": false },
                { "id": "b", "text": "Empty note head with stem", "isCorrect": false },
                { "id": "c", "text": "Empty note head without stem", "isCorrect": true },
                { "id": "d", "text": "Filled note head without stem", "isCorrect": false }
              ],
              "correctAnswer": "c",
              "difficulty": "beginner",
              "explanation": "A whole note is an empty oval with no stem"
            },
            {
              "id": "whole-3",
              "type": "multiple-choice",
              "question": "How many whole notes fit in one measure of 4/4 time?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": true },
                { "id": "b", "text": "2", "isCorrect": false },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "a",
              "difficulty": "beginner",
              "explanation": "One whole note fills an entire 4/4 measure"
            },
            {
              "id": "whole-4",
              "type": "multiple-choice",
              "question": "How many half notes equal one whole note?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": true },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "Two half notes equal one whole note"
            },
            {
              "id": "whole-5",
              "type": "multiple-choice",
              "question": "In 3/4 time, how many beats would a whole note get?",
              "options": [
                { "id": "a", "text": "3", "isCorrect": false },
                { "id": "b", "text": "4", "isCorrect": false },
                { "id": "c", "text": "It doesn't fit", "isCorrect": true },
                { "id": "d", "text": "6", "isCorrect": false }
              ],
              "correctAnswer": "c",
              "difficulty": "intermediate",
              "explanation": "A whole note (4 beats) doesn't fit in 3/4 time (3 beats per measure)"
            },
            {
              "id": "whole-6",
              "type": "multiple-choice",
              "question": "Where is a whole note positioned on the staff?",
              "options": [
                { "id": "a", "text": "Hanging from a line", "isCorrect": false },
                { "id": "b", "text": "Sitting on a line or in a space", "isCorrect": true },
                { "id": "c", "text": "Always in spaces", "isCorrect": false },
                { "id": "d", "text": "Always on lines", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "Whole notes sit on lines or in spaces, just like other notes"
            },
            // HALF NOTES EXERCISES
            {
              "id": "half-1",
              "type": "multiple-choice",
              "question": "How many beats does a half note get?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": true },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "A half note gets 2 beats in 4/4 time"
            },
            {
              "id": "half-2",
              "type": "multiple-choice",
              "question": "How many half notes fit in one measure of 4/4 time?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": true },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "Two half notes fit in one 4/4 measure (2 + 2 = 4 beats)"
            },
            // QUARTER NOTES EXERCISES
            {
              "id": "quarter-1",
              "type": "multiple-choice",
              "question": "How many beats does a quarter note get?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": true },
                { "id": "b", "text": "2", "isCorrect": false },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "a",
              "difficulty": "beginner",
              "explanation": "A quarter note gets 1 beat in 4/4 time"
            },
            {
              "id": "quarter-2",
              "type": "multiple-choice",
              "question": "How many quarter notes fit in one measure of 4/4 time?",
              "options": [
                { "id": "a", "text": "2", "isCorrect": false },
                { "id": "b", "text": "3", "isCorrect": false },
                { "id": "c", "text": "4", "isCorrect": true },
                { "id": "d", "text": "8", "isCorrect": false }
              ],
              "correctAnswer": "c",
              "difficulty": "beginner",
              "explanation": "Four quarter notes fit in one 4/4 measure"
            },
            // EIGHTH NOTES EXERCISES
            {
              "id": "eighth-1",
              "type": "multiple-choice",
              "question": "How many eighth notes equal one quarter note?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": true },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "Two eighth notes equal one quarter note"
            },
            {
              "id": "eighth-2",
              "type": "multiple-choice",
              "question": "How many eighth notes fit in one measure of 4/4 time?",
              "options": [
                { "id": "a", "text": "4", "isCorrect": false },
                { "id": "b", "text": "6", "isCorrect": false },
                { "id": "c", "text": "8", "isCorrect": true },
                { "id": "d", "text": "16", "isCorrect": false }
              ],
              "correctAnswer": "c",
              "difficulty": "intermediate",
              "explanation": "Eight eighth notes fit in one 4/4 measure"
            },
            // SIXTEENTH NOTES EXERCISES
            {
              "id": "sixteenth-1",
              "type": "multiple-choice",
              "question": "How many sixteenth notes equal one quarter note?",
              "options": [
                { "id": "a", "text": "2", "isCorrect": false },
                { "id": "b", "text": "3", "isCorrect": false },
                { "id": "c", "text": "4", "isCorrect": true },
                { "id": "d", "text": "8", "isCorrect": false }
              ],
              "correctAnswer": "c",
              "difficulty": "intermediate",
              "explanation": "Four sixteenth notes equal one quarter note"
            },
            {
              "id": "sixteenth-2",
              "type": "multiple-choice",
              "question": "How many sixteenth notes fit in one measure of 4/4 time?",
              "options": [
                { "id": "a", "text": "8", "isCorrect": false },
                { "id": "b", "text": "12", "isCorrect": false },
                { "id": "c", "text": "16", "isCorrect": true },
                { "id": "d", "text": "32", "isCorrect": false }
              ],
              "correctAnswer": "c",
              "difficulty": "intermediate",
              "explanation": "Sixteen sixteenth notes fit in one 4/4 measure"
            },
            // DOTTED NOTES EXERCISES
            {
              "id": "dotted-1",
              "type": "multiple-choice",
              "question": "A dotted half note gets how many beats?",
              "options": [
                { "id": "a", "text": "2", "isCorrect": false },
                { "id": "b", "text": "3", "isCorrect": true },
                { "id": "c", "text": "4", "isCorrect": false },
                { "id": "d", "text": "6", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "intermediate",
              "explanation": "A dotted half note = 2 + 1 = 3 beats"
            },
            {
              "id": "dotted-2",
              "type": "multiple-choice",
              "question": "A dotted quarter note gets how many beats?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "1.5", "isCorrect": true },
                { "id": "c", "text": "2", "isCorrect": false },
                { "id": "d", "text": "3", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "intermediate",
              "explanation": "A dotted quarter note = 1 + 0.5 = 1.5 beats"
            },
            // TIED NOTES EXERCISES
            {
              "id": "tied-1",
              "type": "multiple-choice",
              "question": "Two tied quarter notes equal how many beats?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": true },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "Two tied quarter notes = 1 + 1 = 2 beats"
            },
            {
              "id": "tied-2",
              "type": "multiple-choice",
              "question": "A tied whole note and half note equal how many beats?",
              "options": [
                { "id": "a", "text": "4", "isCorrect": false },
                { "id": "b", "text": "5", "isCorrect": false },
                { "id": "c", "text": "6", "isCorrect": true },
                { "id": "d", "text": "8", "isCorrect": false }
              ],
              "correctAnswer": "c",
              "difficulty": "intermediate",
              "explanation": "A tied whole note and half note = 4 + 2 = 6 beats"
            },
            // RESTS EXERCISES
            {
              "id": "rest-whole-1",
              "type": "multiple-choice",
              "question": "How many beats of silence is a whole rest?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": false },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": true }
              ],
              "correctAnswer": "d",
              "difficulty": "beginner",
              "explanation": "A whole rest is 4 beats of silence"
            },
            {
              "id": "rest-half-1",
              "type": "multiple-choice",
              "question": "How many beats of silence is a half rest?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": true },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "A half rest is 2 beats of silence"
            },
            {
              "id": "rest-quarter-1",
              "type": "multiple-choice",
              "question": "How many beats of silence is a quarter rest?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": true },
                { "id": "b", "text": "2", "isCorrect": false },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "a",
              "difficulty": "beginner",
              "explanation": "A quarter rest is 1 beat of silence"
            },
            {
              "id": "rest-eighth-1",
              "type": "multiple-choice",
              "question": "How many eighth rests equal one quarter rest?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": true },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "Two eighth rests equal one quarter rest"
            },
            {
              "id": "rest-basics-1",
              "type": "multiple-choice",
              "question": "Which rest looks like a small rectangle sitting on top of a line?",
              "options": [
                { "id": "a", "text": "Whole rest", "isCorrect": false },
                { "id": "b", "text": "Half rest", "isCorrect": true },
                { "id": "c", "text": "Quarter rest", "isCorrect": false },
                { "id": "d", "text": "Eighth rest", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "The half rest sits on the middle line like a hat"
            },
            // TIME SIGNATURE EXERCISES
            {
              "id": "time-4-4-1",
              "type": "multiple-choice",
              "question": "In 4/4 time, how many quarter notes fit in one measure?",
              "options": [
                { "id": "a", "text": "2", "isCorrect": false },
                { "id": "b", "text": "3", "isCorrect": false },
                { "id": "c", "text": "4", "isCorrect": true },
                { "id": "d", "text": "8", "isCorrect": false }
              ],
              "correctAnswer": "c",
              "difficulty": "beginner",
              "explanation": "4/4 time has 4 quarter note beats per measure"
            },
            {
              "id": "time-3-4-1",
              "type": "multiple-choice",
              "question": "In 3/4 time, how many quarter notes fit in one measure?",
              "options": [
                { "id": "a", "text": "2", "isCorrect": false },
                { "id": "b", "text": "3", "isCorrect": true },
                { "id": "c", "text": "4", "isCorrect": false },
                { "id": "d", "text": "6", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "3/4 time has 3 quarter note beats per measure"
            },
            {
              "id": "time-2-4-1",
              "type": "multiple-choice",
              "question": "In 2/4 time, how many quarter notes fit in one measure?",
              "options": [
                { "id": "a", "text": "1", "isCorrect": false },
                { "id": "b", "text": "2", "isCorrect": true },
                { "id": "c", "text": "3", "isCorrect": false },
                { "id": "d", "text": "4", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "2/4 time has 2 quarter note beats per measure"
            },
            {
              "id": "time-signature-1",
              "type": "multiple-choice",
              "question": "What does the top number in a time signature tell us?",
              "options": [
                { "id": "a", "text": "How fast to play", "isCorrect": false },
                { "id": "b", "text": "How many beats per measure", "isCorrect": true },
                { "id": "c", "text": "What key we're in", "isCorrect": false },
                { "id": "d", "text": "How loud to play", "isCorrect": false }
              ],
              "correctAnswer": "b",
              "difficulty": "beginner",
              "explanation": "The top number tells us how many beats are in each measure"
            },
            {
              "id": "time-signature-2",
              "type": "multiple-choice",
              "question": "What does the bottom number in a time signature tell us?",
              "options": [
                { "id": "a", "text": "What note value gets one beat", "isCorrect": true },
                { "id": "b", "text": "How many measures in the song", "isCorrect": false },
                { "id": "c", "text": "What clef to use", "isCorrect": false },
                { "id": "d", "text": "How many sharps or flats", "isCorrect": false }
              ],
              "correctAnswer": "a",
              "difficulty": "intermediate",
              "explanation": "The bottom number tells us what note value gets one beat (4 = quarter note, 2 = half note, etc.)"
            }
          ]
        }
      ]
    };
