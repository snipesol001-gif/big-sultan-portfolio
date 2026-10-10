/* ---------------------------------------------------------------------------
 * <SectionHeading>: the signature section header used across the site.
 * A small gold uppercase kicker sits above a large royal-serif title,
 * finished with a short architectural rule.
 *
 * Props:
 *   kicker: small label above the title (required)
 *   title:  the large heading text (required)
 *   align:  "left" (default) or "center"
 *   tone:   "light" (default, dark text) or "dark" (for obsidian panels)
 * ------------------------------------------------------------------------- */
export default function SectionHeading({ kicker, title, align = "left", tone = "light" }) {
  const dark = tone === "dark"
  const center = align === "center"

  return (
    <div
      className={`flex flex-col gap-4 ${
        center ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {kicker && <p className={`kicker ${dark ? "text-gold" : "text-gold-deep"}`}>{kicker}</p>}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-bright" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span className={`h-px w-16 ${dark ? "bg-gold/70" : "bg-gold"}`} aria-hidden="true" />
    </div>
  )
}