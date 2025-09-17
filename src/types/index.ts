// User and Progress Types
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  level: number;
  xp: number;
  streak: number;
  hearts: number;
  maxHearts: number;
  gems: number;
  createdAt: Date;
  lastActiveAt: Date;
}

export interface UserProgress {
  userId: string;
  skillTreeProgress: Record<string, SkillNodeProgress>;
  completedLessons: string[];
  currentLesson?: string;
  dailyGoal: number;
  weeklyXP: number;
  achievements: Achievement[];
  statistics: UserStatistics;
}

export interface UserStatistics {
  totalLessonsCompleted: number;
  totalXPEarned: number;
  averageAccuracy: number;
  longestStreak: number;
  timeSpentLearning: number; // in minutes
  favoriteSkillArea: string;
}

// Skill Tree and Learning Types
export interface SkillTree {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  nodes: SkillNode[];
  prerequisites?: string[];
}

export interface SkillNode {
  id: string;
  name: string;
  description: string;
  type: SkillNodeType;
  difficulty: Difficulty;
  xpReward: number;
  lessons: Lesson[];
  position: { x: number; y: number };
  prerequisites: string[];
  icon: string;
}

export interface SkillNodeProgress {
  nodeId: string;
  status: SkillNodeStatus;
  completedLessons: string[];
  bestScore: number;
  attempts: number;
  unlockedAt?: Date;
  completedAt?: Date;
}

export type SkillNodeType = 
  | 'theory' 
  | 'ear-training' 
  | 'rhythm' 
  | 'instrument' 
  | 'singing' 
  | 'composition';

export type SkillNodeStatus = 'locked' | 'available' | 'current' | 'completed' | 'mastered';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Lesson Types
export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: LessonType;
  difficulty: Difficulty;
  estimatedDuration: number; // in minutes
  xpReward: number;
  exercises: Exercise[];
  theory?: TheoryContent;
  prerequisites: string[];
}

export type LessonType = 
  | 'theory' 
  | 'listening' 
  | 'rhythm-clapping' 
  | 'pitch-matching' 
  | 'chord-recognition' 
  | 'scale-practice' 
  | 'sight-reading'
  | 'mini-game';

export interface TheoryContent {
  title: string;
  content: string;
  examples: AudioExample[];
  visualAids?: string[];
}

export interface AudioExample {
  id: string;
  description: string;
  audioUrl: string;
  notation?: string;
}

// Exercise Types
export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: ExerciseOption[];
  correctAnswer: string | string[];
  explanation?: string;
  audioUrl?: string;
  visualAid?: string;
  timeLimit?: number;
  difficulty: Difficulty;
}

export type ExerciseType = 
  | 'multiple-choice'
  | 'pitch-match'
  | 'rhythm-tap'
  | 'chord-builder'
  | 'note-identification'
  | 'interval-recognition'
  | 'scale-completion'
  | 'listening-comprehension';

export interface ExerciseOption {
  id: string;
  text: string;
  audioUrl?: string;
  isCorrect: boolean;
}

// Game Session Types
export interface GameSession {
  id: string;
  userId: string;
  lessonId: string;
  startedAt: Date;
  completedAt?: Date;
  score: number;
  accuracy: number;
  xpEarned: number;
  heartsLost: number;
  exercises: ExerciseResult[];
  status: SessionStatus;
}

export interface ExerciseResult {
  exerciseId: string;
  userAnswer: string | string[];
  isCorrect: boolean;
  timeSpent: number;
  attempts: number;
  score: number;
}

export type SessionStatus = 'in-progress' | 'completed' | 'failed' | 'abandoned';

// Achievement System
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  requirement: AchievementRequirement;
  reward: AchievementReward;
  rarity: AchievementRarity;
  unlockedAt?: Date;
}

export type AchievementCategory = 
  | 'streak' 
  | 'xp' 
  | 'accuracy' 
  | 'speed' 
  | 'skill-mastery' 
  | 'social' 
  | 'special';

export interface AchievementRequirement {
  type: string;
  value: number;
  timeframe?: 'daily' | 'weekly' | 'monthly' | 'all-time';
}

export interface AchievementReward {
  xp?: number;
  gems?: number;
  hearts?: number;
  title?: string;
  avatar?: string;
}

export type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary';

// Audio Processing Types
export interface AudioAnalysis {
  pitch: number; // in Hz
  note: string;
  octave: number;
  confidence: number;
  volume: number;
  timestamp: number;
}

export interface RhythmAnalysis {
  beats: Beat[];
  tempo: number;
  timeSignature: string;
  accuracy: number;
}

export interface Beat {
  timestamp: number;
  strength: number;
  isOnBeat: boolean;
}

// Mini-Game Types
export interface MiniGame {
  id: string;
  name: string;
  description: string;
  type: MiniGameType;
  difficulty: Difficulty;
  duration: number;
  instructions: string;
  config: MiniGameConfig;
}

export type MiniGameType = 
  | 'rhythm-tapper' 
  | 'pitch-match' 
  | 'chord-builder' 
  | 'note-catcher' 
  | 'scale-runner';

export interface MiniGameConfig {
  [key: string]: any;
}

// Leaderboard Types
export interface LeaderboardEntry {
  userId: string;
  username: string;
  avatar?: string;
  score: number;
  rank: number;
  change: number; // position change from last period
}

export interface Leaderboard {
  id: string;
  name: string;
  type: LeaderboardType;
  period: LeaderboardPeriod;
  entries: LeaderboardEntry[];
  lastUpdated: Date;
}

export type LeaderboardType = 'xp' | 'streak' | 'accuracy' | 'speed' | 'skill-specific';
export type LeaderboardPeriod = 'daily' | 'weekly' | 'monthly' | 'all-time';
