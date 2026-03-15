const CHIPS = [
  "What did I write about WAL?",
  "Summarize my GSoC research",
  "List all systems resources",
  "What ideas are unfinished?",
  "Show notes from last week",
];

export default function AiPanel() {
  return (
    <div className="rounded-[10px] border border-border-dim bg-bg-2 px-6 py-5">
      {/* Header */}
      <div className="mb-3.5 flex items-center gap-2">
        <span className="h-1.75 w-[7px] animate-pulse rounded-full bg-teal" />
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-teal">
          Ask your second brain
        </p>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-[7px]">
        {CHIPS.map((chip) => (
          <button
            key={chip}
            className="cursor-pointer rounded-[7px] border border-border-dim bg-bg-3 px-3 py-[6px] text-[12px] text-ink-2 transition-all duration-150 hover:border-border hover:text-ink-1"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
