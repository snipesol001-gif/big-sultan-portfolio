import { Send } from "lucide-react"
import XIcon from "./XIcon"
import { isPlaceholder, links, profile } from "../data/site"

/* ---------------------------------------------------------------------------
 * Footer: identity, social links, and a dynamic copyright year.
 * The Telegram item renders as a quiet non-link until a real URL exists.
 * Step 6 tweak: baseline text raised from bright/40 to bright/60 for
 * comfortable contrast on the black surface.
 * ------------------------------------------------------------------------- */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="panel-dark border-t border-bright/10 bg-obsidian">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          {/* Identity */}
          <div>
            <p className="font-display text-2xl font-black tracking-[0.08em] text-bright">
              {profile.name.toUpperCase()}
            </p>
            <p className="kicker mt-2 text-gold">{profile.title}</p>
          </div>

          {/* Social links */}
          <nav aria-label="Social links">
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href={links.x}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-bright/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-bright/80 transition-colors duration-300 hover:border-gold/70 hover:text-gold"
                >
                  <XIcon className="h-3.5 w-3.5" />
                  X
                </a>
              </li>
              <li>
                {isPlaceholder(links.telegram) ? (
                  <span
                    title="Telegram link coming soon"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-bright/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-bright/30"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Telegram
                  </span>
                ) : (
                  <a
                    href={links.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-bright/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-bright/80 transition-colors duration-300 hover:border-gold/70 hover:text-gold"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Telegram
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Baseline */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-bright/10 pt-6 text-[11px] tracking-[0.14em] text-bright/60 sm:flex-row sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="font-display font-bold tracking-[0.24em] text-bright/60">
            {profile.brand}
          </p>
        </div>
      </div>
    </footer>
  )
}