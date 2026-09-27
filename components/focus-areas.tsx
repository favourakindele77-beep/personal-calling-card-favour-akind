import { FlaskConical, HeartPulse, Pill } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const FOCUS_AREAS = [
  { title: 'Medical research', icon: FlaskConical },
  { title: 'Drug side-effect reduction', icon: Pill },
  { title: 'Women’s health promotion', icon: HeartPulse },
]

export function FocusAreas() {
  return (
    <section
      id="focus"
      aria-labelledby="focus-heading"
      className="scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_2fr] lg:py-32">
        <SectionHeading
          id="focus-heading"
          index="01"
          eyebrow="Focus"
          title="Where my work is directed"
        />

        <div className="flex flex-col gap-8">
          <ul className="grid gap-4 sm:grid-cols-3">
            {FOCUS_AREAS.map(({ title, icon: Icon }, index) => (
              <li
                key={title}
                className="group relative flex flex-col justify-between gap-12 overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/25">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-sm text-muted-foreground tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-snug text-foreground text-balance">
                  {title}
                </h3>
                <span
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>

          <p className="border-l-2 border-primary/60 pl-5 font-serif text-xl leading-relaxed text-muted-foreground text-pretty">
            Pursuing roles with the{' '}
            <span className="text-foreground">United Nations</span>, the{' '}
            <span className="text-foreground">European Union</span>, and{' '}
            <span className="text-foreground">global health organisations</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
