import Image from "next/image";
import { Team } from "@/data/constants";

export default function TeamGrid() {
  return (
    <section className="space-y-12">
      {Team.map((group) => (
        <div key={group.group}>
          <h2 className="mb-6 text-2xl font-bold text-white">{group.group}</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {group.members.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-lg backdrop-blur transition hover:bg-white/10"
              >
                {m.imageUrl && (
                  <Image
                    src={m.imageUrl}
                    alt={m.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-xl object-cover"
                  />
                )}
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {m.name}
                </h3>
                <p className="text-sm text-white/60">{m.role}</p>
                {m.socialHref && (
                  <a
                    href={m.socialHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sky-400 hover:text-sky-300"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
