"use client";

import { KanaItem, kanaRows } from "@/data/kana";
import KanaCard from "./KanaCard";

export default function KanaChart({
  data,
  revealed,
}: {
  data: KanaItem[];
  revealed: boolean;
}) {
  const baseRows = kanaRows.filter((r) =>
    ["vowels", "k", "s", "t", "n", "h", "m", "y", "r", "w"].includes(r.id)
  );
  const dakutenRows = kanaRows.filter((r) =>
    ["g", "z", "d", "b", "p"].includes(r.id)
  );

  const renderRow = (rowId: string) => {
    const chars = data.filter((k) => k.row === rowId);
    return (
      <div key={rowId} className="flex gap-1">
        {chars.map((k) => (
          <KanaCard
            key={k.character}
            character={k.character}
            romaji={k.romaji}
            revealed={revealed}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        {baseRows.map((r) => renderRow(r.id))}
      </div>
      <div className="border-t border-stone-200 dark:border-stone-700 pt-3 space-y-1">
        <p className="text-xs font-medium text-stone-500 dark:text-stone-400 mb-1">
          Dakuten / Handakuten
        </p>
        {dakutenRows.map((r) => renderRow(r.id))}
      </div>
    </div>
  );
}
