import { useCallback, useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import MobileMenu from "./MobileMenu"
import XIcon from "./XIcon"
import { links, navLinks, profile } from "../data/site"

/* ---------------------------------------------------------------------------
 * Navbar: fixed top bar. Transparent over the hero, then picks up a soft
 * marble surface (plus a gentle blur) once the page scrolls.
 * ------------------------------------------------------------------------- */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)

  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-marble/90 shadow-emboss-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">

        {/* Brand wordmark: links back to the top */}
        <a
          href="#top"
          aria-label="BigSultan, back to top"
          className="font-display text-xl font-bold tracking-[0.08em] text-ink"
        >
          {profile.brand}
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-smoke transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:content-[''] after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Prominent follow action */}
          <a
            href={links.x}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bright transition-colors duration-300 hover:bg-gold hover:text-ink sm:inline-flex"
          >
            <XIcon className="h-4 w-4" />
            Follow on X
          </a>

          {/* Mobile menu toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-bright text-ink shadow-emboss-sm transition-colors duration-300 hover:text-gold-deep lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Collapsible mobile panel */}
      {open && <MobileMenu onClose={closeMenu} toggleRef={toggleRef} />}
    </header>
  )
}