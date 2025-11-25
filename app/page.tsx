import Link from "next/link";
import { GameCard } from "@/components/GameCard";
import { games } from "@/data/games";
import Image from "next/image";
import BackgroundImage from "@/public/mandible/background.jpg";
import Navbar from "@/components/Navbar";

const featuredGames = games.slice(0, 3);

export default function Home() {
  return (
    <main>
      heklsdkmdskjfsdk
      {/* <Navbar /> */}
      {/* <Image src={BackgroundImage} alt="Picture of the background" /> */}
    </main>
  );
}

const possible = () => {
  return (
    <div>
      <main className="min-h-screen bg-zinc-950 px-6 pb-24 pt-32 text-white sm:px-10 lg:px-24">
        <Image src={BackgroundImage} alt="Picture of the background" />
        <div className="mx-auto flex max-w-6xl flex-col gap-24">
          <section className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Mandible Studios · Philadelphia, PA
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Worlds built by the player, made for the player.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-white/80">
                  We&apos;re a collective of students, developers, and creators
                  crafting games that invite you in on your terms. Growth,
                  collaboration, and creativity guide everything we make.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link
                  href="/games"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:bg-white/90"
                >
                  Browse our games
                  <svg
                    aria-hidden
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="m7 7 10 10" />
                    <path d="M7 17V7h10" />
                  </svg>
                </Link>
                <a
                  href="https://discord.gg/mandiblestudios"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the community
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]">
              <div className="rounded-3xl bg-zinc-950 p-10">
                <div className="space-y-4 text-sm text-white/70">
                  <p>
                    Mandible is early in development, but we&apos;re already
                    carving out worlds full of stories worth exploring. Every
                    prototype is a promise to the players who will one day call
                    it home.
                  </p>
                  <p>
                    We iterate openly, we share what we learn, and we build
                    alongside the community. Every step forward counts.
                  </p>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.4em] text-white/60">
                    Currently exploring: systemic storytelling · music-driven
                    combat · cozy community spaces
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold">Spotlight Projects</h2>
                <p className="mt-2 text-base text-white/70">
                  A snapshot of what we&apos;re building. Dive deeper to see how
                  each game is evolving.
                </p>
              </div>
              <Link
                href="/games"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View full lineup
                <svg
                  aria-hidden
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredGames.map((game) => (
                <GameCard key={game.slug} game={game} />
              ))}
            </div>
          </section>

          <section className="grid gap-10 rounded-3xl border border-white/10 bg-zinc-950/60 p-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Player-centered design</h2>
              <p className="text-white/70">
                We look at every mechanic through the lens of playability,
                accessibility, and feel. From controller-first UI to
                collaborative case boards, we build tools that invite you in.
              </p>
              <p className="text-white/70">
                Our pipeline is transparent. We share prototypes, host
                playtests, and bring in new voices from the Philadelphia
                community as often as we can.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-white/60">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold uppercase tracking-[0.2em] text-white/80">
                  Collaboration
                </p>
                <p className="mt-2 leading-relaxed">
                  Cross-discipline pods iterate fast—design, art, sound, and
                  engineering move forward together.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold uppercase tracking-[0.2em] text-white/80">
                  Growth
                </p>
                <p className="mt-2 leading-relaxed">
                  We mentor students and emerging devs, creating space to learn
                  while shipping meaningful work.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold uppercase tracking-[0.2em] text-white/80">
                  Creativity
                </p>
                <p className="mt-2 leading-relaxed">
                  Ideas come from everywhere—game jams, local showcases, late
                  night whiteboards.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
