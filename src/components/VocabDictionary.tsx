"use client";

import { useState, useMemo } from "react";
import { allLessons, phases } from "@/data/lessons";
import { ProgressData } from "@/lib/types";

type DictEntry = {
  japanese: string;
  romaji: string;
  english: string;
  day: number;
  phase: number;
  fitsPattern?: number[];
};

function buildDictionary(): DictEntry[] {
  const seen = new Set<string>();
  const entries: DictEntry[] = [];
  for (const lesson of allLessons) {
    for (const v of lesson.vocabulary) {
      const key = v.japanese;
      if (seen.has(key)) continue;
      seen.add(key);
      entries.push({
        japanese: v.japanese,
        romaji: v.romaji,
        english: v.english,
        day: lesson.day,
        phase: lesson.phase,
        fitsPattern: v.fitsPattern,
      });
    }
  }
  return entries;
}

export default function VocabDictionary({
  progress,
  buttonPosition = "left-36",
}: {
  progress: ProgressData;
  buttonPosition?: string;
}) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "learned" | "upcoming">("all");
  const [search, setSearch] = useState("");
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const dictionary = useMemo(() => buildDictionary(), []);

  const filtered = useMemo(() => {
    let result = dictionary;

    if (selectedPhase !== null) {
      result = result.filter((e) => e.phase === selectedPhase);
    }

    if (filter === "learned") {
      result = result.filter((e) => progress[e.day]);
    } else if (filter === "upcoming") {
      result = result.filter((e) => !progress[e.day]);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (e) =>
          e.japanese.includes(q) ||
          e.romaji.toLowerCase().includes(q) ||
          e.english.toLowerCase().includes(q)
      );
    }

    return result;
  }, [dictionary, progress, filter, search, selectedPhase]);

  const learnedCount = useMemo(
    () => dictionary.filter((e) => progress[e.day]).length,
    [dictionary, progress]
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 ${buttonPosition} z-40 w-12 h-12 rounded-full bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 flex items-center justify-center shadow-lg hover:scale-105 transition-transform text-sm font-bold`}
        title="Vocabulary Dictionary"
      >
        辞
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/30 dark:bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-md bg-white dark:bg-stone-900 shadow-xl overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 p-4 z-10">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-lg">
                  Vocabulary{" "}
                  <span className="text-sm font-normal text-stone-500">
                    {learnedCount}/{dictionary.length} learned
                  </span>
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Japanese, romaji, or English..."
                className="w-full px-3 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-sm placeholder:text-stone-400 dark:placeholder:text-stone-500 mb-3 outline-none focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-500"
              />

              <div className="flex gap-1.5 mb-3">
                {(["all", "learned", "upcoming"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      filter === f
                        ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                        : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                    }`}
                  >
                    {f === "all"
                      ? `All (${dictionary.length})`
                      : f === "learned"
                        ? `Learned (${learnedCount})`
                        : `Upcoming (${dictionary.length - learnedCount})`}
                  </button>
                ))}
              </div>

              <div className="flex gap-1.5 flex-wrap">
                <button
                  onClick={() => setSelectedPhase(null)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                    selectedPhase === null
                      ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                      : "bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
                  }`}
                >
                  All phases
                </button>
                {phases.map((p) => (
                  <button
                    key={p.number}
                    onClick={() => setSelectedPhase(p.number)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      selectedPhase === p.number
                        ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                        : "bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
                    }`}
                  >
                    P{p.number}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4">
              <p className="text-xs text-stone-400 dark:text-stone-500 mb-3">
                {filtered.length} word{filtered.length !== 1 && "s"}
              </p>
              {filtered.length === 0 ? (
                <p className="text-sm text-stone-400 dark:text-stone-500 text-center py-8">
                  No words match your filters.
                </p>
              ) : (
                <div className="space-y-1">
                  {filtered.map((entry) => {
                    const learned = !!progress[entry.day];
                    return (
                      <div
                        key={entry.japanese + entry.day}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                          learned
                            ? "bg-white dark:bg-stone-800/50"
                            : "bg-stone-50 dark:bg-stone-900/50 opacity-50"
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className="jp text-base font-medium">
                              {entry.japanese}
                            </span>
                            <span className="text-xs italic text-stone-500 dark:text-stone-400">
                              {entry.romaji}
                            </span>
                          </div>
                          <p className="text-sm text-stone-600 dark:text-stone-300">
                            {entry.english}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                          <span className="text-[10px] text-stone-400 dark:text-stone-500">
                            Day {entry.day}
                          </span>
                          {learned && (
                            <svg
                              className="w-4 h-4 text-emerald-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
