// src/components/GamePageContent.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Game, GameStatus } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ExternalLink, Monitor } from "lucide-react";

type GamePageContentProps = {
  game: Game;
};

const statusConfig: Record<GameStatus, { label: string; className: string }> = {
  "in-development": {
    label: "In Development",
    className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  },
  "under-construction": {
    label: "Under Construction",
    className: "bg-amber-500/15 text-amber-300 border-amber-500/40",
  },
  "not-started": {
    label: "Not Started",
    className: "bg-slate-500/15 text-slate-300 border-slate-500/40",
  },
};

export function GamePageContent({ game }: GamePageContentProps) {
  const status = statusConfig[game.status];

  return (
    <div className="space-y-10 pb-16">
      {/* HERO / FRONT */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Centered image with fade edges */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={game.heroImage}
            alt={game.name}
            fill
            priority
            className="[mask-image:radial-gradient(circle,white_60%,transparent_100%)] object-contain object-center"
          />
        </div>

        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Centered text */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Badge
            variant="outline"
            className={`mb-4 border text-xs tracking-wide uppercase ${status.className}`}
          >
            {status.label}
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-xl">
            {game.name}
          </h1>

          <p className="mt-4 max-w-xl text-lg text-slate-200 drop-shadow-lg">
            {game.shortTagline}
          </p>

          {game.links && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {game.links.map((link) => (
                <Button key={link.href} asChild className="rounded-full px-5">
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 md:flex-row md:px-0">
        {/* Left: description & features */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50">
              Overview
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200/90 md:text-base">
              {game.description}
            </p>
          </div>

          {game.features && game.features.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
                Key Features
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200/95">
                {game.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 rounded-xl bg-slate-900/60 px-4 py-2.5"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: meta card */}
        <aside className="w-full max-w-sm md:w-72">
          <Card className="border-slate-800/80 bg-slate-950/70 backdrop-blur">
            <CardContent className="space-y-4 pt-5 text-sm text-slate-200/95">
              {game.genre && (
                <div>
                  <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                    Genre
                  </p>
                  <p className="mt-1 text-sm">{game.genre}</p>
                </div>
              )}

              {game.releaseWindow && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                      Release Window
                    </p>
                    <p className="mt-0.5 text-sm">{game.releaseWindow}</p>
                  </div>
                </div>
              )}

              {game.platforms && game.platforms.length > 0 && (
                <div className="flex gap-2">
                  <Monitor className="mt-1 h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                      Platforms
                    </p>
                    <ul className="mt-1 space-y-0.5">
                      {game.platforms.map((platform) => (
                        <li key={platform}>{platform}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </aside>
      </section>
    </div>
  );
}
