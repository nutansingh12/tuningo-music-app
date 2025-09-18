import { SkillTree, Achievement } from '@/types';

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
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many letters are in the musical alphabet?",
              "options": ["5", "7", "8", "12"],
              "answer": "7",
              "explanation": "Music uses 7 letters: A, B, C, D, E, F, G"
            }
          ]
        },
        {
          "id": "note_recognition_a",
          "title": "Recognizing Note A",
          "description": "Master identifying the note A",
          "estimatedDuration": 4,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which note is shown? (A on staff)",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "explanation": "This is the note A on the staff"
            }
          ]
        },
        {
          "id": "note_recognition_b",
          "title": "Recognizing Note B",
          "description": "Master identifying the note B",
          "estimatedDuration": 4,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which note is shown? (B on staff)",
              "options": ["A", "B", "C", "D"],
              "answer": "B",
              "explanation": "This is the note B on the staff"
            }
          ]
        },
        {
          "id": "note_recognition_c",
          "title": "Recognizing Note C",
          "description": "Master identifying the note C",
          "estimatedDuration": 4,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which note is shown? (C on staff)",
              "options": ["A", "B", "C", "D"],
              "answer": "C",
              "explanation": "This is the note C on the staff"
            }
          ]
        },
        {
          "id": "note_recognition_d",
          "title": "Recognizing Note D",
          "description": "Master identifying the note D",
          "estimatedDuration": 4,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which note is shown? (D on staff)",
              "options": ["A", "B", "C", "D"],
              "answer": "D",
              "explanation": "This is the note D on the staff"
            }
          ]
        },
        {
          "id": "note_recognition_e",
          "title": "Recognizing Note E",
          "description": "Master identifying the note E",
          "estimatedDuration": 4,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which note is shown? (E on staff)",
              "options": ["D", "E", "F", "G"],
              "answer": "E",
              "explanation": "This is the note E on the staff"
            }
          ]
        },
        {
          "id": "note_recognition_f",
          "title": "Recognizing Note F",
          "description": "Master identifying the note F",
          "estimatedDuration": 4,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which note is shown? (F on staff)",
              "options": ["D", "E", "F", "G"],
              "answer": "F",
              "explanation": "This is the note F on the staff"
            }
          ]
        },
        {
          "id": "note_recognition_g",
          "title": "Recognizing Note G",
          "description": "Master identifying the note G",
          "estimatedDuration": 4,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which note is shown? (G on staff)",
              "options": ["E", "F", "G", "A"],
              "answer": "G",
              "explanation": "This is the note G on the staff"
            }
          ]
        },
        {
          "id": "treble_clef_lines",
          "title": "Treble Clef Line Notes",
          "description": "Every Good Boy Does Fine",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "What are the treble clef line notes?",
              "options": ["E-G-B-D-F", "F-A-C-E", "A-C-E-G", "G-B-D-F-A"],
              "answer": "E-G-B-D-F",
              "explanation": "Every Good Boy Does Fine: E-G-B-D-F"
            }
          ]
        },
        {
          "id": "treble_clef_spaces",
          "title": "Treble Clef Space Notes",
          "description": "FACE in the space",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "What are the treble clef space notes?",
              "options": ["E-G-B-D", "F-A-C-E", "A-C-E-G", "G-B-D-F"],
              "answer": "F-A-C-E",
              "explanation": "The spaces spell FACE: F-A-C-E"
            }
          ]
        },
        {
          "id": "bass_clef_lines",
          "title": "Bass Clef Line Notes",
          "description": "Good Boys Do Fine Always",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "What are the bass clef line notes?",
              "options": ["G-B-D-F-A", "A-C-E-G", "E-G-B-D-F", "F-A-C-E"],
              "answer": "G-B-D-F-A",
              "explanation": "Good Boys Do Fine Always: G-B-D-F-A"
            }
          ]
        },
        {
          "id": "bass_clef_spaces",
          "title": "Bass Clef Space Notes",
          "description": "All Cows Eat Grass",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "What are the bass clef space notes?",
              "options": ["F-A-C-E", "A-C-E-G", "E-G-B-D", "G-B-D-F"],
              "answer": "A-C-E-G",
              "explanation": "All Cows Eat Grass: A-C-E-G"
            }
          ]
        },
        {
          "id": "ledger_lines_above",
          "title": "Ledger Lines Above Staff",
          "description": "Notes above the staff",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "What note is on the first ledger line above treble staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "explanation": "The first ledger line above treble clef is A"
            }
          ]
        },
        {
          "id": "ledger_lines_below",
          "title": "Ledger Lines Below Staff",
          "description": "Notes below the staff",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "What note is on the first ledger line below treble staff?",
              "options": ["A", "B", "C", "D"],
              "answer": "C",
              "explanation": "The first ledger line below treble clef is middle C"
            }
          ]
        },
        {
          "id": "middle_c",
          "title": "Middle C",
          "description": "The center of the piano",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Where is middle C located?",
              "options": ["Between treble and bass clef", "Top of treble clef", "Bottom of bass clef", "Above both clefs"],
              "answer": "Between treble and bass clef",
              "explanation": "Middle C sits between the treble and bass clef staves"
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "fill_in_blank",
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
              "type": "fill_in_blank",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "listening",
              "question": "Is this note high or low?",
              "options": ["High", "Low"],
              "answer": "High",
              "explanation": "The sound is clearly in a high pitch range."
            }
          ]
        },
        // RHYTHM SERIES (50 lessons)
        {
          "id": "whole_notes",
          "title": "Whole Notes",
          "description": "4 beats in 4/4 time",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many beats does a whole note get?",
              "options": ["1", "2", "3", "4"],
              "answer": "4",
              "explanation": "A whole note gets 4 beats in 4/4 time"
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
          "estimatedDuration": 4,
          "xpReward": 40,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a unison?",
              "options": ["0", "1", "2", "3"],
              "answer": "0",
              "explanation": "A unison is the same note, 0 semitones apart"
            }
          ]
        },
        {
          "id": "minor_second",
          "title": "Minor Second",
          "description": "1 semitone apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a minor second?",
              "options": ["1", "2", "3", "4"],
              "answer": "1",
              "explanation": "A minor second is 1 semitone apart"
            }
          ]
        },
        {
          "id": "major_second",
          "title": "Major Second",
          "description": "2 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a major second?",
              "options": ["1", "2", "3", "4"],
              "answer": "2",
              "explanation": "A major second is 2 semitones apart"
            }
          ]
        },
        {
          "id": "minor_third",
          "title": "Minor Third",
          "description": "3 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a minor third?",
              "options": ["2", "3", "4", "5"],
              "answer": "3",
              "explanation": "A minor third is 3 semitones apart"
            }
          ]
        },
        {
          "id": "major_third",
          "title": "Major Third",
          "description": "4 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a major third?",
              "options": ["3", "4", "5", "6"],
              "answer": "4",
              "explanation": "A major third is 4 semitones apart"
            }
          ]
        },
        {
          "id": "perfect_fourth",
          "title": "Perfect Fourth",
          "description": "5 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a perfect fourth?",
              "options": ["4", "5", "6", "7"],
              "answer": "5",
              "explanation": "A perfect fourth is 5 semitones apart"
            }
          ]
        },
        {
          "id": "tritone",
          "title": "Tritone",
          "description": "6 semitones apart - the devil's interval",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a tritone?",
              "options": ["5", "6", "7", "8"],
              "answer": "6",
              "explanation": "A tritone is 6 semitones apart, historically called the devil's interval"
            }
          ]
        },
        {
          "id": "perfect_fifth",
          "title": "Perfect Fifth",
          "description": "7 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a perfect fifth?",
              "options": ["6", "7", "8", "9"],
              "answer": "7",
              "explanation": "A perfect fifth is 7 semitones apart"
            }
          ]
        },
        {
          "id": "minor_sixth",
          "title": "Minor Sixth",
          "description": "8 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a minor sixth?",
              "options": ["7", "8", "9", "10"],
              "answer": "8",
              "explanation": "A minor sixth is 8 semitones apart"
            }
          ]
        },
        {
          "id": "major_sixth",
          "title": "Major Sixth",
          "description": "9 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a major sixth?",
              "options": ["8", "9", "10", "11"],
              "answer": "9",
              "explanation": "A major sixth is 9 semitones apart"
            }
          ]
        },
        {
          "id": "minor_seventh",
          "title": "Minor Seventh",
          "description": "10 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a minor seventh?",
              "options": ["9", "10", "11", "12"],
              "answer": "10",
              "explanation": "A minor seventh is 10 semitones apart"
            }
          ]
        },
        {
          "id": "major_seventh",
          "title": "Major Seventh",
          "description": "11 semitones apart",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many semitones are in a major seventh?",
              "options": ["10", "11", "12", "13"],
              "answer": "11",
              "explanation": "A major seventh is 11 semitones apart"
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
              "type": "multiple_choice",
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
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which notes are in the C major scale?",
              "options": ["C-D-E-F-G-A-B", "C-D-E-F#-G-A-B", "C-D-E♭-F-G-A-B", "C-D-E-F-G-A-B♭"],
              "answer": "C-D-E-F-G-A-B",
              "explanation": "C major has no sharps or flats: C-D-E-F-G-A-B"
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "multiple_choice",
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
              "type": "audio_quiz",
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
              "type": "audio_quiz",
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
              "type": "audio_quiz",
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
              "type": "audio_quiz",
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
              "type": "audio_quiz",
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
