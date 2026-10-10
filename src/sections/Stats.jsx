import Reveal from "../components/Reveal"
import { stats } from "../data/site"

/* ---------------------------------------------------------------------------
 * Stats: a clean strip of the supplied profile figures.
 * Desktop: one row with hairline dividers. Mobile: a 2x2 grid.
 * No count-up animation: these are supplied figures, not live measurements.
 * Step 7 change: rebuilt as a plain ul/li list. The previous dl structure
 * had an extra wrapper div between the list and its term/description pairs,
 * which Lighthouse flagged.
 * ------------------------------------------------------------------------- */

const cellBorders = [
  "border-r border-stone/60 lg:border-r-0",
  "lg:border-l lg:border-stone/60",
  "border-r border-t border-stone/60 lg:border-r-0 lg:border-t-0 lg:border-l",
  "border-t border-stone/60 lg:border-t-0 lg:border-l",
]

export default function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="border-y border-stone/60 bg-marble">
      <h2 id="stats-heading" className="sr-only">
        Profile details
      </h2>
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <li key={stat.label} className={cellBorders[index]}>
              <Reveal delay={index * 80} className="h-full">
                <div className="flex h-full flex-col items-center justify-center gap-3 px-4 py-12 text-center sm:py-14">
                  <span
                    className={`font-display text-xl font-bold leading-tight sm:text-3xl lg:text-4xl ${
                      stat.label === "Identity" ? "text-gold-deep" : "text-ink"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="kicker text-smoke">{stat.label}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}