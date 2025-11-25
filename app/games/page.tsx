import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 pb-24 pt-32 text-white sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <header className="space-y-6">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Mandible Game Lineup
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Built in Philadelphia. Shaped by players everywhere.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              Explore in-progress prototypes, near-term releases, and experiments
              from the Mandible Studios collective. Every project grows with your
              feedback—jump in, wishlist, or join a playtest.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              {games.length} active projects
            </div>
            <a
              href="mailto:hello@mandiblestudios.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
            >
              Contact the team
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
            >
              Return home
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </section>
      </div>
    </main>
  );
}
