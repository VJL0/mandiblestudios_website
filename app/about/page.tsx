// app/about/page.tsx
import { Team } from "@/data/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto mt-16 w-full max-w-6xl px-6 pb-24">
      {/* HEADER */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Meet the Team
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Mandible Studios is powered by passionate creators, developers, and
          artists dedicated to pushing boundaries with every project.
        </p>
      </section>

      {/* TEAM GROUPS */}
      <div className="space-y-16">
        {Team.map((group) => (
          <section key={group.group}>
            <h2 className="mb-6 text-2xl font-semibold tracking-wide text-slate-100">
              {group.group}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {group.members.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

// COMPONENT — Member Card
function MemberCard({ member }: any) {
  const { name, role, imageUrl, socialHref } = member;

  // Choose icon based on link
  const Icon = socialHref?.includes("linkedin")
    ? Linkedin
    : socialHref?.includes("github")
      ? Github
      : Globe;

  return (
    <Card className="group border-slate-800/70 bg-slate-950/60 backdrop-blur transition hover:bg-slate-900/60">
      <CardContent className="flex flex-col items-center py-6 text-center">
        {/* Avatar */}
        <Avatar className="mb-4 h-20 w-20 ring-2 ring-slate-800">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback className="bg-slate-800 text-slate-300">
            {name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        {/* Name */}
        <h3 className="text-lg font-semibold text-white">{name}</h3>

        {/* Role */}
        <p className="mt-1 text-sm text-slate-400">{role}</p>

        {/* Social */}
        {socialHref && (
          <Link
            href={socialHref}
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 text-sm text-sky-400 transition hover:text-sky-300"
          >
            <Icon className="h-4 w-4" />
            View Profile
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
