"use client";

import { useEffect, useRef, useState } from "react";

export default function NotesEditor({
  day,
  value,
  onChange,
}: {
  day: number;
  value: string;
  onChange: (day: number, text: string) => void;
}) {
  const [saved, setSaved] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function handleChange(text: string) {
    onChange(day, text);
    setSaved(false);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSaved(true);
    }, 800);
  }

  return (
    <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-5 space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-stone-500 dark:text-stone-400">
          Your Notes
        </label>
        {saved && (
          <span className="text-xs text-emerald-500 dark:text-emerald-400">
            Saved
          </span>
        )}
      </div>
      <textarea
        className="w-full min-h-[120px] rounded-md border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 px-3 py-2 text-sm text-stone-800 dark:text-stone-200 placeholder:text-stone-400 dark:placeholder:text-stone-500 resize-y focus:outline-none focus:ring-2 focus:ring-stone-300 dark:focus:ring-stone-600"
        placeholder="Jot down notes, mnemonics, or practice sentences…"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
