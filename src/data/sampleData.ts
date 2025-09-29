import { SkillTree, Achievement, SkillNodeType, LessonType, Difficulty, ExerciseType } from '@/types';
import { levelMetadata } from '@/services/lessonLoader';

// Lightweight lesson database - only metadata, actual lessons loaded on demand
export const lessonDatabase = {
  categories: levelMetadata.map(level => ({
    id: level.id,
    title: level.title,
    description: level.description,
    color: level.color,
    lessons: [] // Lessons will be loaded dynamically
  }))
};

// Helper function to determine lesson type based on content
const getLessonType = (lesson: any): LessonType => {
  if (lesson.title.toLowerCase().includes('rhythm') || lesson.title.toLowerCase().includes('clap')) {
    return 'rhythm-clapping';
  }
  if (lesson.title.toLowerCase().includes('listening') || lesson.title.toLowerCase().includes('ear')) {
    return 'listening';
  }
  if (lesson.title.toLowerCase().includes('pitch') || lesson.title.toLowerCase().includes('perfect pitch')) {
    return 'pitch-matching';
  }
  if (lesson.title.toLowerCase().includes('chord')) {
    return 'chord-recognition';
  }
  if (lesson.title.toLowerCase().includes('scale')) {
    return 'scale-practice';
  }
  if (lesson.title.toLowerCase().includes('reading') || lesson.title.toLowerCase().includes('clef')) {
    return 'sight-reading';
  }
  return 'theory'; // default
};

// Helper function to determine skill node type based on category
const getSkillNodeType = (categoryId: string): SkillNodeType => {
  switch (categoryId) {
    case 'foundations':
      return 'theory';
    case 'building_skills':
      return 'theory';
    case 'expanding':
      return 'composition';
    case 'ear_voice_training':
      return 'ear-training';
    default:
      return 'theory';
  }
};

// Helper function to determine difficulty based on category and lesson index
const getDifficulty = (categoryIndex: number, lessonIndex: number): Difficulty => {
  if (categoryIndex === 0) return 'beginner';
  if (categoryIndex === 1) return lessonIndex < 25 ? 'beginner' : 'intermediate';
  if (categoryIndex === 2) return lessonIndex < 50 ? 'intermediate' : 'advanced';
  return 'advanced';
};

// Helper function to randomly select exercises from exercise pool
const selectRandomExercises = (exercisePool: any[], count: number = 15): any[] => {
  if (!exercisePool || exercisePool.length === 0) return [];

  // Shuffle the exercise pool
  const shuffled = [...exercisePool].sort(() => Math.random() - 0.5);

  // Return the requested number of exercises (or all if pool is smaller)
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Generate lightweight skill trees - lessons loaded on demand
export const sampleSkillTrees: SkillTree[] = levelMetadata.map((level, categoryIndex) => ({
  id: level.id,
  name: level.title,
  description: level.description,
  icon: categoryIndex === 0 ? '🎼' : categoryIndex === 1 ? '🎹' : categoryIndex === 2 ? '🎸' : '🎤',
  color: level.color,
  nodes: Array.from({ length: level.lessonCount }, (_, lessonIndex) => {
    // Create specific lesson IDs for known lessons
    let lessonId = `${level.id}_lesson_${lessonIndex + 1}`;
    let lessonTitle = `Lesson ${lessonIndex + 1}`;

    // Special handling for Level 2 (intervals)
    if (level.id === 'building_skills') {
      const level2Lessons = [
        { id: 'unison_interval', title: 'Unison Interval' },
        { id: 'minor_second', title: 'Minor Second' },
        { id: 'major_second', title: 'Major Second' },
        { id: 'minor_third', title: 'Minor Third' },
        { id: 'major_third', title: 'Major Third' },
        { id: 'perfect_fourth', title: 'Perfect Fourth' },
        { id: 'tritone', title: 'Tritone' },
        { id: 'perfect_fifth', title: 'Perfect Fifth' },
        { id: 'minor_sixth', title: 'Minor Sixth' },
        { id: 'major_sixth', title: 'Major Sixth' },
        { id: 'minor_seventh', title: 'Minor Seventh' },
        { id: 'major_seventh', title: 'Major Seventh' },
        { id: 'octave', title: 'Octave' }
      ];

      if (lessonIndex < level2Lessons.length) {
        lessonId = level2Lessons[lessonIndex].id;
        lessonTitle = level2Lessons[lessonIndex].title;
      }
    }

    // Special handling for Level 3 (scales)
    if (level.id === 'expanding') {
      const level3Lessons = [
        { id: 'c_major_scale', title: 'C Major Scale' },
        { id: 'g_major_scale', title: 'G Major Scale' },
        { id: 'd_major_scale', title: 'D Major Scale' },
        { id: 'a_major_scale', title: 'A Major Scale' },
        { id: 'e_major_scale', title: 'E Major Scale' },
        { id: 'enharmonic_scales', title: 'Enharmonic Scales' },
        { id: 'f_major_scale', title: 'F Major Scale' },
        { id: 'c_sharp_major_scale', title: 'C# Major Scale' }
      ];

      if (lessonIndex < level3Lessons.length) {
        lessonId = level3Lessons[lessonIndex].id;
        lessonTitle = level3Lessons[lessonIndex].title;
      }
    }

    // Special handling for Level 4 (ear training)
    if (level.id === 'ear_voice_training') {
      if (lessonIndex === 0) {
        lessonId = 'interval_recognition_unison';
        lessonTitle = 'Recognizing Unisons';
      } else if (lessonIndex === 1) {
        lessonId = 'interval_recognition_seconds';
        lessonTitle = 'Recognizing Seconds';
      } else if (lessonIndex === 2) {
        lessonId = 'interval_recognition_third';
        lessonTitle = 'Recognizing Thirds';
      } else if (lessonIndex === 3) {
        lessonId = 'perfect_pitch';
        lessonTitle = 'Perfect Pitch Training';
      }
    }

    // Special handling for Level 1 - All 21 lessons
    if (level.id === 'intro_to_notes') {
      const level1Lessons = [
        { id: 'intro_to_notes', title: 'Musical Alphabet Basics' },
        { id: 'note_recognition_combined', title: 'Recognizing Notes' },
        { id: 'treble_clef_lines', title: 'Treble Clef Line Notes' },
        { id: 'treble_clef_spaces', title: 'Treble Clef Space Notes' },
        { id: 'bass_clef_lines', title: 'Bass Clef Line Notes' },
        { id: 'bass_clef_spaces', title: 'Bass Clef Space Notes' },
        { id: 'ledger_lines_above', title: 'Ledger Lines Above Staff' },
        { id: 'ledger_lines_below', title: 'Ledger Lines Below Staff' },
        { id: 'middle_c', title: 'Middle C' },
        { id: 'notes_staff', title: 'Notes on the Staff' },
        { id: 'sharps_flats', title: 'Sharps & Flats Basics' },
        { id: 'natural_sign', title: 'Natural Sign' },
        { id: 'rests_basics', title: 'Rests & Silence' },
        { id: 'treble_clef', title: 'Treble Clef Reading' },
        { id: 'bass_clef', title: 'Bass Clef Reading' },
        { id: 'note_values', title: 'Note Value Comparison' },
        { id: 'simple_time', title: 'Simple Time Signatures' },
        { id: 'listening_high_low', title: 'Listening Drill: High vs Low' },
        { id: 'accidentals_intro', title: 'Sharps & Flats Basics' },
        { id: 'note_durations_mix', title: 'Note Value Comparison' },
        { id: 'rhythm_training', title: 'Rhythm Training' }
      ];

      if (lessonIndex < level1Lessons.length) {
        lessonId = level1Lessons[lessonIndex].id;
        lessonTitle = level1Lessons[lessonIndex].title;
      }
    }

    return {
      id: `node_${categoryIndex}_${lessonIndex}`,
      name: lessonTitle,
      description: `${level.title} - ${lessonTitle}`,
      type: getSkillNodeType(level.id),
      difficulty: getDifficulty(categoryIndex, lessonIndex),
      xpReward: 20 + (lessonIndex * 5),
      lessons: [{
        id: lessonId,
        title: lessonTitle,
        description: `${level.title} - ${lessonTitle}`,
        type: getLessonType({ title: lessonTitle }),
        difficulty: getDifficulty(categoryIndex, lessonIndex),
        estimatedDuration: 10 + (lessonIndex * 5),
        xpReward: 20 + (lessonIndex * 5),
        exercises: [], // Will be loaded dynamically
        prerequisites: []
      }],
      position: {
        x: 100 + (lessonIndex % 5) * 150,
        y: 100 + Math.floor(lessonIndex / 5) * 120
      },
      prerequisites: lessonIndex > 0 ? [`node_${categoryIndex}_${lessonIndex - 1}`] : [],
      icon: categoryIndex === 0 ? '📝' : categoryIndex === 1 ? '🎯' : categoryIndex === 2 ? '🎨' : '👂'
    };
  }),
  prerequisites: categoryIndex > 0 ? [levelMetadata[categoryIndex - 1].id] : []
}));

// Sample achievements with proper type structure
export const sampleAchievements: Achievement[] = [
  {
    id: 'first_lesson',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎵',
    category: 'skill-mastery',
    requirement: {
      type: 'lessons_completed',
      value: 1
    },
    reward: {
      xp: 25
    },
    rarity: 'common'
  },
  {
    id: 'note_master',
    name: 'Note Master',
    description: 'Complete 10 note recognition lessons',
    icon: '🎼',
    category: 'skill-mastery',
    requirement: {
      type: 'note_lessons_completed',
      value: 10
    },
    reward: {
      xp: 50
    },
    rarity: 'common'
  },
  {
    id: 'rhythm_expert',
    name: 'Rhythm Expert',
    description: 'Complete 15 rhythm lessons',
    icon: '🥁',
    category: 'skill-mastery',
    requirement: {
      type: 'rhythm_lessons_completed',
      value: 15
    },
    reward: {
      xp: 300
    },
    rarity: 'rare'
  },
  {
    id: 'scale_scholar',
    name: 'Scale Scholar',
    description: 'Master 20 different scales',
    icon: '🎹',
    category: 'skill-mastery',
    requirement: {
      type: 'scales_mastered',
      value: 20
    },
    reward: {
      xp: 500
    },
    rarity: 'rare'
  },
  {
    id: 'interval_ace',
    name: 'Interval Ace',
    description: 'Perfect interval recognition',
    icon: '🎯',
    category: 'accuracy',
    requirement: {
      type: 'interval_accuracy',
      value: 95
    },
    reward: {
      xp: 400
    },
    rarity: 'epic'
  },
  {
    id: 'chord_champion',
    name: 'Chord Champion',
    description: 'Master 30 chord types',
    icon: '🏆',
    category: 'skill-mastery',
    requirement: {
      type: 'chords_mastered',
      value: 30
    },
    reward: {
      xp: 600
    },
    rarity: 'epic'
  },
  {
    id: 'perfect_pitch',
    name: 'Perfect Pitch',
    description: 'Identify all 12 notes without reference',
    icon: '👂',
    category: 'skill-mastery',
    requirement: {
      type: 'perfect_pitch_accuracy',
      value: 100
    },
    reward: {
      xp: 1000,
      title: 'Perfect Pitch Master'
    },
    rarity: 'legendary'
  },
  {
    id: 'composer',
    name: 'Composer',
    description: 'Complete 10 composition exercises',
    icon: '✍️',
    category: 'skill-mastery',
    requirement: {
      type: 'compositions_completed',
      value: 10
    },
    reward: {
      xp: 750
    },
    rarity: 'epic'
  },
  {
    id: 'streak_master',
    name: 'Streak Master',
    description: 'Maintain a 30-day learning streak',
    icon: '🔥',
    category: 'streak',
    requirement: {
      type: 'daily_streak',
      value: 30,
      timeframe: 'all-time'
    },
    reward: {
      xp: 800,
      hearts: 5
    },
    rarity: 'epic'
  },
  {
    id: 'theory_genius',
    name: 'Theory Genius',
    description: 'Complete all theory lessons',
    icon: '🧠',
    category: 'skill-mastery',
    requirement: {
      type: 'theory_lessons_completed',
      value: 100
    },
    reward: {
      xp: 1500,
      title: 'Theory Master'
    },
    rarity: 'legendary'
  }
];
