"use client";

import type { Example } from "@/lib/types";

export default function ExampleSentences({
  examples,
}: {
  examples: Example[];
}) {
  return (
    <div className="space-y-3">
      {examples.map((ex, i) => (
        <div
          key={i}
          className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 px-5 py-4 space-y-1"
        >
          <p className="jp text-lg">{ex.japanese}</p>
          <p className="text-sm italic text-stone-400 dark:text-stone-500">
            {ex.romaji}
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-300">
            {ex.english}
          </p>
        </div>
      ))}
    </div>
  );
}
