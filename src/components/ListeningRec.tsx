"use client";

import type { ListeningRec as ListeningRecType } from "@/lib/types";

export default function ListeningRec({ rec }: { rec: ListeningRecType }) {
  return (
    <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 px-5 py-4 flex gap-4 items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-stone-400 dark:text-stone-500 flex-shrink-0 mt-0.5"
      >
        <path d="M10 3.75a2 2 0 00-2 2v1.5a2 2 0 104 0v-1.5a2 2 0 00-2-2zm6.25 4.5a.75.75 0 00-1.5 0 4.75 4.75 0 11-9.5 0 .75.75 0 00-1.5 0A6.25 6.25 0 009.25 14.39V16H7.5a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-1.75v-1.61A6.25 6.25 0 0016.25 8.25z" />
      </svg>
      <div className="space-y-1.5 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
            {rec.source}
          </span>
          {rec.url ? (
            <a
              href={rec.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-800 dark:text-stone-200 underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-stone-500"
            >
              {rec.title}
            </a>
          ) : (
            <span className="text-sm font-medium text-stone-800 dark:text-stone-200">
              {rec.title}
            </span>
          )}
        </div>
        <p className="text-xs text-stone-500 dark:text-stone-400">
          Listen for: {rec.listenFor}
        </p>
      </div>
    </div>
  );
}
