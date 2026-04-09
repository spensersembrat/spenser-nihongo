"use client";

export default function CompletionButton({
  completed,
  onToggle,
}: {
  completed: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
        completed
          ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
          : "bg-stone-800 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-200"
      }`}
    >
      {completed ? "Completed ✓" : "Mark Complete"}
    </button>
  );
}
