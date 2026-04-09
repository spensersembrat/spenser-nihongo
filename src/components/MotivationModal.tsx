"use client";

import { useState, useMemo } from "react";
import { motivations } from "@/data/motivations";
import { StreakData } from "@/lib/types";

export default function MotivationModal({
  completedCount,
  patternsLearned,
  estimatedVocab,
  streak,
}: {
  completedCount: number;
  patternsLearned: number;
  estimatedVocab: number;
  streak: StreakData;
}) {
  const [open, setOpen] = useState(false);

  const message = useMemo(() => {
    const idx = Math.floor(Math.random() * motivations.length);
    const m = motivations[idx];
    if (!m.dynamic) return m.text;
    return m.text
      .replace("{patterns}", String(patternsLearned))
      .replace("{vocab}", String(estimatedVocab))
      .replace("{sentences}", String(patternsLearned * Math.max(estimatedVocab / 5, 1)))
      .replace("{completed}", String(completedCount))
      .replace("{percent}", String(Math.round((completedCount / 90) * 100)))
      .replace("{streak}", String(streak.current))
      .replace("{longestStreak}", String(streak.longest));
  }, [open, completedCount, patternsLearned, estimatedVocab, streak]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform text-xl"
        title="Need motivation?"
      >
        ♥
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/30 dark:bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="relative max-w-md w-full bg-white dark:bg-stone-900 rounded-2xl shadow-xl p-8 text-center">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-4xl mb-4">🌸</div>
            <p className="text-lg leading-relaxed">{message}</p>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">{completedCount}</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  days done
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold">{patternsLearned}</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  patterns
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold">{streak.current}</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  day streak
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-2 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Keep going
            </button>
          </div>
        </div>
      )}
    </>
  );
}
