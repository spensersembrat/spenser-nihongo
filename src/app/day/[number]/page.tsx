"use client";

import { use, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getLessonByDay, allLessons } from "@/data/lessons";
import { checkpoints } from "@/data/checkpoints";
import { useProgress } from "@/hooks/useProgress";
import { useNotes } from "@/hooks/useNotes";
import PatternMachine from "@/components/PatternMachine";
import VocabDrops from "@/components/VocabDrops";
import ExampleSentences from "@/components/ExampleSentences";
import PatternCombo from "@/components/PatternCombo";
import DialogueBox from "@/components/DialogueBox";
import PracticePrompts from "@/components/PracticePrompts";
import LanguageInsight from "@/components/LanguageInsight";
import TutorNote from "@/components/TutorNote";
import QuickReference from "@/components/QuickReference";
import ListeningRec from "@/components/ListeningRec";
import NotesEditor from "@/components/NotesEditor";
import CompletionButton from "@/components/CompletionButton";
import CheckpointModal from "@/components/CheckpointModal";
import KanaDrawer from "@/components/KanaDrawer";
import VocabDictionary from "@/components/VocabDictionary";
import QuizletButton from "@/components/QuizletButton";
import ThemeToggle from "@/components/ThemeToggle";
import StreakCounter from "@/components/StreakCounter";

const dayTypeLabels: Record<string, string> = {
  "new-pattern": "New Pattern",
  "vocab-expansion": "Vocab Expansion",
  "pattern-combo": "Pattern Combo",
  review: "Review",
};

export default function LessonPage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = use(params);
  const dayNum = parseInt(number, 10);
  const lesson = getLessonByDay(dayNum);
  const { progress, streak, loaded, completeDay, uncompleteDay, isDayComplete } =
    useProgress();
  const { getNote, setNote, loaded: notesLoaded } = useNotes();

  const [showCheckpoint, setShowCheckpoint] = useState(false);

  const checkpoint = checkpoints.find((c) => c.day === dayNum);
  const completed = isDayComplete(dayNum);

  const handleToggleComplete = useCallback(() => {
    if (completed) {
      uncompleteDay(dayNum);
    } else {
      completeDay(dayNum);
      if (checkpoint) {
        setShowCheckpoint(true);
      }
    }
  }, [completed, dayNum, completeDay, uncompleteDay, checkpoint]);

  const hasNewKana = !!lesson?.objectives.some((obj) =>
    /learn.*hiragana|vowel sounds|learn.*katakana|learn.*dakuten|learn.*handakuten|combo.?sounds/i.test(obj)
  );

  const prevDay = allLessons.find((l) => l.day === dayNum - 1);
  const nextDay = allLessons.find((l) => l.day === dayNum + 1);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4 jp">😅</p>
          <h1 className="text-2xl font-bold mb-2">Day {dayNum}</h1>
          <p className="text-stone-500 dark:text-stone-400 mb-6">
            This lesson isn&apos;t available yet.
          </p>
          <Link
            href="/"
            className="text-sm font-medium underline underline-offset-4 hover:text-stone-600"
          >
            ← Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (!loaded || !notesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-stone-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <StreakCounter streak={streak} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
              Day {lesson.day}
            </span>
            <span className="text-xs text-stone-400">
              Phase {lesson.phase}: {lesson.phaseTitle}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {lesson.title}
          </h1>
          <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-stone-200/60 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
            {dayTypeLabels[lesson.dayType]}
          </span>
        </div>

        {lesson.objectives.length > 0 && (
          <div className="mb-8 p-5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
            <h2 className="text-sm font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
              Today you&apos;ll learn
            </h2>
            <ul className="space-y-1.5">
              {lesson.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-stone-400 mt-0.5">•</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.pattern && (
          <section className="mb-10">
            <PatternMachine pattern={lesson.pattern} />
          </section>
        )}

        {lesson.vocabulary.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4">Vocab Drops</h2>
            <VocabDrops vocabulary={lesson.vocabulary} />
          </section>
        )}

        {lesson.examples.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4">Example Sentences</h2>
            <ExampleSentences examples={lesson.examples} />
          </section>
        )}

        {lesson.patternCombo && lesson.patternCombo.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4">Pattern Combo</h2>
            <PatternCombo combos={lesson.patternCombo} />
          </section>
        )}

        {lesson.dialogue && lesson.dialogue.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4">Dialogue</h2>
            <DialogueBox dialogue={lesson.dialogue} />
          </section>
        )}

        {lesson.practicePrompts.length > 0 && (
          <section className="mb-10">
            <PracticePrompts prompts={lesson.practicePrompts} />
          </section>
        )}

        <section className="mb-10">
          <LanguageInsight insight={lesson.languageInsight} />
        </section>

        <section className="mb-10">
          <TutorNote note={lesson.tutorNote} />
        </section>

        <section className="mb-10">
          <QuickReference content={lesson.quickReference} />
        </section>

        <section className="mb-10">
          <ListeningRec rec={lesson.listeningRec} />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold mb-3">Your Notes</h2>
          <NotesEditor
            day={dayNum}
            value={getNote(dayNum)}
            onChange={setNote}
          />
        </section>

        <section className="mb-10">
          <CompletionButton
            completed={completed}
            onToggle={handleToggleComplete}
            dayNum={dayNum}
            hasVocab={!!lesson.vocabulary && lesson.vocabulary.length > 0}
            hasNewKana={hasNewKana}
          />
        </section>

        <nav className="flex items-center justify-between pt-6 border-t border-stone-200 dark:border-stone-800">
          {prevDay ? (
            <Link
              href={`/day/${prevDay.day}`}
              className="text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Day {prevDay.day}
            </Link>
          ) : (
            <div />
          )}
          {nextDay ? (
            <Link
              href={`/day/${nextDay.day}`}
              className="text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 flex items-center gap-1"
            >
              Day {nextDay.day}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/final-check"
              className="text-sm font-medium text-rose-500 hover:text-rose-600 flex items-center gap-1"
            >
              Final Check →
            </Link>
          )}
        </nav>
      </main>

      <KanaDrawer />
      <VocabDictionary progress={progress} buttonPosition="left-20" />
      <QuizletButton />

      {showCheckpoint && checkpoint && (
        <CheckpointModal
          checkpoint={checkpoint}
          onClose={() => setShowCheckpoint(false)}
        />
      )}
    </div>
  );
}
