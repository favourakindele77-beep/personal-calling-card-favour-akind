import { EmailActions } from '@/components/email-actions'

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card px-6 py-16 text-center sm:px-12 lg:py-24">
          <div className="bg-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-6">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary">
              <span className="font-serif text-sm tabular-nums">03</span>
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              Contact
            </p>
            <h2
              id="contact-heading"
              className="max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance sm:text-6xl"
            >
              {"Let's work toward "}
              <span className="italic text-primary">healthier futures</span>
            </h2>
            <p className="max-w-lg leading-relaxed text-muted-foreground text-pretty">
              Open to opportunities with the UN, the EU, and global health
              organisations.
            </p>
            <div className="pt-4">
              <EmailActions />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
