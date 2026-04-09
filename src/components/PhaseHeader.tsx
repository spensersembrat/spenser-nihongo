const phaseColors: Record<string, string> = {
  rose: "border-rose-400 dark:border-rose-600",
  amber: "border-amber-400 dark:border-amber-600",
  emerald: "border-emerald-400 dark:border-emerald-600",
  sky: "border-sky-400 dark:border-sky-600",
  violet: "border-violet-400 dark:border-violet-600",
  orange: "border-orange-400 dark:border-orange-600",
  pink: "border-pink-400 dark:border-pink-600",
};

const dotColors: Record<string, string> = {
  rose: "bg-rose-400",
  amber: "bg-amber-400",
  emerald: "bg-emerald-400",
  sky: "bg-sky-400",
  violet: "bg-violet-400",
  orange: "bg-orange-400",
  pink: "bg-pink-400",
};

export default function PhaseHeader({
  number,
  title,
  days,
  color,
}: {
  number: number;
  title: string;
  days: string;
  color: string;
}) {
  return (
    <div
      className={`col-span-full border-l-4 pl-4 py-2 mb-2 ${
        phaseColors[color] || "border-stone-400"
      }`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${dotColors[color] || "bg-stone-400"}`}
        />
        <h2 className="text-lg font-bold">Phase {number}</h2>
        <span className="text-sm text-stone-500 dark:text-stone-400">
          Days {days}
        </span>
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-300 mt-0.5">
        {title}
      </p>
    </div>
  );
}
