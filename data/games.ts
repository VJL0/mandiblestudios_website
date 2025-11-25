export type Platform =
  | "Windows"
  | "macOS"
  | "Linux"
  | "Steam Deck"
  | "Nintendo Switch"
  | "PlayStation"
  | "Xbox";

export type Game = {
  slug: string;
  title: string;
  shortPitch: string;
  overview: string;
  status: "Prototype" | "In Development" | "Early Access";
  releaseWindow: string;
  heroImage: string;
  accentColor: string;
  genres: string[];
  platforms: Platform[];
  features: string[];
  focusPoints: {
    label: string;
    description: string;
  }[];
  teamNotes: string;
  gallery: {
    image: string;
    caption: string;
  }[];
  storeLinks: {
    label: string;
    url: string;
  }[];
};

export const games: Game[] = [
  {
    slug: "duskhaven-bay",
    title: "Duskhaven Bay",
    shortPitch:
      "An atmospheric detective adventure set across a flooded Philadelphia.",
    overview:
      "Navigate the tangle of half-submerged rowhomes and neon-soaked piers as you piece together a mystery threatening the last safe harbor on the Eastern Seaboard. Duskhaven Bay blends tactile point-and-click exploration with immersive sim systems, letting players solve cases their own way.",
    status: "In Development",
    releaseWindow: "Targeting Q2 2026",
    heroImage: "/games/duskhaven-bay/hero.svg",
    accentColor: "#4c5b9b",
    genres: ["Adventure", "Immersive Sim", "Mystery"],
    platforms: ["Windows", "Steam Deck", "PlayStation", "Xbox"],
    features: [
      "Branching investigations that respond to your deductions",
      "Analog-inspired UI with diegetic case files you assemble yourself",
      "Dynamic weather and tides reshaping the city each in-game day",
    ],
    focusPoints: [
      {
        label: "Investigate Your Way",
        description:
          "Interview survivors, bribe dockworkers, or dive into the ruins—each approach reveals new leads and consequences.",
      },
      {
        label: "Living Harbor",
        description:
          "A day-night cycle and shifting tides unlock hidden routes, expose evidence, and change how locals react.",
      },
      {
        label: "Cooperative Case Board",
        description:
          "Optional online drop-in lets a second player help tag clues and connect red-string notes in real-time.",
      },
    ],
    teamNotes:
      "Duskhaven Bay started as a capstone project exploring systemic storytelling. The team is doubling down on tactile investigation so every solved case feels personal.",
    gallery: [
      {
        image: "/games/duskhaven-bay/gallery-docks.svg",
        caption: "Neon-lit markets crowd the elevated boardwalks at dusk.",
      },
      {
        image: "/games/duskhaven-bay/gallery-caseboard.svg",
        caption:
          "Piece together suspects and motives on your evolving caseboard.",
      },
      {
        image: "/games/duskhaven-bay/gallery-diving.svg",
        caption:
          "Use salvaged tech to dive beneath the waves and uncover lost clues.",
      },
    ],
    storeLinks: [
      { label: "Wishlist on Steam", url: "https://store.steampowered.com/" },
      { label: "Join Discord", url: "https://discord.gg/mandiblestudios" },
    ],
  },
  {
    slug: "signalglow",
    title: "Signalglow",
    shortPitch:
      "A synth-powered twin-stick roguelike where you remix the battlefield.",
    overview:
      "Channel unstable broadcast towers to remix enemy patterns, soundtrack layers, and your own abilities. Signalglow is a high-energy roguelike that rewards fast thinking and rhythm-aware playstyles.",
    status: "Prototype",
    releaseWindow: "Vertical slice in progress",
    heroImage: "/games/signalglow/hero.svg",
    accentColor: "#f26d9f",
    genres: ["Roguelike", "Twin-Stick Shooter", "Music"],
    platforms: ["Windows", "Steam Deck"],
    features: [
      "Reactive synthwave soundtrack that evolves with your build",
      "Modular arenas that rewire mid-run, forcing quick adaptation",
      "Collectible signal mods to break enemy wave logic",
    ],
    focusPoints: [
      {
        label: "Remix Combat",
        description:
          "Trigger 'signal sweeps' to scramble enemy AI patterns or layer new rhythms into the soundtrack for bonus damage.",
      },
      {
        label: "Build the Broadcast",
        description:
          "Each run expands your tower network, unlocking new contracts and remixed arenas.",
      },
      {
        label: "Soundtrack You Sculpt",
        description:
          "Every modulation you unlock is a music stem you can export and share.",
      },
    ],
    teamNotes:
      "Signalglow grew out of a global game jam concept. The team is partnering with local musicians to craft the soundtrack library players reassemble mid-run.",
    gallery: [
      {
        image: "/games/signalglow/gallery-arena.svg",
        caption: "Stack signal towers to chain massive lens flares.",
      },
      {
        image: "/games/signalglow/gallery-boss.svg",
        caption:
          "Face off against glitching broadcast bosses in arena finales.",
      },
    ],
    storeLinks: [
      {
        label: "Follow Devlog",
        url: "https://mandiblestudios.example.com/signalglow",
      },
    ],
  },
  {
    slug: "comfort-food",
    title: "Comfort Food",
    shortPitch:
      "A cozy narrative management sim where sharing recipes heals a community.",
    overview:
      "Reopen a beloved South Philly corner diner, rebuild relationships with regulars, and cook through memories that change the neighborhood. Comfort Food blends time management with branching visual novel storytelling.",
    status: "Early Access",
    releaseWindow: "Early Access now available",
    heroImage: "/games/comfort-food/hero.svg",
    accentColor: "#f5a35a",
    genres: ["Simulation", "Narrative", "Cozy"],
    platforms: ["Windows", "macOS", "Nintendo Switch"],
    features: [
      "Meaningful dialogue choices shape how guests open up to you",
      "Seasonal menus with minigames tuned for controller or touch",
      "Community projects unlock new recipes and diner upgrades",
    ],
    focusPoints: [
      {
        label: "Serve Stories",
        description:
          "Each dish is tied to a character arc; timing your service unlocks deeper conversations.",
      },
      {
        label: "Neighborhood Growth",
        description:
          "Collaborate with local artists and gardeners to transform the diner interior.",
      },
      {
        label: "Play How You Cook",
        description:
          "Accessibility-first design offers relaxed and challenge modes, plus fully remappable controls.",
      },
    ],
    teamNotes:
      "Comfort Food began as a student collaboration exploring food as a storytelling medium. The Early Access roadmap focuses on expanding seasonal events and accessibility options.",
    gallery: [
      {
        image: "/games/comfort-food/gallery-diner.svg",
        caption: "Customize booths, decor, and lighting to set the diner vibe.",
      },
      {
        image: "/games/comfort-food/gallery-service.svg",
        caption:
          "Balance orders while keeping heartfelt conversations flowing.",
      },
      {
        image: "/games/comfort-food/gallery-garden.svg",
        caption: "Grow rooftop herbs to unlock seasonal specials.",
      },
    ],
    storeLinks: [
      { label: "Steam Early Access", url: "https://store.steampowered.com/" },
      { label: "Press Kit", url: "https://mandiblestudios.example.com/press" },
    ],
  },
];

export const getGameBySlug = (slug: string) => {
  return games.find((game) => game.slug === slug);
};
