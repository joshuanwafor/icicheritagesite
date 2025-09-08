export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-6 sm:p-10 brand-gradient">
      <div className="text-center max-w-3xl">
        <h1 className="font-[var(--font-display)] text-4xl sm:text-6xl tracking-tight">
          ICICHeritage
        </h1>
        <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70">
          A luxury home décor brand
        </p>
        <div className="mt-8 inline-block px-6 py-3 rounded-full border border-[color:var(--accent)] text-sm sm:text-base">
          Coming soon
        </div>
        <p className="mt-8 text-xs sm:text-sm text-black/50 dark:text-white/50">
          For inquiries: <a href="mailto:hello@icicheritageltd.com" className="underline accent-underline">hello@icicheritageltd.com</a>
        </p>
      </div>
    </main>
  );
}
