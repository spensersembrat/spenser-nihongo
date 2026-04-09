"use client";

import Link from "next/link";
import { Lesson, DayType } from "@/lib/types";

const dayTypeLabel: Record<DayType, string> = {
  "new-pattern": "New Pattern",
  "vocab-expansion": "Vocab",
  "pattern-combo": "Combo",
  review: "Review",
};

const dayTypeBadgeClass: Record<DayType, string> = {
  "new-pattern":
    "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  "vocab-expansion":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  "pattern-combo":
    "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  review:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
};

export default function DayCard({
  lesson,
  completed,
}: {
  lesson: Lesson;
  completed: boolean;
}) {
  return (
    <Link
      href={`/day/${lesson.day}`}
      className={`group relative block rounded-xl border p-4 transition-all hover:shadow-md hover:-translate-y-0.5 ${
        completed
          ? "border-emerald-300 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/30"
          : "border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900"
      }`}
    >
      {completed && (
        <div className="absolute top-2 right-2 text-emerald-500 dark:text-emerald-400">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <p className="text-xs font-medium text-stone-400 dark:text-stone-500 mb-1">
        Day {lesson.day}
      </p>
      <p className="font-semibold text-sm leading-snug mb-2 pr-6 line-clamp-2">
        {lesson.title}
      </p>
      <span
        className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${
          dayTypeBadgeClass[lesson.dayType]
        }`}
      >
        {dayTypeLabel[lesson.dayType]}
      </span>
      {lesson.pattern && (
        <p className="mt-2 text-xs font-mono text-stone-500 dark:text-stone-400 jp truncate">
          {lesson.pattern.japanese}
        </p>
      )}
    </Link>
  );
}
