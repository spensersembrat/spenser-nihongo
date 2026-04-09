"use client";

import { StreakData } from "@/lib/types";

export default function StreakCounter({ streak }: { streak: StreakData }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl" role="img" aria-label="streak">
        {streak.current > 0 ? "🔥" : "💤"}
      </span>
      <div className="leading-tight">
        <p className="font-semibold text-lg tabular-nums">{streak.current}</p>
        <p className="text-xs text-stone-500 dark:text-stone-400">
          {streak.current === 1 ? "day streak" : "day streak"}
          {streak.longest > streak.current && (
            <span className="ml-1">(best: {streak.longest})</span>
          )}
        </p>
      </div>
    </div>
  );
}
