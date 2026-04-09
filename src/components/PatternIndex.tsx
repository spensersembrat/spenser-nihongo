"use client";

import { useState } from "react";
import { masterPatterns } from "@/data/patterns";
import { ProgressData } from "@/lib/types";

export default function PatternIndex({ progress }: { progress: ProgressData }) {
  const [open, setOpen] = useState(false);

  const learned = masterPatterns.filter(
    (p) => progress[p.introducedOnDay]
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-20 z-40 w-12 h-12 rounded-full bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 flex items-center justify-center shadow-lg hover:scale-105 transition-transform text-sm font-bold"
        title="Pattern Index"
      >
        #
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/30 dark:bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-sm bg-white dark:bg-stone-900 shadow-xl overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 p-4 z-10">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg">
                  Pattern Index{" "}
                  <span className="text-sm font-normal text-stone-500">
                    ({learned.length}/50)
                  </span>
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {masterPatterns.map((p) => {
                const isLearned = progress[p.introducedOnDay];
                return (
                  <div
                    key={p.number}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                      isLearned
                        ? "border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50"
                        : "border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 opacity-40"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        isLearned
                          ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                          : "bg-stone-200 text-stone-500 dark:bg-stone-800 dark:text-stone-500"
                      }`}
                    >
                      {p.number}
                    </span>
                    <div className="min-w-0">
                      <p className="jp text-sm font-medium truncate">
                        {p.japanese}
                      </p>
                      <p className="text-xs text-stone-500 dark:text-stone-400 truncate">
                        {p.english}
                      </p>
                      {isLearned && (
                        <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-0.5">
                          Day {p.introducedOnDay}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
