import { SkillTree, Achievement, SkillNodeType, LessonType, Difficulty, ExerciseType } from '@/types';
import { expandedLessonDatabase } from './expandedLessons';

// Use the expanded lesson database with hundreds of lessons
export const lessonDatabase = expandedLessonDatabase;

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

// Convert lesson database to SkillTree format for compatibility
export const sampleSkillTrees: SkillTree[] = lessonDatabase.categories.map((category, categoryIndex) => ({
  id: category.id,
  name: category.title,
  description: category.description,
  icon: categoryIndex === 0 ? '🎼' : categoryIndex === 1 ? '🎹' : categoryIndex === 2 ? '🎸' : '🎤',
  color: category.color,
  nodes: category.lessons.map((lesson, lessonIndex) => ({
    id: `node_${categoryIndex}_${lessonIndex}`,
    name: lesson.title,
    description: lesson.description,
    type: getSkillNodeType(category.id),
    difficulty: getDifficulty(categoryIndex, lessonIndex),
    xpReward: lesson.xpReward,
    lessons: [{
      id: lesson.id,
      title: lesson.title,
      description: lesson.description,
      type: getLessonType(lesson),
      difficulty: getDifficulty(categoryIndex, lessonIndex),
      estimatedDuration: lesson.estimatedDuration,
      xpReward: lesson.xpReward,
      exercises: lesson.exercises.map(exercise => ({
        id: exercise.id,
        type: exercise.type as ExerciseType,
        question: exercise.question,
        options: (exercise as any).options ? (exercise as any).options.map((option: string, index: number) => ({
          id: `option_${index}`,
          text: option,
          isCorrect: option === (exercise as any).answer
        })) : undefined,
        correctAnswer: (exercise as any).answer || '',
        explanation: exercise.explanation,
        difficulty: getDifficulty(categoryIndex, lessonIndex)
      })),
      prerequisites: []
    }],
    position: {
      x: 100 + (lessonIndex % 5) * 150,
      y: 100 + Math.floor(lessonIndex / 5) * 120
    },
    prerequisites: lessonIndex > 0 ? [`node_${categoryIndex}_${lessonIndex - 1}`] : [],
    icon: categoryIndex === 0 ? '📝' : categoryIndex === 1 ? '🎯' : categoryIndex === 2 ? '🎨' : '👂'
  })),
  prerequisites: categoryIndex > 0 ? [lessonDatabase.categories[categoryIndex - 1].id] : []
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
      xp: 100
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
      xp: 250
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
