import { Crosshair } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import XIcon from "../components/XIcon"
import { huntersDao, links } from "../data/site"

/* ---------------------------------------------------------------------------
 * Hunters DAO: the dark architectural moment. A framed obsidian panel with
 * gold corner marks, in front of a giant ghost wordmark.
 * ------------------------------------------------------------------------- */
export default function HuntersDAO() {
  return (
    <section id="hunters-dao" className="panel-dark relative overflow-hidden bg-obsidian">
      {/* Ghost wordmark behind the panel */}
      <p
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 select-none text-center font-display text-[13vw] font-black uppercase leading-none tracking-[0.06em] text-bright/[0.04] sm:block"
        aria-hidden="true"
      >
        HUNTERS DAO
      </p>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <Reveal className="mx-auto max-w-3xl">
          <div className="relative rounded-[2rem] border border-bright/10 px-6 py-14 text-center sm:px-12 sm:py-16">
            {/* Gold corner marks */}
            <span className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-gold/60" aria-hidden="true" />
            <span className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-gold/60" aria-hidden="true" />
            <span className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-gold/60" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-gold/60" aria-hidden="true" />

            <Crosshair
              className="mx-auto h-7 w-7 text-gold"
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <div className="mt-6">
              <SectionHeading
                kicker={huntersDao.kicker}
                title={huntersDao.heading}
                align="center"
                tone="dark"
              />
            </div>

            <p className="mx-auto mt-7 max-w-xl leading-relaxed text-bright/70">
              {huntersDao.description}
            </p>

            <a
              href={links.huntersDao}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-bright px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-gold"
            >
              <XIcon className="h-4 w-4" />
              {huntersDao.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}