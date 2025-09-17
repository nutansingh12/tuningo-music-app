import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, UserProgress, Achievement, GameSession } from '@/types';

interface UserState {
  // User data
  user: User | null;
  progress: UserProgress | null;
  currentSession: GameSession | null;
  
  // UI state
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
  setProgress: (progress: UserProgress) => void;
  updateProgress: (updates: Partial<UserProgress>) => void;
  addXP: (amount: number) => void;
  useHeart: () => boolean;
  restoreHearts: () => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  unlockAchievement: (achievement: Achievement) => void;
  startSession: (session: GameSession) => void;
  endSession: (results: Partial<GameSession>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialUser: User = {
  id: 'demo-user',
  username: 'Music Learner',
  email: 'demo@tuningo.com',
  level: 1,
  xp: 0,
  streak: 0,
  hearts: 5,
  maxHearts: 5,
  gems: 0,
  createdAt: new Date(),
  lastActiveAt: new Date(),
};

const initialProgress: UserProgress = {
  userId: 'demo-user',
  skillTreeProgress: {},
  completedLessons: [],
  dailyGoal: 50, // XP
  weeklyXP: 0,
  achievements: [],
  statistics: {
    totalLessonsCompleted: 0,
    totalXPEarned: 0,
    averageAccuracy: 0,
    longestStreak: 0,
    timeSpentLearning: 0,
    favoriteSkillArea: 'theory',
  },
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: initialUser,
      progress: initialProgress,
      currentSession: null,
      isLoading: false,
      error: null,

      setUser: (user) => set({ user }),

      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),

      setProgress: (progress) => set({ progress }),

      updateProgress: (updates) =>
        set((state) => ({
          progress: state.progress ? { ...state.progress, ...updates } : null,
        })),

      addXP: (amount) => {
        const state = get();
        if (!state.user || !state.progress) return;

        const newXP = state.user.xp + amount;
        const newLevel = Math.floor(newXP / 100) + 1; // 100 XP per level
        
        set({
          user: {
            ...state.user,
            xp: newXP,
            level: newLevel,
            lastActiveAt: new Date(),
          },
          progress: {
            ...state.progress,
            weeklyXP: state.progress.weeklyXP + amount,
            statistics: {
              ...state.progress.statistics,
              totalXPEarned: state.progress.statistics.totalXPEarned + amount,
            },
          },
        });
      },

      useHeart: () => {
        const state = get();
        if (!state.user || state.user.hearts <= 0) return false;

        set({
          user: {
            ...state.user,
            hearts: state.user.hearts - 1,
            lastActiveAt: new Date(),
          },
        });
        return true;
      },

      restoreHearts: () => {
        const state = get();
        if (!state.user) return;

        set({
          user: {
            ...state.user,
            hearts: state.user.maxHearts,
            lastActiveAt: new Date(),
          },
        });
      },

      incrementStreak: () => {
        const state = get();
        if (!state.user || !state.progress) return;

        const newStreak = state.user.streak + 1;
        const longestStreak = Math.max(newStreak, state.progress.statistics.longestStreak);

        set({
          user: {
            ...state.user,
            streak: newStreak,
            lastActiveAt: new Date(),
          },
          progress: {
            ...state.progress,
            statistics: {
              ...state.progress.statistics,
              longestStreak,
            },
          },
        });
      },

      resetStreak: () => {
        const state = get();
        if (!state.user) return;

        set({
          user: {
            ...state.user,
            streak: 0,
            lastActiveAt: new Date(),
          },
        });
      },

      unlockAchievement: (achievement) => {
        const state = get();
        if (!state.progress) return;

        const unlockedAchievement = {
          ...achievement,
          unlockedAt: new Date(),
        };

        set({
          progress: {
            ...state.progress,
            achievements: [...state.progress.achievements, unlockedAchievement],
          },
        });

        // Apply achievement rewards
        if (achievement.reward.xp) {
          get().addXP(achievement.reward.xp);
        }
        if (achievement.reward.gems && state.user) {
          set({
            user: {
              ...state.user,
              gems: state.user.gems + achievement.reward.gems,
            },
          });
        }
        if (achievement.reward.hearts && state.user) {
          set({
            user: {
              ...state.user,
              hearts: Math.min(state.user.hearts + achievement.reward.hearts, state.user.maxHearts),
            },
          });
        }
      },

      startSession: (session) => set({ currentSession: session }),

      endSession: (results) => {
        const state = get();
        if (!state.currentSession || !state.progress) return;

        const completedSession = {
          ...state.currentSession,
          ...results,
          completedAt: new Date(),
        };

        // Update progress
        const updatedProgress = {
          ...state.progress,
          statistics: {
            ...state.progress.statistics,
            totalLessonsCompleted: state.progress.statistics.totalLessonsCompleted + 1,
            timeSpentLearning: state.progress.statistics.timeSpentLearning + 
              (completedSession.completedAt!.getTime() - completedSession.startedAt.getTime()) / (1000 * 60),
          },
        };

        if (completedSession.status === 'completed') {
          updatedProgress.completedLessons.push(completedSession.lessonId);
        }

        set({
          currentSession: null,
          progress: updatedProgress,
        });

        // Add XP if session was successful
        if (completedSession.xpEarned > 0) {
          get().addXP(completedSession.xpEarned);
        }
      },

      setLoading: (loading) => set({ isLoading: loading }),

      setError: (error) => set({ error }),

      reset: () =>
        set({
          user: initialUser,
          progress: initialProgress,
          currentSession: null,
          isLoading: false,
          error: null,
        }),
    }),
    {
      name: 'tuningo-user-storage',
      partialize: (state) => ({
        user: state.user,
        progress: state.progress,
      }),
    }
  )
);
