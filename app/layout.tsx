import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandible Studios",
  description:
    "Mandible Studios is an independent Philadelphia-based team crafting player-first games filled with collaborative storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 text-white antialiased`}
      >
        <Navbar />
        {children}
        <footer className="mt-32 border-t border-white/10 px-6 py-12 text-center text-sm text-white/50 sm:px-10 lg:px-24">
          <p>© {new Date().getFullYear()} Mandible Studios</p>
        </footer>
      </body>
    </html>
  );
}
