"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname(); // e.g. "/games/elden-ring"

  // Split path into segments
  const segments = pathname.split("/").filter(Boolean); // ["games", "elden-ring"]

  // Build routes dynamically
  const routes = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label =
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "); // Capitalize + clean slug
    return { href, label };
  });

  // Always start with "Home"
  const fullRoutes = [{ href: "/", label: "Home" }, ...routes];

  return (
    <nav className="flex flex-wrap items-center gap-3 text-sm text-white/60">
      {fullRoutes.map((route, index) => (
        <div key={route.href} className="flex items-center gap-3">
          <Link
            href={route.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
          >
            {route.label}
          </Link>

          {index < fullRoutes.length - 1 && (
            <span aria-hidden className="text-white/30">
              /
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
