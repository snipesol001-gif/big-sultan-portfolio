/* ---------------------------------------------------------------------------
 * ServiceCard: one craft card for the What I Do section.
 * variants:
 *   featured: tall lead card, larger type, ghost icon relief
 *   standard: supporting card
 *   wide:     supporting card that spans two columns on larger screens
 * ------------------------------------------------------------------------- */
export default function ServiceCard({
  icon: Icon,
  number,
  title,
  description,
  variant = "standard",
}) {
  const featured = variant === "featured"
  const wide = variant === "wide"

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-bright shadow-emboss-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-emboss ${
        featured ? "p-8 sm:p-10" : wide ? "p-7 sm:p-8" : "p-7"
      }`}
    >
      {/* Ghost icon relief on the featured card */}
      {featured && (
        <Icon
          aria-hidden="true"
          strokeWidth={1}
          className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 rotate-12 text-ink/[0.04]"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex items-center justify-center rounded-full bg-card text-ink shadow-emboss-inset transition-colors duration-300 group-hover:text-gold-deep ${
            featured ? "h-14 w-14" : "h-12 w-12"
          }`}
        >
          <Icon
            aria-hidden="true"
            strokeWidth={1.8}
            className={featured ? "h-6 w-6" : "h-5 w-5"}
          />
        </span>
        {/* Editorial numbering: decorative, hidden from screen readers */}
        <span className="kicker pt-1.5 text-stone" aria-hidden="true">
          {number}
        </span>
      </div>

      <h3
        className={`mt-6 font-semibold tracking-wide text-ink ${
          featured ? "text-xl sm:text-2xl" : "text-lg"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 leading-relaxed text-smoke ${featured ? "text-base" : "text-sm"} ${
          wide ? "max-w-xl" : ""
        }`}
      >
        {description}
      </p>

      {/* Gold rule: a small detail that grows on hover */}
      <div className="mt-auto pt-7">
        <span
          className="block h-0.5 w-8 rounded-full bg-gold transition-all duration-300 group-hover:w-14"
          aria-hidden="true"
        />
      </div>
    </article>
  )
}