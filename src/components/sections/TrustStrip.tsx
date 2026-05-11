const ITEMS = [
  { label: 'MD-led', sub: 'Board-certified' },
  { label: 'Quest', sub: 'Lab partner' },
  { label: 'Labcorp', sub: 'Lab partner' },
  { label: 'FSA-eligible', sub: 'Pre-tax dollars' },
  { label: '60-day', sub: 'Guarantee' },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface-alt">
      <div className="container py-7">
        <ul className="grid grid-cols-2 items-center gap-y-5 sm:grid-cols-3 md:grid-cols-5">
          {ITEMS.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center text-center md:border-l md:border-border/70 md:first:border-l-0"
            >
              <span className="font-serif text-base text-primary">{item.label}</span>
              <span className="mt-1 font-mono text-[11px] uppercase tracking-tracked text-muted">
                {item.sub}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
