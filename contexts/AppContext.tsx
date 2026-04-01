import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  AppState,
  UserProfile,
  LessonProgress,
  ExerciseProgress,
} from '@/lib/mockData';

interface AppContextType {
  state: AppState;
  setUser: (user: UserProfile) => void;
  updateLessonProgress: (
    lessonId: string,
    progress: Partial<LessonProgress>
  ) => void;
  updateExerciseProgress: (
    exerciseId: string,
    completed: boolean
  ) => void;
  updateUserXP: (xp: number) => void;
  updateStreak: (streak: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_STATE: AppState = {
  user: null,
  lessonProgress: {},
  exerciseProgress: {},
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(DEFAULT_STATE);

  const setUser = useCallback((user: UserProfile) => {
    setState((prev) => ({ ...prev, user }));
  }, []);

  const updateLessonProgress = useCallback(
    (lessonId: string, progress: Partial<LessonProgress>) => {
      setState((prev) => ({
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          [lessonId]: {
            lesson_id: lessonId,
            completed: false,
            correct_count: 0,
            total_attempts: 0,
            xp_earned: 0,
            ...prev.lessonProgress[lessonId],
            ...progress,
          },
        },
      }));
    },
    []
  );

  const updateExerciseProgress = useCallback(
    (exerciseId: string, completed: boolean) => {
      setState((prev) => ({
        ...prev,
        exerciseProgress: {
          ...prev.exerciseProgress,
          [exerciseId]: { exercise_id: exerciseId, completed },
        },
      }));
    },
    []
  );

  const updateUserXP = useCallback((xp: number) => {
    setState((prev) => {
      if (!prev.user) return prev;
      return {
        ...prev,
        user: {
          ...prev.user,
          total_xp: prev.user.total_xp + xp,
        },
      };
    });
  }, []);

  const updateStreak = useCallback((streak: number) => {
    setState((prev) => {
      if (!prev.user) return prev;
      return {
        ...prev,
        user: {
          ...prev.user,
          streak_count: streak,
          last_practice_date: new Date().toISOString().split('T')[0],
        },
      };
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        setUser,
        updateLessonProgress,
        updateExerciseProgress,
        updateUserXP,
        updateStreak,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
