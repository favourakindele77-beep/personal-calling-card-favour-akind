import { EmailActions } from '@/components/email-actions'
import { FocusAreas } from '@/components/focus-areas'

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-16">
      <article className="flex w-full max-w-xl flex-col gap-10">
        <header className="flex flex-col gap-5">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-balance sm:text-6xl">
            Favour Akindele
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Master of Global Public Health student at{' '}
            <span className="text-foreground">
              Manchester Metropolitan University
            </span>
            , graduating in 2026.
          </p>
        </header>

        <FocusAreas />

        <section aria-labelledby="contact-heading" className="flex flex-col gap-4">
          <h2
            id="contact-heading"
            className="text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            Get in touch
          </h2>
          <EmailActions />
        </section>
      </article>
    </main>
  )
}
