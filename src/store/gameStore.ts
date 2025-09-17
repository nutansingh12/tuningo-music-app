import { create } from 'zustand';
import { SkillTree, Lesson, Exercise, ExerciseResult, AudioAnalysis } from '@/types';

interface GameState {
  // Current game state
  currentLesson: Lesson | null;
  currentExercise: Exercise | null;
  exerciseIndex: number;
  exerciseResults: ExerciseResult[];
  
  // Audio state
  isListening: boolean;
  audioAnalysis: AudioAnalysis | null;
  
  // UI state
  showFeedback: boolean;
  feedbackMessage: string;
  feedbackType: 'success' | 'error' | 'info';
  
  // Skill trees
  skillTrees: SkillTree[];
  
  // Actions
  setCurrentLesson: (lesson: Lesson) => void;
  setCurrentExercise: (exercise: Exercise, index: number) => void;
  nextExercise: () => void;
  previousExercise: () => void;
  submitAnswer: (answer: string | string[]) => void;
  setAudioAnalysis: (analysis: AudioAnalysis | null) => void;
  setListening: (listening: boolean) => void;
  showFeedbackMessage: (message: string, type: 'success' | 'error' | 'info') => void;
  hideFeedback: () => void;
  resetLesson: () => void;
  setSkillTrees: (trees: SkillTree[]) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  currentLesson: null,
  currentExercise: null,
  exerciseIndex: 0,
  exerciseResults: [],
  isListening: false,
  audioAnalysis: null,
  showFeedback: false,
  feedbackMessage: '',
  feedbackType: 'info',
  skillTrees: [],

  setCurrentLesson: (lesson) => {
    set({
      currentLesson: lesson,
      currentExercise: lesson.exercises[0] || null,
      exerciseIndex: 0,
      exerciseResults: [],
    });
  },

  setCurrentExercise: (exercise, index) => {
    set({
      currentExercise: exercise,
      exerciseIndex: index,
    });
  },

  nextExercise: () => {
    const state = get();
    if (!state.currentLesson) return;

    const nextIndex = state.exerciseIndex + 1;
    if (nextIndex < state.currentLesson.exercises.length) {
      set({
        currentExercise: state.currentLesson.exercises[nextIndex],
        exerciseIndex: nextIndex,
      });
    }
  },

  previousExercise: () => {
    const state = get();
    if (!state.currentLesson) return;

    const prevIndex = state.exerciseIndex - 1;
    if (prevIndex >= 0) {
      set({
        currentExercise: state.currentLesson.exercises[prevIndex],
        exerciseIndex: prevIndex,
      });
    }
  },

  submitAnswer: (answer) => {
    const state = get();
    if (!state.currentExercise) return;

    const isCorrect = Array.isArray(state.currentExercise.correctAnswer)
      ? Array.isArray(answer) &&
        answer.length === state.currentExercise.correctAnswer.length &&
        answer.every(a => state.currentExercise!.correctAnswer.includes(a))
      : answer === state.currentExercise.correctAnswer;

    const result: ExerciseResult = {
      exerciseId: state.currentExercise.id,
      userAnswer: answer,
      isCorrect,
      timeSpent: 0, // TODO: Track actual time
      attempts: 1, // TODO: Track attempts
      score: isCorrect ? 100 : 0,
    };

    set({
      exerciseResults: [...state.exerciseResults, result],
    });

    // Show feedback
    if (isCorrect) {
      get().showFeedbackMessage('Correct! Well done! 🎉', 'success');
    } else {
      get().showFeedbackMessage(
        state.currentExercise.explanation || 'Not quite right. Try again!',
        'error'
      );
    }
  },

  setAudioAnalysis: (analysis) => set({ audioAnalysis: analysis }),

  setListening: (listening) => set({ isListening: listening }),

  showFeedbackMessage: (message, type) => {
    set({
      showFeedback: true,
      feedbackMessage: message,
      feedbackType: type,
    });

    // Auto-hide after 3 seconds
    setTimeout(() => {
      get().hideFeedback();
    }, 3000);
  },

  hideFeedback: () => {
    set({
      showFeedback: false,
      feedbackMessage: '',
      feedbackType: 'info',
    });
  },

  resetLesson: () => {
    set({
      currentLesson: null,
      currentExercise: null,
      exerciseIndex: 0,
      exerciseResults: [],
      showFeedback: false,
      feedbackMessage: '',
      feedbackType: 'info',
    });
  },

  setSkillTrees: (trees) => set({ skillTrees: trees }),
}));
