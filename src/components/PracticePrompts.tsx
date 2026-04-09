"use client";

export default function PracticePrompts({
  prompts,
}: {
  prompts: string[];
}) {
  return (
    <div className="rounded-lg border border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/20 p-5 space-y-3">
      <p className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
        Practice — grab your notepad
      </p>
      <ol className="space-y-2">
        {prompts.map((prompt, i) => (
          <li key={i} className="flex gap-3 items-start text-sm text-stone-700 dark:text-stone-300">
            <span className="flex-shrink-0 mt-0.5 text-amber-500 dark:text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
              </svg>
            </span>
            <span>
              <span className="font-medium text-stone-500 dark:text-stone-400 mr-2">
                {i + 1}.
              </span>
              {prompt}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
