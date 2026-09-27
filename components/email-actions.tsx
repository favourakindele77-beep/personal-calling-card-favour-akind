'use client'

import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'

const EMAIL = 'favourakindele77@gmail.com'

export function EmailActions() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_-8px] hover:shadow-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Mail className="size-4" aria-hidden="true" />
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {copied ? (
          <Check className="size-4" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
        {copied ? 'Copied' : 'Copy email'}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  )
}
