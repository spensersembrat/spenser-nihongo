"use client";

import type { PatternPart } from "@/lib/types";

const roleStyles: Record<PatternPart["role"], string> = {
  particle: "text-blue-600 dark:text-blue-400 font-semibold",
  slot: "border border-dashed border-stone-400 dark:border-stone-500 text-stone-600 dark:text-stone-300 px-2 py-0.5 rounded",
  fixed: "text-stone-800 dark:text-stone-200",
  verb: "text-emerald-600 dark:text-emerald-400 font-semibold",
};

export default function PatternMachine({
  pattern,
}: {
  pattern: {
    number: number;
    japanese: string;
    romaji: string;
    english: string;
    breakdown: PatternPart[];
  };
}) {
  return (
    <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-6 space-y-4">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-800 dark:bg-stone-100 text-white dark:text-stone-900 text-lg font-bold">
          {pattern.number}
        </span>
        <div className="space-y-1">
          <p className="jp text-2xl leading-relaxed">{pattern.japanese}</p>
          <p className="text-sm italic text-stone-400 dark:text-stone-500">
            {pattern.romaji}
          </p>
          <p className="text-stone-500 dark:text-stone-400 text-sm">
            {pattern.english}
          </p>
        </div>
      </div>

      <div className="border-t border-stone-100 dark:border-stone-800 pt-4">
        <p className="text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
          Breakdown
        </p>
        <div className="flex flex-wrap items-center gap-2 text-lg">
          {pattern.breakdown.map((part, i) => (
            <span key={i} className={roleStyles[part.role]} title={part.explanation}>
              <span className="jp">{part.text}</span>
              {part.romaji && (
                <span className="block text-xs italic text-stone-400 dark:text-stone-500 font-normal text-center">
                  {part.romaji}
                </span>
              )}
            </span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
          {pattern.breakdown.map((part, i) => (
            <span key={i}>
              <span className="jp">{part.text}</span>
              {part.romaji && (
                <span className="italic"> ({part.romaji})</span>
              )} — {part.explanation}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
