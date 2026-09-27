import { ContactSection } from '@/components/contact-section'
import { FocusAreas } from '@/components/focus-areas'
import { Hero } from '@/components/hero'
import { KeyAchievements } from '@/components/key-achievements'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FocusAreas />
        <KeyAchievements />
        <ContactSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Favour Akindele</p>
          <p>Global Public Health &middot; Manchester Metropolitan University</p>
        </div>
      </footer>
    </>
  )
}
