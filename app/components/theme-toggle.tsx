"use client";

import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "mungharise-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const shouldUseDark = storedTheme === "dark";

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("theme-dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("theme-dark", nextIsDark);
    localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 items-center justify-center rounded-full border border-brand-purple/30 px-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-purple transition hover:border-brand-purple hover:bg-brand-purple/8"
      aria-label="Toggle dark mode"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
