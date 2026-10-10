import { ArrowUpRight, Clock } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import XIcon from "../components/XIcon"
import { alpha, links } from "../data/site"

/* ---------------------------------------------------------------------------
 * The Alpha: one prominent feature card for the published guide, plus a
 * deliberately quieter teaser for the upcoming one.
 * Step 6 tweak: the ghost 01 hides below 380px so it can never crowd the
 * label on the smallest phones.
 * ------------------------------------------------------------------------- */
export default function Alpha() {
  const { published, upcoming } = alpha

  return (
    <section id="alpha" className="bg-marble">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <Reveal>
          <SectionHeading kicker={alpha.kicker} title={alpha.heading} />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {/* Published guide: the primary element */}
          <Reveal>
            <article className="relative overflow-hidden rounded-3xl bg-bright p-8 shadow-emboss sm:p-12">
              {/* Editorial numbering */}
              <p
                className="pointer-events-none absolute right-6 top-5 select-none font-display text-6xl font-black text-stone/50 sm:right-10 sm:top-6 sm:text-8xl max-[380px]:hidden"
                aria-hidden="true"
              >
                01
              </p>

              <span className="inline-flex items-center rounded-full bg-card px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-gold-deep shadow-emboss-inset">
                {published.label}
              </span>

              <h3 className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                {published.title}
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-smoke sm:text-base">
                {published.description}
              </p>

              <a
                href={links.alphaGuide}
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-bright transition-colors duration-300 hover:bg-gold hover:text-ink"
              >
                <XIcon className="h-4 w-4" />
                {published.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          </Reveal>

          {/* Upcoming teaser: deliberately quieter, clearly not yet published */}
          <Reveal delay={120}>
            <article className="flex flex-col gap-4 rounded-3xl border border-stone/70 bg-card/50 p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
              <div className="flex items-center gap-3 sm:w-44 sm:shrink-0">
                <Clock className="h-5 w-5 text-gold-deep" strokeWidth={1.8} aria-hidden="true" />
                <p className="kicker text-gold-deep">{upcoming.label}</p>
              </div>
              <div className="hidden h-10 w-px bg-stone/70 sm:block" aria-hidden="true" />
              <div>
                <h4 className="text-lg font-semibold text-ink">{upcoming.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-smoke">
                  {upcoming.description}
                </p>
              </div>
              <p
                className="font-display text-4xl font-black text-stone/60 sm:ml-auto sm:shrink-0"
                aria-hidden="true"
              >
                02
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}