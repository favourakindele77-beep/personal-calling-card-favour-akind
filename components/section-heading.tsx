export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
}: {
  id: string
  index: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-28">
      <p className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary">
        <span className="font-serif text-sm tabular-nums">{index}</span>
        <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance sm:text-5xl"
      >
        {title}
      </h2>
    </div>
  )
}
