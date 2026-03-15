export default function SectionHeader({ title, link }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">
        {title}
      </p>
      {link && (
        <button className="font-mono text-[10px] text-ink-3 transition-colors hover:text-ink-2">
          {link}
        </button>
      )}
    </div>
  );
}
