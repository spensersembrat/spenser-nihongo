"use client";

import type { VocabItem } from "@/lib/types";

export default function VocabDrops({
  vocabulary,
}: {
  vocabulary: VocabItem[];
}) {
  return (
    <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 overflow-hidden">
      <div className="px-5 py-3 border-b border-stone-100 dark:border-stone-800">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          Vocabulary
        </h3>
      </div>
      <div className="divide-y divide-stone-100 dark:divide-stone-800">
        {vocabulary.map((item, i) => (
          <div key={i} className="px-5 py-3 grid grid-cols-[1fr_auto_1fr] gap-4 items-baseline sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.5fr)]">
            <div>
              <span className="jp text-lg">{item.japanese}</span>
              <span className="block text-sm italic text-stone-400 dark:text-stone-500">
                {item.romaji}
              </span>
            </div>
            <div className="text-sm text-stone-700 dark:text-stone-300">
              {item.english}
            </div>
            <div className="flex flex-col items-end gap-1 sm:items-start">
              {item.mnemonic && (
                <span className="text-xs bg-stone-50 dark:bg-stone-800 text-stone-500 dark:text-stone-400 rounded px-2 py-1 italic">
                  {item.mnemonic}
                </span>
              )}
              {item.fitsPattern && item.fitsPattern.length > 0 && (
                <span className="flex gap-1">
                  {item.fitsPattern.map((n) => (
                    <span
                      key={n}
                      className="text-[10px] px-1.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
                    >
                      → #{n}
                    </span>
                  ))}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
