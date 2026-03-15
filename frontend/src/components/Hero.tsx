export default function Hero() {
  return (
    <div className="flex items-end justify-between border-b border-border-dim pb-6">
      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-teal">
          Sunday, March 15
        </p>
        <h1 className="font-serif text-[36px] font-normal leading-[1.15] tracking-tight text-ink-1">
          Good evening,
          <br />
          <em className="text-ink-2">Dakshin.</em>
        </h1>
      </div>

      <div className="text-right font-serif text-[13px] italic leading-[1.8] text-ink-3">
        142 notes
        <br />
        89 resources
        <br />4 to review
      </div>
    </div>
  );
}
