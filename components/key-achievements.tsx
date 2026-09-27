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
      aria-labelledby="achievements-heading"
      className="flex flex-col gap-4"
    >
      <h2
        id="achievements-heading"
        className="text-xs font-medium uppercase tracking-[0.2em] text-primary"
      >
        Key Achievements &amp; Background
      </h2>
      <ul className="flex flex-col divide-y divide-border border-y border-border">
        {ACHIEVEMENTS.map((item) => (
          <li key={item.title} className="flex flex-col gap-1.5 py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <span className="text-xs uppercase tracking-wider text-muted-foreground tabular-nums">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-primary/90">{item.organisation}</p>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
