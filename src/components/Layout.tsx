"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const root = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const stored = localStorage.getItem("theme");
    const applied = stored ? stored : "system";
    setTheme(applied as typeof theme);

    const applyTheme = () => {
      const effectiveTheme = applied === "system" ? (darkQuery.matches ? "dark" : "light") : applied;
      if (effectiveTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme();
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <main className="px-4 sm:px-6 md:px-8 py-6 sm:py-10 max-w-7xl mx-auto space-y-12 bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      {/* NAVIGATION */}
      <nav className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0 border-b border-[var(--foreground)] pb-4 mb-8">
        <h1 className="text-2xl font-bold text-center sm:text-left">Liberté & Raison</h1>

        <div className="flex flex-wrap justify-center sm:justify-end gap-2 text-sm">
          <Link href="/" className="hover:opacity-80 transition text-[var(--link)]">Accueil</Link>
          <Link href="/mariage" className="hover:opacity-80 transition text-[var(--link)]">Mariage</Link>
          <Link href="/femmes" className="hover:opacity-80 transition text-[var(--link)]">Femmes</Link>
          <Link href="/pedophilie" className="hover:opacity-80 transition text-[var(--link)]">Pédophilie</Link>
          <Link href="/esclavage" className="hover:opacity-80 transition text-[var(--link)]">Esclavage</Link>
          <Link href="/chatiments" className="hover:opacity-80 transition text-[var(--link)]">Châtiments</Link>
          <Link href="/charia" className="hover:opacity-80 transition text-[var(--link)]">Charia</Link>
        </div>

        <button
          onClick={toggleTheme}
          className="text-xs border px-3 py-1 rounded hover:opacity-80 transition whitespace-nowrap"
        >
          {theme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre"}
        </button>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <div className="flex-grow">{children}</div>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-500 pt-12 border-t mt-8">
        <p>
          Ce site est une œuvre critique et humaniste. Il vise à défendre les libertés sans haine,
          et à inviter au débat.
        </p>
        <p className="mt-2">© 2025 – Liberté & Raison</p>
      </footer>
    </main>
  );
}
