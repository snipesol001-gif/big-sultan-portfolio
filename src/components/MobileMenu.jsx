import { useEffect, useRef } from "react"
import XIcon from "./XIcon"
import { links, navLinks } from "../data/site"

/* ---------------------------------------------------------------------------
 * MobileMenu: collapsible panel under the navbar.
 * Accessible disclosure pattern: Escape closes and returns focus to the
 * toggle, links close the panel, page scroll locks while it is open.
 * Step 6 addition: closing automatically when the viewport grows to desktop
 * width, so the scroll lock and focus never get stranded on a hidden panel.
 * ------------------------------------------------------------------------- */
export default function MobileMenu({ onClose, toggleRef }) {
  const firstLinkRef = useRef(null)

  useEffect(() => {
    firstLinkRef.current?.focus()

    const onKey = (e) => {
      if (e.key === "Escape") {
        toggleRef?.current?.focus()
        onClose()
      }
    }

    // Close when the window crosses into desktop width
    const desktop = window.matchMedia("(min-width: 1024px)")
    const onDesktop = (e) => {
      if (e.matches) onClose()
    }

    document.addEventListener("keydown", onKey)
    desktop.addEventListener("change", onDesktop)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      desktop.removeEventListener("change", onDesktop)
      document.body.style.overflow = ""
    }
  }, [onClose, toggleRef])

  return (
    <nav
      id="mobile-menu"
      aria-label="Mobile"
      className="animate-fade-rise border-t border-stone/60 bg-marble/95 px-6 pb-8 pt-2 backdrop-blur-md lg:hidden"
    >
      <ul>
        {navLinks.map((link, index) => (
          <li key={link.href} className="border-b border-stone/50 last:border-b-0">
            <a
              ref={index === 0 ? firstLinkRef : undefined}
              href={link.href}
              onClick={onClose}
              className="block py-4 text-base font-medium text-ink transition-colors duration-200 hover:text-gold-deep"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={links.x}
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-bright transition-colors duration-300 hover:bg-gold hover:text-ink"
      >
        <XIcon className="h-4 w-4" />
        Follow on X
      </a>
    </nav>
  )
}