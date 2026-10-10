import { Megaphone, Swords, TrendingUp, Users } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import ServiceCard from "../components/ServiceCard"
import { services, whatIDo } from "../data/site"

/* ---------------------------------------------------------------------------
 * What I Do: four craft cards in an editorial arrangement.
 * Desktop: tall featured card, two standard cards, one wide card.
 * ------------------------------------------------------------------------- */

const icons = [Swords, Megaphone, TrendingUp, Users]
const layouts = [
  "sm:col-span-2 lg:col-span-1 lg:row-span-2", // featured: tall
  "",                                           // standard
  "",                                           // standard
  "sm:col-span-2 lg:col-span-2",                // wide
]

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="bg-marble-deep">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <Reveal>
          <SectionHeading kicker={whatIDo.kicker} title={whatIDo.heading} />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 90}
              className={`h-full ${layouts[index] ?? ""}`.trim()}
            >
              <ServiceCard
                icon={icons[index]}
                number={`0${index + 1}`}
                title={service.title}
                description={service.description}
                variant={index === 0 ? "featured" : index === 3 ? "wide" : "standard"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}