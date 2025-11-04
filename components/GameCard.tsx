import Link from "next/link";
import type { Game } from "@/data/games";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(18,18,20,0.9), ${game.accentColor}20)`,
      }}
    >
      <div className="flex flex-1 flex-col gap-6 p-8">
        <div className="flex items-center justify-between text-sm uppercase tracking-wide text-white/70">
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tracking-tight">
            {game.status}
          </span>
          <span className="flex items-center gap-2 text-white/60">
            {game.platforms.slice(0, 2).join(" • ")}
            {game.platforms.length > 2 && <span>+{game.platforms.length - 2}</span>}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {game.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/80">
            {game.shortPitch}
          </p>
        </div>
        <div className="mt-auto space-y-3 text-sm text-white/60">
          <div className="flex flex-wrap gap-2">
            {game.genres.map((genre) => (
              <span
                key={`${game.slug}-${genre}`}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {genre}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 font-semibold text-white">
            Explore game
            <svg
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
