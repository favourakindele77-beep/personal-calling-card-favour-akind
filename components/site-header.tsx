const NAV_LINKS = [
  { href: '#focus', label: 'Focus' },
  { href: '#background', label: 'Background' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span
            className="flex size-9 items-center justify-center rounded-full border border-primary/40 font-serif text-sm text-primary"
            aria-hidden="true"
          >
            FA
          </span>
          <span className="text-sm font-medium tracking-wide">
            Favour Akindele
          </span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className={link.href === '#contact' ? '' : 'hidden sm:block'}>
                <a
                  href={link.href}
                  className={
                    link.href === '#contact'
                      ? 'rounded-full border border-primary/50 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground'
                      : 'rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
