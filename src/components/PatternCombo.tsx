"use client";

import type { PatternComboExample } from "@/lib/types";

export default function PatternCombo({
  combos,
}: {
  combos: PatternComboExample[];
}) {
  return (
    <div className="space-y-3">
      {combos.map((combo, i) => (
        <div
          key={i}
          className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 px-5 py-4 space-y-2"
        >
          <div className="flex flex-wrap gap-1.5">
            {combo.patternsUsed.map((n) => (
              <span
                key={n}
                className="inline-flex items-center justify-center text-xs font-bold w-6 h-6 rounded-full bg-stone-800 dark:bg-stone-100 text-white dark:text-stone-900"
              >
                {n}
              </span>
            ))}
          </div>
          <p className="jp text-lg">{combo.japanese}</p>
          <p className="text-sm italic text-stone-400 dark:text-stone-500">
            {combo.romaji}
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-300">
            {combo.english}
          </p>
        </div>
      ))}
    </div>
  );
}
