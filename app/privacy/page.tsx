export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white sm:px-10 lg:px-24">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy
        </h1>
        <p className="text-lg text-white/75">
          We keep community data simple and respectful. No trackers, no data
          sales—just the basics needed to keep you informed about Mandible
          Studios.
        </p>
        <div className="space-y-4 text-sm text-white/70">
          <p>
            This page will host our detailed privacy policy soon. Until then,
            reach out if you have questions about how we handle information for
            newsletters, playtests, or community channels.
          </p>
          <p>
            Contact:{" "}
            <a
              href="mailto:hello@mandiblestudios.com"
              className="text-white underline underline-offset-4"
            >
              hello@mandiblestudios.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
