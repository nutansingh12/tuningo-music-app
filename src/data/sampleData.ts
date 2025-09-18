import { SkillTree, Achievement } from '@/types';

// Comprehensive Lesson Database based on structured roadmap
export const lessonDatabase = {
  "categories": [
    {
      "id": "foundations",
      "title": "🎼 LEVEL 1: Music Foundations",
      "description": "Master the building blocks of music",
      "color": "#3B82F6",
      "lessons": [
        {
          "id": "intro_to_notes",
          "title": "Intro to Notes",
          "description": "Recognizing A–G and matching notes to piano keys",
          "estimatedDuration": 5,
          "xpReward": 50,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "How many letters are used in the musical alphabet?",
              "options": ["5", "7", "8", "12"],
              "answer": "7",
              "explanation": "Music uses 7 letters: A, B, C, D, E, F, G, then repeats."
            },
            {
              "id": "ex2",
              "type": "multiple_choice",
              "question": "What comes after G in the musical alphabet?",
              "options": ["H", "A", "I", "Nothing"],
              "answer": "A",
              "explanation": "After G, the musical alphabet repeats back to A."
            },
            {
              "id": "ex3",
              "type": "multiple_choice",
              "question": "On a piano, which keys are the white keys?",
              "options": ["Sharps and flats", "Natural notes (A-G)", "Only C and F", "All notes"],
              "answer": "Natural notes (A-G)",
              "explanation": "White keys represent the natural notes: A, B, C, D, E, F, G."
            },
            {
              "id": "ex4",
              "type": "tap",
              "instruction": "Tap the higher note when you hear two sounds.",
              "question": "Which note is higher: C or E?",
              "options": ["C", "E"],
              "answer": "E",
              "explanation": "E is higher than C in pitch."
            }
          ]
        },
        {
          "id": "rhythm_basics",
          "title": "Rhythm Basics",
          "description": "Whole, half, quarter, eighth notes and clapping exercises",
          "estimatedDuration": 6,
          "xpReward": 60,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Which note lasts the longest?",
              "options": ["Quarter note", "Half note", "Whole note", "Eighth note"],
              "answer": "Whole note",
              "explanation": "A whole note lasts for 4 beats in 4/4 time."
            },
            {
              "id": "ex2",
              "type": "multiple_choice",
              "question": "How many quarter notes equal one whole note?",
              "options": ["2", "3", "4", "8"],
              "answer": "4",
              "explanation": "One whole note = 4 quarter notes."
            },
            {
              "id": "ex3",
              "type": "multiple_choice",
              "question": "How many eighth notes equal one quarter note?",
              "options": ["1", "2", "4", "8"],
              "answer": "2",
              "explanation": "One quarter note = 2 eighth notes."
            },
            {
              "id": "ex4",
              "type": "tap",
              "instruction": "Clap along with this quarter note pattern (1-2-3-4).",
              "question": "Tap the beat!",
              "answer": "1-2-3-4",
              "explanation": "Quarter notes are steady, even beats."
            }
          ]
        },
        {
          "id": "scales_starter",
          "title": "Scales Starter",
          "description": "Major scale pattern (W-W-H-W-W-W-H) and ear training",
          "estimatedDuration": 7,
          "xpReward": 70,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "What is the pattern for a major scale?",
              "options": ["W-W-H-W-W-W-H", "W-H-W-W-H-W-W", "H-W-W-H-W-W-W", "W-W-W-H-W-W-H"],
              "answer": "W-W-H-W-W-W-H",
              "explanation": "Major scale: Whole-Whole-Half-Whole-Whole-Whole-Half steps."
            },
            {
              "id": "ex2",
              "type": "multiple_choice",
              "question": "In C major, what note comes after E?",
              "options": ["D", "F", "G", "F#"],
              "answer": "F",
              "explanation": "C major scale: C-D-E-F-G-A-B-C (no sharps or flats)."
            },
            {
              "id": "ex3",
              "type": "audio_quiz",
              "instruction": "Listen to this scale. Does it sound major or minor?",
              "question": "Is this a major or minor scale?",
              "options": ["Major", "Minor"],
              "answer": "Major",
              "explanation": "Major scales sound bright and happy."
            }
          ]
        },
        {
          "id": "first_songs",
          "title": "First Songs",
          "description": "Play Twinkle Twinkle Little Star and Ode to Joy",
          "estimatedDuration": 8,
          "xpReward": 80,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "Twinkle Twinkle starts on which note in C major?",
              "options": ["C", "D", "E", "F"],
              "answer": "C",
              "explanation": "Twinkle Twinkle starts on the root note C."
            },
            {
              "id": "ex2",
              "type": "multiple_choice",
              "question": "The melody 'Twinkle Twinkle' uses how many different notes?",
              "options": ["3", "5", "6", "7"],
              "answer": "6",
              "explanation": "Twinkle Twinkle uses: C, D, E, F, G, A (6 notes)."
            },
            {
              "id": "ex3",
              "type": "tap",
              "instruction": "Tap along with Twinkle Twinkle Little Star.",
              "question": "Follow the melody!",
              "answer": "C-C-G-G-A-A-G",
              "explanation": "Great job playing your first song!"
            }
          ]
        }
      ]
    },
    {
      "id": "building_skills",
      "title": "🎹 LEVEL 2: Building Skills",
      "description": "Develop intermediate music skills",
      "color": "#10B981",
      "lessons": [
        {
          "id": "intervals",
          "title": "Intervals",
          "description": "2nd, 3rd, 5th, octave identification",
          "estimatedDuration": 8,
          "xpReward": 90,
          "exercises": [
            {
              "id": "ex1",
              "type": "multiple_choice",
              "question": "What is the interval between C and E?",
              "options": ["Major 2nd", "Major 3rd", "Perfect 4th", "Perfect 5th"],
              "answer": "Major 3rd",
              "explanation": "C to E spans 4 semitones, making it a Major 3rd."
            },
            {
              "id": "ex2",
              "type": "multiple_choice",
              "question": "What is the interval between C and G?",
              "options": ["Major 3rd", "Perfect 4th", "Perfect 5th", "Major 6th"],
              "answer": "Perfect 5th",
              "explanation": "C to G is a Perfect 5th (7 semitones)."
            },
            {
              "id": "ex3",
              "type": "audio_quiz",
              "instruction": "Listen to this interval. What do you hear?",
              "question": "Identify this interval:",
              "options": ["3rd", "5th", "Octave"],
              "answer": "5th",
              "explanation": "Perfect 5ths sound stable and consonant."
            }
          ]
        },
        {
          "id": "chords_101",
          "title": "Chords 101",
          "description": "Major and minor triads, build chords by dragging notes",
          "estimatedDuration": 10,
          "xpReward": 100,
          "exercises": [
            {
              "id": "ex1",
              "type": "drag_drop",
              "instruction": "Build a C major chord by dragging the correct notes.",
              "question": "Which notes make a C major chord?",
              "options": ["C", "D", "E", "F", "G", "A", "B"],
              "answer": ["C", "E", "G"],
              "explanation": "C major chord = C (root) + E (major 3rd) + G (perfect 5th)."
            },
            {
              "id": "ex2",
              "type": "drag_drop",
              "instruction": "Build an A minor chord.",
              "question": "Which notes make an A minor chord?",
              "options": ["A", "B", "C", "D", "E", "F", "G"],
              "answer": ["A", "C", "E"],
              "explanation": "A minor chord = A (root) + C (minor 3rd) + E (perfect 5th)."
            },
            {
              "id": "ex3",
              "type": "audio_quiz",
              "instruction": "Listen to this chord. Is it major or minor?",
              "question": "Major or minor chord?",
              "options": ["Major", "Minor"],
              "answer": "Major",
              "explanation": "Major chords sound bright and happy."
            }
          ]
        }
      ]
    }
  ]
};

// Convert lesson database to SkillTree format for compatibility
export const sampleSkillTrees: SkillTree[] = lessonDatabase.categories.map((category, categoryIndex) => ({
  id: category.id,
  name: category.title,
  description: category.description,
  icon: category.title.split(' ')[0], // Extract emoji
  color: category.color || '#3B82F6',
  nodes: category.lessons.map((lesson, lessonIndex) => ({
    id: lesson.id,
    name: lesson.title,
    description: lesson.description,
    type: 'theory' as const,
    difficulty: 'beginner' as const,
    xpReward: lesson.xpReward,
    position: { x: 100 + (lessonIndex * 150), y: 100 + (categoryIndex * 200) },
    prerequisites: lessonIndex === 0 ? [] : [category.lessons[lessonIndex - 1].id],
    icon: '🎵',
    lessons: [{
      id: lesson.id, // Use the same ID as the node for consistency
      title: lesson.title,
      description: lesson.description,
      type: 'theory' as const,
      difficulty: 'beginner' as const,
      estimatedDuration: lesson.estimatedDuration,
      xpReward: lesson.xpReward,
      prerequisites: [],
      exercises: lesson.exercises.map(exercise => ({
        id: exercise.id,
        type: exercise.type === 'multiple_choice' ? 'multiple-choice' as const :
              exercise.type === 'drag_drop' ? 'drag-drop' as const :
              exercise.type === 'audio_quiz' ? 'multiple-choice' as const :
              'multiple-choice' as const,
        question: exercise.question || exercise.instruction,
        options: exercise.options?.map((option, index) => ({
          id: index.toString(),
          text: option,
          isCorrect: option === exercise.answer
        })) || [],
        correctAnswer: exercise.options?.findIndex(option => option === exercise.answer)?.toString() || '0',
        explanation: exercise.explanation || 'Great job!',
        difficulty: 'beginner' as const,
        timeLimit: 30
      }))
    }]
  }))
}));

// Add more advanced levels to the lesson database
lessonDatabase.categories.push(
  {
    "id": "expanding",
    "title": "🎸 LEVEL 3: Expanding",
    "description": "Advanced music concepts and patterns",
    "color": "#F59E0B",
    "lessons": [
      {
        "id": "chord_progressions",
        "title": "Chord Progressions",
        "description": "I–IV–V–I (C–F–G–C) and popular progressions",
        "estimatedDuration": 12,
        "xpReward": 120,
        "exercises": [
          {
            "id": "ex1",
            "type": "multiple_choice",
            "question": "What is the most common chord progression in popular music?",
            "options": ["I-IV-V-I", "I-V-vi-IV", "ii-V-I", "I-vi-ii-V"],
            "answer": "I-V-vi-IV",
            "explanation": "The I-V-vi-IV progression is used in countless popular songs."
          },
          {
            "id": "ex2",
            "type": "multiple_choice",
            "question": "In the key of C major, what is the IV chord?",
            "options": ["C major", "F major", "G major", "A minor"],
            "answer": "F major",
            "explanation": "The IV chord in C major is F major (F-A-C)."
          },
          {
            "id": "ex3",
            "type": "drag_drop",
            "instruction": "Arrange these chords in the I-IV-V-I progression in C major.",
            "question": "Order the chords correctly:",
            "options": ["C", "F", "G", "C"],
            "answer": ["C", "F", "G", "C"],
            "explanation": "I-IV-V-I in C major: C-F-G-C"
          }
        ]
      },
      {
        "id": "scales_mastery",
        "title": "Scales Mastery",
        "description": "Minor scales and pentatonics",
        "estimatedDuration": 10,
        "xpReward": 110,
        "exercises": [
          {
            "id": "ex1",
            "type": "multiple_choice",
            "question": "What is the pattern for a natural minor scale?",
            "options": ["W-H-W-W-H-W-W", "W-W-H-W-W-W-H", "H-W-W-H-W-W-W", "W-W-H-W-W-H-W"],
            "answer": "W-H-W-W-H-W-W",
            "explanation": "Natural minor: Whole-Half-Whole-Whole-Half-Whole-Whole"
          },
          {
            "id": "ex2",
            "type": "multiple_choice",
            "question": "How many notes are in a pentatonic scale?",
            "options": ["4", "5", "6", "7"],
            "answer": "5",
            "explanation": "Pentatonic means 'five tones' - it has 5 notes."
          },
          {
            "id": "ex3",
            "type": "audio_quiz",
            "instruction": "Listen to this scale. Is it major or minor?",
            "question": "Major or minor scale?",
            "options": ["Major", "Minor"],
            "answer": "Minor",
            "explanation": "Minor scales sound sad or mysterious."
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
      {
        "id": "pitch_matching",
        "title": "Pitch Matching",
        "description": "Sing/play back a given note with mic feedback",
        "estimatedDuration": 15,
        "xpReward": 150,
        "exercises": [
          {
            "id": "ex1",
            "type": "pitch_match",
            "instruction": "Listen to this note and sing it back.",
            "question": "Match this pitch: C4",
            "answer": "C4",
            "explanation": "Great pitch matching! Keep practicing to improve accuracy."
          },
          {
            "id": "ex2",
            "type": "pitch_match",
            "instruction": "Match this higher note: G4",
            "question": "Sing this pitch back:",
            "answer": "G4",
            "explanation": "Excellent! You're developing good pitch recognition."
          }
        ]
      },
      {
        "id": "chord_identification",
        "title": "Identify Chords by Ear",
        "description": "Major vs minor vs diminished recognition",
        "estimatedDuration": 12,
        "xpReward": 130,
        "exercises": [
          {
            "id": "ex1",
            "type": "audio_quiz",
            "instruction": "Listen to this chord. What type is it?",
            "question": "Identify the chord quality:",
            "options": ["Major", "Minor", "Diminished"],
            "answer": "Major",
            "explanation": "Major chords have a bright, happy sound."
          },
          {
            "id": "ex2",
            "type": "audio_quiz",
            "instruction": "Listen carefully. Is this chord major or minor?",
            "question": "Major or minor?",
            "options": ["Major", "Minor"],
            "answer": "Minor",
            "explanation": "Minor chords sound sad or dark."
          }
        ]
      }
    ]
  }
);

// Removed old originalSkillTrees to avoid confusion - using only the comprehensive lessonDatabase

// Sample Achievements
export const sampleAchievements: Achievement[] = [
  {
    id: 'first-lesson',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎯',
    category: 'skill-mastery',
    requirement: {
      type: 'lessons-completed',
      value: 1,
    },
    reward: {
      xp: 50,
      gems: 10,
    },
    rarity: 'common',
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    category: 'streak',
    requirement: {
      type: 'streak',
      value: 7,
    },
    reward: {
      xp: 100,
      gems: 25,
      hearts: 1,
    },
    rarity: 'rare',
  },
  {
    id: 'perfect-pitch',
    name: 'Perfect Pitch',
    description: 'Get 100% accuracy on 10 pitch exercises',
    icon: '🎵',
    category: 'accuracy',
    requirement: {
      type: 'perfect-exercises',
      value: 10,
    },
    reward: {
      xp: 200,
      gems: 50,
      title: 'Pitch Master',
    },
    rarity: 'epic',
  },
  {
    id: 'rhythm-master',
    name: 'Rhythm Master',
    description: 'Complete all rhythm training lessons',
    icon: '🥁',
    category: 'skill-mastery',
    requirement: {
      type: 'skill-tree-completed',
      value: 1,
    },
    reward: {
      xp: 500,
      gems: 100,
      avatar: 'rhythm-master-avatar',
    },
    rarity: 'legendary',
  },
];
