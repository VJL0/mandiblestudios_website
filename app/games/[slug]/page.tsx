import { notFound } from "next/navigation";
import { games, getGameBySlug } from "@/data/siteData";
import { GamePageContent } from "@/components/GamePageContent";

export function generateStaticParams() {
  return Object.keys(games).map((slug) => ({ slug }));
}

export default async function GamePage(props: PageProps<"/games/[slug]">) {
  const { slug } = await props.params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  return <GamePageContent game={game} />;
}
