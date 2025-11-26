import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  FlaskConical,
  Gamepad2,
  MapPin,
  MessageCircle,
  Orbit,
  Play,
  Sparkles,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";
import MandibleWordmark from "@/public/mandible/text.png";
import MandibleLogo from "@/public/mandible/logo.png";
import NovaRiftWordmark from "@/public/novarift/text.png";
import { games } from "@/data/siteData";
import { Socials } from "@/data/constants";

const novaRift = games.novarift;

const philosophy = [
  {
    title: "Player-Focused Design",
    description:
      "Readable controls, tight feel, and accessibility-first thinking so every player can step into the universe.",
    icon: Gamepad2,
  },
  {
    title: "Experimental Mechanics",
    description:
      "We prototype often, remix systems, and keep what surprises us—mechanics that invite curiosity and mastery.",
    icon: FlaskConical,
  },
  {
    title: "Worlds with Depth & Atmosphere",
    description:
      "Moody sci-fi spaces inspired by Philadelphia grit and cosmic wonder, scored and lit to pull you in.",
    icon: Orbit,
  },
];

const socialLinks = [
  ...Socials,
  { name: "Discord", href: "https://discord.gg/mandiblestudios" },
].filter((social) => Boolean(social.href));

const socialIcons: Record<string, ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Youtube: Youtube,
  Discord: MessageCircle,
};

export default function Home() {
  const trailerLink = novaRift?.links?.find(
    (link) =>
      link.label.toLowerCase().includes("trailer") && link.href !== "#",
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mandible/background.jpg')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/80 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,231,183,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.14),transparent_30%)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-28 pt-36 text-center sm:px-10 lg:px-24">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Mandible Studios · Independent
          </div>
          <Image
            src={MandibleWordmark}
            alt="Mandible Studios"
            priority
            className="h-auto w-[320px] max-w-full drop-shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
          />
          <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
            Independent game studio crafting immersive sci-fi experiences.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <MapPin className="h-4 w-4" />
              Philadelphia, PA
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Sparkles className="h-4 w-4" />
              Sci-fi worlds with player-first DNA
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/games/novarift"
              className="inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-8 py-3 text-lg font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-[2px] hover:bg-cyan-500/30"
            >
              Explore NovaRift
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Meet the studio
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Game */}
      <section className="-mt-24 px-6 pb-20 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/50 shadow-2xl">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute inset-0 bg-[url('/novarift/background.png')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
            </div>
            <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.9fr] lg:p-14">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  Our Game
                </div>
                <div className="space-y-3">
                  <Image
                    src={NovaRiftWordmark}
                    alt="NovaRift"
                    className="h-auto w-[240px] max-w-full drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                  />
                  <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Venture into the Unknown.
                  </p>
                  <p className="max-w-2xl text-lg leading-relaxed text-white/80">
                    {novaRift?.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/games/novarift"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-[1px] hover:bg-white/90"
                  >
                    Learn more
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  {trailerLink ? (
                    <a
                      href={trailerLink.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch trailer
                      <Play className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-base font-semibold text-white/70">
                      Watch trailer · coming soon
                    </span>
                  )}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {novaRift?.features?.slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur"
                    >
                      <div className="mt-[2px] h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300" />
                      <p className="leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-slate-900/80 to-slate-900/40 p-5 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100/80">
                    Status
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {novaRift?.status === "in-development"
                      ? "In Development"
                      : "Active"}
                  </p>
                  <p className="text-sm text-white/80">
                    Release: {novaRift?.releaseWindow ?? "TBD"}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {novaRift?.platforms?.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-50"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 backdrop-blur">
                  <p className="text-base font-semibold text-white">
                    Building out the Mandible universe
                  </p>
                  <p className="mt-2 leading-relaxed">
                    NovaRift anchors our slate of projects—an atmospheric pillar
                    that informs every prototype, pipeline decision, and piece
                    of concept art the studio creates.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    <Sparkles className="h-4 w-4" />
                    Narrative-driven sci-fi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Philosophy */}
      <section className="px-6 pb-20 sm:px-10 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
              What We&apos;re Building
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Focused, intentional, cinematic.
            </h2>
            <p className="max-w-2xl text-base text-white/70">
              Three pillars shaping Mandible Studios while NovaRift comes to
              life.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {philosophy.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 pb-20 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:p-12">
            <div className="flex items-start">
              <Image
                src={MandibleLogo}
                alt="Mandible crest"
                className="h-20 w-20"
              />
            </div>
            <div className="space-y-5">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                About Mandible Studios
              </h3>
              <p className="text-lg leading-relaxed text-white/75">
                Mandible Studios is a small, independent team based in
                Philadelphia, PA. We create atmospheric sci-fi games with
                player-first mechanics, transparent development, and a tight
                collective of artists, programmers, and storytellers.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <MapPin className="h-4 w-4" />
                  Philadelphia, PA
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Sparkles className="h-4 w-4" />
                  Team-first collaboration
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Meet the Team
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:hello@mandiblestudios.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="px-6 pb-24 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70 p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                Community
              </p>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                Follow our development and join the journey.
              </h3>
              <p className="text-base text-white/70">
                Devlogs, prototypes, and studio updates—every channel shows a
                different slice of Mandible.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.name] ?? ExternalLink;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/15"
                  >
                    <Icon className="h-4 w-4" />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
