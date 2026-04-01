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
import { LANGUAGES, SPANISH_LESSONS } from '@/lib/mockData';
import { Flame, Trophy, Target, ArrowRight } from 'lucide-react-native';

export default function HomeScreen() {
  const { state } = useApp();
  const [currentLanguage, setCurrentLanguage] = useState<any>(null);
  const [todayProgress, setTodayProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (state.user) {
      const lang = LANGUAGES.find((l) => l.id === state.user?.current_language_id);
      setCurrentLanguage(lang);
    }
  }, [state.user]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (state.user?.last_practice_date === today) {
      const progress = Object.values(state.lessonProgress).reduce(
        (sum, p) => sum + p.xp_earned,
        0
      );
      setTodayProgress(progress);
    }
  }, [state.lessonProgress]);

  if (!state.user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {state.user.display_name}!</Text>
          {currentLanguage && (
            <View style={styles.languageBadge}>
              <Text style={styles.languageEmoji}>{currentLanguage.flag_emoji}</Text>
              <Text style={styles.languageName}>{currentLanguage.name}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <View style={styles.statIconContainer}>
            <Flame size={32} color="#ff9600" strokeWidth={2} />
          </View>
          <Text style={styles.statValue}>{state.user.streak_count}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIconContainer}>
            <Trophy size={32} color="#ffc800" strokeWidth={2} />
          </View>
          <Text style={styles.statValue}>{state.user.total_xp}</Text>
          <Text style={styles.statLabel}>Total XP</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIconContainer}>
            <Target size={32} color="#58cc02" strokeWidth={2} />
          </View>
          <Text style={styles.statValue}>{todayProgress}</Text>
          <Text style={styles.statLabel}>Today</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Goal</Text>
        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <Text style={styles.goalText}>Practice for 10 minutes today</Text>
            <Text style={styles.goalProgress}>{todayProgress}/50 XP</Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${Math.min((todayProgress / 50) * 100, 100)}%` },
              ]}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <TouchableOpacity
          style={styles.continueCard}
          onPress={() => router.push('/(tabs)/learn')}
        >
          <View style={styles.continueContent}>
            <View>
              <Text style={styles.continueTitle}>Jump back in</Text>
              <Text style={styles.continueSubtitle}>
                Complete your lessons and earn XP
              </Text>
            </View>
            <ArrowRight size={24} color="#58cc02" strokeWidth={2} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 12,
  },
  languageBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  languageEmoji: {
    fontSize: 20,
    marginRight: 8,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c3c3c',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statIconContainer: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 16,
  },
  goalCard: {
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c3c3c',
    flex: 1,
  },
  goalProgress: {
    fontSize: 14,
    fontWeight: '700',
    color: '#58cc02',
  },
  progressBar: {
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
  continueCard: {
    backgroundColor: '#f0fde4',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#58cc02',
  },
  continueContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continueTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 4,
  },
  continueSubtitle: {
    fontSize: 14,
    color: '#777',
  },
});
