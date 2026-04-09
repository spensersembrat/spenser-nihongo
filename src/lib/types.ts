export type DayType = "new-pattern" | "vocab-expansion" | "pattern-combo" | "review";

export type PatternPart = {
  text: string;
  role: "particle" | "slot" | "fixed" | "verb";
  explanation: string;
};

export type VocabItem = {
  japanese: string;
  romaji: string;
  english: string;
  mnemonic?: string;
  fitsPattern?: number[];
};

export type Example = {
  japanese: string;
  romaji: string;
  english: string;
};

export type PatternComboExample = {
  patternsUsed: number[];
  japanese: string;
  romaji: string;
  english: string;
};

export type DialogueLine = {
  speaker: string;
  japanese: string;
  romaji: string;
  english: string;
};

export type ListeningRec = {
  source: string;
  title: string;
  url?: string;
  listenFor: string;
};

export type LanguageInsight = {
  title: string;
  content: string;
};

export type Lesson = {
  day: number;
  dayType: DayType;
  title: string;
  phase: number;
  phaseTitle: string;
  objectives: string[];
  pattern?: {
    number: number;
    japanese: string;
    english: string;
    breakdown: PatternPart[];
  };
  usesPatterns?: number[];
  vocabulary: VocabItem[];
  examples: Example[];
  patternCombo?: PatternComboExample[];
  dialogue?: DialogueLine[];
  practicePrompts: string[];
  languageInsight: LanguageInsight;
  tutorNote: string;
  quickReference: string;
  listeningRec: ListeningRec;
};

export type MasterPattern = {
  number: number;
  japanese: string;
  english: string;
  phase: number;
  introducedOnDay: number;
};

export type Checkpoint = {
  day: number;
  title: string;
  description: string;
  patternsLearned: number;
  estimatedVocab: number;
  estimatedSentences: string;
  nextPreview: string;
};

export type StreakData = {
  current: number;
  longest: number;
  lastCompletedAt: string;
};

export type ProgressData = Record<number, boolean>;
export type NotesData = Record<number, string>;
