import { SkillTree, Achievement } from '@/types';
import { expandedLessonDatabase } from './expandedLessons';

// Use the expanded lesson database with hundreds of lessons
export const lessonDatabase = expandedLessonDatabase;

// Convert lesson database to SkillTree format for compatibility
export const sampleSkillTrees: SkillTree[] = lessonDatabase.categories.map((category, categoryIndex) => ({
  id: category.id,
  name: category.title,
  description: category.description,
  color: category.color,
  nodes: category.lessons.map((lesson, lessonIndex) => ({
    id: `node_${categoryIndex}_${lessonIndex}`,
    x: 100 + (lessonIndex % 5) * 150,
    y: 100 + Math.floor(lessonIndex / 5) * 120,
    lessons: [{
      id: lesson.id,
      title: lesson.title,
      description: lesson.description,
      exercises: lesson.exercises.map(exercise => ({
        id: exercise.id,
        type: exercise.type as any,
        question: exercise.question,
        options: exercise.options || [],
        correct: exercise.options ? exercise.options.indexOf(exercise.answer) : 0,
        explanation: exercise.explanation,
        instruction: (exercise as any).instruction
      }))
    }],
    unlocked: lessonIndex === 0,
    completed: false,
    connections: lessonIndex > 0 ? [`node_${categoryIndex}_${lessonIndex - 1}`] : []
  }))
}));

// Sample achievements
export const sampleAchievements: Achievement[] = [
  {
    id: 'first_lesson',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎵',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    xpReward: 100
  },
  {
    id: 'note_master',
    title: 'Note Master',
    description: 'Complete 10 note recognition lessons',
    icon: '🎼',
    unlocked: false,
    progress: 0,
    maxProgress: 10,
    xpReward: 250
  },
  {
    id: 'rhythm_expert',
    title: 'Rhythm Expert',
    description: 'Complete 15 rhythm lessons',
    icon: '🥁',
    unlocked: false,
    progress: 0,
    maxProgress: 15,
    xpReward: 300
  },
  {
    id: 'scale_scholar',
    title: 'Scale Scholar',
    description: 'Master 20 different scales',
    icon: '🎹',
    unlocked: false,
    progress: 0,
    maxProgress: 20,
    xpReward: 500
  },
  {
    id: 'interval_ace',
    title: 'Interval Ace',
    description: 'Perfect interval recognition',
    icon: '🎯',
    unlocked: false,
    progress: 0,
    maxProgress: 25,
    xpReward: 400
  },
  {
    id: 'chord_champion',
    title: 'Chord Champion',
    description: 'Master 30 chord types',
    icon: '🏆',
    unlocked: false,
    progress: 0,
    maxProgress: 30,
    xpReward: 600
  },
  {
    id: 'perfect_pitch',
    title: 'Perfect Pitch',
    description: 'Identify all 12 notes without reference',
    icon: '👂',
    unlocked: false,
    progress: 0,
    maxProgress: 12,
    xpReward: 1000
  },
  {
    id: 'composer',
    title: 'Composer',
    description: 'Complete 10 composition exercises',
    icon: '✍️',
    unlocked: false,
    progress: 0,
    maxProgress: 10,
    xpReward: 750
  },
  {
    id: 'streak_master',
    title: 'Streak Master',
    description: 'Maintain a 30-day learning streak',
    icon: '🔥',
    unlocked: false,
    progress: 0,
    maxProgress: 30,
    xpReward: 800
  },
  {
    id: 'theory_genius',
    title: 'Theory Genius',
    description: 'Complete all theory lessons',
    icon: '🧠',
    unlocked: false,
    progress: 0,
    maxProgress: 100,
    xpReward: 1500
  }
];
