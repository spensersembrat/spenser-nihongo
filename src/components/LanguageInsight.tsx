"use client";

import type { LanguageInsight as LanguageInsightType } from "@/lib/types";

export default function LanguageInsight({
  insight,
}: {
  insight: LanguageInsightType;
}) {
  return (
    <div className="rounded-lg border-l-4 border-indigo-400 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 px-5 py-4 space-y-2">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0"
        >
          <path
            fillRule="evenodd"
            d="M7.171 4.146l1.947 2.466a3.514 3.514 0 011.764 0l1.947-2.466a6.52 6.52 0 00-5.658 0zm8.683 3.025l-2.466 1.947c.15.578.15 1.186 0 1.764l2.466 1.947a6.52 6.52 0 000-5.658zm-3.025 8.683l-1.947-2.466a3.514 3.514 0 01-1.764 0l-1.947 2.466a6.52 6.52 0 005.658 0zM4.146 12.83l2.466-1.947a3.514 3.514 0 010-1.764L4.146 7.17a6.52 6.52 0 000 5.658zM10 18a8 8 0 100-16 8 8 0 000 16zm0-5.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 text-sm">
          {insight.title}
        </h3>
      </div>
      <p className="text-sm text-indigo-800/80 dark:text-indigo-200/70 leading-relaxed">
        {insight.content}
      </p>
    </div>
  );
}
