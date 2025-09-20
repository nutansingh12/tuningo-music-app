// Level 4: Ear & Voice Training
export const level4Lessons = {
  "id": "ear_voice_training",
  "title": "🎤 LEVEL 4: Ear & Voice Training", 
  "description": "Develop perfect pitch and vocal skills",
  "color": "#8B5CF6",
  "lessons": [
    {
      "id": "interval_recognition_unison",
      "title": "Recognizing Unisons",
      "description": "Identify when two notes are the same",
      "type": "listening",
      "difficulty": "beginner",
      "estimatedDuration": 12,
      "xpReward": 120,
      "prerequisites": [],
      "exercises": [
        {
          "id": "ex1",
          "type": "audio-multiple-choice",
          "question": "Listen to these two notes. Are they the same or different?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "C", "octave": 4}, {"note": "C", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Same (Unison)", "isCorrect": true },
            { "id": "b", "text": "Different", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "beginner",
          "explanation": "These notes are identical - a perfect unison (0 semitones apart)"
        },
        {
          "id": "ex2",
          "type": "audio-multiple-choice", 
          "question": "Listen to these two notes. Are they the same or different?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "G", "octave": 4}, {"note": "A", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Same (Unison)", "isCorrect": false },
            { "id": "b", "text": "Different", "isCorrect": true }
          ],
          "correctAnswer": "b",
          "difficulty": "beginner",
          "explanation": "These notes are different - G and A are a major second apart"
        },
        {
          "id": "ex3",
          "type": "audio-multiple-choice",
          "question": "Listen to these two notes. Are they the same or different?", 
          "audioData": {
            "type": "interval",
            "notes": [{"note": "E", "octave": 4}, {"note": "E", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Same (Unison)", "isCorrect": true },
            { "id": "b", "text": "Different", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "beginner",
          "explanation": "These notes are identical - a perfect unison"
        },
        {
          "id": "ex4",
          "type": "audio-multiple-choice",
          "question": "Listen to these two notes. Are they the same or different?",
          "audioData": {
            "type": "interval", 
            "notes": [{"note": "D", "octave": 4}, {"note": "F", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Same (Unison)", "isCorrect": false },
            { "id": "b", "text": "Different", "isCorrect": true }
          ],
          "correctAnswer": "b",
          "difficulty": "beginner",
          "explanation": "These notes are different - D and F are a major third apart"
        },
        {
          "id": "ex5",
          "type": "audio-multiple-choice",
          "question": "Listen to these two notes. Are they the same or different?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "A", "octave": 4}, {"note": "A", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Same (Unison)", "isCorrect": true },
            { "id": "b", "text": "Different", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "beginner",
          "explanation": "These notes are identical - a perfect unison"
        }
      ]
    },
    {
      "id": "interval_recognition_seconds",
      "title": "Recognizing Seconds",
      "description": "Learn to identify major and minor second intervals",
      "type": "listening",
      "difficulty": "beginner",
      "estimatedDuration": 15,
      "xpReward": 150,
      "prerequisites": ["interval_recognition_unison"],
      "exercises": [
        {
          "id": "seconds-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this interval. What type of second is it?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "C", "octave": 4}, {"note": "D", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Major Second", "isCorrect": true },
            { "id": "b", "text": "Minor Second", "isCorrect": false },
            { "id": "c", "text": "Not a Second", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "beginner",
          "explanation": "C to D is a major second (2 semitones apart)"
        },
        {
          "id": "seconds-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this interval. What type of second is it?",
          "audioData": {
            "type": "interval", 
            "notes": [{"note": "E", "octave": 4}, {"note": "F", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Major Second", "isCorrect": false },
            { "id": "b", "text": "Minor Second", "isCorrect": true },
            { "id": "c", "text": "Not a Second", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "beginner",
          "explanation": "E to F is a minor second (1 semitone apart)"
        },
        {
          "id": "seconds-3",
          "type": "audio-multiple-choice",
          "question": "Listen to this interval played harmonically. What type of second is it?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "F", "octave": 4}, {"note": "G", "octave": 4}],
            "playSequentially": false,
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "Major Second", "isCorrect": true },
            { "id": "b", "text": "Minor Second", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "beginner",
          "explanation": "F to G is a major second - sounds more open and consonant than a minor second"
        },
        {
          "id": "seconds-4",
          "type": "audio-multiple-choice",
          "question": "Listen to this interval. What type of second do you hear?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "B", "octave": 4}, {"note": "C", "octave": 5}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Major Second", "isCorrect": false },
            { "id": "b", "text": "Minor Second", "isCorrect": true }
          ],
          "correctAnswer": "b",
          "difficulty": "beginner",
          "explanation": "B to C is a minor second - very close, tense-sounding interval"
        },
        {
          "id": "seconds-5",
          "type": "audio-multiple-choice",
          "question": "Compare these intervals. Which one is the major second?",
          "audioData": {
            "type": "comparison",
            "intervals": [
              {"notes": [{"note": "G", "octave": 4}, {"note": "A♭", "octave": 4}], "label": "Interval A"},
              {"notes": [{"note": "G", "octave": 4}, {"note": "A", "octave": 4}], "label": "Interval B"}
            ],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Interval A", "isCorrect": false },
            { "id": "b", "text": "Interval B", "isCorrect": true }
          ],
          "correctAnswer": "b",
          "difficulty": "intermediate",
          "explanation": "Interval B (G to A) is the major second. Interval A (G to A♭) is a minor second"
        },
        {
          "id": "seconds-6",
          "type": "audio-multiple-choice",
          "question": "Listen to this melodic interval. What do you hear?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "D", "octave": 4}, {"note": "E♭", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Major Second", "isCorrect": false },
            { "id": "b", "text": "Minor Second", "isCorrect": true },
            { "id": "c", "text": "Perfect Unison", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "intermediate",
          "explanation": "D to E♭ is a minor second - the smallest interval in Western music"
        }
      ]
    },
    {
      "id": "interval_recognition_third",
      "title": "Recognizing Thirds",
      "description": "Identify major and minor thirds by ear",
      "type": "listening",
      "difficulty": "intermediate",
      "estimatedDuration": 18,
      "xpReward": 180,
      "prerequisites": ["interval_recognition_seconds"],
      "exercises": [
        {
          "id": "thirds-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this interval. Is it a major or minor third?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "C", "octave": 4}, {"note": "E", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Major Third", "isCorrect": true },
            { "id": "b", "text": "Minor Third", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "intermediate",
          "explanation": "C to E is a major third - sounds bright and happy (4 semitones apart)"
        },
        {
          "id": "thirds-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this interval. Is it a major or minor third?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "A", "octave": 4}, {"note": "C", "octave": 5}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Major Third", "isCorrect": false },
            { "id": "b", "text": "Minor Third", "isCorrect": true }
          ],
          "correctAnswer": "b",
          "difficulty": "intermediate",
          "explanation": "A to C is a minor third - sounds darker and more melancholy (3 semitones apart)"
        },
        {
          "id": "thirds-3",
          "type": "audio-multiple-choice",
          "question": "Listen to this harmonic interval. What type of third is it?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "F", "octave": 4}, {"note": "A", "octave": 4}],
            "playSequentially": false,
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "Major Third", "isCorrect": true },
            { "id": "b", "text": "Minor Third", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "intermediate",
          "explanation": "F to A is a major third - when played together, it creates a bright, consonant sound"
        },
        {
          "id": "thirds-4",
          "type": "audio-multiple-choice",
          "question": "Listen to this interval. What type of third do you hear?",
          "audioData": {
            "type": "interval",
            "notes": [{"note": "D", "octave": 4}, {"note": "F", "octave": 4}],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Major Third", "isCorrect": false },
            { "id": "b", "text": "Minor Third", "isCorrect": true }
          ],
          "correctAnswer": "b",
          "difficulty": "intermediate",
          "explanation": "D to F is a minor third - has a more subdued, contemplative quality"
        },
        {
          "id": "thirds-5",
          "type": "audio-multiple-choice",
          "question": "Compare these thirds. Which one is the major third?",
          "audioData": {
            "type": "comparison",
            "intervals": [
              {"notes": [{"note": "E", "octave": 4}, {"note": "G", "octave": 4}], "label": "Interval A"},
              {"notes": [{"note": "E", "octave": 4}, {"note": "G#", "octave": 4}], "label": "Interval B"}
            ],
            "playSequentially": true,
            "duration": 1000
          },
          "options": [
            { "id": "a", "text": "Interval A", "isCorrect": false },
            { "id": "b", "text": "Interval B", "isCorrect": true }
          ],
          "correctAnswer": "b",
          "difficulty": "advanced",
          "explanation": "Interval B (E to G#) is the major third. Interval A (E to G) is a minor third"
        }
      ]
    },
    {
      "id": "perfect_pitch",
      "title": "Perfect Pitch Training",
      "description": "Identify notes without reference - randomized practice",
      "type": "listening",
      "difficulty": "advanced",
      "estimatedDuration": 25,
      "xpReward": 250,
      "prerequisites": ["interval_recognition_third"],
      "randomizeExercises": true,
      "exerciseCount": 10,
      "exercises": [
        {
          "id": "pitch-c-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "C", "octave": 4}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "C", "isCorrect": true },
            { "id": "b", "text": "D", "isCorrect": false },
            { "id": "c", "text": "E", "isCorrect": false },
            { "id": "d", "text": "F", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is the note C - the foundation note of the C major scale"
        },
        {
          "id": "pitch-c-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this note in a different octave. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "C", "octave": 5}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "C", "isCorrect": true },
            { "id": "b", "text": "B", "isCorrect": false },
            { "id": "c", "text": "D", "isCorrect": false },
            { "id": "d", "text": "G", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is C in a higher octave - same note name, different pitch height"
        },
        {
          "id": "pitch-c-3",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "C", "octave": 3}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "C", "isCorrect": true },
            { "id": "b", "text": "F", "isCorrect": false },
            { "id": "c", "text": "A", "isCorrect": false },
            { "id": "d", "text": "E", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is C in a lower octave - recognizing C across different octaves is key to perfect pitch"
        },
        {
          "id": "pitch-d-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "D", "octave": 4}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "C", "isCorrect": false },
            { "id": "b", "text": "D", "isCorrect": true },
            { "id": "c", "text": "E", "isCorrect": false },
            { "id": "d", "text": "F", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "advanced",
          "explanation": "This is the note D - one whole step above C"
        },
        {
          "id": "pitch-d-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "D", "octave": 5}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "D", "isCorrect": true },
            { "id": "b", "text": "C", "isCorrect": false },
            { "id": "c", "text": "E", "isCorrect": false },
            { "id": "d", "text": "G", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is D in a higher octave - developing pitch memory across octaves"
        },
        {
          "id": "pitch-d-3",
          "type": "audio-multiple-choice",
          "question": "Compare with your memory of C. What note is this?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "D", "octave": 3}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "C", "isCorrect": false },
            { "id": "b", "text": "D", "isCorrect": true },
            { "id": "c", "text": "E", "isCorrect": false },
            { "id": "d", "text": "F", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "advanced",
          "explanation": "This is D in a lower octave - use your memory of C to help identify D"
        },
        {
          "id": "pitch-e-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "E", "octave": 4}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "D", "isCorrect": false },
            { "id": "b", "text": "E", "isCorrect": true },
            { "id": "c", "text": "F", "isCorrect": false },
            { "id": "d", "text": "G", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "advanced",
          "explanation": "This is the note E - a major third above C"
        },
        {
          "id": "pitch-e-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this note in a different octave. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "E", "octave": 5}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "E", "isCorrect": true },
            { "id": "b", "text": "D", "isCorrect": false },
            { "id": "c", "text": "F", "isCorrect": false },
            { "id": "d", "text": "C", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is E in a higher octave - recognizing E across octaves"
        },
        {
          "id": "pitch-f-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "F", "octave": 4}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "E", "isCorrect": false },
            { "id": "b", "text": "F", "isCorrect": true },
            { "id": "c", "text": "G", "isCorrect": false },
            { "id": "d", "text": "A", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "advanced",
          "explanation": "This is the note F - a perfect fourth above C"
        },
        {
          "id": "pitch-f-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "F", "octave": 3}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "F", "isCorrect": true },
            { "id": "b", "text": "E", "isCorrect": false },
            { "id": "c", "text": "G", "isCorrect": false },
            { "id": "d", "text": "C", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is F in a lower octave - developing F recognition"
        },
        {
          "id": "pitch-g-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "G", "octave": 4}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "F", "isCorrect": false },
            { "id": "b", "text": "G", "isCorrect": true },
            { "id": "c", "text": "A", "isCorrect": false },
            { "id": "d", "text": "B", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "advanced",
          "explanation": "This is the note G - a perfect fifth above C"
        },
        {
          "id": "pitch-g-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "G", "octave": 5}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "G", "isCorrect": true },
            { "id": "b", "text": "F", "isCorrect": false },
            { "id": "c", "text": "A", "isCorrect": false },
            { "id": "d", "text": "C", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is G in a higher octave - perfect fifth recognition across octaves"
        },
        {
          "id": "pitch-a-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "A", "octave": 4}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "G", "isCorrect": false },
            { "id": "b", "text": "A", "isCorrect": true },
            { "id": "c", "text": "B", "isCorrect": false },
            { "id": "d", "text": "C", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "advanced",
          "explanation": "This is the note A - the reference pitch at 440Hz"
        },
        {
          "id": "pitch-a-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "A", "octave": 3}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "A", "isCorrect": true },
            { "id": "b", "text": "G", "isCorrect": false },
            { "id": "c", "text": "B", "isCorrect": false },
            { "id": "d", "text": "F", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is A in a lower octave - recognizing the reference pitch across octaves"
        },
        {
          "id": "pitch-b-1",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "B", "octave": 4}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "A", "isCorrect": false },
            { "id": "b", "text": "B", "isCorrect": true },
            { "id": "c", "text": "C", "isCorrect": false },
            { "id": "d", "text": "D", "isCorrect": false }
          ],
          "correctAnswer": "b",
          "difficulty": "advanced",
          "explanation": "This is the note B - a major seventh above C"
        },
        {
          "id": "pitch-b-2",
          "type": "audio-multiple-choice",
          "question": "Listen to this note. What note is it?",
          "audioData": {
            "type": "single-note",
            "notes": [{"note": "B", "octave": 3}],
            "duration": 2000
          },
          "options": [
            { "id": "a", "text": "B", "isCorrect": true },
            { "id": "b", "text": "A", "isCorrect": false },
            { "id": "c", "text": "C", "isCorrect": false },
            { "id": "d", "text": "G", "isCorrect": false }
          ],
          "correctAnswer": "a",
          "difficulty": "advanced",
          "explanation": "This is B in a lower octave - the leading tone to C"
        }
      ]
    }
  ]
};
