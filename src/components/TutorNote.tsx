"use client";

export default function TutorNote({ note }: { note: string }) {
  return (
    <div className="rounded-lg border border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/20 px-5 py-4 flex gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5"
      >
        <path d="M10 1a6 6 0 00-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0010 1zM8.5 17a.5.5 0 00-.5.5v.5a1.5 1.5 0 003 0v-.5a.5.5 0 00-.5-.5h-2z" />
      </svg>
      <p className="text-sm text-amber-900/80 dark:text-amber-100/70 leading-relaxed">
        {note}
      </p>
    </div>
  );
}
