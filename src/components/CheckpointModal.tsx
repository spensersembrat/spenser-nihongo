"use client";

import { Checkpoint } from "@/lib/types";

export default function CheckpointModal({
  checkpoint,
  onClose,
}: {
  checkpoint: Checkpoint;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/30 dark:bg-black/50"
        onClick={onClose}
      />
      <div className="relative max-w-md w-full bg-white dark:bg-stone-900 rounded-2xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-4">🎌</div>
        <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
          Checkpoint — Day {checkpoint.day}
        </p>
        <h2 className="text-2xl font-bold mb-3">{checkpoint.title}</h2>
        <p className="text-stone-600 dark:text-stone-300 mb-6">
          {checkpoint.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-3">
            <p className="text-2xl font-bold">{checkpoint.patternsLearned}</p>
            <p className="text-[10px] text-stone-500 dark:text-stone-400">
              patterns
            </p>
          </div>
          <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-3">
            <p className="text-2xl font-bold">~{checkpoint.estimatedVocab}</p>
            <p className="text-[10px] text-stone-500 dark:text-stone-400">
              words
            </p>
          </div>
          <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-3">
            <p className="text-2xl font-bold">{checkpoint.estimatedSentences}</p>
            <p className="text-[10px] text-stone-500 dark:text-stone-400">
              sentences
            </p>
          </div>
        </div>

        <p className="text-sm text-stone-500 dark:text-stone-400 italic mb-6">
          {checkpoint.nextPreview}
        </p>

        <button
          onClick={onClose}
          className="px-6 py-2.5 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
