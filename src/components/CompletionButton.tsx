"use client";

import { useState, useEffect } from "react";

export default function CompletionButton({
  completed,
  onToggle,
  dayNum,
  hasVocab,
  hasNewKana,
}: {
  completed: boolean;
  onToggle: () => void;
  dayNum: number;
  hasVocab: boolean;
  hasNewKana: boolean;
}) {
  const storageKey = `nihonjo-checklist-${dayNum}`;

  const [quizletChecked, setQuizletChecked] = useState(false);
  const [kanaChecked, setKanaChecked] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.quizlet) setQuizletChecked(true);
        if (parsed.kana) setKanaChecked(true);
      }
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ quizlet: quizletChecked, kana: kanaChecked })
      );
    } catch {}
  }, [quizletChecked, kanaChecked, storageKey]);

  const canComplete =
    (!hasVocab || quizletChecked) && (!hasNewKana || kanaChecked);

  const showChecklist = !completed && (hasVocab || hasNewKana);

  return (
    <div className="space-y-3">
      {showChecklist && (
        <div className="space-y-2">
          {hasVocab && (
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={quizletChecked}
                onChange={() => setQuizletChecked(!quizletChecked)}
                className="mt-0.5 h-4 w-4 rounded border-stone-300 dark:border-stone-600 accent-emerald-600"
              />
              <span className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors">
                I&apos;ve added all vocab words to my Quizlet set
              </span>
            </label>
          )}
          {hasNewKana && (
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={kanaChecked}
                onChange={() => setKanaChecked(!kanaChecked)}
                className="mt-0.5 h-4 w-4 rounded border-stone-300 dark:border-stone-600 accent-emerald-600"
              />
              <span className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors">
                I&apos;ve studied and practiced today&apos;s new kana characters
              </span>
            </label>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={onToggle}
        disabled={!completed && !canComplete}
        className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
          completed
            ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
            : canComplete
              ? "bg-stone-800 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-200 cursor-pointer"
              : "bg-stone-300 dark:bg-stone-700 text-stone-500 dark:text-stone-500 cursor-not-allowed"
        }`}
      >
        {completed ? "Completed ✓" : "Mark Complete"}
      </button>
    </div>
  );
}
