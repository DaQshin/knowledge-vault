interface Stat {
  num: string;
  label: string;
  delta: string;
  color: "teal" | "purple" | "amber" | "coral";
}

const COLOR_CLASSES = {
  teal: "text-teal",
  purple: "text-purple",
  amber: "text-amber",
  coral: "text-coral",
};

const STATS: Stat[] = [
  { num: "142", label: "Total notes", delta: "+4 this week", color: "teal" },
  { num: "89", label: "Saved links", delta: "+2 today", color: "purple" },
  { num: "31", label: "AI queries", delta: "this month", color: "amber" },
  { num: "4", label: "Review queue", delta: "due soon", color: "coral" },
];

function StatCard({ num, label, delta, color }: Stat) {
  return (
    <div className="flex flex-col gap-1 bg-bg-2 px-5 py-[18px]">
      <span
        className={`font-serif text-[32px] font-medium ${COLOR_CLASSES[color]}`}
      >
        {num}
      </span>

      <span className="text-[11px] text-ink-3">{label}</span>

      <span className={`mt-1 font-mono text-[10px] ${COLOR_CLASSES[color]}`}>
        {delta}
      </span>
    </div>
  );
}

export default function StatsRow() {
  return (
    <div className="grid grid-cols-4 overflow-hidden rounded-[10px] border border-border-dim gap-1 bg-white/10">
      {STATS.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
