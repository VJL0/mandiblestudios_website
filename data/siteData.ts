// src/lib/siteData.ts

export type GameStatus =
  | "in-development"
  | "under-construction"
  | "not-started";

export type Game = {
  slug: string;
  name: string;
  shortTagline: string;
  status: GameStatus;
  description: string;
  heroImage: string;
  genre?: string;
  releaseWindow?: string;
  platforms?: string[];
  features?: string[];
  links?: { label: string; href: string }[];
};

export const games: Record<string, Game> = {
  novarift: {
    slug: "novarift",
    name: "NovaRift",
    shortTagline: "Venture into the unknown.",
    status: "in-development",
    description:
      "NovaRift is a sci-fi action adventure that sends players through unstable rifts to hostile planets scattered across deep space. You’ll explore alien biomes, face shifting enemies, and uncover the truth behind the rift technology that’s tearing the galaxy apart.",
    heroImage: "/novarift/background.png",
    genre: "Sci-fi Action Adventure",
    releaseWindow: "TBD",
    platforms: ["PC", "Steam (planned)", "Console (future)"],
    features: [
      "Explore handcrafted alien planets linked by unstable rifts.",
      "Face adaptive enemy factions that react to your playstyle.",
      "Upgrade experimental gear and harness unstable rift powers.",
      "Uncover a narrative about corporate control and deep-space colonization.",
    ],
    links: [
      { label: "Watch Trailer", href: "/NovaRift" },
      { label: "Join the Newsletter", href: "#" },
    ],
  },

  "project-2": {
    slug: "project-2",
    name: "Project 2",
    shortTagline: "A mystery on the horizon.",
    status: "under-construction",
    description:
      "Project 2 is our next experimental title, currently in early prototyping. We’re exploring ideas around co-op gameplay, expressive movement, and tight moment-to-moment decision making.",
    heroImage: "/BlueprintDraft.jpg",
    genre: "In Exploration",
    releaseWindow: "Early Concept",
    platforms: ["TBD"],
    features: [
      "Focused on player expression and movement.",
      "Built in parallel with NovaRift learnings.",
      "Designed from day one with co-op in mind.",
    ],
  },

  "project-3": {
    slug: "project-3",
    name: "Project 3",
    shortTagline: "Not yet in development.",
    status: "not-started",
    description:
      "Project 3 is a future Mandible Studios title. Right now it lives only in notebooks, whiteboards, and late-night design chats.",
    heroImage: "/ConstructionDraft.jpg",
    genre: "To Be Announced",
    releaseWindow: "Future",
    platforms: ["TBD"],
    features: [
      "Early-stage concept with room to grow.",
      "Built around community feedback and iteration.",
      "Will leverage tools and pipelines refined on NovaRift.",
    ],
  },
};

// Nice helper
export function getGameBySlug(slug: string): Game | undefined {
  return games[slug];
}
