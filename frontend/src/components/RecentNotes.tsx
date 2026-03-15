// src/components/RecentNotes.jsx
import SectionHeader from "./SectionHeader";

const TAG_STYLES = {
  systems: { pill: "bg-teal-dim text-teal", bar: "bg-teal" },
  research: { pill: "bg-purple-dim text-purple", bar: "bg-purple" },
  ideas: { pill: "bg-amber-dim text-amber", bar: "bg-amber" },
  career: { pill: "bg-coral-dim text-coral", bar: "bg-coral" },
};

const NOTES = [
  {
    tag: "systems",
    title: "WAL + CRC32 in DKVS",
    preview:
      "Write-ahead log, crash recovery strategy, and snapshotting design for the persistent key-value store.",
    time: "2 hours ago",
  },
  {
    tag: "career",
    title: "GSoC 2026 — containerd track",
    preview:
      "Project ideas shortlist, timeline, mentor outreach draft. Deadline March 31.",
    time: "yesterday",
  },
  {
    tag: "ideas",
    title: "BM25 + dense retrieval hybrid",
    preview:
      "Second brain search: re-ranking pipeline, eval harness, hybrid scoring design.",
    time: "2 days ago",
  },
];

function NoteCard({ tag, title, preview, time }) {
  const style = TAG_STYLES[tag] ?? TAG_STYLES.ideas;

  return (
    <div className="relative cursor-pointer overflow-hidden rounded-[10px] border border-border-dim bg-bg-2 p-4 transition-colors duration-150 hover:border-border">
      {/* top accent bar */}
      <div
        className={`absolute inset-x-0 top-0 h-[2px] rounded-t-[10px] ${style.bar}`}
      />

      <span
        className={`mb-[9px] inline-block rounded-full px-[7px] py-[2px] font-mono text-[9px] uppercase tracking-[0.08em] ${style.pill}`}
      >
        {tag}
      </span>

      <p className="mb-[6px] text-[13px] font-medium leading-[1.45] text-ink-1">
        {title}
      </p>

      <p className="line-clamp-2 text-[11.5px] leading-[1.6] text-ink-3">
        {preview}
      </p>

      <p className="mt-2.5 font-mono text-[9px] text-ink-3">{time}</p>
    </div>
  );
}

export default function RecentNotes() {
  return (
    <div>
      <SectionHeader title="Recent notes" link="view all →" />
      <div
        className="grid gap-2.5"
        style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
      >
        {NOTES.map((note) => (
          <NoteCard key={note.title} {...note} />
        ))}
      </div>
    </div>
  );
}
