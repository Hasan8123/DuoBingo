import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { ALL_LESSONS } from '@/lib/mockData';
import { BookOpen, Lock, CircleCheck as CheckCircle2, Circle } from 'lucide-react-native';

interface LessonWithProgress {
  id: string;
  language_id: string;
  title: string;
  description?: string;
  level: number;
  order_index: number;
  xp_reward: number;
  isCompleted: boolean;
  isLocked: boolean;
  progress: number;
}

export default function LearnScreen() {
  const { state } = useApp();
  const [lessons, setLessons] = useState<LessonWithProgress[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!state.user) return;

    const userLessons = ALL_LESSONS.filter(
      (l) => l.language_id === state.user?.current_language_id
    );

    const lessonsWithProgress: LessonWithProgress[] = userLessons.map(
      (lesson, index) => {
        const progress = state.lessonProgress[lesson.id];
        const isCompleted = progress?.completed || false;
        const isLocked =
          index > 0 && !state.lessonProgress[userLessons[index - 1].id]?.completed;

        const progressPercent = progress
          ? (progress.correct_count / (progress.total_attempts || 1)) * 100
          : 0;

        return {
          ...lesson,
          isCompleted,
          isLocked,
          progress: progressPercent,
        };
      }
    );

    setLessons(lessonsWithProgress);
  }, [state.user, state.lessonProgress]);

  const handleLessonPress = (lesson: LessonWithProgress) => {
    if (lesson.isLocked) return;
    router.push({
      pathname: '/lesson/[id]',
      params: { id: lesson.id },
    });
  };

  if (lessons.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <BookOpen size={64} color="#afafaf" strokeWidth={2} />
        <Text style={styles.emptyText}>No lessons available yet</Text>
        <Text style={styles.emptySubtext}>Check back soon for new content!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Lessons</Text>
        <Text style={styles.subtitle}>
          Complete lessons to unlock new content
        </Text>
      </View>

      <View style={styles.lessonsList}>
        {lessons.map((lesson, index) => (
          <TouchableOpacity
            key={lesson.id}
            style={[
              styles.lessonCard,
              lesson.isCompleted && styles.lessonCardCompleted,
              lesson.isLocked && styles.lessonCardLocked,
            ]}
            onPress={() => handleLessonPress(lesson)}
            disabled={lesson.isLocked}
          >
            <View style={styles.lessonNumber}>
              <Text style={styles.lessonNumberText}>{index + 1}</Text>
            </View>

            <View style={styles.lessonContent}>
              <Text
                style={[
                  styles.lessonTitle,
                  lesson.isLocked && styles.lessonTitleLocked,
                ]}
              >
                {lesson.title}
              </Text>
              {lesson.description && (
                <Text
                  style={[
                    styles.lessonDescription,
                    lesson.isLocked && styles.lessonDescriptionLocked,
                  ]}
                >
                  {lesson.description}
                </Text>
              )}

              <View style={styles.lessonFooter}>
                <View style={styles.xpBadge}>
                  <Text style={styles.xpText}>+{lesson.xp_reward} XP</Text>
                </View>

                {!lesson.isCompleted &&
                  !lesson.isLocked &&
                  lesson.progress > 0 && (
                    <View style={styles.progressContainer}>
                      <View style={styles.progressBar}>
                        <View
                          style={[
                            styles.progressBarFill,
                            { width: `${lesson.progress}%` },
                          ]}
                        />
                      </View>
                      <Text style={styles.progressText}>
                        {Math.round(lesson.progress)}%
                      </Text>
                    </View>
                  )}
              </View>
            </View>

            <View style={styles.lessonStatus}>
              {lesson.isLocked ? (
                <Lock size={24} color="#afafaf" strokeWidth={2} />
              ) : lesson.isCompleted ? (
                <CheckCircle2 size={24} color="#58cc02" strokeWidth={2} />
              ) : (
                <Circle size={24} color="#58cc02" strokeWidth={2} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3c3c3c',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#777',
    marginTop: 8,
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
  },
  lessonsList: {
    padding: 24,
    paddingTop: 0,
  },
  lessonCard: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e5e5e5',
  },
  lessonCardCompleted: {
    backgroundColor: '#f0fde4',
    borderColor: '#58cc02',
  },
  lessonCardLocked: {
    opacity: 0.6,
  },
  lessonNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#58cc02',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  lessonNumberText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 4,
  },
  lessonTitleLocked: {
    color: '#afafaf',
  },
  lessonDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  lessonDescriptionLocked: {
    color: '#afafaf',
  },
  lessonFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  xpBadge: {
    backgroundColor: '#ffc800',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  xpText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  progressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#e5e5e5',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#58cc02',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#58cc02',
  },
  lessonStatus: {
    marginLeft: 12,
  },
});
