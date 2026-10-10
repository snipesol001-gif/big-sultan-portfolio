import { useEffect, useRef } from "react"
import { ArrowUpRight, Send } from "lucide-react"
import XIcon from "../components/XIcon"
import { images, isPlaceholder, links, profile } from "../data/site"

export default function Hero() {
  const parallaxRef = useRef(null)

  /* Slight parallax on large screens only, never for reduced-motion users */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    const large = window.matchMedia("(min-width: 1024px)")
    if (reduce.matches || !large.matches) return

    let raf = null

    const update = () => {
      if (parallaxRef.current) {
        const y = Math.min(window.scrollY * 0.05, 44)
        parallaxRef.current.style.transform = `translateY(${y}px)`
      }
      raf = null
    }

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf !== null) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden bg-marble">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-20 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">

          {/* Identity column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 animate-fade-rise">
              <p className="kicker text-gold-deep">Founder of Hunters DAO</p>
              <span className="-rotate-6 rounded-md border border-ink/30 px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-ink">
                {profile.stamp}
              </span>
            </div>

            <h1 className="mt-8 font-display font-black leading-[0.95] text-ink animate-fade-rise [animation-delay:120ms]">
              <span className="block text-5xl sm:text-7xl lg:text-8xl">SULTAN</span>
              <span className="mt-3 flex items-baseline gap-3 text-3xl sm:text-5xl lg:text-6xl">
                <span className="text-lg text-gold-deep sm:text-2xl">OF</span>
                <span>AFRICA</span>
              </span>
            </h1>

            <p className="mt-8 text-base font-medium tracking-wide text-ink animate-fade-rise [animation-delay:240ms] sm:text-lg">
              {profile.tagline}
            </p>

            <ul
              className="mt-8 flex flex-wrap gap-3 animate-fade-rise [animation-delay:360ms]"
              aria-label="Roles"
            >
              {profile.roles.map((role) => (
                <li key={role}>
                  <span className="inline-block rounded-full bg-card px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-ink shadow-emboss-sm transition-shadow duration-300 hover:ring-1 hover:ring-gold">
                    {role}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-rise [animation-delay:480ms]">
              <a
                href={links.x}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-bright transition-colors duration-300 hover:bg-gold hover:text-ink"
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
                  className="inline-flex items-center gap-2.5 rounded-full bg-bright px-7 py-3.5 text-sm font-semibold text-smoke shadow-emboss-sm disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  Join the Telegram
                </button>
              ) : (
                <a
                  href={links.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-bright px-7 py-3.5 text-sm font-semibold text-smoke shadow-emboss-sm transition-colors duration-300 hover:text-ink"
                >
                  <Send className="h-4 w-4" />
                  Join the Telegram
                </a>
              )}
            </div>
          </div>

          {/* Portrait column: round profile picture */}
          <div className="lg:col-span-5">
            <div ref={parallaxRef} className="mx-auto w-64 sm:w-72 lg:w-full lg:max-w-sm">
              <div className="relative animate-fade-rise [animation-delay:200ms]">
                {/* Gold light behind the portrait */}
                <div
                  className="absolute -inset-10 rounded-full bg-gold/20 blur-3xl animate-gold-breathe"
                  aria-hidden="true"
                />

                {/* Offset ring */}
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border border-stone"
                  aria-hidden="true"
                />

                {/* Round frame with a gentle float */}
                <div className="relative aspect-square overflow-hidden rounded-full bg-card shadow-emboss ring-4 ring-bright animate-float">
                <img
                src={images.pfp}
                fetchPriority="high"
                alt="BigSultan, the Sultan of Africa: a masked figure in a white hood with glowing yellow eyes and crypto medallions"
                className="h-full w-full scale-[1.08] object-cover origin-[50%_70%]"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner: shown in full, inside a soft glass frame with blurred fade edges */}
      <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/40 p-2 shadow-emboss backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img
            src={images.banner}
            loading="lazy"
            alt="Sultan of Africa banner: Founder of Hunters DAO, Pro Raider, Marketer, Growth Manager, KOL"
            className="aspect-[3/1] w-full object-cover"
            />

            {/* Soft frosted fade at the top edge */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-marble/70 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"
              aria-hidden="true"
            />
            {/* Soft frosted fade at the bottom edge */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-marble/70 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}