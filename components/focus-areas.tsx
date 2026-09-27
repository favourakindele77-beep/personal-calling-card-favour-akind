const FOCUS_AREAS = [
  'Medical research',
  'Drug side-effect reduction',
  'Women’s health promotion',
]

export function FocusAreas() {
  return (
    <section aria-labelledby="focus-heading" className="flex flex-col gap-4">
      <h2
        id="focus-heading"
        className="text-xs font-medium uppercase tracking-[0.2em] text-primary"
      >
        Focus
      </h2>
      <ul className="flex flex-col divide-y divide-border border-y border-border">
        {FOCUS_AREAS.map((area, index) => (
          <li key={area} className="flex items-baseline gap-4 py-3">
            <span className="font-serif text-sm text-primary/80 tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-base text-foreground">{area}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Pursuing roles with the UN, the EU, and global health organisations.
      </p>
    </section>
  )
}
