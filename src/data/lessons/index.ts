import { Lesson } from "@/lib/types";
import { phase1Lessons } from "./phase1";
import { phase2Lessons } from "./phase2";
import { phase3Lessons } from "./phase3";
import { phase4Lessons } from "./phase4";
import { phase5Lessons } from "./phase5";
import { phase6Lessons } from "./phase6";
import { phase7Lessons } from "./phase7";

export const allLessons: Lesson[] = [
  ...phase1Lessons,
  ...phase2Lessons,
  ...phase3Lessons,
  ...phase4Lessons,
  ...phase5Lessons,
  ...phase6Lessons,
  ...phase7Lessons,
];

export function getLessonByDay(day: number): Lesson | undefined {
  return allLessons.find((l) => l.day === day);
}

export const phases = [
  { number: 1, title: "Foundation Patterns + Hiragana", days: "1–10", color: "rose" },
  { number: 2, title: "Object & Action Patterns + Katakana", days: "11–20", color: "amber" },
  { number: 3, title: "Time & Tense Patterns", days: "21–35", color: "emerald" },
  { number: 4, title: "Description & Opinion Patterns", days: "36–50", color: "sky" },
  { number: 5, title: "Interaction Patterns (Te-form)", days: "51–65", color: "violet" },
  { number: 6, title: "Complex Idea Patterns", days: "66–80", color: "orange" },
  { number: 7, title: "Pattern Mastery", days: "81–90", color: "pink" },
];
