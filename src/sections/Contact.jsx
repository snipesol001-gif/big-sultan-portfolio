import { ArrowUpRight, Crown, Send } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import XIcon from "../components/XIcon"
import { contact, isPlaceholder, links } from "../data/site"

/* ---------------------------------------------------------------------------
 * Contact: the dark finale. Deep black, white royal typography, a restrained
 * gold glow, and the two calls to action.
 * ------------------------------------------------------------------------- */
export default function Contact() {
  return (
    <section id="contact" className="panel-dark relative overflow-hidden bg-obsidian">
      {/* Soft gold light along the top edge */}
      <div
        className="absolute left-1/2 top-0 h-72 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl animate-gold-breathe"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Crown className="mx-auto h-7 w-7 text-gold" strokeWidth={1.5} aria-hidden="true" />

          <div className="mt-6">
            <SectionHeading
              kicker={contact.kicker}
              title={contact.heading}
              align="center"
              tone="dark"
            />
          </div>

          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-bright/70">
            {contact.copy}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={links.x}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-bright px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-gold"
            >
              <XIcon className="h-4 w-4" />
              Follow on X
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {isPlaceholder(links.telegram) ? (
              <button
                type="button"
                disabled
                title="Telegram link coming soon"
                className="inline-flex items-center gap-2.5 rounded-full border border-bright/25 px-7 py-3.5 text-sm font-semibold text-bright/70 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                Join the Telegram
              </button>
            ) : (
              <a
                href={links.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-bright/25 px-7 py-3.5 text-sm font-semibold text-bright/80 transition-colors duration-300 hover:border-gold/70 hover:text-gold"
              >
                <Send className="h-4 w-4" />
                Join the Telegram
              </a>
            )}
          </div>

          {/* Closing ornament */}
          <div className="mt-14 flex items-center justify-center gap-4" aria-hidden="true">
            <span className="h-px w-16 bg-bright/15" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
            <span className="h-px w-16 bg-bright/15" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}