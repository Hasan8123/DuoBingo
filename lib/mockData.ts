export interface Language {
  id: string;
  name: string;
  code: string;
  flag_emoji: string;
}

export interface Exercise {
  id: string;
  lesson_id: string;
  type: 'multiple_choice' | 'translation';
  question: string;
  correct_answer: string;
  options?: string[];
  order_index: number;
}

export interface Lesson {
  id: string;
  language_id: string;
  title: string;
  description?: string;
  level: number;
  order_index: number;
  xp_reward: number;
}

export interface UserProfile {
  id: string;
  display_name: string;
  email: string;
  current_language_id: string;
  total_xp: number;
  streak_count: number;
  last_practice_date?: string;
}

export const LANGUAGES: Language[] = [
  { id: '1', name: 'Spanish', code: 'es', flag_emoji: '🇪🇸' },
  { id: '2', name: 'French', code: 'fr', flag_emoji: '🇫🇷' },
  { id: '3', name: 'Mandarin Chinese', code: 'zh', flag_emoji: '🇨🇳' },
  { id: '4', name: 'Hindi', code: 'hi', flag_emoji: '🇮🇳' },
  { id: '5', name: 'Arabic', code: 'ar', flag_emoji: '🇸🇦' },
  { id: '6', name: 'Korean', code: 'ko', flag_emoji: '🇰🇷' },
  { id: '7', name: 'Portuguese', code: 'pt', flag_emoji: '🇵🇹' },
  { id: '8', name: 'Russian', code: 'ru', flag_emoji: '🇷🇺' },
  { id: '9', name: 'Urdu', code: 'ur', flag_emoji: '🇵🇰' },
  { id: '10', name: 'Indonesian', code: 'id', flag_emoji: '🇮🇩' },
  { id: '11', name: 'English', code: 'en', flag_emoji: '🇬🇧' },
];

export const ALL_LESSONS: Lesson[] = [
  // Spanish (id: '1')
  { id: 'es-1', language_id: '1', title: 'Basics 1', description: 'Greetings and introductions', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'es-2', language_id: '1', title: 'Food', description: 'Common food words', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'es-3', language_id: '1', title: 'Colors', description: 'Basic colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'es-4', language_id: '1', title: 'Numbers', description: 'Count to ten', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'es-5', language_id: '1', title: 'Family', description: 'Family members', level: 1, order_index: 5, xp_reward: 10 },

  // French (id: '2')
  { id: 'fr-1', language_id: '2', title: 'Basics 1', description: 'Salutations et introductions', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'fr-2', language_id: '2', title: 'Food', description: 'La nourriture', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'fr-3', language_id: '2', title: 'Colors', description: 'Les couleurs', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'fr-4', language_id: '2', title: 'Numbers', description: 'Les nombres', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'fr-5', language_id: '2', title: 'Family', description: 'La famille', level: 1, order_index: 5, xp_reward: 10 },

  // Mandarin Chinese (id: '3')
  { id: 'zh-1', language_id: '3', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'zh-2', language_id: '3', title: 'Food', description: 'Common foods', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'zh-3', language_id: '3', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'zh-4', language_id: '3', title: 'Numbers', description: 'Numbers 1-10', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'zh-5', language_id: '3', title: 'Family', description: 'Family', level: 1, order_index: 5, xp_reward: 10 },

  // Hindi (id: '4')
  { id: 'hi-1', language_id: '4', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'hi-2', language_id: '4', title: 'Food', description: 'Food items', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'hi-3', language_id: '4', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'hi-4', language_id: '4', title: 'Numbers', description: 'Numbers', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'hi-5', language_id: '4', title: 'Family', description: 'Family members', level: 1, order_index: 5, xp_reward: 10 },

  // Arabic (id: '5')
  { id: 'ar-1', language_id: '5', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'ar-2', language_id: '5', title: 'Food', description: 'Food', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'ar-3', language_id: '5', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'ar-4', language_id: '5', title: 'Numbers', description: 'Numbers', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'ar-5', language_id: '5', title: 'Family', description: 'Family', level: 1, order_index: 5, xp_reward: 10 },

  // Korean (id: '6')
  { id: 'ko-1', language_id: '6', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'ko-2', language_id: '6', title: 'Food', description: 'Food', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'ko-3', language_id: '6', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'ko-4', language_id: '6', title: 'Numbers', description: 'Numbers', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'ko-5', language_id: '6', title: 'Family', description: 'Family', level: 1, order_index: 5, xp_reward: 10 },

  // Portuguese (id: '7')
  { id: 'pt-1', language_id: '7', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'pt-2', language_id: '7', title: 'Food', description: 'Food', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'pt-3', language_id: '7', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'pt-4', language_id: '7', title: 'Numbers', description: 'Numbers', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'pt-5', language_id: '7', title: 'Family', description: 'Family', level: 1, order_index: 5, xp_reward: 10 },

  // Russian (id: '8')
  { id: 'ru-1', language_id: '8', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'ru-2', language_id: '8', title: 'Food', description: 'Food', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'ru-3', language_id: '8', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'ru-4', language_id: '8', title: 'Numbers', description: 'Numbers', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'ru-5', language_id: '8', title: 'Family', description: 'Family', level: 1, order_index: 5, xp_reward: 10 },

  // Urdu (id: '9')
  { id: 'ur-1', language_id: '9', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'ur-2', language_id: '9', title: 'Food', description: 'Food items', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'ur-3', language_id: '9', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'ur-4', language_id: '9', title: 'Numbers', description: 'Numbers', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'ur-5', language_id: '9', title: 'Family', description: 'Family members', level: 1, order_index: 5, xp_reward: 10 },

  // Indonesian (id: '10')
  { id: 'id-1', language_id: '10', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'id-2', language_id: '10', title: 'Food', description: 'Food', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'id-3', language_id: '10', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'id-4', language_id: '10', title: 'Numbers', description: 'Numbers', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'id-5', language_id: '10', title: 'Family', description: 'Family', level: 1, order_index: 5, xp_reward: 10 },

  // English (id: '11')
  { id: 'en-1', language_id: '11', title: 'Basics 1', description: 'Greetings', level: 1, order_index: 1, xp_reward: 10 },
  { id: 'en-2', language_id: '11', title: 'Food', description: 'Food', level: 1, order_index: 2, xp_reward: 10 },
  { id: 'en-3', language_id: '11', title: 'Colors', description: 'Colors', level: 1, order_index: 3, xp_reward: 10 },
  { id: 'en-4', language_id: '11', title: 'Numbers', description: 'Numbers', level: 1, order_index: 4, xp_reward: 10 },
  { id: 'en-5', language_id: '11', title: 'Family', description: 'Family', level: 1, order_index: 5, xp_reward: 10 },
];

export const EXERCISES: { [key: string]: Exercise[] } = {
  // --- Spanish ---
  'es-1': [
    { id: 'es-1-1', lesson_id: 'es-1', type: 'multiple_choice', question: 'How do you say "Hello" in Spanish?', correct_answer: 'Hola', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'], order_index: 1 },
    { id: 'es-1-2', lesson_id: 'es-1', type: 'translation', question: 'Translate to Spanish: Goodbye', correct_answer: 'Adiós', order_index: 2 },
    { id: 'es-1-3', lesson_id: 'es-1', type: 'multiple_choice', question: 'How do you say "Thank you" in Spanish?', correct_answer: 'Gracias', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'], order_index: 3 },
    { id: 'es-1-4', lesson_id: 'es-1', type: 'multiple_choice', question: 'How do you say "Please" in Spanish?', correct_answer: 'Por favor', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'], order_index: 4 },
    { id: 'es-1-5', lesson_id: 'es-1', type: 'translation', question: 'Translate to Spanish: Good morning', correct_answer: 'Buenos días', order_index: 5 },
  ],
  'es-2': [
    { id: 'es-2-1', lesson_id: 'es-2', type: 'multiple_choice', question: 'How do you say "Water" in Spanish?', correct_answer: 'Agua', options: ['Agua', 'Pan', 'Leche', 'Café'], order_index: 1 },
    { id: 'es-2-2', lesson_id: 'es-2', type: 'multiple_choice', question: 'How do you say "Bread" in Spanish?', correct_answer: 'Pan', options: ['Agua', 'Pan', 'Leche', 'Café'], order_index: 2 },
    { id: 'es-2-3', lesson_id: 'es-2', type: 'translation', question: 'Translate to Spanish: Apple', correct_answer: 'Manzana', order_index: 3 },
    { id: 'es-2-4', lesson_id: 'es-2', type: 'multiple_choice', question: 'How do you say "Milk" in Spanish?', correct_answer: 'Leche', options: ['Agua', 'Pan', 'Leche', 'Café'], order_index: 4 },
    { id: 'es-2-5', lesson_id: 'es-2', type: 'translation', question: 'Translate to Spanish: Rice', correct_answer: 'Arroz', order_index: 5 },
  ],
  'es-3': [
    { id: 'es-3-1', lesson_id: 'es-3', type: 'multiple_choice', question: 'How do you say "Red" in Spanish?', correct_answer: 'Rojo', options: ['Rojo', 'Azul', 'Verde', 'Amarillo'], order_index: 1 },
    { id: 'es-3-2', lesson_id: 'es-3', type: 'multiple_choice', question: 'How do you say "Blue" in Spanish?', correct_answer: 'Azul', options: ['Rojo', 'Azul', 'Verde', 'Amarillo'], order_index: 2 },
    { id: 'es-3-3', lesson_id: 'es-3', type: 'translation', question: 'Translate to Spanish: Green', correct_answer: 'Verde', order_index: 3 },
    { id: 'es-3-4', lesson_id: 'es-3', type: 'multiple_choice', question: 'How do you say "Yellow" in Spanish?', correct_answer: 'Amarillo', options: ['Rojo', 'Azul', 'Verde', 'Amarillo'], order_index: 4 },
    { id: 'es-3-5', lesson_id: 'es-3', type: 'translation', question: 'Translate to Spanish: Black', correct_answer: 'Negro', order_index: 5 },
  ],
  'es-4': [
    { id: 'es-4-1', lesson_id: 'es-4', type: 'multiple_choice', question: 'How do you say "One" in Spanish?', correct_answer: 'Uno', options: ['Uno', 'Dos', 'Tres', 'Cuatro'], order_index: 1 },
    { id: 'es-4-2', lesson_id: 'es-4', type: 'multiple_choice', question: 'How do you say "Two" in Spanish?', correct_answer: 'Dos', options: ['Uno', 'Dos', 'Tres', 'Cuatro'], order_index: 2 },
    { id: 'es-4-3', lesson_id: 'es-4', type: 'translation', question: 'Translate to Spanish: Three', correct_answer: 'Tres', order_index: 3 },
    { id: 'es-4-4', lesson_id: 'es-4', type: 'translation', question: 'Translate to Spanish: Four', correct_answer: 'Cuatro', order_index: 4 },
    { id: 'es-4-5', lesson_id: 'es-4', type: 'multiple_choice', question: 'How do you say "Five" in Spanish?', correct_answer: 'Cinco', options: ['Cinco', 'Seis', 'Siete', 'Ocho'], order_index: 5 },
  ],
  'es-5': [
    { id: 'es-5-1', lesson_id: 'es-5', type: 'multiple_choice', question: 'How do you say "Mother" in Spanish?', correct_answer: 'Madre', options: ['Madre', 'Padre', 'Hermano', 'Hermana'], order_index: 1 },
    { id: 'es-5-2', lesson_id: 'es-5', type: 'multiple_choice', question: 'How do you say "Father" in Spanish?', correct_answer: 'Padre', options: ['Madre', 'Padre', 'Hermano', 'Hermana'], order_index: 2 },
    { id: 'es-5-3', lesson_id: 'es-5', type: 'translation', question: 'Translate to Spanish: Sister', correct_answer: 'Hermana', order_index: 3 },
    { id: 'es-5-4', lesson_id: 'es-5', type: 'translation', question: 'Translate to Spanish: Brother', correct_answer: 'Hermano', order_index: 4 },
    { id: 'es-5-5', lesson_id: 'es-5', type: 'multiple_choice', question: 'How do you say "Son" in Spanish?', correct_answer: 'Hijo', options: ['Hijo', 'Hija', 'Abuelo', 'Abuela'], order_index: 5 },
  ],

  // --- French ---
  'fr-1': [
    { id: 'fr-1-1', lesson_id: 'fr-1', type: 'multiple_choice', question: 'How do you say "Hello" in French?', correct_answer: 'Bonjour', options: ['Bonjour', 'Salut', 'Merci', 'S\'il vous plaît'], order_index: 1 },
    { id: 'fr-1-2', lesson_id: 'fr-1', type: 'translation', question: 'Translate to French: Goodbye', correct_answer: 'Au revoir', order_index: 2 },
    { id: 'fr-1-3', lesson_id: 'fr-1', type: 'multiple_choice', question: 'How do you say "Thank you" in French?', correct_answer: 'Merci', options: ['Bonjour', 'Salut', 'Merci', 'S\'il vous plaît'], order_index: 3 },
    { id: 'fr-1-4', lesson_id: 'fr-1', type: 'translation', question: 'Translate to French: Please', correct_answer: 'S\'il vous plaît', order_index: 4 },
    { id: 'fr-1-5', lesson_id: 'fr-1', type: 'multiple_choice', question: 'How do you say "Yes" in French?', correct_answer: 'Oui', options: ['Oui', 'Non', 'Peut-être', 'Merci'], order_index: 5 },
  ],
  'fr-2': [
    { id: 'fr-2-1', lesson_id: 'fr-2', type: 'multiple_choice', question: 'How do you say "Bread" in French?', correct_answer: 'Pain', options: ['Pain', 'Eau', 'Lait', 'Fromage'], order_index: 1 },
    { id: 'fr-2-2', lesson_id: 'fr-2', type: 'multiple_choice', question: 'How do you say "Water" in French?', correct_answer: 'Eau', options: ['Pain', 'Eau', 'Lait', 'Fromage'], order_index: 2 },
    { id: 'fr-2-3', lesson_id: 'fr-2', type: 'translation', question: 'Translate to French: Milk', correct_answer: 'Lait', order_index: 3 },
    { id: 'fr-2-4', lesson_id: 'fr-2', type: 'translation', question: 'Translate to French: Cheese', correct_answer: 'Fromage', order_index: 4 },
    { id: 'fr-2-5', lesson_id: 'fr-2', type: 'multiple_choice', question: 'How do you say "Apple" in French?', correct_answer: 'Pomme', options: ['Pomme', 'Orange', 'Banane', 'Raisin'], order_index: 5 },
  ],
  'fr-3': [
    { id: 'fr-3-1', lesson_id: 'fr-3', type: 'multiple_choice', question: 'How do you say "Blue" in French?', correct_answer: 'Bleu', options: ['Rouge', 'Bleu', 'Vert', 'Jaune'], order_index: 1 },
    { id: 'fr-3-2', lesson_id: 'fr-3', type: 'multiple_choice', question: 'How do you say "Red" in French?', correct_answer: 'Rouge', options: ['Rouge', 'Bleu', 'Vert', 'Jaune'], order_index: 2 },
    { id: 'fr-3-3', lesson_id: 'fr-3', type: 'translation', question: 'Translate to French: Green', correct_answer: 'Vert', order_index: 3 },
    { id: 'fr-3-4', lesson_id: 'fr-3', type: 'translation', question: 'Translate to French: Yellow', correct_answer: 'Jaune', order_index: 4 },
    { id: 'fr-3-5', lesson_id: 'fr-3', type: 'multiple_choice', question: 'How do you say "Black" in French?', correct_answer: 'Noir', options: ['Blanc', 'Noir', 'Gris', 'Marron'], order_index: 5 },
  ],
  'fr-4': [
    { id: 'fr-4-1', lesson_id: 'fr-4', type: 'multiple_choice', question: 'How do you say "One" in French?', correct_answer: 'Un', options: ['Un', 'Deux', 'Trois', 'Quatre'], order_index: 1 },
    { id: 'fr-4-2', lesson_id: 'fr-4', type: 'multiple_choice', question: 'How do you say "Two" in French?', correct_answer: 'Deux', options: ['Un', 'Deux', 'Trois', 'Quatre'], order_index: 2 },
    { id: 'fr-4-3', lesson_id: 'fr-4', type: 'translation', question: 'Translate to French: Three', correct_answer: 'Trois', order_index: 3 },
    { id: 'fr-4-4', lesson_id: 'fr-4', type: 'translation', question: 'Translate to French: Five', correct_answer: 'Cinq', order_index: 4 },
    { id: 'fr-4-5', lesson_id: 'fr-4', type: 'multiple_choice', question: 'How do you say "Ten" in French?', correct_answer: 'Dix', options: ['Six', 'Sept', 'Huit', 'Dix'], order_index: 5 },
  ],
  'fr-5': [
    { id: 'fr-5-1', lesson_id: 'fr-5', type: 'multiple_choice', question: 'How do you say "Father" in French?', correct_answer: 'Père', options: ['Père', 'Mère', 'Frère', 'Soeur'], order_index: 1 },
    { id: 'fr-5-2', lesson_id: 'fr-5', type: 'multiple_choice', question: 'How do you say "Mother" in French?', correct_answer: 'Mère', options: ['Père', 'Mère', 'Frère', 'Soeur'], order_index: 2 },
    { id: 'fr-5-3', lesson_id: 'fr-5', type: 'translation', question: 'Translate to French: Brother', correct_answer: 'Frère', order_index: 3 },
    { id: 'fr-5-4', lesson_id: 'fr-5', type: 'translation', question: 'Translate to French: Sister', correct_answer: 'Soeur', order_index: 4 },
    { id: 'fr-5-5', lesson_id: 'fr-5', type: 'multiple_choice', question: 'How do you say "Grandfather" in French?', correct_answer: 'Grand-père', options: ['Grand-père', 'Grand-mère', 'Oncle', 'Tante'], order_index: 5 },
  ],

  // --- Mandarin Chinese ---
  'zh-1': [
    { id: 'zh-1-1', lesson_id: 'zh-1', type: 'multiple_choice', question: 'How do you say "Hello" in Mandarin?', correct_answer: 'Nǐ hǎo', options: ['Nǐ hǎo', 'Xièxiè', 'Zàijiàn', 'Duìbùqǐ'], order_index: 1 },
    { id: 'zh-1-2', lesson_id: 'zh-1', type: 'translation', question: 'Translate to Mandarin: Thank you', correct_answer: 'Xièxiè', order_index: 2 },
    { id: 'zh-1-3', lesson_id: 'zh-1', type: 'multiple_choice', question: 'How do you say "Goodbye" in Mandarin?', correct_answer: 'Zàijiàn', options: ['Nǐ hǎo', 'Xièxiè', 'Zàijiàn', 'Duìbùqǐ'], order_index: 3 },
    { id: 'zh-1-4', lesson_id: 'zh-1', type: 'translation', question: 'Translate to Mandarin: Sorry', correct_answer: 'Duìbùqǐ', order_index: 4 },
    { id: 'zh-1-5', lesson_id: 'zh-1', type: 'multiple_choice', question: 'How do you say "Yes" in Mandarin?', correct_answer: 'Shì de', options: ['Shì de', 'Bù shì', 'Hǎo de', 'Xièxiè'], order_index: 5 },
  ],
  'zh-2': [
    { id: 'zh-2-1', lesson_id: 'zh-2', type: 'multiple_choice', question: 'How do you say "Rice" in Mandarin?', correct_answer: 'Mǐfàn', options: ['Mǐfàn', 'Miànbiāo', 'Shuǐ', 'Niúnǎi'], order_index: 1 },
    { id: 'zh-2-2', lesson_id: 'zh-2', type: 'multiple_choice', question: 'How do you say "Water" in Mandarin?', correct_answer: 'Shuǐ', options: ['Mǐfàn', 'Miànbiāo', 'Shuǐ', 'Niúnǎi'], order_index: 2 },
    { id: 'zh-2-3', lesson_id: 'zh-2', type: 'translation', question: 'Translate to Mandarin: Bread', correct_answer: 'Miànbiāo', order_index: 3 },
    { id: 'zh-2-4', lesson_id: 'zh-2', type: 'translation', question: 'Translate to Mandarin: Milk', correct_answer: 'Niúnǎi', order_index: 4 },
    { id: 'zh-2-5', lesson_id: 'zh-2', type: 'multiple_choice', question: 'How do you say "Tea" in Mandarin?', correct_answer: 'Chá', options: ['Chá', 'Kāfēi', 'Shuǐguǒ', 'Ròu'], order_index: 5 },
  ],
  'zh-3': [
    { id: 'zh-3-1', lesson_id: 'zh-3', type: 'multiple_choice', question: 'How do you say "Green" in Mandarin?', correct_answer: 'Lǜsè', options: ['Hóngsè', 'Lán sè', 'Lǜsè', 'Huángsè'], order_index: 1 },
    { id: 'zh-3-2', lesson_id: 'zh-3', type: 'multiple_choice', question: 'How do you say "Red" in Mandarin?', correct_answer: 'Hóngsè', options: ['Hóngsè', 'Lán sè', 'Lǜsè', 'Huángsè'], order_index: 2 },
    { id: 'zh-3-3', lesson_id: 'zh-3', type: 'translation', question: 'Translate to Mandarin: Blue', correct_answer: 'Lán sè', order_index: 3 },
    { id: 'zh-3-4', lesson_id: 'zh-3', type: 'translation', question: 'Translate to Mandarin: Yellow', correct_answer: 'Huángsè', order_index: 4 },
    { id: 'zh-3-5', lesson_id: 'zh-3', type: 'multiple_choice', question: 'How do you say "White" in Mandarin?', correct_answer: 'Báisè', options: ['Báisè', 'Hēisè', 'Huīsè', 'Zǐsè'], order_index: 5 },
  ],
  'zh-4': [
    { id: 'zh-4-1', lesson_id: 'zh-4', type: 'multiple_choice', question: 'How do you say "One" in Mandarin?', correct_answer: 'Yī', options: ['Yī', 'Èr', 'Sān', 'Sì'], order_index: 1 },
    { id: 'zh-4-2', lesson_id: 'zh-4', type: 'multiple_choice', question: 'How do you say "Two" in Mandarin?', correct_answer: 'Èr', options: ['Yī', 'Èr', 'Sān', 'Sì'], order_index: 2 },
    { id: 'zh-4-3', lesson_id: 'zh-4', type: 'translation', question: 'Translate to Mandarin: Three', correct_answer: 'Sān', order_index: 3 },
    { id: 'zh-4-4', lesson_id: 'zh-4', type: 'translation', question: 'Translate to Mandarin: Five', correct_answer: 'Wǔ', order_index: 4 },
    { id: 'zh-4-5', lesson_id: 'zh-4', type: 'multiple_choice', question: 'How do you say "Ten" in Mandarin?', correct_answer: 'Shí', options: ['Liù', 'Qī', 'Bā', 'Shí'], order_index: 5 },
  ],
  'zh-5': [
    { id: 'zh-5-1', lesson_id: 'zh-5', type: 'multiple_choice', question: 'How do you say "Brother" in Mandarin?', correct_answer: 'Gēgē', options: ['Māma', 'Bàba', 'Gēgē', 'Jiějie'], order_index: 1 },
    { id: 'zh-5-2', lesson_id: 'zh-5', type: 'multiple_choice', question: 'How do you say "Sister" in Mandarin?', correct_answer: 'Jiějie', options: ['Māma', 'Bàba', 'Gēgē', 'Jiějie'], order_index: 2 },
    { id: 'zh-5-3', lesson_id: 'zh-5', type: 'translation', question: 'Translate to Mandarin: Father', correct_answer: 'Bàba', order_index: 3 },
    { id: 'zh-5-4', lesson_id: 'zh-5', type: 'translation', question: 'Translate to Mandarin: Mother', correct_answer: 'Māma', order_index: 4 },
    { id: 'zh-5-5', lesson_id: 'zh-5', type: 'multiple_choice', question: 'How do you say "Grandfather" in Mandarin?', correct_answer: 'Yéyé', options: ['Yéyé', 'Nǎinai', 'Wàigōng', 'Wàipó'], order_index: 5 },
  ],

  // --- Hindi ---
  'hi-1': [
    { id: 'hi-1-1', lesson_id: 'hi-1', type: 'multiple_choice', question: 'How do you say "Hello" in Hindi?', correct_answer: 'Namaste', options: ['Namaste', 'Alvida', 'Shukriya', 'Kripya'], order_index: 1 },
    { id: 'hi-1-2', lesson_id: 'hi-1', type: 'translation', question: 'Translate to Hindi: Goodbye', correct_answer: 'Alvida', order_index: 2 },
    { id: 'hi-1-3', lesson_id: 'hi-1', type: 'multiple_choice', question: 'How do you say "Thank you" in Hindi?', correct_answer: 'Shukriya', options: ['Namaste', 'Alvida', 'Shukriya', 'Kripya'], order_index: 3 },
    { id: 'hi-1-4', lesson_id: 'hi-1', type: 'translation', question: 'Translate to Hindi: Please', correct_answer: 'Kripya', order_index: 4 },
    { id: 'hi-1-5', lesson_id: 'hi-1', type: 'multiple_choice', question: 'How do you say "Yes" in Hindi?', correct_answer: 'Haan', options: ['Haan', 'Nahi', 'Shayad', 'Theek hai'], order_index: 5 },
  ],
  'hi-2': [
    { id: 'hi-2-1', lesson_id: 'hi-2', type: 'multiple_choice', question: 'How do you say "Water" in Hindi?', correct_answer: 'Paani', options: ['Paani', 'Roti', 'Doodh', 'Chawal'], order_index: 1 },
    { id: 'hi-2-2', lesson_id: 'hi-2', type: 'multiple_choice', question: 'How do you say "Bread" in Hindi?', correct_answer: 'Roti', options: ['Paani', 'Roti', 'Doodh', 'Chawal'], order_index: 2 },
    { id: 'hi-2-3', lesson_id: 'hi-2', type: 'translation', question: 'Translate to Hindi: Milk', correct_answer: 'Doodh', order_index: 3 },
    { id: 'hi-2-4', lesson_id: 'hi-2', type: 'translation', question: 'Translate to Hindi: Rice', correct_answer: 'Chawal', order_index: 4 },
    { id: 'hi-2-5', lesson_id: 'hi-2', type: 'multiple_choice', question: 'How do you say "Fruit" in Hindi?', correct_answer: 'Phal', options: ['Phal', 'Sabzi', 'Khana', 'Paani'], order_index: 5 },
  ],
  'hi-3': [
    { id: 'hi-3-1', lesson_id: 'hi-3', type: 'multiple_choice', question: 'How do you say "Yellow" in Hindi?', correct_answer: 'Peela', options: ['Laal', 'Neela', 'Peela', 'Hara'], order_index: 1 },
    { id: 'hi-3-2', lesson_id: 'hi-3', type: 'multiple_choice', question: 'How do you say "Red" in Hindi?', correct_answer: 'Laal', options: ['Laal', 'Neela', 'Peela', 'Hara'], order_index: 2 },
    { id: 'hi-3-3', lesson_id: 'hi-3', type: 'translation', question: 'Translate to Hindi: Blue', correct_answer: 'Neela', order_index: 3 },
    { id: 'hi-3-4', lesson_id: 'hi-3', type: 'translation', question: 'Translate to Hindi: Green', correct_answer: 'Hara', order_index: 4 },
    { id: 'hi-3-5', lesson_id: 'hi-3', type: 'multiple_choice', question: 'How do you say "White" in Hindi?', correct_answer: 'Safed', options: ['Safed', 'Kaala', 'Bhura', 'Narangee'], order_index: 5 },
  ],
  'hi-4': [
    { id: 'hi-4-1', lesson_id: 'hi-4', type: 'multiple_choice', question: 'How do you say "One" in Hindi?', correct_answer: 'Ek', options: ['Ek', 'Do', 'Teen', 'Chaar'], order_index: 1 },
    { id: 'hi-4-2', lesson_id: 'hi-4', type: 'multiple_choice', question: 'How do you say "Two" in Hindi?', correct_answer: 'Do', options: ['Ek', 'Do', 'Teen', 'Chaar'], order_index: 2 },
    { id: 'hi-4-3', lesson_id: 'hi-4', type: 'translation', question: 'Translate to Hindi: Three', correct_answer: 'Teen', order_index: 3 },
    { id: 'hi-4-4', lesson_id: 'hi-4', type: 'translation', question: 'Translate to Hindi: Five', correct_answer: 'Paanch', order_index: 4 },
    { id: 'hi-4-5', lesson_id: 'hi-4', type: 'multiple_choice', question: 'How do you say "Ten" in Hindi?', correct_answer: 'Das', options: ['Cheh', 'Saat', 'Aath', 'Das'], order_index: 5 },
  ],
  'hi-5': [
    { id: 'hi-5-1', lesson_id: 'hi-5', type: 'multiple_choice', question: 'How do you say "Sister" in Hindi?', correct_answer: 'Behen', options: ['Maa', 'Pita', 'Bhai', 'Behen'], order_index: 1 },
    { id: 'hi-5-2', lesson_id: 'hi-5', type: 'multiple_choice', question: 'How do you say "Brother" in Hindi?', correct_answer: 'Bhai', options: ['Maa', 'Pita', 'Bhai', 'Behen'], order_index: 2 },
    { id: 'hi-5-3', lesson_id: 'hi-5', type: 'translation', question: 'Translate to Hindi: Father', correct_answer: 'Pita', order_index: 3 },
    { id: 'hi-5-4', lesson_id: 'hi-5', type: 'translation', question: 'Translate to Hindi: Mother', correct_answer: 'Maa', order_index: 4 },
    { id: 'hi-5-5', lesson_id: 'hi-5', type: 'multiple_choice', question: 'How do you say "Friend" in Hindi?', correct_answer: 'Dost', options: ['Dost', 'Dushman', 'Padosi', 'Rishtedar'], order_index: 5 },
  ],

  // --- Arabic ---
  'ar-1': [
    { id: 'ar-1-1', lesson_id: 'ar-1', type: 'multiple_choice', question: 'How do you say "Hello" in Arabic?', correct_answer: 'Marhaba', options: ['Marhaba', 'Shukran', 'Wada\'an', 'Min fadlak'], order_index: 1 },
    { id: 'ar-1-2', lesson_id: 'ar-1', type: 'translation', question: 'Translate to Arabic: Thank you', correct_answer: 'Shukran', order_index: 2 },
    { id: 'ar-1-3', lesson_id: 'ar-1', type: 'multiple_choice', question: 'How do you say "Goodbye" in Arabic?', correct_answer: 'Wada\'an', options: ['Marhaba', 'Shukran', 'Wada\'an', 'Min fadlak'], order_index: 3 },
    { id: 'ar-1-4', lesson_id: 'ar-1', type: 'translation', question: 'Translate to Arabic: Please', correct_answer: 'Min fadlak', order_index: 4 },
    { id: 'ar-1-5', lesson_id: 'ar-1', type: 'multiple_choice', question: 'How do you say "Yes" in Arabic?', correct_answer: 'Na\'am', options: ['Na\'am', 'La', 'Rubbama', 'Hayya'], order_index: 5 },
  ],
  'ar-2': [
    { id: 'ar-2-1', lesson_id: 'ar-2', type: 'multiple_choice', question: 'How do you say "Milk" in Arabic?', correct_answer: 'Halib', options: ['Ma\'', 'Khubz', 'Halib', 'Qahwa'], order_index: 1 },
    { id: 'ar-2-2', lesson_id: 'ar-2', type: 'multiple_choice', question: 'How do you say "Water" in Arabic?', correct_answer: 'Ma\'', options: ['Ma\'', 'Khubz', 'Halib', 'Qahwa'], order_index: 2 },
    { id: 'ar-2-3', lesson_id: 'ar-2', type: 'translation', question: 'Translate to Arabic: Bread', correct_answer: 'Khubz', order_index: 3 },
    { id: 'ar-2-4', lesson_id: 'ar-2', type: 'translation', question: 'Translate to Arabic: Coffee', correct_answer: 'Qahwa', order_index: 4 },
    { id: 'ar-2-5', lesson_id: 'ar-2', type: 'multiple_choice', question: 'How do you say "Food" in Arabic?', correct_answer: 'Ta\'am', options: ['Ta\'am', 'Sharab', 'Fakiha', 'Laham'], order_index: 5 },
  ],
  'ar-3': [
    { id: 'ar-3-1', lesson_id: 'ar-3', type: 'multiple_choice', question: 'How do you say "Black" in Arabic?', correct_answer: 'Aswad', options: ['Abyad', 'Aswad', 'Ahmar', 'Azraq'], order_index: 1 },
    { id: 'ar-3-2', lesson_id: 'ar-3', type: 'multiple_choice', question: 'How do you say "White" in Arabic?', correct_answer: 'Abyad', options: ['Abyad', 'Aswad', 'Ahmar', 'Azraq'], order_index: 2 },
    { id: 'ar-3-3', lesson_id: 'ar-3', type: 'translation', question: 'Translate to Arabic: Red', correct_answer: 'Ahmar', order_index: 3 },
    { id: 'ar-3-4', lesson_id: 'ar-3', type: 'translation', question: 'Translate to Arabic: Blue', correct_answer: 'Azraq', order_index: 4 },
    { id: 'ar-3-5', lesson_id: 'ar-3', type: 'multiple_choice', question: 'How do you say "Green" in Arabic?', correct_answer: 'Akhdar', options: ['Akhdar', 'Asfar', 'Burtuqali', 'Bunni'], order_index: 5 },
  ],
  'ar-4': [
    { id: 'ar-4-1', lesson_id: 'ar-4', type: 'multiple_choice', question: 'How do you say "One" in Arabic?', correct_answer: 'Wahid', options: ['Wahid', 'Ithnan', 'Thalatha', 'Arba\'a'], order_index: 1 },
    { id: 'ar-4-2', lesson_id: 'ar-4', type: 'multiple_choice', question: 'How do you say "Two" in Arabic?', correct_answer: 'Ithnan', options: ['Wahid', 'Ithnan', 'Thalatha', 'Arba\'a'], order_index: 2 },
    { id: 'ar-4-3', lesson_id: 'ar-4', type: 'translation', question: 'Translate to Arabic: Three', correct_answer: 'Thalatha', order_index: 3 },
    { id: 'ar-4-4', lesson_id: 'ar-4', type: 'translation', question: 'Translate to Arabic: Five', correct_answer: 'Khamsa', order_index: 4 },
    { id: 'ar-4-5', lesson_id: 'ar-4', type: 'multiple_choice', question: 'How do you say "Ten" in Arabic?', correct_answer: 'Ashara', options: ['Sitta', 'Sab\'a', 'Thamaniya', 'Ashara'], order_index: 5 },
  ],
  'ar-5': [
    { id: 'ar-5-1', lesson_id: 'ar-5', type: 'multiple_choice', question: 'How do you say "Son" in Arabic?', correct_answer: 'Ibn', options: ['Abu', 'Um', 'Ibn', 'Bint'], order_index: 1 },
    { id: 'ar-5-2', lesson_id: 'ar-5', type: 'multiple_choice', question: 'How do you say "Daughter" in Arabic?', correct_answer: 'Bint', options: ['Abu', 'Um', 'Ibn', 'Bint'], order_index: 2 },
    { id: 'ar-5-3', lesson_id: 'ar-5', type: 'translation', question: 'Translate to Arabic: Father', correct_answer: 'Abu', order_index: 3 },
    { id: 'ar-5-4', lesson_id: 'ar-5', type: 'translation', question: 'Translate to Arabic: Mother', correct_answer: 'Um', order_index: 4 },
    { id: 'ar-5-5', lesson_id: 'ar-5', type: 'multiple_choice', question: 'How do you say "Brother" in Arabic?', correct_answer: 'Akh', options: ['Akh', 'Ukht', 'Jadd', 'Jadda'], order_index: 5 },
  ],

  // --- Korean ---
  'ko-1': [
    { id: 'ko-1-1', lesson_id: 'ko-1', type: 'multiple_choice', question: 'How do you say "Hello" in Korean?', correct_answer: 'Annyeong', options: ['Annyeong', 'Gamsahamnida', 'Jal ga', 'Butakamnida'], order_index: 1 },
    { id: 'ko-1-2', lesson_id: 'ko-1', type: 'translation', question: 'Translate to Korean: Goodbye', correct_answer: 'Jal ga', order_index: 2 },
    { id: 'ko-1-3', lesson_id: 'ko-1', type: 'multiple_choice', question: 'How do you say "Thank you" in Korean?', correct_answer: 'Gamsahamnida', options: ['Annyeong', 'Gamsahamnida', 'Jal ga', 'Butakamnida'], order_index: 3 },
    { id: 'ko-1-4', lesson_id: 'ko-1', type: 'translation', question: 'Translate to Korean: Please', correct_answer: 'Butakamnida', order_index: 4 },
    { id: 'ko-1-5', lesson_id: 'ko-1', type: 'multiple_choice', question: 'How do you say "Yes" in Korean?', correct_answer: 'Ne', options: ['Ne', 'Aniyo', 'Amado', 'Gwaenchanayo'], order_index: 5 },
  ],
  'ko-2': [
    { id: 'ko-2-1', lesson_id: 'ko-2', type: 'multiple_choice', question: 'How do you say "Coffee" in Korean?', correct_answer: 'Keopi', options: ['Mul', 'Ppan', 'Keopi', 'Uyu'], order_index: 1 },
    { id: 'ko-2-2', lesson_id: 'ko-2', type: 'multiple_choice', question: 'How do you say "Water" in Korean?', correct_answer: 'Mul', options: ['Mul', 'Ppan', 'Keopi', 'Uyu'], order_index: 2 },
    { id: 'ko-2-3', lesson_id: 'ko-2', type: 'translation', question: 'Translate to Korean: Bread', correct_answer: 'Ppan', order_index: 3 },
    { id: 'ko-2-4', lesson_id: 'ko-2', type: 'translation', question: 'Translate to Korean: Milk', correct_answer: 'Uyu', order_index: 4 },
    { id: 'ko-2-5', lesson_id: 'ko-2', type: 'multiple_choice', question: 'How do you say "Rice" in Korean?', correct_answer: 'Bap', options: ['Bap', 'Gogi', 'Chae-so', 'Gwa-il'], order_index: 5 },
  ],
  'ko-3': [
    { id: 'ko-3-1', lesson_id: 'ko-3', type: 'multiple_choice', question: 'How do you say "White" in Korean?', correct_answer: 'Hayan', options: ['Kkamanyan', 'Hayan', 'Ppalgan', 'Paran'], order_index: 1 },
    { id: 'ko-3-2', lesson_id: 'ko-3', type: 'multiple_choice', question: 'How do you say "Black" in Korean?', correct_answer: 'Kkamanyan', options: ['Kkamanyan', 'Hayan', 'Ppalgan', 'Paran'], order_index: 2 },
    { id: 'ko-3-3', lesson_id: 'ko-3', type: 'translation', question: 'Translate to Korean: Red', correct_answer: 'Ppalgan', order_index: 3 },
    { id: 'ko-3-4', lesson_id: 'ko-3', type: 'translation', question: 'Translate to Korean: Blue', correct_answer: 'Paran', order_index: 4 },
    { id: 'ko-3-5', lesson_id: 'ko-3', type: 'multiple_choice', question: 'How do you say "Green" in Korean?', correct_answer: 'Chorok', options: ['Chorok', 'Noran', 'Borasaek', 'Juhwang'], order_index: 5 },
  ],
  'ko-4': [
    { id: 'ko-4-1', lesson_id: 'ko-4', type: 'multiple_choice', question: 'How do you say "One" in Korean?', correct_answer: 'Hana', options: ['Hana', 'Dul', 'Set', 'Net'], order_index: 1 },
    { id: 'ko-4-2', lesson_id: 'ko-4', type: 'multiple_choice', question: 'How do you say "Two" in Korean?', correct_answer: 'Dul', options: ['Hana', 'Dul', 'Set', 'Net'], order_index: 2 },
    { id: 'ko-4-3', lesson_id: 'ko-4', type: 'translation', question: 'Translate to Korean: Three', correct_answer: 'Set', order_index: 3 },
    { id: 'ko-4-4', lesson_id: 'ko-4', type: 'translation', question: 'Translate to Korean: Five', correct_answer: 'Daseot', order_index: 4 },
    { id: 'ko-4-5', lesson_id: 'ko-4', type: 'multiple_choice', question: 'How do you say "Ten" in Korean?', correct_answer: 'Yeol', options: ['Yeoseot', 'Ilgop', 'Yeodeol', 'Yeol'], order_index: 5 },
  ],
  'ko-5': [
    { id: 'ko-5-1', lesson_id: 'ko-5', type: 'multiple_choice', question: 'How do you say "Grandmother" in Korean?', correct_answer: 'Halmeoni', options: ['Beon', 'Omma', 'Appa', 'Halmeoni'], order_index: 1 },
    { id: 'ko-5-2', lesson_id: 'ko-5', type: 'multiple_choice', question: 'How do you say "Mother" in Korean?', correct_answer: 'Omma', options: ['Beon', 'Omma', 'Appa', 'Halmeoni'], order_index: 2 },
    { id: 'ko-5-3', lesson_id: 'ko-5', type: 'translation', question: 'Translate to Korean: Father', correct_answer: 'Appa', order_index: 3 },
    { id: 'ko-5-4', lesson_id: 'ko-5', type: 'translation', question: 'Translate to Korean: Brother', correct_answer: 'Namdongsaeng', order_index: 4 },
    { id: 'ko-5-5', lesson_id: 'ko-5', type: 'multiple_choice', question: 'How do you say "Grandfather" in Korean?', correct_answer: 'Harabeoji', options: ['Harabeoji', 'Halmeoni', 'Samchon', 'Imo'], order_index: 5 },
  ],

  // --- Portuguese ---
  'pt-1': [
    { id: 'pt-1-1', lesson_id: 'pt-1', type: 'multiple_choice', question: 'How do you say "Hello" in Portuguese?', correct_answer: 'Olá', options: ['Olá', 'Adeus', 'Obrigado', 'Por favor'], order_index: 1 },
    { id: 'pt-1-2', lesson_id: 'pt-1', type: 'translation', question: 'Translate to Portuguese: Goodbye', correct_answer: 'Adeus', order_index: 2 },
    { id: 'pt-1-3', lesson_id: 'pt-1', type: 'multiple_choice', question: 'How do you say "Thank you" in Portuguese?', correct_answer: 'Obrigado', options: ['Olá', 'Adeus', 'Obrigado', 'Por favor'], order_index: 3 },
    { id: 'pt-1-4', lesson_id: 'pt-1', type: 'translation', question: 'Translate to Portuguese: Please', correct_answer: 'Por favor', order_index: 4 },
    { id: 'pt-1-5', lesson_id: 'pt-1', type: 'multiple_choice', question: 'How do you say "Yes" in Portuguese?', correct_answer: 'Sim', options: ['Sim', 'Não', 'Talvez', 'Tchau'], order_index: 5 },
  ],
  'pt-2': [
    { id: 'pt-2-1', lesson_id: 'pt-2', type: 'multiple_choice', question: 'How do you say "Cheese" in Portuguese?', correct_answer: 'Queijo', options: ['Queijo', 'Pão', 'Água', 'Café'], order_index: 1 },
    { id: 'pt-2-2', lesson_id: 'pt-2', type: 'multiple_choice', question: 'How do you say "Bread" in Portuguese?', correct_answer: 'Pão', options: ['Queijo', 'Pão', 'Água', 'Café'], order_index: 2 },
    { id: 'pt-2-3', lesson_id: 'pt-2', type: 'translation', question: 'Translate to Portuguese: Water', correct_answer: 'Água', order_index: 3 },
    { id: 'pt-2-4', lesson_id: 'pt-2', type: 'translation', question: 'Translate to Portuguese: Coffee', correct_answer: 'Café', order_index: 4 },
    { id: 'pt-2-5', lesson_id: 'pt-2', type: 'multiple_choice', question: 'How do you say "Milk" in Portuguese?', correct_answer: 'Leite', options: ['Leite', 'Carne', 'Ovo', 'Arroz'], order_index: 5 },
  ],
  'pt-3': [
    { id: 'pt-3-1', lesson_id: 'pt-3', type: 'multiple_choice', question: 'How do you say "Green" in Portuguese?', correct_answer: 'Verde', options: ['Vermelho', 'Azul', 'Verde', 'Amarelo'], order_index: 1 },
    { id: 'pt-3-2', lesson_id: 'pt-3', type: 'multiple_choice', question: 'How do you say "Red" in Portuguese?', correct_answer: 'Vermelho', options: ['Vermelho', 'Azul', 'Verde', 'Amarelo'], order_index: 2 },
    { id: 'pt-3-3', lesson_id: 'pt-3', type: 'translation', question: 'Translate to Portuguese: Blue', correct_answer: 'Azul', order_index: 3 },
    { id: 'pt-3-4', lesson_id: 'pt-3', type: 'translation', question: 'Translate to Portuguese: Yellow', correct_answer: 'Amarelo', order_index: 4 },
    { id: 'pt-3-5', lesson_id: 'pt-3', type: 'multiple_choice', question: 'How do you say "Black" in Portuguese?', correct_answer: 'Preto', options: ['Preto', 'Branco', 'Cinza', 'Roxo'], order_index: 5 },
  ],
  'pt-4': [
    { id: 'pt-4-1', lesson_id: 'pt-4', type: 'multiple_choice', question: 'How do you say "One" in Portuguese?', correct_answer: 'Um', options: ['Um', 'Dois', 'Três', 'Quatro'], order_index: 1 },
    { id: 'pt-4-2', lesson_id: 'pt-4', type: 'multiple_choice', question: 'How do you say "Two" in Portuguese?', correct_answer: 'Dois', options: ['Um', 'Dois', 'Três', 'Quatro'], order_index: 2 },
    { id: 'pt-4-3', lesson_id: 'pt-4', type: 'translation', question: 'Translate to Portuguese: Three', correct_answer: 'Três', order_index: 3 },
    { id: 'pt-4-4', lesson_id: 'pt-4', type: 'translation', question: 'Translate to Portuguese: Five', correct_answer: 'Cinco', order_index: 4 },
    { id: 'pt-4-5', lesson_id: 'pt-4', type: 'multiple_choice', question: 'How do you say "Ten" in Portuguese?', correct_answer: 'Dez', options: ['Seis', 'Sete', 'Oito', 'Dez'], order_index: 5 },
  ],
  'pt-5': [
    { id: 'pt-5-1', lesson_id: 'pt-5', type: 'multiple_choice', question: 'How do you say "Daughter" in Portuguese?', correct_answer: 'Filha', options: ['Pai', 'Mãe', 'Filho', 'Filha'], order_index: 1 },
    { id: 'pt-5-2', lesson_id: 'pt-5', type: 'multiple_choice', question: 'How do you say "Son" in Portuguese?', correct_answer: 'Filho', options: ['Pai', 'Mãe', 'Filho', 'Filha'], order_index: 2 },
    { id: 'pt-5-3', lesson_id: 'pt-5', type: 'translation', question: 'Translate to Portuguese: Father', correct_answer: 'Pai', order_index: 3 },
    { id: 'pt-5-4', lesson_id: 'pt-5', type: 'translation', question: 'Translate to Portuguese: Mother', correct_answer: 'Mãe', order_index: 4 },
    { id: 'pt-5-5', lesson_id: 'pt-5', type: 'multiple_choice', question: 'How do you say "Grandmother" in Portuguese?', correct_answer: 'Avó', options: ['Avô', 'Avó', 'Tio', 'Tia'], order_index: 5 },
  ],

  // --- Russian ---
  'ru-1': [
    { id: 'ru-1-1', lesson_id: 'ru-1', type: 'multiple_choice', question: 'How do you say "Hello" in Russian?', correct_answer: 'Privyet', options: ['Privyet', 'Poka', 'Spasibo', 'Pozhaluysta'], order_index: 1 },
    { id: 'ru-1-2', lesson_id: 'ru-1', type: 'translation', question: 'Translate to Russian: Goodbye', correct_answer: 'Do svidaniya', order_index: 2 },
    { id: 'ru-1-3', lesson_id: 'ru-1', type: 'multiple_choice', question: 'How do you say "Thank you" in Russian?', correct_answer: 'Spasibo', options: ['Privyet', 'Poka', 'Spasibo', 'Pozhaluysta'], order_index: 3 },
    { id: 'ru-1-4', lesson_id: 'ru-1', type: 'translation', question: 'Translate to Russian: Please', correct_answer: 'Pozhaluysta', order_index: 4 },
    { id: 'ru-1-5', lesson_id: 'ru-1', type: 'multiple_choice', question: 'How do you say "Yes" in Russian?', correct_answer: 'Da', options: ['Da', 'Net', 'Navernoe', 'Khorosho'], order_index: 5 },
  ],
  'ru-2': [
    { id: 'ru-2-1', lesson_id: 'ru-2', type: 'multiple_choice', question: 'How do you say "Tea" in Russian?', correct_answer: 'Chay', options: ['Voda', 'Khleb', 'Moloko', 'Chay'], order_index: 1 },
    { id: 'ru-2-2', lesson_id: 'ru-2', type: 'multiple_choice', question: 'How do you say "Water" in Russian?', correct_answer: 'Voda', options: ['Voda', 'Khleb', 'Moloko', 'Chay'], order_index: 2 },
    { id: 'ru-2-3', lesson_id: 'ru-2', type: 'translation', question: 'Translate to Russian: Bread', correct_answer: 'Khleb', order_index: 3 },
    { id: 'ru-2-4', lesson_id: 'ru-2', type: 'translation', question: 'Translate to Russian: Milk', correct_answer: 'Moloko', order_index: 4 },
    { id: 'ru-2-5', lesson_id: 'ru-2', type: 'multiple_choice', question: 'How do you say "Apple" in Russian?', correct_answer: 'Yabloko', options: ['Yabloko', 'Grusha', 'Apelsin', 'Banan'], order_index: 5 },
  ],
  'ru-3': [
    { id: 'ru-3-1', lesson_id: 'ru-3', type: 'multiple_choice', question: 'How do you say "Grey" in Russian?', correct_answer: 'Seryy', options: ['Belyy', 'Chernyy', 'Krasnyy', 'Seryy'], order_index: 1 },
    { id: 'ru-3-2', lesson_id: 'ru-3', type: 'multiple_choice', question: 'How do you say "White" in Russian?', correct_answer: 'Belyy', options: ['Belyy', 'Chernyy', 'Krasnyy', 'Seryy'], order_index: 2 },
    { id: 'ru-3-3', lesson_id: 'ru-3', type: 'translation', question: 'Translate to Russian: Red', correct_answer: 'Krasnyy', order_index: 3 },
    { id: 'ru-3-4', lesson_id: 'ru-3', type: 'translation', question: 'Translate to Russian: Blue', correct_answer: 'Siniy', order_index: 4 },
    { id: 'ru-3-5', lesson_id: 'ru-3', type: 'multiple_choice', question: 'How do you say "Black" in Russian?', correct_answer: 'Chernyy', options: ['Zelenyy', 'Zheltyy', 'Chernyy', 'Fioletovyy'], order_index: 5 },
  ],
  'ru-4': [
    { id: 'ru-4-1', lesson_id: 'ru-4', type: 'multiple_choice', question: 'How do you say "One" in Russian?', correct_answer: 'Odin', options: ['Odin', 'Dva', 'Tri', 'Chetyre'], order_index: 1 },
    { id: 'ru-4-2', lesson_id: 'ru-4', type: 'multiple_choice', question: 'How do you say "Two" in Russian?', correct_answer: 'Dva', options: ['Odin', 'Dva', 'Tri', 'Chetyre'], order_index: 2 },
    { id: 'ru-4-3', lesson_id: 'ru-4', type: 'translation', question: 'Translate to Russian: Three', correct_answer: 'Tri', order_index: 3 },
    { id: 'ru-4-4', lesson_id: 'ru-4', type: 'translation', question: 'Translate to Russian: Five', correct_answer: 'Pyat', order_index: 4 },
    { id: 'ru-4-5', lesson_id: 'ru-4', type: 'multiple_choice', question: 'How do you say "Ten" in Russian?', correct_answer: 'Desyat', options: ['Shest', 'Sem', 'Vosem', 'Desyat'], order_index: 5 },
  ],
  'ru-5': [
    { id: 'ru-5-1', lesson_id: 'ru-5', type: 'multiple_choice', question: 'How do you say "Grandfather" in Russian?', correct_answer: 'Dedushka', options: ['Babushka', 'Papa', 'Mama', 'Dedushka'], order_index: 1 },
    { id: 'ru-5-2', lesson_id: 'ru-5', type: 'multiple_choice', question: 'How do you say "Grandmother" in Russian?', correct_answer: 'Babushka', options: ['Babushka', 'Papa', 'Mama', 'Dedushka'], order_index: 2 },
    { id: 'ru-5-3', lesson_id: 'ru-5', type: 'translation', question: 'Translate to Russian: Father', correct_answer: 'Papa', order_index: 3 },
    { id: 'ru-5-4', lesson_id: 'ru-5', type: 'translation', question: 'Translate to Russian: Mother', correct_answer: 'Mama', order_index: 4 },
    { id: 'ru-5-5', lesson_id: 'ru-5', type: 'multiple_choice', question: 'How do you say "Sister" in Russian?', correct_answer: 'Sestra', options: ['Sestra', 'Brat', 'Dyadya', 'Tyotya'], order_index: 5 },
  ],

  // --- Urdu ---
  'ur-1': [
    { id: 'ur-1-1', lesson_id: 'ur-1', type: 'multiple_choice', question: 'How do you say "Hello" in Urdu?', correct_answer: 'Salam', options: ['Salam', 'Khuda Hafiz', 'Shukriya', 'Meherbani'], order_index: 1 },
    { id: 'ur-1-2', lesson_id: 'ur-1', type: 'translation', question: 'Translate to Urdu: Goodbye', correct_answer: 'Khuda Hafiz', order_index: 2 },
    { id: 'ur-1-3', lesson_id: 'ur-1', type: 'multiple_choice', question: 'How do you say "Thank you" in Urdu?', correct_answer: 'Shukriya', options: ['Salam', 'Khuda Hafiz', 'Shukriya', 'Meherbani'], order_index: 3 },
    { id: 'ur-1-4', lesson_id: 'ur-1', type: 'translation', question: 'Translate to Urdu: Please', correct_answer: 'Meherbani', order_index: 4 },
    { id: 'ur-1-5', lesson_id: 'ur-1', type: 'multiple_choice', question: 'How do you say "Yes" in Urdu?', correct_answer: 'Haan', options: ['Haan', 'Nahi', 'Shayad', 'Theek hai'], order_index: 5 },
  ],
  'ur-2': [
    { id: 'ur-2-1', lesson_id: 'ur-2', type: 'multiple_choice', question: 'How do you say "Bread" in Urdu?', correct_answer: 'Roti', options: ['Paani', 'Roti', 'Doodh', 'Chawal'], order_index: 1 },
    { id: 'ur-2-2', lesson_id: 'ur-2', type: 'multiple_choice', question: 'How do you say "Water" in Urdu?', correct_answer: 'Paani', options: ['Paani', 'Roti', 'Doodh', 'Chawal'], order_index: 2 },
    { id: 'ur-2-3', lesson_id: 'ur-2', type: 'translation', question: 'Translate to Urdu: Milk', correct_answer: 'Doodh', order_index: 3 },
    { id: 'ur-2-4', lesson_id: 'ur-2', type: 'translation', question: 'Translate to Urdu: Rice', correct_answer: 'Chawal', order_index: 4 },
    { id: 'ur-2-5', lesson_id: 'ur-2', type: 'multiple_choice', question: 'How do you say "Tea" in Urdu?', correct_answer: 'Chay', options: ['Chay', 'Kawa', 'Sharbat', 'Gosht'], order_index: 5 },
  ],
  'ur-3': [
    { id: 'ur-3-1', lesson_id: 'ur-3', type: 'multiple_choice', question: 'How do you say "Pink" in Urdu?', correct_answer: 'Gulabi', options: ['Surkh', 'Neela', 'Gulabi', 'Sabz'], order_index: 1 },
    { id: 'ur-3-2', lesson_id: 'ur-3', type: 'multiple_choice', question: 'How do you say "Red" in Urdu?', correct_answer: 'Surkh', options: ['Surkh', 'Neela', 'Gulabi', 'Sabz'], order_index: 2 },
    { id: 'ur-3-3', lesson_id: 'ur-3', type: 'translation', question: 'Translate to Urdu: Blue', correct_answer: 'Neela', order_index: 3 },
    { id: 'ur-3-4', lesson_id: 'ur-3', type: 'translation', question: 'Translate to Urdu: Green', correct_answer: 'Sabz', order_index: 4 },
    { id: 'ur-3-5', lesson_id: 'ur-3', type: 'multiple_choice', question: 'How do you say "Yellow" in Urdu?', correct_answer: 'Peela', options: ['Safed', 'Kaala', 'Bhura', 'Peela'], order_index: 5 },
  ],
  'ur-4': [
    { id: 'ur-4-1', lesson_id: 'ur-4', type: 'multiple_choice', question: 'How do you say "One" in Urdu?', correct_answer: 'Ek', options: ['Ek', 'Do', 'Teen', 'Chaar'], order_index: 1 },
    { id: 'ur-4-2', lesson_id: 'ur-4', type: 'multiple_choice', question: 'How do you say "Two" in Urdu?', correct_answer: 'Do', options: ['Ek', 'Do', 'Teen', 'Chaar'], order_index: 2 },
    { id: 'ur-4-3', lesson_id: 'ur-4', type: 'translation', question: 'Translate to Urdu: Three', correct_answer: 'Teen', order_index: 3 },
    { id: 'ur-4-4', lesson_id: 'ur-4', type: 'translation', question: 'Translate to Urdu: Five', correct_answer: 'Paanch', order_index: 4 },
    { id: 'ur-4-5', lesson_id: 'ur-4', type: 'multiple_choice', question: 'How do you say "Ten" in Urdu?', correct_answer: 'Das', options: ['Cheh', 'Saat', 'Aath', 'Das'], order_index: 5 },
  ],
  'ur-5': [
    { id: 'ur-5-1', lesson_id: 'ur-5', type: 'multiple_choice', question: 'How do you say "Uncle" in Urdu?', correct_answer: 'Chacha', options: ['Ami', 'Abu', 'Chacha', 'Khalu'], order_index: 1 },
    { id: 'ur-5-2', lesson_id: 'ur-5', type: 'multiple_choice', question: 'How do you say "Aunt" in Urdu?', correct_answer: 'Chachi', options: ['Ami', 'Abu', 'Chachi', 'Khalu'], order_index: 2 },
    { id: 'ur-5-3', lesson_id: 'ur-5', type: 'translation', question: 'Translate to Urdu: Father', correct_answer: 'Abu', order_index: 3 },
    { id: 'ur-5-4', lesson_id: 'ur-5', type: 'translation', question: 'Translate to Urdu: Mother', correct_answer: 'Ami', order_index: 4 },
    { id: 'ur-5-5', lesson_id: 'ur-5', type: 'multiple_choice', question: 'How do you say "Sister" in Urdu?', correct_answer: 'Behen', options: ['Behen', 'Bhai', 'Beta', 'Beti'], order_index: 5 },
  ],

  // --- Indonesian ---
  'id-1': [
    { id: 'id-1-1', lesson_id: 'id-1', type: 'multiple_choice', question: 'How do you say "Hello" in Indonesian?', correct_answer: 'Halo', options: ['Halo', 'Selamat tinggal', 'Terima kasih', 'Silakan'], order_index: 1 },
    { id: 'id-1-2', lesson_id: 'id-1', type: 'translation', question: 'Translate to Indonesian: Goodbye', correct_answer: 'Selamat tinggal', order_index: 2 },
    { id: 'id-1-3', lesson_id: 'id-1', type: 'multiple_choice', question: 'How do you say "Thank you" in Indonesian?', correct_answer: 'Terima kasih', options: ['Halo', 'Selamat tinggal', 'Terima kasih', 'Silakan'], order_index: 3 },
    { id: 'id-1-4', lesson_id: 'id-1', type: 'translation', question: 'Translate to Indonesian: Please', correct_answer: 'Silakan', order_index: 4 },
    { id: 'id-1-5', lesson_id: 'id-1', type: 'multiple_choice', question: 'How do you say "Yes" in Indonesian?', correct_answer: 'Ya', options: ['Ya', 'Tidak', 'Mungkin', 'Bagus'], order_index: 5 },
  ],
  'id-2': [
    { id: 'id-2-1', lesson_id: 'id-2', type: 'multiple_choice', question: 'How do you say "Chicken" in Indonesian?', correct_answer: 'Ayam', options: ['Nasi', 'Ayam', 'Air', 'Kopi'], order_index: 1 },
    { id: 'id-2-2', lesson_id: 'id-2', type: 'multiple_choice', question: 'How do you say "Rice" in Indonesian?', correct_answer: 'Nasi', options: ['Nasi', 'Ayam', 'Air', 'Kopi'], order_index: 2 },
    { id: 'id-2-3', lesson_id: 'id-2', type: 'translation', question: 'Translate to Indonesian: Water', correct_answer: 'Air', order_index: 3 },
    { id: 'id-2-4', lesson_id: 'id-2', type: 'translation', question: 'Translate to Indonesian: Coffee', correct_answer: 'Kopi', order_index: 4 },
    { id: 'id-2-5', lesson_id: 'id-2', type: 'multiple_choice', question: 'How do you say "Egg" in Indonesian?', correct_answer: 'Telur', options: ['Telur', 'Ikan', 'Daging', 'Susu'], order_index: 5 },
  ],
  'id-3': [
    { id: 'id-3-1', lesson_id: 'id-3', type: 'multiple_choice', question: 'How do you say "Orange" in Indonesian?', correct_answer: 'Oranye', options: ['Merah', 'Biru', 'Oranye', 'Hijau'], order_index: 1 },
    { id: 'id-3-2', lesson_id: 'id-3', type: 'multiple_choice', question: 'How do you say "Red" in Indonesian?', correct_answer: 'Merah', options: ['Merah', 'Biru', 'Oranye', 'Hijau'], order_index: 2 },
    { id: 'id-3-3', lesson_id: 'id-3', type: 'translation', question: 'Translate to Indonesian: Blue', correct_answer: 'Biru', order_index: 3 },
    { id: 'id-3-4', lesson_id: 'id-3', type: 'translation', question: 'Translate to Indonesian: Green', correct_answer: 'Hijau', order_index: 4 },
    { id: 'id-3-5', lesson_id: 'id-3', type: 'multiple_choice', question: 'How do you say "Yellow" in Indonesian?', correct_answer: 'Kuning', options: ['Putih', 'Hitam', 'Kuning', 'Abu-abu'], order_index: 5 },
  ],
  'id-4': [
    { id: 'id-4-1', lesson_id: 'id-4', type: 'multiple_choice', question: 'How do you say "One" in Indonesian?', correct_answer: 'Satu', options: ['Satu', 'Dua', 'Tiga', 'Empat'], order_index: 1 },
    { id: 'id-4-2', lesson_id: 'id-4', type: 'multiple_choice', question: 'How do you say "Two" in Indonesian?', correct_answer: 'Dua', options: ['Satu', 'Dua', 'Tiga', 'Empat'], order_index: 2 },
    { id: 'id-4-3', lesson_id: 'id-4', type: 'translation', question: 'Translate to Indonesian: Three', correct_answer: 'Tiga', order_index: 3 },
    { id: 'id-4-4', lesson_id: 'id-4', type: 'translation', question: 'Translate to Indonesian: Five', correct_answer: 'Lima', order_index: 4 },
    { id: 'id-4-5', lesson_id: 'id-4', type: 'multiple_choice', question: 'How do you say "Ten" in Indonesian?', correct_answer: 'Sepuluh', options: ['Enam', 'Tujuh', 'Delapan', 'Sepuluh'], order_index: 5 },
  ],
  'id-5': [
    { id: 'id-5-1', lesson_id: 'id-5', type: 'multiple_choice', question: 'How do you say "Aunt" in Indonesian?', correct_answer: 'Bibi', options: ['Ayah', 'Ibu', 'Paman', 'Bibi'], order_index: 1 },
    { id: 'id-5-2', lesson_id: 'id-5', type: 'multiple_choice', question: 'How do you say "Uncle" in Indonesian?', correct_answer: 'Paman', options: ['Ayah', 'Ibu', 'Paman', 'Bibi'], order_index: 2 },
    { id: 'id-5-3', lesson_id: 'id-5', type: 'translation', question: 'Translate to Indonesian: Father', correct_answer: 'Ayah', order_index: 3 },
    { id: 'id-5-4', lesson_id: 'id-5', type: 'translation', question: 'Translate to Indonesian: Mother', correct_answer: 'Ibu', order_index: 4 },
    { id: 'id-5-5', lesson_id: 'id-5', type: 'multiple_choice', question: 'How do you say "Brother" in Indonesian?', correct_answer: 'Kakak', options: ['Kakak', 'Adik', 'Sepupu', 'Keponakan'], order_index: 5 },
  ],

  // --- English ---
  'en-1': [
    { id: 'en-1-1', lesson_id: 'en-1', type: 'multiple_choice', question: 'How do you say "Hello" in English?', correct_answer: 'Hello', options: ['Hello', 'Goodbye', 'Thanks', 'Please'], order_index: 1 },
    { id: 'en-1-2', lesson_id: 'en-1', type: 'translation', question: 'Translate to English: Thanks', correct_answer: 'Thanks', order_index: 2 },
    { id: 'en-1-3', lesson_id: 'en-1', type: 'multiple_choice', question: 'How do you say "Goodbye" in English?', correct_answer: 'Goodbye', options: ['Hello', 'Goodbye', 'Thanks', 'Please'], order_index: 3 },
    { id: 'en-1-4', lesson_id: 'en-1', type: 'translation', question: 'Translate to English: Please', correct_answer: 'Please', order_index: 4 },
    { id: 'en-1-5', lesson_id: 'en-1', type: 'multiple_choice', question: 'How do you say "Yes" in English?', correct_answer: 'Yes', options: ['Yes', 'No', 'Maybe', 'Sure'], order_index: 5 },
  ],
  'en-2': [
    { id: 'en-2-1', lesson_id: 'en-2', type: 'multiple_choice', question: 'How do you say "Apple" in English?', correct_answer: 'Apple', options: ['Bread', 'Water', 'Apple', 'Milk'], order_index: 1 },
    { id: 'en-2-2', lesson_id: 'en-2', type: 'multiple_choice', question: 'How do you say "Bread" in English?', correct_answer: 'Bread', options: ['Bread', 'Water', 'Apple', 'Milk'], order_index: 2 },
    { id: 'en-2-3', lesson_id: 'en-2', type: 'translation', question: 'Translate to English: Water', correct_answer: 'Water', order_index: 3 },
    { id: 'en-2-4', lesson_id: 'en-2', type: 'translation', question: 'Translate to English: Milk', correct_answer: 'Milk', order_index: 4 },
    { id: 'en-2-5', lesson_id: 'en-2', type: 'multiple_choice', question: 'How do you say "Banana" in English?', correct_answer: 'Banana', options: ['Apple', 'Banana', 'Orange', 'Grape'], order_index: 5 },
  ],
  'en-3': [
    { id: 'en-3-1', lesson_id: 'en-3', type: 'multiple_choice', question: 'How do you say "Purple" in English?', correct_answer: 'Purple', options: ['Red', 'Blue', 'Green', 'Purple'], order_index: 1 },
    { id: 'en-3-2', lesson_id: 'en-3', type: 'multiple_choice', question: 'How do you say "Red" in English?', correct_answer: 'Red', options: ['Red', 'Blue', 'Green', 'Purple'], order_index: 2 },
    { id: 'en-3-3', lesson_id: 'en-3', type: 'translation', question: 'Translate to English: Blue', correct_answer: 'Blue', order_index: 3 },
    { id: 'en-3-4', lesson_id: 'en-3', type: 'translation', question: 'Translate to English: Green', correct_answer: 'Green', order_index: 4 },
    { id: 'en-3-5', lesson_id: 'en-3', type: 'multiple_choice', question: 'How do you say "Yellow" in English?', correct_answer: 'Yellow', options: ['Black', 'White', 'Yellow', 'Grey'], order_index: 5 },
  ],
  'en-4': [
    { id: 'en-4-1', lesson_id: 'en-4', type: 'multiple_choice', question: 'How do you say "Zero" in English?', correct_answer: 'Zero', options: ['One', 'Zero', 'Five', 'Ten'], order_index: 1 },
    { id: 'en-4-2', lesson_id: 'en-4', type: 'multiple_choice', question: 'How do you say "One" in English?', correct_answer: 'One', options: ['One', 'Zero', 'Five', 'Ten'], order_index: 2 },
    { id: 'en-4-3', lesson_id: 'en-4', type: 'translation', question: 'Translate to English: Five', correct_answer: 'Five', order_index: 3 },
    { id: 'en-4-4', lesson_id: 'en-4', type: 'translation', question: 'Translate to English: Ten', correct_answer: 'Ten', order_index: 4 },
    { id: 'en-4-5', lesson_id: 'en-4', type: 'multiple_choice', question: 'How do you say "Seven" in English?', correct_answer: 'Seven', options: ['Six', 'Seven', 'Eight', 'Nine'], order_index: 5 },
  ],
  'en-5': [
    { id: 'en-5-1', lesson_id: 'en-5', type: 'multiple_choice', question: 'How do you say "Cousin" in English?', correct_answer: 'Cousin', options: ['Mother', 'Father', 'Brother', 'Cousin'], order_index: 1 },
    { id: 'en-5-2', lesson_id: 'en-5', type: 'multiple_choice', question: 'How do you say "Mother" in English?', correct_answer: 'Mother', options: ['Mother', 'Father', 'Brother', 'Cousin'], order_index: 2 },
    { id: 'en-5-3', lesson_id: 'en-5', type: 'translation', question: 'Translate to English: Father', correct_answer: 'Father', order_index: 3 },
    { id: 'en-5-4', lesson_id: 'en-5', type: 'translation', question: 'Translate to English: Brother', correct_answer: 'Brother', order_index: 4 },
    { id: 'en-5-5', lesson_id: 'en-5', type: 'multiple_choice', question: 'How do you say "Sister" in English?', correct_answer: 'Sister', options: ['Sister', 'Aunt', 'Uncle', 'Niece'], order_index: 5 },
  ],
};

export interface LessonProgress {
  lesson_id: string;
  completed: boolean;
  correct_count: number;
  total_attempts: number;
  xp_earned: number;
}

export interface ExerciseProgress {
  exercise_id: string;
  completed: boolean;
}

export interface AppState {
  user: UserProfile | null;
  lessonProgress: { [key: string]: LessonProgress };
  exerciseProgress: { [key: string]: ExerciseProgress };
}
