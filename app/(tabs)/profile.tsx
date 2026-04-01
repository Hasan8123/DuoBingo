import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { LANGUAGES } from '@/lib/mockData';
import { User, Trophy, Flame, Globe, RotateCcw, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const { state, setUser } = useApp();
  const [currentLanguage, setCurrentLanguage] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (state.user) {
      const lang = LANGUAGES.find((l) => l.id === state.user?.current_language_id);
      setCurrentLanguage(lang);
    }
  }, [state.user]);

  const handleChangeLanguage = () => {
    if (state.user) {
      setUser({
        ...state.user,
        current_language_id: '',
        total_xp: 0,
        streak_count: 0,
        last_practice_date: undefined,
      });
      router.replace('/onboarding');
    }
  };

  const handleReset = () => {
    if (state.user) {
      setUser({
        ...state.user,
        total_xp: 0,
        streak_count: 0,
        last_practice_date: undefined,
      });
    }
  };

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
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <User size={48} color="#58cc02" strokeWidth={2} />
        </View>
        <Text style={styles.displayName}>{state.user.display_name}</Text>
        <Text style={styles.email}>demo@duobingo.com</Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statBox}>
          <Trophy size={32} color="#ffc800" strokeWidth={2} />
          <Text style={styles.statValue}>{state.user.total_xp}</Text>
          <Text style={styles.statLabel}>Total XP</Text>
        </View>

        <View style={styles.statBox}>
          <Flame size={32} color="#ff9600" strokeWidth={2} />
          <Text style={styles.statValue}>{state.user.streak_count}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning</Text>

        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Globe size={24} color="#58cc02" strokeWidth={2} />
            <View>
              <Text style={styles.menuItemTitle}>Current Language</Text>
              {currentLanguage && (
                <Text style={styles.menuItemSubtitle}>
                  {currentLanguage.flag_emoji} {currentLanguage.name}
                </Text>
              )}
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleChangeLanguage}
        >
          <Text style={styles.actionButtonText}>Change Language</Text>
          <ChevronRight size={20} color="#58cc02" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <RotateCcw size={20} color="#ff9600" strokeWidth={2} />
          <Text style={styles.resetButtonText}>Reset Progress</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#3c3c3c',
  },
  profileCard: {
    alignItems: 'center',
    padding: 24,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0fde4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  displayName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  statsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3c3c3c',
    marginTop: 12,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c3c3c',
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0fde4',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#58cc02',
  },
  actionButtonText: {
    color: '#58cc02',
    fontSize: 16,
    fontWeight: '700',
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#ff9600',
    gap: 8,
  },
  resetButtonText: {
    color: '#ff9600',
    fontSize: 16,
    fontWeight: '700',
  },
});
