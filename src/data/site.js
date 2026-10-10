/* ---------------------------------------------------------------------------
   BIGSULTAN · central content configuration
   Edit this file to update names, links, and stats across the whole site.
   Components never hardcode these values.
--------------------------------------------------------------------------- */

export const profile = {
  name: "BigSultan",
  handle: "@BigSultan0",
  brand: "$.O.A",                /* navigation wordmark */
  title: "SULTAN OF AFRICA",     /* hero heading */
  tagline: "Degen. KOL. Memelord. Trencher.",
  stamp: "TRENCH OG",
  roles: ["PRO RAIDER", "MARKETER", "GROWTH MANAGER", "KOL"],
}

/* --- Links ------------------------------------------------------------------
   Placeholders ending in _TO_BE_ADDED are detected by isPlaceholder() below;
   buttons using them render disabled instead of linking nowhere.
--------------------------------------------------------------------------- */
export const links = {
  x: "https://x.com/BigSultan0",

  // Replace with the Telegram invite when supplied:
  telegram: "https://t.co/EltQn95aFZ",

  // Replace with the pinned guide URL when supplied (falls back to X for now):
  alphaGuide: "https://x.com/BigSultan0",

  // No official Hunters DAO URL supplied, so it falls back to the X profile:
  huntersDao: "https://x.com/BigSultan0",

  // No verified Royalty Ecosystem URL supplied yet:
  royalty: "ROYALTY_URL_TO_BE_ADDED",
}

export const isPlaceholder = (url) =>
  typeof url === "string" && url.endsWith("_TO_BE_ADDED")

/* --- Profile figures (supplied by the brief; may change over time) -------- */
export const stats = [
  { value: "14.9K+", label: "Followers" },
  { value: "95.2K+", label: "Posts" },
  { value: "MAY 2022", label: "Joined X" },
  { value: "TRENCH OG", label: "Identity" },
]

/* --- Image assets ---------------------------------------------------------- */
export const images = {
  banner: "/images/banner.webp",
  pfp: "/images/pfp.webp",
}

/* --- Section content -------------------------------------------------------- */
export const about = {
  kicker: "IDENTITY",
  heading: "THE SULTAN BEHIND THE MASK",
  paragraph:
    "I'm BigSultan, the Sultan of Africa. Degen by nature, community-minded by choice. I move through the trenches, spot opportunities, help projects get attention, and share alpha for those serious about finding their place in Web3.",
  mantra: "Less noise. More signal. Always watching the trenches.",
}

export const whatIDo = {
  kicker: "THE CRAFT",
  heading: "WHAT I BRING TO THE TRENCHES",
}

export const services = [
  {
    title: "PRO RAIDING",
    description:
      "Helping projects get noticed through coordinated attention, community energy, and trench-native execution.",
  },
  {
    title: "MARKETING",
    description:
      "Putting Web3 projects in front of the right eyes with messaging and promotion built for crypto-native audiences.",
  },
  {
    title: "GROWTH MANAGEMENT",
    description:
      "Supporting community growth, engagement, and visibility through focused growth initiatives.",
  },
  {
    title: "KOL / COMMUNITY BUILDING",
    description:
      "Connecting attention with community, helping projects build momentum across the Web3 trenches.",
  },
]

export const huntersDao = {
  kicker: "FOUNDER OF HUNTERS DAO",
  heading: "BUILT FOR THE HUNT",
  description:
    "Hunters DAO is part of the Sultan's Web3 story. Explore the community and follow the journey through his official channels.",
  cta: "Follow the Journey on X",
}

export const alpha = {
  kicker: "THE ALPHA",
  heading: "ALPHA FOR THE NEXT MOVE",
  published: {
    label: "COMMUNITY ALPHA",
    title: "HOW TO GET NOTICED IN WEB3",
    description:
      "Want to break into Web3? Learn how to approach projects, show your value, and position yourself for opportunities in the trenches.",
    cta: "Read the Guide on X",
  },
  upcoming: {
    label: "UPCOMING ALPHA",
    title: "HOW TO POSITION FOR WEB3 ROLES",
    description:
      "More alpha on positioning yourself for Web3 opportunities is on the way.",
  },
}

export const royalty = {
  kicker: "ECOSYSTEM SPOTLIGHT",
  heading: "IN THE WEB3 ECOSYSTEM",
  cardLabel: "SPOTLIGHT",
  name: "ROYALTY ECOSYSTEM",
  description:
    "An ecosystem spotlight for builders, creators, marketers, and developers exploring community, opportunities, bounties, and alpha in Web3.",
  tag: "2,500-NFT COMMUNITY",
  focusLabel: "IN THE ECOSYSTEM",
  focus: ["COMMUNITY", "JOBS", "BOUNTIES", "ALPHA"],
}

/* --- Navigation ------------------------------------------------------------- */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Hunters DAO", href: "#hunters-dao" },
  { label: "The Alpha", href: "#alpha" },
  { label: "Contact", href: "#contact" },
]

/* --- Contact ---------------------------------------------------------------- */
export const contact = {
  kicker: "JOIN THE TRENCHES",
  heading: "THE TRENCHES ARE CALLING",
  copy: "Got a project to push, a community to grow, or alpha worth sharing? Find the Sultan where the trenches never sleep.",
}