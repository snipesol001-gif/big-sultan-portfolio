import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import { about, profile, stats } from "../data/site"

/* ---------------------------------------------------------------------------
 * About: the Sultan behind the mask. Editorial text on the left, a royal
 * identity seal on the right. Personal, not corporate.
 * ------------------------------------------------------------------------- */
export default function About() {
  const joined = stats.find((s) => s.label === "Joined X")?.value ?? ""
  const sealMeta = [
    { label: "NAME", value: profile.name },
    { label: "HANDLE", value: profile.handle },
    { label: "STATUS", value: profile.stamp },
    { label: "JOINED X", value: joined },
  ]

  return (
    <section id="about" className="bg-marble">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">

          {/* Editorial introduction */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading kicker={about.kicker} title={about.heading} />
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 text-xl leading-relaxed text-smoke sm:text-2xl">
                {about.paragraph}
              </p>
              <p className="mt-8 border-l-2 border-gold pl-5 font-display text-lg font-bold leading-relaxed text-ink sm:text-xl">
                {about.mantra}
              </p>
            </Reveal>
          </div>

          {/* Royal identity seal */}
          <Reveal delay={180} className="lg:col-span-5">
            <div className="rounded-3xl bg-card p-6 shadow-emboss sm:p-8">
              <div className="relative rounded-2xl border border-stone/70 px-6 py-10 sm:px-8">
                {/* Architectural corner marks */}
                <span className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-ink/25" aria-hidden="true" />
                <span className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-ink/25" aria-hidden="true" />
                <span className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-ink/25" aria-hidden="true" />
                <span className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-ink/25" aria-hidden="true" />

                <p className="text-center font-display text-4xl font-black tracking-[0.06em] text-ink sm:text-5xl">
                  {profile.brand}
                </p>
                <p className="kicker mt-4 text-center text-gold-deep">{profile.title}</p>

                <dl className="mt-9 space-y-3.5 border-t border-stone/60 pt-7 text-sm">
                  {sealMeta.map((row) => (
                    <div key={row.label} className="flex items-baseline justify-between gap-6">
                      <dt className="kicker text-smoke">{row.label}</dt>
                      <dd className="text-right font-semibold uppercase tracking-wide text-ink">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}