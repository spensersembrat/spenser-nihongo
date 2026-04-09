"use client";

import { checkpoints } from "@/data/checkpoints";

export default function ProgressBar({
  completedCount,
  total = 90,
}: {
  completedCount: number;
  total?: number;
}) {
  const pct = Math.round((completedCount / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-stone-500 dark:text-stone-400">
          {completedCount} / {total} days
        </span>
        <span className="font-medium">{pct}%</span>
      </div>
      <div className="relative h-3 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
        {checkpoints.map((cp) => {
          const pos = (cp.day / total) * 100;
          const reached = completedCount >= cp.day;
          return (
            <div
              key={cp.day}
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-stone-950 transition-colors"
              style={{ left: `${pos}%`, marginLeft: "-5px" }}
              title={`Day ${cp.day}: ${cp.title}`}
            >
              <div
                className={`w-full h-full rounded-full ${
                  reached
                    ? "bg-amber-500"
                    : "bg-stone-300 dark:bg-stone-700"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
