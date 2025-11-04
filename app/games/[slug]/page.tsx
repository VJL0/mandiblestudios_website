import Link from "next/link";
import { notFound } from "next/navigation";
import { GameDetail } from "@/components/GameDetail";
import { games, getGameBySlug } from "@/data/games";
import Nav from "@/components/Nav";

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default async function GamePage(props: PageProps<"/games/[slug]">) {
  const { slug } = await props.params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 pb-24 pt-32 text-white sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <Nav />
        <GameDetail game={game} />
      </div>
    </main>
  );
}
