import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import WhatIDo from "./sections/WhatIDo"
import HuntersDAO from "./sections/HuntersDAO"
import Alpha from "./sections/Alpha"
import FeaturedCollab from "./sections/FeaturedCollab"
import Stats from "./sections/Stats"
import Contact from "./sections/Contact"

/* ---------------------------------------------------------------------------
 * App: skip link, navbar, all eight sections in order, footer.
 * ------------------------------------------------------------------------- */
export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-bright"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <WhatIDo />
        <HuntersDAO />
        <Alpha />
        <FeaturedCollab />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </>
  )
}