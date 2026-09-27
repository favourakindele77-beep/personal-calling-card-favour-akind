import { SectionHeading } from '@/components/section-heading'

const ACHIEVEMENTS = [
  {
    title: 'BSc Pharmacology',
    organisation: 'Olabisi Onabanjo University, Nigeria',
    period: '2019 – 2023',
    detail:
      'Built a strong scientific foundation in pharmacology ahead of postgraduate study in global public health.',
  },
  {
    title: 'Assistant Lecturer',
    organisation: 'Kano State College of Health Science and Technology',
    period: '2024 – 2025',
    detail:
      'Delivered lessons on complex health topics and mentored students one-on-one through challenging coursework.',
  },
  {
    title: 'Fundraiser & Advocate',
    organisation: 'Macmillan Cancer Support & Cancer Research UK',
    period: 'Volunteer',
    detail:
      'Spearheaded fundraising initiatives supporting people living with cancer, rooted in community-driven health advocacy.',
  },
]

export function KeyAchievements() {
  return (
    <section
      id="background"
      aria-labelledby="achievements-heading"
      className="scroll-mt-16 border-t border-border bg-card/30"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_2fr] lg:py-32">
        <SectionHeading
          id="achievements-heading"
          index="02"
          eyebrow="Background"
          title="Key Achievements & Background"
        />

        <ol className="relative flex flex-col gap-4 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-border">
          {ACHIEVEMENTS.map((item) => (
            <li key={item.title} className="relative pl-10">
              <span
                className="absolute top-8 left-0 size-[15px] rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <article className="flex flex-col gap-3 rounded-2xl border border-border bg-background/60 p-6 transition-colors hover:border-primary/40 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-wider text-primary tabular-nums">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground/80">
                  {item.organisation}
                </p>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  {item.detail}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
