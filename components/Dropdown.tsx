import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

function Item() {}

export default function Dropdown({ label, items }: DropdownProps) {
  return (
    <div className="group relative inline-block">
      {/* Trigger */}
      <button className="inline-flex items-center justify-between gap-1 rounded-xl px-4 py-2 hover:bg-white/10">
        {label}
        <ChevronDown className="size-4 opacity-80 transition group-hover:rotate-180" />
      </button>

      {/* Menu */}
      <div className="absolute hidden h-20 w-48 pt-2 group-focus-within:block group-hover:block">
        <ul className="absolute left-0 mt-0 w-48 flex-col rounded-xl border border-white/10 bg-slate-900 p-1.5 shadow-lg">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
