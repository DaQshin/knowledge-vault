import { useState } from "react";
import { LayoutGrid, AlignLeft, Columns, Search } from "lucide-react";

const NAV_ITEMS = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "Notes", icon: AlignLeft },
  { label: "Resources", icon: Columns },
  { label: "Search", icon: Search },
];

const TAGS = [
  { label: "systems", color: "bg-teal", dot: "bg-teal", count: 38 },
  { label: "research", color: "bg-purple", dot: "bg-purple", count: 24 },
  { label: "ideas", color: "bg-amber", dot: "bg-amber", count: 19 },
  { label: "career", color: "bg-coral", dot: "bg-coral", count: 11 },
];

function NavItem({ label, icon: Icon, active }) {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex w-full items-center gap-[9px] rounded-md px-2 py-[7px] text-[13px] text-left transition-all duration-150
        ${isActive ? "bg-bg-3 text-ink-1" : "text-ink-2"}`}
    >
      <Icon size={13} strokeWidth={1.5} />
      {label}
    </button>
  );
}

function TagItem({ label, dot, count }) {
  return (
    <button className="flex w-full items-center gap-[9px] rounded-md px-2 py-[7px] text-[13px] text-ink-2 transition-all duration-150 hover:bg-bg-3 hover:text-ink-1">
      <span className={`h-[6px] w-[6px] shrink-0 rounded-full ${dot}`} />
      {label}
      <span className="ml-auto font-mono text-[10px] text-ink-3">{count}</span>
    </button>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-[220px] shrink-0 flex-col gap-10 border-r border-border-dim p-7">
      {/* Logo */}
      <div className="flex items-center gap-2 font-serif text-[22px] italic tracking-tight text-ink-1">
        <span className="h-[7px] w-[7px] rounded-full bg-teal" />
        memex
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-px">
        <p className="mb-[6px] px-2 font-mono text-[9px] uppercase tracking-[0.15em] text-ink-3">
          Navigate
        </p>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      {/* Tags nav */}
      <nav className="flex flex-col gap-px">
        <p className="mb-[6px] px-2 font-mono text-[9px] uppercase tracking-[0.15em] text-ink-3">
          Tags
        </p>
        {TAGS.map((tag) => (
          <TagItem key={tag.label} {...tag} />
        ))}
      </nav>

      {/* Deadline widget */}
      <div className="mt-auto rounded-lg border border-teal/20 bg-teal-dim p-3">
        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-teal">
          GSoC deadline
        </p>
        <p className="text-[12px] font-medium text-ink-1">16 days left</p>
        <p className="mt-0.5 text-[11px] text-ink-3">March 31, 2026</p>
      </div>
    </aside>
  );
}
