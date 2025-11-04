import Image from "next/image";
import type { Game } from "@/data/games";

type GameDetailProps = {
  game: Game;
};

export function GameDetail({ game }: GameDetailProps) {
  return (
    <div className="flex flex-col gap-16">
      <section
        className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 text-white shadow-xl"
        style={{
          backgroundImage: `linear-gradient(135deg, ${game.accentColor}44, rgba(12,12,14,0.9))`,
        }}
      >
        <div className="grid gap-12 p-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              {game.status}
              <span className="inline-block h-1 w-1 rounded-full bg-white/60" />
              {game.releaseWindow}
            </span>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {game.title}
              </h1>
              <p className="text-xl text-white/80">{game.shortPitch}</p>
            </div>
            <p className="text-lg leading-relaxed text-white/70">
              {game.overview}
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              {game.platforms.map((platform) => (
                <span
                  key={`${game.slug}-${platform}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {platform}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/60">
              {game.storeLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <svg
                    aria-hidden
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black/40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(160deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))`,
              }}
            />
            <Image
              src={game.heroImage}
              alt={`${game.title} key art`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Pillars</h2>
          <p className="text-base leading-relaxed text-white/70">
            {game.teamNotes}
          </p>
          <div className="grid gap-4">
            {game.focusPoints.map((point) => (
              <article
                key={`${game.slug}-${point.label}`}
                className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 text-white shadow-sm"
              >
                <h3 className="text-lg font-semibold">{point.label}</h3>
                <p className="mt-2 text-sm text-white/70">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Feature Snapshot</h2>
          <ul className="space-y-4 text-white/80">
            {game.features.map((feature) => (
              <li
                key={`${game.slug}-${feature}`}
                className="flex items-start gap-3 rounded-3xl border border-white/10 bg-zinc-900/60 p-5"
              >
                <span className="mt-1 inline-flex size-2 rounded-full bg-white/60" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {game.gallery.map((entry) => (
            <figure
              key={`${game.slug}-${entry.image}`}
              className="space-y-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/40">
                <Image
                  src={entry.image}
                  alt={entry.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="text-sm text-white/70">
                {entry.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
