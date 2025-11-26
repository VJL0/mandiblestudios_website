import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles, Circle } from "lucide-react";
import { games } from "@/data/siteData";

const gameList = Object.values(games);

const statusCopy: Record<string, string> = {
  "in-development": "In Development",
  "under-construction": "Under Construction",
  "not-started": "Not Started",
};

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(94,234,212,0.12),transparent_30%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
          <header className="space-y-6">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Mandible Game Lineup
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Built in Philadelphia. Shaped by players everywhere.
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-white/75">
                Explore the projects powering the Mandible universe—from our
                flagship NovaRift to prototypes on the horizon. Wishlist, follow,
                or drop into a playtest to help us build.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {gameList.length} active projects
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <MapPin className="h-4 w-4" />
                Philadelphia, PA
              </span>
              <a
                href="mailto:hello@mandiblestudios.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Contact the team
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Return home
              </Link>
            </div>
          </header>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gameList.map((game) => (
              <article
                key={game.slug}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/25"
              >
                <div className="absolute inset-0 opacity-70">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${game.heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/75 to-slate-950/90" />
                </div>

                <div className="relative z-10 flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1">
                      <Circle className="h-3 w-3 fill-cyan-400/80 text-cyan-200" />
                      {statusCopy[game.status] ?? game.status}
                    </span>
                    {game.releaseWindow && (
                      <span className="rounded-full bg-white/5 px-3 py-1 text-white/70">
                        {game.releaseWindow}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight text-white">
                      {game.name}
                    </h2>
                    <p className="text-sm text-white/80">{game.shortTagline}</p>
                  </div>

                  {game.genre && (
                    <div className="flex flex-wrap gap-2 text-xs text-white/70">
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                        {game.genre}
                      </span>
                    </div>
                  )}

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/75">
                    {game.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 text-xs text-white/70">
                    {game.platforms?.map((platform) => (
                      <span
                        key={`${game.slug}-${platform}`}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/games/${game.slug}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-[1px] hover:bg-white/90"
                  >
                    View game
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
