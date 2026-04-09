"use client";

import { useState } from "react";
import { hiragana, katakana } from "@/data/kana";
import KanaChart from "./KanaChart";

export default function KanaDrawer() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"hiragana" | "katakana">("hiragana");
  const [revealed, setRevealed] = useState(true);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-40 w-12 h-12 rounded-full bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 flex items-center justify-center shadow-lg hover:scale-105 transition-transform jp text-lg font-bold"
        title="Kana Reference"
      >
        あ
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/30 dark:bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-sm bg-white dark:bg-stone-900 shadow-xl overflow-y-auto animate-in slide-in-from-right">
            <div className="sticky top-0 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 p-4 z-10">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-lg">Kana Reference</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => setTab("hiragana")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    tab === "hiragana"
                      ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                      : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                  }`}
                >
                  Hiragana
                </button>
                <button
                  onClick={() => setTab("katakana")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    tab === "katakana"
                      ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                      : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                  }`}
                >
                  Katakana
                </button>
                <button
                  onClick={() => setRevealed((r) => !r)}
                  className="ml-auto px-3 py-1.5 rounded-lg text-sm font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  {revealed ? "Hide All" : "Show All"}
                </button>
              </div>
            </div>
            <div className="p-4">
              <KanaChart
                data={tab === "hiragana" ? hiragana : katakana}
                revealed={revealed}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
