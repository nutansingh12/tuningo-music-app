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
      "estimatedDuration": 12,
      "xpReward": 120,
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
          "options": ["Same (Unison)", "Different"],
          "answer": "Same (Unison)",
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
          "options": ["Same (Unison)", "Different"],
          "answer": "Different",
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
          "options": ["Same (Unison)", "Different"],
          "answer": "Same (Unison)",
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
          "options": ["Same (Unison)", "Different"],
          "answer": "Different", 
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
          "options": ["Same (Unison)", "Different"],
          "answer": "Same (Unison)",
          "explanation": "These notes are identical - a perfect unison"
        }
      ]
    },
    {
      "id": "interval_recognition_seconds",
      "title": "Recognizing Seconds", 
      "description": "Learn to identify major and minor second intervals",
      "estimatedDuration": 15,
      "xpReward": 150,
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
          "options": ["Major Second", "Minor Second", "Not a Second"],
          "answer": "Major Second",
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
          "options": ["Major Second", "Minor Second", "Not a Second"],
          "answer": "Minor Second",
          "explanation": "E to F is a minor second (1 semitone apart)"
        }
      ]
    }
  ]
};
