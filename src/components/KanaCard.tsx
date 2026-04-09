"use client";

import { useState } from "react";

export default function KanaCard({
  character,
  romaji,
  revealed,
}: {
  character: string;
  romaji: string;
  revealed: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const showRomaji = revealed || flipped;

  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="flex flex-col items-center justify-center w-12 h-14 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500 transition-colors bg-white dark:bg-stone-900 select-none"
    >
      <span className="jp text-lg font-medium">{character}</span>
      <span
        className={`text-[10px] text-stone-500 dark:text-stone-400 transition-opacity ${
          showRomaji ? "opacity-100" : "opacity-0"
        }`}
      >
        {romaji}
      </span>
    </button>
  );
}
