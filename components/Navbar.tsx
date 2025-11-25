"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Divide, Ellipsis, User2 } from "lucide-react";
import MandibleLogo from "@/public/mandible/logo.png";
import MandibleText from "@/public/mandible/text.png";
import Dropdown from "./Dropdown";

interface NavItem {
  label: string;
  href: string;
}

const MENUS = [
  {
    label: "NovaRift",
    href: "/novarift",
    items: [
      { label: "News", href: "/novarift#news" },
      { label: "Plan", href: "/novarift#plan" },
    ],
  },
];

function NavItem({ label, href }: NavItem) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-4 py-2 text-2xl font-bold text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white"
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center">
      <nav className="flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-4 md:px-4">
        {/* Left: Brand */}
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex">
            <Image
              src={MandibleLogo}
              alt="Logo"
              className="h-16 w-16 p-1 md:hidden"
            />
            <Image
              src={MandibleText}
              alt="Mandible Studios"
              className="hidden h-8 w-auto md:block"
            />
          </Link>
        </div>

        {/* Center: Primary menu (desktop) */}
        <div className="hidden items-center md:flex">
          {MENUS.map((m) => (
            <Dropdown key={m.label} label={m.label} items={m.items} />
          ))}
        </div>

        {/* Right */}
        <div className="hidden gap-2 md:flex">
          <NavItem label="View Games" href="/games" />
          <NavItem label="About" href="/about" />
        </div>
        {/* Mobile trigger */}
        <MobileView />
        <MobileMenu />
      </nav>
    </div>
  );
}

function MobileView() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      <label
        htmlFor="menu-toggle"
        className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
      >
        <Ellipsis className="h-5 w-5" />
        Menu
      </label>

      <div className="hidden peer-checked:block">
        {/* Dropdown content appears here when checked */}
        <div className="mt-2 rounded-lg border border-white/10 bg-slate-900 p-2">
          <a
            href="/about"
            className="block rounded-md px-3 py-2 hover:bg-white/10"
          >
            About
          </a>
          <a
            href="/contact"
            className="block rounded-md px-3 py-2 hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <Ellipsis className="h-5 w-5" />
        Menu
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute top-16 right-0 left-0 mx-3 rounded-2xl border border-white/10 bg-slate-900/95 p-3 backdrop-blur"
        >
          <ul className="grid gap-1">
            {MENUS.map((m) =>
              m.items ? (
                <li key={m.label} className="rounded-xl bg-white/5">
                  <details>
                    <summary className="cursor-pointer list-none rounded-xl px-3 py-2 font-semibold text-white/90 hover:bg-white/10">
                      {m.label}
                    </summary>
                    <ul className="p-1">
                      {m.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            className="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10"
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={m.label}>
                  <Link
                    href={m.href || "#"}
                    className="block rounded-xl px-3 py-2 font-semibold text-white/90 hover:bg-white/10"
                  >
                    {m.label}
                  </Link>
                </li>
              ),
            )}
            <li className="mt-1 flex gap-2">
              <Link
                href="/account"
                className="flex-1 rounded-xl bg-white/5 px-3 py-2 text-center font-semibold text-white/90 hover:bg-white/10"
              >
                Account
              </Link>
              <Link
                href="/download"
                className="flex-1 rounded-xl bg-sky-500 px-3 py-2 text-center font-semibold text-slate-950 hover:bg-sky-400"
              >
                Download
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
