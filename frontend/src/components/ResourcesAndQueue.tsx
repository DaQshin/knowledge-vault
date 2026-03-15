import SectionHeader from "./SectionHeader";
const RESOURCES = [
  {
    abbr: "DD",
    iconBg: "bg-teal-dim",
    iconText: "text-teal",
    title: "DDIA — Chapter 3 storage notes",
    url: "dataintensive.net",
    tag: "systems",
    pill: "bg-teal-dim text-teal",
  },
  {
    abbr: "FA",
    iconBg: "bg-purple-dim",
    iconText: "text-purple",
    title: "FlashAttention paper",
    url: "arxiv.org/abs/2205.14135",
    tag: "research",
    pill: "bg-purple-dim text-purple",
  },
  {
    abbr: "Mo",
    iconBg: "bg-amber-dim",
    iconText: "text-amber",
    title: "Mo's algorithm explained",
    url: "codeforces.com",
    tag: "ideas",
    pill: "bg-amber-dim text-amber",
  },
  {
    abbr: "CF",
    iconBg: "bg-coral-dim",
    iconText: "text-coral",
    title: "Google SWE Internship India",
    url: "careers.google.com",
    tag: "career",
    pill: "bg-coral-dim text-coral",
  },
];

function ResourceItem({ abbr, iconBg, iconText, title, url, tag, pill }) {
  return (
    <div className="flex cursor-pointer items-center gap-[10px] rounded-lg border border-border-dim bg-bg-2 px-3 py-[9px] transition-colors duration-150 hover:border-border">
      <div
        className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[7px] font-mono text-[11px] font-medium ${iconBg} ${iconText}`}
      >
        {abbr}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12.5px] font-medium text-ink-1">{title}</p>
        <p className="truncate font-mono text-[10px] text-ink-3">{url}</p>
      </div>
      <span
        className={`shrink-0 rounded-full px-[7px] py-[2px] font-mono text-[9px] uppercase tracking-[0.08em] ${pill}`}
      >
        {tag}
      </span>
    </div>
  );
}

const QUEUE = [
  {
    title: "epoll event loop model",
    days: "10 days ago",
    urgency: "overdue",
    indicatorColor: "bg-coral",
    urgencyStyle: "bg-coral-dim text-coral",
  },
  {
    title: "LFX vs GSoC comparison",
    days: "7 days ago",
    urgency: "due soon",
    indicatorColor: "bg-amber",
    urgencyStyle: "bg-amber-dim text-amber",
  },
  {
    title: "Bitcask paper summary",
    days: "5 days ago",
    urgency: "on track",
    indicatorColor: "bg-purple",
    urgencyStyle: "bg-teal-dim text-teal",
  },
  {
    title: "FAANG DSA roadmap",
    days: "3 days ago",
    urgency: "on track",
    indicatorColor: "bg-teal",
    urgencyStyle: "bg-teal-dim text-teal",
  },
];

function QueueItem({ title, days, urgency, indicatorColor, urgencyStyle }) {
  return (
    <div className="flex cursor-pointer items-center gap-[10px] rounded-lg border border-border-dim bg-bg-2 px-3 py-[10px] transition-colors duration-150 hover:border-border">
      <div
        className={`w-[5px] self-stretch rounded-[3px] ${indicatorColor} shrink-0`}
      />
      <div className="flex-1">
        <p className="text-[12.5px] font-medium text-ink-1">{title}</p>
        <div className="mt-[3px] flex items-center gap-2">
          <span className="font-mono text-[9px] text-ink-3">{days}</span>
          <span
            className={`rounded-full px-[6px] py-[1px] font-mono text-[9px] ${urgencyStyle}`}
          >
            {urgency}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ResourcesAndQueue() {
  return (
    <div className="grid gap-5" style={{ gridTemplateColumns: "3fr 2fr" }}>
      <div>
        <SectionHeader title="Saved resources" link="view all →" />
        <div className="flex flex-col gap-[7px]">
          {RESOURCES.map((r) => (
            <ResourceItem key={r.title} {...r} />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Review queue" />
        <div className="flex flex-col gap-[7px]">
          {QUEUE.map((q) => (
            <QueueItem key={q.title} {...q} />
          ))}
        </div>
      </div>
    </div>
  );
}
