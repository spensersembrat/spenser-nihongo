"use client";

import { useState } from "react";

export default function QuickReference({ content }: { content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          Quick Reference
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 text-stone-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-stone-600 dark:text-stone-300 leading-relaxed whitespace-pre-line border-t border-stone-100 dark:border-stone-800 pt-3">
          {content}
        </div>
      )}
    </div>
  );
}
