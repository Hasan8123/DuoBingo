import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { LANGUAGES } from '@/lib/mockData';

export default function Onboarding() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState('');
  const [saving, setSaving] = useState(false);
  const { setUser } = useApp();
  const router = useRouter();

  const handleContinue = async () => {
    if (!selectedLanguage || !displayName.trim()) return;

    setSaving(true);

    const selectedLang = LANGUAGES.find((l) => l.id === selectedLanguage);

    setUser({
      id: '1',
      display_name: displayName,
      email: 'demo@duobingo.com',
      current_language_id: selectedLanguage,
      total_xp: 0,
      streak_count: 0,
    });

    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Welcome to Duobingo</Text>
        <Text style={styles.subtitle}>What's your name?</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={displayName}
            onChangeText={(text) => {
              if (text.length <= 20) setDisplayName(text);
            }}
            placeholder="Type your name..."
            placeholderTextColor="#777"
            autoCapitalize="words"
          />
        </View>

        <Text style={styles.languageTitle}>Choose a language to learn</Text>

        <View style={styles.languageGrid}>
          {LANGUAGES.map((language) => (
            <TouchableOpacity
              key={language.id}
              style={[
                styles.languageCard,
                selectedLanguage === language.id &&
                  styles.languageCardSelected,
              ]}
              onPress={() => setSelectedLanguage(language.id)}
            >
              <Text style={styles.languageEmoji}>{language.flag_emoji}</Text>
              <Text style={styles.languageName}>{language.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            (!selectedLanguage || !displayName.trim() || saving) &&
              styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedLanguage || !displayName.trim() || saving}
        >
          <Text style={styles.continueButtonText}>
            {saving ? 'Starting...' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
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
    fontSize: 20,
    color: '#777',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 32,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c3c3c',
    marginBottom: 8,
  },
  textInput: {
    fontSize: 24,
    fontWeight: '700',
    color: '#58cc02',
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#e5e5e5',
  },
  languageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3c3c3c',
    marginBottom: 16,
  },
  languageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
    marginBottom: 32,
  },
  languageCard: {
    width: '46%',
    margin: '2%',
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#e5e5e5',
  },
  languageCardSelected: {
    borderColor: '#58cc02',
    backgroundColor: '#f0fde4',
  },
  languageEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c3c3c',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#58cc02',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
