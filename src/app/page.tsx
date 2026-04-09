"use client";

import { useMemo, useState, useEffect } from "react";
import { allLessons, phases } from "@/data/lessons";
import { checkpoints } from "@/data/checkpoints";
import { masterPatterns } from "@/data/patterns";
import { useProgress } from "@/hooks/useProgress";
import ProgressBar from "@/components/ProgressBar";
import StreakCounter from "@/components/StreakCounter";
import DayCard from "@/components/DayCard";
import PhaseHeader from "@/components/PhaseHeader";
import KanaDrawer from "@/components/KanaDrawer";
import PatternIndex from "@/components/PatternIndex";
import MotivationModal from "@/components/MotivationModal";
import CheckpointModal from "@/components/CheckpointModal";
import ThemeToggle from "@/components/ThemeToggle";
import DataBackup from "@/components/DataBackup";
import VocabDictionary from "@/components/VocabDictionary";
import Link from "next/link";

export default function Dashboard() {
  const { progress, streak, loaded, completedCount } = useProgress();
  const [pendingCheckpoint, setPendingCheckpoint] = useState<number | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  const patternsLearned = useMemo(() => {
    return masterPatterns.filter((p) => progress[p.introducedOnDay]).length;
  }, [progress]);

  const estimatedVocab = useMemo(() => {
    return Math.round(completedCount * 4.1);
  }, [completedCount]);

  useEffect(() => {
    if (!loaded) return;
    const seen: number[] = (() => {
      try {
        const raw = localStorage.getItem("nihonjo-checkpoints-seen");
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    })();

    const reachedUnseen = checkpoints.find(
      (cp) => progress[cp.day] && !seen.includes(cp.day)
    );
    if (reachedUnseen) {
      setPendingCheckpoint(reachedUnseen.day);
    }
  }, [loaded, progress]);

  const dismissCheckpoint = () => {
    if (pendingCheckpoint !== null) {
      try {
        const raw = localStorage.getItem("nihonjo-checkpoints-seen");
        const seen: number[] = raw ? JSON.parse(raw) : [];
        seen.push(pendingCheckpoint);
        localStorage.setItem("nihonjo-checkpoints-seen", JSON.stringify(seen));
      } catch { /* ignore */ }
    }
    setPendingCheckpoint(null);
  };

  const activeCheckpoint = pendingCheckpoint
    ? checkpoints.find((c) => c.day === pendingCheckpoint)
    : null;

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-stone-400">Loading...</div>
      </div>
    );
  }

  const lessonsByPhase = phases.map((phase) => ({
    ...phase,
    lessons: allLessons.filter((l) => l.phase === phase.number),
  }));

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="jp">日本語</span>{" "}
                <span className="text-stone-400 font-normal">
                  90-Day Japanese
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <StreakCounter streak={streak} />
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <ProgressBar completedCount={completedCount} />
          </div>
          <div className="mt-3 flex justify-end">
            <DataBackup />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {completedCount >= 90 && (
          <Link
            href="/final-check"
            className="block mb-8 p-6 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 text-white text-center hover:opacity-90 transition-opacity"
          >
            <p className="text-2xl font-bold mb-1">Course Complete!</p>
            <p className="opacity-90">Take the Final Check to see how far you&apos;ve come →</p>
          </Link>
        )}

        {lessonsByPhase.map((phase) => (
          <section key={phase.number} className="mb-10">
            <PhaseHeader
              number={phase.number}
              title={phase.title}
              days={phase.days}
              color={phase.color}
            />
            {phase.lessons.length === 0 ? (
              <p className="text-sm text-stone-400 dark:text-stone-500 italic ml-6">
                Content coming soon...
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {phase.lessons.map((lesson) => (
                  <DayCard
                    key={lesson.day}
                    lesson={lesson}
                    completed={!!progress[lesson.day]}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </main>

      <KanaDrawer />
      <PatternIndex progress={progress} />
      <VocabDictionary progress={progress} />
      <MotivationModal
        completedCount={completedCount}
        patternsLearned={patternsLearned}
        estimatedVocab={estimatedVocab}
        streak={streak}
      />

      {activeCheckpoint && (
        <CheckpointModal
          checkpoint={activeCheckpoint}
          onClose={dismissCheckpoint}
        />
      )}

      <footer className="border-t border-stone-200 dark:border-stone-800 mt-16 pt-6 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex justify-center">
          <button
            onClick={() => setShowAbout(true)}
            className="text-xs text-stone-400 dark:text-stone-600 hover:text-stone-500 dark:hover:text-stone-500 transition-colors cursor-pointer"
          >
            Built by Spenser Sembrat · April 2026
          </button>
        </div>
      </footer>

      {showAbout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40"
          onClick={() => setShowAbout(false)}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              I built this for myself because I learn through pattern recognition — not phrasebooks. The idea: learn reusable sentence structures first, then plug vocabulary into them. One pattern, infinite sentences.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              Each day is 30–60 minutes of writing by hand, building muscle memory through repetition and mnemonics. This isn&apos;t meant to replace immersion — it&apos;s the structural foundation that makes immersion click faster.
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-stone-400 dark:text-stone-600">
                Spenser Sembrat · April 2026
              </span>
              <button
                onClick={() => setShowAbout(false)}
                className="text-xs text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
