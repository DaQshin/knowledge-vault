import { Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-border-dim bg-bg px-8 pb-8 pt-0">
      <div className="flex flex-1 cursor-text items-center gap-[10px] rounded-lg border border-border bg-bg-2 px-[14px] py-2">
        <Search size={13} strokeWidth={1.5} className="text-ink-3 shrink-0" />
        <span className="flex-1 text-[13px] text-ink-3">
          Search or ask across all notes…
        </span>
        <span className="rounded-full bg-teal-dim px-[9px] py-[3px] font-mono text-[10px] tracking-[0.04em] text-teal">
          AI
        </span>
      </div>

      <div className="rounded-[5px] border border-border-dim bg-bg-3 px-2 py-1 font-mono text-[10px] text-ink-3">
        ⌘ K
      </div>

      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-bg-3 font-mono text-[11px] text-ink-2">
        D
      </div>
    </div>
  );
}
