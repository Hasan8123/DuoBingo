import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { EXERCISES, ALL_LESSONS, LANGUAGES } from '@/lib/mockData';
import { X, Check, ArrowRight, Volume2 } from 'lucide-react-native';
import * as Speech from 'expo-speech';

export default function LessonScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { state, updateLessonProgress, updateUserXP, updateStreak } = useApp();

  const [exercises, setExercises] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [languageCode, setLanguageCode] = useState<string>('en');

  useEffect(() => {
    const lessonExercises = EXERCISES[id as string] || [];
    setExercises(lessonExercises);

    const lesson = ALL_LESSONS.find(l => l.id === id);
    if (lesson) {
      const language = LANGUAGES.find(l => l.id === lesson.language_id);
      if (language) {
        setLanguageCode(language.code);
      }
    }
  }, [id]);

  const playPronunciation = (text: string) => {
    Speech.speak(text, { language: languageCode });
  };

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    const currentExercise = exercises[currentIndex];

    if (currentExercise?.type === 'multiple_choice') {
      setSelectedAnswer(answer);
      playPronunciation(answer);
    } else if (currentExercise?.type === 'translation') {
      setUserAnswer(answer);
    }
  };

  const checkAnswer = () => {
    const currentExercise = exercises[currentIndex];
    let answer = '';

    if (currentExercise?.type === 'multiple_choice') {
      answer = selectedAnswer;
    } else if (currentExercise?.type === 'translation') {
      answer = userAnswer.trim().toLowerCase();
    }

    const correct =
      answer.toLowerCase() === currentExercise.correct_answer.toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setCorrectCount(correctCount + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('');
      setUserAnswer('');
      setIsCorrect(null);
      setShowResult(false);
    } else {
      const lesson = ALL_LESSONS.find((l) => l.id === id);
      if (lesson) {
        const xpEarned = Math.floor(
          (correctCount / exercises.length) * lesson.xp_reward
        );

        updateLessonProgress(id as string, {
          lesson_id: id as string,
          completed: correctCount === exercises.length,
          correct_count: correctCount,
          total_attempts: exercises.length,
          xp_earned: xpEarned,
        });

        updateUserXP(xpEarned);

        if (state.user && !state.user.last_practice_date) {
          updateStreak(1);
        } else if (state.user?.last_practice_date) {
          const lastDate = new Date(state.user.last_practice_date);
          const today = new Date();
          const diffTime = today.getTime() - lastDate.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {
            updateStreak((state.user?.streak_count || 0) + 1);
          } else if (diffDays > 1) {
            updateStreak(1);
          }
        }
      }

      router.back();
    }
  };

  if (exercises.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Loading...</Text>
      </View>
    );
  }

  const currentExercise = exercises[currentIndex];
  const progress = ((currentIndex + 1) / exercises.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <X size={24} color="#3c3c3c" strokeWidth={2} />
        </TouchableOpacity>
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBarFill, { width: `${progress}%` }]}
          />
        </View>
        <Text style={styles.progressText}>
          {currentIndex + 1}/{exercises.length}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.question}>{currentExercise.question}</Text>

        {currentExercise.type === 'multiple_choice' && (
          <View style={styles.optionsContainer}>
            {currentExercise.options?.map((option: string, index: number) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswer === option && styles.optionButtonSelected,
                  showResult &&
                    selectedAnswer === option &&
                    (isCorrect
                      ? styles.optionButtonCorrect
                      : styles.optionButtonIncorrect),
                ]}
                onPress={() => handleAnswer(option)}
                disabled={showResult}
              >
                <View style={styles.optionContent}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedAnswer === option && styles.optionTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                  <Volume2 size={20} color={selectedAnswer === option ? '#58cc02' : '#afafaf'} strokeWidth={2} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {currentExercise.type === 'translation' && (
          <TextInput
            style={[
              styles.input,
              showResult &&
                (isCorrect
                  ? styles.inputCorrect
                  : styles.inputIncorrect),
            ]}
            placeholder="Type your answer..."
            value={userAnswer}
            onChangeText={(text) => handleAnswer(text)}
            editable={!showResult}
            autoCapitalize="none"
            autoCorrect={false}
          />
        )}

        {showResult && (
          <View
            style={[
              styles.resultContainer,
              isCorrect ? styles.resultCorrect : styles.resultIncorrect,
            ]}
          >
            <View style={styles.resultContent}>
              {isCorrect ? (
                <Check size={24} color="#58cc02" strokeWidth={2} />
              ) : (
                <X size={24} color="#ff4b4b" strokeWidth={2} />
              )}
              <Text
                style={[
                  styles.resultText,
                  isCorrect ? styles.resultTextCorrect : styles.resultTextIncorrect,
                ]}
              >
                {isCorrect ? 'Correct!' : 'Not quite'}
              </Text>
            </View>
            {!isCorrect && (
              <Text style={styles.correctAnswerText}>
                Correct answer: {currentExercise.correct_answer}
              </Text>
            )}
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.checkButton,
            (!selectedAnswer && !userAnswer) && styles.checkButtonDisabled,
            showResult && styles.checkButtonNext,
          ]}
          onPress={showResult ? handleNext : checkAnswer}
          disabled={!selectedAnswer && !userAnswer}
        >
          <Text style={styles.checkButtonText}>
            {showResult ? (
              currentIndex < exercises.length - 1 ? (
                'Next'
              ) : (
                'Finish'
              )
            ) : (
              'Check'
            )}
          </Text>
          {showResult && (
            <ArrowRight size={20} color="#fff" strokeWidth={2} />
          )}
        </TouchableOpacity>
      </View>
    </View>
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
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3c3c3c',
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 12,
  },
  progressBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#e5e5e5',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#58cc02',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3c3c3c',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  question: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 32,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#e5e5e5',
  },
  optionButtonSelected: {
    borderColor: '#58cc02',
    backgroundColor: '#f0fde4',
  },
  optionButtonCorrect: {
    borderColor: '#58cc02',
    backgroundColor: '#d7ffc3',
  },
  optionButtonIncorrect: {
    borderColor: '#ff4b4b',
    backgroundColor: '#ffe5e5',
  },
  optionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#3c3c3c',
    fontWeight: '600',
  },
  optionTextSelected: {
    color: '#58cc02',
  },
  input: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 20,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#e5e5e5',
  },
  inputCorrect: {
    borderColor: '#58cc02',
    backgroundColor: '#d7ffc3',
  },
  inputIncorrect: {
    borderColor: '#ff4b4b',
    backgroundColor: '#ffe5e5',
  },
  resultContainer: {
    marginTop: 24,
    padding: 20,
    borderRadius: 12,
  },
  resultCorrect: {
    backgroundColor: '#d7ffc3',
  },
  resultIncorrect: {
    backgroundColor: '#ffe5e5',
  },
  resultContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  resultText: {
    fontSize: 20,
    fontWeight: '700',
  },
  resultTextCorrect: {
    color: '#58cc02',
  },
  resultTextIncorrect: {
    color: '#ff4b4b',
  },
  correctAnswerText: {
    fontSize: 16,
    color: '#3c3c3c',
    marginTop: 8,
  },
  footer: {
    padding: 24,
    paddingBottom: 32,
  },
  checkButton: {
    backgroundColor: '#58cc02',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  checkButtonDisabled: {
    opacity: 0.5,
  },
  checkButtonNext: {
    backgroundColor: '#58cc02',
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
