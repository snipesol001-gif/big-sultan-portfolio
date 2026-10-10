import { Crown } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import { royalty } from "../data/site"

/* ---------------------------------------------------------------------------
 * Featured Collab: the Royalty Ecosystem spotlight. A neutral text-based
 * treatment with no invented logo and no link, since no verified URL
 * has been supplied.
 * ------------------------------------------------------------------------- */
export default function FeaturedCollab() {
  return (
    <section id="ecosystem" className="bg-marble-deep">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <Reveal>
          <SectionHeading kicker={royalty.kicker} title={royalty.heading} />
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <article className="overflow-hidden rounded-3xl bg-bright shadow-emboss">
            <div className="grid lg:grid-cols-12">
              {/* Spotlight */}
              <div className="p-8 sm:p-12 lg:col-span-7">
                <div className="flex items-center gap-3">
                  <Crown className="h-5 w-5 text-gold-deep" strokeWidth={1.8} aria-hidden="true" />
                  <p className="kicker text-gold-deep">{royalty.cardLabel}</p>
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  {royalty.name}
                </h3>
                <p className="mt-5 max-w-xl leading-relaxed text-smoke sm:text-base">
                  {royalty.description}
                </p>
                <span className="mt-7 inline-block rounded-full bg-card px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-ink shadow-emboss-inset">
                  {royalty.tag}
                </span>
              </div>

              {/* Focus panel */}
              <div className="border-t border-stone/60 p-8 sm:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
                <p className="kicker text-smoke">{royalty.focusLabel}</p>
                <ul className="mt-6 space-y-4">
                  {royalty.focus.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden="true" />
                      <span className="text-sm font-semibold tracking-[0.14em] text-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}