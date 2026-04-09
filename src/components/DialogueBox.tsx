"use client";

import type { DialogueLine } from "@/lib/types";

export default function DialogueBox({
  dialogue,
}: {
  dialogue: DialogueLine[];
}) {
  return (
    <div className="space-y-3">
      {dialogue.map((line, i) => {
        const isYou = line.speaker === "You";
        return (
          <div
            key={i}
            className={`flex flex-col ${isYou ? "items-end" : "items-start"}`}
          >
            <span className="text-xs font-medium text-stone-400 dark:text-stone-500 mb-1 px-1">
              {line.speaker}
            </span>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 space-y-1 ${
                isYou
                  ? "bg-stone-800 dark:bg-stone-100 text-white dark:text-stone-900 rounded-br-md"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-bl-md"
              }`}
            >
              <p className={`jp text-base ${isYou ? "" : ""}`}>
                {line.japanese}
              </p>
              <p
                className={`text-xs italic ${
                  isYou
                    ? "text-stone-300 dark:text-stone-500"
                    : "text-stone-400 dark:text-stone-500"
                }`}
              >
                {line.romaji}
              </p>
              <p
                className={`text-sm ${
                  isYou
                    ? "text-stone-200 dark:text-stone-600"
                    : "text-stone-600 dark:text-stone-300"
                }`}
              >
                {line.english}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
