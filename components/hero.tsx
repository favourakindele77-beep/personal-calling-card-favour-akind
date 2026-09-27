import { ArrowDownRight, ArrowRight } from 'lucide-react'

const KEY_FACTS = [
  { label: 'Programme', value: 'Master of Global Public Health' },
  { label: 'Institution', value: 'Manchester Metropolitan University' },
  { label: 'Graduating', value: '2026' },
  { label: 'Pursuing', value: 'UN, EU & global health roles' },
]

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="bg-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pt-20 pb-24 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:pt-28 lg:pb-32">
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Global Public Health &middot; Class of 2026
          </p>

          <h1
            id="hero-heading"
            className="font-serif text-6xl font-medium leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl"
          >
            Favour
            <br />
            <span className="italic text-primary">Akindele</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Master of Global Public Health student focused on{' '}
            <span className="text-foreground">medical research</span>,{' '}
            <span className="text-foreground">drug side-effect reduction</span>, and{' '}
            <span className="text-foreground">women&apos;s health promotion</span>.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_-8px] hover:shadow-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get in touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#background"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View background
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside
          aria-label="Key facts"
          className="rounded-2xl border border-border bg-card/60 p-2 shadow-2xl shadow-black/30 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-6 duration-1000"
        >
          <dl className="flex flex-col divide-y divide-border">
            {KEY_FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-5 py-4">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-primary/90">
                  {fact.label}
                </dt>
                <dd className="font-serif text-lg text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
